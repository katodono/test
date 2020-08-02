if (self.CavalryLogger) { CavalryLogger.start_js(["fUWJx"]); }

__d("XCometContextualProfileControllerRouteBuilder",["cometRouteBuilder"],(function(a,b,c,d,e,f){a=b("cometRouteBuilder")("/groups/{group_id}/user/{member_id}/",Object.freeze({}),void 0);e.exports=a}),null);
__d("XCometStoriesControllerRouteBuilder",["cometRouteBuilder"],(function(a,b,c,d,e,f){a=b("cometRouteBuilder")("/stories/{?bucket_id}/{?card_id}/",Object.freeze({view_single:!1}),void 0);e.exports=a}),null);
__d("useActorStoryStatus_actor.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};a=[a,{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"first_story_to_show",plural:!1,selections:[a,{alias:null,args:null,concreteType:"StoryCardSeenState",kind:"LinkedField",name:"story_card_seen_state",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_seen_by_viewer",storageKey:null}],storageKey:null}],storageKey:null}];return{argumentDefinitions:[{defaultValue:!0,kind:"LocalArgument",name:"enabled"}],kind:"Fragment",metadata:null,name:"useActorStoryStatus_actor",selections:[{condition:"enabled",kind:"Condition",passingValue:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"pages_story_bucket_v2",plural:!1,selections:a,storageKey:null}],type:"Page",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:[{kind:"Literal",name:"first",value:1}],concreteType:"DirectInboxBroadcastBucketConnection",kind:"LinkedField",name:"story_bucket",plural:!1,selections:[{alias:null,args:null,concreteType:"DirectMessageThreadBucket",kind:"LinkedField",name:"nodes",plural:!0,selections:a,storageKey:null}],storageKey:"story_bucket(first:1)"}],type:"User",abstractKey:null}]}],type:"Actor",abstractKey:"__isActor"}}();e.exports=a}),null);
__d("CometHovercardQueryRendererQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"4642315892448848",metadata:{relayPreloadable:!0},name:"CometHovercardQueryRendererQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("TetraProfilePhotoForActor_actor.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{argumentDefinitions:[{defaultValue:!1,kind:"LocalArgument",name:"allowProfileVideo"},{defaultValue:!0,kind:"LocalArgument",name:"displayAvailability"},{defaultValue:null,kind:"LocalArgument",name:"height"},{defaultValue:!0,kind:"LocalArgument",name:"linkToUnseenStory"},{defaultValue:null,kind:"LocalArgument",name:"scale"},{defaultValue:null,kind:"LocalArgument",name:"width"}],kind:"Fragment",metadata:null,name:"TetraProfilePhotoForActor_actor",selections:[a,{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:[{kind:"Variable",name:"height",variableName:"height"},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Variable",name:"width",variableName:"width"}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"ProfileCometProfileLink_actor"},{args:[{kind:"Variable",name:"enabled",variableName:"linkToUnseenStory"}],kind:"FragmentSpread",name:"useActorStoryStatus_actor"},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],type:"Entity",abstractKey:"__isEntity"},{condition:"displayAvailability",kind:"Condition",passingValue:!0,selections:[{kind:"InlineFragment",selections:[{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"availability",storageKey:null}]}],type:"User",abstractKey:null}]},{condition:"allowProfileVideo",kind:"Condition",passingValue:!0,selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"ProfileVideo",kind:"LinkedField",name:"profile_video",plural:!1,selections:[a,{args:null,kind:"FragmentSpread",name:"TetraProfileVideoSection_profileVideo"}],storageKey:null}],type:"Profile",abstractKey:"__isProfile"}]}],type:"Actor",abstractKey:"__isActor"}}();e.exports=a}),null);
__d("ProfileCometProfileLink_actor.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometProfileLink_actor",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{kind:"InlineFragment",selections:[{alias:"profile_url",args:null,kind:"ScalarField",name:"url",storageKey:null}],type:"Entity",abstractKey:"__isEntity"}],type:"Actor",abstractKey:"__isActor"};e.exports=a}),null);
__d("CometHovercardEntityRenderer_actor.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:{mask:!1},name:"CometHovercardEntityRenderer_actor",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],type:"Actor",abstractKey:"__isActor"};e.exports=a}),null);
__d("CometLinkedEntityRenderer_entity.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:{mask:!1},name:"CometLinkedEntityRenderer_entity",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:[{kind:"Literal",name:"site",value:"comet"}],kind:"ScalarField",name:"url",storageKey:'url(site:"comet")'},{args:null,kind:"FragmentSpread",name:"ProfileCometProfileLink_actor"}],type:"Entity",abstractKey:"__isEntity"};e.exports=a}),null);
__d("UFI2CommentIdentityBadges_identityBadge$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"SplitOperation",metadata:{},name:"UFI2CommentIdentityBadges_identityBadge$normalization",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}]};e.exports=a}),null);
__d("CometRouteParams",["useCurrentRoute"],(function(a,b,c,d,e,f){"use strict";f.useRouteParams=a;function a(){var a;return(a=(a=b("useCurrentRoute")())==null?void 0:a.params)!=null?a:{}}}),null);
__d("useCometVisualChangeTracker",["CometInteractionTracingMetrics","React","requireCond","cr:1075529","cr:683059"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(){var a=g.useRef(null),c=g.useRef(null);g.useEffect(function(){return function(){c.current&&c.current(),c.current=null,a.current=null}},[]);return g.useCallback(function(d){if(a.current!==d){c.current&&(c.current(),c.current=null);a.current=d;if(d){b("cr:1075529")&&b("cr:1075529").addMutationRootForTraceType(d,"INTERACTION");var e=!1;b("CometInteractionTracingMetrics").currentInteractionLogger().forEach(function(a){(a.type==="INITIAL_LOAD"||a.type==="NAVIGATION")&&(e=!0)});b("cr:683059")&&e&&(c.current=b("cr:683059").addMutationRoot(d))}}},[])}}),null);
__d("CometContextualLayer.react",["BaseContextualLayer.react","React","useCometVisualChangeTracker","useMergeRefs"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a,c){var d=b("useCometVisualChangeTracker")();d=b("useMergeRefs")(a.layerRef,d);return g.jsx(b("BaseContextualLayer.react"),babelHelpers["extends"]({},a,{layerRef:d,ref:c}))}c=g.forwardRef(a);e.exports=c}),null);
__d("FocusInertRegion.react",["React","react","setElementCanTab","useLayoutEffect_SAFE_FOR_SSR"],(function(a,b,c,d,e,f){var g;c=b("React");var h=c.useRef,i=g||(g=b("react")),j=i.unstable_Scope;function a(a){var c=a.children,d=a.disabled,e=d===void 0?!1:d,f=a.focusQuery,g=h(null);b("useLayoutEffect_SAFE_FOR_SSR")(function(){var a=g.current;if(f&&a!=null){a=a.DO_NOT_USE_queryAllNodes(f);if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];b("setElementCanTab")(d,e)}}},[e,f]);return i.jsx(j,{ref:g,children:c})}e.exports=a}),null);
__d("CometHovercardTrigger.react",["CometContextualLayer.react","CometErrorBoundary.react","CometHeroInteractionContextPassthrough.react","CometPlaceholder.react","FocusInertRegion.react","FocusWithinHandler.react","HiddenSubtreeContextProvider.react","React","TabbableScopeQuery.react","clearTimeout","relay-experimental/LazyLoadEntryPointContainer_DEPRECATED.react","setTimeout","stylex","useCometDisplayTimingTrackerForInteraction","useCometPrerenderer","useFadeEffect"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React"),i=300,j=50,k={disablePointerEvents:{pointerEvents:"hzruof5a"},displayInline:{display:"nc684nl6"},displayInlineBlock:{display:"q9uorilb"},hovercard:{opacity:"b5wmifdl",transitionDuration:"c5ndavph",transitionProperty:"art1omkt",transitionTimingFunction:"ot9fgl3s"},hovercardVisible:{opacity:"pedkr2u6",transitionDuration:"ijkhr0an",transitionTimingFunction:"s13u9afw"}};function a(a){var c=a.children,d=a.display,e=a.onVisibilityChange,f=a.popoverEntryPoint,l=a.popoverOtherProps,m=a.popoverProps;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","display","onVisibilityChange","popoverEntryPoint","popoverOtherProps","popoverProps"]);var n=h.useState(!1),o=n[0],p=n[1];n=h.useState(!1);var q=n[0],r=n[1];n=h.useState(!1);var s=n[0];n=n[1];var t=h.useState(!1),u=t[0];t=t[1];var v=s&&u;s=h.useRef(null);u=h.useRef(null);var w=b("useCometDisplayTimingTrackerForInteraction")("HoverCard"),x=h.useRef(null);h.useEffect(function(){return function(){return b("clearTimeout")(x.current)}},[]);var y=h.useCallback(function(a,c){b("clearTimeout")(x.current),x.current=null,c===0?p(a):x.current=b("setTimeout")(function(){p(a),x.current=null},c)},[]),z=h.useCallback(function(){p(!1),r(!1),b("clearTimeout")(x.current),x.current=null},[]),A=h.useMemo(function(){return l!=null?babelHelpers["extends"]({},l,{onClose:z}):{onClose:z}},[z,l]),B=o||q||v,C=h.useRef(B);h.useEffect(function(){C.current!==B&&(e&&e(B)),C.current=B},[B,e]);o=b("useFadeEffect")(B);var D=o[0],E=o[1];o=o[2];var F=b("useCometPrerenderer")("tooltip",B),G=F[0].shouldPrerender;G=G===void 0?!1:G;var H=F[1],I=F[2];F=s.current;return h.jsxs("div",{className:(g||(g=b("stylex")))(d==="inline"?k.displayInline:null,d==="inline-block"?k.displayInlineBlock:null),onMouseEnter:function(a){y(!0,i),!v&&!q&&H(a)},onMouseLeave:function(){y(!1,j),I()},onTouchCancel:function(){return r(!1)},onTouchEnd:function(){return r(!1)},onTouchStart:function(){return r(!0)},children:[h.jsx(b("FocusWithinHandler.react"),{onFocusChange:n,onFocusVisibleChange:t,children:c(s)}),F!=null&&(v||q||G||D)&&h.jsx(b("CometHeroInteractionContextPassthrough.react"),{clear:!0,children:h.jsx(b("CometErrorBoundary.react"),{fallback:null,children:h.jsx(b("CometPlaceholder.react"),{fallback:null,children:h.jsx(b("CometContextualLayer.react"),babelHelpers["extends"]({align:"middle",autoAlign:!0,context:F,hidden:!B&&G,layerRef:w,ref:u,xstyle:!B&&D?k.disablePointerEvents:void 0},a,{children:h.jsx(b("HiddenSubtreeContextProvider.react"),{isHidden:!B&&G,children:h.jsx("div",{className:(g||(g=b("stylex")))(k.hovercard,E&&k.hovercardVisible),ref:o,children:h.jsx(b("FocusInertRegion.react"),{focusQuery:b("TabbableScopeQuery.react"),children:h.jsx(b("relay-experimental/LazyLoadEntryPointContainer_DEPRECATED.react"),{entryPoint:f,entryPointParams:m,props:A})})})})}))})})})]})}}),null);
__d("CometLazyPopoverTrigger.react",["BasePopoverTrigger.react","CometPopoverLoadingState.react","React","lazyLoadComponent","useCometPopoverInteractionTracing"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){var c=a.fallback;c=c===void 0?g.jsx(b("CometPopoverLoadingState.react"),{withArrow:!0}):c;var d=a.popoverResource,e=a.preloadTrigger,f=a.tracePolicy;a=babelHelpers.objectWithoutPropertiesLoose(a,["fallback","popoverResource","preloadTrigger","tracePolicy"]);var h=g.useMemo(function(){return b("lazyLoadComponent")(d)},[d]);f=b("useCometPopoverInteractionTracing")(f);return g.jsx(b("BasePopoverTrigger.react"),babelHelpers["extends"]({fallback:c,interactionTracker:f,popover:h,popoverPreloadResource:d,preloadTrigger:e},a))}}),null);
__d("CometMiddot.react",["React"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){return g.jsxs("span",babelHelpers["extends"]({},a,{"aria-hidden":"true",children:[" ","\xb7"," "]}))}}),null);
__d("BaseListItem.react",["React","joinClasses","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){var c=a.addon,d=a.children,e=a.className;a=a.right;return g.jsxs("div",{className:b("joinClasses")("j83agx80",e),children:[c!=null?g.jsx("div",{className:"tvfksri0 taijpn5t j83agx80 ll8tlv6m",children:c}):null,g.jsx("div",{className:"hpfvmrgz g5gj957u buofh1pr rj1gh0hx o8rfisnq",children:d}),a!=null?g.jsx("div",{className:"ozuftl9m taijpn5t cbu4d94t j83agx80",children:a}):null]})}}),null);
__d("CometEmojiWithContextualSize.react",["CometEmoji.react","React","TetraTextContext","TetraTextTypography"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React"),h=new Map([[16,16],[20,16],[24,20],[28,24],[32,30],[38,32]]);function i(){var a=g.useContext(b("TetraTextContext"));a=(a=a==null?void 0:a.type)!=null?a:"body4";var c=16;a!=null&&(a in b("TetraTextTypography")&&(c=b("TetraTextTypography")[a].lineHeight));return(a=h.get(c))!=null?a:16}function a(a){var c=a.emoji,d=a.size;a=babelHelpers.objectWithoutPropertiesLoose(a,["emoji","size"]);var e=i();return g.jsx(b("CometEmoji.react"),babelHelpers["extends"]({},a,{emoji:c,size:d!=null?d:e}))}}),null);
__d("useActorStoryStatus",["CometRelay","useActorStoryStatus_actor.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h={status:"none"};function a(a){var c,d;a=b("CometRelay").useFragment(g!==void 0?g:g=b("useActorStoryStatus_actor.graphql"),a);var e;switch(a.__typename){case"Page":e=a.pages_story_bucket_v2;break;case"User":a=(a=a.story_bucket)==null?void 0:a.nodes;e=a?a[0]:null;break;default:return h}if(e==null)return h;a=e.id;c=(c=e.first_story_to_show)==null?void 0:c.id;if(a==null||c==null)return h;d=(d=e.first_story_to_show)==null?void 0:(d=d.story_card_seen_state)==null?void 0:d.is_seen_by_viewer;if(d===!1)return{firstBucketId:a,firstCardId:c,status:"unseen"};else if(d===!0)return{firstBucketId:a,firstCardId:c,status:"seen"};else return h}}),null);
__d("CometHovercardQueryRenderer.entrypoint",["JSResourceForInteraction","WebPixelRatio","CometHovercardQueryRendererQuery$Parameters"],(function(a,b,c,d,e,f){"use strict";a={getPreloadProps:function(a){var c=a.actorID;a=a.context;return{queries:{hovercardQueryReference:{parameters:b("CometHovercardQueryRendererQuery$Parameters"),variables:{actorID:c,context:a,scale:b("WebPixelRatio").get()}}}}},root:b("JSResourceForInteraction")("CometHovercardQueryRenderer.react",{"class":"fluid",name:"CometHovercardQueryRenderer",oncall:"comet_ui"}).__setRef("CometHovercardQueryRenderer.entrypoint")};e.exports=a}),null);
__d("ActorHovercardContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext();e.exports=c}),null);
__d("useActorHovercardContext",["ActorHovercardContext","React"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(){var a=g.useContext(b("ActorHovercardContext"));return(a=a)!=null?a:"DEFAULT"}}),null);
__d("ActorHovercard.react",["CometHovercardQueryRenderer.entrypoint","CometHovercardTrigger.react","React","requireCond","useActorHovercardContext","cr:1506469"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a){var c=a.actorID,d=a.align;d=d===void 0?"middle":d;var e=a.children,f=a.display;a=a.position;a=a===void 0?"above":a;var h=b("useActorHovercardContext")();return g.jsx(b("CometHovercardTrigger.react"),{align:d,display:f,popoverEntryPoint:b("CometHovercardQueryRenderer.entrypoint"),popoverProps:{actorID:c,context:h},position:a,children:e})}d=(c=b("cr:1506469"))!=null?c:a;e.exports=d}),null);
__d("canRenderHovercardForGraphQLEntityType",[],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a){return["Event","Page","Group","GroupAnonAuthorProfile","User"].includes(a)}}),null);
__d("CometImageCover.react",["BaseImage_DEPRECATED.react","React","stylex"],(function(a,b,c,d,e,f){"use strict";var g=b("React");d=function(){var a=document.documentElement;return a==null?!0:Boolean("objectFit"in a.style)}();function a(a){a.alt;var c=a.loading,d=a.onLoad,e=a.src,f=a.style;a=babelHelpers.objectWithoutPropertiesLoose(a,["alt","loading","onLoad","src","style"]);var h=g.useState(null),i=h[0],j=h[1],k=g.useRef();h=g.useCallback(function(){var a=k.current;if(a==null||!(a instanceof HTMLImageElement)||typeof a.src!=="string")return;j(a.src);d!=null&&d()},[d]);return i!=null?g.jsx("div",{className:"k4urcfbm bixrwtb6 datstx6m q9uorilb",style:babelHelpers["extends"]({backgroundImage:"url("+i+")",backgroundPosition:"center center",backgroundSize:"cover"},f)}):g.jsx(b("BaseImage_DEPRECATED.react"),babelHelpers["extends"]({},a,{className:"ttbfdpzt do00u71z",loading:c||void 0,onLoad:h,ref:k,src:e,style:f}))}function c(a){return g.jsx(b("BaseImage_DEPRECATED.react"),babelHelpers["extends"]({className:"k4urcfbm bixrwtb6 datstx6m q9uorilb"},a))}f=d?c:a;e.exports=f}),null);
__d("CometListItemGlimmer.react",["BaseGlimmer.react","BaseListItem.react","BaseLoadingStateElement.react","React","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React");function a(a){var c=a.imageSize,d=c===void 0?36:c;c=a.imageStyle;var e=c===void 0?"none":c;c=a.numberOfItems;var f=c===void 0?1:c;a=h.useMemo(function(){return Array(f).fill().map(function(a,b){return Math.floor(Math.PI*Math.pow(10,b%10)%4)})},[f]);return h.jsx(b("BaseLoadingStateElement.react"),{children:a.map(function(a,c){return h.jsx(b("BaseListItem.react"),{addon:e!=="none"?h.jsx(b("BaseGlimmer.react"),{className:(g||(g=b("stylex"))).dedupe(d===20?{"height-1":"jnigpg78","width-1":"odw8uiq3"}:{},d===36?{"height-1":"tv7at329","width-1":"thwo4zme"}:null,d===40?{"height-1":"qypqp5cg","width-1":"q676j6op"}:null,d===48?{"height-1":"m7zwrmfr","width-1":"tmrshh9y"}:null,d===56?{"height-1":"e5d9fub0","width-1":"oeao4gh3"}:null,d===60?{"height-1":"cb02d2ww","width-1":"ljni7pan"}:null,e==="circle"?{"border-top-start-radius-1":"s45kfl79","border-top-end-radius-1":"emlxlaya","border-bottom-end-radius-1":"bkmhp75w","border-bottom-start-radius-1":"spb7xbtv"}:null,e==="roundedRect"?{"border-top-start-radius-1":"ue3kfks5","border-top-end-radius-1":"pw54ja7n","border-bottom-end-radius-1":"uo3d90p7","border-bottom-start-radius-1":"l82x9zwi"}:null),index:c}):null,className:(g||(g=b("stylex"))).dedupe(c===0?{"padding-top-1":"jb3vyjys"}:{},{"margin-top-1":"kvgmc6g5","margin-end-1":"oi9244e8","margin-bottom-1":"oygrvhab","margin-start-1":"h676nmdw","padding-top-1":"cxgpxx05","padding-end-1":"dflh9lhu","padding-bottom-1":"sj5x9vvc","padding-start-1":"scb9dxdr"}),children:h.jsx(b("BaseGlimmer.react"),{className:g.dedupe({"border-top-start-radius-1":"ue3kfks5","border-top-end-radius-1":"pw54ja7n","border-bottom-end-radius-1":"uo3d90p7","border-bottom-start-radius-1":"l82x9zwi","height-1":"ed3p1gfi"},a===0?{"width-1":"n99xedck"}:null,a===1?{"width-1":"jico2p30"}:null,a===2?{"width-1":"ptrm0iwj"}:null,a===3?{"width-1":"k4urcfbm"}:null),index:c})},c)})})}}),null);
__d("ProfileCometContextualProfileGating",["qex"],(function(a,b,c,d,e,f){"use strict";f.canViewCometContextualProfile=a;function a(){var a;return(a=b("qex")._("1530372"))!=null?a:!1}}),null);
__d("ProfileCometLinkContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext({groupID:null});e.exports=c}),null);
__d("RecoverableViolation.react",["React","recoverableViolation"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){var c=a.errorMessage,d=a.errorObject,e=a.projectName,f=g.useRef(!1);g.useEffect(function(){f.current||(b("recoverableViolation")(c,e,d),f.current=!0)});return null}}),null);
__d("TetraProfilePhotoForActor.react",["ActorHovercard.react","CometRelay","ProfileCometContextualProfileGating","ProfileCometLinkContext","React","RecoverableViolation.react","TetraProfilePhoto.react","WebPixelRatio","XCometContextualProfileControllerRouteBuilder","XCometStoriesControllerRouteBuilder","useActorStoryStatus","TetraProfilePhotoForActor_actor.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React");function a(a){var c=a.actor,d=a.addOn,e=a.linkProps,f=a.noHovercard;f=f===void 0?!1:f;var i=a.noLink,j=i===void 0?!1:i,k=a.onPress,l=a.size,m=babelHelpers.objectWithoutPropertiesLoose(a,["actor","addOn","linkProps","noHovercard","noLink","onPress","size"]);i=b("CometRelay").useFragment(g!==void 0?g:g=b("TetraProfilePhotoForActor_actor.graphql"),c);c=(a=i.profile_picture)!=null?a:{};var n=i.profile_video!=null?i.profile_video:void 0;a=c.height;var o=c.scale,p=c.uri;c=c.width;var q=i.availability,r=i.id,s=i.name,t={height:(a=a)!=null?a:l,scale:(a=o)!=null?a:b("WebPixelRatio").get(),uri:(o=p)!=null?o:"",width:(a=c)!=null?a:l};o=h.useContext(b("ProfileCometLinkContext"));c=o.groupID;var u=i.url,v=b("useActorStoryStatus")(i);v.status!=="none"?u=b("XCometStoriesControllerRouteBuilder").buildURL({bucket_id:v.firstBucketId,card_id:v.firstCardId}):c!=null&&b("ProfileCometContextualProfileGating").canViewCometContextualProfile()&&r!=null&&(u=b("XCometContextualProfileControllerRouteBuilder").buildURL({group_id:c,member_id:r}));var w=h.useMemo(function(){var a;return{addOn:(a=d)!=null?a:q==="ACTIVE"?{type:"availabilityBadge"}:void 0,"aria-label":(a=s)!=null?a:"",linkProps:e!=null?e:j?void 0:{url:u},onPress:k,profileVideo:n,size:l,source:t,storyStatus:v.status}},[d,q,s,e,j,u,k,n,l,t,v.status]);if(p==null||r==null||s==null||w.source.uri===""){return h.jsx(b("RecoverableViolation.react"),{errorMessage:"Missing fields for TetraProfilePhotoForActor, id: "+((a=r)!=null?a:"null"),projectName:"comet_ui"})}return f?h.jsx(b("TetraProfilePhoto.react"),babelHelpers["extends"]({},m,w)):h.jsx(b("ActorHovercard.react"),{actorID:r,children:function(a){return h.jsx(b("TetraProfilePhoto.react"),babelHelpers["extends"]({ref:a},m,w))}})}}),null);
__d("useCometAriaID",["React","useCometUniqueID","useSetAttributeRef"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){var c=b("useCometUniqueID")(),d=b("useSetAttributeRef")("id",c),e=b("useSetAttributeRef")(a,c);return g.useMemo(function(){var b;return[[{id:c,suppressHydrationWarning:!0},d],[(b={},b[a]=c,b.suppressHydrationWarning=!0,b),e]]},[a,c,d,e])}}),null);
__d("CometFeedUnitLoggingContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext({position:null,renderLocation:null});e.exports=c}),null);
__d("CometFeedNoRoutingNavigationEventsLoggerImpl",["JSScheduler","React","requireDeferred"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React"),h=b("requireDeferred")("Banzai");function a(a,c,d){var e=g.useCallback(function(b,e,f,g){if(c==null||c==="")return;var h=babelHelpers["extends"]({},b.VITAL,{signal:!0});b.post("comet_metrics:navigation",{dest_module:g,extra:d,href:f,tn:a.join(""),ts:e,xt:c},h)},[a,c,d]);return g.useCallback(function(a,c,d){b("JSScheduler").scheduleLoggingPriCallback(function(){return h.onReady(function(b){return e(b,a,c,d)})})},[e])}}),null);
__d("useCometFeedNoRoutingNavigationEventLogger",["CometFeedLoggingExtraFieldsContext","CometFeedNoRoutingNavigationEventsLoggerImpl","CometTrackingCodeContext","CometTrackingNodesContext","React","emptyFunction"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){var c=g.useContext(b("CometTrackingNodesContext")),d=g.useContext(b("CometTrackingCodeContext"));d=d.encrypted_tracking[0];var e=g.useContext(b("CometFeedLoggingExtraFieldsContext"));return d===null||d===void 0?b("emptyFunction"):b("CometFeedNoRoutingNavigationEventsLoggerImpl")((a=a)!=null?a:c,d,e)}}),null);
__d("ProfileCometProfileLink.react",["CometLink.react","CometRelay","ProfileCometLinkContext","React","recoverableViolation","requireCond","cr:1530371","ProfileCometProfileLink_actor.graphql"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React");function a(a,c){var d=a.actor,e=a.children;a=babelHelpers.objectWithoutPropertiesLoose(a,["actor","children"]);d=b("CometRelay").useFragment(g!==void 0?g:g=b("ProfileCometProfileLink_actor.graphql"),d);var f=h.useContext(b("ProfileCometLinkContext"));f=f.groupID;if(d.id==null)return b("recoverableViolation")("Missing id for actor","comet_ui");f=f!=null&&b("cr:1530371")?b("cr:1530371").buildURL({group_id:f,member_id:d.id}):d.profile_url;return h.jsx(b("CometLink.react"),babelHelpers["extends"]({href:f,ref:c},a,{children:e}))}c=h.forwardRef(a);e.exports=c}),null);
__d("ProfileCometContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext({isInViewAs:!1,profileID:"",profileVanity:null,viewerID:""});e.exports=c}),null);
__d("baseTextTransformAllStrings",["React"],(function(a,b,c,d,e,f){"use strict";e.exports=i;var g=b("React");function h(a){return(a==null?void 0:a.type)===g.Fragment&&typeof (a==null?void 0:(a=a.props)==null?void 0:a.children)==="string"}function i(a,b,c,d){c===void 0&&(c=3);d===void 0&&(d=0);var e=0;if(typeof a==="string"){var f=a;return b(f,d+"-"+e++)}else if(Array.isArray(a))return a.map(function(a,f){if(h(a))return g.cloneElement(a,{children:b(a.props.children,d+"-"+e++)});return d<c?i(a,b,c,d+1):a});else if(a!=null&&typeof a==="object"){f=g.Children.only(a);if(h(f))return g.cloneElement(f,{children:b(f.props.children,d+"-"+e++)})}return a}}),null);
__d("CometHovercardEntityRenderer",["Actor","ActorHovercard.react","CometRelay","React","canRenderHovercardForGraphQLEntityType","CometHovercardEntityRenderer_actor.graphql"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React");g!==void 0?g:g=b("CometHovercardEntityRenderer_actor.graphql");a=function(a,c){var d=b("Actor").useActor();d=d[0];if(d==null||d==="0")return a;if(b("canRenderHovercardForGraphQLEntityType")(c.__typename)===!1)return a;return c.id==null?a:h.jsx(b("ActorHovercard.react"),{actorID:c.id,display:"inline",children:function(b){return h.jsx("span",{ref:b,children:a})}})};e.exports=a}),null);
__d("CometLinkedEntityRenderer",["CometLink.react","CometRelay","ProfileCometProfileLink.react","React","CometLinkedEntityRenderer_entity.graphql"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React");g!==void 0?g:g=b("CometLinkedEntityRenderer_entity.graphql");a=function(a,c){if(c.url==null)return a;return c.__typename==="User"?h.jsx(b("ProfileCometProfileLink.react"),{actor:c,ref:null,children:a}):h.jsx(b("CometLink.react"),{href:c.url,children:a})};e.exports=a}),null);
__d("CometEmojiTransform",["CometEmojiWithContextualSize.react","EmojiRenderer","React","baseTextTransformAllStrings"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){a=a===void 0?{}:a;var c=a.size;return function(a){var d=0;return b("baseTextTransformAllStrings")(a,function(a,e){return b("EmojiRenderer").render(a,function(a){return g.jsx(b("CometEmojiWithContextualSize.react"),{emoji:a,size:c},e+"-"+d++)})})}}}),null);
__d("EmoticonRenderer",["EmoticonsList"],(function(a,b,c,d,e,f){var g=["LIKE","PACMAN","FACE_WITH_COLON_THREE"],h={parse:function(a){var c=[],d=new RegExp(b("EmoticonsList").regexp),e=0,f=a.match(d);while(f!==null){var h=f[1],i=f[2].split(""),j=b("EmoticonsList").emotes[f[2]];j=b("EmoticonsList").emoji[j];c.push({chars:i,key:j,isCustom:g.includes(j),offset:e+f.index+h.length});e+=f.index+f[0].length;f=a.slice(e).match(d)}return c},render:function(a,b,c){var d=h.parse(a),e=[],f=0;d.forEach(function(d){var g=d.offset;g>f&&e.push(a.substr(f,g-f));d.isCustom?e.push(c(d.key,d.chars)):e.push(b(d.key));f=g+d.chars.length});e.push(a.substr(f,a.length-f));return e}};e.exports=h}),null);
__d("CometEmoticonTransform",["CometEmojiWithContextualSize.react","EmoticonRenderer","FBEmojiResource","FBEmojiUtils","React","baseTextTransformAllStrings"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){a=a===void 0?{}:a;var c=a.size;return function(a){var d=0;return b("baseTextTransformAllStrings")(a,function(a,e){return b("EmoticonRenderer").render(a,function(a){return g.jsx(b("CometEmojiWithContextualSize.react"),{emoji:[b("FBEmojiUtils").codepointsToString(a.split("_").map(function(a){return Number("0x"+a)}))],resource:new(b("FBEmojiResource"))(a),size:c},e+"-"+d++)},function(a,f){return g.jsx(b("CometEmojiWithContextualSize.react"),{emoji:f,resource:new(b("FBEmojiResource"))(a),size:c},e+"-"+d++)})})}}}),null);
__d("CometLineBreakTransform",["React","baseTextTransformAllStrings"],(function(a,b,c,d,e,f){"use strict";var g=b("React");a=function(a,c){var d=0;return b("baseTextTransformAllStrings")(a,function(a,b){return a.split("\n").reduce(function(a,c,e){return e===0?[].concat(a,[c]):[].concat(a,[g.jsx("br",{},b+"-"+d++),c])},[])})};e.exports=a}),null);
__d("CometUFIReactionLinkWithError.react",["CometUFIReactionLink.react","React","useCometUFICodedErrorDialog"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){var c=b("useCometUFICodedErrorDialog")(),d=c.errorDialog;c=c.setError;return g.jsxs(g.Fragment,{children:[g.jsx(b("CometUFIReactionLink.react"),babelHelpers["extends"]({},a,{onReactionError:c})),d]})}}),null);
__d("IdentityBadgeUtils",["cx","gkx"],(function(a,b,c,d,e,f,g){"use strict";var h=function(a){switch(a){case"tipper":case"birthday_week_tipper":case"streamer_appreciation_week_tipper":return b("gkx")("709988");case"sharer":return b("gkx")("709989");case"follower":return b("gkx")("833805");case"woodhenge_submageddon":return b("gkx")("1113070");case"original":return b("gkx")("1144561");case"top_fan":case"frequent_watcher":case"woodhenge":case"author":case"fan_funding_supporter":case"moderator":case"staff":case"live_video_assigned_role":return!0;default:return!1}};a=function(a){if(a==null||a.length===0)return null;a=a.filter(function(a){a=JSON.parse(a.serialized);a=a.type;return h(a)});return a.length===0?null:a.map(function(a){var b=JSON.parse(a.serialized);b=b.type;return{type:b,badge_asset:a.badge_asset,badge_color:a.badge_color,multiple_badge_asset:a.multiple_badge_asset,multiple_badge_asset_colored:a.multiple_badge_asset_colored,text:a.text,serialized:a.serialized}})};var i=(c={},c.frequent_watcher="_7wxe",c.woodhenge="_7wxf",c.top_fan="_7wxg",c),j=function(a,b){return!1};d=function(a,b,c,d){if(!a||!Array.isArray(a.identityBadges)||a.identityBadges.length===0||!a.isunseen||d===!0||!j(b,c))return null;d=a.identityBadges.map(function(a){return a.type}).filter(function(a){return a.toString()in i});return d.length===0?null:i[d[0]]};e.exports={commentColorAnimationClass:d,fromLiveVideoCommentCreateSubscription:a,isEligibleForColorComments:j,isBadgeTypeEligible:h}}),null);