(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6480db3b"],{"78e7":function(t,e,s){},a119:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"legal-tender-set"},[s("p",{staticClass:"user-management-child-header b-1-cl a-3-bd"},[t._v("\n    "+t._s(t.$t("personal.leaglTenderSet.title"))+"\n  ")]),s("div",{staticClass:"user-management-main clearfix"},[s("ul",{staticClass:"ul"},[s("li",{staticClass:"li clearfix"},[s("svg",{staticClass:"li-icon icon icon-24",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-e_7"}})]),s("div",{staticClass:"li-div li-divs a-3-bd b-1-cl clearfix"},[s("p",{staticClass:"li-title"},[t._v("\n            "+t._s(t.$t("personal.leaglTenderSet.titleList")[0].text)+"\n          ")]),s("p",{staticClass:"li-text b-2-cl"},[t._v("\n            "+t._s(t.$t("personal.leaglTenderSet.titleList")[0].label)+"\n          ")]),s("div",{staticClass:"li-right clearfix"},[s("c-button",{attrs:{type:"solid",big:!0,className:"user-button",paddingW:"18px",height:"30px"},on:{click:function(e){return t.btnLink("setUp")}}},[t._v(t._s(0===t.dataList.length?t.$t("personal.tool.setUp"):t.$t("personal.tool.add")))])],1)])]),t._l(t.dataList,(function(e){return s("li",{key:e.id,staticClass:"li clearfix"},[s("div",{staticClass:"li-div li-div-right a-3-bd b-1-cl clearfix"},[s("p",{staticClass:"li-title"},[s("c-otcPayIcon",{attrs:{imgUrl:e.icon}}),t._v("\n            "+t._s(e.title)+"\n            "),t.excheifFlag&&"otc.payment.domestic.bank.transfer"===e.payment?s("span",{staticClass:"carp-coin"},[t._v("\n              "+t._s(e.coinName))]):t._e()],1),s("p",{staticClass:"li-text b-2-cl",domProps:{innerHTML:t._s(t.resloveText(e))}}),s("div",{staticClass:"li-right clearfix"},[s("c-switch",{attrs:{value:Boolean(e.isOpen)},on:{click:function(s){return t.switchChange(""+e.id,""+e.isOpen)}}}),s("c-button",{attrs:{className:"li-fun b-4-cl clearfix",type:"text"},on:{click:function(s){return t.click(""+e.id,"delete")}}},[t._v("\n              "+t._s(t.$t("personal.tool.delete"))+"\n            ")]),s("c-button",{attrs:{className:"li-fun b-4-cl clearfix",type:"text"},on:{click:function(s){return t.click(e,"modify")}}},[t._v("\n              "+t._s(t.$t("personal.tool.modify"))+"\n            ")])],1)])])})),s("li",{staticClass:"li clearfix"},[s("svg",{staticClass:"li-icon icon icon-24",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-e_8"}})]),s("div",{staticClass:"li-div li-divs a-3-bd b-1-cl clearfix"},[s("p",{staticClass:"li-title"},[t._v("\n            "+t._s(t.$t("personal.leaglTenderSet.titleList")[1].text)+"\n          ")]),s("p",{staticClass:"li-text b-2-cl"},[t._v("\n            "+t._s(t.$t("personal.leaglTenderSet.titleList")[1].label)+"\n          ")]),s("div",{staticClass:"li-right clearfix"},[0===t.isCapitalPwordSet?s("c-button",{attrs:{type:"solid",big:!0,className:"user-button",paddingW:"18px",height:"30px"},on:{click:function(e){return t.btnLink("modifySettings")}}},[t._v(t._s(t.$t("personal.tool.setUp")))]):s("c-button",{attrs:{className:"li-fun b-4-cl clearfix",type:"text"},on:{click:function(e){return t.btnLink("modifySettings")}}},[t._v("\n              "+t._s(t.$t("personal.tool.modify"))+"\n            ")])],1)])])],2)]),s("c-alert",{attrs:{showFlag:t.alertFlag,buttonText:this.$t("personal.alert.certif"),imageType:"1",imgMap:t.imgMap,colorMap:t.colorMap},on:{close:t.alertClose,confirm:t.alertGo}},[s("div",{staticClass:"alertTitle b-1-cl"},[t._v("\n      "+t._s(t.fiatTradeOpen?t.$t("assets.b2c.otcShow.fiatTitle"):t.$t("personal.alert.fiatTitle"))+"\n    ")]),s("div",{staticClass:"alertText"},[t._v(t._s(t.authTitleText))]),s("div",{staticClass:"alertError a-2-bd"},[s("span",{staticClass:"alertError-text b-4-cl"},[t._v("\n        "+t._s(this.$t("personal.alert.nickName")))]),this.nickName?s("span",[s("svg",{staticClass:"icon icon-14 alertError-icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-a_14_1"}})])]):s("span",[s("svg",{staticClass:"icon icon-14 alertError-icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-a_14"}})])])]),s("div",{staticClass:"alertError a-2-bd"},[s("span",{staticClass:"alertError-text b-4-cl"},[t._v("\n        "+t._s(this.$t("personal.alert.id")))]),1!==this.authLevel?s("span",[s("svg",{staticClass:"icon icon-14 alertError-icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-a_14"}})])]):s("span",[s("svg",{staticClass:"icon icon-14 alertError-icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-a_14_1"}})])])]),s("div",{staticClass:"alertError a-2-bd"},[s("span",{staticClass:"alertError-text b-4-cl"},[t._v("\n        "+t._s(this.$t("personal.alert.alertErrorTextGoogle")))]),this.google?s("span",[s("svg",{staticClass:"icon icon-14 alertError-icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-a_14_1"}})])]):s("span",[s("svg",{staticClass:"icon icon-14 alertError-icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-a_14"}})])])]),t.enforceGoogleAuth?t._e():s("div",{staticClass:"alertError alertBot a-2-bd"},[s("span",{staticClass:"alertError-text b-4-cl"},[t._v("\n        "+t._s(this.$t("personal.alert.alertErrorTextPhone")))]),this.sms?s("span",[s("svg",{staticClass:"icon icon-14 alertError-icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-a_14_1"}})])]):s("span",[s("svg",{staticClass:"icon icon-14 alertError-icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-a_14"}})])])])])],1)},i=[],n=(s("c5f6"),s("d25f"),s("95d5")),r={name:"leaglTenderSet",data:function(){return{activeId:"",alertFlag:!1,switchValue:!1,imgMap:n["u"],colorMap:n["c"],dataList:[],isCapitalPwordSet:0,sms:"",google:"",nickName:"",authLevel:0}},methods:{init:function(){this.$store.dispatch("otcPaymentFind"),this.$store.dispatch("getUserInfo");var t=this.$store.state.baseData.userInfo;null!==t&&(this.isCapitalPwordSet=t.isCapitalPwordSet,this.google=!!t.googleStatus,this.sms=!!t.isOpenMobileCheck,this.nickName=t.nickName,this.authLevel=t.authLevel)},resloveText:function(t){var e=t.bankName,s=t.bankOfDeposit,a=t.account,i=t.userName,n="";this.$store.state.baseData.userInfo&&(n=this.$store.state.baseData.userInfo.realName),this.isCanModifyName||(n=i),this.excheifFlag&&(n=i);var r=[e,s,a,n].filter((function(t){return t}));return r.join(" &nbsp; &nbsp; &nbsp; ")},alertClose:function(){this.alertFlag=!1},alertGo:function(){this.$router.push("/personal/userManagement")},switchChange:function(t,e){var s="0";s="1"===e?0:1;var a={id:Number(t),isOpen:s};this.$store.dispatch("otcPaymentOpen",a)},click:function(t,e){if(this.authIsPass){if("delete"===e){if(this.activeId!==t){this.activeId=t;var s={id:t};this.$store.dispatch("otcPaymentDelete",s)}}else if("modify"===e){this.$router.push({path:"/personal/setUp",query:{paymentId:t.id}});var a={obj:t,set:1};this.$store.dispatch("setPayment",a)}}else this.alertFlag=!0},btnLink:function(t){this.authIsPass?"modifySettings"===t?this.$router.push({path:"/personal/modifySettings",query:{}}):this.$router.push({path:"/personal/setUp",query:{}}):this.alertFlag=!0}},computed:{fiatTradeOpen:function(){var t=this.$store.state.baseData.publicInfo;return!(!t||!t.switch||"1"!==t.switch.fiat_trade_open)},authTitleText:function(){var t=this.enforceGoogleAuth?"personal.alert.enforceGoogleAuth":"assets.withdraw.safetyWarningError";return this.$t(t)},enforceGoogleAuth:function(){return this.$store.state.baseData.is_enforce_google_auth||0},authIsPass:function(){return this.nickName&&1===this.authLevel&&(this.google||!this.enforceGoogleAuth&&this.sms)},otcPaymentFind:function(){return this.$store.state.personal.otcPaymentFind},otcPaymentDelete:function(){return this.$store.state.personal.otcPaymentDelete},otcPaymentOpen:function(){return this.$store.state.personal.otcPaymentOpen},userInfo:function(){return this.$store.state.baseData.userInfo},isCanModifyName:function(){return this.userInfo&&0===Number(this.userInfo.userCompanyInfo.status)},excheifFlag:function(){return this.$store.state.baseData.exchief_project_switch}},watch:{otcPaymentFind:function(t){null!==t&&(this.dataList=t.data)},otcPaymentDelete:function(t){null!==t&&(this.activeId="","success"===t.text?(this.$bus.$emit("tip",{text:t.msg,type:"success"}),this.$store.dispatch("resetType"),this.$store.dispatch("otcPaymentFind")):(this.$bus.$emit("tip",{text:t.msg,type:"error"}),this.$store.dispatch("resetType")))},otcPaymentOpen:function(t){null!==t&&("success"===t.text?(this.$bus.$emit("tip",{text:t.msg,type:"success"}),this.$store.dispatch("resetType"),this.$store.dispatch("otcPaymentFind")):(this.$bus.$emit("tip",{text:t.msg,type:"error"}),this.$store.dispatch("resetType")))},userInfo:function(t){null!==t&&(this.isCapitalPwordSet=t.isCapitalPwordSet,this.google=!!t.googleStatus,this.sms=!!t.isOpenMobileCheck,this.nickName=t.nickName,this.authLevel=t.authLevel)}}},l=(s("78e7"),{mixins:[r],mounted:function(){this.init()}}),o=l,c=s("2877"),u=Object(c["a"])(o,a,i,!1,null,null,null);e["default"]=u.exports}}]);