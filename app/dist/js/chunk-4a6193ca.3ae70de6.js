(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a6193ca"],{"07b3":function(t,i,e){var a=e("7c36"),s=e("bd66"),n=e("1fa1"),c=e("1389").f;t.exports=function(t){return function(i){var e,o=n(i),r=s(o),l=r.length,u=0,h=[];while(l>u)e=r[u++],a&&!c.call(o,e)||h.push(t?[e,o[e]]:o[e]);return h}}},"20a2":function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"main"},[e("div",{staticClass:"margin-left clearfix a-5-bg"},[e("div",{staticClass:"margin-left clearfix"},[e("div",{staticClass:"title b-1-cl medium-fonts medium"},[t._v("\n        "+t._s(t.fiatTradeOpen?t.$t("assets.b2c.otcShow.fiatdealTitle"):t.$t("fiatdeal.title"))+"\n      ")]),e("c-navMenu",{attrs:{width:190,lineHidth1:56,navList:t.navList,navListActive:t.navListActive},on:{listChange:t.listChanges}})],1)]),"2"===t.templateLayoutType?e("div",{staticClass:"otc-page-title a-5-bg"},[e("div",{staticClass:"page-title-bar b-1-cl"},[t._v("\n        "+t._s(t.pageTitleText)+"\n    ")])]):t._e(),e("div",{staticClass:"margin-right a-5-bg clearfix"},[e("vue-scroll",[e("Center")],1)],1)])},s=[],n=(e("79cb"),e("8e91"),e("95d5")),c={name:"index",watch:{otcPublicInfo:{immediate:!0,handler:function(t){t&&(t.defaultSeach&&"BUY"===t.defaultSeach.toUpperCase()?(this.navListActive="ordinarySell",this.clickName="ordinarySell"):(this.navListActive="ordinaryBuy",this.clickName="ordinaryBuy"))}}},computed:{fiatTradeOpen:function(){var t=this.$store.state.baseData.publicInfo;return!(!t||!t.switch||"1"!==t.switch.fiat_trade_open)},otcPublicInfo:function(){return this.$store.state.baseData.otcPublicInfo},templateLayoutType:function(){return this.$store.state.baseData.templateLayoutType},userInfo:function(){return this.$store.state.baseData.userInfo||{}},userCompanyInfo:function(){return this.userInfo.userCompanyInfo||{}},otcCompanyInfo:function(){return this.userInfo.otcCompanyInfo||{}},companyStatus:function(){return Number(this.otcCompanyInfo.status)},applyStatus:function(){return Number(this.userCompanyInfo.applyStatus)},isBigDeal:function(){return Number(this.$store.state.baseData.is_open_bigDeal)},applyRuleStatus:function(){return Number(this.userCompanyInfo.status)},navList:function(){var t=[{iconClass:"iconClass",navText:this.$t("fiatdeal.navList")[0],href:"",type:1,activeIconSvg:'<svg class="icon icon-18" aria-hidden="true"><use xlink:href="#icon-b_10_1"></use></svg>',iconSvg:'<svg class="icon icon-18" aria-hidden="true"><use xlink:href="#icon-b_10"></use></svg>',id:"ordinary"},{iconClass:"iconClass",navText:this.$t("fiatdeal.navList")[1],href:"",type:2,activeIconSvg:"",iconSvg:"",id:"ordinaryBuy"},{iconClass:"iconClass",navText:this.$t("fiatdeal.navList")[2],href:"",type:2,activeIconSvg:"",iconSvg:"",id:"ordinarySell"}];return this.isBigDeal&&t.push({iconClass:"iconClass",navText:this.$t("fiatdeal.navList")[3],href:"",type:1,activeIconSvg:'<svg class="icon icon-18" aria-hidden="true"><use xlink:href="#icon-b_20_1"></use></svg>',iconSvg:'<svg class="icon icon-18" aria-hidden="true"><use xlink:href="#icon-b_20"></use></svg>',id:"bulk"},{iconClass:"iconClass",navText:this.$t("fiatdeal.navList")[4],href:"",type:2,activeIconSvg:"",iconSvg:"",id:"bulkBuy"},{iconClass:"iconClass",navText:this.$t("fiatdeal.navList")[5],href:"",type:2,activeIconSvg:"",iconSvg:"",id:"bulkSell"}),t.push({iconClass:"iconClass",navText:this.$t("fiatdeal.navList")[6],href:"",type:1,activeIconSvg:'<svg class="icon icon-18" aria-hidden="true"><use xlink:href="#icon-b_21_1"></use></svg>',iconSvg:'<svg class="icon icon-18" aria-hidden="true"><use xlink:href="#icon-b_21"></use></svg>',id:"advertising"}),this.companyStatus&&t.push({iconClass:"iconClass",navText:this.$t("fiatdeal.navList")[7],href:"",type:1,activeIconSvg:'<svg class="icon icon-18" aria-hidden="true"><use xlink:href="#icon-b_22_1"></use></svg>',iconSvg:'<svg class="icon icon-18" aria-hidden="true"><use xlink:href="#icon-b_22"></use></svg>',id:"companyApplication"}),t}},methods:{init:function(){var t=this;this.navList.length&&this.navList.forEach((function(i){t.navListActive===i.id&&(t.pageTitleText=i.navText)}))},listChanges:function(t){var i=this.applyStatus,e=n["w"].get("companyAppling");if(this.navListActive!==t.id&&t.id!==this.clickName){if("ordinary"===t.id)this.navListActive="ordinaryBuy";else if("bulk"===t.id)this.navListActive="bulkBuy";else{if("advertising"===t.id)return void this.$router.push("/otcRelease");if("companyApplication"===t.id)return void(1!==i||e?this.$router.push("/companyApplication"):(this.$router.push("/companyApplicationDetail"),n["w"].set("companyAppling",!0)));this.navListActive=t.id}var a={side:t.id};this.$store.dispatch("sideIsBlockTrade",a),this.$store.dispatch("setFlag",!0)}this.clickName=t.id,this.pageTitleText=t.navText}},data:function(){return{clickName:"",navListActive:"ordinaryBuy",pageTitleText:null}}},o=(e("9217"),function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"fiatdeal-center"},[e("div",{staticClass:"center-management-header a-3-bd clearfix"},[e("c-navTab",{attrs:{activeClassName:"b-1-cl",activeColor:"a-12-bg",className:"b-2-cl",currentTab:t.currentTab,navTab:t.navTab,lineHeight:t.lineHeight,marginRight:t.marginRight},on:{currentType:t.currentType}})],1),e("div",{staticClass:"center-management-center"},[t.isShowMobility?e("mobilityTrade",{attrs:{seach:t.side,legal:t.value2,coin:t.defaultCoin}}):t._e(),e("div",{staticClass:"center-main clearfix"},[e("div",{staticClass:"center-main-select clearfix"},[e("div",{staticClass:"select"},[e("c-select",{attrs:{value:t.value1,promptText:t.$t("fiatdeal.center.country"),name:"value1",errorHave:!0,errorFlag:t.countryErrorFlag,errorText:"",options:t.list1},on:{onChanges:t.listChange}})],1),e("div",{staticClass:"select",style:t.excheifFlag?"width:140px":"width:120px"},[e("c-select",{attrs:{value:t.value3,promptText:t.$t("fiatdeal.center.payment"),name:"value3",errorHave:!0,errorFlag:t.countryErrorFlag,errorText:"",options:t.list3},on:{onChanges:t.listChange}})],1),1===t.paycoinsType?e("div",{staticClass:"select"},[e("c-select",{attrs:{value:t.value2,promptText:t.fiatTradeOpen?t.$t("assets.b2c.otcShow.lagel"):t.$t("fiatdeal.center.fiat"),name:"value2",errorHave:!0,errorFlag:t.countryErrorFlag,errorText:"",options:t.list2},on:{onChanges:t.listChange}})],1):t._e(),2===t.paycoinsType?e("div",{staticClass:"select select-pay"},[e("div",{staticClass:"input_line_content a-2-bd"},[e("label",{staticClass:"input_line_prompt b-2-cl"},[t._v(t._s(t.$t("fiatdeal.center.fiat")))]),e("p",{staticClass:"payTypeList"},[t._l(t.currencyListShow,(function(i,a){return[e("span",{key:a+"currencyShow",staticClass:"u-11-cl",class:{"u-12-bg":t.value2===i.code},on:{click:function(e){return t.changKinde(i)}}},[t._v("\n                  "+t._s(i.value)+"\n                ")])]})),t._l(t.currencyListHide,(function(i,a){return[t.showMore?e("span",{key:a+"currencyHide",staticClass:"u-11-cl",class:{"u-12-bg":t.value2===i.code},on:{click:function(e){return t.changKinde(i)}}},[t._v("\n                  "+t._s(i.value)+"\n                ")]):t._e()]})),e("span",{staticClass:"u-8-cl",on:{click:function(i){return t.showKinde()}}},[t._v("\n                "+t._s(t.openOTxt)+"\n              ")])],2)])]):t._e(),e("p",{staticClass:"fiatdeal-xyk"},[e("img",{attrs:{src:"https://saas-oss.oss-accelerate.aliyuncs.com/upload/20200429141529768.svg"}}),e("img",{attrs:{src:"https://saas-oss.oss-accelerate.aliyuncs.com/upload/20200429142925574.svg"}}),e("span",{staticClass:"x-3-cl",on:{click:t.handlerGoCredit}},[t._v(t._s(t.$t("creditCard.title")))])])]),e("c-table",{attrs:{imgMap:t.imgMap,colorMap:t.colorMap,classes:t.classes,loading:t.loading,headClasses:t.headClasses,bodyClasses:t.bodyClasses,lineClasses:t.lineClass,columns:t.columns,dataList:t.dataList,lineNumber:t.lineNumber,cellHeight:t.cellHeight,headHeight:t.headHeight},on:{elementClick:t.operation}}),e("c-pagination",{directives:[{name:"show",rawName:"v-show",value:t.count>15,expression:"count > 15"}],staticClass:"a-5-bg",attrs:{total:t.count,"current-page":t.page,display:t.pageSize},on:{pagechange:t.pagechange}})],1)],1),e("c-alert",{attrs:{showFlag:t.alertFlag,buttonText:this.$t("personal.alert.buttonOpen"),imgMap:t.imgMap,colorMap:t.colorMap},on:{close:t.alertClose,confirm:t.alertGo}},[e("div",{staticClass:"alertText"},[t._v(t._s(t.tradeTypeErrorText))])])],1)}),r=[],l=(e("bd33"),e("d89b"),e("5eb8"),e("768b")),u=(e("ed57"),{name:"center",filters:{roseFilter:function(t){return Object(n["f"])(t,2)}},watch:{otcPaymentFind:function(t){t&&(this.paymentList=t.data)},defaultCountryCode:function(t){t&&""===this.value1&&(this.value1=t)},otcSearch:function(t){null!==t&&(this.loading=!1,this.count=t.data.count,this.tablesData(t.data.advertList))},sideIsBlockTrade:function(t){if(null!==t){switch(t.side){case"ordinary":this.side="SELL",this.isBlockTrade=0;break;case"ordinaryBuy":this.side="SELL",this.isBlockTrade=0;break;case"ordinarySell":this.side="BUY",this.isBlockTrade=0;break;case"bulkBuy":this.side="SELL",this.isBlockTrade=1;break;case"bulkSell":this.side="BUY",this.isBlockTrade=1;break;default:this.side="SELL",this.isBlockTrade=1}this.page=1,this.pageSize=15,this.getSearchData()}},otcTicker:function(t){t&&this.publicInfo&&this.otcPublicInfo&&(this.lastPrice=this.dealOtcTicke(t.data.lastPrice),this.avgPrice=this.dealOtcTicke(t.data.avgPrice),this.rose=t.data.rose,this.roseData(this.rose))},otcMinuteLine:function(t){null!==t&&this.kLineData(t.data)},userInfo:function(t){t&&(t.nickName&&t.isCapitalPwordSet&&(t.isOpenMobileCheck||t.googleStatus)||this.$bus.$emit("tip",{text:this.$t("fiatdeal.center.idinfo"),type:"info"}))},publicInfo:function(t){t&&this.otcPublicInfo&&(this.dataProcessin(t.market.coinList,this.otcPublicInfo.defaultCoin),this.defaultCoin||(this.defaultCoin=this.otcPublicInfo.defaultCoin),this.side=this.otcPublicInfo.defaultSeach.toUpperCase(),this.otcDefaultPaycoin=this.otcPublicInfo.otcDefaultPaycoin,this.value2=this.otcPublicInfo.otcDefaultPaycoin,this.dataCountry(this.otcPublicInfo.countryNumberInfo),this.dataPaycoins(this.otcPublicInfo.paycoins),this.dataPayments(this.otcPublicInfo.payments),this.getData(),this.getOtcTicke(),this.getMinuteLine(),this.otcTicker&&(this.lastPrice=this.dealOtcTicke(this.otcTicker.data.lastPrice),this.avgPrice=this.dealOtcTicke(this.otcTicker.data.avgPrice),this.rose=this.otcTicker.data.rose))},otcPublicInfo:function(t){t&&this.publicInfo&&(this.dataProcessin(this.publicInfo.market.coinList,t.defaultCoin),this.defaultCoin||(this.defaultCoin=t.defaultCoin),this.side=t.defaultSeach.toUpperCase(),this.otcDefaultPaycoin=t.otcDefaultPaycoin,this.value2=t.otcDefaultPaycoin,this.dataCountry(t.countryNumberInfo),this.dataPaycoins(t.paycoins),this.dataPayments(t.payments),this.getData(),this.getOtcTicke(),this.getMinuteLine(),this.otcTicker&&(this.lastPrice=this.dealOtcTicke(this.otcTicker.data.lastPrice),this.avgPrice=this.dealOtcTicke(this.otcTicker.data.avgPrice),this.rose=this.otcTicker.data.rose))}},computed:{fiatTradeOpen:function(){var t=this.$store.state.baseData.publicInfo;return!(!t||!t.switch||"1"!==t.switch.fiat_trade_open)},saasOtcFlowConfig:function(){var t=!1;return this.publicInfo&&this.publicInfo.switch&&this.publicInfo.switch.saas_otc_flow_config&&"1"===this.publicInfo.switch.saas_otc_flow_config.toString()&&(t=!0),t},isShowMobility:function(){var t=!1;return"USDT"===this.defaultCoin&&"CNY"===this.value2&&this.saasOtcFlowConfig&&(t=!0),t},isLogin:function(){return this.$store.state.baseData.isLogin},tradeTypeErrorText:function(){var t=this.$t("personal.alert.payTypeError[0]"),i=this.$t("personal.alert.payTypeError[1]"),e="";return this.tradeTypeErrorShop.forEach((function(t){e+="".concat(t.title,",")})),e=e.substr(0,e.length-1),"".concat(t).concat(e).concat(i)},market:function(){return this.$store.state.baseData.market},priceFix:function(){var t=this.$store.state.baseData.defaultFiatPrecision;return this.market&&this.market.coinList[this.defaultCoin]&&this.market.coinList[this.defaultCoin].fiatPrecision&&this.market.coinList[this.defaultCoin].fiatPrecision[this.value2.toLowerCase()]&&(t=this.market.coinList[this.defaultCoin].fiatPrecision[this.value2.toLowerCase()]),Number(t)},otcPaymentFind:function(){return this.$store.state.personal.otcPaymentFind},openOTxt:function(){return this.$t("fiatdeal.openA")[this.openC]},userInfo:function(){return this.$store.state.baseData.userInfo},otcSearch:function(){return this.$store.state.fiatdeal.otcSearch},sideIsBlockTrade:function(){return this.$store.state.fiatdeal.sideIsBlockTrade},otcTicker:function(){return this.$store.state.fiatdeal.otcTicker},otcMinuteLine:function(){return this.$store.state.fiatdeal.otcMinuteLine},publicInfo:function(){return this.$store.state.baseData.publicInfo},otcPublicInfo:function(){return this.$store.state.baseData.otcPublicInfo},excheifFlag:function(){return this.$store.state.baseData.exchief_project_switch}},data:function(){return{alertFlag:!1,imgMap:n["u"],colorMap:n["c"],paymentList:[],loading:!1,klineDataList:[],lastPrice:"",avgPrice:"",rose:"",roseColor:0,side:"",isBlockTrade:0,defaultCoin:"",otcDefaultPaycoin:"",currentTab:1,navTab:[],lineHeight:"55",marginRight:48,value1:"",value2:"",value3:"",countryErrorFlag:!1,list1:[],list2:[],currencyListShow:[],currencyListHide:[],showMore:!1,openC:0,paycoinsType:0,list3:[],paycoins:[],columns:[{title:this.$t("fiatdeal.center.columns")[0],align:"left",width:"200px",classes:""},{title:this.$t("fiatdeal.center.columns")[1],align:"right",width:"200px",classes:""},{title:this.$t("fiatdeal.center.columns")[2],align:"right",width:"250px",classes:""},{title:this.$t("fiatdeal.center.columns")[3],align:"right",width:"180px",classes:""},{title:this.$t("fiatdeal.center.columns")[4],align:"right",width:"150px",classes:""},{title:this.$t("fiatdeal.center.columns")[5],align:"right",width:"100px",classes:""}],dataList:[],cellHeight:70,headHeight:30,lineNumber:15,classes:"",headClasses:"",bodyClasses:"",lineClass:"",count:0,page:1,pageSize:15,tradeTypeErrorShop:[]}},methods:{init:function(){var t=this;this.$store.dispatch("otcPaymentFind"),this.defaultCountryCode&&(this.value1=this.defaultCountryCode);var i=this.$store.state.baseData.otcPublicInfo,e=this.$store.state.baseData.publicInfo,a=this.$store.state.baseData.userInfo;i&&e&&(this.dataProcessin(e.market.coinList,i.defaultCoin),this.defaultCoin||(this.defaultCoin=i.defaultCoin),this.side=i.defaultSeach.toUpperCase(),this.otcDefaultPaycoin=i.otcDefaultPaycoin,this.value2=i.otcDefaultPaycoin,this.dataCountry(i.countryNumberInfo),this.dataPaycoins(i.paycoins),this.dataPayments(i.payments),this.getData(),this.getOtcTicke(),this.getMinuteLine(),setInterval((function(){t.getMinuteLine(!0)}),3e4)),null!==a&&(a.nickName&&a.isCapitalPwordSet&&(a.isOpenMobileCheck||a.googleStatus)||this.$bus.$emit("tip",{text:this.$t("fiatdeal.center.idinfo"),type:"info"}))},changKinde:function(t){this.value2=t.code,this.otcDefaultPaycoin=t.code,this.listChange(t,"value2")},showKinde:function(){this.showMore=!this.showMore,0===this.openC?this.openC=1:this.openC=0},roseData:function(t){this.roseColor=0===t?0:t>0?1:2},alertClose:function(){this.alertFlag=!1},alertGo:function(){this.alertFlag=!1,this.$router.push("/personal/leaglTenderSet")},dealOtcTicke:function(t){return Object(n["f"])(t,this.priceFix)},kLineData:function(t){var i=[];t.forEach((function(t){i.push([t.time,t.price])})),this.klineDataList=i},operation:function(t,i){if(this.isLogin)switch(t){case"icon":this.$router.push({path:"/stranger",query:{uid:i[0]}});break;default:if("BUY"!==this.side||this.isPaymentMatch(i[2]))this.$router.push({path:"/otcTrade?",query:{orderId:i[1],userId:i[0]}});else{var e=Object(l["a"])(i,3);this.tradeTypeErrorShop=e[2],this.alertFlag=!0}}else this.$router.push("/login")},isPaymentMatch:function(t){var i=this;return 0!==this.paymentList.length&&(!(!t||0===t.length)&&t.some((function(t){return i.paymentList.some((function(i){return t.key===i.payment}))})))},pagechange:function(t){this.page=t,this.getData()},getData:function(){this.loading=!0;var t={side:this.side,symbol:this.defaultCoin,isBlockTrade:this.isBlockTrade,payCoin:this.value2,payments:"all"===this.value3?"":this.value3,numberCode:"all"===this.value1?"":this.value1,pageSize:this.pageSize,page:this.page};this.$store.dispatch("otcSearch",t)},getSearchData:function(){this.loading=!0;var t={side:this.side,symbol:this.defaultCoin,isBlockTrade:this.isBlockTrade,payCoin:this.value2,payments:"all"===this.value3?"":this.value3,numberCode:"all"===this.value1?"":this.value1,pageSize:this.pageSize,page:this.page};this.$store.dispatch("otcSearchFlag",t)},getOtcTicke:function(){var t={symbol:this.defaultCoin,payCoin:this.value2};this.$store.dispatch("otcTicker",t)},getMinuteLine:function(t){var i={symbol:this.defaultCoin,payCoin:this.value2};t&&(i.auto=!0),this.$store.dispatch("otcMinuteLine",i)},tablesData:function(t){var i=this,e=this.$store.state.baseData.market.coinList,a=[];t?(t.forEach((function(t){a.push({id:[t.userId,t.advertId,t.payments],data:[[{type:"icon",eventType:"icon",iconSvg:'<div class="merchants">\n                    <div class="merchants-left a-12-bg" style="color:#EDF4F8">\n                    '.concat(t.imageUrl?'<img src="'.concat(t.imageUrl,'"/>'):"<span>".concat(t.otcNickName.substring(0,1),"</span>"),'\n                    <i class="i a-5-bd ').concat(1===t.loginStatus?"a-18-bg":"a-1-bg",'"></i>\n                    </div>\n                    <div class="merchants-right">\n                    <p>').concat(t.otcNickName,'</p>\n                    <p class="b-2-cl">').concat(i.$t("fiatdeal.center.trading")," ").concat(t.completeOrders," | ").concat(i.$t("fiatdeal.center.credit")," ").concat(Object(n["x"])(t.creditGrade,100),"%</p>\n                    </div>\n                    </div>")}],[{text:"".concat(Object(n["f"])(t.volumeBalance,e[i.defaultCoin].showPrecision),"\n                    ").concat(Object(n["l"])(i.defaultCoin,i.market.coinList)),classes:"b-2-cl"}],[{text:"".concat(Object(n["f"])(t.minTrade,i.priceFix),"\n                  - ").concat(Object(n["f"])(t.maxTrade,i.priceFix)," ").concat(t.payCoin),classes:"b-2-cl"}],[{text:"".concat(Object(n["f"])(t.price,i.priceFix)," ").concat(t.payCoin),classes:""}],[{type:"icon",iconSvg:"<ul>\n                    ".concat(i.paymentsList(t.payments).join(""),"\n                </ul>"),classes:"payments-ul"}],[{type:"button",text:"SELL"===i.side?i.$t("fiatdeal.center.buy"):i.$t("fiatdeal.center.sell"),iconClass:[""],eventType:"check",classes:[""]}]]})})),this.dataList=a):this.dataList=[]},paymentsList:function(t){var i=[];return t.forEach((function(t){i.push("<li class='a-2-bg'><img src=".concat(t.icon," /></li>"))})),i},listChange:function(t,i){switch(i){case"value1":this.value1=t.code,this.getOtcTicke(),this.getMinuteLine();break;case"value2":this.value2=t.code,this.otcDefaultPaycoin=t.code,this.getOtcTicke(),this.getMinuteLine();break;default:this.value3=t.code}this.page=1,this.pageSize=15,this.getData()},currentType:function(t){this.currentTab=t.index,this.defaultCoin=t.coinName,this.page=1,this.pageSize=15,this.getData(),this.getOtcTicke(),this.getMinuteLine()},dataProcessin:function(t,i){var e=this,a=Object.values(t);Array.isArray(a)&&(a=a.sort((function(t,i){return t.sort-i.sort}))),this.navTab=[];var s=!1,c=0;a.forEach((function(t){1===Number(t.otcOpen)&&(c+=1,e.navTab.push({name:Object(n["l"])(t.name,e.market.coinList),index:c,coinName:t.name}),t.name===i&&(e.currentTab=c,s=!0))})),s||(this.currentTab=this.navTab[0].index,this.defaultCoin=this.navTab[0].name)},dataPaycoins:function(t){var i=this;this.paycoinsType=1,this.currencyListHide=[],this.currencyListShow=[],t.forEach((function(t){if(t.used){var e={value:t.title,code:t.key};t.hide?(i.paycoinsType=2,e.hide=1,i.currencyListHide.push(e)):i.currencyListShow.push(e),i.list2.push(e)}}))},dataPayments:function(t){var i=[];i.push({value:this.$t("fiatdeal.center.all"),code:"all"}),t.forEach((function(t){return i.push({value:t.title,code:t.key})})),this.list3=i,this.value3="all"},dataCountry:function(t){var i=[];i.push({value:this.$t("fiatdeal.center.all"),code:"all"}),t.forEach((function(t){return i.push({value:t.title,code:t.numberCode})})),this.list1=i,this.value1="all"},handlerGoCredit:function(){this.$router.push("/creditCard")}}}),h=(e("cb43"),function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("section",{staticClass:"page-mobilityTrade mobilityTrade  a-7-bd clearfix"},[e("div",{staticClass:"page-mobilityTrade-text"},[e("span",{staticClass:"fontBig f-1-cl"},[t._v(t._s(t.title))]),e("span",{staticClass:"fontSmall"},[t._v(t._s(t.$t("mobilityTrade.smallAmount")))])]),t.flag?e("div",{staticClass:"page-mobilityTrade-options"},[t.$t("mobilityTrade.priceBuy")?e("c-select",{staticClass:"options-select",attrs:{width:"140px",promptText:t.$t("mobilityTrade.tradeType"),value:t.selectCode,options:t.selectList},on:{onChanges:t.selectChange}}):t._e(),e("c-inputLine",{staticClass:"options-input",attrs:{width:"220px",value:t.inputValue,promptText:t.inputPromptText},on:{onchanges:t.inputChanges}},[e("span",{staticClass:"inputCoin"},[t._v("\n        "+t._s(t.inputCoin)+"\n      ")])]),e("c-button",{staticClass:"options-button",attrs:{width:"110px",marginTop:"6px",disabled:t.buttonDisabled},on:{click:t.btnClick}},[t._v(t._s(t.title))])],1):t._e()])}),d=[],p={name:"page-mobilityTrade",props:{seach:{type:String,default:""},legal:{type:String,default:""},coin:{type:String,default:""}},data:function(){return{selectCode:1,inputValue:"",flag:!0}},watch:{side:{immediate:!0,handler:function(t){var i=this;this.selectCode=0,this.$nextTick((function(){"BUY"===t?i.selectCode=1:"SELL"===t&&(i.selectCode=2)}))}},inputValue:function(t){1===this.selectCode?this.inputValue=Object(n["h"])(t,this.priceFix):this.inputValue=Object(n["h"])(t,this.valueFix)}},computed:{buttonDisabled:function(){var t=!0;return Number(this.inputValue)&&(t=!1),t},inputCoin:function(){return 1===this.selectCode?this.legal:this.coin},title:function(){return"BUY"===this.side?this.$t("mobilityTrade.immediatelyBuy"):"SELL"===this.side?this.$t("mobilityTrade.immediatelySell"):""},side:function(){return"BUY"===this.seach?"SELL":"SELL"===this.seach?"BUY":""},market:function(){return this.$store.state.baseData.market},valueFix:function(){var t=this.$store.state.baseData.defaultFiatPrecision;return this.market&&this.market.coinList[this.coin]&&this.market.coinList[this.coin].showPrecision&&(t=this.market.coinList[this.coin].showPrecision),t},priceFix:function(){var t=this.$store.state.baseData.defaultFiatPrecision;return this.market&&this.market.coinList[this.coin]&&this.market.coinList[this.coin].fiatPrecision&&this.market.coinList[this.coin].fiatPrecision[this.legal.toLowerCase()]&&(t=this.market.coinList[this.coin].fiatPrecision[this.legal.toLowerCase()]),Number(t)},priceText:function(){return"BUY"===this.side?this.$t("mobilityTrade.priceBuy"):"SELL"===this.side?this.$t("mobilityTrade.priceSell"):""},valueText:function(){return"BUY"===this.side?this.$t("mobilityTrade.volumeBuy"):"SELL"===this.side?this.$t("mobilityTrade.volumeSell"):""},selectList:function(){var t="",i="";return"BUY"===this.side?(t=this.$t("mobilityTrade.priceBuy"),i=this.$t("mobilityTrade.volumeBuy")):(t=this.$t("mobilityTrade.priceSell"),i=this.$t("mobilityTrade.volumeSell")),[{code:1,value:t},{code:2,value:i}]},inputPromptText:function(){return 1===this.selectCode?this.$t("mobilityTrade.addPrice"):this.$t("mobilityTrade.addVolume")}},methods:{selectChange:function(t){this.selectCode!==t.code&&(this.selectCode=t.code,this.inputValue="")},inputChanges:function(t){this.inputValue=t},btnClick:function(){this.$router.push("/mobility?side=".concat(this.side,"&legal=").concat(this.legal,"&coin=").concat(this.coin,"&tradeType=").concat(this.selectCode,"&tradeValue=").concat(this.inputValue))}}},f=(e("e852"),{mixins:[p]}),v=f,g=e("2877"),m=Object(g["a"])(v,h,d,!1,null,null,null),y=m.exports,b={mixins:[u],components:{mobilityTrade:y},mounted:function(){this.init()}},C=b,T=(e("7e58"),Object(g["a"])(C,o,r,!1,null,"b7b16a00",null)),k=T.exports,L={mixins:[c],components:{Center:k},mounted:function(){this.init()}},$=L,x=Object(g["a"])($,a,s,!1,null,null,null);i["default"]=x.exports},"5eb8":function(t,i,e){var a=e("1cfe"),s=e("07b3")(!1);a(a.S,"Object",{values:function(t){return s(t)}})},"7e58":function(t,i,e){"use strict";e("9658")},9217:function(t,i,e){},9658:function(t,i,e){},cb43:function(t,i,e){},e852:function(t,i,e){}}]);