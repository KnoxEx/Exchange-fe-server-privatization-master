(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61bb7724"],{"1a95":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i(t.templateLayoutType,{tag:"component"})},a=[],r=i("95d5"),o={computed:{templateLayoutType:function(){var t=this.$store.state.baseData.templateLayoutType;return 0!==t&&(t=1),r["E"][t]}}},n=(i("8d19"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"page-otcTrade a-5-bg"},[i("div",{staticClass:"page-otcTrade-content"},[i("div",{staticClass:"page-otcTrade-bar"},[i("div",{staticClass:"otcTrade-header a-3-bd"},[i("div",{staticClass:"otcTrade-page a-12-bg",staticStyle:{color:"#EDF4F8"},on:{click:t.goUser}},[t.axiosObj.imageUrl?i("div",[i("img",{attrs:{src:t.axiosObj.imageUrl,alt:""}})]):t.axiosObj.otcNickName?i("div",[t._v(t._s(t.axiosObj.otcNickName[0]))]):t._e(),i("div",{staticClass:"lineIcon a-5-bd",class:1===t.axiosObj.loginStatus?"a-18-bg":"a-1-bg"})]),i("div",{staticClass:"otcTrade-user"},[i("div",{staticClass:"otcTrade-userName b-1-cl"},[t._v("\n            "+t._s(t.axiosObj.otcNickName)+"\n            "),i("span",{staticStyle:{"margin-left":"10px"},domProps:{innerHTML:t._s(t.userVip)}})]),i("div",{staticClass:"otcTrade-userStatus"},[t._v(t._s(1===t.axiosObj.loginStatus?t.$t("otcTrade.inLine"):t.$t("otcTrade.outLine"))+"\n          ")])]),i("div",{staticClass:"otcTrade-header-even"},[i("div",{staticClass:"otcTrade-header-even-value b-1-cl"},[t._v(t._s(t.axiosObj.dealVolume))]),i("div",{staticClass:"otcTrade-header-even-key"},[t._v(t._s(t.$t("otcTrade.TransactionTimes")))])]),i("div",{staticClass:"otcTrade-header-even"},[i("div",{staticClass:"otcTrade-header-even-value b-1-cl"},[t._v(t._s(t.credit))]),i("div",{staticClass:"otcTrade-header-even-key"},[t._v(t._s(t.$t("otcTrade.CreditDegree")))])]),i("div",{staticClass:"otcTrade-header-even"},[i("div",{staticClass:"otcTrade-header-even-value b-1-cl"},[t._v("\n            "+t._s(t._f("BTCFixD")(t.axiosObj.turnover,t.that))+" BTC\n          ")]),i("div",{staticClass:"otcTrade-header-even-key"},[t._v(t._s(t.$t("otcTrade.his")))])])]),i("div",{staticClass:"otcTrade-message a-3-bd"},[i("div",{staticClass:"otcTrade-message-title b-1-cl"},[t._v(t._s(t.messageTitle))]),i("div",{staticClass:"otcTrade-message-box clearfix"},[i("ul",{staticClass:"otcTrade-message-keys"},[i("li",[t._v(t._s(t.$t("otcTrade.price")))]),i("li",[t._v(t._s(t.$t("otcTrade.volume")))]),i("li",[t._v(t._s(t.$t("otcTrade.TradingLimit")))]),i("li",[t._v(t._s(t.$t("otcTrade.TimeLimitPayment")))]),i("li",[t._v(t._s(t.sidePay))]),i("li",[t._v(t._s(t.$t("otcTrade.MerchantRemarks")))])]),i("ul",{staticClass:"otcTrade-message-values b-1-cl"},[i("li",[t._v(t._s(t._f("payFixD")(t.axiosObj.price,t.that))+" "+t._s(t.axiosObj.payCoin))]),i("li",[t._v(t._s(t._f("coinFixD")(t.axiosObj.volumeBalance,t.that))+" "+t._s(t.axiosObj.coin))]),i("li",[t._v(t._s(t._f("payFixD")(t.axiosObj.minTrade,t.that))+" - "+t._s(t._f("payFixD")(t.axiosObj.maxTrade,t.that))+"\n              "+t._s(t.axiosObj.payCoin)+"\n            ")]),i("li",[t._v(t._s(t.axiosObj.limitTime)+" "+t._s(t.$t("otcTrade.min")))]),i("li",t._l(t.payments,(function(t,e){return i("c-otcPayIcon",{key:e,staticClass:"otcTrade-otcPayIcon",attrs:{imgUrl:t.icon}})})),1),t.isShowEscription?i("li",[t._v(t._s(t.axiosObj.description))]):i("li",[t._v(t._s(t.$t("otcTrade.none")))])])])]),i("c-dialog",{attrs:{showFlag:t.closeTradeFlag,titleText:t.$t("otcTrade.closeTitle"),confirmLoading:t.closeTradeConfirmLoading},on:{confirm:t.closeTradeConfirm,close:t.closeTradeClose}},[i("div",{staticClass:"closeTrade-dialog"},[t._v(t._s(t.$t("otcTrade.closeWarning")))])]),"myself"===t.optionsFlag?i("div",{staticClass:"otcTrade-options-myself"},[i("div",[i("c-button",{attrs:{type:"solid",paddingW:"24px",height:"40px"},on:{click:t.goHall}},[t._v("\n            "+t._s(t.fiatTradeOpen?t.$t("assets.b2c.otcShow.goHall"):t.$t("otcTrade.goHall"))+"\n          ")]),t.axiosObj.status&&4!==t.axiosObj.status?i("c-button",{attrs:{type:"text",className:"textButton",paddingW:"24px",height:"40px"},on:{click:t.closeTrade}},[t._v("\n            "+t._s(t.$t("otcTrade.close"))+"\n          ")]):t._e()],1),i("p",{staticClass:"myself-tip"},[t._v(t._s(t.axiosObj.tip))])]):t._e(),"even"===t.optionsFlag?i("div",{staticClass:"otcTrade-options-trade"},[i("div",{staticClass:"options-trade-title b-1-cl"},[t._v("\n          "+t._s("SELL"===t.axiosObj.side?t.$t("otcTrade.PurchaseAmount"):t.$t("otcTrade.AmountSale"))+"\n        ")]),i("div",{staticClass:"options-trade-form clearfix"},[i("div",{staticClass:"leftInp"},[i("c-inputLine",{attrs:{promptText:t.leftInputOptions.promptText,name:"leftInp",value:t.leftInp,errorHave:!0,errorText:t.leftInpObj.errorText,errorFlag:t.leftInpObj.errorFlag,warningText:t.leftInputOptions.warningText},on:{onchanges:t.inputLineChange}},["BUY"===t.axiosObj.side?i("c-button",{attrs:{type:"text",height:"30px"},on:{click:function(e){return t.inputAll("left")}}},[t._v(t._s(t.$t("otcTrade.all"))+"\n              ")]):t._e()],1)],1),i("div",{staticClass:"tradeIcon"},[i("svg",{staticClass:"icon icon-16",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-c_18"}})])]),i("div",{staticClass:"rightInp"},[i("c-inputLine",{attrs:{promptText:t.rightInputOptions.promptText,name:"rightInp",value:t.rightInp,errorHave:!0,errorText:t.rightInpObj.errorText,errorFlag:t.rightInpObj.errorFlag,warningText:t.rightInputOptions.warningText},on:{onchanges:t.inputLineChange}},["SELL"===t.axiosObj.side?i("c-button",{attrs:{type:"text",height:"30px"},on:{click:function(e){return t.inputAll("right")}}},[t._v(t._s(t.$t("otcTrade.all"))+"\n              ")]):t._e()],1)],1)]),"BUY"===t.axiosObj.side?i("div",{staticClass:"options-trade-pass"},[i("c-inputLine",{attrs:{promptText:t.$t("otcTrade.pass"),name:"passCode",inputType:"password",value:t.passCode,errorHave:!0,errorText:t.$t("otcTrade.passError"),errorFlag:t.passErrorFlag},on:{onchanges:t.inputLineChange}})],1):t._e(),i("div",{staticClass:"options-trade-button"},["BUY"===t.axiosObj.side?i("c-button",{attrs:{paddingW:"32px",marginTop:"18px",disabled:t.mySellBtnDisabled,loading:t.btnLoading},on:{click:t.BtnClick}},[t._v(t._s(t.$t("otcTrade.ImmediateSale"))+"\n          ")]):t._e(),"SELL"===t.axiosObj.side?i("c-button",{attrs:{paddingW:"32px",marginTop:"50px",disabled:t.myBuyBtnDisabled,loading:t.btnLoading},on:{click:t.BtnClick}},[t._v(t._s(t.$t("otcTrade.ImmediatePurchase"))+"\n          ")]):t._e(),i("div",{staticClass:"buttonTimer"},[i("span",{staticClass:"b-1-cl"},[t._v(t._s(t.$t("otcTrade.CountDown"))+"：")]),i("span",{staticClass:"b-7-cl"},[t._v(t._s(t.time)+"s")])])],1),"SELL"===t.axiosObj.side&&t.windFlag?i("div",{staticClass:"b-7-cl warning"},[t._v("\n            "+t._s(t.fiatTradeOpen?t.$t("assets.b2c.otcShow.otcTradeWarning"):t.$t("otcTrade.warning")))]):t._e(),"even"===t.optionsFlag?i("c-otcReminder"):t._e()],1):t._e()],1)])])}),c=[],l=(i("c5f6"),i("6b54"),i("87b3"),{data:function(){return{orderId:null,userId:null,axiosObj:{},axiosReady:!1,closeTradeConfirmLoading:!1,closeTradeFlag:!1,leftInp:"",rightInp:"",passCode:"",btnLoading:!1,timer:null,time:60}},watch:{optionsFlag:function(t){"even"===t&&this.startTime()},leftInp:function(t){var e=0;"SELL"===this.axiosObj.side?e=this.priceFix:"BUY"===this.axiosObj.side&&(e=this.volumeFix),this.leftInp=Object(r["h"])(t,e)},rightInp:function(t){var e=0;"SELL"===this.axiosObj.side?e=this.volumeFix:"BUY"===this.axiosObj.side&&(e=this.priceFix),this.rightInp=Object(r["h"])(t,e)}},filters:{payFixD:function(t,e){return Object(r["f"])(t,e.priceFix)},coinFixD:function(t,e){return Object(r["f"])(t,e.volumeFix)},BTCFixD:function(t,e){return Object(r["f"])(t,e.btcFix)}},computed:{fiatTradeOpen:function(){var t=this.$store.state.baseData.publicInfo;return!(!t||!t.switch||"1"!==t.switch.fiat_trade_open)},publicInfo:function(){return this.$store.state.baseData.publicInfo},windFlag:function(){var t=!1;return this.publicInfo&&this.publicInfo.switch&&this.publicInfo.switch.wind_control_switch&&"1"===this.publicInfo.switch.wind_control_switch.toString()&&(t=!0),t},userInfo:function(){return this.$store.state.baseData.userInfo},userVip:function(){var t="";return this.userInfo&&this.userInfo.otcCompanyInfo&&Number(this.userInfo.otcCompanyInfo.status)&&(1===this.axiosObj.companyLevel?t='<svg class="icon icon-16" aria-hidden="true">\n              <use xlink:href="#icon-c_16"></use>\n            </svg>':2===this.axiosObj.companyLevel&&(t='<svg class="icon icon-16" aria-hidden="true">\n              <use xlink:href="#icon-c_17"></use>\n            </svg>')),t},credit:function(){var t="";return this.axiosObj.creditGrade&&(t="".concat(100*this.axiosObj.creditGrade,"%")),t},mySellBtnDisabled:function(){var t=!0;return(this.leftInpObj.flag&&this.rightInpObj.flag&&this.passFlag||this.btnLoading)&&(t=!1),t},myBuyBtnDisabled:function(){var t=!0;return(this.leftInpObj.flag&&this.rightInpObj.flag||this.btnLoading)&&(t=!1),t},leftInpObj:function(){return"BUY"===this.axiosObj.side?0===parseFloat(this.leftInp)||0===this.leftInp.length?{flag:!1,errorFlag:!1,errorText:""}:parseFloat(this.leftInp)>parseFloat(this.axiosObj.volumeBalance)?{flag:!1,errorFlag:!0,errorText:this.$t("otcTrade.numberError")}:{flag:!0,errorFlag:!1,errorText:""}:"SELL"===this.axiosObj.side?0===parseFloat(this.leftInp)||0===this.leftInp.length?{flag:!1,errorFlag:!1,errorText:""}:parseFloat(this.leftInp)<parseFloat(this.axiosObj.minTrade)?{flag:!1,errorFlag:!0,errorText:this.$t("otcTrade.numberMinError")}:parseFloat(this.leftInp)>parseFloat(this.axiosObj.maxTrade)?{flag:!1,errorFlag:!0,errorText:this.$t("otcTrade.numberMaxError")}:{flag:!0,errorFlag:!1,errorText:""}:{flag:!1,errorFlag:!1,errorText:""}},rightInpObj:function(){return"BUY"===this.axiosObj.side?0===parseFloat(this.rightInp)||0===this.rightInp.length?{flag:!1,errorFlag:!1,errorText:""}:parseFloat(this.rightInp)<parseFloat(this.axiosObj.minTrade)?{flag:!1,errorFlag:!0,errorText:this.$t("otcTrade.numberMinError")}:parseFloat(this.rightInp)>parseFloat(this.axiosObj.maxTrade)?{flag:!1,errorFlag:!0,errorText:this.$t("otcTrade.numberMaxError")}:{flag:!0,errorFlag:!1,errorText:""}:"SELL"===this.axiosObj.side?0===parseFloat(this.rightInp)||0===this.rightInp.length?{flag:!1,errorFlag:!1,errorText:""}:parseFloat(this.rightInp)>parseFloat(this.axiosObj.volumeBalance)?{flag:!1,errorFlag:!0,errorText:this.$t("otcTrade.numberError")}:{flag:!0,errorFlag:!1,errorText:""}:{flag:!1,errorFlag:!1,errorText:""}},passFlag:function(){return this.$store.state.regExp.passWord.test(this.passCode)},passErrorFlag:function(){return 0!==this.passCode.length&&!this.passFlag},leftInputOptions:function(){var t=this.$t("otcTrade.OrderAmount"),e="",i=this.axiosObj,s=i.side,a=i.payCoin,o=i.coin,n=i.minTrade,c=i.maxTrade;return"SELL"===s?(t+=" (".concat(a,")"),e="".concat(this.$t("otcTrade.ScopeOrderAmount"),"\n         (").concat(Object(r["f"])(n,this.priceFix)," - ").concat(Object(r["f"])(c,this.priceFix),")")):"BUY"===s&&(t+="(".concat(this.getShowCoin(o),")")),{promptText:t,warningText:e}},rightInputOptions:function(){var t=this.$t("otcTrade.QuantityInExchange"),e="",i=this.axiosObj,s=i.side,a=i.payCoin,o=i.coin,n=i.minTrade,c=i.maxTrade;return"SELL"===s?t+=" (".concat(this.getShowCoin(o),")"):"BUY"===s&&(t+="(".concat(a,")"),e="".concat(this.$t("otcTrade.ScopeOrderAmount"),"\n          (").concat(Object(r["f"])(n,this.priceFix)," - ").concat(Object(r["f"])(c,this.priceFix),")")),{promptText:t,warningText:e}},optionsFlag:function(){var t="";return this.axiosReady&&(t=this.axiosObj.tip&&this.axiosObj.tip.length?"myself":"even"),t},that:function(){return this},volumeFix:function(){var t="",e=this.axiosObj.coin;return this.market&&e&&this.market.coinList[e]&&this.market.coinList[e].showPrecision&&(t=this.market.coinList[e].showPrecision),Number(t)},btcFix:function(){var t="";return this.market&&this.market.coinList.BTC&&this.market.coinList.BTC.showPrecision&&(t=this.market.coinList.BTC.showPrecision),Number(t)},priceFix:function(){var t=this.$store.state.baseData.defaultFiatPrecision,e=this.axiosObj,i=e.payCoin,s=e.coin;return this.market&&s&&i&&this.market.coinList[s]&&this.market.coinList[s].fiatPrecision&&this.market.coinList[s].fiatPrecision[i.toLowerCase()]&&(t=this.market.coinList[s].fiatPrecision[i.toLowerCase()]),Number(t)},market:function(){return this.$store.state.baseData.market},otcPublicInfo:function(){return this.$store.state.baseData.otcPublicInfo},messageTitle:function(){var t="",e=this.axiosObj,i=e.side,s=e.coin,a=e.payCoin;return i&&s&&a&&(t="".concat(this.$t("otcTrade.use"),"\n          ").concat(a,"\n          ").concat("BUY"===i?this.$t("otcTrade.sell"):this.$t("otcTrade.buy")," ").concat(this.getShowCoin(s))),t},sidePay:function(){var t=this.$t("otcTrade.TransactionMode");return this.axiosObj.side&&(t="BUY"===this.axiosObj.side?this.$t("otcTrade.payment"):this.$t("otcTrade.Receivables")),t},isShowEscription:function(){return!(!this.axiosObj.description||!this.axiosObj.description.length)},payments:function(){return this.axiosObj.payments?this.axiosObj.payments:[]}},beforeDestroy:function(){clearInterval(this.timer)},methods:{getShowCoin:function(t){var e=t;return this.market&&this.market.coinList&&(e=Object(r["l"])(t,this.market.coinList)),e},init:function(){var t=this.$route.query,e=t.orderId,i=t.userId;e&&(this.orderId=e,this.userId=i,this.initOrder())},startTime:function(){var t=this;clearInterval(this.timer),this.time=60,this.timer=setInterval((function(){t.time-=1,t.time<=0&&(clearInterval(t.timer),t.$router.push("/"))}),1e3)},goUser:function(){this.userId&&this.$router.push("/stranger?uid=".concat(this.userId))},BtnClick:function(){var t=this;"SELL"===this.axiosObj.side?(this.btnLoading=!0,this.axios({url:"v4/otc/buy_order_save",params:{advertId:this.orderId,price:this.axiosObj.price,totalPrice:this.leftInp,type:"price",volume:this.rightInp},hostType:"otc"}).then((function(e){t.btnLoading=!1,"0"===e.code.toString()?(t.$bus.$emit("tip",{text:e.msg,type:"success"}),t.$router.push("otcDetailOrder?orderId=".concat(e.data.sequence))):t.$bus.$emit("tip",{text:e.msg,type:"error"})}))):"BUY"===this.axiosObj.side&&(this.btnLoading=!0,this.axios({url:"v4/otc/sell_order_save",params:{advertId:this.orderId,capitalPword:this.passCode,price:String(this.axiosObj.price),totalPrice:this.rightInp,type:"volume",volume:this.leftInp},hostType:"otc"}).then((function(e){t.btnLoading=!1,"0"===e.code.toString()?(t.$bus.$emit("tip",{text:e.msg,type:"success"}),t.$router.push("otcDetailOrder?orderId=".concat(e.data.sequence))):t.$bus.$emit("tip",{text:e.msg,type:"error"})})))},inputAll:function(t){this.axiosObj.volumeBalance&&("right"===t?(this.rightInp=Object(r["f"])(this.axiosObj.volumeBalance,this.volumeFix),this.rightServe()):"left"===t&&(this.leftInp=Object(r["f"])(this.axiosObj.volumeBalance,this.volumeFix),this.leftServe()))},goHall:function(){this.$router.push("/")},closeTrade:function(){this.closeTradeFlag=!0},closeTradeConfirm:function(){var t=this;this.closeTradeConfirmLoading=!0,this.axios({url:"/otc/close_wanted",method:"post",hostType:"otc",params:{advertId:this.orderId}}).then((function(e){t.closeTradeConfirmLoading=!1,"0"===e.code.toString()?(t.$bus.$emit("tip",{text:e.msg,type:"success"}),t.initOrder(),t.closeTradeFlag=!1):t.$bus.$emit("tip",{text:e.msg,type:"error"})}))},closeTradeClose:function(){this.closeTradeFlag=!1},inputLineChange:function(t,e){this[e]=t,"leftInp"===e?this.leftServe():"rightInp"===e&&this.rightServe()},leftServe:function(){this.axiosObj.price&&("SELL"===this.axiosObj.side?this.rightInp=String(this.leftInp/this.axiosObj.price):"BUY"===this.axiosObj.side&&(this.rightInp=String(this.leftInp*this.axiosObj.price)))},rightServe:function(){this.axiosObj.price&&("SELL"===this.axiosObj.side?this.leftInp=String(this.rightInp*this.axiosObj.price):"BUY"===this.axiosObj.side&&(this.leftInp=String(this.rightInp/this.axiosObj.price)))},initOrder:function(){var t=this;this.axios({url:"otc/v4/wanted_detail",method:"post",hostType:"otc",params:{advertId:this.orderId}}).then((function(e){"0"===e.code.toString()?(t.axiosReady=!0,t.axiosObj=e.data):t.$bus.$emit("tip",{text:e.msg,type:"error"})}))}}}),d={mixins:[l],mounted:function(){this.init()}},p=d,h=i("2877"),u=Object(h["a"])(p,n,c,!1,null,null,null),g=u.exports,b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"page-otcTrade a-5-bg"},[i("div",{staticClass:"otc-page-title a-5-bg a-7-bd"},[i("div",{staticClass:"page-title-bar b-1-cl"},["BUY"===t.axiosObj.side?i("span",[t._v(t._s(t.$t("fiatdeal.navList")[2]))]):i("span",[t._v(t._s(t.$t("fiatdeal.navList")[1]))])])]),i("div",{staticClass:"page-otcTrade-content"},[i("vue-scroll",[i("div",{staticClass:"page-otcTrade-bar"},[i("div",{staticClass:"otcTrade-header a-3-bd"},[i("div",{staticClass:"otcTrade-page a-12-bg",staticStyle:{color:"#EDF4F8"},on:{click:t.goUser}},[t.axiosObj.imageUrl?i("div",[i("img",{attrs:{src:t.axiosObj.imageUrl,alt:""}})]):t.axiosObj.otcNickName?i("div",[t._v(t._s(t.axiosObj.otcNickName[0]))]):t._e(),i("div",{staticClass:"lineIcon a-5-bd",class:1===t.axiosObj.loginStatus?"a-18-bg":"a-1-bg"})]),i("div",{staticClass:"otcTrade-user"},[i("div",{staticClass:"otcTrade-userName b-1-cl"},[t._v("\n              "+t._s(t.axiosObj.otcNickName)+"\n              "),i("span",{staticStyle:{"margin-left":"10px"},domProps:{innerHTML:t._s(t.userVip)}})]),i("div",{staticClass:"otcTrade-userStatus"},[t._v("\n              "+t._s(1===t.axiosObj.loginStatus?t.$t("otcTrade.inLine"):t.$t("otcTrade.outLine"))+"\n            ")])]),i("div",{staticClass:"otcTrade-header-even"},[i("div",{staticClass:"otcTrade-header-even-value b-1-cl"},[t._v(t._s(t.axiosObj.dealVolume))]),i("div",{staticClass:"otcTrade-header-even-key"},[t._v(t._s(t.$t("otcTrade.TransactionTimes")))])]),i("div",{staticClass:"otcTrade-header-even"},[i("div",{staticClass:"otcTrade-header-even-value b-1-cl"},[t._v(t._s(t.credit))]),i("div",{staticClass:"otcTrade-header-even-key"},[t._v(t._s(t.$t("otcTrade.CreditDegree")))])]),i("div",{staticClass:"otcTrade-header-even"},[i("div",{staticClass:"otcTrade-header-even-value b-1-cl"},[t._v(t._s(t._f("BTCFixD")(t.axiosObj.turnover,t.that))+" BTC")]),i("div",{staticClass:"otcTrade-header-even-key"},[t._v(t._s(t.$t("otcTrade.his")))])])]),i("div",{staticClass:"otcTrade-message a-3-bd"},[i("div",{staticClass:"otcTrade-message-title b-1-cl"},[t._v(t._s(t.messageTitle))]),i("div",{staticClass:"otcTrade-message-box clearfix"},[i("ul",{staticClass:"otcTrade-message-keys"},[i("li",[t._v(t._s(t.$t("otcTrade.price")))]),i("li",[t._v(t._s(t.$t("otcTrade.volume")))]),i("li",[t._v(t._s(t.$t("otcTrade.TradingLimit")))]),i("li",[t._v(t._s(t.$t("otcTrade.TimeLimitPayment")))]),i("li",[t._v(t._s(t.sidePay))]),i("li",[t._v(t._s(t.$t("otcTrade.MerchantRemarks")))])]),i("ul",{staticClass:"otcTrade-message-values b-1-cl"},[i("li",[t._v(t._s(t._f("payFixD")(t.axiosObj.price,t.that))+" "+t._s(t.axiosObj.payCoin))]),i("li",[t._v(t._s(t._f("coinFixD")(t.axiosObj.volumeBalance,t.that))+" "+t._s(t.axiosObj.coin))]),i("li",[t._v("\n                "+t._s(t._f("payFixD")(t.axiosObj.minTrade,t.that))+" - "+t._s(t._f("payFixD")(t.axiosObj.maxTrade,t.that))+"\n                "+t._s(t.axiosObj.payCoin)+"\n              ")]),i("li",[t._v(t._s(t.axiosObj.limitTime)+" "+t._s(t.$t("otcTrade.min")))]),i("li",t._l(t.payments,(function(t,e){return i("c-otcPayIcon",{key:e,staticClass:"otcTrade-otcPayIcon",attrs:{imgUrl:t.icon}})})),1),t.isShowEscription?i("li",[t._v(t._s(t.axiosObj.description))]):i("li",[t._v(t._s(t.$t("otcTrade.none")))])])])]),i("c-dialog",{attrs:{showFlag:t.closeTradeFlag,titleText:t.$t("otcTrade.closeTitle"),confirmLoading:t.closeTradeConfirmLoading},on:{confirm:t.closeTradeConfirm,close:t.closeTradeClose}},[i("div",{staticClass:"closeTrade-dialog"},[t._v(t._s(t.$t("otcTrade.closeWarning")))])]),"myself"===t.optionsFlag?i("div",{staticClass:"otcTrade-options-myself"},[i("div",[i("c-button",{attrs:{type:"solid",paddingW:"24px",height:"40px"},on:{click:t.goHall}},[t._v("\n              "+t._s(t.fiatTradeOpen?t.$t("assets.b2c.otcShow.goHall"):t.$t("otcTrade.goHall"))+"\n            ")]),t.axiosObj.status&&4!==t.axiosObj.status?i("c-button",{staticClass:"textButton",attrs:{type:"text",paddingW:"24px",height:"40px"},on:{click:t.closeTrade}},[t._v(t._s(t.$t("otcTrade.close")))]):t._e()],1),i("p",{staticClass:"myself-tip"},[t._v(t._s(t.axiosObj.tip))])]):t._e(),"even"===t.optionsFlag?i("div",{staticClass:"otcTrade-options-trade"},[i("div",{staticClass:"options-trade-title b-1-cl"},[t._v("\n            "+t._s("SELL"===t.axiosObj.side?t.$t("otcTrade.PurchaseAmount"):t.$t("otcTrade.AmountSale"))+"\n          ")]),i("div",{staticClass:"options-trade-form clearfix"},[i("div",{staticClass:"leftInp"},[i("c-inputLine",{attrs:{promptText:t.leftInputOptions.promptText,name:"leftInp",value:t.leftInp,errorHave:!0,errorText:t.leftInpObj.errorText,errorFlag:t.leftInpObj.errorFlag,warningText:t.leftInputOptions.warningText},on:{onchanges:t.inputLineChange}},["BUY"===t.axiosObj.side?i("c-button",{attrs:{type:"text",height:"30px"},on:{click:function(e){return t.inputAll("left")}}},[t._v(t._s(t.$t("otcTrade.all")))]):t._e()],1)],1),i("div",{staticClass:"tradeIcon"},[i("svg",{staticClass:"icon icon-16",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-c_18"}})])]),i("div",{staticClass:"rightInp"},[i("c-inputLine",{attrs:{promptText:t.rightInputOptions.promptText,name:"rightInp",value:t.rightInp,errorHave:!0,errorText:t.rightInpObj.errorText,errorFlag:t.rightInpObj.errorFlag,warningText:t.rightInputOptions.warningText},on:{onchanges:t.inputLineChange}},["SELL"===t.axiosObj.side?i("c-button",{attrs:{type:"text",height:"30px"},on:{click:function(e){return t.inputAll("right")}}},[t._v(t._s(t.$t("otcTrade.all")))]):t._e()],1)],1)]),"BUY"===t.axiosObj.side?i("div",{staticClass:"options-trade-pass"},[i("c-inputLine",{attrs:{promptText:t.$t("otcTrade.pass"),name:"passCode",inputType:"password",value:t.passCode,errorHave:!0,errorText:t.$t("otcTrade.passError"),errorFlag:t.passErrorFlag},on:{onchanges:t.inputLineChange}})],1):t._e(),i("div",{staticClass:"options-trade-button"},["BUY"===t.axiosObj.side?i("c-button",{attrs:{paddingW:"32px",marginTop:"18px",disabled:t.mySellBtnDisabled,loading:t.btnLoading},on:{click:t.BtnClick}},[t._v(t._s(t.$t("otcTrade.ImmediateSale")))]):t._e(),"SELL"===t.axiosObj.side?i("c-button",{attrs:{paddingW:"32px",marginTop:"50px",disabled:t.myBuyBtnDisabled,loading:t.btnLoading},on:{click:t.BtnClick}},[t._v(t._s(t.$t("otcTrade.ImmediatePurchase")))]):t._e(),i("div",{staticClass:"buttonTimer"},[i("span",{staticClass:"b-1-cl"},[t._v(t._s(t.$t("otcTrade.CountDown"))+"：")]),i("span",{staticClass:"b-7-cl"},[t._v(t._s(t.time)+"s")])])],1),"SELL"===t.axiosObj.side&&t.windFlag?i("div",{staticClass:"b-7-cl warning"},[t._v(t._s(t.fiatTradeOpen?t.$t("assets.b2c.otcShow.otcTradeWarning"):t.$t("otcTrade.warning")))]):t._e(),"even"===t.optionsFlag?i("c-otcReminder"):t._e()],1):t._e()],1)])],1)])},v=[],x={mixins:[l],mounted:function(){this.init()}},T=x,m=Object(h["a"])(T,b,v,!1,null,null,null),f=m.exports,_={mixins:[o],components:{International:f,China:g}},O=_,C=Object(h["a"])(O,s,a,!1,null,null,null);e["default"]=C.exports},"8d19":function(t,e,i){}}]);