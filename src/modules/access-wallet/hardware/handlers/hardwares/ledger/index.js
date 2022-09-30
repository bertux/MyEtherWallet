import Ledger from '@ledgerhq/hw-app-eth';

import { byContractAddressAndChainId } from '@ledgerhq/hw-app-eth/erc20';
import { Transaction, FeeMarketEIP1559Transaction } from '@ethereumjs/tx';
import webUsbTransport from '@ledgerhq/hw-transport-webusb';

import openApp from '@ledgerhq/live-common/lib/hw/openApp';
import getAppAndVersion from '@ledgerhq/live-common/lib/hw/getAppAndVersion';
import attemptToQuitApp from '@ledgerhq/live-common/lib/hw/attemptToQuitApp';

import { appNames } from './config';
import WALLET_TYPES from '@/modules/access-wallet/common/walletTypes';
import bip44Paths from '@/modules/access-wallet/hardware/handlers/bip44';
import HDWalletInterface from '@/modules/access-wallet/common/HDWalletInterface';
import * as HDKey from 'hdkey';
import platform from 'platform';
import store from '@/core/store';
import commonGenerator from '@/core/helpers/commonGenerator';
import {
  getSignTransactionObject,
  getBufferFromHex,
  sanitizeHex,
  calculateChainIdFromV,
  eip1559Params
} from '@/modules/access-wallet/common/helpers';
import toBuffer from '@/core/helpers/toBuffer';
import errorHandler from './errorHandler';
import Vue from 'vue';
import ledger from '@/assets/images/icons/wallets/ledger.svg';
import { rlp } from 'ethereumjs-util';
import TransportWebBLE from '@ledgerhq/hw-transport-web-ble';
import { EventBus } from '@/core/plugins/eventBus.js';
import { Toast, WARNING } from '@/modules/toast/handler/handlerToast';

const NEED_PASSWORD = false;

class ledgerWallet {
  constructor() {
    this.identifier = WALLET_TYPES.LEDGER;
    this.isHardware = true;
    this.needPassword = NEED_PASSWORD;
    this.supportedPaths = bip44Paths[WALLET_TYPES.LEDGER];
    this.meta = {
      name: 'Ledger',
      img: {
        type: 'img',
        value: ledger
      }
    };
  }
  async init(basePath, bluetooth) {
    this.basePath = basePath ? basePath : this.supportedPaths[0].path;
    this.isHardened = this.basePath.toString().split('/').length - 1 === 2;
    this.transport = bluetooth
      ? await getLedgerXTransport()
      : await getLedgerTransport();
    const ledgerApp = store.getters['wallet/getLedgerApp'];
    try {
      this.openedApp = await (await getAppAndVersion(this.transport)).name;
      if (this.openedApp !== 'BOLOS' && this.openedApp !== ledgerApp.name) {
        attemptToQuitApp(this.transport, this.openedApp);
      }
      if (this.openedApp !== ledgerApp.name) {
        Toast('Confirm selection on ledger', undefined, WARNING);
        await openApp(this.transport, appNames[ledgerApp.value]);
        this.transport = bluetooth
          ? await getLedgerXTransport()
          : await getLedgerTransport();
      }
    } catch (er) {
      if (this.openedApp === undefined) {
        if (er.message.includes('transferOut'))
          throw new Error(`App has switched. Please retry again.`);
      } else if (er.message.includes('App switch')) {
        throw new Error(`App has switched. Please retry again.`);
      } else if (this.openedApp !== appNames[ledgerApp.value]) {
        throw new Error(`missing app ${ledgerApp.value}`);
      } else throw new Error(er);
    }

    this.ledger = new Ledger(this.transport);
    if (!this.isHardened) {
      const rootPub = await getRootPubKey(this.ledger, this.basePath);
      this.hdKey = new HDKey();
      this.hdKey.publicKey = Buffer.from(rootPub.publicKey, 'hex');
      this.hdKey.chainCode = Buffer.from(rootPub.chainCode, 'hex');
    }
  }
  async getAccount(idx) {
    let derivedKey, accountPath;
    if (this.isHardened) {
      const rootPub = await getRootPubKey(
        this.ledger,
        this.basePath + '/' + idx + "'"
      );
      const hdKey = new HDKey();
      hdKey.publicKey = Buffer.from(rootPub.publicKey, 'hex');
      hdKey.chainCode = Buffer.from(rootPub.chainCode, 'hex');
      derivedKey = hdKey.derive('m/0/0');
      accountPath = this.basePath + '/' + idx + "'" + '/0/0';
    } else {
      derivedKey = this.hdKey.derive('m/' + idx);
      accountPath = this.basePath + '/' + idx;
    }
    const txSigner = async txParams => {
      const networkId = store.getters['global/network'].type.chainID;
      const tokenInfo = byContractAddressAndChainId(txParams.to, networkId);
      if (tokenInfo) await this.ledger.provideERC20TokenInformation(tokenInfo);
      const legacySigner = async _txParams => {
        const tx = new Transaction(_txParams, {
          common: commonGenerator(store.getters['global/network'])
        });
        const message = tx.getMessageToSign(false);
        const serializedMessage = rlp.encode(message);
        const result = await this.ledger.signTransaction(
          accountPath,
          serializedMessage.toString('hex')
        );
        // EIP155 support. check/recalc signature v value.
        const rv = parseInt(result.v, 16);
        let cv = networkId * 2 + 35;
        if (rv !== cv && (rv & cv) !== rv) {
          cv += 1; // add signature v bit.
        }
        _txParams.v = '0x' + cv.toString(16);
        _txParams.r = '0x' + result.r;
        _txParams.s = '0x' + result.s;
        const signedChainId = calculateChainIdFromV(_txParams.v);
        if (signedChainId !== networkId)
          throw new Error(
            Vue.$i18n.t('errorsGlobal.invalid-network-id-sig', {
              got: signedChainId,
              expected: networkId
            }),
            'InvalidNetworkId'
          );
        return getSignTransactionObject(Transaction.fromTxData(_txParams));
      };
      if (store.getters['global/isEIP1559SupportedNetwork']) {
        const feeMarket = store.getters['global/gasFeeMarketInfo'];
        const _txParams = Object.assign(
          eip1559Params(txParams.gasPrice, feeMarket),
          txParams
        );
        delete _txParams.gasPrice;
        const tx = FeeMarketEIP1559Transaction.fromTxData(_txParams, {
          common: commonGenerator(store.getters['global/network'])
        });
        const message = tx.getMessageToSign(false);
        try {
          // eslint-disable-next-line no-unused-vars
          const result = await this.ledger.signTransaction(
            accountPath,
            message.toString('hex')
          );
          _txParams.v = '0x' + result.v;
          _txParams.r = '0x' + result.r;
          _txParams.s = '0x' + result.s;
          return getSignTransactionObject(
            FeeMarketEIP1559Transaction.fromTxData(_txParams)
          );
        } catch (e) {
          //old ledger eth app version
          if (e.message === 'Ledger device: UNKNOWN_ERROR (0x6501)')
            return legacySigner(txParams);
          throw e;
        }
      } else {
        return legacySigner(txParams);
      }
    };
    const msgSigner = async msg => {
      const result = await this.ledger.signPersonalMessage(
        accountPath,
        toBuffer(msg).toString('hex')
      );
      const v = parseInt(result.v, 10) - 27;
      const vHex = sanitizeHex(v.toString(16));
      return Buffer.concat([
        getBufferFromHex(result.r),
        getBufferFromHex(result.s),
        getBufferFromHex(vHex)
      ]);
    };
    const displayAddress = async () => {
      await this.ledger.getAddress(accountPath, true, false);
    };
    return new HDWalletInterface(
      accountPath,
      derivedKey.publicKey,
      this.isHardware,
      this.identifier,
      errorHandler,
      txSigner,
      msgSigner,
      displayAddress,
      this.meta
    );
  }
  getCurrentPath() {
    return this.basePath;
  }
  getSupportedPaths() {
    return this.supportedPaths;
  }
}
const createWallet = async (basePath, bluetooth = false) => {
  const _ledgerWallet = new ledgerWallet();
  await _ledgerWallet.init(basePath, bluetooth);
  return _ledgerWallet;
};
createWallet.errorHandler = errorHandler;

