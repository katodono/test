if (self.CavalryLogger) { CavalryLogger.start_js(["ZY8O9"]); }

__d("BrowseFacebarHighlighter",["csx","CSS","NodeHighlighter"],(function(a,b,c,d,e,f,g){"use strict";a={};Object.assign(a,b("NodeHighlighter"),{getHighlightCandidates:function(){return["._53ad"]},isDiscardNode:function(a){return b("CSS").hasClass(a,"DefaultText")},createSegmentedRegex:function(a){a=this.escapeAndAddBidirectionalCharsToTokens(a);return"(^|\\s|\\b)("+a.join("|")+")"}});e.exports=a}),null);
__d("FavIcon",["DOM"],(function(a,b,c,d,e,f){var g,h,i;function j(){var a=b("DOM").scry(document.head,"link");a&&a.forEach(function(a){(a.rel.indexOf("icon")!=-1||a.rel.indexOf("shortcut icon")!=-1)&&b("DOM").remove(a)})}a={isToggledResource:function(){return i&&g instanceof HTMLLinkElement&&g.href===i?!0:!1},set:function(a){g&&b("DOM").remove(g),j(),g=b("DOM").create("link",{type:"image/x-icon",rel:"icon",href:a}),b("DOM").appendContent(b("DOM").find(document,"head"),g)},setToggleResources:function(a,b){g=document.querySelector('link[rel*=icon][href*=".ico"]'),g instanceof HTMLLinkElement&&(h=b!=null?b:g.href,i=a)},toggle:function(){if(!g||!i)return;if(g.href===h){this.set(i);return}this.set(h)},toggleSet:function(a){if(!g||!i||!h)return;a=a?i:h;g.href!==a&&this.set(a)}};e.exports=a}),null);
__d("WIGBackgroundImage.react",["CometBackgroundImage.react","React"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a){return g.jsx(b("CometBackgroundImage.react"),babelHelpers["extends"]({},a))}e.exports=a}),null);
__d("WIGText.react",["React","TetraText.react"],(function(a,b,c,d,e,f){var g=b("React");function a(a){return g.createElement(b("TetraText.react"),a)}e.exports=a}),null);
__d("WorkGalahadBeeperDispatcher",["ExplicitRegistrationDispatcher"],(function(a,b,c,d,e,f){"use strict";a=function(a){babelHelpers.inheritsLoose(b,a);function b(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.dispatch=c.dispatch.bind(babelHelpers.assertThisInitialized(c)),b)||babelHelpers.assertThisInitialized(c)}return b}(b("ExplicitRegistrationDispatcher"));e.exports=new a({strict:!0})}),null);
__d("WorkGalahadBeeperStore",["FluxReduceStore","NotificationBeeperConst","WorkGalahadBeeperDispatcher","filterObject","mapObject"],(function(a,b,c,d,e,f){"use strict";var g,h=b("NotificationBeeperConst").BeepStates;a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.getInitialState=function(){return{beeps:{},fading:!1,hovering:!1}};d.$WorkGalahadBeeperStore1=function(a,b){return a.type==="default"?babelHelpers["extends"]({},a,{state:b}):babelHelpers["extends"]({},a,{state:b})};d.$WorkGalahadBeeperStore2=function(a){return a.type==="default"?babelHelpers["extends"]({},a,{xouted:!0}):babelHelpers["extends"]({},a,{xouted:!0})};d.$WorkGalahadBeeperStore3=function(a){var c=this;return babelHelpers["extends"]({},a,{beeps:(g||(g=b("mapObject")))(a.beeps,function(a){return a.state===h.READY_TO_HIDE?c.$WorkGalahadBeeperStore1(a,h.FADING_OUT):a}),fading:!0})};d.$WorkGalahadBeeperStore4=function(a){return!a.fading?a:babelHelpers["extends"]({},a,{beeps:b("filterObject")(a.beeps,function(a){return a.state!==h.FADING_OUT}),fading:!1})};d.$WorkGalahadBeeperStore5=function(a){var c=this;return babelHelpers["extends"]({},a,{beeps:(g||(g=b("mapObject")))(a.beeps,function(a){return a.state===h.PENDING?c.$WorkGalahadBeeperStore1(a,h.READY_TO_HIDE):a})})};d.getRenderedBeeps=function(){return b("filterObject")(this.getState().beeps,function(a){return a.state===h.READY_TO_HIDE})};d.reduce=function(a,c){var d;switch(c.type){case"galahad/beeper_hide":return this.$WorkGalahadBeeperStore3(a);case"galahad/beeper_add":var e=a.fading?h.PENDING:h.READY_TO_HIDE;return babelHelpers["extends"]({},a,{beeps:babelHelpers["extends"]({},a.beeps,(d={},d[c.beep.id]=this.$WorkGalahadBeeperStore1(c.beep,e),d))});case"galahad/beeper_xout":e=a.beeps[c.beeperID];return e==null?a:babelHelpers["extends"]({},a,{beeps:babelHelpers["extends"]({},a.beeps,(d={},d[c.beeperID]=this.$WorkGalahadBeeperStore2(e),d))});case"galahad/beeper_finish_hide":return this.$WorkGalahadBeeperStore5(this.$WorkGalahadBeeperStore4(a));case"galahad/beeper_mouse_enter":return babelHelpers["extends"]({},this.$WorkGalahadBeeperStore5(a),{hovering:!0,fading:!1});case"galahad/beeper_mouse_leave":return babelHelpers["extends"]({},a,{hovering:!1});case"galahad/beepers_clear":return babelHelpers["extends"]({},a,{beeps:b("filterObject")(a.beeps,function(a){return a.type!=="default"})});case"galahad/chat_beepers_clear":return babelHelpers["extends"]({},a,{beeps:b("filterObject")(a.beeps,function(a){return a.type!=="chat"})});case"galahad/all_beepers_clear":return babelHelpers["extends"]({},a,{beeps:{}});default:return a}};d.getChatBeeps=function(){return b("filterObject")((g||(g=b("mapObject")))(this.getState().beeps,function(a){return a.type==="chat"&&a.xouted!==!0?a:null}),Boolean)};d.getBeeps=function(){return b("filterObject")((g||(g=b("mapObject")))(this.getState().beeps,function(a){return a.type==="default"&&a.xouted!==!0?a:null}),Boolean)};return c}(b("FluxReduceStore"));a.__moduleID=e.id;e.exports=new a(b("WorkGalahadBeeperDispatcher"))}),null);
__d("WorkGalahadBeeperActions",["NotificationBeeperConst","NotificationSound","WorkGalahadBeeperDispatcher","WorkGalahadBeeperStore","clearTimeout","forEachObject","gkx","setImmediateAcrossTransitions","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){"use strict";var g=b("NotificationBeeperConst").ACTIVE_DELAY_LONG,h=b("NotificationBeeperConst").FADE_OUT_LENGTH,i=b("NotificationBeeperConst").IDLE_DELAY,j,k=null,l=!1;a=function(a){a.shouldPlaySound&&b("setImmediateAcrossTransitions")(function(){return r(a.id)}),b("WorkGalahadBeeperDispatcher").dispatch({type:"galahad/beeper_add",beep:a})};c=function(a){b("WorkGalahadBeeperDispatcher").dispatch({type:"galahad/beeper_xout",beeperID:a})};var m=function(){b("WorkGalahadBeeperDispatcher").dispatch({type:"galahad/beeper_finish_hide"})},n=function(){b("WorkGalahadBeeperDispatcher").dispatch({type:"galahad/beeper_hide"}),b("setTimeoutAcrossTransitions")(m,h)},o=function(a){j&&b("clearTimeout")(j),j=b("setTimeoutAcrossTransitions")(n,a!=null?a:i)};d=function(){j&&b("clearTimeout")(j),b("setImmediateAcrossTransitions")(function(){b("WorkGalahadBeeperDispatcher").dispatch({type:"galahad/beeper_mouse_enter"});var a=b("WorkGalahadBeeperStore").getRenderedBeeps();b("forEachObject")(a,function(a){return a.onSeen&&a.onSeen()})})};f=function(){o(g),b("setImmediateAcrossTransitions")(function(){b("WorkGalahadBeeperDispatcher").dispatch({type:"galahad/beeper_mouse_leave"})})};var p=function(a){l=a},q=function(a){k=new(b("NotificationSound"))(a)},r=function(a){l&&k!=null&&k.play(a)},s=function(){b("WorkGalahadBeeperDispatcher").dispatch({type:"galahad/beepers_clear"})},t=function(){b("WorkGalahadBeeperDispatcher").dispatch({type:"galahad/chat_beepers_clear"})},u=function(){b("WorkGalahadBeeperDispatcher").dispatch({type:"galahad/all_beepers_clear"})},v=function(a){a==="notifications"?s():a==="chats"?t():a==="home"&&b("gkx")("997564")&&t()};e.exports={addBeeper:a,xoutBeeper:c,waitHide:o,onMouseEnter:d,onMouseLeave:f,setSoundEnabled:p,setSoundPath:q,clearAllNotificationBeeps:s,clearAllChatBeeps:t,clearAllBeeps:u,clearBeepsForTabID:v}}),null);
__d("WorkGalahadNavTextHeaderBase.react",["React","WIGText.react","stylex"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React"),i={title:{textTransform:"qh3kmfdh"},subtitle:{marginBottom:"hmmao1jw",marginTop:"ax8vyoxa",paddingTop:"b5mg2iqh",paddingBottom:"r8mubyy5"},titleAndAction:{display:"mu99tzkh",justifyContent:"akl1aaa0",alignItems:"t36ehdhz"},root:{display:"mu99tzkh",justifyContent:"oitujibm",alignItems:"qzq7978s",flexDirection:"tv52aht6",paddingTop:"b5mg2iqh",paddingBottom:"sgyxnsb9",paddingEnd:"ffozemys",paddingStart:"hmw2pi96"},indented:{paddingStart:"dxs9yoch"}};function a(a){var c=a.action,d=a.indented;d=d===void 0?!0:d;var e=a.subtitle,f=a.title;a=a.xstyle;return h.jsxs("div",{className:(g||(g=b("stylex")))(i.root,d&&i.indented,a),children:[h.jsxs("div",{className:g(i.titleAndAction),children:[f,c]}),e!=null?h.jsx("div",{className:(g||(g=b("stylex")))(i.subtitle),children:h.jsx(b("WIGText.react"),{type:"body4",color:"secondary",children:e})}):null]})}a.SmallTitle=function(a){a=a.title;return h.jsx("span",{className:(g||(g=b("stylex")))(i.title),children:h.jsx(b("WIGText.react"),{type:"bodyLink4",color:"secondary",isSemanticHeading:!0,numberOfLines:1,children:a})})};a.LargeTitle=function(a){a=a.title;return h.jsx(b("WIGText.react"),{type:"headlineEmphasized3",isSemanticHeading:!0,numberOfLines:1,children:a})};a.ExtraLargeTitle=function(a){a=a.title;return h.jsx(b("WIGText.react"),{type:"headlineEmphasized1",isSemanticHeading:!0,numberOfLines:1,children:a})};e.exports=a}),null);
__d("WorkGalahadNavTextHeader.react",["React","WorkGalahadNavTextHeaderBase.react"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function h(a,c){switch(c){case"EXTRA_LARGE":return g.jsx(b("WorkGalahadNavTextHeaderBase.react").ExtraLargeTitle,{title:a});case"LARGE":default:return g.jsx(b("WorkGalahadNavTextHeaderBase.react").LargeTitle,{title:a})}}function a(a){var c=a.action,d=a.indented;d=d===void 0?!0:d;var e=a.subtitle,f=a.title,i=a.xstyle;a=a.titleSize;a=a===void 0?"LARGE":a;return g.jsx(b("WorkGalahadNavTextHeaderBase.react"),{title:h(f,a),subtitle:e,indented:d,action:c,xstyle:i})}e.exports=a}),null);
__d("WorkGalahadImage.react",["Image.react","React","WIGBackgroundImage.react","stylex"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React"),i={wrapper:{position:"hal92y33",zIndex:"rpt3ley2"},root:{position:"hal92y33",overflowX:"ib0kwflm",overflowY:"qbbcxcfp"},border:{bottom:"qf3vbteg",boxSizing:"tdgv6ycz",end:"s000wco0",position:"i8ovu4tj",start:"akkqc5af",top:"xdo5vwd7",borderTop:"nkzg8k6n",borderEnd:"sf1ngpnb",borderBottom:"ph71f2of",borderStart:"eqxa6x9z",zIndex:"rk5zydmx"},backgroundImageContainer:{bottom:"qf3vbteg",boxSizing:"tdgv6ycz",end:"s000wco0",position:"i8ovu4tj",start:"akkqc5af",top:"xdo5vwd7"},rounded:{borderTopStartRadius:"qcplsvq8",borderTopEndRadius:"lbj7a7zq",borderBottomEndRadius:"qd9vfp32",borderBottomStartRadius:"ex16komz"},circle:{borderTopStartRadius:"fviam4sw",borderTopEndRadius:"e3xoa9gt",borderBottomEndRadius:"c6boxllp",borderBottomStartRadius:"mukvf3dn"},greyedOut:{backgroundColor:"ba23nu16"},image:{backgroundSize:"f0pa513o"},squareImageSpacer:{display:"nfce3akt",paddingBottom:"nw4knjib"},content:{bottom:"qf3vbteg",boxSizing:"tdgv6ycz",end:"s000wco0",position:"i8ovu4tj",start:"akkqc5af",top:"xdo5vwd7",zIndex:"b5n1fmi2"}};function a(a){var c=a.alt,d=a.children,e=a.greyedOut;e=e===void 0?!1:e;var f=a.height,j=a.src,k=a.type,l=a.width;a=a.xstyle;var m;typeof j==="string"?m=h.jsx(b("WIGBackgroundImage.react"),{alt:c!=null?c:void 0,src:j}):m=h.jsx(b("Image.react"),{alt:c,className:(g||(g=b("stylex")))(i.image),height:f,src:j,width:l});return h.jsxs("div",{className:(g||(g=b("stylex")))(i.wrapper,k==="rounded"&&i.rounded,k==="circle"&&i.circle,a),children:[h.jsxs("div",{className:g(i.root,k==="rounded"?i.rounded:null,k==="circle"?i.circle:null,e?i.greyedOut:null),style:{height:f,width:l},children:[h.jsx("div",{className:g(i.border,k==="rounded"?i.rounded:null,k==="circle"?i.circle:null)}),h.jsx("div",{className:g(i.backgroundImageContainer),children:m}),f==null&&h.jsx("div",{className:(g||(g=b("stylex")))(i.squareImageSpacer)})]}),d!=null?h.jsx("div",{className:(g||(g=b("stylex")))(i.content),children:d}):null]})}e.exports=a}),null);
__d("SimpleStructuredInput",["csx","ArbiterMixin","DataStore","DOM","Event","FacebarStructuredText","FlipDirection","Input","Parent","getActiveElement","mixin","requestAnimationFrame"],(function(a,b,c,d,e,f,g){a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(c){var d;d=a.call(this)||this;d.$SimpleStructuredInput1=c;d.$SimpleStructuredInput2=b("DOM").find(c,"._1frb");d.$SimpleStructuredInput3=b("DOM").find(c,"._5eay");b("DataStore").set(c,"SimpleStructuredInput",babelHelpers.assertThisInitialized(d));d.init();return d}var d=c.prototype;d.init=function(){var a=this,c=function(b){return a.inform(b.type)};b("Event").listen(this.$SimpleStructuredInput2,"blur",c);b("Event").listen(this.$SimpleStructuredInput2,"focus",c);b("Event").listen(this.$SimpleStructuredInput2,"input",function(){b("FlipDirection").setDirection(a.$SimpleStructuredInput2,1,!0),a.inform("change"),b("requestAnimationFrame")(function(){a.$SimpleStructuredInput2.scrollLeft>0&&a.clearHint()})});this.inform("init",null,"persistent")};d.clearHint=function(){b("Input").setValue(this.$SimpleStructuredInput3,"")};d.setHint=function(a){a=a.map(function(a){return a.text}).join("");var c=b("Input").getValue(this.$SimpleStructuredInput2);this.hasFocus()&&c.length>0&&a.toLowerCase().indexOf(c.toLowerCase())===0&&!this.hasTextOverflow()?b("Input").setValue(this.$SimpleStructuredInput3,c+a.slice(c.length)):this.clearHint()};d.focus=function(){this.$SimpleStructuredInput2.focus()};d.blur=function(){this.$SimpleStructuredInput2.blur(),this.setHint([])};d.hasTextOverflow=function(){return this.$SimpleStructuredInput2.offsetWidth!==this.$SimpleStructuredInput2.scrollWidth};d.hasFocus=function(){return b("DOM").contains(this.$SimpleStructuredInput1,b("getActiveElement")())};d.setStructure=function(a,c){c===void 0&&(c=!1);a=a.map(function(a){return a.text});b("Input").setValue(this.$SimpleStructuredInput2,a.join(""));c!==!0&&this.inform("change")};d.getStructure=function(){return b("FacebarStructuredText").fromString(b("Input").getValue(this.$SimpleStructuredInput2)).toStruct()};d.getSelection=function(){return{offset:this.$SimpleStructuredInput2.selectionStart,length:this.$SimpleStructuredInput2.selectionEnd-this.$SimpleStructuredInput2.selectionStart}};d.setSelection=function(a){this.hasFocus()&&(this.$SimpleStructuredInput2.setSelectionRange(a.offset,a.offset+a.length),this.inform("select"))};d.isSelectionAtEnd=function(){var a=this.getSelection().offset,c=b("Input").getValue(this.$SimpleStructuredInput2).length;return a>=c};d.selectAll=function(){this.setSelection({offset:0,length:b("Input").getValue(this.$SimpleStructuredInput2).length})};c.getInstance=function(a){a=b("Parent").bySelector(a,"._5eaz");if(!(a instanceof HTMLElement))throw new Error("No DOMElement structured input found using");return b("DataStore").get(a,"SimpleStructuredInput")||new c(a)};return c}(b("mixin")(b("ArbiterMixin")));e.exports=a}),null);
__d("LayerStopMouseDown",["Event"],(function(a,b,c,d,e,f){a=function(){"use strict";function a(a){this._layer=a}var c=a.prototype;c.enable=function(){this._listener=b("Event").listen(this._layer.getContentRoot(),"mousedown",function(a){a.kill()})};c.disable=function(){this._listener&&this._listener.remove()};return a}();e.exports=a}),null);
__d("QPLUserFlow",["Arbiter","QPLJoinUtils","QuickPerformanceLogger"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){b("Arbiter").subscribe("AsyncRequest/will_send",function(a,c){a=c.request;c=b("QuickPerformanceLogger").getActiveMarkerIDs({type:2});c.length>0&&a.setRequestHeader("X-FB-QPL-Active-Flows",c.sort().join(","))})}var c=a.prototype;c.start=function(a,c){c=c===void 0?{}:c;var d=c.instanceKey;d=d===void 0?0:d;var e=c.annotations;e=e===void 0?void 0:e;var f=c.cancelOnUnload;f=f===void 0?!0:f;var g=c.trackedForLoss;g=g===void 0?!0:g;c=c.joinID;c=c===void 0?void 0:c;b("QuickPerformanceLogger").markerStart(a,d,void 0,{cancelOnUnload:f,trackedForLoss:g,type:2});e&&b("QuickPerformanceLogger").markerAnnotate(a,e,{instanceKey:d});c&&(b("QPLJoinUtils").setJoinId(b("QuickPerformanceLogger"),a,d,c),b("QPLJoinUtils").markJoinRequest(b("QuickPerformanceLogger"),a,d,c))};c.endSuccess=function(a,c){c=c===void 0?{}:c;var d=c.instanceKey;d=d===void 0?0:d;var e=c.annotations;e=e===void 0?void 0:e;c=c.joinID;c=c===void 0?void 0:c;e&&b("QuickPerformanceLogger").markerAnnotate(a,e,{instanceKey:d});c&&b("QPLJoinUtils").markJoinResponse(b("QuickPerformanceLogger"),a,d,c);b("QuickPerformanceLogger").markerEnd(a,2,d)};c.endFailure=function(a,c,d){d=d===void 0?{}:d;var e=d.instanceKey;e=e===void 0?0:e;var f=d.debugInfo;f=f===void 0?void 0:f;var g=d.annotations;g=g===void 0?void 0:g;d=d.joinID;d=d===void 0?void 0:d;this.markError(a,c,{debugInfo:f,instanceKey:e});g&&b("QuickPerformanceLogger").markerAnnotate(a,g,{instanceKey:e});d&&b("QPLJoinUtils").markJoinResponse(b("QuickPerformanceLogger"),a,e,d);b("QuickPerformanceLogger").markerEnd(a,3,e)};c.endCancel=function(a,c){c=c===void 0?{}:c;var d=c.instanceKey;d=d===void 0?0:d;var e=c.cancelReason;e=e===void 0?4:e;var f=c.annotations;f=f===void 0?void 0:f;c=c.joinID;c=c===void 0?void 0:c;f&&b("QuickPerformanceLogger").markerAnnotate(a,f,{instanceKey:d});c&&b("QPLJoinUtils").markJoinResponse(b("QuickPerformanceLogger"),a,d,c);b("QuickPerformanceLogger").markerEnd(a,e,d)};c.addAnnotations=function(a,c,d){d=d===void 0?{}:d;d=d.instanceKey;b("QuickPerformanceLogger").markerAnnotate(a,c,{instanceKey:d})};c.addPoint=function(a,c,d){d=d===void 0?{}:d;var e=d.instanceKey;d=d.debugInfo;b("QuickPerformanceLogger").markerPoint(a,c,{data:d!=null?{string:(a={},a.uf_debug_info=d,a)}:null,instanceKey:e})};c.markError=function(a,c,d){var e;d=d===void 0?{}:d;var f=d.debugInfo;d=d.instanceKey;b("QuickPerformanceLogger").markerAnnotate(a,{bool:(e={},e.uf_has_error=!0,e)},{instanceKey:d});this.addPoint(a,c,{debugInfo:f,instanceKey:d})};c.storeBeforeNavigation=function(a,c){c=c===void 0?{}:c;c=c.instanceKey;c=c===void 0?0:c;b("QuickPerformanceLogger").markerStoreBeforeNavigation(a,{instanceKey:c})};c.getActiveFlowIDs=function(){return b("QuickPerformanceLogger").getActiveMarkerIDs({type:2})};return a}();e.exports=new a()}),null);
__d("QPLUtils",["crc32"],(function(a,b,c,d,e,f){"use strict";e.exports={deriveInstanceKey:function(a){return a!=null?b("crc32")(a)>>>0:0}}}),null);
__d("SearchSuggestionsHighlighter",["React","escapeRegex"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function h(a,c,d,e,f){a=b("escapeRegex")(f?a:a.trim());e=e?"gi":"g";var h=" "+c,i=[];f=f?new RegExp("( "+a.split(/\s+/).join("| ")+")",e):new RegExp("("+a.split(/\s+/).join("|")+")",e);a=0;e=null;while(!0){e=f.exec(h);if(e==null)break;var j=h.substring(a,e.index);a===0&&(j=j.trimLeft());d?i.push(j):i.push(g.jsx("strong",{children:j},c+"-"+e.index));j=e[0];e.index===0&&(j=j.trimLeft());a=e.index+e[0].length;d?i.push(g.jsx("strong",{children:j},c+"-"+a)):i.push(j)}d?i.push(h.substring(a,h.length)):i.push(g.jsx("strong",{children:h.substring(a,h.length)},c+"-"+h.length));return i}function a(a,b,c){c===void 0&&(c=!0);return h(a,b,!0,!1,c)}function c(a,b,c){c===void 0&&(c=!0);return h(a,b,!1,!1,c)}function d(a,b,c){c===void 0&&(c=!0);return h(a,b,!0,!0,c)}function f(a,b,c){c===void 0&&(c=!0);return h(a,b,!1,!0,c)}e.exports={highlightMatch:a,highlightNonMatch:c,highlightMatchCaseInsensitive:d,highlightNonMatchCaseInsensitive:f}}),null);