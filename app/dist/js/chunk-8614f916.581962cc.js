(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8614f916"],{5687:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"user-management-close-phone a-5-bg"},[s("p",{staticClass:"user-management-child-header b-2-cl a-3-bd"},[e._v(e._s(e.$t("personal.closePhone.title")))]),s("div",{staticClass:"user-management-center a-5-bg"},[s("div",{staticClass:"management-center"},[s("c-inputLine",{attrs:{name:"smsCode",maxLength:"6",inputType:"text",promptText:e.promptText2,errorHave:!0,errorText:e.errorText2,errorFlag:e.checkErrorFlag2,marginTop:"0px",value:e.checkValue2},on:{onchanges:e.inputChanges}},[s("c-getCode",{attrs:{name:"smsCode",autoStart:!1,buttonName:"loginGetcodeBtn"},on:{click:e.getCodeClick}})],1),s("c-inputLine",{attrs:{name:"googleCode",maxLength:"6",inputType:"text",promptText:e.promptText1,errorHave:!0,errorText:e.errorText1,errorFlag:e.checkErrorFlag1,marginTop:"0px",value:e.checkValue1},on:{onchanges:e.inputChanges}}),s("c-button",{attrs:{type:"solid",big:!0,loading:e.loading,className:"",paddingW:"0px",disabled:e.disabled,marginTop:"18px",height:"40px",width:"100%"},on:{click:e.btnLink}},[e._v(e._s(e.$t("personal.tool.submit")))])],1)])])},o=[],i={name:"bindEmail",watch:{sendSmsCode:function(e){null!==e&&("success"===e.text?(this.$bus.$emit("tip",{text:e.msg,type:"success"}),this.$store.dispatch("resetType")):(this.$bus.$emit("tip",{text:e.msg,type:"error"}),this.$store.dispatch("resetType")))},closeMobileVerify:function(e){null!==e&&(this.loading=!1,"success"===e.text?(this.$bus.$emit("tip",{text:e.msg,type:"success"}),this.$store.dispatch("resetType"),this.$router.push("/personal/userManagement")):(this.$bus.$emit("tip",{text:e.msg,type:"error"}),this.$store.dispatch("resetType"),"10009"!==e.code&&this.$bus.$emit("getCode-clear","smsCode")))}},computed:{sendSmsCode:function(){return this.$store.state.personal.sendSmsCode},closeMobileVerify:function(){return this.$store.state.personal.closeMobileVerify}},data:function(){return{loading:!1,checkValue1:"",checkValue2:"",promptText1:this.$t("personal.label.googleCodeText"),promptText2:this.$t("personal.label.smsCodeText"),errorText1:this.$t("personal.prompt.errorCode"),errorText2:this.$t("personal.prompt.errorCode"),checkErrorFlag1:!1,checkErrorFlag2:!1,disabled:!0}},methods:{codeFlag:function(e){return this.$store.state.regExp.verification.test(e)},getCodeClick:function(e){if("smsCode"===e){this.$bus.$emit("getCode-start","smsCode");var t={operationType:14};this.$store.dispatch("sendSmsCode",t)}},inputChanges:function(e,t){"googleCode"===t?(this.checkValue1=e,this.codeFlag(e)?this.checkErrorFlag1=!1:this.checkErrorFlag1=!0):(this.checkValue2=e,this.codeFlag(e)?this.checkErrorFlag2=!1:this.checkErrorFlag2=!0),this.checkValue1&&this.checkValue2&&!this.checkErrorFlag1&&!this.checkErrorFlag2?this.disabled=!1:this.disabled=!0},btnLink:function(){this.loading=!0;var e={googleCode:this.checkValue1,smsValidCode:this.checkValue2};this.$store.dispatch("closeMobileVerify",e)}}},a=(s("ab00"),{mixins:[i]}),n=a,c=s("2877"),l=Object(c["a"])(n,r,o,!1,null,null,null);t["default"]=l.exports},ab00:function(e,t,s){}}]);