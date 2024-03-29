"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){function r(n,i){try{var o=t[n](i),s=o.value}catch(e){return void a(e)}if(!o.done)return Promise.resolve(s).then(function(e){r("next",e)},function(e){r("throw",e)});e(s)}return r("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),_wepy=require("./../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_constant=require("./../utils/constant.js"),_tip=require("./../utils/tip.js"),_tip2=_interopRequireDefault(_tip),_api=require("./../api/api.js"),_api2=_interopRequireDefault(_api),_wxParse=require("./../plugins/wxParse/wxParse.js"),_wxParse2=_interopRequireDefault(_wxParse),_comment_list=require("./../components/comment_list.js"),_comment_list2=_interopRequireDefault(_comment_list),goodsDetail=function(e){function t(){var e,a,r,n;_classCallCheck(this,t);for(var i=arguments.length,o=Array(i),s=0;s<i;s++)o[s]=arguments[s];return a=r=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),r.config={navigationBarTitleText:"商品详情"},r.data={winWidth:0,winHeight:"100%",goodsId:0,detail:{},good_bigimg:[],startTime:"",endTime:"",hidden:!0,animationData:"",orderType:1,orderNum:1,isFavorite:!1,isValidDate:!0,canOrder:!0,purchasetype:1,purchaseText:"立即购买",special:0,commentList:[{url:"../images/icon_nav_01_new.png",name:"浪子天涯",time:"2017-10-01 10:10",content:"东西收到,很满意!!真的是超级好的卖家,解答疑问不厌其烦,细致认真,关键是东西好,而且货物发得超快,包装仔细,值得信赖!",start:4.5,children:[{content:"跟你交易次次都这么成功和开心的．．希望我们以后有更多的交易吧．．．哈哈"}]},{url:"../images/icon_nav_02_new.png",name:"勇闯天下",time:"2017-10-01 10:10",content:"太感谢了，衣服很漂亮，朋友很喜欢，最主要的是买家太好了~~~大大的赞一个。。。 衣服，很合身",start:4,children:[]}],commentList1:[]},r.components={commentList:_comment_list2.default},r.computed={},r.events={},r.methods={waiting:function(){console.log("@暂未开通，敬请期待!")},homePage:function(){_wepy2.default.switchTab({url:"/pages/home"})},moreComment:function(){_wepy2.default.navigateTo({url:"/pages/comment"})},previewImage:function(e){var t=e.target.dataset.src,a=[],r=this.detail.photoList;Object.keys(r).forEach(function(e){a.push(r[e].photo)}),wx.previewImage({current:t,urls:a})},bindOrderNumInput:function(e){this.orderNum=e.detail.value},takeOrder:function(){_wepy2.default.navigateTo({url:"/pages/info"})},takeCart:function(){this.canOrder&&(this.showConfirmData(),this.orderType=1)},takeFavorite:function(){1==this.isFavorite?(this.goodsUnFavorite(),console.log("取消收藏"),console.log(this.isFavorite)):(this.goodsFavorite(),console.log("收藏"))},closeModel:function(){var e=this;this.winHeight="100%",this.animation.height(0).step(),this.setData({animationData:this.animation.export()}),setTimeout(function(){e.hidden=!0,e.$apply()},100)},confirmTake:function(){1==this.orderType?this.doTakeCart():2==this.orderType&&this.doTakeOrder()},jiaBtnTap:function(e){this.orderNum++},jianBtnTap:function(){this.orderNum>1&&this.orderNum--},selAttr:function(e){for(var t=e.currentTarget.dataset.id,a=e.currentTarget.dataset.nameid,r=e.currentTarget.dataset.index,n=0;n<this.detail.goodsSkuNameList.length;n++)for(var i=this.detail.goodsSkuNameList[n].skuValList,o=0;o<i.length;o++){var s=i[o];if(s.skuNameId==a&&(s.current=!1,s.skuValId==t)){s.current=!0,this.detail.goodsSkuValIds[r]=t;for(var u=0;u<this.detail.goodsSkuList.length;u++){JSON.parse(this.detail.goodsSkuList[u].skuValIds).toArray;if(console.log("goodskuids..."+this.detail.goodsSkuList[u].skuValIds),console.log("this goodskuids..."+this.detail.goodsSkuValIds),"["+this.detail.goodsSkuValIds.toString()+"]"===this.detail.goodsSkuList[u].skuValIds){console.log("goodskuids equals..."),this.detail.stockNum=this.detail.goodsSkuList[u].stockNum,this.detail.price=this.detail.goodsSkuList[u].price,this.$apply();break}}}}},onShareAppMessage:function(e){return"button"===e.from&&console.log(e.target),{title:this.detail.name,path:"/pages/goods_detail?id="+this.goodsId,success:function(e){},fail:function(e){}}}},n=a,_possibleConstructorReturn(r,n)}return _inherits(t,e),_createClass(t,[{key:"onLoad",value:function(e){var t=this;this.orderNum=1,this.purchasetype=1,this.isFavorite=!1,this.isValidDate=!0,this.canOrder=!0,this.hidden=!0,this.winHeight="100%",t.detail={},t.$apply(),t.goodsId=e.id,void 0!=e.purchasetype&&(this.purchasetype=e.purchasetype),2==this.purchasetype?this.purchaseText="申请补货":this.purchaseText="立即购买",void 0!=e.special&&(this.special=e.special),t.getGoodsDetail(),console.log("special==="+this.special)}},{key:"onShow",value:function(){var e=wx.createAnimation({transformOrigin:"50% 50%",duration:200,timingFunction:"linear",delay:0});this.animation=e}},{key:"wxParseImgLoad",value:function(e){}},{key:"wxParseImgTap",value:function(e){var t=this,a=e.target.dataset.src,r=e.target.dataset.from;void 0!==r&&r.length>0&&wx.previewImage({current:a,urls:t.bindData[r].imageUrls})}},{key:"getGoodsDetail",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,a,r,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this,e.next=3,_api2.default.goodsDetail({query:{id:t.goodsId}});case 3:a=e.sent,r={},0==a.data.code?(n=a.data.data,t.detail=n,r.endTime=t.detail.validEndTime,r.startTime=t.detail.startTime,"0"==a.data.validDate&&(t.isValidDate=!1,1==this.purchasetype&&1!=this.special&&(this.canOrder=!1))):a.data.msg?_tip2.default.error(a.data.msg):_tip2.default.error("查看商品失败"),t.$apply();case 7:case"end":return e.stop()}},e,this)}));return e}()},{key:"addUserBrowser",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,a,r,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this,a=_wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO)||{},r=a.openid,e.next=5,_api2.default.addBrowser({query:{goodsId:t.goodsId,openId:r}});case 5:n=e.sent;case 6:case"end":return e.stop()}},e,this)}));return e}()},{key:"doTakeCart",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,a,r,n,i=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this,a=_wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO)||{},r=a.openid,e.next=5,_api2.default.addCart({query:{openId:r,goodsId:t.goodsId,goodsSkuId:this.detail.goodsSkuValIds,purchaseType:this.purchasetype,num:this.orderNum}});case 5:n=e.sent,0==n.data.code?(this.winHeight="100%",this.animation.height(0).step(),this.setData({animationData:this.animation.export()}),setTimeout(function(){i.hidden=!0,i.$apply()},100),_tip2.default.success("成功加入购物车")):n.data.msg?_tip2.default.error(n.data.msg):_tip2.default.error("无法加入购物车");case 7:case"end":return e.stop()}},e,this)}));return e}()},{key:"doTakeOrder",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,a,r,n,i=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this,a=_wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO)||{},r=a.openid,e.next=5,_api2.default.addCart({query:{openId:r,goodsId:t.goodsId,goodsSkuId:this.detail.goodsSkuValIds,purchaseType:this.purchasetype,num:this.orderNum}});case 5:n=e.sent,0==n.data.code?(this.winHeight="100%",this.animation.height(0).step(),this.setData({animationData:this.animation.export()}),setTimeout(function(){i.hidden=!0,i.$apply()},100),_wepy2.default.navigateTo({url:"/pages/comfire_order?goodsId="+t.goodsId+"&purchasetype="+t.purchasetype})):n.data.msg?_tip2.default.error(n.data.msg):_tip2.default.error("无法立刻购买");case 7:case"end":return e.stop()}},e,this)}));return e}()},{key:"showConfirmData",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.animation.height("783rpx").step(),this.setData({animationData:this.animation.export()}),setTimeout(function(){t.hidden=!1;var e=_wepy2.default.getStorageSync(_constant.SYSTEM_INFO);t.winHeight=e.windowHeight,t.$apply()},100);case 3:case"end":return e.stop()}},e,this)}));return e}()},{key:"goodsIsFavorite",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,a,r,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this,a=_wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO)||{},r=a.openid,e.next=5,_api2.default.goodsIsFavorite({query:{openId:r,goodsId:t.goodsId}});case 5:n=e.sent,0==n.data.code?1==n.data.isFavorite?(this.isFavorite=!0,console.log(this.isFavorite)):this.isFavorite=!1:(console.log("查看商品收藏失败"),n.data.msg?_tip2.default.error(n.data.msg):_tip2.default.error("查看商品收藏失败")),t.$apply();case 8:case"end":return e.stop()}},e,this)}));return e}()},{key:"goodsFavorite",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,a,r,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this,a=_wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO)||{},r=a.openid,e.next=5,_api2.default.goodsFavorite({query:{openId:r,goodsId:t.goodsId}});case 5:n=e.sent,0==n.data.code?(console.log("===========商品收藏成功========="),this.isFavorite=!0,_tip2.default.toast("收藏成功")):(console.log(n.data),_tip2.default.error("收藏失败")),t.$apply();case 8:case"end":return e.stop()}},e,this)}));return e}()},{key:"goodsUnFavorite",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,a,r,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this,a=_wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO)||{},r=a.openid,e.next=5,_api2.default.goodsUnFavorite({query:{openId:r,goodsId:t.goodsId}});case 5:n=e.sent,0==n.data.code?(console.log("===========商品取消收藏成功========="),_tip2.default.toast("取消收藏成功"),this.isFavorite=!1):(console.log(n.data),_tip2.default.error("取消收藏失败")),t.$apply();case 8:case"end":return e.stop()}},e,this)}));return e}()}]),t}(_wepy2.default.page);Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(goodsDetail,"pages/goods_detail"));