(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b376a79"],{"83c6":function(t,i,a){"use strict";a.r(i);var n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return t.viewShow?a("div",{staticClass:"company-application-page company-application-container"},[a("div",{staticClass:"company-application a-5-bg"},[a("div",{staticClass:"application-header"},[a("h1",{staticClass:"b-1-cl title"},[t._v(t._s(t.$t("application.applyCompany")))]),a("p",{staticClass:"b-2-cl desc"},[t._v(t._s(t.$t("application.applyCompanyDesc")))])]),a("ul",{staticClass:"service-list"},t._l(t.serviceList,(function(i,n){return a("li",{key:"serviceList"+n,staticClass:"li a-4-bg"},[a("img",{staticClass:"icon",attrs:{src:t.imgList[n]}}),a("h3",{staticClass:"b-1-cl li-title"},[t._v(t._s(i.title))]),a("p",{staticClass:"b-2-cl li-desc"},[t._v(t._s(i.desc))])])})),0),a("div",{staticClass:"application-region"},[t.applyPass?a("p",{staticClass:"b-2-cl app-desc"},[t._v(t._s(t.congratulate))]):t._e(),t.btnShow?a("p",{staticClass:"b-2-cl app-desc"},[a("c-checkBox",{attrs:{value:t.textFlag},on:{click:t.checkoutClick}}),a("span",{staticClass:"protocol"},[t._v(t._s(t.$t("application.agree"))+"\n          "),a("a",{staticClass:" b-4-cl",attrs:{href:"/applicationPolicy",target:"_blank"}},[t._v(t._s(t.$t("application.agreePolicy")))])])],1):t._e(),a("div",{staticClass:"btn-region b-4-cl"},[t.relieving?a("c-button",{attrs:{height:"40px",width:"140px",className:"comBtn",disabled:!0,paddingW:"0px"},on:{click:t.relieving}},[t._v(t._s(t.$t("application.relieveing"))+"\n        ")]):t._e(),t.btnShow?a("c-button",{attrs:{height:"40px",width:"140px",className:"comBtn",disabled:t.submitDisabled,paddingW:"0px"},on:{click:t.apply}},[t._v(t._s(t.applyBtn)+"\n        ")]):t._e(),t.applyPass?a("c-button",{attrs:{big:!0,type:3===t.applyStatus&&3===t.applyRuleStatus||2===t.applyStatus&&3===t.applyRuleStatus?void 0:"text",className:"relieve-btn comBtn",paddingW:"31px",height:"40px"},on:{click:t.relieveClick}},[t._v(t._s(this.$t("application.relieve"))+"\n        ")]):t._e()],1)]),a("c-dialog",{attrs:{showFlag:t.alertFlag,buttonText:"btnConfirm",titleText:t.$t("application.relieve"),confirmLoading:t.confirmLoading},on:{close:t.alertClose,confirm:t.confirm}},[a("p",{staticClass:"b-2-cl dialog-text"},[t._v(t._s(t.$t("application.dialogDesc")))])])],1)]):t._e()},s=[],e=(a("ed57"),a("8e91"),a("95d5")),o={name:"CompanyApplication",data:function(){return{jurisdictionObj:{data:[],str:"",statusKey:"",flag:!1,btnText:"",btnLink:"",pass:!0},textFlag:!0,copyTime:0,btnConfirm:this.$t("application.confirm"),submitLoading:!1,superCompany:!1,confirmLoading:!1,alertFlag:!1,serviceList:this.$t("application.serviceList"),viewShow:!1,imgList:[e["u"].application_security,e["u"].application_ads,e["u"].application_special,e["u"].application_vip]}},watch:{},computed:{otcCompanyInfo:function(){return this.userInfo.otcCompanyInfo||{}},userCompanyInfo:function(){return this.userInfo.userCompanyInfo||{}},btnShow:function(){var t=this.applyStatus,i=this.applyRuleStatus,a=this.companyStatus,n=!1;return(0===t||0===i||1===t&&4!==i&&2!==i||3===t&&1===i&&2===a||2===t&&1===i&&2===a)&&(n=!0),n},congratulate:function(){var t="";return t=1===this.applyRuleStatus?this.$t("application.congratulate"):this.$t("application.congratulateSuper"),t},allPass:function(){var t=this.applyStatus,i=this.applyRuleStatus,a=this.companyStatus;return 3===i&&3===t||3===t&&1===i&&1===a},applyBtn:function(){var t="";return t=0===this.applyRuleStatus?this.$t("application.applyBtn"):this.$t("application.applyBtnSuper"),t},companyStatus:function(){return Number(this.otcCompanyInfo.status)},applyStatus:function(){return Number(this.userCompanyInfo.applyStatus)},relieving:function(){var t=!1,i=this.applyStatus,a=this.applyRuleStatus;return 1!==i||2!==a&&4!==a||(t=!0),t},applyRuleStatus:function(){return Number(this.userCompanyInfo.status)},applyPass:function(){var t=this.applyStatus,i=this.applyRuleStatus,a=this.companyStatus;return(1===i&&3===t||(1===t||3===t)&&3===i||2===t&&(1===i||3===i)||1===t&&1===i&&2===a)&&1!==t},marginCoinSymbol:function(){return this.otcCompanyInfo.marginCoinSymbol},normalCompanyMarginNum:function(){return Number(this.otcCompanyInfo.normalCompanyMarginNum)},otcCompanyApplyEmail:function(){return Number(this.otcCompanyInfo.otcCompanyApplyEmail)},docAddr:function(){return Number(this.otcCompanyInfo.docAddr)},submitDisabled:function(){return!this.textFlag},userInfo:function(){return this.$store.state.baseData.userInfo||{}}},methods:{init:function(){0===this.companyStatus?this.$router.push("/"):this.viewShow=!0,this.jurisdiction()},isSh:function(){"1"===this.userInfo.authLevel.toString()&&this.userInfo.otcCompanyInfo&&this.userInfo.userCompanyInfo&&"0"!==this.userInfo.otcCompanyInfo.status&&this.userInfo.userCompanyInfo},jurisdiction:function(){var t=[],i=this.$t("otcRelease.jurisdictionTitle"),a=this.userInfo,n=a.otcCompanyInfo,s=a.userCompanyInfo,e=a.nickName,o=a.authLevel,c="",l="",p="",r=!0,u=this.$t("otcRelease.authentication");"1"===o.toString()?t.push({text:u,flag:!0,key:"authLevel"}):(t.push({text:u,flag:!1,key:"authLevel"}),c="authLevel",l=this.$t("otcRelease.DeCertification"),p="/personal/idAuth",r=!1);var h=this.$t("otcRelease.SetNickname");if(e&&e.length?t.push({text:h,flag:!0,key:"nickName"}):(t.push({text:h,flag:!1,key:"nickName"}),c.length||(c="nickName",l=this.$t("otcRelease.ToSetUp"),p="/personal/userManagement",r=!1)),"0"!==n.status.toString()){i=this.$t("otcRelease.jurisdictionTitle2");var m=this.$t("otcRelease.ApplicationMerchant");"0"!==s.status.toString()?t.push({text:m,flag:!0,key:"companyInfo"}):(t.push({text:m,flag:!1,key:"companyInfo"}),c.length||(c="companyInfo",l=this.$t("otcRelease.ToApply"),p="self",r=!1))}var f={data:t,str:i,statusKey:c,btnText:l,btnLink:p,pass:r,flag:!!c.length};this.jurisdictionObj=f},alertConfirm:function(){"self"===this.jurisdictionObj.btnLink?this.jurisdictionObj.flag=!1:this.$router.push(this.jurisdictionObj.btnLink)},verifyAlertClose:function(){this.jurisdictionObj.flag=!1},alertClose:function(){this.alertFlag=!1},confirm:function(){this.relieve()},checkoutClick:function(t){this.textFlag=t},apply:function(){this.$router.push("/companyApplicationDetail")},relieveClick:function(){this.alertFlag=!0},relieve:function(){var t=this;this.confirmLoading=!0,this.axios({url:this.$store.state.url.common.company_release,hostType:"otc",method:"post"}).then((function(i){Number(i.code)?(t.$bus.$emit("tip",{text:i.msg,type:"error"}),t.alertFlag=!1,t.confirmLoading=!1):(t.$bus.$emit("tip",{text:i.msg,type:"success"}),t.$store.dispatch("getUserInfo"),t.alertFlag=!1,t.confirmLoading=!1,e["w"].remove("companyAppling"))}))}}},c=(a("fb6e"),{mixins:[o],mounted:function(){this.init()}}),l=c,p=a("2877"),r=Object(p["a"])(l,n,s,!1,null,null,null);i["default"]=r.exports},fb6e:function(t,i,a){}}]);