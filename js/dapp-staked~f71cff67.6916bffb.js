(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["dapp-staked~f71cff67"],{"0143":function(t,e,a){t.exports=a.p+"img/icon-dapp-stake.21f5fa37.svg"},"1f5f":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("the-wrapper-dapp",{attrs:{"is-new-header":!0,"dapp-img":t.headerImg,"banner-text":t.header,"tab-items":t.tabs,"active-tab":t.activeTab,"external-contents":"","on-tab":t.tabChanged,"valid-networks":t.validNetworks},scopedSlots:t._u([{key:"HeaderBody",fn:function(){return[a("v-divider",{staticClass:"textMedium my-3"}),a("div",{staticClass:"d-flex flex-wrap align-center justify-center"},[a("div",{staticClass:"text-uppercase textMedium--text font-weight-bold"},[t._v(" Total Staked: "),a("span",{staticClass:"greenPrimary--text"},[t._v(t._s(t.totalStaked))])]),a("v-icon",{attrs:{color:"textMedium"}},[t._v("mdi-circle-medium")]),a("div",{staticClass:"text-uppercase textMedium--text font-weight-bold"},[t._v(" Current APR: "),a("span",{staticClass:"greenPrimary--text"},[t._v(t._s(t.currentAprFormatted))])])],1),a("v-btn-toggle",{staticClass:"d-flex align-center justify-center mt-3 white--text",attrs:{mandatory:"",borderless:"","active-class":"expandHeader font-weight-bold","background-color":"transparent"},model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},[a("v-btn",{staticClass:"px-md-9 white--text text-transform--initial",class:0===t.activeTab?"staked-tab-active":"staked-tab-inactive",attrs:{color:""}},[t._v(" New stake ")]),a("v-btn",{class:["px-md-9 white--text text-transform--initial d-flex  flex-column align-center",1===t.activeTab?"staked-tab-active":"staked-tab-inactive"],attrs:{color:""}},[a("div",[a("div",{class:["white--text",1===t.activeTab?"font-weight-medium":""]},[t._v(" My stake ")]),t.loadingValidators?t._e():a("div",{staticClass:"mew-caption textLight--text"},[t._v(" "+t._s(t.loadingValidators?"--":t.myETHTotalStaked)+" ")])])])],1)]},proxy:!0},{key:"HeaderRight",fn:function(){return[a("div",{staticClass:"text-right"},[a("a",{staticClass:"greenPrimary--text font-weight-medium text-right",attrs:{href:t.getArticle("stake-eth2-mew-web"),target:"_blank"}},[t._v(" New to staking? Learn more "),a("v-icon",{staticClass:"ml-1",attrs:{small:"",color:"greenPrimary"}},[t._v("mdi-open-in-new")])],1)])]},proxy:!0},{key:"tabContent1",fn:function(){return[a("v-sheet",{staticClass:"mx-auto",attrs:{"min-height":"500px","max-width":"700px",color:"transparent"}},[a("staked-stepper",{ref:"stakedStepper",attrs:{"current-apr":t.handlerStaked.apr,"start-provision":t.startProvision,"polling-status":t.pollingStatus},on:{readyToStake:t.sendTransaction}})],1)]},proxy:!0},{key:"tabContent2",fn:function(){return[a("v-sheet",{staticClass:"py-13 mx-auto",attrs:{"min-height":"500px","max-width":"700px",color:"transparent"}},[a("staked-status",{attrs:{"tx-receipt":t.handlerStaked.txReceipt,"pending-hash":t.pendingTxHash,validators:t.validators,loading:t.loadingValidators,amount:t.amount,"refetch-validators":t.refetchValidators}})],1)]},proxy:!0}])})},i=[],n=a("2f62"),r=a("4223");const o={STAKED:{NAME:"Staked",PATH:"staked"},STATUS:{NAME:"StakedStatus",PATH:"status"}};var d=a("ac8e"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"staked-status-container mx-auto"},[a("withdrawal-popup",{attrs:{reset:t.closeWithdrawal,"open-withdrawal-modal":t.openWithdrawalModal,"selected-validator":t.selectedValidator}}),a("exit-popup",{attrs:{"close-modal":t.closeExit,"open-exit-modal":t.openExitModal,"selected-validator":t.selectedValidator}}),t.loading?a("div",[a("v-skeleton-loader",{attrs:{width:"150px",type:"list-item"}}),t._l(3,(function(t){return a("v-skeleton-loader",{key:t,staticClass:"mb-4",attrs:{height:"100px",type:"image"}})}))],2):t._e(),t.loading?t._e():a("div",[0===t.validators.length&&0===t.justStakedValidator.length||0===t.allPendingValidators.length&&0===t.activeValidators.length&&0===t.exitedValidators.length?a("div",[t._v(" You are currently not staking any eth. ")]):t._e(),t.allPendingValidators.length>0?a("div",{staticClass:"pb-8"},[a("span",{staticClass:"mew-heading-3"},[t._v("Pending")]),t._l(t.allPendingValidators,(function(e,s){return a("div",{key:e+s,staticClass:"mt-4 d-flex flex-column align-center cursor-pointer justify-space-between"},[a("div",{class:["rounded-t-lg header-container greyLight pa-5 full-width d-flex flex-row align-center justify-space-between",t.isExpanded(s)?"rounded-t-lg":"rounded-lg"],on:{click:function(e){return t.expand(s)}}},[a("div",{staticClass:"left-container d-flex"},[a("img",{attrs:{src:t.iconETHNavy,height:"22",alt:"ethereum"}}),a("div",{staticClass:"ml-3"},[a("div",{staticClass:"mew-heading-3"},[t._v(" "+t._s(e.amount)+" "),a("span",{staticClass:"mew-caption"},[t._v("ETH")])]),a("div",{staticClass:"textMedium--text mt-1"},[t._v(" "+t._s(e.amountFiat)+" ")])])]),a("div",[a("v-progress-circular",{attrs:{size:"18",width:"2",color:"greenPrimary",indeterminate:""}}),a("v-icon",{staticClass:"ml-5",attrs:{color:"greyPrimary",size:"22"}},[t._v(t._s(t.isExpanded(s)?"mdi-chevron-up":"mdi-chevron-down"))])],1)]),t.isExpanded(s)?a("div",{staticClass:"border-container rounded-b-lg full-width pa-5"},[a("div",{staticClass:"mt-5 mb-8 font-weight-bold"},[t._v("More Info")]),e.status.toLowerCase()===t.STATUS_TYPES.CREATED?a("div",{staticClass:"d-flex"},[a("v-progress-circular",{staticClass:"ml-4",attrs:{size:"18",width:"2",color:"greenPrimary",indeterminate:""}}),a("span",{staticClass:"ml-2"},[t._v(t._s(!e.justStaked||t.txReceipt?"Processing":"Sending"))])],1):t._e(),e.status.toLowerCase()===t.STATUS_TYPES.DEPOSITED||e.status.toLowerCase()===t.STATUS_TYPES.PENDING?a("div",{staticClass:"d-flex"},[a("v-icon",{attrs:{size:"20",color:"greenPrimary"}},[t._v("mdi-check-circle")]),a("span",{staticClass:"ml-2"},[t._v("Deposited")])],1):t._e(),e.status.toLowerCase()===t.STATUS_TYPES.FAILED?a("div",{staticClass:"d-flex align-center"},[a("v-icon",{attrs:{size:"20",color:"redPrimary"}},[t._v("mdi-close-circle")]),a("span",{staticClass:"ml-2"},[t._v("Failed")])],1):t._e(),a("div",{staticClass:"d-flex mt-6"},[e.etherscanUrl?a("a",{staticClass:"font-weight-medium",attrs:{rel:"noopener noreferrer",href:e.etherscanUrl,target:"_blank"}},[t._v("View on Etherscan "),a("v-icon",{attrs:{color:"greenPrimary",size:"14"}},[t._v("mdi-open-in-new")])],1):t._e(),e.ethVmUrl&&!t.onGoerli?a("a",{staticClass:"font-weight-medium ml-5",attrs:{rel:"noopener noreferrer",href:e.ethVmUrl,target:"_blank"}},[t._v("View on EthVM "),a("v-icon",{attrs:{color:"greenPrimary",size:"14"}},[t._v("mdi-open-in-new")])],1):t._e()]),e.status.toLowerCase()===t.STATUS_TYPES.DEPOSITED||e.status.toLowerCase()===t.STATUS_TYPES.PENDING?a("div",{staticClass:"d-flex flex-column mt-9"},[a("div",{staticClass:"d-flex align-center"},[a("v-progress-circular",{attrs:{size:"18",width:"2",color:"greenPrimary",indeterminate:""}}),a("span",{staticClass:"ml-2"},[t._v("Waiting for validator activation")])],1),a("span",{staticClass:"mew-label font-weight-medium textLight--text mt-1"},[t._v("Estimated wait time: "+t._s(e.estimatedWaitTime)+" ")]),e.url?a("a",{staticClass:"font-weight-medium mt-5",attrs:{rel:"noopener noreferrer",href:e.url,target:"_blank"}},[t._v("Eth2 Beacon Chain transactions "),a("v-icon",{attrs:{color:"greenPrimary",size:"14"}},[t._v("mdi-open-in-new")])],1):t._e()]):t._e()]):t._e()])}))],2):t._e(),t.activeValidators.length>0?a("div",[a("span",{staticClass:"mew-heading-3"},[t._v("Active")]),t._l(t.activeValidators,(function(e,s){return a("div",{key:e+s,staticClass:"border-container rounded-lg pa-5 mt-4 d-flex justify-space-between"},[a("div",{staticClass:"left-container d-flex"},[a("img",{attrs:{src:t.iconETHNavy,height:"26",alt:"ethereum"}}),a("div",{staticClass:"left-container-details ml-3"},[a("div",{staticClass:"mew-heading-2"},[t._v(" "+t._s(e.totalBalanceETH+" ETH")+" ")]),a("div",{staticClass:"font-weight-medium mt-1"},[t._v(" "+t._s(e.totalBalanceFiat)+" ")]),a("div",{staticClass:"textLight--text mt-2"},[t._v(" Earned "),a("span",{staticClass:"greenPrimary--text"},[t._v(t._s(t.convertTotalReward(e.detailed_balance_info.total_reward_and_fees,e.detailed_balance_info.conversion_factor_power)+" ETH"))]),a("br"),t._v(" Average APR "+t._s(e.averageApr)+" ")]),a("div",{staticClass:"mt-1 d-flex"},[a("mew-button",{staticClass:"mr-1",attrs:{title:e.withdrawal_set?"Already set":"Set withdrawal address",disabled:e.withdrawal_set,"btn-size":"medium"},nativeOn:{click:function(a){return function(){t.openWithdrawal(e)}.apply(null,arguments)}}}),a("mew-button",{attrs:{title:"\n                  Exit stake\n                ",disabled:!e.can_exit,"btn-size":"medium"},nativeOn:{click:function(a){return function(){t.openExit(e)}.apply(null,arguments)}}})],1)])]),a("div",[a("a",{staticClass:"font-weight-medium",attrs:{rel:"noopener noreferrer",href:e.url,target:"_blank"}},[t._v("View validator "),a("v-icon",{attrs:{color:"greenPrimary",size:"14"}},[t._v("mdi-open-in-new")])],1)])])}))],2):t._e(),t.exitedValidators.length>0?a("div",[a("span",{staticClass:"mew-heading-3"},[t._v("Exited")]),t._l(t.exitedValidators,(function(e,s){return a("div",{key:e+s,staticClass:"border-container rounded-lg pa-5 mt-4 d-flex justify-space-between"},[a("div",{staticClass:"left-container d-flex"},[a("img",{attrs:{src:t.iconETHNavy,height:"26",alt:"ethereum"}}),a("div",{staticClass:"left-container-details ml-3"},[a("div",{staticClass:"mew-heading-2"},[t._v(" Validator #"+t._s(e.validator_index)+" ")]),a("div",{staticClass:"font-weight-medium mt-1"},[t._v(" "+t._s(e.status.toLowerCase()===t.STATUS_TYPES.ACTIVE||e.status.toLowerCase()===t.STATUS_TYPES.EXITING?"Exited, in queue for withdrawal":"Exited and withdrawn")+" ")]),t._m(0,!0),a("div",{staticClass:"mt-1 d-flex"},[a("mew-button",{staticClass:"mr-1",attrs:{title:e.withdrawal_set?"Already set":"Set withdrawal address",disabled:e.withdrawal_set,"btn-size":"medium"},nativeOn:{click:function(a){return function(){t.openWithdrawal(e)}.apply(null,arguments)}}}),a("mew-button",{attrs:{title:"\n                  Exit stake\n                ",disabled:!0,"btn-size":"medium"},nativeOn:{click:function(a){return function(){t.openExit(e)}.apply(null,arguments)}}})],1)])]),a("div",[a("a",{staticClass:"font-weight-medium",attrs:{rel:"noopener noreferrer",href:e.url,target:"_blank"}},[t._v("View validator "),a("v-icon",{attrs:{color:"greenPrimary",size:"14"}},[t._v("mdi-open-in-new")])],1)])])}))],2):t._e()])],1)},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"textLight--text mt-2"},[t._v(" Earned "),a("span",{staticClass:"greenPrimary--text"},[t._v(" -- ETH ")]),a("br"),t._v(" Average APR --- ")])}],h=(a("14d9"),a("13d5"),a("901e")),u=a.n(h),p=a("c1df"),m=a.n(p),v=a("7f65"),w=a("4a2b"),g=a("913e"),f=a("56e8"),b=a.n(f),x={components:{WithdrawalPopup:()=>Promise.all([a.e("chunk-5cc6affa"),a.e("chunk-70855e1c")]).then(a.bind(null,"048b")),ExitPopup:()=>a.e("chunk-c7efed82").then(a.bind(null,"e42c"))},props:{validators:{type:Array,default:()=>[]},pendingHash:{type:String,default:""},txReceipt:{type:Boolean,default:!0},loading:{type:Boolean,default:!0},amount:{type:Number,default:0},refetchValidators:{type:Function,default:()=>{}}},data(){return{iconETHNavy:b.a,expanded:0,STATUS_TYPES:w["b"],openWithdrawalModal:!1,openExitModal:!1,selectedValidator:{}}},computed:{...Object(n["e"])("wallet",["address"]),...Object(n["e"])("global",["preferredCurrency"]),...Object(n["e"])("external",["currencyRate"]),...Object(n["e"])("stakedStore",["validatorIndex","withdrawalValidatorIndex"]),...Object(n["c"])("external",["fiatValue"]),...Object(n["c"])("global",["network","getFiatValue"]),validatorsRaw(){const t=[];return this.validators.map(e=>{e.raw.map(e=>{t.push(e)})}),t},activeValidators(){return this.validatorsRaw.reduce((t,e)=>{if(e.status.toLowerCase()===w["b"].ACTIVE){const a=this.convertToEth1(e.detailed_balance_info.balance,e.detailed_balance_info.conversion_factor_power),s=new u.a(a).minus(e.amount),i=this.findWithdrawalValidator(e.validator_index,!1);i||t.push(Object.assign({},e,{url:`${v["a"].network[this.network.type.name].url}${e.validator_index}`,earned:Object(d["c"])(s).value,totalBalanceETH:Object(d["c"])(a).value,totalBalanceFiat:this.getFiatValue(new u.a(a).times(this.fiatValue)),averageApr:Object(d["g"])(this.getAverageApr(e.created,s,e.amount)).value,withdrawal_set:this.findValidatorIndex(e.validator_index)||e.withdrawal_credentials_are_eth1Address,can_exit:this.findWithdrawalValidator(e.validator_index,e.can_exit)}))}return t},[])},exitedValidators(){return this.validatorsRaw.reduce((t,e)=>{if(e.status.toLowerCase()===w["b"].ACTIVE||e.status.toLowerCase()===w["b"].EXITED||e.status.toLowerCase()===w["b"].EXITING){const a=this.convertToEth1(e.detailed_balance_info.balance,e.detailed_balance_info.conversion_factor_power),s=new u.a(a).minus(e.amount),i=this.findWithdrawalValidator(e.validator_index,!0);i&&e.status.toLowerCase()!==w["b"].EXITED&&e.status.toLowerCase()!==w["b"].EXITING||t.push(Object.assign({},e,{url:`${v["a"].network[this.network.type.name].url}${e.validator_index}`,earned:Object(d["c"])(s).value,totalBalanceETH:Object(d["c"])(a).value,totalBalanceFiat:this.getFiatValue(new u.a(a).times(this.fiatValue)),averageApr:Object(d["g"])(this.getAverageApr(e.created,s,e.amount)).value,withdrawal_set:!0,can_exit:!1}))}return t},[])},pendingValidators(){return this.validatorsRaw.reduce((t,e)=>{const a=864e5,s=new Date(e.created).getTime()+a,i=(new Date).getTime()<=s;return(e.status.toLowerCase()===w["b"].DEPOSITED||e.status.toLowerCase()===w["b"].PENDING||e.status.toLowerCase()===w["b"].FAILED||e.status.toLowerCase()===w["b"].CREATED&&i)&&t.push({amount:Object(d["c"])(e.amount).value,amountFiat:this.getFiatValue(new u.a(e.amount).times(this.fiatValue)),status:e.status,ethVmUrl:v["a"].network[this.network.type.name].ethvmAddrUrl+this.address,etherscanUrl:v["a"].network[this.network.type.name].etherscanAddrUrl+this.address,url:e.address?v["a"].network[this.network.type.name].url+"0x"+e.address:"",estimatedWaitTime:e.queue&&e.queue.estimated_activation_timestamp?this.getEstimatedDuration(e.queue.estimated_activation_timestamp):"~"}),t},[])},justStakedValidator(){return this.pendingHash?[{amount:Object(d["c"])(this.amount).value,amountFiat:this.getFiatValue(new u.a(this.amount).times(this.fiatValue)),justStaked:!0,status:w["b"].CREATED,ethVmUrl:this.pendingHash?v["a"].network[this.network.type.name].ethvmTxUrl+this.pendingHash:null,etherscanUrl:this.pendingHash?v["a"].network[this.network.type.name].etherscanTxUrl+this.pendingHash:null}]:[]},allPendingValidators(){return this.justStakedValidator.concat(this.pendingValidators)}},methods:{findValidatorIndex(t){const e=!!this.validatorIndex.find(e=>t===e);return!!e},findWithdrawalValidator(t,e){const a=!!this.withdrawalValidatorIndex.find(e=>t===e);return a?!a:e},convertTotalReward(t,e){const a=u()(t).div(u()(10).pow(e)).toString(),s=u()(a).gt(0)?a:u()(0).toString();return s.length>10?s.slice(0,9)+"...":s},reset(){this.selectedValidator={},this.refetchValidators()},closeWithdrawal(){this.openWithdrawalModal=!1,this.reset()},closeExit(){this.openExitModal=!1,this.reset()},openWithdrawal(t){this.selectedValidator=t,this.openWithdrawalModal=!0},openExit(t){this.selectedValidator=t,this.openExitModal=!0},convertToEth1(t,e=9){return new u.a(t).div(new u.a(10).pow(e))},getAverageApr(t,e,a){if(e.lte(0))return u()(0);const s=m.a.utc(),i=m.a.utc(t),n=s.diff(i,"days"),r=u()(e).div(a),o=u()(r).dividedBy(n),d=o.times(365).times(100);return new u.a(d)},expand(t){this.expanded=this.expanded!==t?t:null},isExpanded(t){return this.expanded===t},onGoerli(){return this.network.type.name===g["GOERLI"].name},getEstimatedDuration(t){const e=m()().utc(),a=m()(t);return e.unix()===a.unix()?"Should activate momentarily":`${a.diff(e,"days")} days ${a.diff(e,"hours")} hours and ${a.diff(e,"minutes")} minutes`}}},_=x,T=(a("e029"),a("2877")),k=Object(T["a"])(_,l,c,!1,null,"515143c8",null),C=k.exports,y={name:"TheStakedLayout",components:{TheWrapperDapp:()=>Promise.resolve().then(a.bind(null,"580f")),StakedStepper:()=>a.e("chunk-2d21ea8e").then(a.bind(null,"d705")),"staked-status":C},data(){return{validNetworks:r["a"],headerImg:a("0143"),amount:0,header:{title:"Ethereum 2.0 staking",subtext:"Stake on Ethereum 2.0 and earn continuous rewards for providing a public good to the community.",subtextClass:"textMedium--text"},activeTab:0,handlerStaked:{},tabs:[{name:"Stake",route:{name:o.STAKED.NAME},id:0},{name:"Status",route:{name:o.STATUS.NAME,path:o.STATUS.PATH},id:1}]}},computed:{...Object(n["e"])("wallet",["web3","address"]),...Object(n["c"])("global",["network"]),...Object(n["c"])("article",["getArticle"]),myETHTotalStaked(){return Object(d["c"])(this.handlerStaked.myETHTotalStaked).value+" ETH"},totalStaked(){return Object(d["c"])(this.handlerStaked.totalStaked).value+" ETH"},currentAprFormatted(){return this.handlerStaked.apr>0?Object(d["g"])(this.handlerStaked.apr).value:"--"},pollingStatus(){return this.handlerStaked.pollingStatus},validators(){return this.handlerStaked.myValidators},loadingValidators(){return this.handlerStaked.loadingValidators},pendingTxHash(){return this.handlerStaked.pendingTxHash},isValidNetwork(){const t=this.network.type.chainID,e=this.validNetworks.filter(e=>e.chainID===t);return e.length>0}},watch:{$route(){this.detactUrlChangeTab()},pendingTxHash(t){""!==t&&(this.activeTab=1),this.$refs.stakedStepper&&this.$refs.stakedStepper.reset()},address(t){this.handlerStaked.address=t,this.$refs.stakedStepper&&this.$refs.stakedStepper.reset()}},mounted(){this.detactUrlChangeTab(),this.isValidNetwork&&(this.handlerStaked=new w["c"](this.web3,this.network,this.address))},methods:{detactUrlChangeTab(){const t=this.$route.name;t===o.STATUS.NAME?this.activeTab=this.tabs[1].id:this.activeTab=this.tabs[0].id},tabChanged(t){this.activeTab=t},startProvision(t){return this.handlerStaked.startProvision(t)},sendTransaction(t){this.handlerStaked.sendTransaction(),this.amount=t},refetchValidators(){this.handlerStaked.getValidators()}}},E=y,S=(a("54cc"),Object(T["a"])(E,s,i,!1,null,"75579cc4",null));e["default"]=S.exports},"4a2b":function(t,e,a){"use strict";(function(t){a.d(e,"a",(function(){return p})),a.d(e,"b",(function(){return m})),a.d(e,"c",(function(){return v}));a("13d5"),a("14d9");var s=a("bc3a"),i=a.n(s),n=a("901e"),r=a.n(n),o=a("5ba3"),d=a("7f65"),l=a("8e50"),c=a("9b88"),h=a("2623");const u=[{inputs:[],name:"get_deposit_count",outputs:[{internalType:"bytes",name:"",type:"bytes"}],stateMutability:"view",type:"function"}],p=[{inputs:[{internalType:"uint256",name:"numValidators",type:"uint256"}],name:"getFees",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}],m={PENDING:"pending",ACTIVE:"active",CREATED:"created",DEPOSITED:"deposited",FAILED:"failed",EXITED:"exited",EXITING:"exiting"};class v{constructor(t,e,a){this.web3=t,this.network=e,this.address=a,this.totalStaked="",this.apr="",this.validatorsCount="",this.pollingStatus={},this.transactionData={},this.myValidators=[],this.loadingValidators=!1,this.myETHTotalStaked=0,this.pendingTxHash="",this.txReceipt=!1,this.endpoint=d["a"].network[this.network.type.name].endpoint,this.getTotalStakedAndAPR(),this.getValidators()}getTotalStakedAndAPR(){this.eth2ContractAddress=d["a"].network[this.network.type.name].depositAddress;const e=new this.web3.eth.Contract(u,this.eth2ContractAddress);e.methods.get_deposit_count().call().then(e=>{const a=Object(o["toBN"])("0x"+t.from(e.substr(2),"hex").reverse().toString("hex"));this.totalStaked=a.muln(32).toString(),this.apr=new r.a(Object(l["a"])({totalAtStake:this.totalStaked})).times(100).toFixed()}).catch(t=>{Object(c["e"])(t,{},c["a"])})}getExitableValidators(t){return this.loadingValidators=!0,i.a.get(`${this.endpoint}/history?withdrawalCredentials=${this.address}`,{header:{"Content-Type":"application/json"}}).then(e=>{let a=[];if(t.length>0){const s=t.reduce((t,a)=>{const s=a.raw.filter(t=>{let a;return e.data.forEach(e=>{e.raw.forEach(e=>{e.decoded.pubkey!==t.decoded.pubkey||(a=!0)})}),a||(t["can_exit"]=!1),!a});return a.raw=s,t.push(a),t},[]),i=e.data.map(t=>{const e=t.raw.map(t=>(t["can_exit"]=t.withdrawal_credentials_are_eth1Address,t));return t.raw=e,Object.assign({},t)});a=s.concat(i)}else a=e.data.map(t=>{const e=t.raw.map(t=>(t["can_exit"]=t.withdrawal_credentials_are_eth1Address,t));return t.raw=e,Object.assign({},t)});this.myValidators=a,this.loadingValidators=!1}).catch(()=>{this.myValidators=t.map(t=>{const e=t.raw.map(t=>(t["can_exit"]=!1,t));return t.raw=e,Object.assign({},t)}),this.loadingValidators=!1})}getValidators(){return this.loadingValidators=!0,i.a.get(`${this.endpoint}/history?address=${this.address}`,{header:{"Content-Type":"application/json"}}).then(t=>{this.myETHTotalStaked=t.data.reduce((t,e)=>{const a=e.raw[0],s=a.status.toLowerCase()===m.ACTIVE&&a.balance?this.convertToEth1(a.balance).toFixed():0;return new r.a(t).plus(s)},0),this.getExitableValidators(t.data)}).catch(t=>{t.response&&404===t.response.status&&"No matching history found"===t.response.data.msg?this.getExitableValidators([]):(this.loadingValidators=!1,this.myValidators=[],Object(c["e"])(t,{},c["a"]))})}async startProvision(t){this.validatorsCount=t.count,await i.a.post(this.endpoint+"/v2/provision",{address:this.address,eth1Address:t.eth2Address,validatorsCount:t.count},{header:{"Content-Type":"application/json"}}).then(t=>t&&t.data.provisioning_request_uuid?this.startPolling(t.data.provisioning_request_uuid):Object(c["e"])(this.$t("dappsStaked.error-try-again"),{},c["a"])).catch(t=>{this.pollingStatus={success:!1,error:t}})}startPolling(t){let e=!0;const a=setInterval(()=>{if(e)return e=!1,i.a.get(`${this.endpoint}/status?provisioning_request_uuid=${t}`,{header:{"Content-Type":"application/json"}}).then(t=>{e=!0,t&&t.data&&t.data.raw.length===parseInt(this.validatorsCount)&&(this.pollingStatus={success:!0},this.transactionData=t.data.transaction,clearInterval(a))}).catch(t=>{e=!0,t.response&&424===t.response.status&&"Not all validators have been provisioned"===t.response.data.msg||t.response&&404===t.response.status&&"Requested provisioning_request_uuid not found"===t.response.data.msg||(this.pollingStatus={success:!1,error:t.response})})},5e3)}sendTransaction(){this.transactionData.from=this.address,this.transactionData.to=d["a"].network[this.network.type.name].batchContract,this.web3.eth.sendTransaction(this.transactionData).on("transactionHash",t=>{this.pendingTxHash=t}).on("receipt",()=>{this.txReceipt=!0}).catch(t=>{const e=Object(h["a"])(t);e&&Object(c["e"])(t,{},c["a"])})}convertToEth1(t){return new r.a(t).div(new r.a(10).pow(9))}}}).call(this,a("1c35").Buffer)},"54cc":function(t,e,a){"use strict";a("9dc7")},"56e8":function(t,e,a){t.exports=a.p+"img/eth-dark-navy.ad11058d.svg"},"63f3":function(t,e,a){},"7f65":function(t,e,a){"use strict";e["a"]={network:{GOERLI:{depositAddress:"0xff50ed3d0ec03aC01D4C79aAd74928BFF48a7b2b",endpoint:"https://stakedtest.mewapi.io",batchContract:"0xb483b22ee2097ee081fb2ce7aefcc776889f11a9",url:"https://goerli.beaconcha.in/validator/",etherscanTxUrl:"https://goerli.etherscan.io/tx/",etherscanAddrUrl:"https://goerli.etherscan.io/address/"},ETH:{depositAddress:"0x00000000219ab540356cBB839Cbe05303d7705Fa",endpoint:"https://staked.mewapi.io",batchContract:"0xF243A92eB7D4B4F6A00A57888B887bd01ec6fd12",url:"https://beaconcha.in/validator/",etherscanTxUrl:"https://etherscan.io/tx/",ethvmTxUrl:"https://www.ethvm.com/tx/",etherscanAddrUrl:"https://etherscan.io/address/",ethvmAddrUrl:"https://www.ethvm.com/address/"}}}},"8e50":function(t,e,a){"use strict";const s=({slotTimeInSec:t=12,slotsInEpoch:e=32,baseRewardFactor:a=64,totalAtStake:s=1e6,baseRewardsPerEpoch:i=4,baseRewardsPropotionalValidators:n=3,averageNetworkPctOnline:r=.95,oneSlotLatePenalty:o=.0156,vaildatorUptime:d=.99,validatorDeposit:l=32})=>{const c=31556908.8,h=c/(t*e),u=32e9*a/(1e9*s)**.5/i,p=4*u,m=u*n*r,v=.125*u*r,w=r+r*(1-r)*(1-o)+r*(1-r)**2*(1-2*o),g=.875*u*w,f=m+v+g,b=f*d,x=p*(1-d),_=h*(b-x);return _/1e9/l};e["a"]=s},"9dc7":function(t,e,a){},e029:function(t,e,a){"use strict";a("63f3")}}]);
//# sourceMappingURL=../sourcemaps/js/dapp-staked~f71cff67.6916bffb.js.map