(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ebc8d66e"],{"1ea1":function(t,a,i){"use strict";i.r(a);var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("section",{staticClass:"page-flowingWater"},[i("div",{staticClass:"flowingWater-nav a-3-bd b-1-cl"},[t._v("\n    "+t._s(t.$t("assets.otcFlowingWater.title"))+"\n  ")]),i("div",{staticClass:"flowingWater-options"},[i("c-select",{attrs:{promptText:t.$t("assets.otcFlowingWater.type"),value:t.type,options:t.typeList,errorHave:!0,width:"120px"},on:{onChanges:t.typeChange}}),i("c-select",{attrs:{promptText:t.$t("assets.otcFlowingWater.coin"),value:t.symbol,options:t.symbolList,errorHave:!0,width:"120px",filterable:!0},on:{onChanges:t.symbolChange}})],1),i("div",{staticClass:"flowingWater-table"},[i("c-table",{attrs:{imgMap:t.imgMap,colorMap:t.colorMap,loading:t.tabelLoading,columns:t.columns,dataList:t.tabelList}}),t.paginationObj.total>t.paginationObj.display?i("c-pagination",{attrs:{total:t.paginationObj.total,display:t.paginationObj.display,currentPage:t.paginationObj.currentPage},on:{pagechange:t.pagechange}}):t._e()],1)])},s=[],n=(i("ed57"),i("8335"),i("79cb"),i("95d5")),o={name:"page-flowingWater",data:function(){return{tabelLoading:!0,imgMap:n["u"],colorMap:n["c"],type:"all",symbol:"",tabelList:[],symbolList:[],paginationObj:{total:0,display:10,currentPage:1}}},computed:{typeList:function(){return[{code:"all",value:this.$t("assets.otcFlowingWater.all")},{code:"1",value:this.$t("assets.otcFlowingWater.inOtc")},{code:"2",value:this.$t("assets.otcFlowingWater.outOtc")}]},market:function(){return this.$store.state.baseData.market},columns:function(){var t=[{title:this.$t("assets.otcFlowingWater.listTime"),width:"20%"},{title:this.$t("assets.otcFlowingWater.listCoin"),width:"20%"},{title:this.$t("assets.otcFlowingWater.listType"),width:"20%"},{title:this.$t("assets.otcFlowingWater.listVolume"),width:"40%"}];return t},axiosSymbol:function(){return"all"===this.symbol?null:this.symbol},axiosType:function(){return"all"===this.type?null:this.type}},watch:{market:function(t){t&&this.setData()}},methods:{init:function(){this.market&&this.setData()},symbolChange:function(t){this.symbol=t.code,this.paginationObj.currentPage=1,this.paginationObj.total=0,this.tabelList=[],this.tabelLoading=!0,this.getData()},typeChange:function(t){this.type=t.code,this.paginationObj.currentPage=1,this.paginationObj.total=0,this.tabelList=[],this.tabelLoading=!0,this.getData()},setData:function(){var t=this,a=[{code:"all",value:this.$t("assets.otcFlowingWater.allCoin")}];Object.keys(this.market.coinList).forEach((function(i){1===t.market.coinList[i].otcOpen&&a.push({value:Object(n["l"])(i,t.market.coinList),code:i})})),this.symbolList=a,this.symbol="all",this.getData()},getData:function(){var t=this;this.axios({url:"/record/otc_transfer_list",params:{pageSize:this.paginationObj.display,page:this.paginationObj.currentPage,coinSymbol:this.axiosSymbol,transactionType:this.axiosType}}).then((function(a){if(t.tabelLoading=!1,"0"===a.code.toString()){var i=[];a.data.financeList.forEach((function(a,e){var s=t.market.coinList,o=s[a.coinSymbol]&&s[a.coinSymbol].showPrecision||0;i.push({id:e,data:[a.createTime,Object(n["l"])(a.coinSymbol,s),a.transactionType_text,Object(n["f"])(a.amount,o)]})})),t.tabelList=i,t.paginationObj.total=a.data.count}else t.$bus.$emit("tip",{text:a.msg,type:"error"})}))},pagechange:function(t){this.paginationObj.currentPage=t,this.getData()}}},l=(i("bfc0"),{mixins:[o],mounted:function(){this.init()}}),c=l,r=i("2877"),g=Object(r["a"])(c,e,s,!1,null,null,null);a["default"]=g.exports},bfc0:function(t,a,i){}}]);