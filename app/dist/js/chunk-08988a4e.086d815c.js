(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-08988a4e"],{"1cb2":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"user-management-change-password a-5-bg"},[r("p",{staticClass:"user-management-child-header b-2-cl a-3-bd a-5-bg"},[e._v("\n    "+e._s(e.$t("personal.changePassword.title")))]),r("div",{staticClass:"user-management-center a-5-bg"},[r("p",{staticClass:"center-title b-7-cl"},[r("svg",{staticClass:"icon icon-16",attrs:{"aria-hidden":"true"}},[r("use",{attrs:{"xlink:href":"#icon-c_2"}})]),e._v(e._s(e.$t("personal.prompt.warningChangePassword")))]),r("div",{staticClass:"center-input"},[r("c-inputLine",{attrs:{maxLength:"20",name:"oldPassword",inputType:"password",promptText:e.promptText1,errorHave:!0,errorText:e.errorText1,errorFlag:e.checkErrorFlag1,marginTop:"0px",value:e.checkValue1},on:{onchanges:e.inputChanges,focus:function(t){return e.checkFocus(1)}}}),r("c-inputLine",{attrs:{maxLength:"20",name:"newPassword",inputType:"password",promptText:e.promptText2,errorHave:!0,errorText:e.errorText2,errorFlag:e.checkErrorFlag2,marginTop:"0px",value:e.checkValue2},on:{onchanges:e.inputChanges,focus:function(t){return e.checkFocus(2)}}}),r("c-inputLine",{attrs:{maxLength:"20",name:"newPasswordAgain",inputType:"password",promptText:e.promptText3,errorHave:!0,errorText:e.errorText3,errorFlag:e.checkErrorFlag3,marginTop:"0px",value:e.checkValue3},on:{onchanges:e.inputChanges,focus:function(t){return e.checkFocus(3)}}}),e.smsCode?r("c-inputLine",{attrs:{maxLength:"6",name:"smsCode",inputType:"text",promptText:e.promptText4,errorHave:!0,errorText:e.errorText4,errorFlag:e.checkErrorFlag4,marginTop:"0px",value:e.checkValue4},on:{onchanges:e.inputChanges,focus:function(t){return e.checkFocus(4)}}},[r("c-getCode",{attrs:{name:"loginGetcode",buttonName:"loginGetcodeBtn"},on:{click:e.getCodeClick}})],1):e._e(),e.googleCode?r("c-inputLine",{attrs:{maxLength:"6",name:"googleCode",inputType:"text",promptText:e.promptText5,errorHave:!0,errorText:e.errorText5,errorFlag:e.checkErrorFlag5,marginTop:"0px",value:e.checkValue5},on:{onchanges:e.inputChanges,focus:function(t){return e.checkFocus(5)}}}):e._e(),r("c-button",{attrs:{type:"solid",big:!0,className:"",paddingW:"0px",disabled:e.disabled,loading:e.loading,marginTop:"18px",height:"40px",width:"100%"},on:{click:e.btnLink}},[e._v(e._s(e.$t("personal.tool.modify")))])],1)])])},o=[],a=(r("ed57"),r("8e91"),{name:"changePassword",watch:{userInfo:function(e){this.googleCode=!!Number(e.googleStatus),this.smsCode=!!Number(e.isOpenMobileCheck)},resetPassword:function(e){null!==e&&(this.loading=!1,"success"===e.text?(this.$store.dispatch("resetType"),this.out()):(this.$bus.$emit("tip",{text:e.msg,type:"error"}),this.$store.dispatch("resetType"),"10009"!==e.code&&this.$bus.$emit("getCode-clear","loginGetcode")))},sendSmsCode:function(e){null!==e&&("success"===e.text?(this.$bus.$emit("tip",{text:e.msg,type:"success"}),this.$store.dispatch("resetType")):(this.$bus.$emit("tip",{text:e.msg,type:"error"}),this.$store.dispatch("resetType")))}},computed:{userInfo:function(){return this.$store.state.baseData.userInfo},resetPassword:function(){return this.$store.state.personal.resetPassword},sendSmsCode:function(){return this.$store.state.personal.sendSmsCode}},data:function(){return{checkValue1:"",checkValue2:"",checkValue3:"",checkValue4:"",checkValue5:"",promptText1:this.$t("personal.label.oldPassword"),promptText2:this.$t("personal.label.newPassword"),promptText3:this.$t("personal.label.newPasswordAgain"),promptText4:this.$t("personal.label.smsCodeText"),promptText5:this.$t("personal.label.googleCodeText"),errorText1:this.$t("personal.prompt.errorPasswordText"),errorText2:this.$t("personal.prompt.errorPasswordText"),errorText3:this.$t("personal.prompt.errorPasswordTwo"),errorText4:this.$t("personal.prompt.errorCode"),errorText5:this.$t("personal.prompt.errorCode"),checkErrorFlag1:!1,checkErrorFlag2:!1,checkErrorFlag3:!1,checkErrorFlag4:!1,checkErrorFlag5:!1,disabled:!0,oldNew:!1,smsCode:!1,googleCode:!1,loading:!1}},methods:{init:function(){this.userInfo&&(this.googleCode=!!Number(this.userInfo.googleStatus),this.smsCode=!!Number(this.userInfo.isOpenMobileCheck))},out:function(){var e=this;this.axios({url:"/user/login_out"}).then((function(t){"0"===t.code.toString()?(e.$bus.$emit("tip",{text:t.msg,type:"success"}),e.$bus.$emit("outUserIsLogin")):e.$bus.$emit("tip",{text:t.msg,type:"error"})}))},getCodeClick:function(){var e={operationType:5};this.$store.dispatch("sendSmsCode",e)},passFlag:function(e){return this.$store.state.regExp.passWord.test(e)},codeFlag:function(e){return this.$store.state.regExp.verification.test(e)},inputChanges:function(e,t){switch(t){case"oldPassword":this.checkValue1=e,this.passFlag(e)?this.checkErrorFlag1=!1:this.checkErrorFlag1=!0;break;case"newPassword":this.checkValue2=e,this.passFlag(e)?this.checkErrorFlag2=!1:this.checkErrorFlag2=!0;break;case"newPasswordAgain":this.checkValue3=e,this.checkValue3===this.checkValue2?this.checkErrorFlag3=!1:this.checkErrorFlag3=!0;break;case"smsCode":this.checkValue4=e,this.codeFlag(e)?this.checkErrorFlag4=!1:this.checkErrorFlag4=!0;break;default:this.checkValue5=e,this.codeFlag(e)?this.checkErrorFlag5=!1:this.checkErrorFlag5=!0}!(this.checkValue1&&this.checkValue2&&this.checkValue3&&this.checkValue2===this.checkValue3)||this.checkErrorFlag1||this.checkErrorFlag2||this.checkErrorFlag3||this.checkErrorFlag4||this.checkErrorFlag5?this.disabled=!0:(this.smsCode&&(this.disabled=!this.checkValue4),this.googleCode&&(this.disabled=!this.checkValue5),this.smsCode&&this.googleCode&&(this.disabled=!(this.checkValue5&&this.checkValue4)))},checkFocus:function(e){switch(e){case"1":break;case"2":break;default:}},btnLink:function(){var e={loginPword:this.checkValue1,newLoginPword:this.checkValue2,smsAuthCode:this.checkValue4,googleCode:this.checkValue5};this.loading=!0,this.$store.dispatch("resetPassword",e)}}}),c=(r("2c7e"),{mixins:[a],mounted:function(){this.init()}}),i=c,n=r("2877"),h=Object(n["a"])(i,s,o,!1,null,null,null);t["default"]=h.exports},"2c7e":function(e,t,r){}}]);