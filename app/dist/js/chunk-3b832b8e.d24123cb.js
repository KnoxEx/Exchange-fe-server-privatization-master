(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b832b8e"],{2661:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.excheifFlag?a("excheif"):a("broker")},s=[],n={computed:{excheifFlag:function(){return this.$store.state.baseData.exchief_project_switch}}},o=(a("562b"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"broker"},[a("div",{staticClass:"top-content",style:t.username?t.backgroundImg2:t.backgroundImg},[a("div",{staticClass:"warp"},[a("h2",{staticClass:"page-title f-8-cl"},[t._v("\n        "+t._s(t.$t("broker.broker"))+"\n      ")]),a("div",{staticClass:"wk-info"},[t.username?a("div",{staticClass:"item-box",class:t.username?"userName":""},[a("div",{staticClass:"box-bar c-9-bd"},[a("p",{staticClass:"name f-8-cl"},[t._v("\n              "+t._s(t.username)+"\n            ")]),a("p",{staticClass:"txt f-9-cl"},[t._v("\n              "+t._s(t.$t("broker.myType"))+"\n            ")])])]):t._e(),a("div",{staticClass:"item-box item-box-left",class:t.isDiractShow?"indireact":"",style:t.username?"margin-left:0":""},[a("div",{staticClass:"box-bar c-9-bd"},[a("p",{staticClass:"name f-8-cl"},[t._v("\n              "+t._s(t.userCount)+"\n            ")]),a("p",{staticClass:"txt f-9-cl"},[t._v("\n              "+t._s(t.$t("broker.invitations"))+"\n            ")])])]),t.isDiractShow?a("div",{staticClass:"item-box"},[a("div",{staticClass:"box-bar c-9-bd"},[a("p",{staticClass:"name f-8-cl"},[t._v("\n              "+t._s(t.indirect)+"\n            ")]),a("p",{staticClass:"txt f-9-cl"},[t._v("\n              "+t._s(t.$t("broker.indirect"))+"\n            ")])])]):t._e(),a("div",{staticClass:"item-box"},[a("div",{staticClass:"box-bar c-9-bd"},[a("p",{staticClass:"name f-8-cl"},[t._v("\n              "+t._s(t.fixDFun(t.allBonusAmount,t.allBonusCoin))+"\n              "),a("span",{staticClass:"dy"},[t._v("\n              "+t._s(t._f("getCoinShowName")(t.allBonusCoin,t.coinList))+"\n            ")])]),a("p",{staticClass:"txt f-9-cl"},[t._v("\n              "+t._s(t.$t("broker.revenue"))+"\n            ")])])])])])]),a("div",{staticClass:"warp main-content"},[a("div",{staticClass:"mining-data"},[a("div",{staticClass:"mining-tit f-2-cl c-5-bd c-4-bg"},[t._l(t.tabList,(function(e,i){return a("span",{key:i,staticClass:"item",class:{"selected c-8-bd f-1-cl":t.tableType===e.key},on:{click:function(a){return t.switcherType(e.key)}}},[t._v(t._s(e.text))])})),a("div",{staticClass:"search"})],2),a("div",{staticClass:"filter-box e-2-cl d-5-bd c-4-bg"},[a("c-select",{attrs:{value:t.coinValue,promptText:t.symbolType,width:"120px",name:"coinValue",options:t.coinOPtion,filterable:!0},on:{onChanges:t.selectOnChange}}),"agent_account"===t.tableType?a("c-calendar",{attrs:{width:"120px",name:"calendar",value:t.calendarData,promptText:t.timeText},on:{onChanges:t.onChangeCalendar}}):t._e(),a("c-select",{attrs:{value:t.typeValue,promptText:t.type,width:"120px",name:"typeValue",options:t.typeOption},on:{onChanges:t.selectOnChange}}),t.typeValue?a("c-inputLine",{attrs:{name:"searchValue",value:t.searchValue,width:"200px",promptText:t.promptText,errorHave:t.errorHave},on:{onchanges:t.inputLineChange}}):t._e()],1),a("c-table",{attrs:{imgMap:t.imgMap,colorMap:t.colorMap,columns:t.columns,dataList:t.dataList,loading:t.tableLoading,bodyClasses:t.bodyClasses,headClasses:t.headClasses},on:{elementClick:t.goViewPage}})],1),t.pagination.count/t.pagination.pageSize>1?a("c-pagination",{attrs:{total:t.pagination.count,classes:"c-4-bg","current-page":t.pagination.page,display:t.pagination.pageSize},on:{pagechange:t.pagechange}}):t._e()],1)])}),c=[],r=(a("e0de"),a("bd33"),a("79cb"),a("8335"),a("95d5")),l={name:"broker",data:function(){return{headClasses:"c-4-bg",bodyClasses:"c-4-bg",tableLoading:!0,imgMap:r["u"],colorMap:r["c"],backgroundImg:"background: url(".concat(r["u"].jjrNeaderBg,")  center bottom no-repeat #0E1A2E"),backgroundImg2:"background: url(".concat(r["u"].broker_title_bg,") center bottom no-repeat #0E1A2E;background-size: 100% 70%;"),tableData:{},tableType:"agent_data",searchValue:"",calendarData:null,coinValue:"",typeValue:null,userCount:0,indirect:0,isDiractShow:!1,allBonusAmount:null,allBonusCoin:"BTC",errorHave:!1,pagination:{count:0,pageSize:10,page:1},symbolType:this.$t("broker.symbolType"),type:this.$t("broker.type")}},watch:{coinOPtion:function(t){t.length&&(this.coinValue="USDT")},coinValue:function(t){t&&this.getData()},typeValue:function(t){t&&this.searchValue&&this.getData()}},computed:{promptText:function(){switch(this.typeValue){case 1:return this.$t("broker.promptText1");case 2:return this.$t("broker.promptText2");default:return this.$t("broker.promptText3")}},timeText:function(){return this.$t("broker.time")},isLogin:function(){return this.$store.state.baseData.isLogin},username:function(){return!!this.$store.state.baseData.userInfo&&this.$store.state.baseData.userInfo.agentRoleName},coinList:function(){return this.$store.state.baseData.market?this.$store.state.baseData.market.coinList:null},coinOPtion:function(){var t=this,e=[];if(this.coinList){var a=Object.keys(this.coinList);return a.forEach((function(a){e.push({value:Object(r["l"])(t.coinList[a].name,t.coinList),code:t.coinList[a].name})})),e}return[]},typeOption:function(){return[{value:"UID",code:1},{value:this.$t("broker.phoneeNumber"),code:2},{value:this.$t("broker.email"),code:3}]},tabList:function(){return[{key:"agent_data",text:this.$t("broker.remaid")},{key:"agent_account",text:this.$t("broker.agentAccount")}]},columns:function(){return"agent_data"===this.tableType?[{title:"UID",width:"100px"},{title:this.$t("broker.phoneeNumber"),width:"260px"},{title:this.$t("broker.email"),width:"260px"},{title:this.$t("broker.tier"),width:"100px"},{title:"".concat(this.$t("broker.fee"),"(").concat(Object(r["l"])(this.coinValue,this.coinList),")"),width:"150px"},{title:"".concat(this.$t("broker.amount"),"(").concat(Object(r["l"])(this.allBonusCoin,this.coinList),")"),width:"150px"},{title:this.$t("broker.opera"),width:"160px",classes:"lastTh"}]:[{title:"UID",width:"8%"},{title:this.$t("broker.phoneeNumber"),width:"22%"},{title:this.$t("broker.email"),width:"26%"},{title:this.$t("broker.tier"),width:"22%"},{title:"".concat(this.$t("broker.ccNumber"),"(").concat(Object(r["l"])(this.coinValue,this.coinList),")"),width:"22%"}]},dataList:function(){var t=this;if(this.tableData&&this.tableData.length){var e=[];return this.tableData.forEach((function(a){"agent_data"===t.tableType?e.push({id:a.uid,data:[a.uid,a.mobileNumber?a.mobileNumber:"/",a.email?a.email:"/",a.level,t.fixDFun(a.feeAmount,t.coinValue),t.fixDFun(a.bonusAmount,t.coinValue),[{type:"button",text:t.$t("broker.view"),iconClass:[""],eventType:"view",classes:[]}]]}):e.push({id:a.uid,data:[a.uid,a.mobileNumber?a.mobileNumber:"/",a.email?a.email:"/",a.level,t.fixDFun(a.amount,t.coinValue)]})})),e}return[]}},methods:{init:function(){this.coinOPtion&&(this.coinValue="USDT"),this.getData()},fixDFun:function(t,e){return this.showPrecision(e)?Object(r["f"])(t,this.showPrecision(e)):t},showPrecision:function(t){if(this.$store.state.baseData&&this.$store.state.baseData.market){var e=this.$store.state.baseData.market.coinList;if(e[t]){var a=e[t].showPrecision;if(a)return a}}return 4},pagechange:function(t){this.pagination.page=t,this.getData()},getData:function(t){var e=this;t&&(this.pagination.page=1),this.tableLoading=!0;var a=this.$store.state.url.common.agent_data_query,i={pageNum:this.pagination.page,coinName:this.coinValue||"USDT",keyword_type:this.typeValue||1,keyword:this.searchValue};"agent_account"===this.tableType&&(a=this.$store.state.url.common.agent_account_query,i.dayTime=this.calendarData.replace(/\//g,"-")),this.axios({url:a,params:i,method:"post"}).then((function(t){"0"===t.code&&(e.tableData=t.data.mapList,e.pagination.count=t.data.count,"agent_data"===e.tableType&&(e.userCount=t.data.userCount,(t.data.inviteNum||0===t.data.inviteNum)&&-1!==t.data.inviteNum&&(e.indirect=t.data.inviteNum,e.isDiractShow=!0),e.allBonusAmount=t.data.allBonusAmount,e.allBonusCoin=t.data.allBonusCoin)),e.tableLoading=!1}))},switcherType:function(t){this.tableType=t,this.typeValue="",this.searchValue="",this.coinValue="USDT",this.calendarData="",this.pagination.page=1,this.getData()},inputLineChange:function(t,e){this[e]=t,this.typeValue&&this.getData(!0)},formatJson:function(t,e){return e.map((function(e){return t.map((function(t){return e[t]}))}))},onChangeCalendar:function(t){this.calendarData=t},selectOnChange:function(t,e){this[e]=t.code},goViewPage:function(t,e){this.$router.push("/broker/".concat(e))}}},u=(a("a80d"),{mixins:[l],mounted:function(){this.init()}}),h=u,d=a("2877"),m=Object(d["a"])(h,o,c,!1,null,null,null),p=m.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"broker"},[a("div",{staticClass:"top-content",style:t.backgroundImg},[a("div",{staticClass:"warp"},[a("h2",{staticClass:"page-title f-8-cl"},[t._v("\n        "+t._s(t.$t("broker.broker"))+"\n      ")]),a("div",{staticClass:"top-carp"},[a("div",{staticClass:"carp-affilte",style:t.carpbgImg},[a("p",[t._v("Affiliate")]),a("p",[t._v("\n        "+t._s(t.$t("excheif.affiliate"))+"\n            ")])]),a("div",{staticClass:"carp-master",style:t.carpbgImgTow},[a("p",[t._v("Master Affiliate")]),a("p",[t._v("\n            "+t._s(t.$t("excheif.affiliateTow"))+"\n            ")])])])])]),a("div",{staticClass:"warp main-content"},[a("div",{staticClass:"mining-data c-4-bg"},[a("div",{staticClass:"mining-tit f-2-cl c-5-bd"},[a("span",{staticClass:"f-1-cl"},[t._v(t._s(t.$t("excheif.title")))])]),a("div",{staticClass:"center first-center"},[a("div",{staticClass:"center-main"},[a("div",[a("p",{staticClass:"f-2-cl"},[t._v(t._s(t.$t("personal.inviteCodeManagement.showNumber")))]),a("p",{staticClass:"f-1-cl"},[t._v(t._s(t.userCount))])])]),a("div",{staticClass:"invitation-way"},[a("div",{staticClass:"invitation-ways"},[a("div",{staticClass:"a-4-bg"},[a("svg",{staticClass:"icon icon-18",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-b_17"}})]),a("span",[t._v(t._s(t.inviteUrl))]),a("span",{on:{click:function(e){return t.copyClick()},mouseenter:function(e){return t.handMouseenter()},mouseleave:function(e){return t.handMouseleave()}}},[t.inviteUrlShow?a("span",[a("svg",{staticClass:"icon icon-14",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-a_9"}})])]):a("span",[a("svg",{staticClass:"icon icon-14",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-a_9_1"}})])])]),a("a",{staticClass:"inviteQECode-show",attrs:{href:"javascript:;"},on:{click:t.imgCodeShow}},[a("svg",{staticClass:"icon icon-18",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-b_18"}})])])])])])])]),a("div",{staticClass:"mining-data c-4-bg"},[a("div",{staticClass:"mining-tit f-2-cl c-5-bd"},[a("span",{staticClass:"f-1-cl"},[t._v(t._s(t.$t("excheif.account")))])]),a("div",{staticClass:"center"},[a("div",{staticClass:"center-main"},[a("div",{staticClass:"main-right"},[a("p",{staticClass:"f-2-cl"},[t._v(t._s(t.$t("excheif.message")))]),a("p",{staticClass:"f-1-cl"},[t._v(t._s(t.level.levelOneSum)+" "+t._s(t.level.symbol))])]),a("div",{staticClass:"main-right"},[a("p",{staticClass:"f-2-cl"},[t._v(t._s(t.$t("excheif.message2")))]),a("p",{staticClass:"f-1-cl"},[t._v(t._s(t.level.levelTwoSum)+" "+t._s(t.level.symbol))])]),a("div",{staticClass:"main-right"},[a("p",{staticClass:"f-2-cl"},[t._v(t._s(t.$t("excheif.message3")))]),a("p",{staticClass:"f-1-cl"},[t._v(t._s(t.level.allSum)+" "+t._s(t.level.symbol))])])])])]),t._l(t.tableData,(function(e,i){return a("div",{key:e.agentRoleId,class:0===i?"":"user-tow"},[a("div",{staticClass:"content-master c-4-bg"},[a("span",{staticClass:"f-1-cl"},[t._v("\n          "+t._s(e.agentRoleName)+"（"+t._s(e.agentRoleNum)+t._s(t.$t("excheif.preson"))+"）\n        ")])]),a("c-table",{attrs:{imgMap:t.imgMap,colorMap:t.colorMap,columns:t.columns,dataList:e.newList,loading:t.tableLoading,bodyClasses:t.bodyClasses,headClasses:t.headClasses}})],1)})),a("div",{staticClass:"user-tow remark c-4-bg"},[a("div",[a("div",{staticClass:"content-master f-1-cl"},[t._v("\n            "+t._s(t.$t("excheif.remeakerTile"))+"\n          ")]),a("ul",{staticClass:"remark-list"},[a("li",[t._v("\n              1."+t._s(t.$t("excheif.remark[0]"))+"。\n            ")]),a("li",{staticStyle:{"padding-left":"12px"}},[t._v("\n              "+t._s(t.$t("excheif.remark[1]"))+"。\n            ")]),a("li",[t._v("\n              2."+t._s(t.$t("excheif.remark[2]"))+"。\n            ")])])]),a("div",[a("div",{staticClass:"content-master f-1-cl"},[t._v("\n            "+t._s(t.$t("excheif.remarkTitle2"))+"\n          ")]),a("ul",{staticClass:"remark-list"},[a("li",[t._v("\n              1."+t._s(t.$t("excheif.remark2[0]"))+"。\n            ")]),a("li",{staticStyle:{"padding-left":"12px"}},[t._v("\n              "+t._s(t.$t("excheif.remark2[1]"))+"。\n            ")]),a("li",[t._v("\n              2."+t._s(t.$t("excheif.remark2[2]"))+"。\n            ")]),a("li",[t._v("\n              3."+t._s(t.$t("excheif.remark2[3]"))+"：2019.10.12-2020.10.03\n            ")])])]),a("div",[a("div",{staticClass:"content-master f-1-cl"},[t._v("\n            "+t._s(t.$t("excheif.remarkTitle3"))+"\n          ")]),a("ul",{staticClass:"remark-list"},[a("li",[t._v("\n              "+t._s(t.$t("excheif.remark3[0]"))+"。\n            ")]),a("li",[t._v("\n              "+t._s(t.$t("excheif.remark3[1]"))+"。\n            ")])])])])],2),t.imgCodeFlag?a("div",{staticClass:"center-img",on:{click:t.imgCodeHide}},[a("img",{attrs:{src:t.inviteQECode}})]):t._e()])},g=[],f={name:"excheif",data:function(){return{headClasses:"c-4-bg",bodyClasses:"c-4-bg",tableLoading:!0,imgMap:r["u"],colorMap:r["c"],backgroundImg:"background: url(".concat(r["u"].jjrNeaderBg,")  center bottom no-repeat #0E1A2E"),carpbgImg:"background: url(".concat(r["u"].broker_carp,")"),carpbgImgTow:"background: url(".concat(r["u"].broker_carp2,")"),tableData:[],userCount:0,inviteUrlShow:!0,inviteUrl:"",inviteQECode:"",inviteQECodeShow:!1,isDiractShow:!1,level:{levelOneSum:"",levelTwoSum:"",symbol:"",allSum:""},errorHave:!1,imgCodeFlag:!1}},watch:{},computed:{columns:function(){return[{title:this.$t("excheif.tabel1"),width:"8%"},{title:this.$t("excheif.tabel2"),width:"22%"},{title:"".concat(this.$t("excheif.tabel3"),"（").concat(this.$t("excheif.preson"),"）"),width:"26%"},{title:this.$t("excheif.tabel4"),width:"22%",styleClass:"brtime"}]}},methods:{init:function(){this.getCode(),this.getLevel(),this.getData()},getCode:function(){var t=this;this.axios({url:this.$store.state.url.common.broker_code,method:"get"}).then((function(e){"0"===e.code&&(t.inviteUrl=e.data.inviteUrl,t.userCount=e.data.inviteNUm,t.inviteQECode=e.data.inviteQRCode)}))},getLevel:function(){var t=this;this.axios({url:this.$store.state.url.common.broker_asset,method:"get"}).then((function(e){"0"===e.code&&(t.level=e.data)}))},getData:function(){var t=this;this.tableLoading=!0,this.axios({url:this.$store.state.url.common.broker_data_list,method:"post"}).then((function(e){"0"===e.code&&e.data&&e.data.length&&e.data.forEach((function(e){var a=e;a.newList=[],a.list&&a.list.length&&a.list.forEach((function(t){a.newList.push({id:t.uid,data:[t.nickName,"".concat(t.otcSumBrokerage,"（").concat(t.otcBrokerageSymbol,"）"),t.num,[{type:"html",text:"".concat(t.dateStr,"<br>").concat(t.timeStr)}]]})})),t.tableData.push(a)})),t.tableLoading=!1}))},copyClick:function(){this.copy(this.inviteUrl)},copy:function(t){function e(e){e.clipboardData.setData("text/plain",t),e.preventDefault()}this.$bus.$emit("tip",{text:this.$t("personal.prompt.copySucces"),type:"success"}),document.addEventListener("copy",e),document.execCommand("copy"),document.removeEventListener("copy",e)},handMouseenter:function(){this.inviteUrlShow=!1},handMouseleave:function(){this.inviteUrlShow=!0},formatJson:function(t,e){return e.map((function(e){return t.map((function(t){return e[t]}))}))},imgCodeShow:function(){this.imgCodeFlag=!0},imgCodeHide:function(){this.imgCodeFlag=!1}}},v=(a("e52b"),{mixins:[f],mounted:function(){this.init()}}),C=v,_=Object(d["a"])(C,b,g,!1,null,null,null),k=_.exports,x={mixins:[n],components:{Broker:p,Excheif:k}},y=x,w=Object(d["a"])(y,i,s,!1,null,null,null);e["default"]=w.exports},"562b":function(t,e,a){},a80d:function(t,e,a){},e52b:function(t,e,a){}}]);