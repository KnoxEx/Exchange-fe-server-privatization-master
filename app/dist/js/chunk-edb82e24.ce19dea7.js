(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-edb82e24"],{"5db0":function(e,t,a){},a810:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.modifyApiShow?a("ModifyApi",{attrs:{getApiList:e.getApiList}}):e._e(),e.modifyApiShow?e._e():a("div",{staticClass:"api-management a-5-bg"},[a("div",{staticClass:"api-management-header a-3-bd clearfix"},[a("c-navTab",{attrs:{activeClassName:"b-1-cl",activeColor:"a-12-bg",className:"b-2-cl",currentTab:e.currentTab,navTab:e.navTab,lineHeight:e.lineHeight,marginRight:e.marginRight},on:{currentType:e.currentType}})],1),a("div",{staticClass:"api-management-center"},[a("div",{directives:[{name:"show",rawName:"v-show",value:1===e.currentTab,expression:"currentTab === 1"}],staticClass:"center1 clearfix"},[a("img",{staticClass:"center1-img",attrs:{src:e.api}}),a("div",{staticClass:"center1-header"},[a("p",{staticClass:"center1-title b-7-cl"},[a("svg",{staticClass:"icon icon-16",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-c_2"}})]),a("span",{staticClass:"clearfix"},[e._v(e._s(e.$t("personal.prompt.warningApi")))])])]),a("div",{staticClass:"center1-inputs clearfix"},[a("div",{staticClass:"center1-input clearfix"},[a("c-inputLine",{attrs:{name:"ip",inputType:"text",promptText:e.promptText1,errorHave:!0,errorText:e.errorText1,errorFlag:e.checkErrorFlag1,marginTop:"0px",value:e.checkValue1},on:{onchanges:e.inputChanges}})],1),a("div",{staticClass:"center1-input clearfix"},[a("c-inputLine",{attrs:{name:"note",maxLength:"25",inputType:"text",promptText:e.promptText2,errorHave:!0,errorText:e.errorText2,errorFlag:e.checkErrorFlag2,marginTop:"0px",value:e.checkValue2},on:{onchanges:e.inputChanges}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:e.smsCode,expression:"smsCode"}],staticClass:"center1-input clearfix"},[a("c-inputLine",{attrs:{maxLength:"6",name:"phoneCode",inputType:"text",promptText:e.promptText3,errorHave:!0,errorText:e.errorText3,errorFlag:e.checkErrorFlag3,marginTop:"0px",value:e.checkValue3},on:{onchanges:e.inputChanges}},[a("c-getCode",{attrs:{name:"phone",autoStart:e.autoStart,buttonName:"loginGetcodeBtn"},on:{click:e.getCodeClick}})],1)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:e.googleCode,expression:"googleCode"}],staticClass:"center1-input clearfix"},[a("c-inputLine",{attrs:{name:"googleCode",maxLength:"6",inputType:"text",promptText:e.promptText4,errorHave:!0,errorText:e.errorText4,errorFlag:e.checkErrorFlag4,marginTop:"0px",value:e.checkValue4},on:{onchanges:e.inputChanges}})],1),a("div",{staticClass:"center1-button clearfix"},[a("c-button",{attrs:{type:"solid",big:!0,className:"",loading:e.loading2,paddingW:"0px",disabled:e.disabled,marginTop:"18px",height:"40px",width:"25%"},on:{click:e.btnLink}},[e._v(e._s(e.$t("personal.tool.create")))])],1)]),a("div",{staticClass:"center1-table clearfix a-7-bd"},[a("p",{staticClass:"center1-title2 a-3-bd b-1-cl"},[e._v(e._s(e.$t("personal.APImanagement.recordTitle")))]),a("c-table",{attrs:{imgMap:e.imgMap,colorMap:e.colorMap,loading:e.loading,classes:e.classes,headClasses:e.headClasses,bodyClasses:e.bodyClasses,lineClasses:e.lineClass,columns:e.columns,dataList:e.apiList,lineNumber:e.lineNumber,cellHeight:e.cellHeight,headHeight:e.headHeight},on:{elementClick:e.deleteData}}),a("c-pagination",{directives:[{name:"show",rawName:"v-show",value:0!==e.count,expression:"count !== 0"}],attrs:{total:e.count,"current-page":e.page,display:e.pageSize},on:{pagechange:e.pagechange}})],1)]),a("div",{directives:[{name:"show",rawName:"v-show",value:2===e.currentTab,expression:"currentTab === 2"}],staticClass:"center2 clearfix"},[a("a",{staticClass:"api-down a-12-bd b-2-cl",attrs:{href:"https://github.com/exchange-doc/api/blob/master/api/zh_cn/api_doc_cn.md",target:"_blank"},on:{mouseenter:e.handMouseenter,mouseleave:e.handMouseleave}},[e._v(e._s(e.$t("personal.APImanagement.downloadDocumen")))]),a("c-table",{attrs:{imgMap:e.imgMap,colorMap:e.colorMap,classes:e.classes,headClasses:e.headClasses,bodyClasses:e.bodyClasses,lineClasses:e.lineClass,columns:e.columns2,dataList:e.apiList2,lineNumber:e.lineNumber,cellHeight:e.cellHeight,headHeight:e.headHeight},on:{elementClick:e.deleteData}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:3===e.currentTab,expression:"currentTab === 3"}],staticClass:"center3 clearfix"},[a("a",{staticClass:"api-down a-12-bd b-2-cl",attrs:{href:"https://github.com/exchange-doc/api/blob/master/api/zh_cn/api_doc_cn.md",target:"_blank"},on:{mouseenter:e.handMouseenter,mouseleave:e.handMouseleave}},[e._v(e._s(e.$t("personal.APImanagement.downloadDocumen")))]),a("c-table",{attrs:{imgMap:e.imgMap,colorMap:e.colorMap,classes:e.classes,headClasses:e.headClasses,bodyClasses:e.bodyClasses,lineClasses:e.lineClass,columns:e.columns2,dataList:e.apiList3,lineNumber:e.lineNumber,cellHeight:e.cellHeight,headHeight:e.headHeight},on:{elementClick:e.deleteData}})],1)]),a("c-dialog",{attrs:{showFlag:e.dialogFlag,paddingBottom:"14px",confirmLoading:e.dialogConfirmLoading,confirmDisabled:e.dialogConfirmDisabled,titleText:e.titleText},on:{close:e.dialogClose,confirm:e.dialogConfirm}},[a("div",{staticClass:"dialog-div a-4-bg"},[a("ul",[a("li",{staticClass:"a-5-bd"},[a("p",{staticClass:"b-2-cl"},[e._v(e._s(e.$t("personal.APImanagement.secretKey")))]),a("p",{staticClass:"b-2-cl"},[e._v(e._s(e.secretKey)+"\n              "),a("span",{on:{click:function(t){return e.copyClick("secretKey")},mouseenter:function(t){return e.handMouseenters("secretKey")},mouseleave:function(t){return e.handMouseleaves("secretKey")}}},[e._v(">\n              "),e.secretKeyShow?a("span",[a("svg",{staticClass:"icon icon-14",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-a_9"}})])]):a("span",[a("svg",{staticClass:"icon icon-14",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-a_9_1"}})])])])])]),a("li",{staticClass:"a-5-bd"},[a("p",{staticClass:"b-2-cl"},[e._v(e._s(e.$t("personal.APImanagement.APIKye")))]),a("p",{staticClass:"b-2-cl"},[e._v(e._s(e.apiKey)+"\n              "),a("span",{on:{click:function(t){return e.copyClick("apiKey")},mouseenter:function(t){return e.handMouseenters("apiKey")},mouseleave:function(t){return e.handMouseleaves("apiKey")}}},[e.apiKeyShow?a("span",[a("svg",{staticClass:"icon icon-14",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-a_9"}})])]):a("span",[a("svg",{staticClass:"icon icon-14",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-a_9_1"}})])])])])]),a("li",{staticClass:"b-4-bd"},[a("p",{staticClass:"b-2-cl"},[e._v(e._s(e.$t("personal.APImanagement.ip")))]),a("p",{staticClass:"b-2-cl"},[e._v(e._s(e.checkValue1))])])])])]),a("c-alert",{attrs:{showFlag:e.alertFlag,buttonText:e.$t("assets.addressMent.GotoOpen"),imgMap:e.imgMap},on:{close:e.alertClose,confirm:e.alertGo}},[a("div",{staticClass:"alertTitle b-2-cl"},[e._v(e._s(e.$t("personal.alert.title")))]),a("div",{staticClass:"alertText"},[e._v(e._s(e.$t("personal.alert.text")))]),a("div",{staticClass:"alertError a-2-bd"},[a("span",{staticClass:"alertError-text b-4-cl"},[e._v(e._s(e.$t("personal.alert.alertErrorTextGoogle")))]),a("span",{staticClass:"alertError-icon"},[e._v("+")])]),a("div",{staticClass:"alertError alertBot a-2-bd"},[a("span",{staticClass:"alertError-text b-4-cl"},[e._v(e._s(e.$t("personal.alert.alertErrorTextPhone")))]),a("span",{staticClass:"alertError-icon"},[e._v("+")])])])],1)],1)},i=[],r=(a("79cb"),a("07be"),a("b44b"),a("e0de"),a("86c3"),a("8e91"),a("95d5")),n={name:"apiManagement",watch:{userInfo:function(e){null!==e&&(this.googleCode=!!Number(e.googleStatus),this.smsCode=!!Number(e.isOpenMobileCheck))},sendSmsCode:function(e){null!==e&&("success"===e.text?(this.$bus.$emit("tip",{text:e.msg,type:"success"}),this.$store.dispatch("resetType")):(this.$bus.$emit("getCode-clear","phone"),this.$bus.$emit("tip",{text:e.msg,type:"error"}),this.$store.dispatch("resetType")))},createOpenApi:function(e){if(null!==e)if(this.loading2=!1,"success"===e.text){this.$bus.$emit("tip",{text:e.msg,type:"success"}),this.$store.dispatch("resetType"),this.dialogConfirm();var t={page:this.page,pageSize:this.pageSize};this.$store.dispatch("myApiList",t)}else this.$bus.$emit("tip",{text:e.msg,type:"error"}),this.$store.dispatch("resetType")},myApiList:function(e){null!==e&&(this.loading=!1,this.processData(e.apiList),e.count>10?this.count=e.count:0===e.count&&(this.apiList=[]))},deleteOpenApi:function(e){if(null!==e)if(this.delete=!0,"success"===e.text){this.$bus.$emit("tip",{text:e.msg,type:"success"}),this.$store.dispatch("resetType");var t={page:this.page,pageSize:this.pageSize};this.$store.dispatch("myApiList",t)}else this.$bus.$emit("tip",{text:e.msg,type:"error"}),this.$store.dispatch("resetType")}},computed:{modifyApiShow:function(){return this.$store.state.personal.modifyApiShow},userInfo:function(){return this.$store.state.baseData.userInfo},sendSmsCode:function(){return this.$store.state.personal.sendSmsCode},createOpenApi:function(){return this.$store.state.personal.createOpenApi},myApiList:function(){return this.$store.state.personal.myApiList},deleteOpenApi:function(){return this.$store.state.personal.deleteOpenApi},api:function(){return r["u"].api},apiUrl:function(){var e={2:"",3:""};try{var t=this.$store.state.baseData.publicInfo.url.exUrl,a=t.match(/(.+)\/\/(.+)?\/?/i),s=a[1],i=a[2];e[2]="(".concat(s.indexOf("s")>-1?"wss":"ws","://").concat(i.replace(i.substring(0,i.indexOf(".")),"ws"),")"),e[3]="(".concat(s,"//").concat(i.replace(i.substring(0,i.indexOf(".")),"openapi"),")")}catch(r){}return e}},data:function(){return{titleText:this.$t("personal.APImanagement.titleText"),loading:!0,loading2:!1,imgMap:r["u"],colorMap:r["c"],alertFlag:!1,columns:[{title:this.$t("personal.APImanagement.columns")[0],align:"left",width:"200px",classes:""},{title:this.$t("personal.APImanagement.columns")[1],align:"left",width:"200px"},{title:this.$t("personal.APImanagement.columns")[2],align:"right",width:""},{title:this.$t("personal.APImanagement.columns")[3],align:"right",width:""},{title:this.$t("personal.APImanagement.columns")[4],align:"right",width:""}],columns2:[{title:"".concat(this.$t("personal.APImanagement.columnsApi")[0]," 111111"),align:"left",width:"470px",classes:""},{title:this.$t("personal.APImanagement.columnsApi")[1],align:"left",width:"470px"}],apiList:[],apiList2:[{data:["/open/api/get_records",this.$t("personal.APImanagement.apiList")[0]]},{data:["/open/api/get_ticker",this.$t("personal.APImanagement.apiList")[1]]},{data:["/open/api/get_trades",this.$t("personal.APImanagement.apiList")[2]]},{data:["/open/api/market_dept",this.$t("personal.APImanagement.apiList")[3]]}],apiList3:[{data:["/open/api/all_order",this.$t("personal.APImanagement.apiList")[4]]},{data:["/open/api/all_trade",this.$t("personal.APImanagement.apiList")[5]]},{data:["/open/api/cancel_order",this.$t("personal.APImanagement.apiList")[6]]},{data:["/open/api/common/symbols",this.$t("personal.APImanagement.apiList")[7]]},{data:["/open/api/create_order",this.$t("personal.APImanagement.apiList")[8]]},{data:["/open/api/market",this.$t("personal.APImanagement.apiList")[9]]},{data:["/open/api/new_order",this.$t("personal.APImanagement.apiList")[10]]},{data:["/open/api/order_info",this.$t("personal.APImanagement.apiList")[11]]},{data:["/open/api/user/account",this.$t("personal.APImanagement.apiList")[12]]}],cellHeight:55,headHeight:30,lineNumber:10,classes:"",headClasses:"",bodyClasses:"",lineClass:"",count:0,page:1,pageSize:10,secretKey:"",apiKey:"",dialogFlag:!1,dialogConfirmLoading:!1,dialogConfirmDisabled:!1,promptText1:this.$t("personal.APImanagement.ip"),errorText1:this.$t("personal.prompt.ipCode"),checkErrorFlag1:!1,checkValue1:"",promptText2:this.$t("personal.APImanagement.note"),errorText2:this.$t("personal.prompt.noteCode"),checkErrorFlag2:!1,checkValue2:"",promptText3:this.$t("personal.label.smsCodeText"),errorText3:this.$t("personal.prompt.errorCode"),checkErrorFlag3:!1,checkValue3:"",promptText4:this.$t("personal.label.googleCodeText"),errorText4:this.$t("personal.prompt.errorCode"),checkErrorFlag4:!1,checkValue4:"",autoStart:!1,disabled:!0,currentTab:1,navTab:[{name:this.$t("personal.APImanagement.navTab")[0],index:1},{name:this.$t("personal.APImanagement.navTab")[1],index:2},{name:this.$t("personal.APImanagement.navTab")[2],index:3}],lineHeight:"55",marginRight:48,smsCode:!1,googleCode:!1,delete:!0,secretKeyShow:!0,apiKeyShow:!0}},methods:{init:function(){var e=this.$store.state.baseData.userInfo;null!==e&&(this.googleCode=!!Number(e.googleStatus),this.smsCode=!!Number(e.isOpenMobileCheck),this.smsCode||this.googleCode?this.alertFlag=!1:this.alertFlag=!0),this.getApiList()},getApiList:function(){var e={page:this.page,pageSize:this.pageSize};this.$store.dispatch("myApiList",e)},handMouseenters:function(e){"secretKey"===e?this.secretKeyShow=!1:this.apiKeyShow=!1},handMouseleaves:function(e){"secretKey"===e?this.secretKeyShow=!0:this.apiKeyShow=!0},handMouseenter:function(e){e.target.classList.add("b-4-cl"),e.target.classList.remove("b-2-cl")},handMouseleave:function(e){e.target.classList.add("b-2-cl"),e.target.classList.remove("b-4-cl")},alertClose:function(){this.$router.push("/personal/UserManagement")},alertGo:function(){this.$router.push("/personal/UserManagement")},codeFlag:function(e){return this.$store.state.regExp.verification.test(e)},ipFlag:function(e){return new RegExp(this.$store.state.regExp.ip,"g").test(e)},numbers:function(e){return this.$store.state.regExp.numbers.test(e)},pagechange:function(e){this.page=e;var t={page:e,pageSize:this.pageSize};this.$store.dispatch("myApiList",t)},processData:function(e){var t=this;null!==e&&(this.apiList=e.map((function(e){return{id:{token:e.token,ip:e.believeIps,label:e.label},data:[e.label,e.believeIps,e.token,[{type:"button",text:t.$t("personal.tool.view"),iconClass:[""],eventType:"check",classes:[""]}],[{type:"button",text:t.$t("personal.tool.modify"),iconClass:[""],eventType:"modify",classes:[""]},{type:"button",text:t.$t("personal.tool.delete"),iconClass:[""],eventType:"delete",classes:[""]}]]}})))},deleteData:function(e,t){switch(e){case"delete":this.delete&&(this.$store.dispatch("deleteOpenApi",{token:t.token}),this.delete=!1);break;case"check":this.$store.dispatch("setApiToken",t.token),this.$router.push("/personal/checkApi");break;case"modify":this.$store.dispatch("setApiToken",t.token),this.$store.dispatch("setIp",t.ip),this.$store.dispatch("setLabel",t.label),this.$store.dispatch("setModifyApiShow",!0);break;default:}},copyClick:function(e){"apiKey"===e?this.copy(this.apiKey):this.copy(this.secretKey)},copy:function(e){function t(t){t.clipboardData.setData("text/plain",e),t.preventDefault()}document.addEventListener("copy",t),document.execCommand("copy"),document.removeEventListener("copy",t)},dialogClose:function(){this.dialogConfirmFlag=!1,this.dialogFlag=!1,this.checkValue=this.oldName,this.checkValue1="",this.checkValue2="",this.checkValue3="",this.checkValue4="",this.disabled=!0,this.$bus.$emit("getCode-clear","phone")},dialogConfirm:function(){this.dialogConfirmFlag=!1,this.dialogFlag=!1,this.checkValue=this.oldName,this.checkValue1="",this.checkValue2="",this.checkValue3="",this.checkValue4="",this.disabled=!0,this.$bus.$emit("getCode-clear","phone")},currentType:function(e){this.columns2=[{title:"".concat(this.$t("personal.APImanagement.columnsApi")[0]," ").concat(this.apiUrl[e.index]),align:"left",width:"470px",classes:""},{title:this.$t("personal.APImanagement.columnsApi")[1],align:"left",width:"470px"}],this.currentTab=e.index},dealIp:function(e){var t=this,a=!0;if(-1!==e.indexOf(","))if(","===e.charAt(e.length-1)){var s=e.substring(0,e.length-1).split(","),i=s.length;i<=5?s.forEach((function(e){a=!!t.ipFlag(e)})):a=!1}else{var r=e.split(","),n=r.length;n<=5?r.forEach((function(e){a=!!t.ipFlag(e)})):a=!1}else a=this.ipFlag(e);return a},inputChanges:function(e,t){switch(t){case"ip":this.checkValue1=e,e?this.dealIp(e)?this.checkErrorFlag1=!1:this.checkErrorFlag1=!0:this.checkErrorFlag1=!1;break;case"note":this.checkValue2=e,this.checkValue2?this.checkErrorFlag2=!1:this.checkErrorFlag2=!0;break;case"phoneCode":this.checkValue3=e,this.codeFlag(e)?this.checkErrorFlag3=!1:this.checkErrorFlag3=!0;break;default:this.checkValue4=e,this.codeFlag(e)?this.checkErrorFlag4=!1:this.checkErrorFlag4=!0}!this.checkValue2||this.checkErrorFlag3||this.checkErrorFlag4||this.checkErrorFlag1||this.checkErrorFlag2?this.disabled=!0:(this.smsCode&&(this.disabled=!this.checkValue3),this.googleCode&&(this.disabled=!this.checkValue4),this.smsCode&&this.googleCode&&(this.disabled=!(this.checkValue3&&this.checkValue4)))},getCodeClick:function(){this.$bus.$emit("getCode-start","phone");var e={operationType:16};this.$store.dispatch("sendSmsCode",e)},btnLink:function(){this.loading2=!0;var e={believeIps:this.checkValue1,label:this.checkValue2,smsValidCode:this.checkValue3,googleCode:this.checkValue4};this.$store.dispatch("createOpenApi",e)}}},o=(a("b728"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"modify-api a-5-bg"},[a("p",{staticClass:"modify-api-header b-2-cl a-3-bd"},[e._v(e._s(e.$t("personal.modifyApi.title")))]),a("div",{directives:[{name:"show",rawName:"v-show",value:1===e.divShow,expression:"divShow === 1"}],staticClass:"center-inputs"},[a("c-inputLine",{attrs:{name:"ip",inputType:"text",promptText:e.promptText1,errorHave:!0,errorText:e.errorText1,errorFlag:e.checkErrorFlag1,marginTop:"0px",value:e.checkValue1},on:{onchanges:e.inputChanges}}),a("c-inputLine",{attrs:{name:"note",inputType:"text",promptText:e.promptText2,errorHave:!0,errorText:e.errorText2,errorFlag:e.checkErrorFlag2,marginTop:"0px",value:e.checkValue2},on:{onchanges:e.inputChanges}}),a("c-inputLine",{directives:[{name:"show",rawName:"v-show",value:e.smsCode,expression:"smsCode"}],attrs:{maxLength:"6",name:"phoneCode",inputType:"text",promptText:e.promptText3,errorHave:!0,errorText:e.errorText3,errorFlag:e.checkErrorFlag3,marginTop:"0px",value:e.checkValue3},on:{onchanges:e.inputChanges}},[a("c-getCode",{attrs:{name:"phone",autoStart:!1,buttonName:"loginGetcodeBtn"},on:{click:e.getCodeClick}})],1),a("c-inputLine",{directives:[{name:"show",rawName:"v-show",value:e.googleCode,expression:"googleCode"}],attrs:{name:"googleCode",maxLength:"6",inputType:"text",promptText:e.promptText4,errorHave:!0,errorText:e.errorText4,errorFlag:e.checkErrorFlag4,marginTop:"0px",value:e.checkValue4},on:{onchanges:e.inputChanges}}),a("c-button",{attrs:{type:"solid",big:!0,loading:e.loading,className:"",paddingW:"0px",disabled:e.disabled,marginTop:"18px",height:"40px",width:"100%"},on:{click:e.btnLink}},[e._v(e._s(e.$t("personal.tool.confirm")))])],1)])}),l=[],c={name:"checkApi",props:{getApiList:{default:function(){return[]},type:Function}},watch:{sendSmsCode:function(e){null!==e&&("success"===e.text?(this.$bus.$emit("tip",{text:e.msg,type:"success"}),this.$store.dispatch("resetType")):(this.$bus.$emit("tip",{text:e.msg,type:"error"}),this.$store.dispatch("resetType")))},updateOpenApi:function(e){null!==e&&(this.loading=!1,"success"===e.text?(this.$bus.$emit("tip",{text:e.msg,type:"success"}),this.$store.dispatch("resetType"),this.$store.dispatch("setModifyApiShow",!1),this.getApiList()):(this.$bus.$emit("tip",{text:e.msg,type:"error"}),this.$store.dispatch("resetType")))}},computed:{sendSmsCode:function(){return this.$store.state.personal.sendSmsCode},updateOpenApi:function(){return this.$store.state.personal.updateOpenApi}},data:function(){return{loading:!1,divShow:1,promptText1:this.$t("personal.label.ipText"),errorText1:this.$t("personal.prompt.ipErrorText"),checkErrorFlag1:!1,checkValue1:"",promptText2:this.$t("personal.label.noteText"),errorText2:"",checkErrorFlag2:!1,checkValue2:"",promptText3:this.$t("personal.label.smsCodeText"),errorText3:this.$t("personal.prompt.errorCode"),checkErrorFlag3:!1,checkValue3:"",promptText4:this.$t("personal.label.googleCodeText"),errorText4:this.$t("personal.prompt.errorCode"),checkErrorFlag4:!1,checkValue4:"",disabled:!0,googleCode:!1,smsCode:!1}},methods:{init:function(){var e=this.$store.state.baseData.userInfo;null!==e&&(this.googleCode=!!Number(e.googleStatus),this.smsCode=!!Number(e.isOpenMobileCheck));var t=this.$store.state.personal.apiIp,a=this.$store.state.personal.apiLabel;null!==t&&(this.checkValue1=t),null!==a&&(this.checkValue2=a)},dealIp:function(e){var t=this,a=!0;if(-1!==e.indexOf(","))if(","===e.charAt(e.length-1)){var s=e.substring(0,e.length-1).split(","),i=s.length;i<=5?s.forEach((function(e){a=!!t.ipFlag(e)})):a=!1}else{var r=e.split(","),n=r.length;n<=5?r.forEach((function(e){a=!!t.ipFlag(e)})):a=!1}else a=this.ipFlag(e);return a},ipFlag:function(e){var t=!1;return t=!e||new RegExp(this.$store.state.regExp.ip,"g").test(e),t},codeFlag:function(e){return this.$store.state.regExp.verification.test(e)},getCodeClick:function(){this.$bus.$emit("getCode-start","phone");var e={operationType:16};this.$store.dispatch("sendSmsCode",e)},inputChanges:function(e,t){switch(t){case"ip":this.checkValue1=e,this.dealIp(e)?this.checkErrorFlag1=!1:this.checkErrorFlag1=!0;break;case"note":this.checkValue2=e;break;case"phoneCode":this.checkValue3=e,this.codeFlag(e)?this.checkErrorFlag3=!1:this.checkErrorFlag3=!0;break;default:this.checkValue4=e,this.codeFlag(e)?this.checkErrorFlag4=!1:this.checkErrorFlag4=!0}!this.checkValue2||this.checkErrorFlag1||this.checkErrorFlag3||this.checkErrorFlag4?this.disabled=!0:(this.smsCode&&(this.disabled=!this.checkValue3),this.googleCode&&(this.disabled=!this.checkValue4))},btnLink:function(){this.loading=!0;var e=this.$store.state.personal.apiToken,t={smsValidCode:this.checkValue3,googleCode:this.checkValue4,label:this.checkValue2,believeIps:this.checkValue1,token:e};this.$store.dispatch("updateOpenApi",t)}}},p=(a("5db0"),{mixins:[c],mounted:function(){this.init()}}),h=p,d=a("2877"),u=Object(d["a"])(h,o,l,!1,null,null,null),g=u.exports,m={mixins:[n],components:{ModifyApi:g},mounted:function(){this.init()}},b=m,C=Object(d["a"])(b,s,i,!1,null,null,null);t["default"]=C.exports},b728:function(e,t,a){}}]);