(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c566874"],{"4d3e":function(e,t,s){},"56b3":function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"user-management-bind-email a-5-bg"},[s("p",{staticClass:"user-management-child-header b-1-cl a-3-bd"},[e._v(e._s(e.$t("personal.bindEmail.title")))]),s("div",{staticClass:"user-management-center a-5-bg"},[s("div",{staticClass:"center-input"},[s("c-inputLine",{attrs:{maxLength:"100",name:"email",inputType:"text",promptText:e.promptText1,errorHave:!0,errorText:e.errorText1,errorFlag:e.checkErrorFlag1,marginTop:"0px",value:e.checkValue1},on:{onchanges:e.inputChanges}}),s("c-inputLine",{attrs:{maxLength:"6",name:"emailCode",inputType:"text",promptText:e.promptText2,errorHave:!0,errorText:e.errorText2,errorFlag:e.checkErrorFlag2,marginTop:"0px",value:e.checkValue2},on:{onchanges:e.inputChanges}},[s("c-getCode",{attrs:{name:"email",autoStart:e.autoStart,buttonName:"loginGetcodeBtn"},on:{click:e.getCodeClick}})],1),s("c-button",{attrs:{type:"solid",big:!0,loading:e.loading,className:"",paddingW:"0px",disabled:e.disabled,marginTop:"18px",height:"40px",width:"100%"},on:{click:e.btnLink}},[e._v(e._s(e.$t("personal.tool.bind")))])],1)])])},i=[],o=(s("8e91"),{name:"bindEmail",watch:{userInfo:function(e){this.googleCode=!!Number(e.googleStatus),this.smsCode=!!Number(e.isOpenMobileCheck)},sendSmsCode:function(e){null!==e&&("success"===e.text?(this.$bus.$emit("tip",{text:e.msg,type:"success"}),this.$store.dispatch("resetType")):(this.$bus.$emit("tip",{text:e.msg,type:"error"}),this.$store.dispatch("resetType")))},sendEmailCode:function(e){null!==e&&("success"===e.text?(this.$bus.$emit("tip",{text:e.msg,type:"success"}),this.$store.dispatch("resetType")):(this.$bus.$emit("tip",{text:e.msg,type:"error"}),this.$store.dispatch("resetType")))},bindEmail:function(e){this.loading=!1,"success"===e.text?(this.$bus.$emit("tip",{text:e.msg,type:"success"}),this.$store.dispatch("resetType"),this.$router.push("/personal/userManagement")):(this.$bus.$emit("tip",{text:e.msg,type:"error"}),this.$store.dispatch("resetType"),"10009"!==e.code&&this.$bus.$emit("getCode-clear","phone"))}},computed:{userInfo:function(){return this.$store.state.baseData.userInfo},sendSmsCode:function(){return this.$store.state.personal.sendSmsCode},sendEmailCode:function(){return this.$store.state.personal.sendEmailCode},bindEmail:function(){return this.$store.state.personal.bindEmail}},data:function(){return{loading:!1,checkValue1:"",checkValue2:"",checkValue4:"",checkValue5:"",promptText1:this.$t("personal.label.email"),promptText2:this.$t("personal.label.emailCodeText"),promptText4:this.$t("personal.label.smsCodeText"),promptText5:this.$t("personal.label.googleCodeText"),errorText1:this.$t("personal.prompt.errorEmailText"),errorText2:this.$t("personal.prompt.errorCode"),errorText4:this.$t("personal.prompt.errorCode"),errorText5:this.$t("personal.prompt.errorCode"),checkErrorFlag1:!1,checkErrorFlag2:!1,checkErrorFlag4:!1,checkErrorFlag5:!1,disabled:!0,oldNew:!1,smsCode:!1,googleCode:!1,autoStart:!1,error:!1}},methods:{init:function(){this.userInfo&&(this.googleCode=!!Number(this.userInfo.googleStatus),this.smsCode=!!Number(this.userInfo.isOpenMobileCheck))},emailFlag:function(e){return this.$store.state.regExp.email.test(e)},codeFlag:function(e){return this.$store.state.regExp.verification.test(e)},getCodeClick:function(e){if("phone"===e){this.$bus.$emit("getCode-start","phone");var t={operationType:5};this.$store.dispatch("sendSmsCode",t)}else if(this.emailFlag(this.checkValue1)){this.$bus.$emit("getCode-start","email");var s={email:this.checkValue1,operationType:2};this.$store.dispatch("sendEmailCode",s)}else this.checkErrorFlag1=!0,this.errorText1=this.$t("personal.prompt.errorEmail")},inputChanges:function(e,t){switch(t){case"email":this.checkValue1=e,this.emailFlag(e)?this.checkErrorFlag1=!1:(this.errorText1=this.$t("personal.prompt.errorEmailText"),this.checkErrorFlag1=!0);break;case"emailCode":this.checkValue2=e,this.codeFlag(e)?this.checkErrorFlag2=!1:this.checkErrorFlag2=!0;break;case"smsCode":this.checkValue4=e,this.codeFlag(e)?this.checkErrorFlag4=!1:this.checkErrorFlag4=!0;break;default:this.checkValue5=e,this.codeFlag(e)?this.checkErrorFlag5=!1:this.checkErrorFlag5=!0}!this.checkValue1||!this.checkValue2||this.checkErrorFlag1||this.checkErrorFlag2||this.checkErrorFlag4||this.checkErrorFlag5?this.disabled=!0:this.disabled=!1},btnLink:function(){this.loading=!0;var e={email:this.checkValue1,emailValidCode:this.checkValue2,smsValidCode:this.checkValue4,googleCode:this.checkValue5};this.$store.dispatch("bindEmail",e)}}}),a=(s("4d3e"),{mixins:[o],mounted:function(){this.init()}}),n=a,c=s("2877"),l=Object(c["a"])(n,r,i,!1,null,null,null);t["default"]=l.exports}}]);