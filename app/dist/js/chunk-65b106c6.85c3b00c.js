(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65b106c6"],{c57b:function(t,e,i){},fc1a:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"page-coflowingWater"},[i("div",{staticClass:"flowingWater-nav a-3-bd e-1-cl"},[t._v("\n    "+t._s(t.$t("assets.otcFlowingWater.title"))+"\n  ")]),i("div",{staticClass:"flowingWater-options"},[i("c-calendar",{attrs:{width:"120px",name:"calendar",value:t.startTime,promptText:t.$t("futures.coFlowingWater.startTime"),errorHave:!0},on:{onChanges:t.startTimeSelect}}),i("c-calendar",{attrs:{width:"120px",name:"calendar",value:t.endTime,promptText:t.$t("futures.coFlowingWater.endTime"),errorHave:!0},on:{onChanges:t.endTimeSelect}}),i("c-select",{attrs:{promptText:t.$t("futures.coFlowingWater.coin"),value:t.symbol,options:t.symbolList,errorHave:!0,width:"120px",filterable:!0},on:{onChanges:t.symbolChange}}),i("c-select",{attrs:{promptText:t.$t("futures.coFlowingWater.type"),value:t.type,options:t.typeList,errorHave:!0,filterable:!0,width:"120px"},on:{onChanges:t.typeChange}})],1),i("div",{staticClass:"flowingWater-table"},[i("c-table",{attrs:{cellHeight:55,imgMap:t.imgMap,colorMap:t.colorMap,loading:t.tabelLoading,columns:t.columns,dataList:t.tabelList}}),t.paginationObj.total>t.paginationObj.display?i("c-pagination",{attrs:{total:t.paginationObj.total,display:t.paginationObj.display,currentPage:t.paginationObj.currentPage},on:{pagechange:t.pagechange}}):t._e()],1)])},n=[],s=(i("ed57"),i("79cb"),i("95d5")),o={name:"page-flowingWater",data:function(){return{tabelLoading:!0,imgMap:s["u"],colorMap:s["c"],tabelList:[],paginationObj:{total:0,display:10,currentPage:1},startTime:"",endTime:"",type:"all",symbol:""}},computed:{tradeLinkUrl:function(){return this.$store.state.baseData&&this.$store.state.baseData.publicInfo?"".concat(this.linkurl.coUrl,"/trade"):""},marginCoinList:function(){return this.$store.state.future.marginCoinList?this.$store.state.future.marginCoinList:[]},marginCoinInfor:function(){return this.$store.state.future.marginCoinInfor?this.$store.state.future.marginCoinInfor:{}},symbolList:function(){var t=[];return 0!==this.marginCoinList.length&&(this.marginCoinList.forEach((function(e){t.push({value:e,code:e})})),this.symbol=t[0].code),t},typeList:function(){return[{code:"all",value:this.$t("futures.coFlowingWater.all")},{code:"1",value:this.$t("futures.coFlowingWater.transferIn")},{code:"2",value:this.$t("futures.coFlowingWater.transferOut")},{code:"5",value:this.$t("futures.coFlowingWater.fee")},{code:"6",value:this.$t("futures.coFlowingWater.typeList5")},{code:"7",value:this.$t("futures.coFlowingWater.typeList4")},{code:"8",value:this.$t("futures.coFlowingWater.loss")},{code:"9",value:this.$t("futures.coFlowingWater.typeList1")},{code:"10",value:this.$t("futures.coFlowingWater.typeList2")},{code:"11",value:this.$t("futures.coFlowingWater.typeList3")}]},axiosType:function(){return"all"===this.type?"":this.type},market:function(){return this.$store.state.baseData.market},columns:function(){var t=[{title:this.$t("futures.coFlowingWater.time"),width:"20%"},{title:this.$t("futures.coFlowingWater.type"),width:"20%"},{title:this.$t("futures.coFlowingWater.amount"),width:"20%"},{title:this.$t("futures.order.contract"),width:"20%"},{title:this.$t("futures.coFlowingWater.coin"),width:"20%"}];return t}},watch:{symbol:function(t){t&&this.getData()}},methods:{init:function(){this.resetTime()},resetTime:function(){var t=(new Date).getTime(),e=12096e5;this.startTime=this.getNowTime(t-e),this.endTime=this.getNowTime(t),this.start="".concat(this.startTime," 00:00:00"),this.end="".concat(this.endTime," 23:59:59")},getNowTime:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=new Date(t),i=e.getFullYear(),a=e.getMonth()+1,n=e.getDate();return"".concat(i,"-").concat(a,"-").concat(n)},startTimeSelect:function(t){this.startTime=t,this.start="".concat(this.startTime," 00:00:00"),this.end="".concat(this.endTime," 23:59:59"),this.paginationObj.currentPage=1,this.paginationObj.total=0,this.tabelList=[],this.tabelLoading=!0,this.getData()},endTimeSelect:function(t){this.endTime=t,this.start="".concat(this.startTime," 00:00:00"),this.end="".concat(this.endTime," 23:59:59"),this.paginationObj.currentPage=1,this.paginationObj.total=0,this.tabelList=[],this.tabelLoading=!0,this.getData()},symbolChange:function(t){this.symbol=t.code,this.paginationObj.currentPage=1,this.paginationObj.total=0,this.tabelList=[],this.tabelLoading=!0,this.getData()},typeChange:function(t){this.type=t.code,this.paginationObj.currentPage=1,this.paginationObj.total=0,this.tabelList=[],this.tabelLoading=!0,this.getData()},getData:function(){var t=this;this.axios({url:"record/get_transaction_list",hostType:"co",params:{limit:this.paginationObj.display,page:this.paginationObj.currentPage,beginTime:new Date(this.start).getTime(),endTime:new Date(this.end).getTime(),type:this.axiosType,symbol:this.symbol}}).then((function(e){if(t.tabelLoading=!1,"0"===e.code.toString()){var i=[];e.data.transList&&0!==e.data.transList.length&&e.data.transList.forEach((function(e,a){i.push({id:a,data:[e.ctime,e.type,Object(s["f"])(e.amount,t.marginCoinInfor[t.symbol].marginCoinPrecision),e.contractName,t.symbol]})})),t.tabelList=i,t.paginationObj.total=e.data.count}else t.$bus.$emit("tip",{text:e.msg,type:"error"})}))},pagechange:function(t){this.paginationObj.currentPage=t,this.getData()}}},r=(i("c57b"),{mixins:[o],mounted:function(){this.init()}}),c=r,l=i("2877"),u=Object(l["a"])(c,a,n,!1,null,null,null);e["default"]=u.exports}}]);