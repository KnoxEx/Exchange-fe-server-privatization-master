(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2cf03e8b","chunk-717d1464"],{"7ac4":function(t,e,a){},af4b:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"page-innovations"},[a("div",{staticClass:"flowingWater-table"},[a("c-table",{attrs:{loading:t.tabelLoading,imgMap:t.imgMap,colorMap:t.colorMap,columns:t.columns,dataList:t.tabelList},on:{elementClick:t.goViewPage}}),t.paginationObj.total>t.paginationObj.display?a("c-pagination",{attrs:{total:t.paginationObj.total,display:t.paginationObj.display,currentPage:t.paginationObj.currentPage},on:{pagechange:t.pagechange}}):t._e()],1)])},n=[],s=(a("bd33"),a("ed57"),a("8335"),a("79cb"),a("95d5")),o={name:"page-flowingWater",data:function(){return{tabelLoading:!0,imgMap:s["u"],colorMap:s["c"],type:"all",symbol:"",tabelList:[],symbolList:[],investSymbol:null,paginationObj:{total:0,display:10,currentPage:1}}},computed:{coinList:function(){return this.$store.state.baseData&&this.$store.state.baseData.market?this.$store.state.baseData.market.coinList:null},statusList:function(){return[this.$t("innov.have"),this.$t("innov.financing"),this.$t("innov.end")]},market:function(){return this.$store.state.baseData.market},columns:function(){var t=[{title:this.$t("innov.purchase_time"),width:"100px"},{title:this.$t("innov.purchase"),width:"200px"},{title:this.$t("innov.entry")},{title:this.$t("innov.purchase_amount"),width:"150px"},{title:this.$t("innov.obtain_token"),width:"100px"},{title:this.$t("innov.state"),width:"100px"},{title:this.$t("innov.operation"),width:"100px"}];return t},axiosSymbol:function(){return"all"===this.symbol?null:this.symbol},axiosType:function(){return"all"===this.type?null:this.type}},watch:{market:function(t){t&&this.setData()}},methods:{init:function(){this.market&&this.setData()},setData:function(){var t=this,e=[{code:"all",value:this.$t("assets.otcFlowingWater.allCoin")}];Object.keys(this.market.coinList).forEach((function(a){1===t.market.coinList[a].otcOpen&&e.push({code:a,value:a})})),this.symbolList=e,this.symbol="all",this.getData()},getData:function(){var t=this;this.axios({url:"/newcoin/invest_manage_list",params:{pageSize:this.paginationObj.display,page:this.paginationObj.currentPage}}).then((function(e){if(t.tabelLoading=!1,"0"===e.code.toString()){var a=[];e.data.record.length&&(e.data.record.forEach((function(e){t.investSymbol=e.investSymbol;var i=t.market.coinList,n=i[e.investSymbol]?i[e.investSymbol].showPrecision:0,o=i[e.tokenSymbol]?i[e.tokenSymbol].showPrecision:0;a.push({id:e.projectId,data:[Object(s["k"])(e.orderTime),e.orderId,e.name,"".concat(Object(s["f"])(e.investAmount,n),"\n                    ").concat(Object(s["l"])(e.investSymbol,i)),"".concat(Object(s["f"])(e.tokenAmount,o),"\n                    ").concat(Object(s["l"])(e.tokenSymbol,i)),t.setStatusText(e),[{type:"button",text:t.$t("innov.view_details"),iconClass:[""],eventType:"view",classes:t.classesVieew(e)}]]})})),t.tabelList=a,t.paginationObj.total=e.data.count)}else t.$bus.$emit("tip",{text:e.msg,type:"error"})}))},pagechange:function(t){this.paginationObj.currentPage=t,this.getData()},goViewPage:function(t,e){this.$router.push("/innovation/".concat(e))},classesVieew:function(t){return 7===t.status?"noshow":[]},setStatusText:function(t){var e="";switch(t.status){case 2:e=this.$t("innov.status1");break;case 3:e=this.$t("innov.status2");break;case 4:e=this.$t("innov.status3");break;case 5:e=this.$t("innov.status4");break;default:e=this.$t("innov.status5")}return e}}},r=(a("7ac4"),{mixins:[o],mounted:function(){this.init()}}),c=r,l=a("2877"),h=Object(l["a"])(c,i,n,!1,null,null,null);e["default"]=h.exports},e0ef:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"page-flowingWater"},[a("div",{staticClass:"flowingWater-nav a-3-bd"},[a("c-navTab",{attrs:{activeClassName:"b-1-cl",activeColor:"a-12-bg",className:"b-2-cl",currentTab:t.nowType,navTab:t.navTab,lineHeight:"55"},on:{currentType:t.currentType}})],1),4===t.nowType?[a("innovations")]:[a("div",{staticClass:"flowingWater-options"},[a("c-select",{attrs:{promptText:t.$t("assets.flowingWater.coin"),value:t.symbol,options:t.symbolList,errorHave:!0,width:"120px",filterable:!0},on:{onChanges:t.symbolChange}}),2===t.nowType&&t.isInnerTransferOpen?a("c-select",{attrs:{promptText:t.$t("assets.flowingWater.type"),value:t.otherTypeInner,options:t.otherTypeListInner,errorHave:!0,width:"150px"},on:{onChanges:t.otherTypeChangeInner}}):t._e(),1===t.nowType&&t.isInnerTransferOpen?a("c-select",{attrs:{promptText:t.$t("assets.flowingWater.type"),value:t.topUpTypeInner,options:t.topUpTypeList,errorHave:!0,width:"150px"},on:{onChanges:t.topUpTypeChange}}):t._e(),3===t.nowType?a("c-select",{attrs:{promptText:t.$t("assets.flowingWater.type"),value:t.otherType,options:t.otherTypeList,errorHave:!0,width:"150px"},on:{onChanges:t.otherTypeChange}}):t._e(),5===t.nowType?a("c-select",{attrs:{promptText:t.$t("assets.flowingWater.type"),value:t.currentIncomeType,options:t.incomeType,errorHave:!0,width:"150px"},on:{onChanges:t.setIncomeType}}):t._e()],1),a("div",{staticClass:"flowingWater-table"},[a("c-table",{attrs:{cellHeight:55,imgMap:t.imgMap,colorMap:t.colorMap,loading:t.tabelLoading,subContent:t.subTableData,subContentId:t.subTableDataId,subColumns:t.subColumns,columns:t.columns,dataList:t.tabelList,bodyClasses:"bodyClasses"},on:{elementClick:t.tableClick}}),t.paginationObj.total>t.paginationObj.display?a("c-pagination",{attrs:{total:t.paginationObj.total,display:t.paginationObj.display,currentPage:t.paginationObj.currentPage},on:{pagechange:t.pagechange}}):t._e()],1)]],2)},n=[],s=(a("28a5"),a("768b")),o=(a("6b54"),a("ac6a"),a("2626"),a("bd86")),r=(a("07be"),a("8335"),a("79cb"),a("ed57"),a("8e91"),a("95d5"));function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){Object(o["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var h={name:"page-flowingWater",data:function(){return{tabelLoading:!0,imgMap:r["u"],colorMap:r["c"],nowType:1,symbol:"",tabelList:[],financeListData:[],subTableDataId:"",subTableData:[],subContentId:null,symbolList:[],otherType:"",otherTypeList:[],otherTypeFirst:!0,paginationObj:{total:0,display:10,currentPage:1},revokeList:[],currentIncomeType:"0",otherTypeInner:"0",topUpTypeInner:"0"}},computed:{incomeType:function(){return[{code:"0",value:this.$t("freeStaking.incomeFilter[0]")},{code:"1",value:this.$t("freeStaking.incomeFilter[2]")},{code:"2",value:this.$t("freeStaking.incomeFilter[1]")}]},topUpTypeList:function(){return[{code:"0",value:this.$t("assets.otcFlowingWater.all")},{code:"1",value:this.$t("assets.flowingWater.type1")},{code:"2",value:this.$t("assets.flowingWater.type2")}]},otherTypeListInner:function(){return[{code:"0",value:this.$t("assets.otcFlowingWater.all")},{code:"1",value:this.$t("assets.flowingWater.WithdrawalsRecord")},{code:"2",value:this.$t("assets.withdraw.innerList")}]},freeStakingStatus:function(){return{1:this.$t("manageFinances.completed")}},financialTypeStatus:function(){return{0:this.$t("freeStaking.incomeFilter[0]"),1:this.$t("freeStaking.incomeFilter[2]"),2:this.$t("freeStaking.incomeFilter[1]")}},incrementConfigStatus:function(){return this.$store.state.baseData.incrementConfigStatus||0},publicInfo:function(){return this.$store.state.baseData.publicInfo},navTab:function(){var t=[{name:this.$t("assets.flowingWater.RechargeRecord"),index:1},{name:this.$t("assets.flowingWater.WithdrawalsRecord"),index:2},{name:this.$t("assets.flowingWater.OtherRecords"),index:3}];return"1"===this.newcoinOpen&&t.push({name:this.$t("innov.innov_tit"),index:4}),this.incrementConfigStatus&&t.push({name:this.$t("manageFinances.record"),index:5}),t},exchangeData:function(){return this.$store.state.assets.exchangeData},market:function(){return this.$store.state.baseData.market},columns:function(){var t=[];return 1===this.nowType&&(t=[{title:this.$t("assets.flowingWater.RechargeTime"),width:"10%"},{title:this.$t("assets.flowingWater.RechargeCoin"),width:"10%"},{title:this.$t("assets.flowingWater.RechargeVolume"),width:"30%"},{title:this.$t("assets.flowingWater.RechargeNumber"),width:"20%"},{title:this.$t("assets.flowingWater.RechargeStatus"),width:"10%"},{title:this.$t("assets.flowingWater.withdrawOptions"),width:"10%"}]),2===this.nowType&&(t=[{title:this.$t("assets.flowingWater.withdrawTime"),width:"10%"},{title:this.$t("assets.flowingWater.otherCoin"),width:"10%",align:"left"},{title:this.$t("assets.flowingWater.withdrawVolume"),width:"10%"},{title:this.$t("assets.flowingWater.withdrawFee"),width:"10%"},{title:this.$t("assets.flowingWater.withdrawRemarks"),width:"15%"},{title:this.$t("assets.flowingWater.withdrawStatus"),width:"10%"},{title:this.$t("assets.flowingWater.withdrawOptions"),width:"10%"}]),3!==this.nowType&&5!==this.nowType||(t=[{title:this.$t("assets.flowingWater.otherTime"),width:"10%"},{title:this.$t("assets.flowingWater.otherCoin"),width:"10%"},{title:this.$t("assets.flowingWater.otherType"),width:"25%"},{title:this.$t("assets.flowingWater.otherVolume"),width:"25%"},{title:this.$t("assets.flowingWater.otherStatus"),width:"20%"}]),t},subColumns:function(){var t=[this.$t("assets.flowingWater.withdrawAddress"),this.$t("assets.flowingWater.updataAt"),this.$t("assets.flowingWater.txid")];return 1===this.nowType&&(t=[this.$t("assets.flowingWater.rechargeAddress"),this.$t("assets.flowingWater.updataAt"),this.$t("assets.flowingWater.txid")]),t},axiosSymbol:function(){return"all"===this.symbol?null:this.symbol},newcoinOpen:function(){return this.$store.state.baseData.newcoinOpen},isInnerTransferOpen:function(){return this.$store.state.baseData.is_inner_transfer_open||0}},watch:{exchangeData:function(t){t&&this.market&&this.setData()},market:function(t){t&&this.exchangeData&&this.setData()}},methods:{init:function(){this.exchangeData||this.$store.dispatch("assetsExchangeData"),this.exchangeData&&this.market&&this.setData()},getFreeStaking:function(){var t=this;this.axios({url:this.$store.state.url.freeStaking.financial_management,headers:{},params:{pageSize:this.paginationObj.display,page:this.paginationObj.currentPage,gainCoin:this.axiosSymbol||"",financialType:Number(this.currentIncomeType)},method:"post"}).then((function(e){if("0"===e.code){var a=e.data,i=a.financeList,n=a.count,s=i.map((function(e,a){var i=t.market.coinList,n=i[e.gainCoin],s=n?n.showPrecision:0;return{id:a,data:[e.time,e.gainCoin,t.financialTypeStatus[e.financialType],Object(r["f"])(e.amount,s),t.freeStakingStatus[e.status]]}}));t.tabelList=s,t.paginationObj.total=n}t.tabelLoading=!1}))},getOtherTypeList:function(){var t=this;this.axios({url:"record/other_transfer_scene"}).then((function(e){if("0"===e.code.toString()){var a=e.data.cenceList,i=[];a.forEach((function(t){i.push({code:t.key,value:t.key_text})})),t.otherTypeList=i,i.length&&(t.otherType=i[0].code),t.getData()}}))},symbolChange:function(t){this.symbol=t.code,this.paginationObj.currentPage=1,this.paginationObj.total=0,this.tabelList=[],this.tabelLoading=!0,this.getData()},otherTypeChange:function(t){this.otherType=t.code,this.paginationObj.currentPage=1,this.paginationObj.total=0,this.tabelList=[],this.tabelLoading=!0,this.getData()},otherTypeChangeInner:function(t){this.otherTypeInner=t.code,this.paginationObj.currentPage=1,this.paginationObj.total=0,this.tabelList=[],this.tabelLoading=!0,this.getData()},topUpTypeChange:function(t){this.topUpTypeInner=t.code,this.paginationObj.currentPage=1,this.paginationObj.total=0,this.tabelList=[],this.tabelLoading=!0,this.getData()},setIncomeType:function(t){this.currentIncomeType=t.code,this.paginationObj.currentPage=1,this.paginationObj.total=0,this.tabelList=[],this.tabelLoading=!0,this.getData()},currentType:function(t){this.nowType=t.index,this.paginationObj.currentPage=1,this.paginationObj.total=0,this.tabelList=[],4!==t.index&&(this.tabelLoading=!0),3===t.index&&(this.otherTypeFirst?(this.getOtherTypeList(),this.otherTypeFirst=!1):this.getData()),3!==t.index&&this.getData()},setData:function(){var t=this,e=[{code:"all",value:this.$t("assets.flowingWater.allCoin")}],a=this.market.coinList;Object.keys(this.exchangeData.allCoinMap).forEach((function(i){if(!t.exchangeData.allCoinMap[i].isFiat){var n=Object(r["l"])(i,a);e.push({code:i,value:n})}})),this.symbolList=e,this.symbol="all",this.getData()},getData:function(){1===this.nowType?this.rechargeData():2===this.nowType?this.withdrawData():5===this.nowType?this.getFreeStaking():3===this.nowType&&this.otherData()},pagechange:function(t){this.paginationObj.currentPage=t,this.getData()},tableClick:function(t,e){var a=this;if("revoke"===t){var i={};this.tabelList.forEach((function(t){t.id===e&&(i=t)})),-1===this.revokeList.indexOf(i.id)&&(this.revokeList.push(i.id),this.axios({url:"/finance/cancel_withdraw",headers:{},params:{withdrawId:i.id},method:"post"}).then((function(t){var e=a.revokeList.indexOf(i.id);a.revokeList.splice(e,1),"0"===t.code.toString()?(a.getData(),a.$bus.$emit("tip",{text:t.msg,type:"success"})):a.$bus.$emit("tip",{text:t.msg,type:"error"})})))}"subView"===t&&(this.subTableDataId=e.id,this.subTableData=[],this.financeListData.forEach((function(t){if(t.id===a.subTableDataId){var e=t.addressTo,i=t.txid;if(a.isHavePage){var n=e.split("_"),o=Object(s["a"])(n,1),c=o[0];e=c}if(a.publicInfo.switch.open_txid_addr_jump&&"1"===a.publicInfo.switch.open_txid_addr_jump&&t.txidAddr){var l="<a href='".concat(t.txidAddr,"' target='_blank' class='b-4-cl'>").concat(t.txid,"</a>");i=l}a.subTableData.push([e,t.walletTime?Object(r["k"])(t.walletTime):"---",i||"---"])}})))},rechargeData:function(){var t=this;this.axios({url:"record/new_deposit_list",params:{pageSize:this.paginationObj.display,page:this.paginationObj.currentPage,coinSymbol:this.axiosSymbol,type:"0"===this.topUpTypeInner?null:Number(this.topUpTypeInner)}}).then((function(e){if(1===t.nowType&&"0"===e.code.toString()){var a=[];t.financeListData=e.data.financeList.map((function(t){return l(l({},t),{},{id:t.createdAtTime})})),e.data.financeList.forEach((function(e){var i=t.market.coinList,n=i[e.symbol]&&i[e.symbol].showPrecision||0,s=Object(r["l"])(e.symbol,i);a.push({id:e.createdAtTime,data:[e.createdAt,s,Object(r["f"])(e.amount,n),e.confirmDesc,e.status_text,t.handleButton(e)]})})),t.tabelLoading=!1,t.tabelList=a,t.paginationObj.total=e.data.count}}))},withdrawData:function(){var t=this;this.axios({url:"record/new_withdraw_list",params:{pageSize:this.paginationObj.display,page:this.paginationObj.currentPage,coinSymbol:this.axiosSymbol,type:"0"===this.otherTypeInner?null:Number(this.otherTypeInner)}}).then((function(e){if(2===t.nowType&&"0"===e.code.toString()){var a=[];t.financeListData=e.data.financeList,e.data.financeList.forEach((function(e){var i=t.market.coinList,n=i[e.symbol]&&i[e.symbol].showPrecision||0,s=Object(r["l"])(e.symbol,i);a.push({id:e.id,data:[e.createdAt,s,Object(r["f"])(e.amount,n),Object(r["f"])(e.fee,n),e.label,e.status_text,t.handleButton(e)]})})),t.tabelLoading=!1,t.tabelList=a,t.paginationObj.total=e.data.count}}))},handleButton:function(t){var e=[];return 0===t.status&&2===this.nowType&&"1"===t.type&&e.push({type:"button",text:this.$t("assets.flowingWater.Cancel"),iconClass:[""],eventType:"revoke"}),e.push({type:"subTable",classes:"u-8-cl",text:this.$t("trade.view"),eventType:"subView"}),e},otherData:function(){var t=this;this.axios({url:"record/other_transfer_list",params:{pageSize:this.paginationObj.display,page:this.paginationObj.currentPage,coinSymbol:this.axiosSymbol,transactionScene:this.otherType}}).then((function(e){if(3===t.nowType&&"0"===e.code.toString()){var a=e.data,i=a.financeList,n=a.count,s=[];i.forEach((function(e,a){var i=t.market.coinList,n=i[e.coinSymbol]&&i[e.coinSymbol].showPrecision||0,o=Object(r["l"])(e.coinSymbol,i);s.push({id:a,data:[e.createTime,o,e.transactionScene,Object(r["f"])(e.amount,n),e.status_text]})})),t.tabelLoading=!1,t.tabelList=s,t.paginationObj.total=n}}))}}},u=(a("e54d"),a("0c5a")),p=a("af4b"),g={mixins:[h],mounted:function(){this.init()},components:{innovations:p["default"]},methods:{tableClick:function(t,e){var a=this;if("revoke"===t){var i={};this.tabelList.forEach((function(t){t.id===e&&(i=t)})),-1===this.revokeList.indexOf(i.id)&&(this.revokeList.push(i.id),this.axios({url:"/finance/cancel_withdraw",headers:{},params:{withdrawId:i.id},method:"post"}).then((function(t){var e=a.revokeList.indexOf(i.id);a.revokeList.splice(e,1),"0"===t.code.toString()?(a.getData(),a.$bus.$emit("tip",{text:t.msg,type:"success"})):a.$bus.$emit("tip",{text:t.msg,type:"error"})})))}"subView"===t&&(this.subTableDataId=e.id,this.subTableData=[],this.financeListData.forEach((function(t){if(t.id===a.subTableDataId){var e=t.addressTo,i=t.txid;if(a.isHavePage){var n=e.split("_"),o=Object(s["a"])(n,1),r=o[0];e=r}a.subTableData.push([e,t.walletTime?Object(u["k"])(t.walletTime):"---",i||"---"])}})))}}},d=g,b=a("2877"),f=Object(b["a"])(d,i,n,!1,null,null,null);e["default"]=f.exports},e54d:function(t,e,a){}}]);