(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-31f7ffec"],{"11e1":function(t,a,s){var e=s("1cfe");e(e.P,"Array",{fill:s("8907")}),s("a81f")("fill")},8907:function(t,a,s){"use strict";var e=s("4d1f"),i=s("98b2"),n=s("3347");t.exports=function(t){var a=e(this),s=n(a.length),r=arguments.length,o=i(r>1?arguments[1]:void 0,s),c=r>2?arguments[2]:void 0,l=void 0===c?s:i(c,s);while(l>o)a[o++]=t;return a}},c861:function(t,a,s){},eb9f:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"page-otcAccount"},[s("div",{staticClass:"otcAccount-header-bg"},[s("div",{staticClass:"otcAccount-header",style:t.otcHeader},[s("div",{staticClass:"otcAccount-header-bar"},[s("div",{staticClass:"canvasBox"},[s("canvas",{ref:"canvas",attrs:{width:"100",height:"100"}})]),s("ul",{staticClass:"assetsSum b-8-cl"},[s("li",{staticClass:"text"},[t._v(t._s(t.$t("assets.otcAccount.TotalAssets")))]),s("li",{staticClass:"num"},[t._v(t._s(t.totalBalance)),s("span",[t._v(t._s(t.totalBalanceSymbol))])]),s("li",{staticClass:"conversion"},[t._v("≈ "+t._s(t.totalRate))])]),s("ul",{staticClass:"colorList b-8-cl"},t._l(t.canvasPagesFilter,(function(a,e){return s("li",{key:e},[s("span",{style:"background: "+a.color}),t._v("\n            "+t._s(a.symbol)+"\n          ")])})),0)])])]),s("div",{staticClass:"otcAccount-body a-7-bd"},[s("div",{staticClass:"otcAccount-title a-3-bd"},[s("div",{staticClass:"text b-1-cl"},[t._v(t._s(t.$t("assets.otcAccount.ListOfFunds")))]),s("div",{staticClass:"hide"},[s("c-switch",{attrs:{value:t.switchFlag},on:{click:t.switchChange}}),s("span",{staticClass:"hodetext"},[t._v(t._s(t.$t("assets.hideMinAssets")))])],1),s("div",{staticClass:"find"},[s("c-inputFind",{attrs:{promptText:t.$t("assets.otcAccount.SearchCurrency"),value:t.findValue,className:"findClass"},on:{onchanges:t.findChanges}})],1)]),s("div",{staticClass:"otcAccount-center"},[s("c-table",{attrs:{imgMap:t.imgMap,colorMap:t.colorMap,loading:t.tabelLoading,columns:t.columns,dataList:t.dataListFilter,cellHeight:55},on:{elementClick:t.tableClick}})],1),s("c-dialog",{attrs:{showFlag:t.dialogFlag,paddingBottom:"14px",confirmLoading:t.dialogConfirmLoading,confirmDisabled:t.dialogConfirmDisabled,titleText:t.$t("assets.otcAccount.CapitalTransfer")},on:{close:t.dialogClose,confirm:t.dialogConfirm}},[s("section",{staticClass:"transfer-box"},[s("ul",{staticClass:"transfer-content a-4-bg"},[s("li",{staticClass:"transfer-page"},[s("div",{staticClass:"transfer-page-side"},[t._v(t._s(t.$t("assets.otcAccount.from")))]),s("div",{staticClass:"transfer-page-name b-1-cl"},[t._v(t._s(t.side.from))])]),s("li",{staticClass:"transfer-icon"},[s("svg",{staticClass:"icon icon-36",attrs:{"aria-hidden":"true"},on:{click:t.setTransferSide}},[s("use",{attrs:{"xlink:href":"#icon-f_4"}})])]),s("li",{staticClass:"transfer-page"},[s("div",{staticClass:"transfer-page-side"},[t._v(t._s(t.$t("assets.otcAccount.to")))]),s("div",{staticClass:"transfer-page-name b-1-cl"},[t._v(t._s(t.side.to))])])]),s("c-inputLine",{attrs:{name:"transferValue",value:t.transferValue,promptText:t.$t("assets.otcAccount.volume"),errorHave:!0,errorFlag:t.transferError,errorText:t.$t("assets.otcAccount.volumeError"),warningText:t.transferWarningText},on:{onchanges:t.inputLineChange}},[s("c-button",{attrs:{type:"text",height:"30px"},on:{click:t.allTransfer}},[t._v("\n            "+t._s(t.$t("assets.otcAccount.all"))+"\n          ")])],1)],1)])],1)])},i=[],n=(s("2626"),s("8335"),s("11e1"),s("ed57"),s("8e91"),s("4a53"),s("bd86")),r=(s("79cb"),s("d89b"),s("95d5"));function o(t,a){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),s.push.apply(s,e)}return s}function c(t){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{};a%2?o(Object(s),!0).forEach((function(a){Object(n["a"])(t,a,s[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(s,a))}))}return t}var l=r["u"].f_1,f={name:"page-otcAccount",data:function(){return{otcHeader:"background: url(".concat(r["u"].zc_otc,")"),imgMap:r["u"],colorMap:r["c"],transferObj:null,transferSide:"1",dialogConfirmLoading:!1,dialogFlag:!1,transferValue:"",tabelLoading:!0,dataList:[],totalBalance:"--",totalBalanceSymbol:"",totalRate:"--",canvasPages:[],switchFlag:!1,findValue:"",colors:["rgba(255, 255, 255, 1)","rgba(255, 255, 255, 0.8)","rgba(255, 255, 255, 0.6)","rgba(255, 255, 255, 0.4)","rgba(255, 255, 255, 0.25)","rgba(255, 255, 255, 0.1)"]}},computed:{isCoOpen:function(){var t=this.$store.state.baseData.publicInfo;return!(!t||!t.switch||"1"!==t.switch.indep_co_switch)},side:function(){var t=this.isCoOpen?this.$t("assets.index.coExchangeAccount"):this.$t("assets.index.exchangeAccount"),a=this.$t("assets.otcAccount.otcAccount"),s="",e="";return"1"===this.transferSide?(s=t,e=a):(s=a,e=t),{from:s,to:e}},transferWarningText:function(){var t=this.$t("assets.otcAccount.can"),a=this.transferData,s=a.coin,e=a.exNormal,i=a.otcNormal,n="1"===this.transferSide?e:i;return t+n+this.getShowCoin(s)},canvasPagesFilter:function(){var t=this,a=[],s=this.canvasPages.filter((function(t){return parseFloat(t.spk)>0}));if(s.sort(this.compare("spk")),s.length<6)s.forEach((function(s,e){a.push(c(c({},s),{},{color:t.colors[e]}))}));else if(s.length>=6){var e=0;s.forEach((function(s,i){i<5?a.push(c(c({},s),{},{color:t.colors[i]})):e+=s.spk})),a.push({symbol:this.$t("assets.otcAccount.other"),spk:e,color:this.colors[5]})}return a},dialogConfirmDisabled:function(){if(this.dialogConfirmLoading)return!1;var t=!0;return parseFloat(this.transferValue)>0&&!this.transferError&&(t=!1),t},transferError:function(){var t=!1;return"1"===this.transferSide?parseFloat(this.transferValue)>parseFloat(this.transferData.exNormal)&&(t=!0):"2"===this.transferSide&&parseFloat(this.transferValue)>parseFloat(this.transferData.otcNormal)&&(t=!0),t},transferData:function(){var t="",a="--",s="--";if(this.transferObj){t=this.transferObj.coinSymbol;var e=this.market.coinList,i=e[t]&&e[t].showPrecision||0;Number.isNaN(parseFloat(Object(r["f"])(this.transferObj.exchangeNormal,i)))||(a=Object(r["f"])(this.transferObj.exchangeNormal,i)),Number.isNaN(parseFloat(Object(r["f"])(this.transferObj.normal,i)))||(s=Object(r["f"])(this.transferObj.normal,i))}return{coin:t,exNormal:a,otcNormal:s}},columns:function(){return[{title:this.$t("assets.otcAccount.coin"),width:"20%"},{title:this.$t("assets.otcAccount.Available"),width:"30%"},{title:this.$t("assets.otcAccount.freeze"),width:"30%"},{title:this.$t("assets.otcAccount.options"),width:"20%"}]},market:function(){return this.$store.state.baseData.market},dataListFilter:function(){var t=this,a=[];this.switchFlag?this.dataList.forEach((function(t){parseFloat(t.btcValuation)>=1e-4&&a.push(t)})):a=this.dataList;var s=[];return a.forEach((function(a){-1!==a.data[0][1].text.toUpperCase().indexOf(t.findValue.toUpperCase())&&s.push(a)})),s}},watch:{market:function(t){t&&this.sendOtcAxios()},transferValue:function(t){var a=this.market.coinList,s=this.transferData.coin,e=a[s]&&a[s].showPrecision||0;this.transferValue=Object(r["h"])(t,e)},canvasPagesFilter:function(t){0===t.length?this.canvasInit():this.canvasMap()}},methods:{getShowCoin:function(t){var a=t;return this.market&&this.market.coinList&&(a=Object(r["l"])(t,this.market.coinList)),a},init:function(){r["w"].get("assetsSwitch")&&(this.switchFlag=r["w"].get("assetsSwitch")),this.market&&this.sendOtcAxios(),this.canvasInit()},compare:function(t){return function(a,s){var e=a[t],i=s[t];return i-e}},allTransfer:function(){if("1"===this.transferSide){if("--"===this.transferData.exNormal)return;this.transferValue=this.transferData.exNormal}else if("2"===this.transferSide){if("--"===this.transferData.exNormal)return;this.transferValue=this.transferData.otcNormal}},setTransferSide:function(){"1"===this.transferSide?this.transferSide="2":"2"===this.transferSide&&(this.transferSide="1"),this.transferValue=""},inputLineChange:function(t,a){this[a]=t},dialogClose:function(){this.transferSide="1",this.transferValue="",this.transferObj=null,this.dialogFlag=!1},dialogConfirm:function(){var t=this;this.dialogConfirmLoading=!0,this.axios({url:"finance/otc_transfer",params:{fromAccount:"1"===this.transferSide?"1":"2",toAccount:"1"===this.transferSide?"2":"1",amount:this.transferValue,coinSymbol:this.transferData.coin},method:"post"}).then((function(a){t.dialogConfirmLoading=!1,"0"===a.code.toString()?(t.$bus.$emit("tip",{text:a.msg,type:"success"}),t.transferSide="1",t.transferValue="",t.transferObj=null,t.dialogFlag=!1,t.tabelLoading=!0,t.sendOtcAxios()):t.$bus.$emit("tip",{text:a.msg,type:"error"})}))},sendOtcAxios:function(){var t=this;this.axios({url:"finance/v4/otc_account_list"}).then((function(a){t.tabelLoading=!1,"0"===a.code.toString()?t.setData(a.data):t.$bus.$emit("tip",{text:a.msg,type:"error"})}))},setData:function(t){var a=this,s=t.totalBalance,e=t.totalBalanceSymbol,i=t.allCoinMap,n=this.market,o=n.coinList,c=n.rate,f=o[e]&&o[e].showPrecision||0;this.totalBalance=Object(r["f"])(s,f),this.totalBalanceSymbol=e,this.totalRate=Object(r["i"])(s,c,e);var h=o[e]&&o[e].showPrecision||0,u=[],d=[];i.forEach((function(t){d.push({symbol:t.coinSymbol,spk:t.btcValuation/s});var e=o[t.coinSymbol]&&o[t.coinSymbol].showPrecision||0,i=l;o[t.coinSymbol]&&o[t.coinSymbol].icon.length&&(i=o[t.coinSymbol].icon),u.push({id:JSON.stringify(t),btcValuation:Object(r["f"])(t.btcValuation,h),data:[[{type:"icon",iconSvg:'<div class="coinIcon"><img src="'.concat(i,'"/></div>'),eventType:"goTradeIn",classes:["coinBox"]},{text:Object(r["l"])(t.coinSymbol,o)}],Object(r["f"])(t.normal,e),Object(r["f"])(t.lock,e),[{type:"button",text:a.$t("assets.otcAccount.optionCapitalTransfer"),eventType:"transfer"}]]})})),this.canvasPages=d,this.dataList=u},canvasMap:function(){var t=this.$refs.canvas.getContext("2d");this.$refs.canvas.width=100,this.$refs.canvas.height=100;var a=0;this.canvasPagesFilter.forEach((function(s){var e=a+2*s.spk;a>=2||(e>2&&(e=2),t.beginPath(),t.moveTo(50,50),t.fillStyle=s.color,t.arc(50,50,50,Math.PI*a,Math.PI*e),t.closePath(),t.fill(),a=e)})),t.beginPath(),t.moveTo(50,50),t.fillStyle="#4a3dd8",t.arc(50,50,35,0*Math.PI,2*Math.PI),t.closePath(),t.fill()},canvasInit:function(){var t=this.$refs.canvas.getContext("2d");this.$refs.canvas.width=100,this.$refs.canvas.height=100,t.beginPath(),t.moveTo(50,50),t.fillStyle="#e0e0e0",t.arc(50,50,50,0,2*Math.PI),t.closePath(),t.fill(),t.beginPath(),t.moveTo(50,50),t.fillStyle="#4a3dd8",t.arc(50,50,35,0*Math.PI,2*Math.PI),t.closePath(),t.fill()},findChanges:function(t){this.findValue=t},switchChange:function(){this.switchFlag=!this.switchFlag,r["w"].set("assetsSwitch",this.switchFlag)},tableClick:function(t,a){"transfer"===t&&(this.transferObj=JSON.parse(a),this.dialogFlag=!0)}}},h=(s("c861"),{mixins:[f],mounted:function(){this.init()}}),u=h,d=s("2877"),g=Object(d["a"])(u,e,i,!1,null,null,null);a["default"]=g.exports}}]);