(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d9a4f8c0"],{4666:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"user-management-change-phone a-5-bg"},[r("p",{staticClass:"user-management-child-header b-2-cl a-3-bd a-5-bg"},[e._v("\n    "+e._s(e.$t("personal.changePhone.title")))]),r("div",{staticClass:"user-management-center a-5-bg"},[r("p",{staticClass:"center-title b-7-cl"},[r("svg",{staticClass:"icon icon-16",attrs:{"aria-hidden":"true"}},[r("use",{attrs:{"xlink:href":"#icon-c_2"}})]),e._v(e._s(e.$t("personal.prompt.warningChangePhone")))]),r("div",{staticClass:"center-input"},[r("c-inputLine",{attrs:{name:"oldPhone",inputType:"text",promptText:e.promptText1,errorHave:!0,errorText:e.errorText1,errorFlag:e.checkErrorFlag1,disabled:!0,marginTop:"0px",value:e.checkValue1},on:{onchanges:e.inputChanges}}),r("c-inputLine",{attrs:{name:"oldSmsCode",maxLength:"6",inputType:"text",promptText:e.promptText2,errorHave:!0,errorText:e.errorText2,errorFlag:e.checkErrorFlag2,marginTop:"0px",value:e.checkValue2},on:{onchanges:e.inputChanges}},[r("c-getCode",{attrs:{name:"oldSmsCode",autoStart:!1,buttonName:"loginGetcodeBtn"},on:{click:e.getCodeClick}})],1),r("c-select",{attrs:{value:e.country,promptText:e.promptText,filterable:!0,name:"country",errorHave:!0,errorFlag:e.countryErrorFlag,errorText:e.errorText,options:e.countryList},on:{onChanges:e.countryChange}}),r("c-inputLine",{attrs:{name:"newPhone",maxLength:"20",inputType:"text",promptText:e.promptText3,errorHave:!0,errorText:e.errorText3,errorFlag:e.checkErrorFlag3,marginTop:"0px",value:e.checkValue3},on:{onchanges:e.inputChanges}}),r("c-inputLine",{attrs:{name:"smsCode",maxLength:"6",inputType:"text",promptText:e.promptText4,errorHave:!0,errorText:e.errorText4,errorFlag:e.checkErrorFlag4,marginTop:"0px",value:e.checkValue4},on:{onchanges:e.inputChanges}},[r("c-getCode",{attrs:{name:"smsCode",autoStart:!1,buttonName:"loginGetcodeBtn"},on:{click:e.getCodeClick}})],1),e.googleCode?r("c-inputLine",{attrs:{name:"googleCode",maxLength:"6",inputType:"text",promptText:e.promptText5,errorHave:!0,errorText:e.errorText5,errorFlag:e.checkErrorFlag5,marginTop:"0px",value:e.checkValue5},on:{onchanges:e.inputChanges}}):e._e(),r("c-button",{attrs:{type:"solid",loading:e.loading,big:!0,className:"",paddingW:"0px",disabled:e.disabled,marginTop:"18px",height:"40px",width:"100%"},on:{click:e.btnLink}},[e._v(e._s(e.$t("personal.tool.modify")))])],1)])])},s=[],n=(r("8e91"),r("f8d9")),i={name:"changePassword",mixins:[n["a"]],watch:{userInfo:function(e){this.googleCode=!!Number(e.googleStatus),this.smsCode=!!Number(e.isOpenMobileCheck),this.checkValue1=this.userInfo.mobileNumber},mobileUpdate:function(e){null!==e&&(this.loading=!1,"success"===e.text?(this.$bus.$emit("tip",{text:e.msg,type:"success"}),this.$store.dispatch("resetType"),this.$router.push("/personal/userManagement")):(this.$bus.$emit("tip",{text:e.msg,type:"error"}),this.$store.dispatch("resetType"),"10009"!==e.code&&this.$bus.$emit("getCode-clear","smsCode")))},sendSmsCode:function(e){null!==e&&("success"===e.text?(this.$bus.$emit("tip",{text:e.msg,type:"success"}),this.$store.dispatch("resetType")):(this.$bus.$emit("tip",{text:e.msg,type:"error"}),this.$store.dispatch("resetType")))}},computed:{userInfo:function(){return this.$store.state.baseData.userInfo},sendSmsCode:function(){return this.$store.state.personal.sendSmsCode},mobileUpdate:function(){return this.$store.state.personal.mobileUpdate}},data:function(){return{promptText:this.$t("personal.label.promptText"),errorText:this.$t("personal.label.errorText"),loading:!1,checkValue1:"",checkValue2:"",checkValue3:"",checkValue4:"",checkValue5:"",promptText1:this.$t("personal.label.oldPhone"),promptText2:this.$t("personal.label.smsCodeText"),promptText3:this.$t("personal.label.newPhone"),promptText4:this.$t("personal.label.smsCodeText"),promptText5:this.$t("personal.label.googleCodeText"),errorText1:"",errorText2:this.$t("personal.prompt.errorCode"),errorText3:this.$t("personal.prompt.errorPhone"),errorText4:this.$t("personal.prompt.errorCode"),errorText5:this.$t("personal.prompt.errorCode"),checkErrorFlag1:!1,checkErrorFlag2:!1,checkErrorFlag3:!1,checkErrorFlag4:!1,checkErrorFlag5:!1,disabled:!0,oldNew:!1,smsCode:!1,googleCode:!1,countryErrorFlag:!1}},methods:{init:function(){this.userInfo&&(this.googleCode=!!Number(this.userInfo.googleStatus),this.smsCode=!!Number(this.userInfo.isOpenMobileCheck),this.checkValue1=this.userInfo.mobileNumber)},phoneFlag:function(e){return this.$store.state.regExp.phone.test(e)},codeFlag:function(e){return this.$store.state.regExp.verification.test(e)},getCodeClick:function(e){if("oldSmsCode"===e){this.$bus.$emit("getCode-start","oldSmsCode");var t={operationType:3};this.$store.dispatch("sendSmsCode",t)}else if(this.checkValue3&&!this.checkErrorFlag3){this.$bus.$emit("getCode-start","smsCode");var r={mobile:this.checkValue3,operationType:2,countryCode:this.countryKeyCode};this.$store.dispatch("sendSmsCode",r)}else this.checkErrorFlag3=!0,this.errorText3=this.$t("personal.prompt.errorNewPhone")},inputChanges:function(e,t){switch(t){case"oldSmsCode":this.checkValue2=e,this.codeFlag(e)?this.checkErrorFlag2=!1:this.checkErrorFlag2=!0;break;case"newPhone":this.checkValue3=e,this.phoneFlag(e)?this.checkErrorFlag3=!1:(this.checkErrorFlag3=!0,this.errorText3=this.$t("personal.prompt.errorPhone"));break;case"smsCode":this.checkValue4=e,this.codeFlag(e)?this.checkErrorFlag4=!1:this.checkErrorFlag4=!0;break;default:this.checkValue5=e,this.codeFlag(e)?this.checkErrorFlag5=!1:this.checkErrorFlag5=!0}!(this.checkValue4&&this.checkValue2&&this.checkValue3)||this.checkErrorFlag2||this.checkErrorFlag3||this.checkErrorFlag4||this.checkErrorFlag5?this.disabled=!0:this.googleCode?this.disabled=!this.checkValue5:this.disabled=!1},btnLink:function(){this.loading=!0;var e={smsAuthCode:this.checkValue4,countryCode:this.countryKeyCode,mobileNumber:this.checkValue3,googleCode:this.checkValue5,authenticationCode:this.checkValue2};this.$store.dispatch("mobileUpdate",e)}}},a=(r("4d75"),{mixins:[i],mounted:function(){this.init()}}),c=a,u=r("2877"),h=Object(u["a"])(c,o,s,!1,null,null,null);t["default"]=h.exports},"4d75":function(e,t,r){},f8d9:function(e,t,r){"use strict";r("8335"),r("07be"),r("79cb");var o=r("95d5");t["a"]={data:function(){return{countryKeyCode:"",country:""}},watch:{countryObj:{handler:function(){var e=this.defaultCountryCode;e&&""===this.countryKeyCode&&(this.countryKeyCode=e),!this.defaultCountryCodeReal&&!this.country&&e&&this.countryMap&&this.countryMap[e]&&(this.country=this.countryMap[e].code),this.defaultCountryCodeReal&&""===this.country&&(this.country=this.defaultCountryCodeReal)}},defaultCountryCodeReal:{handler:function(e){e&&""===this.country&&(this.country=e)},immediate:!0},defaultCountryCode:{handler:function(e){e&&""===this.countryKeyCode&&(this.defaultCountryCodeReal?this.countryKeyCode=this.countryListKeyObj[this.defaultCountryCodeReal].keyCode:this.countryKeyCode=e),!this.defaultCountryCodeReal&&!this.country&&e&&this.countryMap&&this.countryMap[e]&&(this.country=this.countryMap[e].code)},immediate:!0}},computed:{countryListKeyObj:function(){var e={};return this.countryObj.list.forEach((function(t){e[t.code]={code:t.code,keyCode:t.keyCode,value:t.value.split(" ")[0]}})),e},countryList:function(){return this.countryObj.list},registerCountryList:function(){var e=this.filterCountryList(this.$t("phoneCode"));return Object(o["o"])(e).list},countryListMoy:function(){var e=[];return this.countryObj.list.forEach((function(t){e.push({code:t.code,keyCode:t.keyCode,value:t.value.split(" +")[0]})})),e},countryMap:function(){return this.countryObj.countryMap},countryRealMap:function(){return this.countryObj.countryRealMap},countryObj:function(){return this.$store.state.baseData.countryObj},defaultCountryCode:function(){return this.$store.state.baseData.defaultCountryCode},defaultCountryCodeReal:function(){return this.$store.state.baseData.defaultCountryCodeReal},limitCountryList:function(){return this.$store.state.baseData.limitCountryList}},methods:{countryChange:function(e){this.country=e.code,this.countryKeyCode=e.keyCode},filterCountryList:function(e){var t=e,r=this.limitCountryList;return r.length>0&&(r=r.join("").split("+"),Object.keys(t).forEach((function(e){t[e]=t[e].filter((function(e){var t=e.split("+");return-1===r.indexOf(t[2])}))}))),t}}}}}]);