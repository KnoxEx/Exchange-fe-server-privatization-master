(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-00a2f822"],{"4c1d":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"user-management-exccAuthorization"},[i("p",{staticClass:"user-management-child-header b-1-cl a-3-bd"},[t._v("\n    "+t._s(t.$t("personal.exccAuthorization.title2"))+"\n  ")]),t.isLoading?i("div",{staticClass:"loadinBox"},[i("c-loading",{attrs:{size:"60"}})],1):i("div",{staticClass:"user-management-center"},[0===t.authLevel||"1"===t.active?i("div",{staticClass:"audit-information"},[i("svg",{staticClass:"icon icon-50",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-g_3"}})]),i("p",[t._v(t._s(t.$t("personal.idAuth.wait")[0])+"\n        "),i("br"),t._v(t._s(t.$t("personal.idAuth.wait")[1]))])]):i("div",[i("p",{staticClass:"note b-7-cl"},[i("svg",{staticClass:"icon icon-16",staticStyle:{marginRight:"5px"},attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-c_2"}})]),t._v("\n        "+t._s(t.$t("personal.exccAuthorization.title"))+"\n      ")]),i("div",{staticClass:"idAuth-center clearfix"},[i("c-inputLine",{attrs:{name:"aliasname",inputType:"text",promptText:t.$t("personal.exccAuthorization.promptText1"),errorHave:!0,disabled:!0,value:t.aliasname}}),i("c-inputLine",{attrs:{name:"sex",inputType:"text",promptText:t.$t("personal.exccAuthorization.promptText2"),errorHave:!0,disabled:!0,value:t.sex}}),i("c-inputLine",{attrs:{name:"uinfin",inputType:"text",promptText:t.$t("personal.exccAuthorization.promptText3"),errorHave:!0,disabled:!0,value:t.uinfin}}),i("c-inputLine",{attrs:{name:"name",inputType:"text",promptText:t.$t("personal.exccAuthorization.promptText4"),errorHave:!0,disabled:!0,value:t.name}}),i("c-inputLine",{attrs:{name:"nationality",inputType:"text",promptText:t.$t("personal.exccAuthorization.promptText5"),errorHave:!0,disabled:!0,value:t.nationality}}),i("c-inputLine",{attrs:{name:"residentialstatus",inputType:"text",promptText:t.$t("personal.exccAuthorization.promptText6"),errorHave:!0,disabled:!0,value:t.residentialstatus}}),i("c-inputLine",{attrs:{name:"dob",inputType:"text",promptText:t.$t("personal.exccAuthorization.promptText7"),errorHave:!0,disabled:!0,value:t.dob}}),i("c-inputLine",{attrs:{name:"birthcountry",inputType:"text",promptText:t.$t("personal.exccAuthorization.promptText8"),errorHave:!0,disabled:!0,value:t.birthcountry}}),i("c-inputLine",{attrs:{name:"regadd",inputType:"text",promptText:t.$t("personal.exccAuthorization.promptText9"),errorHave:!0,disabled:!0,value:t.regadd}}),i("c-inputLine",{attrs:{name:"mobileno",inputType:"text",promptText:t.$t("personal.exccAuthorization.promptText10"),errorHave:!0,errorText:"",maxLength:"13",value:t.mobileno},on:{onchanges:t.inputChanges}}),i("c-inputLine",{attrs:{name:"mailadd",inputType:"text",promptText:t.$t("personal.exccAuthorization.promptText11"),errorHave:!0,maxLength:"50",value:t.mailadd},on:{onchanges:t.inputChanges}}),i("c-select",{attrs:{filterable:!0,value:t.income,promptText:t.$t("personal.exccAuthorization.promptText12"),name:"income",errorHave:!0,options:t.incomeList},on:{onChanges:t.incomeChange}}),"6"===t.income?i("c-inputLine",{attrs:{name:"qtTExt",inputType:"text",promptText:t.$t("personal.exccAuthForm.text15"),marginTop:"0px",maxLength:"256",value:t.qtTExt},on:{onchanges:t.inputChanges}}):t._e(),i("c-button",{attrs:{type:"solid",big:!0,className:"",paddingW:"0px",disabled:t.disabled,marginTop:"18px",height:"40px",width:"100%"},on:{click:function(e){return t.submitData()}}},[t._v(t._s(t.$t("personal.exccAuthorization.submit")))])],1)])])])},a=[],o=(i("07be"),i("bd33"),i("8e91"),i("95d5")),r=i("f8d9"),s={name:"exccAuthorization",mixins:[r["a"]],components:{},data:function(){return{isLoading:!0,aliasname:"",sex:"",uinfin:"",name:"",nationality:"",residentialstatus:"",dob:"",birthcountry:"",regadd:"",mobileno:"",mailadd:"",income:"0",code:"",active:"",qtTExt:""}},watch:{mobileno:function(t){this.mobileno=Object(o["h"])(t,0)},authRealname:function(t){null!==t&&("success"===t.text?(this.$bus.$emit("tip",{text:t.msg,type:"success"}),this.active="1"):(this.$bus.$emit("tip",{text:t.msg,type:"error"}),this.$store.dispatch("resetType")))},dob:function(t){t&&this.ageLimit&&!this.validateAge()&&this.$bus.$emit("tip",{text:"您需要年满".concat(this.ageLimit,"岁才能在平台认证"),type:"error"})}},computed:{exccKycConfig:function(){return this.$store.state.personal.exccKycConfig},ageLimit:function(){return this.exccKycConfig?Number(this.exccKycConfig.data.ageLimit):0},authRealname:function(){return this.$store.state.personal.authRealname},userInfo:function(){return this.$store.state.baseData.userInfo},authLevel:function(){return this.userInfo?this.userInfo.authLevel:""},disabled:function(){return!(!this.dob||this.validateAge())||("6"===this.income&&!this.qtTExt||!(this.mobileno&&this.mailadd))},incomeList:function(){return[{code:"0",value:this.$t("personal.exccAuthorization.income1")},{code:"1",value:this.$t("personal.exccAuthorization.income2")},{code:"2",value:this.$t("personal.exccAuthorization.income3")},{code:"3",value:this.$t("personal.exccAuthorization.income4")},{code:"4",value:this.$t("personal.exccAuthorization.income5")},{code:"5",value:this.$t("personal.exccAuthorization.income6")},{code:"6",value:this.$t("personal.exccAuthorization.income7")}]}},methods:{init:function(){this.code=this.$route.query.code,this.code&&this.getData(),this.exccKycConfig||this.$store.dispatch("exccKycConfig")},getData:function(){var t=this;this.axios({url:"/kyc/singPass/getInfo",method:"post",header:{},params:{code:this.code}}).then((function(e){t.isLoading=!1,"0"===e.code?e.data&&(t.aliasname=e.data.aliasname,t.sex=e.data.sex,t.uinfin=e.data.uinfin,t.name=e.data.name,t.nationality=e.data.nationality,t.residentialstatus=e.data.residentialstatus,t.dob=e.data.dob,t.birthcountry=e.data.birthcountry,t.regadd=e.data.regadd,t.mobileno=e.data.mobileno,t.mailadd=e.data.mailadd,t.qtTExt=e.data.otherIncomeDesc,t.income="0"):t.$bus.$emit("tip",{text:e.msg,type:"error"})})).catch((function(){}))},inputChanges:function(t,e){this[e]=t.trim()},incomeChange:function(t){this.income=t.code},submitData:function(){var t={mobileno:this.mobileno,mailadd:this.mailadd,income:this.income,otherIncomeDesc:this.qtTExt};this.$store.dispatch("singPassVerifyAuth",t)},validateAge:function(){if(!this.ageLimit)return!0;var t=this.dob.split("-"),e=new Date(t[0],t[1],t[2]),i=new Date,n=i.getFullYear(),a=i.getMonth()+1,o=i.getDate();i=new Date(n,a,o);for(var r=i.getTime()-e.getTime(),s=0,c=0;c<=this.ageLimit;c+=1)(c%4===0&&c%100!==0||c%400===0)&&(s+=1);var u=this.ageLimit-s,d=31536e6*u+316224e5*s;return r>=d}}},c=(i("6ced"),{mixins:[s],created:function(){this.init()}}),u=c,d=i("2877"),l=Object(d["a"])(u,n,a,!1,null,null,null);e["default"]=l.exports},"6ced":function(t,e,i){},f8d9:function(t,e,i){"use strict";i("8335"),i("07be"),i("79cb");var n=i("95d5");e["a"]={data:function(){return{countryKeyCode:"",country:""}},watch:{countryObj:{handler:function(){var t=this.defaultCountryCode;t&&""===this.countryKeyCode&&(this.countryKeyCode=t),!this.defaultCountryCodeReal&&!this.country&&t&&this.countryMap&&this.countryMap[t]&&(this.country=this.countryMap[t].code),this.defaultCountryCodeReal&&""===this.country&&(this.country=this.defaultCountryCodeReal)}},defaultCountryCodeReal:{handler:function(t){t&&""===this.country&&(this.country=t)},immediate:!0},defaultCountryCode:{handler:function(t){t&&""===this.countryKeyCode&&(this.defaultCountryCodeReal?this.countryKeyCode=this.countryListKeyObj[this.defaultCountryCodeReal].keyCode:this.countryKeyCode=t),!this.defaultCountryCodeReal&&!this.country&&t&&this.countryMap&&this.countryMap[t]&&(this.country=this.countryMap[t].code)},immediate:!0}},computed:{countryListKeyObj:function(){var t={};return this.countryObj.list.forEach((function(e){t[e.code]={code:e.code,keyCode:e.keyCode,value:e.value.split(" ")[0]}})),t},countryList:function(){return this.countryObj.list},registerCountryList:function(){var t=this.filterCountryList(this.$t("phoneCode"));return Object(n["o"])(t).list},countryListMoy:function(){var t=[];return this.countryObj.list.forEach((function(e){t.push({code:e.code,keyCode:e.keyCode,value:e.value.split(" +")[0]})})),t},countryMap:function(){return this.countryObj.countryMap},countryRealMap:function(){return this.countryObj.countryRealMap},countryObj:function(){return this.$store.state.baseData.countryObj},defaultCountryCode:function(){return this.$store.state.baseData.defaultCountryCode},defaultCountryCodeReal:function(){return this.$store.state.baseData.defaultCountryCodeReal},limitCountryList:function(){return this.$store.state.baseData.limitCountryList}},methods:{countryChange:function(t){this.country=t.code,this.countryKeyCode=t.keyCode},filterCountryList:function(t){var e=t,i=this.limitCountryList;return i.length>0&&(i=i.join("").split("+"),Object.keys(e).forEach((function(t){e[t]=e[t].filter((function(t){var e=t.split("+");return-1===i.indexOf(e[2])}))}))),e}}}}}]);