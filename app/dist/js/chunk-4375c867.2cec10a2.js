(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4375c867"],{"7e68":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"manageDetail"},[a("div",{staticClass:"manageDetail-content"},[a("div",{staticClass:"detail-content c-4-bg"},[a("div",{staticClass:"detailTop c-5-bd"},[a("div",{staticClass:"detailTopLeft b-1-cl"},[t._v("\n          "+t._s(t.$t("manageFinances.recommend"))+"-"+t._s(t.$t("manageFinances.manage_finances"))+"\n          "+t._s(t.pageData.limit_day)+t._s(t.$t("manageFinances.day"))+" "+t._s(t.pageData.name)+"\n        ")]),a("div",{staticClass:"detailTopright clearfix"},[a("c-button",{attrs:{type:"text"},on:{click:t.getMore}},[t._v("\n            "+t._s(t.$t("manageFinances.moreProducts"))+"\n          ")])],1)]),a("div",{staticClass:"detailCon"},[a("div",{staticClass:"detailConLeft"},[a("div",{staticClass:"detailConLL"},[a("div",{staticClass:"detailConLeftT b-4-cl"},[t._v("\n              "+t._s(t.pageData.rate)+"\n              "),a("span",{staticClass:"scale"},[t._v("%")])]),a("div",{staticClass:"detailConLeftB"},[t._v("\n              "+t._s(t.$t("manageFinances.expected"))+t._s(t.rate_type)+t._s(t.$t("manageFinances.rate"))+"\n            ")])]),a("div",{staticClass:"detailConLR"},[a("div",{staticClass:"positions c-5-bd"},[a("div",{staticClass:"deatilConRightB"},[a("div",{staticClass:"number b-4-cl"},[t._v(t._s(t.pageData.limit_day))]),a("div",{staticClass:"days b-4-cl"},[t._v(t._s(t.$t("manageFinances.day")))]),a("div",{staticClass:"date"},[t._v(t._s(t.$t("manageFinances.timeLimit")))])])])]),a("div",{staticClass:"detailConLB"},[a("ul",{staticClass:"detailConLBL"},[a("li",[t._v(t._s(t.$t("manageFinances.Repayment")))]),a("li",[t._v(t._s(t.$t("manageFinances.ReleaseCycle")))]),a("li",[t._v(t._s(t.$t("manageFinances.deadline")))]),a("li",[t._v(t._s(t.$t("manageFinances.startTime")))]),a("li",[t._v(t._s(t.$t("manageFinances.exitTime")))])]),a("ul",{staticClass:"detailConLBR b-1-cl"},[a("li",[t._v(t._s(t.return_type))]),a("li",[t._v("\n                "+t._s(t.pageData.cycle)+t._s(t.$t("manageFinances.day"))+"/"+t._s(t.$t("manageFinances.times"))+"\n              ")]),a("li",[t._v(t._s(t.end_time))]),a("li",[t._v(t._s(t.interest_begin_time))]),a("li",[t._v(t._s(t.interest_end_time))])])])]),a("div",{staticClass:"deatilConRight"},[a("div",{staticClass:"deatilConRT"},[a("div",{staticClass:"deatilConRTL"},[t._v(t._s(t.$t("manageFinances.availableBalance")))]),a("div",{staticClass:"deatilConRTM b-1-cl"},[t._v("\n              "+t._s(t.balance)+"\n              "+t._s(t._f("getCoinShowName")(t.pageData.symbol,t.coinList))+"\n            ")]),a("div",{staticClass:"deatilConRTR"},[a("c-button",{staticClass:"goRechargeText",attrs:{type:"text"},on:{click:function(e){return t.goRecharge(t.pageData.symbol)}}},[t._v("\n                "+t._s(t.$t("manageFinances.goRecharge"))+"\n              ")])],1)]),a("div",{staticClass:"deatilConRInput"},[a("c-inputLine",{attrs:{name:"amount",errorHave:!0,promptText:t.$t("manageFinances.buyNumber"),errorFlag:t.numberOptions.error,errorText:t.numberOptions.text,value:t.amount},on:{onchanges:t.inputChanges}},[a("div",{staticClass:"inputSymbol b-1-cl"},[t._v("\n                "+t._s(t._f("getCoinShowName")(t.pageData.symbol,t.coinList))+"\n              ")])])],1),a("div",{staticClass:"deatilConRBot"},[a("div",{staticClass:"deatilConRBotT"},[t._v("\n                "+t._s(t.$t("manageFinances.feature"))+"\n             ")]),a("div",{staticClass:"deatilConRBotB b-1-cl"},[t._v("\n                 "+t._s(t.income)+" "+t._s(t._f("getCoinShowName")(t.pageData.interest_symbol,t.coinList))+"\n             ")])]),a("div",{staticClass:"deatilConRButton"},[a("c-button",{attrs:{type:"solid",height:"40px",width:"100%",disabled:t.btnDisabled,paddingW:"0px"},on:{click:function(e){return t.submit()}}},[t._v("\n                "+t._s(t.$t("manageFinances.buyNow"))+"\n            ")])],1)])])]),a("div",{staticClass:"contentBottom"},[a("p",{staticClass:"qustions"},[t._v(t._s(t.$t("manageFinances.commonProblem")))]),a("p",{staticClass:"listTitle"},[t._v(t._s(3===t.templateLayoutType?t.$t("manageFinances.what"):t.$t("manageFinances.what_1")))]),a("p",{staticClass:"listCon"},[t._v(t._s(3===t.templateLayoutType?t.$t("manageFinances.note1"):t.$t("manageFinances.note1_1")))]),a("p",{staticClass:"listTitle"},[t._v(t._s(t.$t("manageFinances.how")))]),a("p",{staticClass:"listCon"},[t._v(t._s(3===t.templateLayoutType?t.$t("manageFinances.note2"):t.$t("manageFinances.note2_1")))]),a("p",{staticClass:"listTitle"},[t._v(t._s(3===t.templateLayoutType?t.$t("manageFinances.rule"):t.$t("manageFinances.rule_1")))]),a("p",{staticClass:"listCon"},[t._v(t._s(t.$t("manageFinances.note3")))])]),a("c-verifyCationc-alert",{attrs:{showFlag:t.alertFlag,imgMap:t.imgMap,titleText:t.$t("assets.withdraw.safetyWarning"),detaText:t.$t("assets.withdraw.safetyWarningError"),dataList:t.alertData,buttonText:t.$t("assets.withdraw.GotoOpen")},on:{close:t.alertClone,confirm:t.alertGo}}),a("c-verifyCationc-alert",{attrs:{showFlag:t.alertFlagAuth,imgMap:t.imgMap,titleText:t.$t("assets.withdraw.safetyWarning"),detaText:t.$t("manageFinances.forSafe"),buttonText:t.$t("manageFinances.goAuth")},on:{close:t.alertAuthClone,confirm:t.alertAuthGo}})],1)])},s=[],i=(a("ed57"),a("8e91"),a("95d5")),o={biki:"Tokencan","www.biki.com":"www.tokencan.net"},r={name:"InnovationList",data:function(){return{imgMap:i["u"],numberValue:"",alertFlag:!1,alertFlagAuth:!1,nowType:1,errorFlag:!1,errorHave:!1,pageId:null,pageData:{},amount:"",dialogFlag:!1,dialogConfirmLoading:!1,checkValue:"",googleVlaue:"",checkErrorText:"",googleErrorText:"",dbclick:!0,rate_type:"",interest_begin_time:"",interest_end_time:"",end_time:"",return_type:"",income:0,balance:null,secoundClick:!0}},watch:{userInfoIsReady:function(){this.alert()},income:function(t){this.income=Object(i["f"])(t,this.showPrecision(this.pageData.interest_symbol))},amount:function(t){this.amount=Object(i["h"])(t,this.showPrecision(this.pageData.symbol)),this.income=this.amount*this.pageData.rate/100/365*this.pageData.limit_day},checkValue:function(t){this.checkValue=Object(i["h"])(t,0)},googleVlaue:function(t){this.googleVlaue=Object(i["h"])(t,0)}},computed:{coinList:function(){return this.$store.state.baseData.market?this.$store.state.baseData.market.coinList:null},templateLayoutType:function(){return Number(this.$store.state.baseData.templateLayoutType)},userInfoIsReady:function(){return this.$store.state.baseData.userInfoIsReady},authLevel:function(){var t=!1,e=this.$store.state.baseData.userInfo;return e&&"1"===e.authLevel.toString()&&(t=!0),t},OpenMobile:function(){var t=!1,e=this.$store.state.baseData.userInfo;return e&&"1"===e.isOpenMobileCheck.toString()&&(t=!0),t},OpenGoogle:function(){var t=!1,e=this.$store.state.baseData.userInfo;return e&&"1"===e.googleStatus.toString()&&(t=!0),t},alertData:function(){var t=[{text:this.$t("assets.withdraw.bindGoogle"),flag:this.OpenGoogle},{text:this.$t("assets.withdraw.bindPhone"),flag:this.OpenMobile}];return t},promptText:function(){return this.$t("innov.numbre")},userInfo:function(){return this.$store.state.baseData.userInfo?this.$store.state.baseData.userInfo:{}},numberOptions:function(){var t={text:"",flag:null,error:null},e=parseFloat(this.pageData.balance)||0;return 0===this.amount.length||0===parseFloat(this.amount)?(t.text=this.$t("manageFinances.inputNumber"),t.flag=!1,t.error=!1,t):parseFloat(this.amount)>e?(t.text=this.$t("manageFinances.buyNumMax"),t.flag=!1,t.error=!0,t):(t.flag=!0,t.error=!1,t)},btnDisabled:function(){var t=!0;return this.numberOptions.flag&&(t=!1),t}},methods:{init:function(){this.pageId=this.$route.params.id,this.getData(),this.userInfoIsReady&&this.alert()},replaceStr:function(t){return o[t.toLowerCase()]},alert:function(){this.authLevel?this.canAlert():this.canAuthAlert()},canAlert:function(){var t=this;this.OpenGoogle||this.OpenMobile?this.alertFlag=!1:setTimeout((function(){t.alertFlag=!0}),100)},canAuthAlert:function(){var t=this;this.authLevel?this.alertFlagAuth=!1:setTimeout((function(){t.alertFlagAuth=!0}),100)},alertClone:function(){this.alertFlag=!1},alertAuthClone:function(){this.alertFlagAuth=!1},alertGo:function(){this.$router.push("/personal/userManagement")},alertAuthGo:function(){this.$router.push("/personal/idAuth")},fixDFun:function(t,e){return this.showPrecision(e)?Object(i["f"])(t,this.showPrecision(e)):t},showPrecision:function(t){if(this.$store.state.baseData&&this.$store.state.baseData.market&&this.$store.state.baseData.market.coinList){var e=this.$store.state.baseData.market.coinList;if(e[t]){var a=e[t].showPrecision;if(a)return a}}return 4},submit:function(){this.authLevel?this.OpenGoogle||this.OpenMobile?this.order():this.alertFlag=!0:this.alertFlagAuth=!0},inputChanges:function(t,e){this[e]=t},formatTimeFn:function(t){return Object(i["k"])(t)},goRecharge:function(t){this.$router.push("/assets/recharge?symbol=".concat(t))},getMore:function(){this.$router.push("/manageFinances")},getData:function(){var t=this;this.axios({url:this.$store.state.url.common.financingDet,params:{id:this.pageId},hostType:"financing",method:"post"}).then((function(e){"0"===e.code&&(t.pageData=e.data,0===e.data.rate_type?t.rate_type=t.$t("manageFinances.yearRate"):t.rate_type=t.$t("manageFinances.dayRate"),t.balance=Object(i["f"])(e.data.balance,t.showPrecision(e.data.symbol)),t.end_time=Object(i["k"])(e.data.end_time),1===e.data.interest_begin_type?(t.interest_begin_time=Object(i["k"])(e.data.user_interest_begin_time),t.interest_end_time=Object(i["k"])(e.data.user_interest_end_time)):(t.interest_begin_time=Object(i["k"])(e.data.interest_begin_time),t.interest_end_time=Object(i["k"])(e.data.interest_end_time)),1===e.data.return_type?t.return_type=t.$t("manageFinances.first"):t.return_type=t.$t("manageFinances.together"))}))},order:function(){var t=this;this.secoundClick&&(this.secoundClick=!1,this.axios({url:this.$store.state.url.common.order,params:{id:this.pageData.id,number:this.amount},hostType:"financing",method:"post"}).then((function(e){"0"===e.code&&(window.location.href=e.data.payUrl,t.secoundClick=!0)})))}}},l=(a("ebbd"),{mixins:[r],mounted:function(){this.init()}}),c=l,u=a("2877"),h=Object(u["a"])(c,n,s,!1,null,null,null);e["default"]=h.exports},ebbd:function(t,e,a){}}]);