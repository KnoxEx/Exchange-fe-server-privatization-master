(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f349d99"],{"178c":function(t,a,i){},"1cbd":function(t,a,i){},"3ff2":function(t,a,i){},"7aff":function(t,a,i){"use strict";i("1cbd")},b2a0:function(t,a,i){},c48d:function(t,a,i){"use strict";i.r(a);var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"notice-info home-bg"},[i("div",{staticClass:"main-content clearfix"},[i("div",{ref:"menuBox",staticClass:"menu",style:{height:t.menuBoxHeight}},[i("div",{staticClass:"menu-tit medium f-1-cl"},[t._v(t._s(t.$t("message.noticeInfo")))]),t.openSearch?i("div",{staticClass:"search-notice-box a-2-bd"},[i("div",{staticClass:"iconfont-cont"},[i("svg",{staticClass:"icon icon-14",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-a_12"}})])]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.noticeSearchVal,expression:"noticeSearchVal"}],staticClass:"search-notice-input f-1-cl",attrs:{type:"text",placeholder:t.$t("message.search")},domProps:{value:t.noticeSearchVal},on:{input:[function(a){a.target.composing||(t.noticeSearchVal=a.target.value)},t.setNoticeSearchVal]}}),i("span",{directives:[{name:"show",rawName:"v-show",value:t.noticeSearchVal,expression:"noticeSearchVal"}],staticClass:"clones b-2-cl",on:{click:t.clearSearchVal}},[t._v("x")])]):t._e(),i("ul",{ref:"menuBar",staticClass:"f-2-cl"},t._l(t.sideList,(function(a,e){return i("li",{key:e,staticClass:"menu-item",class:{"f-1-cl c-4-bg":t.contentId===a.id},on:{click:function(i){return t.writing(a.id)}}},[t._v("\n          "+t._s(t._f("cutTextLength")(a.title))+"\n        ")])})),0),!t.sideList.length&&t.searchLoaded?i("div",{staticClass:"empty-box"},[i("div",{staticClass:"home-nodata"},[i("svg",{staticClass:"icon icon-50",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-g_2"}})]),i("p",{staticClass:"notice-empty-text"},[t._v("\n            "+t._s(t.$t("common.notData"))+"\n          ")])])]):t._e(),t.pagination.count/t.pagination.pageSize>1?i("c-pagination",{staticClass:"no-paddleft",attrs:{total:t.pagination.count,"current-page":t.pagination.page,display:t.pagination.pageSize},on:{pagechange:t.pagechange}}):t._e()],1),i("div",{staticClass:"content-box"},[i("div",{staticClass:"content-text c-4-bg",style:{"min-height":t.contentMinHeight}},[i("h1",{staticClass:"content-title f-1-cl"},[t._v(t._s(t.notieContent.title))]),i("p",{staticClass:"time f-2-cl"},[t._v(t._s(t.notieContent.ctime))]),i("div",{staticClass:"ql-editor",domProps:{innerHTML:t._s(t.notieContent.content)}}),i("transition",{attrs:{name:"fade"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isshowLoading,expression:"isshowLoading"}],staticClass:"loading"},[i("c-loading",{attrs:{size:"50"}})],1)])],1)])])])},n=[],s=i("95d5"),o={name:"noticeInfo",data:function(){return{contentId:parseFloat(s["w"].get("ntId"))||null,sideList:[],notieContent:{},menuBarHeight:null,isshowLoading:!0,pagination:{count:0,pageSize:9,page:1},noticeSearchVal:"",cacheData:{sideList:[],pagination:[]},timer:null,searchLoaded:!1,openSearch:!1}},computed:{menuBoxHeight:function(){return this.menuBarHeight>860?"860px":"auto"},contentMinHeight:function(){return this.menuBarHeight>860?"760px":""}},filters:{cutTextLength:function(t){return t.slice(0,20)}},methods:{init:function(){this.menuBarHeight=this.$refs.menuBar.offsetHeight,this.$route.params.ntId&&(this.contentId=parseFloat(this.$route.params.ntId)),this.getListData(),this.getContentData()},clearSearchVal:function(){this.noticeSearchVal="",this.setCacheToData()},setDataToCache:function(){var t=this.sideList,a=this.pagination;this.cacheData={cache:!0,sideList:t,pagination:a},this.sideList=[],this.pagination={count:0,pageSize:10,page:1}},setCacheToData:function(){var t=this.cacheData,a=t.sideList,i=t.pagination;this.sideList=a,this.pagination=i,this.cacheData={sideList:[],pagination:[],cache:!1}},postValToSearch:function(){var t=this;this.searchLoaded=!1,this.timer&&(clearTimeout(this.timer),this.timer=null),this.timer=setTimeout((function(){""!==t.noticeSearchVal&&(t.isshowLoading=!0,t.searchNoticeToKey(t.noticeSearchVal))}),300)},searchNoticeToKey:function(){""!==this.noticeSearchVal&&this.getListData(!0)},setNoticeSearchVal:function(){this.noticeSearchVal&&(this.cacheData.cache||this.setDataToCache(),this.postValToSearch()),""===this.noticeSearchVal&&this.cacheData.cache&&this.setCacheToData()},pagechange:function(t){var a=""!==this.noticeSearchVal;this.pagination.page=t,this.getListData(a)},getListData:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=a?this.noticeSearchVal:"";this.getData({url:this.$store.state.url.notice.notice_list,params:{keyword:i,page:this.pagination.page,pageSize:this.pagination.pageSize},callback:function(i){t.isshowLoading=!1,t.searchLoaded=!0,t.openSearch=i.data.openSearch,(!a||a&&""!==t.noticeSearchVal)&&(t.sideList=i.data.noticeInfoList,t.pagination.count=i.data.count),parseFloat(t.$route.params.ntId)||(t.writing(i.data.noticeInfoList[0].id),t.$router.push("/noticeInfo/".concat(i.data.noticeInfoList[0].id)))}})},getContentData:function(){var t=this;this.getData({url:this.$store.state.url.notice.notice_info,params:{id:this.contentId},callback:function(a){t.notieContent=a.data.noticeInfo,t.notieContent.ctime=Object(s["k"])(a.data.noticeInfo.ctime)}})},writing:function(t){t!==this.contentId&&(s["w"].set("ntId",t),this.contentId=t,this.$router.push("".concat(t)),this.getContentData())},getData:function(t){var a=this;this.isshowLoading=!0;var i=t.url,e=t.params,n=t.callback;this.axios({url:i,params:e,method:"post"}).then((function(t){a.isshowLoading=!1,"0"===t.code&&n(t)}))}}},c=(i("b2a0"),i("f367"),i("3ff2"),i("178c"),{mixins:[o],mounted:function(){this.init()}}),h=c,r=(i("7aff"),i("2877")),l=Object(r["a"])(h,e,n,!1,null,null,null);a["default"]=l.exports},f367:function(t,a,i){}}]);