const isWebUsbSupported = async () => {
  const isSupported = await webUsbTransport.isSupported();
  return isSupported && platform.name !== 'Opera';
};

const getLedgerTransport = async () => {
  let transport;
  const support = await isWebUsbSupported();
  if (support) {
    transport = await webUsbTransport.openConnected().then(res => {
      if (!res) return webUsbTransport.create();
      return res;
    });
  } else {
    throw new Error('WebUsb not supported.  Please try a different browser.');
  }
  return transport;
};

const isWebBLESupported = async () => {
  const isSupported = await TransportWebBLE.isSupported();
  return isSupported && platform.name !== 'Opera';
};

const getLedgerXTransport = async () => {
  let transport;
  const support = await isWebBLESupported();
  if (support) {
    transport = await TransportWebBLE.create();
    transport.on('disconnect', () => {
      transport = null;
      EventBus.$emit('bleDisconnect');
      createWallet.errorHandler(
        'GATT Server is disconnected. Cannot perform GATT operations.'
      );
    });
  } else {
    throw new Error(
      'Web bluetooth is not supported.  Please try a different browser.'
    );
  }
  return transport;
};

// const connectToApp = async (transport, ledgerApp) => {
//   getDeviceInfo(transport)
//     .then(() => {
//       openApp(transport, appNames[ledgerApp.value])
//         .then(() => true)
//         .catch(() => {
//           throw new Error(
//             `Please make sure you have ${
//               appNames[ledgerApp.value]
//             } App installed on your Ledger`
//           );
//         });
//     })
//     .catch(e => {
//       if (e.message === 'DeviceOnDashboardExpected') {
//         getAppAndVersion(transport).then(appInfo => {
//           if (appInfo.name !== appNames[ledgerApp.value]) {
//             attemptToQuitApp(transport, appInfo.name);
//             openApp(transport, appNames[ledgerApp.value])
//               .then(() => true)
//               .catch(() => {
//                 throw new Error(
//                   `Please make sure you have ${
//                     appNames[ledgerApp.value]
//                   } App installed on your Ledger`
//                 );
//               });
//           }
//         });
//       }
//       throw e;
//     });
// };

const getRootPubKey = async (_ledger, _path) => {
  const pubObj = await _ledger.getAddress(_path, false, true);
  return {
    publicKey: pubObj.publicKey,
    chainCode: pubObj.chainCode
  };
};

export default createWallet;
