(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1fd87032"],{"36bd":function(t,a,s){"use strict";var e=s("4bf8"),i=s("77f1"),n=s("9def");t.exports=function(t){var a=e(this),s=n(a.length),o=arguments.length,r=i(o>1?arguments[1]:void 0,s),c=o>2?arguments[2]:void 0,l=void 0===c?s:i(c,s);while(l>r)a[r++]=t;return a}},"6c7b":function(t,a,s){var e=s("5ca1");e(e.P,"Array",{fill:s("36bd")}),s("9c6c")("fill")},7813:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"page-otcAccount"},[s("div",{staticClass:"otcAccount-header",style:t.otcHeader},[s("div",{staticClass:"canvasBox"},[s("canvas",{ref:"canvas",attrs:{width:"100",height:"100"}})]),s("ul",{staticClass:"assetsSum b-8-cl"},[s("li",{staticClass:"text"},[t._v(t._s(t.$t("assets.otcAccount.TotalAssets")))]),s("li",{staticClass:"num"},[t._v(t._s(t.totalBalance)),s("span",[t._v(t._s(t.totalBalanceSymbol))])]),s("li",{staticClass:"conversion"},[t._v("≈ "+t._s(t.totalRate))])]),s("ul",{staticClass:"colorList b-8-cl"},t._l(t.canvasPagesFilter,(function(a,e){return s("li",{key:e},[s("span",{style:"background: "+a.color}),t._v("\n        "+t._s(a.symbol)+"\n      ")])})),0)]),s("div",{staticClass:"otcAccount-body a-7-bd"},[s("div",{staticClass:"otcAccount-title a-3-bd"},[s("div",{staticClass:"text b-1-cl"},[t._v(t._s(t.$t("assets.otcAccount.ListOfFunds")))]),s("div",{staticClass:"hide"},[s("c-switch",{attrs:{value:t.switchFlag},on:{click:t.switchChange}}),s("span",{staticClass:"hodetext"},[t._v(t._s(t.$t("assets.otcAccount.HideZeroAssets")))])],1),s("div",{staticClass:"find"},[s("c-inputFind",{attrs:{promptText:t.$t("assets.otcAccount.SearchCurrency"),value:t.findValue,className:"findClass"},on:{onchanges:t.findChanges}})],1)]),s("div",{staticClass:"otcAccount-center"},[s("c-table",{attrs:{loading:t.tabelLoading,imgMap:t.imgMap,colorMap:t.colorMap,columns:t.columns,dataList:t.dataListFilter,cellHeight:55},on:{elementClick:t.tableClick}})],1),s("c-dialog",{attrs:{showFlag:t.dialogFlag,paddingBottom:"14px",confirmLoading:t.dialogConfirmLoading,confirmDisabled:t.dialogConfirmDisabled,titleText:t.$t("assets.otcAccount.CapitalTransfer")},on:{close:t.dialogClose,confirm:t.dialogConfirm}},[s("section",{staticClass:"transfer-box"},[s("ul",{staticClass:"transfer-content a-4-bg"},[s("li",{staticClass:"transfer-page"},[s("div",{staticClass:"transfer-page-side"},[t._v(t._s(t.$t("assets.otcAccount.from")))]),s("div",{staticClass:"transfer-page-name b-2-cl"},[t._v(t._s(t.side.from))])]),s("li",{staticClass:"transfer-icon"},[s("svg",{staticClass:"icon icon-36",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-f_4"}})])]),s("li",{staticClass:"transfer-page"},[s("div",{staticClass:"transfer-page-side"},[t._v(t._s(t.$t("assets.otcAccount.to")))]),s("div",{staticClass:"transfer-page-name b-2-cl"},[t._v("\n              "+t._s(t.$t("assets.bibaoAccount.bibaoAccount"))+"\n            ")])])]),s("c-inputLine",{attrs:{name:"transferValue",value:t.transferValue,promptText:t.$t("assets.otcAccount.volume"),errorHave:!0,errorFlag:t.transferError,errorText:t.$t("assets.otcAccount.volumeError"),warningText:t.transferWarningText},on:{onchanges:t.inputLineChange}},[s("c-button",{attrs:{type:"text",height:"30px"},on:{click:t.allTransfer}},[t._v("\n            "+t._s(t.$t("assets.otcAccount.all"))+"\n          ")])],1)],1)])],1)])},i=[],n=(s("1c01"),s("58b2"),s("8e6e"),s("456d"),s("6c7b"),s("6b54"),s("87b3"),s("57e7"),s("c5f6"),s("ee1d"),s("bd86")),o=(s("ac6a"),s("f3e2"),s("55dd"),s("d25f"),s("95d5"));function r(t,a){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),s.push.apply(s,e)}return s}function c(t){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{};a%2?r(Object(s),!0).forEach((function(a){Object(n["a"])(t,a,s[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(s,a))}))}return t}var l=o["u"].f_1,f={name:"page-otcAccount",data:function(){return{otcHeader:"background: url(".concat(o["u"].zc_otc,")"),imgMap:o["u"],colorMap:o["c"],transferObj:null,transferSide:"1",dialogConfirmLoading:!1,dialogFlag:!1,transferValue:"",tabelLoading:!0,dataList:[],totalBalance:"--",totalBalanceSymbol:"",totalRate:"--",canvasPages:[],switchFlag:!1,findValue:"",colors:["#9695FF","#8073FF","#6C5EE5","#706BE4","#514DE9 ","#4232C5"]}},computed:{side:function(){var t=this.$t("assets.otcAccount.exchangeAccount"),a=this.$t("assets.otcAccount.otcAccount"),s="",e="";return"1"===this.transferSide?(s=t,e=a):(s=a,e=t),{from:s,to:e}},transferWarningText:function(){var t=this.$t("assets.otcAccount.can"),a=this.transferData,s=a.coin,e=a.exNormal,i=a.otcNormal,n="1"===this.transferSide?e:i;return t+n+s},canvasPagesFilter:function(){var t=this,a=[],s=this.canvasPages.filter((function(t){return parseFloat(t.spk)>0}));if(s.sort(this.compare("spk")),s.length<6)s.forEach((function(s,e){a.push(c(c({},s),{},{color:t.colors[e]}))}));else if(s.length>=6){var e=0;s.forEach((function(s,i){i<5?a.push(c(c({},s),{},{color:t.colors[i]})):e+=s.spk})),a.push({symbol:this.$t("assets.otcAccount.other"),spk:e,color:this.colors[5]})}return a},dialogConfirmDisabled:function(){if(this.dialogConfirmLoading)return!1;var t=!0;return parseFloat(this.transferValue)>0&&!this.transferError&&(t=!1),t},transferError:function(){var t=!1;return"1"===this.transferSide?parseFloat(this.transferValue)>parseFloat(this.transferData.exNormal)&&(t=!0):"2"===this.transferSide&&parseFloat(this.transferValue)>parseFloat(this.transferData.otcNormal)&&(t=!0),t},transferData:function(){var t="",a="--",s="--";if(this.transferObj){t=this.transferObj.coinSymbol;var e=this.market.coinList,i=e[t]&&e[t].showPrecision||0;Number.isNaN(parseFloat(Object(o["f"])(this.transferObj.exchangeNormal,i)))||(a=Object(o["f"])(this.transferObj.exchangeNormal,i)),Number.isNaN(parseFloat(Object(o["f"])(this.transferObj.normal,i)))||(s=Object(o["f"])(this.transferObj.normal,i))}return{coin:t,exNormal:a,otcNormal:s}},columns:function(){return[{title:this.$t("assets.bibaoAccount.coin"),width:"20%"},{title:this.$t("assets.bibaoAccount.lumpSum"),width:"20%"},{title:this.$t("assets.bibaoAccount.quota"),width:"20%"},{title:this.$t("assets.bibaoAccount.bibao"),width:"20%"},{title:this.$t("assets.bibaoAccount.opera"),width:"20%"}]},market:function(){return this.$store.state.baseData.market},dataListFilter:function(){var t=this,a=[];this.switchFlag?this.dataList.forEach((function(t){parseFloat(t.data[1])&&a.push(t)})):a=this.dataList;var s=[];return a.forEach((function(a){-1!==a.data[0][1].text.indexOf(t.findValue.toUpperCase())&&s.push(a)})),s}},watch:{market:function(t){t&&this.sendOtcAxios()},transferValue:function(t){var a=this.market.coinList,s=this.transferData.coin,e=a[s]&&a[s].showPrecision||0;this.transferValue=Object(o["h"])(t,e)},canvasPagesFilter:function(t){0===t.length?this.canvasInit():this.canvasMap()}},methods:{init:function(){o["w"].get("assetsSwitch")&&(this.switchFlag=o["w"].get("assetsSwitch")),this.market&&this.sendOtcAxios(),this.canvasInit()},compare:function(t){return function(a,s){var e=a[t],i=s[t];return i-e}},allTransfer:function(){if("1"===this.transferSide){if("--"===this.transferData.exNormal)return;this.transferValue=this.transferData.exNormal}else if("2"===this.transferSide){if("--"===this.transferData.exNormal)return;this.transferValue=this.transferData.otcNormal}},setTransferSide:function(){"1"===this.transferSide?this.transferSide="2":"2"===this.transferSide&&(this.transferSide="1"),this.transferValue=""},inputLineChange:function(t,a){this[a]=t},dialogClose:function(){this.transferSide="1",this.transferValue="",this.transferObj=null,this.dialogFlag=!1},dialogConfirm:function(){var t=this;this.dialogConfirmLoading=!0,this.axios({url:"finance/deposit_transfer",params:{fromAccount:"1",toAccount:"2",amount:this.transferValue,coinSymbol:this.transferData.coin},method:"post"}).then((function(a){t.dialogConfirmLoading=!1,"0"===a.code.toString()?(t.$bus.$emit("tip",{text:a.msg,type:"success"}),t.transferSide="1",t.transferValue="",t.transferObj=null,t.dialogFlag=!1,t.tabelLoading=!0,t.sendOtcAxios()):t.$bus.$emit("tip",{text:a.msg,type:"error"})}))},sendOtcAxios:function(){var t=this;this.axios({url:"finance/deposit_account"}).then((function(a){t.tabelLoading=!1,"0"===a.code.toString()?t.setData(a.data):t.$bus.$emit("tip",{text:a.msg,type:"error"})}))},setData:function(t){var a=this,s=t.totalBalance,e=t.totalBalanceSymbol,i=t.allCoinMap,n=this.market,r=n.coinList,c=n.rate,f=r[e]&&r[e].showPrecision||0;this.totalBalance=Object(o["f"])(s,f),this.totalBalanceSymbol=e,this.totalRate=Object(o["i"])(s,c,e);var h=[],u=[];i.forEach((function(t){u.push({symbol:t.coinSymbol,spk:t.btcValuation/s});var e=r[t.coinSymbol]&&r[t.coinSymbol].showPrecision||0,i=l;r[t.coinSymbol]&&r[t.coinSymbol].icon.length&&(i=r[t.coinSymbol].icon),h.push({id:JSON.stringify(t),data:[[{type:"icon",iconSvg:'<div class="coinIcon"><img src="'.concat(i,'"/></div>'),eventType:"goTradeIn",classes:["coinBox"]},{text:t.coinSymbol}],Object(o["f"])(t.total_balance,e),Object(o["f"])(t.deposit_balance,e),Object(o["f"])(t.lock_balance,e),[{type:0!==t.lock_balance?"button":"label",text:a.$t("assets.bibaoAccount.transfer"),eventType:"transfer",classes:[0!==t.lock_balance?"":"tableNownStyle b-2-cl"]},{type:0!==t.deposit_balance?"link":"label",text:a.$t("assets.bibaoAccount.detail"),links:"bibaoDetail?symbol=".concat(t.coinSymbol),classes:[0!==t.deposit_balance?"linkStyle":"tableNownStyle b-2-cl"]}]]})})),this.canvasPages=u,this.dataList=h},canvasMap:function(){var t=this.$refs.canvas.getContext("2d");this.$refs.canvas.width=100,this.$refs.canvas.height=100;var a=0;this.canvasPagesFilter.forEach((function(s){var e=a+2*s.spk;a>=2||(e>2&&(e=2),t.beginPath(),t.moveTo(50,50),t.fillStyle=s.color,t.arc(50,50,50,Math.PI*a,Math.PI*e),t.closePath(),t.fill(),a=e)})),t.beginPath(),t.moveTo(50,50),t.fillStyle="#4a3dd8",t.arc(50,50,35,0*Math.PI,2*Math.PI),t.closePath(),t.fill()},canvasInit:function(){var t=this.$refs.canvas.getContext("2d");this.$refs.canvas.width=100,this.$refs.canvas.height=100,t.beginPath(),t.moveTo(50,50),t.fillStyle="#e0e0e0",t.arc(50,50,50,0,2*Math.PI),t.closePath(),t.fill(),t.beginPath(),t.moveTo(50,50),t.fillStyle="#4a3dd8",t.arc(50,50,35,0*Math.PI,2*Math.PI),t.closePath(),t.fill()},findChanges:function(t){this.findValue=t},switchChange:function(){this.switchFlag=!this.switchFlag,o["w"].set("assetsSwitch",this.switchFlag)},tableClick:function(t,a){"transfer"===t&&(this.transferObj=JSON.parse(a),this.dialogFlag=!0)}}},h=(s("f5b8"),{mixins:[f],mounted:function(){this.init()}}),u=h,d=s("2877"),b=Object(d["a"])(u,e,i,!1,null,null,null);a["default"]=b.exports},f5b8:function(t,a,s){}}]);