(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9115b270"],{"0c33":function(t,a,s){},2784:function(t,a,s){var e=s("14b1")("match");t.exports=function(t){var a=/./;try{"/./"[t](a)}catch(s){try{return a[e]=!1,!"/./"[t](a)}catch(i){}}return!0}},"2fd5":function(t,a,s){var e=s("a618"),i=s("995d");t.exports=function(t,a,s){if(e(a))throw TypeError("String#"+s+" doesn't accept regex!");return String(i(t))}},5686:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"free-staking"},[s("China")],1)},i=[],n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return t.homeData?s("div",{staticClass:"free-staking"},[s("div",{staticClass:"banner header",style:"background-image:url("+t.homeData.banner+")"},[s("div",{staticClass:"article-cont"},[t.homeData.url?s("c-button",{attrs:{width:"120px",height:"36px"},on:{click:function(a){return t.navToConfigUrl(t.homeData.url)}}},[t._v("\n        "+t._s(t.$t("freeStaking.home.notice"))+"\n      ")]):t._e()],1)]),s("div",{staticClass:"free-staking-cont"},[s("div",{staticClass:"title"},[s("div",{staticClass:"titlel f-1-cl"},[t._v(t._s(t.$t("freeStaking.home.title")))]),s("div",{staticClass:"titler",on:{click:t.navToPosHistory}},[s("svg",{staticClass:"icon icon-17",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-a_22"}})]),s("span",{staticClass:"f-4-cl"},[t._v(t._s(t.homeData.tipMine))])]),s("div",{staticClass:"clearfix"})]),s("div",{staticClass:"nav-tab c-5-bd"},[s("c-navTab",{staticClass:"c-5-bd",attrs:{minWidth:"90px",activeClassName:"f-1-cl",activeColor:"c-8-bg",currentTab:t.currentType,navTab:t.navTab,lineHeight:"55"},on:{currentType:t.selectType}}),s("div",{staticClass:"clearfix"})],1),s("div",{staticClass:"min-tab"},[t._l(t.statusTab,(function(a){return s("div",{key:a.index,staticClass:"min-tab-item",class:t.currentStyle(a),on:{click:function(s){return t.changeCurrentStatus(a)}}},[t._v("\n        "+t._s(a.name)+"\n      ")])})),s("div",{staticClass:"clearfix"})],2),t.filterProjectData.length?s("div",{staticClass:"project-list"},t._l(t.filterProjectData,(function(a){return s("div",{key:a.index,staticClass:"project-item c-4-bg"},[s("div",{staticClass:"project-iteml"},[s("img",{staticClass:"logo",attrs:{src:a.logo,alt:""}}),s("div",{staticClass:"coin-base-info c-5-bd"},[s("div",{staticClass:"base-coin f-1-cl"},[t._v("\n              "+t._s(a.shortName)+"\n              "),s("div",{staticClass:"label-cont"},[t.showLabel(a,2)?s("div",{staticClass:"label-type"},[t._v("\n                  "+t._s(t.projectLabel(a.labelType))+"\n                ")]):t._e(),t.showLabel(a,1)?s("div",{staticClass:"label-type hot f-6-cl"},[t._v("\n                  "+t._s(t.projectLabel(a.labelType))+"\n                ")]):t._e()])]),s("div",{staticClass:"short-name f-2-cl"},[t._v(t._s(a.baseCoin))])]),s("div",{staticClass:"clearfix"})]),s("div",{staticClass:"project-itemc clearfix"},[s("div",{staticClass:"project-title f-1-cl"},[t._v(t._s(a.name))]),s("div",{staticClass:"label"},[s("div",{staticClass:"label-title f-4-cl"},[t._v(t._s(a.gainRate)+"%")]),s("div",{staticClass:"label-value"},[t._v("\n              "+t._s(t.$t("freeStaking.home.gainRate"))+"\n            ")])]),3===a.projectType?s("div",{staticClass:"label"},[s("div",{staticClass:"label-title f-1-cl"},[t._v(t._s(a.lockDay))]),s("div",{staticClass:"label-value"},[t._v("\n              "+t._s(t.$t("freeStaking.home.lockDay"))+"\n            ")])]):t._e(),3===a.projectType?s("div",{staticClass:"label"},[s("div",{staticClass:"label-title f-1-cl"},[t._v(t._s(a.progress))]),s("div",{staticClass:"label-value"},[t._v("\n              "+t._s(t.$t("freeStaking.home.lockProgress"))+"\n            ")])]):t._e()]),s("div",{staticClass:"project-itemr"},[s("div",{staticClass:"project-status"},[s("svg",{staticClass:"icon icon-18",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":t.iconStyle[Number(a.status)]}})]),s("span",{staticClass:"status-text",class:t.countStatusIsOn(a)},[t._v(t._s(t.countStatusText(a)))])]),s("div",{staticClass:"nav-active"},[s("c-button",{attrs:{defaultColorClass:"f-4-bd f-2-cl",type:"hollow",width:"120px",height:"40px"},on:{click:function(s){return t.takeActivityDetail(a)}}},[s("div",{staticClass:"nav-active-text"},[t._v("\n                "+t._s(t.$t("freeStaking.home.takeActivity"))+"\n              ")])])],1),s("div",{staticClass:"clearfix"})]),s("div",{staticClass:"clearfix"})])})),0):s("div",{staticClass:"no-data f-2-cl"},[s("svg",{staticClass:"icon icon-50",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-g_2"}})]),s("p",[t._v("\n        "+t._s(t.$t("common.notData"))+"\n      ")])])]),s("div",{staticClass:"banner footer"},[s("div",{staticClass:"banner-cont clearfix"},[s("img",{staticClass:"banner-logo",attrs:{src:t.homeData.footBanner}}),s("div",{staticClass:"rich-cont"},[s("div",{staticClass:"rich-title"},[t._v(t._s(t.homeData.footTitle))]),s("div",{staticClass:"rich-text",domProps:{innerHTML:t._s(t.homeData.detail)}}),s("div",{staticClass:"rich-line"}),t.homeData.faqUrl?s("div",{staticClass:"rich-faq"},[s("a",{attrs:{href:t.homeData.faqUrl,target:"_blank"}},[t._v(t._s(t.$t("freeStaking.home.FQA")))])]):t._e(),t.homeData.contact?s("div",{staticClass:"rich-eamil"},[t._v("\n          "+t._s(t.$t("freeStaking.home.contactUS"))+t._s(t.homeData.contact)+"\n        ")]):t._e(),s("div",{staticClass:"clearfix"})])])])]):t._e()},c=[],r=(s("e0de"),s("1fff"),s("5b48"),s("95d5")),o={data:function(){return{currentType:"all",currentStatus:0,projectList:[],homeData:null,imgMap:r["u"],colorMap:r["c"],iconStyle:{0:"#icon-a_20",1:"#icon-a_21",2:"#icon-a_21",3:"#icon-a_21",4:"#icon-a_19",5:"#icon-a_19",6:"#icon-a_21"}}},computed:{isLogin:function(){return this.$store.state.baseData.isLogin},filterProjectData:function(){var t=this;return this.projectList.filter((function(a){var s={0:{},1:{lockPos:[0],unLockPos:[1]},2:{lockPos:[1],unLockPos:[2]},3:{lockPos:[2,3,4,5,6],unLockPos:[3]}},e=3===a.projectType?"lockPos":"unLockPos",i=Boolean("all"===t.currentType||a.configTypes.indexOf(t.currentType)>-1),n=Boolean(0===t.currentStatus||s[t.currentStatus][e].includes(a.status));return i&&n}))},statusTab:function(){return[{name:this.$t("innov.whole"),index:0},{name:this.$t("freeStaking.home.status[0]"),index:1},{name:this.$t("innov.status2"),index:2},{name:this.$t("freeStaking.home.status[7]"),index:3}]},navTab:function(){if(!this.homeData)return[];var t=this.homeData.typeConfig.map((function(t){return{name:t.typeName,index:t.typeSn}}));return[{name:this.$t("innov.whole"),index:"all"}].concat(t)}},methods:{init:function(){this.getHomeData(),this.getProjectList()},countStatusIsOn:function(t){var a=1===t.status&&3===t.projectType,s=2===t.status&&3!==t.projectType;return a||s?"f-4-cl":"f-2-cl"},countStatusText:function(t){return 3===t.projectType?this.statusText(t.status):this.unLockStatusText(t.status)},statusText:function(t){var a={0:this.$t("freeStaking.home.status[0]"),1:this.$t("freeStaking.home.status[1]"),2:this.$t("freeStaking.home.status[2]"),3:this.$t("freeStaking.home.status[3]"),4:this.$t("freeStaking.home.status[4]"),5:this.$t("freeStaking.home.status[5]"),6:this.$t("freeStaking.home.status[6]")};return a[t]},unLockStatusText:function(t){var a={1:this.$t("freeStaking.home.status[0]"),2:this.$t("innov.status2"),3:this.$t("freeStaking.home.status[7]")};return a[t]},projectLabel:function(t){var a={0:"",1:"HOT",2:"NEW"};return a[t]},navToPosHistory:function(){this.$router.push("/myPos")},getHomeData:function(){var t=this;this.axios({url:this.$store.state.url.freeStaking.index,headers:{},params:{},method:"post"}).then((function(a){if("0"===a.code){var s=a.data;s.detail=s.detail.replace(/\n/g,"<br/>"),t.homeData=s}}))},getProjectList:function(){var t=this;this.axios({url:this.$store.state.url.freeStaking.project_list,headers:{},params:{},method:"post"}).then((function(a){"0"===a.code&&(t.projectList=a.data)}))},selectType:function(t){this.currentType=t.index},changeCurrentStatus:function(t){this.currentStatus=t.index},currentStyle:function(t){return t.index===this.currentStatus?["f-1-cl","c-5-bg"]:["f-2-cl"]},takeActivityDetail:function(t){this.$router.push("/freeStaking/".concat(t.id))},navToConfigUrl:function(t){window.location.href=t},showLabel:function(t,a){return t.labelType===a&&(1===t.status||0===t.status)}}},l=(s("0c33"),{mixins:[o],mounted:function(){this.init()}}),u=l,h=s("2877"),f=Object(h["a"])(u,n,c,!1,null,null,null),v=f.exports,d={components:{China:v}},m=d,p=Object(h["a"])(m,e,i,!1,null,"6810c752",null);a["default"]=p.exports},"5b48":function(t,a,s){"use strict";var e=s("1cfe"),i=s("2fd5"),n="includes";e(e.P+e.F*s("2784")(n),"String",{includes:function(t){return!!~i(this,t,n).indexOf(t,arguments.length>1?arguments[1]:void 0)}})}}]);