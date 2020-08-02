if (self.CavalryLogger) { CavalryLogger.start_js(["3JXqX"]); }

__d("GroupChatMessageBlockAlert",["fbt","DialogX","GenderConst","MessengerParticipants.bs","React","XUIDialogBody.react","XUIDialogButton.react","XUIDialogFooter.react","XUIDialogTitle.react"],(function(a,b,c,d,e,f,g){var h=b("React");a={show:function(a,c,d){a=new(b("DialogX"))({width:445},h.jsxs("div",{children:[h.jsx(b("XUIDialogTitle.react"),{children:g._("See Conversations?")}),h.jsx(b("XUIDialogBody.react"),{children:this.dialogBodyText(a)}),h.jsxs(b("XUIDialogFooter.react"),{children:[h.jsx(b("XUIDialogButton.react"),{action:"cancel",label:this.leaveGroupButton(),onClick:function(){return d()}}),h.jsx(b("XUIDialogButton.react"),{use:"confirm",action:"cancel",label:this.openChatButton(),onClick:function(){return c()}})]})]}));a.show()},openChatButton:function(){return g._("See Conversation")},leaveGroupButton:function(){return g._("Leave Group")},dialogBodyText:function(a){if(a.length!==1)return g._("People you've blocked are in this conversation. If you see this conversation, you'll get each other's messages to the group.");else{var c="";b("MessengerParticipants.bs").get(a.pop(),function(a){switch(a.gender){case b("GenderConst").FEMALE_SINGULAR:c=g._("{name} is in this group conversation but you've blocked her. If you see this conversation, you'll see her messages to the group and she'll see yours.",[g._param("name",a.short_name)]);break;case b("GenderConst").MALE_SINGULAR:c=g._("{name} is in this group conversation but you've blocked him. If you see this conversation, you'll see his messages to the group and he'll see yours.",[g._param("name",a.short_name)]);break;default:c=g._("{name} is in this group conversation but you've blocked them. If you see this conversation, you'll see their messages to the group and they'll see yours.",[g._param("name",a.short_name)])}});return c}}};e.exports=a}),null);
__d("GroupChatMessageIgnoreAlert",["fbt","CurrentUser","DialogX","IgnoreMessagesTypedLogger","MessengerParticipants.bs","React","XUIDialogBody.react","XUIDialogButton.react","XUIDialogFooter.react","XUIDialogTitle.react","cxMargin","intlList"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React");a={show:function(a,c,d,e){var f=b("CurrentUser").isWorkUser();a=new(b("DialogX"))({width:445},h.jsxs("div",{children:[h.jsx(b("XUIDialogTitle.react"),{children:f?g._("Permanently Hide chat?"):g._("Ignore group?")}),h.jsxs(b("XUIDialogBody.react"),{children:[h.jsx("div",{children:this._getDialogBodyPeopleInGroupText(a,f)}),h.jsx("div",{className:"_3-8x",children:this._getDialogBodyEffectText(f)})]}),h.jsxs(b("XUIDialogFooter.react"),{children:[h.jsx(b("XUIDialogButton.react"),{action:"cancel",label:this._getIgnoreGroupButton(f),onClick:function(){return e()}}),h.jsx(b("XUIDialogButton.react"),{use:"confirm",action:"cancel",label:this._getOpenChatButton(f),onClick:function(){return d()}})]})]}));a.show();new(b("IgnoreMessagesTypedLogger"))().setEvent("group_with_ignored_person_warning").setThreadID(c).setPlatform("chat_tabs").log()},_getOpenChatButton:function(a){return a?g._("See Chat"):g._("See Group")},_getIgnoreGroupButton:function(a){return a?g._("Permanently Hide"):g._("Ignore Group")},_getDialogBodyEffectText:function(a){return a?g._("If you permanently hide this chat, you can find it in 'Permanently Hidden'."):g._("If you ignore this group, you can find it in Filtered Messages.")},_getDialogBodyPeopleInGroupText:function(a,c){if(a.length===0)return c?g._("People you've permanently hidden are in this chat."):g._("People you've ignored are in this group.");var d="";b("MessengerParticipants.bs").getMulti(a,function(a){a=Object.values(a);a=a;d=c?g._("This chat has members, {Message sender's names}, who you have permanently hidden.",[g._param("Message sender's names",b("intlList")(a.map(function(a){return a.name})))]):g._("This group has members, {Message sender's names}, whose messages you've ignored.",[g._param("Message sender's names",b("intlList")(a.map(function(a){return a.name})))])});return d}};e.exports=a}),null);
__d("MessengerTabsThreadSearchStore",["cx","ImmutableObject","MercurySearchContextResults","MercurySearchSnippetResults","MercurySingletonProvider","MessengerState.bs","MessengerStore","MessengerThreadSearchActions","immutable"],(function(a,b,c,d,e,f,g){"use strict";a=b("immutable").List;c=b("immutable").Record;var h=c({downExhausted:null,loading:!1,messages:null,results:a(),selectedIndex:0,threadID:null,upExhausted:null,mid:null});d=function(a){babelHelpers.inheritsLoose(c,a);function c(c){var d;d=a.call(this)||this;d.$MessengerTabsThreadSearchStore1={};d.$MessengerTabsThreadSearchStore3=c;d.$MessengerTabsThreadSearchStore2=new(b("MercurySearchSnippetResults"))(c);return d}c.get=function(){return i.get()};var d=c.prototype;d.getThreadState=function(a){a=this.$MessengerTabsThreadSearchStore1[a];return a?a:new h()};d.__onDispatch=function(a){var c=this;if(!this.$MessengerTabsThreadSearchStore2)return;var d=a.threadID;if(!d)return;switch(a.type){case b("MessengerThreadSearchActions").Types.UPDATE_THREAD_STATE:var e=a.mid;if(!e){this.$MessengerTabsThreadSearchStore1[d]=new h();this.emitChange();return}var f=this.$MessengerTabsThreadSearchStore1[d];f||(f=new h());if(e!=f.mid){this.$MessengerTabsThreadSearchStore1[d]=f.merge({threadID:d,mid:e});b("MercurySearchContextResults").getSearchContext(this.$MessengerTabsThreadSearchStore4(d),d,function(a){return c.setMessagesForThread(a,d)});return}break;case b("MessengerThreadSearchActions").Types.GET_MORE_CONTEXT:if(!this.$MessengerTabsThreadSearchStore1[d])return;this.$MessengerTabsThreadSearchStore1[d]=this.$MessengerTabsThreadSearchStore1[d].set("loading",!0);b("MercurySearchContextResults").getMoreSearchContext(this.$MessengerTabsThreadSearchStore4(d),d,a.direction,function(a){return c.setMessagesForThread(a,d)});this.emitChange();break}};d.setMessagesForThread=function(a,c){var d=this.$MessengerTabsThreadSearchStore1[c];d||(d=new h());if(a.down_exhausted){if(this.$MessengerTabsThreadSearchStore1[c].messages){var e=this.$MessengerTabsThreadSearchStore1[c].messages.map(function(a){return a.message_id}).toArray();b("MessengerState.bs").invalidateSearchedMessages(this.$MessengerTabsThreadSearchStore3,e)}this.$MessengerTabsThreadSearchStore1[c]=new h();this.emitChange();return}e=b("MessengerState.bs").getMessagesFromIDs(this.$MessengerTabsThreadSearchStore3,[].concat(a.up_message_ids,a.message_id,a.down_message_ids)).map(function(c){if(c&&c.message_id===a.message_id)if(!d.results.isEmpty()){var e=d.results.get(d.selectedIndex).toJS(),f=e.matched_keywords,g=c.body.indexOf(e.body);e=Object.keys(e.matched_keywords).map(function(a){return{offset:g+Number(a),length:f[a].length,entity:{url:""},className:"__in"}});return new(b("ImmutableObject"))(babelHelpers["extends"]({},c,{ranges:c.ranges?c.ranges.concat(e):e}))}else return new(b("ImmutableObject"))(babelHelpers["extends"]({},c,{isSelected:!0}));return new(b("ImmutableObject"))(babelHelpers["extends"]({},c))});this.$MessengerTabsThreadSearchStore1[c]=d.merge({downExhausted:a.down_exhausted,loading:!1,messages:e,upExhausted:a.up_exhausted});this.emitChange()};d.$MessengerTabsThreadSearchStore4=function(a){a=this.$MessengerTabsThreadSearchStore1[a];return!a?"":a.mid||a.results.getIn([a.selectedIndex,"message_id"])};return c}(b("MessengerStore"));var i=new(b("MercurySingletonProvider"))(d);e.exports=d}),null);
__d("P2PChatThreadBanner.react",["cx","ix","Image.react","Layout.react","P2PAPI","P2PLogger","React","prop-types"],(function(a,b,c,d,e,f,g,h){"use strict";var i=b("Layout.react").FillColumn,j=b("Layout.react").Column,k=b("React"),l=new Set();a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=!1,d.log=function(a,c){b("P2PLogger").log(a,babelHelpers["extends"]({www_event_flow:d.props.loggerEventFlow},c))},d.handleClick=function(a){a.stopPropagation(),d.props.onClick&&d.props.onClick(),d.log("UI_Actn_Chat_Thread_Banner_Clicked",{}),b("P2PAPI").incrementBannerDismissals(d.props.bannerType)},d.handleClose=function(a){a.stopPropagation(),d.log("UI_Actn_Chat_Thread_Banner_Dismissed",{}),b("P2PAPI").incrementBannerDismissals(d.props.bannerType)},d.hasRenderedSameBanner=function(){return!d.$1&&l.has(d.props.bannerType)},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentDidMount=function(){var a=this.props.bannerType;l.has(a)||(l.add(a),this.$1=!0,this.log("UI_Actn_Chat_Thread_Banner_Viewed",{}),b("P2PAPI").incrementBannerViews(this.props.bannerType))};d.render=function(){var a,c;if(this.hasRenderedSameBanner())return null;this.props.bodyText&&(a=k.jsx("div",{className:"_1w2e",children:this.props.bodyText}));this.props.buttonText&&(c=k.jsx("a",{className:"_2hrk",children:this.props.buttonText}));return k.jsxs("div",{className:"_1w2f",onClick:this.handleClick,role:"presentation",children:[k.jsx("div",{className:"_3jht",onClick:this.handleClose,role:"presentation",children:k.jsx(b("Image.react"),{className:"_47dg",height:9,src:h("94353"),width:9})}),k.jsxs(b("Layout.react"),{children:[k.jsx(j,{className:"_1w2g",children:k.jsx(b("Image.react"),{className:"_1w2h",height:15,src:h("94443"),width:15})}),k.jsxs(i,{className:"_1w2i",children:[k.jsx("div",{className:"_1w2j"+(a?" _1w2k":""),children:this.props.titleText}),a,c]})]})]})};return c}(k.Component);a.propTypes={bannerType:(c=b("prop-types")).string.isRequired,bodyText:c.string,buttonText:c.string,loggerEventFlow:c.string.isRequired,onClick:c.func,titleText:c.string.isRequired};e.exports=a}),null);
__d("P2PBannerStore",["invariant","EventEmitter","P2PActionConstants","P2PAPI","P2PDispatcher"],(function(a,b,c,d,e,f,g){"use strict";var h={},i=!1,j=!1;a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var c;c=a.call(this)||this;b("P2PDispatcher").register(c.onEventDispatched.bind(babelHelpers.assertThisInitialized(c)));return c}var d=c.prototype;d.onEventDispatched=function(a){var c=a.type;a=a.data;switch(c){case b("P2PActionConstants").BANNER_STATES_UPDATED:this.handleBannerStatesUpdated(a);this.emit("change");break;case b("P2PActionConstants").BANNER_DISMISSED:this.handleBannerDismissed(a);this.emit("change");break;case b("P2PActionConstants").BANNER_COMPLETED:this.handleBannerCompleted(a);this.emit("change");break}};d.handleBannerStatesUpdated=function(a){i=!0,h=a};d.handleBannerDismissed=function(a){a=this.getBannerState(a);a.hasBeenDismissed=!0};d.shouldShowBanner=function(a){if(!j){b("P2PAPI").getBannerStates();j=!0;return!1}if(!i)return!1;a=this.getBannerState(a);return a.eligible&&!a.hasBeenDismissed};d.handleBannerCompleted=function(a){a=this.getBannerState(a);a.eligible=!1};d.getBannerState=function(a){var b=h[a];b||g(0,5104,a);return b};return c}(b("EventEmitter"));e.exports=new a()}),null);
__d("P2PPlatformContextStore",["Arbiter","ChannelConstants","CurrentUser","EventEmitter","ImmutableObject","MercuryIDs","P2PActionConstants","P2PActions","P2PAPI","P2PDispatcher"],(function(a,b,c,d,e,f){"use strict";var g=new Map(),h=new Map(),i;a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var c;c=a.call(this)||this;i=b("P2PDispatcher").register(c.onEventDispatched.bind(babelHelpers.assertThisInitialized(c)));b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("P2P/PlatformContextNew"),c.handleChannelUpdated.bind(babelHelpers.assertThisInitialized(c)));b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("P2P/PlatformContextEligibleItemUpdated"),c.handleChannelChanged.bind(babelHelpers.assertThisInitialized(c)));b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("P2P/PlatformContextDismissed"),c.handleChannelChanged.bind(babelHelpers.assertThisInitialized(c)));return c}var d=c.prototype;d.onEventDispatched=function(a){var c=a.type;a=a.data;switch(c){case b("P2PActionConstants").PLATFORM_CONTEXT_ADDED:this.handlePlatformContextAdded(a);this.emit("change");break;case b("P2PActionConstants").PLATFORM_CONTEXT_BANNER_DISMISSED:this.handlePlatformContextBannerDisimssed(a);this.emit("change");break;case b("P2PActionConstants").PLATFORM_CONTEXT_PRODUCT_ITEM_SOLD:this.handlePlatformContextProductItemSold(a);this.emit("change");break;case b("P2PActionConstants").PLATFORM_CONTEXT_CHANGED:this.handlePlatformContextChanged(a);this.emit("change");break}};d.handleChannelUpdated=function(a,c){a=c.obj;b("P2PActions").addPlatformContext(a)};d.handleChannelChanged=function(a,c){a=c.obj;b("P2PActions").platformContextChanged(a)};d.handlePlatformContextAdded=function(a){this.setPlatformContext(a)};d.handlePlatformContextAddedError=function(a){h.set(a.itemID,a.error)};d.handlePlatformContextSaveErrorsCleared=function(a){h["delete"](a)};d.handlePlatformContextChanged=function(a){var b=this;g.forEach(function(c,d){c.id===a.id&&b.setPlatformContext(a)})};d.handlePlatformContextBannerDisimssed=function(a){var c=this;g.forEach(function(d,e){d.id===a&&(c.isViewerSellerForPlatformContext(d)?d=b("ImmutableObject").set(d,{banner:b("ImmutableObject").set(d.banner,{shouldShowToSeller:!1})}):c.isViewerBuyerForPlatformContext(d)&&(d=b("ImmutableObject").set(d,{banner:b("ImmutableObject").set(d.banner,{shouldShowToBuyer:!1})})),g.set(e,d))})};d.handlePlatformContextProductItemSold=function(a){g.forEach(function(c,d){c.id===a&&(c=b("ImmutableObject").set(c,{product:b("ImmutableObject").set(c.product,{isAvailable:!1})}),g.set(d,c))})};d.setPlatformContext=function(a){var c,d=new(c=b("ImmutableObject"))(a);d=c.set(d,{product:new c(a.product)});d=c.set(d,{banner:new c(a.banner)});g.set(this.getOtherUserIDForPlatformContext(a),d)};d.shouldShowBanner=function(a){var c;if(!a)return!1;c=this.getPlatformContextByOtherUserID(a);if(!c){g.set(a,new(b("ImmutableObject"))({}));b("P2PAPI").getPlatformContextByOtherUserID({otherUserID:a});return!1}a=c.banner;return!!(this.isViewerSellerForPlatformContext(c)&&a.shouldShowToSeller||this.isViewerBuyerForPlatformContext(c)&&a.shouldShowToBuyer)};d.isViewerSellerForPlatformContext=function(a){return a.sellerID===b("CurrentUser").getID()};d.isViewerBuyerForPlatformContext=function(a){return a.buyerID===b("CurrentUser").getID()};d.getOtherUserIDForPlatformContext=function(a){return this.isViewerSellerForPlatformContext(a)?a.buyerID:a.sellerID};d.getPlatformContextByOtherUserID=function(a){return g.get(a)};d.getThreadIDFromPlatformContext=function(a){a=this.getOtherUserIDForPlatformContext(a);return b("MercuryIDs").getThreadIDFromUserID(a)};d.getSaveError=function(a){return h.get(a)};d.getDispatchToken=function(){return i};return c}(b("EventEmitter"));e.exports=new a()}),null);
__d("P2PMessageSellerConfirmationDialog.react",["cx","fbt","ix","Image.react","P2PButton.react","P2PDialog.react","P2PDialogBody.react","P2PDialogFooter.react","P2PListRow.react","P2PText.react","React","XUICloseButton.react","cxMargin","prop-types"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=b("React");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return j.jsxs(b("P2PDialog.react"),{width:480,children:[j.jsxs(b("P2PDialogBody.react"),{className:"_4-ft",children:[j.jsx(b("XUICloseButton.react"),{className:"_4-fu",onClick:this.props.onCancel}),j.jsxs(b("P2PListRow.react"),{offsetRight:16,offsetBottom:0,children:[j.jsx(b("Image.react"),{height:100,src:i("94406"),width:105}),j.jsxs("div",{children:[j.jsx(b("P2PText.react"),{className:"_3-94",size:"large",type:"primary",weight:"bold",children:h._("Connect with the seller before you pay")}),j.jsx(b("P2PText.react"),{size:"medium",type:"primary",children:h._("Make sure to discuss price and logistics with the seller before you send payment for this item.")})]})]})]}),j.jsxs(b("P2PDialogFooter.react"),{children:[j.jsx(b("P2PButton.react"),{label:h._("Start Conversation"),onClick:this.props.onCancel}),j.jsx(b("P2PButton.react"),{label:h._("Continue to Pay"),onClick:this.props.onPay,use:"confirm"})]})]})};return c}(j.Component);a.propTypes={onCancel:b("prop-types").func.isRequired,onPay:b("prop-types").func.isRequired};e.exports=a}),null);
__d("P2PPlatformContextBannerShape",["React","prop-types"],(function(a,b,c,d,e,f){"use strict";b("React");c=(a=b("prop-types")).shape({shouldShowToBuyer:a.bool,shouldShowToSeller:a.bool,shouldShowPayNux:a.bool});e.exports=c}),null);
__d("P2PPlatformContextShape",["P2PPlatformContextBannerShape","P2PPlatformContextProductItemShape","React","prop-types"],(function(a,b,c,d,e,f){"use strict";b("React");c=(a=b("prop-types")).shape({id:a.string,banner:b("P2PPlatformContextBannerShape"),buyerID:a.string,product:b("P2PPlatformContextProductItemShape"),sellerID:a.string});e.exports=c}),null);
__d("P2PUserEligibilityStore",["EventEmitter","MercuryIDs","P2PActionConstants","P2PAPI","P2PDispatcher","P2PGKValues"],(function(a,b,c,d,e,f){"use strict";var g;a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var c;c=a.call(this)||this;g={};b("P2PDispatcher").register(c.onEventDispatched.bind(babelHelpers.assertThisInitialized(c)));return c}var d=c.prototype;d.onEventDispatched=function(a){var c=a.data;a=a.type;switch(a){case b("P2PActionConstants").USER_ELIGIBILITY_UDPATED:this.handleEligibilityUpdated(c);this.emit("change");break}};d.getEligibilityByUserIDs=function(a){var c=[],d,e,f={};for(var h=0;h<a.length;h++)e=a[h],d=g[e],d===void 0&&(g[e]=null,c.push(e)),f[e]=g[e];b("P2PGKValues").P2PEnabled&&c.length&&b("P2PAPI").getUserEligibility({userIDs:c});return f};d.getEligibilityByUserID=function(a){var b=this.getEligibilityByUserIDs([a]);return b[a]};d.getEligibilityByThreadID=function(a){return this.getEligibilityByUserID(b("MercuryIDs").getUserIDFromThreadID(a))};d.handleEligibilityUpdated=function(a){for(var b=0;b<a.length;b++)g[a[b].user_id]=a[b].p2p_eligible};return c}(b("EventEmitter"));e.exports=new a()}),null);
__d("XC2CPayNUXBannerImpressionsUpdateController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/c2c/pay_nux_banner_impressions/_update/",{})}),null);
__d("XGroupsReportToAdminController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ajax/groups/mall/report_to_admin/",{post_id:{type:"FBID"},comment_id:{type:"FBID"}})}),null);
__d("P2PProductItemChatThreadBanner.react",["cx","fbt","ix","AsyncRequest","BackgroundImage.react","ContextualLayerAutoFlip","CurrentUser","Image.react","Layout.react","LineClamp.react","Link.react","MercuryIDs","MessengerState.bs","P2PActions","P2PAPI","P2PLogger","P2PLinkConstants","P2PMessageSellerConfirmationDialog.react","P2PPlatformContextShape","P2PPlatformContextStore","P2PUserEligibilityStore","PopoverMenu.react","ReactComponentWithPureRenderMixin","React","createReactClass_DEPRECATED","ReactLayeredComponentMixin_DEPRECATED","ReactXUIMenu","StoreAndPropBasedStateMixin","Tooltip.react","XC2CPayNUXBannerImpressionsUpdateController","XGroupsReportToAdminController","XUIAmbientNUX.react","XUIButton.react","XUIGrayText.react","cxMargin"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=b("Layout.react").Column,k=b("Layout.react").FillColumn,l=b("React"),m=b("ReactXUIMenu").Item,n=!1,o=new Set();a=b("createReactClass_DEPRECATED")({displayName:"P2PProductItemChatThreadBanner",mixins:[b("ReactLayeredComponentMixin_DEPRECATED"),b("ReactComponentWithPureRenderMixin"),b("StoreAndPropBasedStateMixin")(b("P2PUserEligibilityStore"))],propTypes:{platformContext:b("P2PPlatformContextShape").isRequired},getInitialState:function(){return{showConfirmationDialog:!1,showNUX:!1}},statics:{calculateState:function(a){return{canSendToRecipient:b("P2PUserEligibilityStore").getEligibilityByThreadID(b("P2PPlatformContextStore").getThreadIDFromPlatformContext(a.platformContext))}}},componentDidMount:function(){var a=this.props.platformContext,c=b("P2PPlatformContextStore").getThreadIDFromPlatformContext(a);this.handleShouldShowPayNUX();o.has(c)||(o.add(c),b("P2PPlatformContextStore").isViewerSellerForPlatformContext(a)?this.log("UI_Actn_Platform_Banner_Seller_Viewed"):this.log("UI_Actn_Platform_Banner_Buyer_Viewed"))},componentDidUpdate:function(a,b){!b.canSendToRecipient&&this.state.canSendToRecipient&&this.handleShouldShowPayNUX()},log:function(a,c){var d={platform_logging_data:this.props.platformContext.product.loggingData};b("P2PLogger").log(a,babelHelpers["extends"]({www_event_flow:"UI_Flow_Platform_Banner"},d,c))},handleShouldShowPayNUX:function(){var a=this.props.platformContext;a=!n&&this.shouldRenderPayButton()&&a.banner.shouldShowPayNux;a&&(this.log("UI_Actn_Platform_Banner_Pay_Nux_Shown"),n=!0,this.setState({showNUX:!0}),new(b("AsyncRequest"))().setURI(b("XC2CPayNUXBannerImpressionsUpdateController").getURIBuilder().getURI()).setMethod("POST").send())},handleDismissClick:function(a){a.preventDefault();a=this.props.platformContext;b("P2PAPI").dismissPlatformContextBanner(a.id);b("P2PPlatformContextStore").isViewerSellerForPlatformContext(a)?this.log("UI_Actn_Platform_Banner_Seller_Hide_Clicked"):this.log("UI_Actn_Platform_Banner_Buyer_Hide_Clicked")},handleSoldClick:function(a){a.preventDefault(),b("P2PAPI").markSoldPlatformContextProductItem(this.props.platformContext.id),this.log("UI_Actn_Platform_Banner_Sold_Clicked")},handleRequestClick:function(a){a.preventDefault(),this.openSendMoneyFlyoutRequestTab(),this.log("UI_Actn_Platform_Banner_Request_Clicked")},hasNoMessagesFromSeller:function(){var a=this.props.platformContext,c=b("P2PPlatformContextStore").getThreadIDFromPlatformContext(a);c=b("MessengerState.bs").getCurrentlyLoadedMessages(b("CurrentUser").getID(),c);if(!c)return!0;var d=b("MercuryIDs").getParticipantIDFromUserID(a.sellerID);a=c.some(function(a){return a.author===d});return!a},handlePayClick:function(a){a.preventDefault(),this.hasNoMessagesFromSeller()?(this.setState({showConfirmationDialog:!0}),this.log("UI_ACTN_MESSAGE_SELLER_CONFIRM_DIALOG_SHOWN")):this.openSendMoneyFlyout()},openSendMoneyFlyoutRequestTab:function(){var a=this.props.platformContext,c=a.product,d=b("P2PPlatformContextStore").getThreadIDFromPlatformContext(a);b("P2PActions").chatSendViewOpened({amount:c.formattedAmount,memoText:c.name,openRequestTab:!0,platformData:{platformContextID:a.id,loggingData:c.loggingData},threadID:d})},openSendMoneyFlyout:function(){var a=this.props.platformContext,c=a.product,d=b("P2PPlatformContextStore").getThreadIDFromPlatformContext(a);b("P2PActions").chatSendViewOpened({threadID:d,amount:c.formattedAmount,platformData:{platformContextID:a.id,loggingData:c.loggingData}});this.setState({showNUX:!1});this.log("UI_Actn_Platform_Banner_Pay_Clicked")},handleImageClicked:function(){this.log("UI_Actn_Platform_Banner_Image_Clicked")},handleTitleClicked:function(){this.log("UI_Actn_Platform_Banner_Title_Clicked")},renderMarkSold:function(){var a=this.props.platformContext,c;if(!a.product.isAvailable)return null;b("P2PPlatformContextStore").isViewerSellerForPlatformContext(a)&&(c=l.jsx(b("Link.react"),{href:"#",onClick:this.handleSoldClick,children:h._("Mark Sold")}));return c},renderPayButton:function(){if(!this.shouldRenderPayButton())return null;var a=l.jsx(b("XUIButton.react"),{label:h._("Pay"),onClick:this.handlePayClick,ref:"pay_button",use:"confirm"});this.state.showNUX||(a=l.jsx(b("Tooltip.react"),{alignH:"right",display:"block",tooltip:h._("You can confirm the amount next."),children:a}));return l.jsx("div",{className:this.isCompactMode()?"":"_3-8x",children:a})},renderRequestButton:function(){return!this.shouldRenderRequestButton()?null:l.jsx(b("Link.react"),{className:"_f-n",href:"#",onClick:this.handleRequestClick,children:h._("Request Payment")})},shouldRenderPayButton:function(){var a=this.props.platformContext,c=b("P2PPlatformContextStore").isViewerBuyerForPlatformContext(this.props.platformContext);return!!(this.state.canSendToRecipient&&a.product.isAvailable&&c&&a.product.rawAmount.amount>0)},shouldRenderSellerActionsRow:function(){var a=this.props.platformContext,c=b("P2PPlatformContextStore").isViewerSellerForPlatformContext(a);return c&&a.product.isAvailable},shouldRenderRequestButton:function(){return!!(this.state.canSendToRecipient&&this.props.platformContext.product.rawAmount.amount>0)},getAmountText:function(){var a=this.props.platformContext;a=a.product;return a.rawAmount.amount>0?a.formattedAmount:h._("FREE")},renderAskingPriceRow:function(){var a=this.props.platformContext;a=a.product;if(a.isAvailable)return l.jsx(b("LineClamp.react"),{lines:1,lineHeight:16,children:l.jsx(b("XUIGrayText.react"),{shade:"light",children:h._("Price: {price of the item}",[h._param("price of the item",this.getAmountText())])})})},renderNameLine:function(){var a=this.props.platformContext;a=a.product;var c="dark",d;a.isAvailable||(c="light",d=h._("SOLD"));return l.jsx(b("Link.react"),{href:a.refURL||"#",onClick:this.handleTitleClicked,children:l.jsxs(b("XUIGrayText.react"),{shade:c,children:[d?"("+d+") ":null,a.name]})})},renderSellerActionsRow:function(){return!this.shouldRenderSellerActionsRow()?null:l.jsxs("div",{className:"_f-o",children:[this.renderMarkSold(),this.renderRequestButton()]})},renderImageColumn:function(){var a=this.props.platformContext;a=a.product;return this.isCompactMode()?null:l.jsx(j,{className:"_3-90",children:l.jsx("div",{className:"_5qnr",children:l.jsx("div",{className:"_5qn-",children:l.jsx(b("Link.react"),{href:a.refURL||"#",onClick:this.handleImageClicked,children:l.jsx(b("BackgroundImage.react"),{backgroundPosition:"50% 50%",backgroundSize:"cover",height:45,src:a.image,width:45})})})})})},renderPopoverMenu:function(){var a=this.props.platformContext;a=a.product;a=b("XGroupsReportToAdminController").getURIBuilder().setFBID("post_id",a.loggingData.post_id).getURI();a=l.jsxs(b("ReactXUIMenu"),{className:"_1z1u",children:[l.jsx(m,{className:"_1z1_",children:l.jsx("div",{onClick:this.handleDismissClick,role:"presentation",children:h._("Hide from conversation")})}),l.jsx(m,{ajaxify:a,rel:"async-post",children:h._("Report to admin")}),l.jsx(m,{href:b("P2PLinkConstants").helpCenterURI,target:"_blank",children:h._("Learn more")})]});return l.jsx(b("PopoverMenu.react"),{alignh:"right",layerBehaviors:[b("ContextualLayerAutoFlip")],menu:a,className:"_3fqa",children:l.jsx("div",{className:"_1z20",children:l.jsx(b("Link.react"),{className:"_1z21",href:"#"})})})},isCompactMode:function(){var a=this.props.platformContext;a=a.product;return!a.image||!a.isAvailable},onNUXCloseButtonClick:function(){this.setState({showNUX:!1})},renderLayers:function(){var a=this,c={};this.state.showNUX?c.ambientNUX=l.jsxs(b("XUIAmbientNUX.react"),{alignment:"left",contextRef:function(){return a.refs.pay_button},customwidth:234,onCloseButtonClick:this.onNUXCloseButtonClick,position:"above",shown:!0,width:"custom",children:[l.jsx("div",{className:"_3-95",children:h._("You can pay for this item right from your messages.")}),l.jsxs("div",{children:[l.jsx(b("Image.react"),{className:"_3fqb",height:14,src:i("94455"),width:10}),l.jsx("span",{className:"_3fqc",children:h._("It's free and secure.")})]})]}):this.state.showConfirmationDialog&&(c.confirmationDialog=l.jsx(b("P2PMessageSellerConfirmationDialog.react"),{onCancel:function(){a.setState({showConfirmationDialog:!1}),a.log("UI_ACTN_MESSAGE_SELLER_CONFIRM_DIALOG_CANCEL_CLICK")},onPay:function(){a.setState({showConfirmationDialog:!1}),a.openSendMoneyFlyout(),a.log("UI_ACTN_MESSAGE_SELLER_CONFIRM_DIALOG_PAY_CLICK")}}));return c},render:function(){return l.jsx("div",{className:"_319c"+(this.isCompactMode()?" _5qn_":""),children:l.jsxs(b("Layout.react"),{children:[this.renderImageColumn(),l.jsx(k,{children:l.jsx("div",{className:"_5qo0",children:l.jsxs("div",{className:"_5qo1",children:[l.jsx(b("LineClamp.react"),{lines:1,lineHeight:16,children:this.renderNameLine()}),this.renderAskingPriceRow(),this.renderSellerActionsRow()]})})}),l.jsx(j,{children:l.jsxs("div",{className:"_1_68",children:[this.renderPopoverMenu(),this.renderPayButton()]})})]})})}});e.exports=a}),null);
__d("P2PSendMoneyNUXChatThreadBanner.react",["MercuryIDs","P2PActions","P2PChatThreadBanner.react","P2PUserEligibilityStore","React","StoreAndPropBasedStateMixin","createReactClass_DEPRECATED","prop-types"],(function(a,b,c,d,e,f){"use strict";var g=b("React");c=b("createReactClass_DEPRECATED")({displayName:"P2PSendMoneyNUXChatThreadBanner",mixins:[b("StoreAndPropBasedStateMixin")(b("P2PUserEligibilityStore"))],propTypes:{bannerType:(a=b("prop-types")).string.isRequired,bodyText:a.string,buttonText:a.string,loggerEventFlow:a.string.isRequired,openRequestTab:a.bool,threadID:a.string.isRequired,titleText:a.string.isRequired},getDefaultProps:function(){return{openRequestTab:!1}},statics:{calculateState:function(a){a=b("MercuryIDs").isGroupChat(a.threadID)||b("P2PUserEligibilityStore").getEligibilityByThreadID(a.threadID);return{isThreadEligible:a}}},handleClick:function(){b("P2PActions").chatSendViewOpened({openRequestTab:this.props.openRequestTab,threadID:this.props.threadID})},render:function(){return!this.state.isThreadEligible?null:g.jsx(b("P2PChatThreadBanner.react"),babelHelpers["extends"]({},this.props,{onClick:this.handleClick}))}});e.exports=c}),null);
__d("P2PRequestSenderNUXChatThreadBanner.react",["fbt","P2PSendMoneyNUXChatThreadBanner.react","React","prop-types"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return h.jsx(b("P2PSendMoneyNUXChatThreadBanner.react"),{bannerType:"REQUEST_SENDER_NUX",bodyText:g._("Get paid back for dinner, rent or anything else."),buttonText:g._("Get Started"),openRequestTab:!0,loggerEventFlow:"UI_Flow_Request_Sender_NUX_Chat_Thread_Banner",threadID:this.props.threadID,titleText:g._("Now you can request money!")})};return c}(h.Component);a.propTypes={threadID:b("prop-types").string.isRequired};e.exports=a}),null);
__d("P2PSenderNUXChatThreadBanner.react",["fbt","P2PSendMoneyNUXChatThreadBanner.react","React","prop-types"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return h.jsx(b("P2PSendMoneyNUXChatThreadBanner.react"),{bannerType:"SENDER_NUX",bodyText:g._("It's free and secure."),buttonText:g._("Get Started"),loggerEventFlow:"UI_Flow_Sender_NUX_Chat_Thread_Banner",threadID:this.props.threadID,titleText:g._("Now You Can Send Money!")})};return c}(h.Component);a.propTypes={threadID:b("prop-types").string.isRequired};e.exports=a}),null);
__d("P2PChatThreadBannerContainer.react",["P2PBannerStore","P2PPlatformContextStore","P2PProductItemChatThreadBanner.react","P2PRequestSenderNUXChatThreadBanner.react","P2PSenderNUXChatThreadBanner.react","React","StoreAndPropBasedStateMixin","createReactClass_DEPRECATED","prop-types"],(function(a,b,c,d,e,f){"use strict";var g=b("React");a=b("createReactClass_DEPRECATED")({displayName:"P2PChatThreadBannerContainer",mixins:[b("StoreAndPropBasedStateMixin")(b("P2PBannerStore"),b("P2PPlatformContextStore"))],propTypes:{isVisible:b("prop-types").bool,otherUserID:b("prop-types").string,threadID:b("prop-types").string},statics:{calculateState:function(a){return{productItemBannerShown:b("P2PPlatformContextStore").shouldShowBanner(a.otherUserID),requestSenderNUXBannerShown:b("P2PBannerStore").shouldShowBanner("REQUEST_SENDER_NUX"),senderNUXBannerShown:b("P2PBannerStore").shouldShowBanner("SENDER_NUX")}}},renderRequestSenderNUXBanner:function(){return!this.props.threadID||!this.props.isVisible?null:g.jsx(b("P2PRequestSenderNUXChatThreadBanner.react"),{threadID:this.props.threadID})},renderSenderNUXBanner:function(){return!this.props.threadID||!this.props.isVisible?null:g.jsx(b("P2PSenderNUXChatThreadBanner.react"),{threadID:this.props.threadID})},renderProductItemBanner:function(){var a=this.props.otherUserID,c;a&&(c=b("P2PPlatformContextStore").getPlatformContextByOtherUserID(a));return!c?null:g.jsx(b("P2PProductItemChatThreadBanner.react"),{platformContext:c})},render:function(){var a;this.state.senderNUXBannerShown?a=this.renderSenderNUXBanner():this.state.requestSenderNUXBannerShown?a=this.renderRequestSenderNUXBanner():this.state.productItemBannerShown&&(a=this.renderProductItemBanner());return g.jsx("div",{children:a})}});e.exports=a}),null);