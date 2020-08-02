if (self.CavalryLogger) { CavalryLogger.start_js(["1OzKQ"]); }

__d("BlueBarFocusListener",["CSS","Deferred","Event","TimeSlice","promiseDone"],(function(a,b,c,d,e,f){var g="f_key",h="f_click",i=null,j=function(){i=null};function k(a){b("CSS").removeClass(a,g),b("CSS").removeClass(a,h)}var l=b("TimeSlice").guard(function(a){i&&i.reject(),i=new(b("Deferred"))(),b("promiseDone")(i.getPromise().then(function(c){k(a),b("CSS").addClass(a,c)}),j,j)},"BlueBarFocusListener focusIn",{propagationType:b("TimeSlice").PropagationType.ORPHAN});function m(){i&&i.resolve(g)}function n(a){i&&i.reject(),b("CSS").removeClass(a,g),b("CSS").addClass(a,h)}function o(a){return function(b){a(b.getTarget())}}a={listen:function(a){if(!a)return;b("Event").listen(a,"focusout",o(k));b("Event").listen(a,"focusin",o(l));b("Event").listen(a,"click",o(n));b("Event").listen(a,"keyup",m)}};e.exports=a}),null);
__d("NotificationPermissionNotice.react",["cx","fbt","Event","Keys","React","XUIAmbientNUX.react","prop-types"],(function(a,b,c,d,e,f,g,h){var i=b("React"),j=[];a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.componentDidMount=function(){var a=this;j.push(b("Event").listen(window,"mousedown",this.props.onHide));j.push(b("Event").listen(window,"keydown",function(c){c.keyCode===b("Keys").ESC&&a.props.onHide()}))};d.componentWillUnmount=function(){while(j.length>0){var a=j.pop();a.remove()}};d.renderLayers=function(){var a=this,c=this.props.shortText?h._("Click the lock to give {browser_name} permission to send you desktop notifications.",[h._param("browser_name",this.props.browserName)]):h._("If you change your mind, click the lock to give {browser_name} permission to send you desktop notifications.",[h._param("browser_name",this.props.browserName)]);return i.jsx(b("XUIAmbientNUX.react"),{contextRef:function(){return a.refs.noticeAnchor},shown:!0,position:"below",onCloseButtonClick:this.props.onHide,children:c},"nux")};d.render=function(){return i.jsxs("span",{children:[i.jsx("span",{ref:"noticeAnchor",className:"_1_i1"}),this.renderLayers()]})};return c}(i.Component);a.propTypes={onHide:b("prop-types").func.isRequired,shortText:b("prop-types").bool,browserName:b("prop-types").string.isRequired};e.exports=a}),null);
__d("NotificationPermissionRequest.react",["cx","React","Spotlight.react","prop-types"],(function(a,b,c,d,e,f,g){var h=b("React");a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return h.jsx(b("Spotlight.react"),{shown:!0,onHide:this.props.onHide,children:h.jsx("div",{className:"_n3"})},"spotlight")};return c}(h.Component);a.propTypes={onHide:b("prop-types").func};e.exports=a}),null);
__d("FBAMetaMegaMenuLogger",["invariant","Bootloader"],(function(a,b,c,d,e,f,g){"use strict";function a(a){h("MegaMenu_NotificationBell_Toggle",{action:a?"open":"close"})}function c(a,b){a!==null&&a.match(/(\d+)\:(\d+)/)||g(0,518);a=a.split(":");var c=a[0];a=a[1];h("MegaMenu_Notification_Click",{recepient_id:c,notification_id:a,notifType:b})}function d(a){h("MegaMenu_NotificationBell_Show",{unseen_notification_count:a.toString()})}function h(a,c){b("Bootloader").loadModules(["FBAMetaLoggerWWW"],function(b){b=b.META_LOGGER;b.logEvent(a,c)},"FBAMetaMegaMenuLogger")}e.exports={logMegaMenuNotificationBellToggle:a,logMegaMenuNotificationClick:c,logMegaMenuNotificationBellShown:d}}),null);
__d("BrowserPushCommands",[],(function(a,b,c,d,e,f){a="browser_push_ack";b="browser_push_redirect";c="browser_push_window_visible";d={ACK:a,REDIRECT:b,WINDOW_VISIBLE:c};e.exports=d}),null);
__d("BrowserPushMessageRedirectUtil",["Bootloader"],(function(a,b,c,d,e,f){a=function(a){var c="(messages)(.*?)(?:(tid=))([^&]*)";a=a.match(c);if(!a)return!0;var d=a.pop();b("Bootloader").loadModules(["FantaTabActions"],function(a){a.openTab(d)},"BrowserPushMessageRedirectUtil");return!1};e.exports=a}),null);
__d("BrowserPushMessageHandler",["BrowserPushCommands","BrowserPushMessageRedirectUtil","EventListener","URI","URISchemes","isFacebookURI"],(function(a,b,c,d,e,f){var g,h;function i(a){if(a.data.command&&a.data.command===b("BrowserPushCommands").REDIRECT){if(typeof window.onbeforeunload==="function"&&window.onbeforeunload()===void 0)a.ports[0].postMessage({command:b("BrowserPushCommands").ACK,success:!0});else{a.ports[0].postMessage({command:b("BrowserPushCommands").ACK,success:!1});return}a=a.data.uri;if(/^([^.:/?#]+):/.test(a)&&!(g||(g=b("URISchemes"))).isAllowed(/^([^.:/?#]+):/.exec(a)[1])||!b("isFacebookURI")(new(h||(h=b("URI")))(a)))throw new Error("goURI: URI scheme rejected, URI: "+a);b("BrowserPushMessageRedirectUtil")(a)&&(window.location.href=a)}}a={registerRedirectHandler:function(){b("EventListener").listen(window,"message",function(a){a.origin===""&&i(a)}),navigator.serviceWorker&&navigator.serviceWorker.addEventListener&&navigator.serviceWorker.addEventListener("message",function(a){(navigator.serviceWorker&&navigator.serviceWorker.controller&&a.target&&a.target.controller&&a.target.controller===navigator.serviceWorker.controller||new RegExp("^"+window.location.protocol+"//"+window.location.host+"$").test(a.origin))&&i(a)})}};e.exports=a}),null);
__d("BrowserPushVisibilityChanger",["BrowserPushCommands","ClientServiceWorkerMessage","Visibility"],(function(a,b,c,d,e,f){function g(){new(b("ClientServiceWorkerMessage"))(b("BrowserPushCommands").WINDOW_VISIBLE,null).sendViaController()}a={listenForVisibility:function(){b("Visibility").isHidden()||g(),b("Visibility").addListener(b("Visibility").VISIBLE,g)}};e.exports=a}),null);
__d("MPushPermissionUtil",["BanzaiLogger","gkx"],(function(a,b,c,d,e,f){function a(a,c){c===void 0&&(c=!1);var d=b("gkx")("910664");d&&b("BanzaiLogger").log("ChromePushPermissionEventsLoggerConfig",{event:a});if(c){d=null;c="step";a==="allow"?(d="allow",c="conversion"):a==="deny"?d="deny":a==="install_ignore"?d="ignore":a==="turn_on_attempt"&&(d="show_browser_dialog");d!==null&&b("BanzaiLogger").log("NUXWizardLoggerConfig",{event:d,event_type:c,platform:"mobile",step:"turn_on_notification"})}}e.exports={logEvent:a}}),null);
__d("PushRegistrationUtils",[],(function(a,b,c,d,e,f){"use strict";var g={normalizeSubscriptionEndpoint:function(a){var b=a.endpoint;"subscriptionId"in a&&!new RegExp("/"+a.subscriptionId+"$").test(b)&&(b+="/"+a.subscriptionId);return b},setupPushRegistrationData:function(a,b){var c=g.normalizeSubscriptionEndpoint(a),d=null;a.toJSON?d=a.toJSON().keys:a.keys&&(d=a.keys);return{app_id:b,push_endpoint:c,subscription_keys:JSON.stringify(d)}}};e.exports=g}),null);
__d("XAsyncPushMuteController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/notifications/settings/push/mute/",{appid:{type:"Int",required:!0},push_endpoint:{type:"String",required:!0},mute_for:{type:"Enum",enumType:0}})}),null);
__d("XAsyncPushMuteStateController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/notifications/settings/push/mute/state/",{appid:{type:"Int",required:!0},push_endpoint:{type:"String",required:!0}})}),null);
__d("PushRegistration",["Promise","BrowserPushMessageHandler","BrowserPushPubKey","BrowserPushVisibilityChanger","MPushPermissionUtil","PushRegistrationUtils","ServiceWorkerRegistration","XAsyncPushMuteController","XAsyncPushMuteStateController","emptyFunction","gkx","promiseDone"],(function(a,b,c,d,e,f){var g=window.Notification,h=new Map();a=function(){"use strict";a.get=function(b,c){if(h.has(c))return h.get(c);b=new a(b,c);h.set(c,b);return b};function a(b,c){this.$3=b,this.appID=c,!a.$1&&!a.$2&&(a.$1=!1,a.$2=!1)}var c=a.prototype;c.getPushSubscription=function(){var c=this;return new(b("Promise"))(function(d,e){a.pushPermissionIsDenied()&&(b("MPushPermissionUtil").logEvent("permission_denied_or_blocked"),e(new Error("No permission or not supported"))),b("ServiceWorkerRegistration").getWorkerRegistration(c.$3).then(function(a){if(!a){d(null);return}a.pushManager.getSubscription().then(function(a){d(a)})["catch"](e)})["catch"](e)})};c.$4=function(a,c,d){a=a.getURIBuilder().getURI();c=new c(a);c.setData(b("PushRegistrationUtils").setupPushRegistrationData(d,this.appID));c.setMethod("post");c.send()};c.getMutedUntilInServer=function(a){var c=this;return new(b("Promise"))(function(d,e){c.getPushSubscription().then(function(f){if(f){f=b("PushRegistrationUtils").normalizeSubscriptionEndpoint(f);f=b("XAsyncPushMuteStateController").getURIBuilder().setString("push_endpoint",f).setInt("appid",c.appID).getURI();f=new a(f);f.listen("done",function(a){d(a.payload.muteUntilTimestampSec)});f.send()}else e("cannot check mute status for unsubscribed endpoint")})["catch"](e)})};c.muteNotifications=function(a,c){var d=this;return new(b("Promise"))(function(e,f){d.getPushSubscription().then(function(g){if(g){g=b("PushRegistrationUtils").normalizeSubscriptionEndpoint(g);g=b("XAsyncPushMuteController").getURIBuilder().setEnum("mute_for",a).setString("push_endpoint",g).setInt("appid",d.appID).getURI();g=new c(g);g.setMethod("POST");g.listen("done",function(b){a!==0&&b.payload.muteUntilTimestampSec===0?f("operation failed in server"):e(b.payload.muteUntilTimestampSec)});g.send()}else f("no subscription found")})["catch"](f)})};c.getSubscription=function(){var a=this;return new(b("Promise"))(function(c,d){a.getPushSubscription().then(function(a){a?c(b("PushRegistrationUtils").normalizeSubscriptionEndpoint(a)):c(null)})["catch"](d)})};c.maybeRegisterPushAgain=function(a,c){var d=this;return new(b("Promise"))(function(e,f){d.getPushSubscription().then(function(f){f?(d.$4(a,c,f),e(b("PushRegistrationUtils").normalizeSubscriptionEndpoint(f))):e(null)})["catch"](function(){e(null)})})};c.$5=function(c,d,e){var f=this;return new(b("Promise"))(function(b,g){if(a.$2&&!e){g(new Error("sending disable info already"));return}a.$2=!0;var h=c.getURIBuilder().getURI();h=new d(h.toString());h.setData({appid:f.appID,from_browser_settings:e});h.setMethod("post");h.listen?(h.listen("finally",b),h.listen("fail",function(){a.$2=!1,g()})):h.setErrorHandler&&h.setHandler?(h.setErrorHandler(function(){a.$2=!1,g()}),h.setHandler(b)):b();h.send()})};c.isPushRegistered=function(c,d,e,f,g,h){var i=this;g===void 0&&(g=!1);h===void 0&&(h=!1);b("BrowserPushMessageHandler").registerRedirectHandler();return new(b("Promise"))(function(j,k){i.getPushSubscription().then(function(k){j(!!k||c&&!a.pushPermissionIsPending()),k?g?i.$4(d,f,k):b("BrowserPushVisibilityChanger").listenForVisibility():!k&&c&&(a.pushPermissionIsOn()?i.registerPush(d,f,h)["catch"](function(){}):i.$5(e,f,!1))})["catch"](function(){c&&i.$5(e,f,!1),h&&b("ServiceWorkerRegistration").unregisterControllingWorker(),k()})})};c.$6=function(){return new(b("Promise"))(function(a,b){g.requestPermission(a)})};c.registerPushAndWaitForEndpoint=function(a,c,d){var e=this;d===void 0&&(d=!1);return new(b("Promise"))(function(b,f){e.$7(a,c,!0,null,d).then(function(a){if(typeof a!=="string"){f(new Error("registerPushImpl did not return an endpoint"));return}b(a)})["catch"](f)})};c.registerPushOnKaiOS=function(a,c,d){var e=this;return new(b("Promise"))(function(f,g){d.waitForKaiOS().done(function(){d.registerPush(function(d){d=JSON.parse(d.get("push_endpoint"));e.$4(a,c,d);f(b("PushRegistrationUtils").normalizeSubscriptionEndpoint(d))})})})};c.registerPush=function(a,c,d,e){d===void 0&&(d=!1);e===void 0&&(e=b("emptyFunction"));return this.registerPushWithFinishedCallBack(a,c,e,d)};c.registerPushWithFinishedCallBack=function(a,c,d,e){var f=this;e===void 0&&(e=!1);return new(b("Promise"))(function(b,g){f.$7(a,c,!1,d,e).then(function(a){if(typeof a!=="boolean"){g(new Error("registerPushImpl did not return a boolean"));return}b(a)})["catch"](g)})};c.$7=function(c,d,e,f,g){var h=this;if(a.$1)return new(b("Promise"))(function(a,b){b(new Error("registering already"))});if(!self.PushManager)return b("Promise").reject(new Error("PushManager not found."));a.$1=!0;return new(b("Promise"))(function(i,j){var k=b("ServiceWorkerRegistration").registerWorkerIfUnregistered(h.$3),l=h.$6();b("Promise").all([k,l]).then(function(k){var l=k[0];if(!a.pushPermissionIsOn()){g&&l.unregister();throw new Error("Push permission was denied")}e||i(!0);k=b("BrowserPushPubKey").appServerKey;var m=b("gkx")("1511920")&&k!=null&&k!="";m=m?{userVisibleOnly:!0,applicationServerKey:k}:{userVisibleOnly:!0};l.pushManager.subscribe(m).then(function(a){e&&i(b("PushRegistrationUtils").normalizeSubscriptionEndpoint(a)),h.$4(c,d,a),f&&f(),b("BrowserPushVisibilityChanger").listenForVisibility()})["catch"](function(b){a.$1=!1,g&&l.unregister(),j(b)})})["catch"](function(b){a.$1=!1,j(b)})})};c.unregisterPushAndSWOnKaiOS=function(a,c,d,e){var f=this;return new(b("Promise"))(function(b,g){f.$5(a,c,e).then(function(){d.unregisterPush(),b()})["catch"](g)})};c.unregisterPushAndSW=function(a,c){var d=this;return new(b("Promise"))(function(e,f){d.$5(a,c,!0).then(function(){b("promiseDone")(b("ServiceWorkerRegistration").unregisterControllingWorker(),e)})["catch"](f)})};c.unregisterPushOnly=function(a,c){var d=this;return new(b("Promise"))(function(b,e){d.getPushSubscription().then(function(f){f?f.unsubscribe().then(d.$5(a,c,!0)).then(function(){b(!0)})["catch"](e):e()})["catch"](e)})};a.pushPermissionIsPending=function(){return window.Notification&&window.Notification.permission==="default"};a.pushPermissionIsOn=function(){return window.Notification&&window.Notification.permission==="granted"};a.pushPermissionIsDenied=function(){return window.Notification&&window.Notification.permission==="denied"};return a}();e.exports=a}),null);
__d("XBrowserPushDisabledController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/notifications/client/push/disabled/",{})}),null);
__d("XPushRegisterServiceWorkerController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/push/register/service_worker/",{})}),null);
__d("incognito",["regeneratorRuntime","Promise","UserAgent","WebStorage","gkx"],(function(a,b,c,d,e,f){"use strict";var g;function a(){var a;return b("regeneratorRuntime").async(function(c){while(1)switch(c.prev=c.next){case 0:a=window.RequestFileSystem||window.webkitRequestFileSystem;if(!a){c.next=3;break}return c.abrupt("return",new(b("Promise"))(function(b){return a(window.TEMPORARY,10,function(){return b(!1)},function(){return b(!0)})}));case 3:if(!(b("UserAgent").isBrowser("IE >= 10")||b("UserAgent").isBrowser("Edge"))){c.next=5;break}return c.abrupt("return",!window.indexedDB);case 5:if(!b("UserAgent").isBrowser("Firefox >= 16")){c.next=7;break}return c.abrupt("return",new(b("Promise"))(function(a){var b=window.indexedDB.open("__test__");b.onsuccess=function(){return a(!1)};b.onerror=function(b){b.preventDefault(),a(!0)}}));case 7:if(!(b("gkx")("676917")&&(b("UserAgent").isPlatform("iOS")&&b("UserAgent").isBrowser("Safari >= 10.3")||b("UserAgent").isPlatform("Mac OS X")&&b("UserAgent").isBrowser("Safari >= 11.1")))){c.next=18;break}c.prev=8;window.openDatabase("sid","1.0","",0);c.next=16;break;case 12:c.prev=12;c.t0=c["catch"](8);if(!(c.t0.name==="SecurityError")){c.next=16;break}return c.abrupt("return",!0);case 16:c.next=20;break;case 18:if(!b("UserAgent").isBrowser("Safari")){c.next=20;break}return c.abrupt("return",!(g||(g=b("WebStorage"))).getLocalStorage());case 20:return c.abrupt("return",!1);case 21:case"end":return c.stop()}},null,this,[[8,12]])}e.exports=a}),null);
__d("BrowserPushDirectPromptInstaller",["Promise","Arbiter","AsyncRequest","BanzaiLogger","NotificationPermissionNotice.react","NotificationPermissionRequest.react","PushRegistration","QE2Logger","React","ReactDOM","XBrowserPushDisabledController","XBrowserPushXOutController","XPushRegisterServiceWorkerController","incognito"],(function(a,b,c,d,e,f){"use strict";var g=b("React"),h={},i,j=!1;function k(a,c,d){d===void 0&&(d="prompt");a=babelHelpers["extends"]({event:a,appid:c,surface:d},h);b("BanzaiLogger").log("BrowserPushLoggerConfig",a)}function l(){h.xout_count===0&&i&&b("QE2Logger").logExposureForUser(i)}function m(a){var c=b("XBrowserPushXOutController").getURIBuilder().getURI();new(b("AsyncRequest"))().setURI(c).setMethod("POST").send();k("xout",a)}function n(a){j||(j=!0,b("ReactDOM").unmountComponentAtNode(a))}function o(a,c,d,e,f){a=b("PushRegistration").get(a,c);k("turn_on",c);return a.registerPushWithFinishedCallBack(b("XPushRegisterServiceWorkerController"),b("AsyncRequest"),function(){b("Arbiter").inform("BrowserPushInstall/installed")},f).then(function(){n(d),k("install",c)})["catch"](function(a){n(d),b("PushRegistration").pushPermissionIsDenied()?(b("ReactDOM").render(g.jsx(b("NotificationPermissionNotice.react"),{onHide:function(){b("ReactDOM").unmountComponentAtNode(d)},browserName:e}),d),k("deny",c)):k("install_ignore",c),m(c)})}a={setLogExtraData:function(a){h=a},setQEUniverseName:function(a){i=a},installPush:function(a,c,d,e,f,g,h,i,j){var k=this,m=b("PushRegistration").get(a,c);m=m.isPushRegistered(e,b("XPushRegisterServiceWorkerController"),b("XBrowserPushDisabledController"),b("AsyncRequest"),!!g,i);b("Promise").all([m,b("incognito")()]).then(function(e){var g=e[0];e=e[1];if(g||e)return;l();if(b("PushRegistration").pushPermissionIsPending()){if(!j||f)return;k._renderDefaultPushRequest({path:a,appID:c,baseElement:d,browserName:h,workerIsForPushOnly:i})}else f||o(a,c,d,h,i)})["catch"](function(){b("PushRegistration").pushPermissionIsDenied()&&l()})},_renderDefaultPushRequest:function(a){var c=a.path,d=a.appID,e=a.baseElement,f=a.browserName;a=a.workerIsForPushOnly;b("ReactDOM").render(g.jsx(b("NotificationPermissionRequest.react"),{onHide:function(){n(e)}}),e);o(c,d,e,f,a)}};e.exports=a}),null);
__d("ResponsiveSidebar",["AjaxPipeRequest","Arbiter","Bootloader","ChatConfig","ChatSidebarVisibility","CSS","Event","Run","URI","getOrCreateDOMID","setImmediate","throttle"],(function(a,b,c,d,e,f){"use strict";var g,h=b("ChatConfig").get("sidebar.hide_divebar_off_homepage"),i=b("ChatConfig").get("sidebar.hide_buddylist_off_homepage"),j="buddylistOff",k=!0;a={init:function(a){var c=this;if(this.shouldLoadContent(a))b("setImmediate")(function(){c.loadContentForConfig(a)});else{var d=document.documentElement||"";h&&!this.isOnHomepage()&&b("CSS").removeClass(d,"sidebarMode");var e=b("Event").listen(window,"resize",b("throttle")(function(){k&&(c.shouldLoadContent(a)&&(k=!1,e.remove(),c.loadContentForConfig(a)))},50));this.loadOnTransition(a);b("Run").onCleanupOrLeave(a.container,function(){k&&(k=!1,e.remove())})}},loadOnTransition:function(a){var c=this;if(h||i)var d=b("Arbiter").subscribe("page_transition",function(e,f){e=document.documentElement||"";!c.isOnHomepage(f.uri.getPath())?i&&b("CSS").addClass(e,j):(i&&(b("CSS").removeClass(e,j),b("Bootloader").loadModules(["Dock"],function(a){a.resizeAllFlyouts()},"ResponsiveSidebar")),b("ChatSidebarVisibility").shouldShowSidebar(null,function(b,e){k&&window.setTimeout(function(){c.loadContentForConfig(a)}),k=!1,d.unsubscribe()},f.uri))})},isOnHomepage:function(a){return(a||new(g||(g=b("URI")))(window.location.href).getPath())==="/"},shouldLoadContent:function(a){var b=(h||i)&&!this.isOnHomepage();return!b&&a.triggerWidth<window.innerWidth},loadContentForConfig:function(a){var c="/ajax/pagelet/generic.php/SidebarPagelet";new(b("AjaxPipeRequest"))(b("getOrCreateDOMID")(a.container),c).send()}};e.exports=a}),null);
__d("BanzaiLooper",["Banzai"],(function(a,b,c,d,e,f){var g={retry:!0};function h(a,c){b("Banzai").post("banzai_looper:"+a,c,g)}a={labelBinaryClassificationExample:function(a){h("binary_classification_example",babelHelpers["extends"]({operation:"label"},a))}};e.exports=a}),null);