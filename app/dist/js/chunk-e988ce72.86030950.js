(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e988ce72"],{1092:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"page-leverafeToLoan"},[s("header",{staticClass:"withdraw-header b-1-cl a-3-bd"},[t._v("\n    "+t._s(t.$t("assets.leverageToLoan.title"))+"\n  ")]),Object.keys(t.messData).length?s("div",{staticClass:"withdraw-details clearfix a-7-bd"},[s("div",{staticClass:"details-left"},[s("div",{staticClass:"symbol b-1-cl"},[t._v(t._s(t.getShowSymbol(t.messData.name)))]),s("div",{staticClass:"numberList clearfix"},[s("ul",{staticClass:"numberList-key"},[s("li",[t._v(t._s(t.$t("assets.leverageToLoan.can"))+" "+t._s(t.getShowCoin(t.messData.baseCoin)))]),s("li",[t._v(t._s(t.$t("assets.leverageToLoan.can"))+" "+t._s(t.getShowCoin(t.messData.quoteCoin)))])]),s("ul",{staticClass:"numberList-value b-1-cl"},[s("li",[s("span",{staticClass:"text"},[t._v(t._s(t._f("fixDFn")(t.messData.baseNormalBalance,this,"base")))]),s("c-button",{attrs:{type:"text",height:"25px",paddingW:"10px",className:"even-button"},on:{click:function(e){return t.transfer(t.messData.baseCoin)}}},[t._v("\n              "+t._s(t.$t("assets.leverageToLoan.transfer")))])],1),s("li",[s("span",{staticClass:"text"},[t._v(t._s(t._f("fixDFn")(t.messData.quoteNormalBalance,this,"quote")))]),s("c-button",{attrs:{type:"text",height:"25px",paddingW:"10px",className:"even-button"},on:{click:function(e){return t.transfer(t.messData.quoteCoin)}}},[t._v("\n              "+t._s(t.$t("assets.leverageToLoan.transfer")))])],1)])]),s("div",{staticClass:"details-warking b-7-cl"},[s("svg",{staticClass:"icon icon-16",staticStyle:{marginRight:"10px"},attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-c_2"}})]),t._v("\n        "+t._s(t.$t("assets.leverageToLoan.warning"))+"\n      ")])]),s("div",{staticClass:"details-right"},[s("div",{staticClass:"coinType"},[s("div",{staticClass:"even"},[s("c-redio",{attrs:{value:t.broCoin===t.messData.baseCoin,name:t.messData.baseCoin},on:{click:t.setBroCoin}}),s("span",{staticClass:"coin",on:{click:function(e){return t.setBroCoin(t.messData.baseCoin)}}},[t._v(t._s(t.getShowCoin(t.messData.baseCoin)))])],1),s("div",{staticClass:"even"},[s("c-redio",{attrs:{value:t.broCoin===t.messData.quoteCoin,name:t.messData.quoteCoin},on:{click:t.setBroCoin}}),s("span",{staticClass:"coin",on:{click:function(e){return t.setBroCoin(t.messData.quoteCoin)}}},[t._v(t._s(t.getShowCoin(t.messData.quoteCoin)))])],1)]),s("ul",{staticClass:"coinDeat"},[s("li",{staticClass:"a-4-bg"},[s("span",{staticClass:"key"},[t._v(t._s(t.$t("assets.leverageToLoan.max")))]),s("span",{staticClass:"value b-1-cl"},[t._v("\n            "+t._s(t._f("fixDFnTwo")(t.broMessage.total,8))+"\n          ")])]),s("li",{staticClass:"a-4-bg"},[s("span",{staticClass:"key"},[t._v(t._s(t.$t("assets.leverageToLoan.borrowed")))]),s("span",{staticClass:"value b-1-cl"},[t._v("\n            "+t._s(t._f("fixDFnTwo")(t.broMessage.borrowed,8))+"\n          ")])]),s("li",{staticClass:"a-4-bg"},[s("span",{staticClass:"key"},[t._v(t._s(t.$t("assets.leverageToLoan.rate")))]),s("span",{staticClass:"value b-1-cl"},[t._v(t._s(t._f("rateFix")(t.messData.rate)))]),s("span",{staticClass:"tolanIcon"},[s("svg",{staticClass:"icon icon-14",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-a_15"}})]),s("div",{staticClass:"iconMark a-4-bg b-1-cl"},[t._v("\n              "+t._s(t.$t("assets.leverageToLoan.rateMark"))+"\n            ")])])])]),s("c-inputLine",{attrs:{name:"broNum",promptText:t.$t("assets.leverageToLoan.number"),marginTop:"10px",errorHave:!0,value:t.broNum,errorFlag:t.broErrorObj.showError,errorText:t.broErrorObj.text,warningText:t.broWarningText},on:{onchanges:t.inputChange}},[s("c-button",{attrs:{type:"text",height:"30px"},on:{click:t.allBro}},[t._v("\n          "+t._s(t.$t("assets.otcAccount.all"))+"\n        ")])],1),s("c-button",{attrs:{width:"120px",marginTop:"32px",height:"40px",loading:t.btnLoading,disabled:t.btnDisabled},on:{click:t.broClick}},[t._v(t._s(t.$t("assets.leverageToLoan.ToLoan")))])],1)]):t._e(),s("header",{staticClass:"withdraw-header b-1-cl a-3-bd"},[t._v("\n    "+t._s(t.$t("assets.leverageToLoan.listTitle"))+"\n  ")]),s("div",{staticClass:"withdraw-table"},[s("c-table",{attrs:{imgMap:t.imgMap,colorMap:t.colorMap,loading:t.tabelLoading,columns:t.columns,dataList:t.tabelList,subContent:t.subContent,subColumns:t.subColumns,subContentId:t.subContentId,subLoading:t.subLoading},on:{elementClick:t.tableClick}}),t.paginationObj.total>t.paginationObj.display?s("c-pagination",{attrs:{total:t.paginationObj.total,display:t.paginationObj.display,currentPage:t.paginationObj.currentPage},on:{pagechange:t.pagechange}}):t._e()],1),s("leverageTransfer",{on:{success:t.transferSuccess}}),s("leverageRepayment",{on:{success:t.repaymentSuccess}})],1)},n=[],r=(s("ed57"),s("bd33"),s("8e91"),s("79cb"),s("8335"),s("95d5")),i={name:"page-withdraw",data:function(){return{tabelLoading:!0,imgMap:r["u"],colorMap:r["c"],tabelList:[],paginationObj:{total:0,display:10,currentPage:1},messData:{},broCoin:"",broNum:"",btnLoading:!1,subContent:[],subColumns:[],subContentId:0,subLoading:!1,dataList:{}}},filters:{fixDFn:function(t,e,s){return Object(r["f"])(t,e.coinFix[s])},fixDFnTwo:function(t,e){return Object(r["f"])(t,e)},rateFix:function(t){var e=t||0;return"".concat(Object(r["f"])(100*e,2),"%")}},watch:{messData:function(t){Object.keys(t).length&&(this.broCoin=t.baseCoin,Object.keys(this.market).length&&this.getTableList())},market:function(t){Object.keys(t).length&&Object.keys(this.messData).length&&this.getTableList()},broNum:function(t){this.broNum=Object(r["h"])(t,3)}},computed:{btnDisabled:function(){var t=!0;return(this.broErrorObj.flag||this.btnLoading)&&(t=!1),t},broMessage:function(){var t={total:"0",can:"0",borrowed:"0",type:"base",min:"0"},e=this.messData,s=e.baseCoin,a=e.baseTotalBorrow,n=e.baseCanBorrow,r=e.baseBorrowBalance,i=e.baseMinBorrow,o=e.quoteCoin,c=e.quoteTotalBorrow,l=e.quoteCanBorrow,u=e.quoteBorrowBalance,f=e.quoteMinBorrow;return this.broCoin===s?(t.total=a||0,t.can=n||0,t.borrowed=r||0,t.type="base",t.min=i||0):this.broCoin===o&&(t.total=c||0,t.can=l||0,t.borrowed=u||0,t.type="quote",t.min=f||0),t},market:function(){return this.$store.state.baseData.market||{}},columns:function(){return[{title:this.$t("assets.leverageToLoan.list1"),width:"10%"},{title:this.$t("assets.leverageToLoan.list2"),width:"10%",align:"left"},{title:this.$t("assets.leverageToLoan.list3"),width:"10%"},{title:this.$t("assets.leverageToLoan.list4"),width:"15%"},{title:this.$t("assets.leverageToLoan.list5"),width:"10%"},{title:this.$t("assets.leverageToLoan.list6"),width:"15%"},{title:this.$t("assets.leverageToLoan.list7"),width:"15%"},{title:this.$t("assets.leverageToLoan.list8"),width:"15%"}]},coinFix:function(){var t=this.market.coinList,e={base:0,quote:0};if(t&&Object.keys(this.messData).length){var s=this.messData,a=s.baseCoin,n=s.quoteCoin;t[a]&&(e.base=t[a].showPrecision),t[n]&&(e.quote=t[n].showPrecision)}return e},broWarningText:function(){var t=this.broMessage.can,e=Object(r["f"])(t,3);return"".concat(this.$t("assets.leverageToLoan.canToLoan")," ").concat(e,"\n        ").concat(this.getShowCoin(this.broCoin))},broErrorObj:function(){var t={flag:!1,text:"",showError:!1};if(0===Number(this.broNum))t.flag=!1,t.text="",t.showError=!1;else if(Number(this.broNum)>Number(this.broMessage.can))t.flag=!1,t.text=this.$t("assets.leverageToLoan.inputError1"),t.showError=!0;else if(Number(this.broNum)<Number(this.broMessage.min)){t.flag=!1;var e=this.broMessage,s=e.min,a=e.type,n=Object(r["f"])(s,this.coinFix[a]),i=this.$t("assets.leverageToLoan.inputError2");t.text="".concat(i," ").concat(n," ").concat(this.broCoin),t.showError=!0}else t.flag=!0,t.text="",t.showError=!1;return t}},methods:{init:function(){this.$route.query.symbol?(this.symbol=this.$route.query.symbol.toUpperCase(),this.getData(),Object.keys(this.market).length&&Object.keys(this.messData).length&&this.getTableList()):this.$router.push("/assets/leverageAccount")},getShowSymbol:function(t){if(!this.market)return t;var e=this.market.market,s=t;if(this.market&&e){var a=e[this.messData.quoteCoin][this.messData.name];s=a.showName||a.name}return s},getShowCoin:function(t){if(!this.market)return t;var e=this.market.coinList,s=t;return this.market&&e&&(s=Object(r["l"])(t,e)),s},rateFixFn:function(t){return"".concat(Object(r["f"])(100*t,2),"%")},allBro:function(){this.broNum=this.broMessage.can},transferSuccess:function(){this.getData()},repaymentSuccess:function(){this.getData(),this.getTableList()},getData:function(){var t=this,e={symbol:this.symbol};this.axios({url:"/lever/finance/symbol/balance",params:e}).then((function(e){"0"===e.code.toString()&&(t.messData=e.data)}))},pagechange:function(t){this.paginationObj.currentPage=t,this.getTableList()},transfer:function(t){this.$bus.$emit("coTransfer",this.messData.symbol,t)},setBroCoin:function(t){this.broCoin!==t&&(this.broCoin=t,this.broNum="")},inputChange:function(t,e){this[e]=t},broClick:function(){var t=this;this.btnLoading=!0,this.axios({url:"/lever/finance/borrow",params:{symbol:this.symbol,coin:this.broCoin,amount:this.broNum}}).then((function(e){t.btnLoading=!1,"0"===e.code.toString()?(t.getData(),t.getTableList(),t.$bus.$emit("tip",{text:e.msg,type:"success"}),t.broNum=""):t.$bus.$emit("tip",{text:e.msg,type:"error"})}))},tableClick:function(t,e){if("repayment"===t){var s=this.dataList[e];this.$bus.$emit("coRepayment",s)}else"details"===t&&this.getSubTableData(e)},typeText:function(t){var e="";switch(t){case"1":e=this.$t("assets.leverageToLoan.typeText1");break;case"2":e=this.$t("assets.leverageToLoan.typeText2");break;default:e=this.$t("assets.leverageToLoan.typeText3")}return e},getSubTableData:function(t){var e=this;t.open&&(this.subContentId=t.id,this.subColumns=[this.$t("order.exchangeOrder.detailsTime"),this.$t("assets.leverageToLoan.list3"),this.$t("order.exchangeOrder.detailsVolume"),this.$t("assets.flowingWater.type")],this.subContent=[],this.subLoading=!0,this.axios({url:"/lever/return/info",method:"post",params:{id:t.id.toString(),pageSize:1e4}}).then((function(s){if(t.id===e.subContentId)if("0"===s.code.toString()){var a=[];s.data.financeList.forEach((function(t){var s=e.messData.baseReturnPrecision;t.coin===e.messData.quoteCoin&&(s=e.messData.quoteReturnPrecision),a.push({ctime:Object(r["k"])(Number(t.repaymentTime)),coin:e.getShowCoin(t.coin),volume:Object(r["f"])(t.returnMoney,s),type:e.typeText(t.type.toString())})})),e.subLoading=!1,e.subContent=a}else e.subLoading=!1,e.$bus.$emit("tip",{text:s.msg,type:"error"})})))},getTableList:function(){var t=this;this.axios({url:"lever/borrow/new",params:{pageSize:this.paginationObj.display,page:this.paginationObj.currentPage,symbol:this.symbol}}).then((function(e){if("0"===e.code.toString()){t.tabelLoading=!1;var s=e.data,a=s.count,n=s.financeList,i=[];n.forEach((function(e){var s=8,a=8;t.dataList[e.id]=e,i.push({id:e.id,data:[Object(r["k"])(Number(e.ctime)),e.showName||e.symbol.toUpperCase(),t.getShowCoin(e.coin.toUpperCase()),Object(r["f"])(e.borrowMoney,s),t.rateFixFn(e.interestRate),Object(r["f"])(e.oweInterest,a),Object(r["f"])(e.oweAmount,a),[{type:"subTable",text:t.$t("order.exchangeOrder.details"),eventType:"details"},{type:"button",text:t.$t("assets.leverageToLoan.repayment"),eventType:"repayment"}]]})})),t.tabelList=i,t.paginationObj.total=a>30?30:a}}))}}},o=(s("42c2"),s("7861")),c=s("e00b"),l={mixins:[i],components:{leverageTransfer:o["a"],leverageRepayment:c["a"]},mounted:function(){this.init()}},u=l,f=s("2877"),h=Object(f["a"])(u,a,n,!1,null,null,null);e["default"]=h.exports},"42c2":function(t,e,s){},"4c19":function(t,e,s){},7861:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("c-dialog",{staticClass:"leverageTransfer-container",attrs:{showFlag:t.transferFlag,titleText:t.$t("assets.leverageTransfer.title"),confirmLoading:t.transferConfirmLoading,confirmDisabled:t.transferConfirmDisabled},on:{close:t.transferDialogClose,confirm:t.transferDialogConfirm}},[t.loading?s("div",{staticClass:"transfer-loadingBox"},[s("div",{staticClass:"transfer-loading"},[s("c-loading",{attrs:{size:"50"}})],1)]):s("section",{staticClass:"transfer-box"},[s("div",{staticClass:"transfer-mess a-4-bg"},[s("div",{staticClass:"even"},[s("c-redio",{attrs:{value:t.transferCoin===t.transferObj.baseCoin,name:t.transferObj.baseCoin},on:{click:t.transferCoinChange}}),s("span",{staticClass:"key e-1-cl",on:{click:function(e){return t.transferCoinChange(t.transferObj.baseCoin)}}},[t._v("\n          "+t._s(t.getShowCoin(t.transferObj.baseCoin))+"\n        ")])],1),s("div",{staticClass:"even"},[s("c-redio",{attrs:{value:t.transferCoin===t.transferObj.quoteCoin,name:t.transferObj.quoteCoin},on:{click:t.transferCoinChange}}),s("span",{staticClass:"key e-1-cl",on:{click:function(e){return t.transferCoinChange(t.transferObj.quoteCoin)}}},[t._v("\n          "+t._s(t.getShowCoin(t.transferObj.quoteCoin))+"\n        ")])],1)]),s("ul",{staticClass:"transfer-content a-4-bg"},[s("li",{staticClass:"transfer-page"},[s("div",{staticClass:"transfer-page-side"},[t._v(t._s(t.$t("assets.otcAccount.from")))]),s("div",{staticClass:"transfer-page-name e-1-cl"},[t._v(t._s(t.side.from))])]),s("li",{staticClass:"transfer-icon"},[s("svg",{staticClass:"icon icon-36",attrs:{"aria-hidden":"true"},on:{click:t.setTransferSide}},[s("use",{attrs:{"xlink:href":"#icon-f_4"}})])]),s("li",{staticClass:"transfer-page"},[s("div",{staticClass:"transfer-page-side"},[t._v(t._s(t.$t("assets.otcAccount.to")))]),s("div",{staticClass:"transfer-page-name e-1-cl"},[t._v(t._s(t.side.to))])])]),s("c-inputLine",{attrs:{name:"transferValue",value:t.transferValue,promptText:t.$t("assets.otcAccount.volume"),errorHave:!0,errorFlag:t.transferError,errorText:t.$t("assets.otcAccount.volumeError"),warningText:t.transferWarningText},on:{onchanges:t.inputLineChange}},[s("c-button",{attrs:{type:"text",height:"30px"},on:{click:t.allTransfer}},[t._v("\n        "+t._s(t.$t("assets.otcAccount.all"))+"\n      ")])],1)],1)])},n=[],r=(s("ed57"),s("8e91"),s("79cb"),s("8335"),s("95d5")),i={data:function(){return{loading:!1,transferConfirmLoading:!1,transferFlag:!1,transferSide:"1",transferValue:"",transferCoin:"",transferObj:{},axiosFlag:!1,symbol:"",defineCoin:""}},watch:{market:function(t){t&&this.axiosFlag&&this.getData()},transferObj:function(t){Object.keys(t).length&&(this.defineCoin?this.transferCoin=this.defineCoin:this.transferCoin=t.baseCoin)},transferValue:function(t){"2"===this.transferSide?this.transferValue=Object(r["h"])(t,8):this.transferValue=Object(r["h"])(t,this.transferCoinFix)}},computed:{market:function(){return this.$store.state.baseData.market},side:function(){var t=this.$t("assets.otcAccount.exchangeAccount"),e=this.$t("assets.leverageTransfer.leverageAccount"),s="",a="";return"1"===this.transferSide?(s=t,a=e):(s=e,a=t),{from:s,to:a}},transferWarningText:function(){var t=this.$t("assets.otcAccount.can"),e=Object(r["f"])(this.transferCanNum,this.transferCoinFix);return"2"===this.transferSide&&(e=Object(r["f"])(this.transferCanNum,8)),"".concat(t," ").concat(e," ").concat(this.getShowCoin(this.transferCoin)," ")},transferCoinFix:function(){var t=0;return this.market&&this.market.coinList&&this.market.coinList[this.transferCoin]&&(t=this.market.coinList[this.transferCoin].showPrecision),Number(t)},transferConfirmDisabled:function(){if(this.transferConfirmLoading)return!1;var t=!0;return parseFloat(this.transferValue)>0&&!this.transferError&&(t=!1),t},transferError:function(){var t=!1;return parseFloat(this.transferValue)>parseFloat(this.transferCanNum)&&(t=!0),t},transferCanNum:function(){var t=this.transferObj,e=t.baseCanTransfer,s=t.quoteCanTransfer,a=t.baseExNormalBalance,n=t.quoteEXNormalBalance,r=t.baseCoin,i=t.quoteCoin,o="",c="";this.transferCoin===r?(o=e,c=a):this.transferCoin===i&&(o=s,c=n);var l="";return l="1"===this.transferSide?c:o,Number(l)}},methods:{init:function(){var t=this;this.$bus.$on("coTransfer",(function(e,s){t.axiosFlag=!0,t.symbol=e,t.transferFlag=!0,t.loading=!0,s&&(t.defineCoin=s),t.market&&t.getData()}))},getShowCoin:function(t){if(!this.market)return t;var e=this.market.coinList,s=t;return this.market&&e&&(s=Object(r["l"])(t,e)),s},getData:function(){var t=this;this.axiosFlag=!1;var e={symbol:this.symbol};this.axios({url:"/lever/finance/symbol/balance",params:e}).then((function(e){t.loading=!1,"0"===e.code.toString()?t.transferObj=e.data:t.$bus.$emit("tip",{text:e.msg,type:"error"})}))},transferCoinChange:function(t){this.transferCoin!==t&&(this.transferCoin=t,this.transferValue="")},setTransferSide:function(){"1"===this.transferSide?this.transferSide="2":"2"===this.transferSide&&(this.transferSide="1"),this.transferValue=""},allTransfer:function(){"2"===this.transferSide?this.transferValue=Object(r["f"])(this.transferCanNum,8):this.transferValue=Object(r["f"])(this.transferCanNum,this.transferCoinFix)},inputLineChange:function(t,e){this[e]=t},clearTransfer:function(){this.transferFlag=!1,this.transferSide="1",this.transferValue="",this.transferCoin="",this.transferConfirmLoading=!1,this.$set(this,"transferObj",{})},transferDialogClose:function(){this.clearTransfer()},transferDialogConfirm:function(){var t=this;this.transferConfirmLoading=!0;var e={fromAccount:"1"===this.transferSide?"1":"2",toAccount:"1"===this.transferSide?"2":"1",amount:this.transferValue,coinSymbol:this.transferCoin,symbol:this.transferObj.symbol};this.axios({url:"/lever/finance/transfer",params:e}).then((function(e){t.transferConfirmLoading=!1,"0"===e.code.toString()?(t.clearTransfer(),t.$emit("success"),t.$bus.$emit("tip",{text:e.msg,type:"success"})):t.$bus.$emit("tip",{text:e.msg,type:"error"})}))}}},o=(s("4c19"),{mixins:[i],mounted:function(){this.init()}}),c=o,l=s("2877"),u=Object(l["a"])(c,a,n,!1,null,null,null);e["a"]=u.exports},b81a:function(t,e,s){},e00b:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("c-dialog",{attrs:{showFlag:t.transferFlag,titleText:t.$t("assets.leverageRepayment.title"),confirmLoading:t.transferConfirmLoading,confirmDisabled:t.transferConfirmDisabled},on:{close:t.transferDialogClose,confirm:t.transferDialogConfirm}},[s("section",{staticClass:"repayment-box"},[s("ul",{staticClass:"repayment-list"},[s("li",{staticClass:"a-4-bg"},[s("span",{staticClass:"key"},[t._v(t._s(t.$t("assets.leverageRepayment.symbol")))]),s("span",{staticClass:"value b-1-cl"},[t._v(t._s(t.getShowSymbol(t.transferObj.name)))])]),s("li",{staticClass:"a-4-bg"},[s("span",{staticClass:"key"},[t._v(t._s(t.$t("assets.leverageRepayment.coin")))]),s("span",{staticClass:"value b-1-cl"},[t._v(t._s(t.getShowCoin(t.repaymentMess.coin)))])]),s("li",{staticClass:"a-4-bg"},[s("span",{staticClass:"key"},[t._v(t._s(t.$t("assets.leverageRepayment.Surplus")))]),s("span",{staticClass:"value b-1-cl"},[t._v("\n          "+t._s(t._f("fixDReturnFn")(t.repaymentMess.Surplus,this))+"\n           "+t._s(t.getShowCoin(t.repaymentMess.coin)))])]),s("li",{staticClass:"a-4-bg"},[s("span",{staticClass:"key"},[t._v(t._s(t.$t("assets.leverageRepayment.sum")))]),s("span",{staticClass:"value b-1-cl"},[t._v("\n          "+t._s(t._f("fixDFn")(t.repaymentMess.sum,this))+" "+t._s(t.getShowCoin(t.repaymentMess.coin))+"\n        ")])]),s("li",{staticClass:"a-4-bg"},[s("span",{staticClass:"key"},[t._v(t._s(t.$t("assets.leverageRepayment.rate")))]),s("span",{staticClass:"value b-1-cl"},[t._v("\n          "+t._s(t._f("fixDReturnFn")(t.repaymentMess.rate,this))+" "+t._s(t.getShowCoin(t.repaymentMess.coin))+"\n        ")])])]),s("c-inputLine",{attrs:{name:"transferValue",value:t.transferValue,promptText:t.$t("assets.leverageRepayment.RepaymentNum"),errorHave:!0,errorFlag:t.inputMess.showError,errorText:t.inputMess.text,warningText:t.transferWarningText},on:{onchanges:t.inputLineChange}},[s("c-button",{attrs:{type:"text",height:"30px"},on:{click:t.allTransfer}},[t._v("\n        "+t._s(t.$t("assets.otcAccount.all"))+"\n      ")])],1)],1)])},n=[],r=(s("ed57"),s("bd33"),s("8e91"),s("95d5")),i={data:function(){return{transferConfirmLoading:!1,transferFlag:!1,transferValue:"",transferCoin:"",transferObj:{},axiosFlag:!1,symbol:"",repaymentData:{}}},filters:{fixDFn:function(t){return Object(r["f"])(t,8)},fixDReturnFn:function(t){return Object(r["f"])(t,8)}},watch:{market:function(t){t&&this.axiosFlag&&this.getData()},transferValue:function(t){this.transferValue=Object(r["h"])(t,8)}},computed:{inputMess:function(){var t={flag:!1,showError:!1,text:""},e=Number(this.transferValue),s=Number(this.transferCanNum),a=Number(Object(r["f"])(this.repaymentMess.Surplus,this.returnFix)),n=Number(this.transferMinNum),i=!0;if(n>a&&(i=!1),0===e)t.flag=!1,t.text="",t.showError=!1;else if(n>e&&i){t.flag=!1,t.showError=!0;var o=this.$t("assets.leverageRepayment.error1");t.text="".concat(o," ").concat(Object(r["f"])(n,this.transferCoinFix)," ").concat(this.transferCoin)}else e>s?(t.flag=!1,t.showError=!0,t.text=this.$t("assets.leverageRepayment.error2")):e>a?(t.flag=!1,t.showError=!0,t.text=this.$t("assets.leverageRepayment.error3")):(t.flag=!0,t.text="",t.showError=!1);return t},repaymentMess:function(){var t={coin:"",sum:"",rete:"",Surplus:""},e=this.repaymentData,s=e.coin,a=e.borrowMoney,n=e.oweInterest,r=e.oweAmount;return t.coin=s,t.sum=a||0,t.rate=n||0,t.Surplus=(n||0)+(r||0),t},market:function(){return this.$store.state.baseData.market},transferWarningText:function(){var t=this.$t("assets.leverageRepayment.can"),e=Object(r["f"])(this.transferCanNum,8);return"".concat(t," ").concat(e," ").concat(this.getShowCoin(this.transferCoin)," ")},transferCoinFix:function(){var t=0;return this.market&&this.market.coinList&&this.market.coinList[this.transferCoin]&&(t=this.market.coinList[this.transferCoin].showPrecision),Number(t)},returnFix:function(){var t=this.transferObj.baseReturnPrecision||0;return this.repaymentMess.coin===this.transferObj.quoteCoin&&(t=this.transferObj.quoteReturnPrecision),t},transferConfirmDisabled:function(){if(this.transferConfirmLoading)return!1;var t=!0;return this.inputMess.flag&&(t=!1),t},transferCanNum:function(){var t=this.transferObj,e=t.baseNormalBalance,s=t.quoteNormalBalance,a=t.baseCoin,n=t.quoteCoin,r="";return this.transferCoin===a?r=e:this.transferCoin===n&&(r=s),Number(r)},transferMinNum:function(){var t=this.transferObj,e=t.baseMinPayment,s=t.quoteMinPayment,a=t.baseCoin,n=t.quoteCoin,r="";return this.transferCoin===a?r=e:this.transferCoin===n&&(r=s),Number(r)}},methods:{init:function(){var t=this;this.$bus.$on("coRepayment",(function(e){var s=e.symbol,a=e.coin;t.repaymentData=e,t.axiosFlag=!0,t.symbol=s,t.transferFlag=!0,t.transferCoin=a,t.market&&t.getData()}))},getShowSymbol:function(t){if(!this.market)return t;var e=this.market.market,s=t;if(this.market&&e&&this.transferObj.quoteCoin){var a=e[this.transferObj.quoteCoin][this.transferObj.name];s=a.showName||a.name}return s},getShowCoin:function(t){if(!this.market)return t;var e=this.market.coinList,s=t;return this.market&&e&&(s=Object(r["l"])(t,e)),s},getData:function(){var t=this;this.axiosFlag=!1;var e={symbol:this.symbol};this.axios({url:"/lever/finance/symbol/balance",params:e}).then((function(e){"0"===e.code.toString()&&(t.transferObj=e.data)}))},allTransfer:function(){var t=this.repaymentMess.Surplus,e="";e=Number(t)>Number(this.transferCanNum)?Number(this.transferCanNum):Number(t),this.transferValue=Object(r["f"])(e,this.returnFix)},inputLineChange:function(t,e){this[e]=t},clearTransfer:function(){this.transferFlag=!1,this.transferValue="",this.transferCoin="",this.transferConfirmLoading=!1,this.$set(this,"transferObj",{})},transferDialogClose:function(){this.clearTransfer()},transferDialogConfirm:function(){var t=this;this.transferConfirmLoading=!0;var e={id:this.repaymentData.id,amount:this.transferValue};this.axios({url:"/lever/finance/return",params:e}).then((function(e){t.transferConfirmLoading=!1,"0"===e.code.toString()?(t.clearTransfer(),t.$emit("success"),t.$bus.$emit("tip",{text:e.msg,type:"success"})):t.$bus.$emit("tip",{text:e.msg,type:"error"})}))}}},o=(s("b81a"),{mixins:[i],mounted:function(){this.init()}}),c=o,l=s("2877"),u=Object(l["a"])(c,a,n,!1,null,null,null);e["a"]=u.exports}}]);