(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-278e1fbf"],{"907e":function(t,e,i){},f0ae:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"page-exchangeOrder"},[i("div",{staticClass:"exchangeOrder-nav a-3-bd"},[i("c-navTab",{attrs:{activeClassName:"b-1-cl",activeColor:"a-12-bg",className:"b-2-cl",currentTab:t.nowType,navTab:t.navTab,lineHeight:"55"},on:{currentType:t.currentType}}),2===t.nowType?i("div",{staticClass:"exchangeOrder-nav-switchs"},[i("c-switch",{attrs:{value:t.switchFlag},on:{click:t.switchChange}}),i("span",{staticClass:"text"},[t._v(t._s(t.$t("order.exchangeOrder.haveCancel")))])],1):t._e()],1),i("div",{staticClass:"exchangeOrder-options"},[i("c-select",{attrs:{promptText:t.$t("order.exchangeOrder.type"),value:t.side,options:t.sideList,errorHave:!0,width:"120px"},on:{onChanges:t.sideChange}}),i("c-select",{attrs:{promptText:t.$t("order.exchangeOrder.market"),value:t.symbolMarket,options:t.symbolMarketList,errorHave:!0,width:"160px",filterable:!0},on:{onChanges:t.symbolMarketChange}}),i("c-select",{attrs:{promptText:t.$t("order.exchangeOrder.coin"),value:t.symbolCoin,options:t.symbolCoinList,errorHave:!0,filterable:!0,width:"150px"},on:{onChanges:t.symbolCoinChange}})],1),i("div",{staticClass:"exchangeOrder-table"},[i("c-table",{attrs:{imgMap:t.imgMap,colorMap:t.colorMap,loading:t.tabelLoading,columns:t.columns,dataList:t.tabelList,subContent:t.subContent,subColumns:t.subColumns,subContentId:t.subContentId,subLoading:t.subLoading},on:{elementClick:t.tableClick}}),t.paginationObj.total>t.paginationObj.display?i("c-pagination",{attrs:{total:t.paginationObj.total,display:t.paginationObj.display,currentPage:t.paginationObj.currentPage},on:{pagechange:t.pagechange}}):t._e()],1)])},r=[],o=(i("57e7"),i("768b")),s=(i("6b54"),i("87b3"),i("7f7f"),i("28a5"),i("456d"),i("ac6a"),i("f3e2"),i("c5f6"),i("95d5")),n={data:function(){return{imgMap:s["u"],colorMap:s["c"],deleteArr:[],tabelLoading:!0,switchFlag:!1,nowType:1,symbol:"",symbolList:[],side:"all",paginationObj:{total:0,display:10,currentPage:1},symbolMarketList:[],symbolMarket:"",symbolCoinList:[],symbolCoin:"",subTableData:{},tabelList:[],revokeList:[],subContent:[],subColumns:[],subContentId:0,subLoading:!1}},watch:{market:function(t){t&&this.baseMarket&&this.initSymbolMarketList()},baseMarket:function(t){t&&this.market&&this.initSymbolMarketList()}},computed:{navTab:function(){return[{name:this.$t("order.exchangeOrder.nowOrder"),index:1},{name:this.$t("order.exchangeOrder.hisOrder"),index:2}]},sideList:function(){return[{code:"all",value:this.$t("order.exchangeOrder.all")},{code:"buy",value:this.$t("order.exchangeOrder.buy")},{code:"sell",value:this.$t("order.exchangeOrder.sell")}]},market:function(){return{market:this.$store.state.baseData.leverMarket}},baseMarket:function(){return this.$store.state.baseData.market},columns:function(){var t=[];return 1===this.nowType&&(t=[{title:this.$t("order.exchangeOrder.nowOrderTime"),width:"70px"},{title:this.$t("order.exchangeOrder.coin"),width:"70px"},{title:this.$t("order.exchangeOrder.nowOrderType"),width:"50px"},{title:this.$t("order.exchangeOrder.nowOrderPrice")},{title:this.$t("order.exchangeOrder.nowOrderVolume")},{title:this.$t("order.exchangeOrder.nowOrderTotol")},{title:this.$t("order.exchangeOrder.nowOrderAverage")},{title:this.$t("order.exchangeOrder.nowOrderTransaction"),width:"140px"},{title:this.$t("order.exchangeOrder.nowOrderOptions"),width:"100px"}]),2===this.nowType&&(t=[{title:this.$t("order.exchangeOrder.hisOrderTime"),width:"100px"},{title:this.$t("order.exchangeOrder.coin"),width:"50px"},{title:this.$t("order.exchangeOrder.hisOrderType"),width:"50px"},{title:this.$t("order.exchangeOrder.hisOrderPrice")},{title:this.$t("order.exchangeOrder.hisOrderVolume")},{title:this.$t("order.exchangeOrder.hisOrderAverage"),width:"130px"},{title:this.$t("order.exchangeOrder.hisOrderStatus")},{title:this.$t("order.exchangeOrder.hisOrderOptions"),width:"100px"}]),t},axiosSide:function(){return"all"===this.side?"":this.side},axiosSymbol:function(){return"".concat(this.symbolCoin).concat(this.symbolMarket).toLowerCase()},symbolAll:function(){return this.$store.state.baseData.symbolAll},openOrderCollect:function(){return this.$store.state.baseData.publicInfo?this.$store.state.baseData.publicInfo.open_order_collect:null}},methods:{init:function(){this.$route.query.nowType&&(this.nowType=Number(this.$route.query.nowType)),this.market&&this.baseMarket&&this.initSymbolMarketList()},symbolMarketChange:function(t){if(this.symbolMarket!==t.code){this.symbolMarket=t.code;var e=[];"1"===this.openOrderCollect&&"all"===this.symbolMarket&&e.push({value:"".concat(this.$t("order.exchangeOrder.all")),code:"all"});var i=this.market.market,a=i[this.symbolMarket];"all"===this.symbolMarket&&(a=this.symbolAll),a&&Object.keys(a).forEach((function(t){var i=t.split("/"),r=a[t],o=r.showName||r.name;e.push({code:"".concat(i[0]).concat(i[1]),value:o})})),this.symbolCoinList=e,e.length&&this.symbolCoinChange(e[0])}},symbolCoinChange:function(t){this.symbolCoin!==t.code&&(this.symbolCoin=t.code,this.paginationObj.currentPage=1,this.paginationObj.total=0,this.tabelList=[],this.tabelLoading=!0,this.clearSub(),this.getData())},initSymbolMarketList:function(){var t=this.market.market,e=this.baseMarket.coinList,i=[];"1"===this.openOrderCollect&&i.push({value:this.$t("order.exchangeOrder.all180"),code:"all"}),Object.keys(t).forEach((function(t){i.push({value:Object(s["l"])(t,e),code:t})})),this.symbolMarketList=i,i.length&&this.symbolMarketChange(i[0])},switchChange:function(){this.switchFlag=!this.switchFlag,this.getData()},currentType:function(t){this.nowType!==t.index&&(this.nowType=t.index,this.paginationObj.currentPage=1,this.paginationObj.total=0,this.tabelList=[],this.tabelLoading=!0,this.clearSub(),this.getData())},getData:function(){1===this.nowType?this.getNowData():2===this.nowType&&this.getHisData()},getFix:function(t,e){var i=0,a=0,r="".concat(e,"/").concat(t),o=this.market.market;if(o[t]&&o[t][r]){var s=o[t][r],n=s.price,c=s.volume;i=n,a=c}return{marketFix:i,coinFix:a}},getNowData:function(){var t=this,e="all"===this.symbolCoin?"":this.symbolCoin,i=e.toLowerCase(),a="/lever/order/list/new",r={side:this.axiosSide,pageSize:this.paginationObj.display,page:this.paginationObj.currentPage,symbol:i};"1"===this.openOrderCollect&&(r.entrust=this.nowType,r.orderType=2,a="order/entrust_search"),this.axios({url:a,method:"post",params:r}).then((function(e){if(1===t.nowType)if("0"===e.code.toString()){var i=[],a=e.data.orderList;"1"===t.openOrderCollect&&(a=e.data.orders),a.forEach((function(e){var a=e.quoteCoin||e.countCoin,r=t.getFix(a,e.baseCoin),o=r.marketFix,n=r.coinFix;i.push({id:e.id,data:[e.created_at,"".concat(e.baseCoin,"/").concat(a),[{text:e.side_text,classes:"BUY"===e.side?"b-5-cl":"b-6-cl"}],"1"===e.type.toString()?"".concat(Object(s["f"])(e.price,o)," ").concat(a):t.$t("order.exchangeOrder.marketPrice"),"".concat(Object(s["f"])(e.volume,n)," ").concat(e.baseCoin),"".concat(Object(s["f"])(e.total_price,o)," ").concat(a),"".concat(Object(s["f"])(e.avg_price,o)," ").concat(a),[{text:"".concat(Object(s["f"])(e.deal_volume,n)," ").concat(e.baseCoin),subContent:{text:"".concat(Object(s["f"])(e.remain_volume,n)," ").concat(e.baseCoin)}}],["1"===e.type.toString()?{type:"button",text:t.$t("order.exchangeOrder.cancel"),eventType:"cancelOrder"}:""]]})})),t.tabelLoading=!1,t.tabelList=i,t.paginationObj.total=e.data.count}else t.tabelLoading=!1,t.$bus.$emit("tip",{text:e.msg,type:"error"})}))},pagechange:function(t){this.paginationObj.currentPage=t,this.clearSub(),this.getData()},getHisData:function(){var t=this,e="all"===this.symbolCoin?"":this.symbolCoin,i=e.toLowerCase(),a="/lever/order/history",r={side:this.axiosSide,pageSize:this.paginationObj.display,page:this.paginationObj.currentPage,isShowCanceled:this.switchFlag?1:0,symbol:i};"1"===this.openOrderCollect&&(r.entrust=this.nowType,r.orderType=2,a="order/entrust_search"),this.axios({url:a,method:"post",params:r}).then((function(e){if(2===t.nowType)if("0"===e.code.toString()){var i=[],a=e.data.orderList;"1"===t.openOrderCollect&&(a=e.data.orders),a.forEach((function(e){var a=e.quoteCoin||e.countCoin,r=t.getFix(a,e.baseCoin),o=r.marketFix,n=r.coinFix,c=[];c=2===e.status||4===e.status&&0!==parseFloat(e.deal_volume)?[{type:"subTable",text:t.$t("order.exchangeOrder.details"),eventType:"view"}]:[],i.push({id:e.id,data:[e.created_at,"".concat(e.baseCoin,"/").concat(a),[{text:e.side_text,classes:"BUY"===e.side?"b-5-cl":"b-6-cl"}],"1"===e.type.toString()?"".concat(Object(s["f"])(e.price,o)," ").concat(a):t.$t("order.exchangeOrder.marketPrice"),"".concat(Object(s["f"])(e.volume,n)," ").concat(e.baseCoin),"".concat(Object(s["f"])(e.avg_price,o)," ").concat(a),e.status_text,c]})})),t.tabelLoading=!1,t.tabelList=i,t.paginationObj.total=e.data.count}else t.tabelLoading=!1,t.$bus.$emit("tip",{text:e.msg,type:"error"})}))},sideChange:function(t){this.side!==t.code&&(this.side=t.code,this.paginationObj.currentPage=1,this.paginationObj.total=0,this.tabelList=[],this.tabelLoading=!0,this.clearSub(),this.getData())},tableClick:function(t,e){"cancelOrder"===t&&this.cancelOrder(e),"view"===t&&this.getSubTableData(e)},clearSub:function(){this.subContentId=null,this.subColumns=[],this.subContent=[],this.subLoading=!1},getSubTableData:function(t){var e=this;if(t.open){this.subContentId=t.id,this.subColumns=[this.$t("order.exchangeOrder.detailsTime"),this.$t("order.exchangeOrder.detailsPrice"),this.$t("order.exchangeOrder.detailsVolume"),this.$t("order.exchangeOrder.detailsTotol"),this.$t("order.exchangeOrder.detailsFee")];var i="";this.tabelList.forEach((function(e){if(e.id===t.id){var a=Object(o["a"])(e.data,2);i=a[1]}}));var a="".concat(i.split("/")[0]).concat(i.split("/")[1]);this.subContent=[],this.subLoading=!0,this.axios({url:"/lever/trade/list_by_order",method:"post",params:{symbol:a,order_id:t.id}}).then((function(a){if(t.id===e.subContentId)if("0"===a.code.toString()){var r=[];a.data.trade_list.forEach((function(t){var a=e.getFix(i.split("/")[1],i.split("/")[0]),o=a.marketFix,n=a.coinFix;r.push({ctime:t.ctime,price:Object(s["f"])(t.price,o),volume:Object(s["f"])(t.volume,n),dealPrice:Object(s["f"])(t.deal_price,o),fee:t.fee})})),e.subLoading=!1,e.subContent=r}else e.subLoading=!1,e.$bus.$emit("tip",{text:a.msg,type:"error"})}))}},cancelOrder:function(t){var e=this;if(-1===this.revokeList.indexOf(t)){this.revokeList.push(t);var i="";this.tabelList.forEach((function(e){if(e.id===t){var a=Object(o["a"])(e.data,2);i=a[1]}})),i="".concat(i.split("/")[0]).concat(i.split("/")[1]),this.axios({url:"lever/order/cancel",method:"post",params:{orderId:t,symbol:i}}).then((function(i){var a=e.revokeList.indexOf(t);if(e.revokeList.splice(a,1),"0"===i.code.toString()){e.$bus.$emit("tip",{text:i.msg,type:"success"});var r=0;e.tabelList.forEach((function(e,i){e.id===t&&(r=i)})),e.tabelList.splice(r,1)}else e.$bus.$emit("tip",{text:i.msg,type:"error"})}))}}}},c=(i("907e"),{mixins:[n],mounted:function(){this.init()}}),l=c,d=i("2877"),h=Object(d["a"])(l,a,r,!1,null,null,null);e["default"]=h.exports}}]);