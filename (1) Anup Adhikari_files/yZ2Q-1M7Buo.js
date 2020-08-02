if (self.CavalryLogger) { CavalryLogger.start_js(["ZT3Vr"]); }

__d("TimelineProfilePictureLoggerEnums",[],(function(a,b,c,d,e,f){e.exports={actions:{ADD_FRAME:"add_frame",EDIT_THUMBNAIL:"edit_thumbnail",FROM_PHOTOS:"from_photos",MAKE_PROFILE:"make_profile",SILHOUETTE:"silhouette",SUGGESTION:"suggestion",SUGGESTION_UPLOAD:"suggestion_upload",SYNCED_PHOTO:"synced_photo",TAKE_PHOTO:"take_photo",UPLOAD:"upload_photo",USE_PREVIOUS:"use_previous"},flows:{PERMALINK:"permalink",SNOWLIFT:"snowlift",SPOTLIGHT:"spotlight",VAULT:"vault",ZOOMCROP:"zoomcrop"},steps:{CANCEL:"cancel",CROP:"crop",CROP_FAIL:"crop_fail",CROP_SAVING:"crop_saving",CROP_SUCCESS:"crop_success",DRAG_AND_DROP:"drag_and_drop",FAIL:"fail",INIT:"init",LOADING:"loading",PREVIOUS_PIC_FAIL:"previous_pic_fail",PREVIOUS_PIC_INIT:"previous_pic_init",PREVIOUS_PIC_SAVING:"previous_pic_saving",PREVIOUS_PIC_SUCCESS:"previous_pic_success",RESIZE_BEGIN:"resize_begin",RESIZE_SKIPPED:"resize_skipped",RESIZE_SUCCESS:"resize_success",RESIZE_FAIL:"resize_fail",SKIP_CROP:"skip_crop",SUCCESS:"success",UPLOAD_CANCEL:"upload_cancel",UPLOAD_SELECT:"upload_select",UPLOAD_SUCCESS:"upload_success",VIEWER_INIT:"viewer_init"}}}),null);
__d("MuteMemberHelper",["Arbiter","PopoverAsyncMenu"],(function(a,b,c,d,e,f){"use strict";var g="group_member_muted";a={emitMemberMuted:function(a){b("Arbiter").inform(g,{groupID:a})},refetchOnGroupMemberMuted:function(a,c){b("Arbiter").subscribe(g,function(b,d){d.groupID===c&&a._refetchMenu()})}};e.exports=a}),null);
__d("RemoveGroupAppCTAHelper",["Arbiter"],(function(a,b,c,d,e,f){"use strict";var g="group_app_cta_removed";a={emitGroupAppCTARemoved:function(a){b("Arbiter").inform(g,{groupPostID:a})},refetchOnGroupAppCTARemoved:function(a,c){b("Arbiter").subscribe(g,function(b,d){d.groupPostID===c&&a._refetchMenu()})}};e.exports=a}),null);
__d("TurnOnMemberPostApprovalHelper",["Arbiter"],(function(a,b,c,d,e,f){"use strict";var g="group_member_post_approval";a={emitMemberPostApproval:function(a){b("Arbiter").inform(g,{groupID:a})},refetchOnGroupMemberPostApproval:function(a,c){b("Arbiter").subscribe(g,function(b,d){d.groupID===c&&a._refetchMenu()})}};e.exports=a}),null);
__d("AlbumMediaUploadUtils",["VideoUploadConfig"],(function(a,b,c,d,e,f){a={isVideoFile:function(a){a=a.name;var c=b("VideoUploadConfig").videoExtensions;a=a.indexOf(".")!==-1?a.split(".").pop().toLowerCase():"";return c[a]},hasVideos:function(a){return this._filterVideos(a).length>0},_filterVideos:function(a){return this._filterFileOfSupportedType(a,b("VideoUploadConfig").videoExtensions)},_filterFileOfSupportedType:function(a,b){return a.filter(function(a){a=a.indexOf(".")!==-1?a.split(".").pop().toLowerCase():"";return b[a]})}};e.exports=a}),null);
__d("UploadSession",["invariant","AlbumMediaUploadUtils","AsyncRequest","FilePickerEvent","PhotosUploadWaterfall","SubscriptionsHandler","URI"],(function(a,b,c,d,e,f,g){var h,i={},j=function(){"use strict";function a(a){this._sessionID=a,this._asyncBootstrapped=!1,this._controller=null,this._overlay=null,this._pickers=[],this._pendingPhotoFileLists=[],this._pendingVideoFileLists=[],this._beginLogged=!1,this._albumLimitWasExceeded=!1,this._sessionLimitWasExceeded=!1,this._subscriptions=new(b("SubscriptionsHandler"))()}var c=a.prototype;c.addFilePicker=function(a){var c=this;this._pickers.includes(a)||(this._pickers.push(a),this._controller&&a.getSwfID&&a.getSwfID()&&(this._controller.preregisterSwf&&this._controller.preregisterSwf(a.getSwfID())),this._subscriptions.addSubscriptions(a.subscribe(b("FilePickerEvent").BEGIN,function(c,d){this._beginLogged||(this._beginLogged=!0,a.logWaterfallStep(b("PhotosUploadWaterfall").BEGIN),a.logStep("client_flow_begin"))}.bind(this)),a.subscribe(b("FilePickerEvent").SELECTED,function(c,d){a.logStep("client_select_success",{volume:d.files.length});var e=[],f=[];d.files.forEach(function(a){b("AlbumMediaUploadUtils").isVideoFile(a)?e.push(a):f.push(a)});this._controller?(f.length>0&&this._controller.uploadFiles(f),this._videoController&&e.length>0&&this._videoController.uploadFiles(e)):(f.length>0&&this._pendingPhotoFileLists.push(f),e.length>0&&this._pendingVideoFileLists.push(e));if(this._asyncBootstrapped)return;c=a._button;var g=new(h||(h=b("URI")))(c.getAttribute("ajaxify"));g.addQueryData("num_selected",d.files.length);b("AsyncRequest").bootstrap(g.toString(),c,!0);this._asyncBootstrapped=!0}.bind(this)),a.subscribe(b("FilePickerEvent").SELECT_START,function(){a.logStep("client_select_begin")}.bind(this)),a.subscribe(b("FilePickerEvent").SELECT_CANCELED,function(){a.logStep("client_select_cancel"),this._overlay||(a.logStep("client_flow_cancel"),this._beginLogged=!1)}.bind(this)),a.subscribe(b("FilePickerEvent").ALBUM_LIMIT_EXCEEDED,function(){c._controller?c._controller.albumLimitExceeded():c._albumLimitWasExceeded=!0}),a.subscribe(b("FilePickerEvent").SESSION_LIMIT_EXCEEDED,function(){c._controller?c._controller.sessionLimitExceeded():c._sessionLimitWasExceeded=!0})))};c.addController=function(a,c){this._controller=a;this._videoController=c;this._asyncBootstrapped=!0;a=this._controller.getWaterfallID?this._controller.getWaterfallID():this._controller.getWaterfallConfig().waterfallID;c=this._controller.getUploaderApp?this._controller.getUploaderApp():this._controller.getWaterfallConfig().waterfallApp;this._beginLogged||(this._beginLogged=!0,b("PhotosUploadWaterfall").sendSignal({qn:a,step:b("PhotosUploadWaterfall").BEGIN,uploader:c}));if(this._pendingPhotoFileLists.length>0||this._pendingVideoFileLists.length>0){var d=[],e=[];this._pendingVideoFileLists.forEach(function(a){e=e.concat(a)});this._pendingPhotoFileLists.forEach(function(a){d=d.concat(a)});d.length>0&&this._controller.uploadFiles(d);e.length>0&&this._videoController.uploadFiles(e)}else b("PhotosUploadWaterfall").sendSignal({qn:a,step:b("PhotosUploadWaterfall").OVERLAY_FIRST,uploader:c});this._albumLimitWasExceeded&&this._controller.albumLimitExceeded();this._sessionLimitWasExceeded&&this._controller.sessionLimitExceeded()};c.addOverlay=function(a){this._overlay=a};c.addOverlayAndController=function(a,b){this.addOverlay(a),this.addController(b,null)};c.getFilePickers=function(){return this._pickers};c.cleanup=function(){this._subscriptions&&this._subscriptions.release()};a.addFilePickerToSession=function(a,b){k(a).addFilePicker(b)};a.addControllerToSession=function(a,b,c){k(a).addController(b,c)};a.addOverlayToSession=function(a,b){k(a).addOverlay(b)};a.addOverlayAndControllerToSession=function(a,b,c){k(a).addOverlayAndController(b,c)};a.restartSessionPersistingFilePickers=function(b){var c=k(b),d=new a(b);c.getFilePickers().forEach(function(a){d.addFilePicker(a)});l(b,d)};return a}();function k(a){i[a]||(i[a]=new j(a));return i[a]}function l(a,b){i[a]||g(0,6106),i[a].cleanup(),delete i[a],i[a]=b}e.exports=j}),null);
__d("ProfilePhotoActionLogger",["Banzai"],(function(a,b,c,d,e,f){a={EVENT_SELECT_METHOD:"select_method",EVENT_CAMERA_PERMISSION_PROVIDED:"permission_provided",EVENT_CAMERA_PERMISSION_DENIED:"permission_denied",EVENT_CAMERA_NO_WEBCAM:"permission_denied",EVENT_CAMERA_UNKNOWN_MEDIASTREAM_ERROR:"unknown_mediastream_error",EVENT_CAMERA_TAKE_PHOTO:"take_photo",EVENT_CAMERA_RETAKE_PHOTO:"retake_photo",EVENT_CAMERA_UPLOAD_ATTEMPT:"upload_attempt",EVENT_CAMERA_UPLOAD_ERROR:"upload_error",EVENT_CAMERA_UPLOAD_SUCCESS:"upload_success",SOURCE_SUGGESTIONS:"suggestions",SOURCE_TIMELINE:"timeline",SOURCE_NUX:"nux",METHOD_EXISTING:"existing",METHOD_UPLOAD:"upload",METHOD_CAMERA:"camera",log:function(a,c,d){b("Banzai").post("profile_photo_action",{event:a,source:c,method:d})}};e.exports=a}),null);
__d("TimelineProfilePicConfig",["fbt"],(function(a,b,c,d,e,f,g){a={loading:"timeline/profile_pic/loading",success:"timeline/profile_pic/success",leavingMessage:g._("Your profile picture is still uploading, are you sure you want to leave?")};e.exports=a}),null);
__d("ProfilePictureFlowLogging",["Arbiter","Banzai","CurrentUser","Event","Parent","ProfilePhotoActionLogger","Run","TimelineProfilePicConfig","TimelineProfilePictureLoggerEnums","WebFunnelLogger","tidyEvent"],(function(a,b,c,d,e,f){var g=b("TimelineProfilePicConfig").loading,h=b("TimelineProfilePicConfig").success,i="data-action-type",j,k,l,m;function n(){m&&m.unsubscribe(),m=null}function o(a){var c=new(b("WebFunnelLogger"))("ProfileBlueTimelineWebFunnelDefinition").setSessionKey(b("CurrentUser").getID());a===p.step.UPLOAD_SUCCESS?c.setAction("[action][profile picture edit dialog][upload success]").log():j===p.action.ADD_FRAME&&a===p.step.VIEWER_INIT?c.setAction("[impression][profile picture edit dialog][frame selector]").log():a===p.step.VIEWER_INIT?c.setAction("[impression][profile picture edit dialog][edit thumbnail]").log():a===p.step.SUCCESS&&c.setAction("[action][profile picture edit dialog][save success]").log()}var p={action:b("TimelineProfilePictureLoggerEnums").actions,flow:b("TimelineProfilePictureLoggerEnums").flows,step:b("TimelineProfilePictureLoggerEnums").steps,log:function(a){var c=a||p.step.INIT;b("Banzai").post("profile_pic_action",{action_type:j,flow_type:k,step_type:c});o(c);j===p.action.UPLOAD&&c===p.step.INIT&&l!=null&&b("ProfilePhotoActionLogger").log(b("ProfilePhotoActionLogger").EVENT_SELECT_METHOD,l,b("ProfilePhotoActionLogger").METHOD_UPLOAD);k=null;(a==="success"||a==="fail")&&(j=null);return p},setAction:function(a){j=a;return p},setFlowType:function(a){k=a;return p},setSource:function(a){l=a;return p},init:function(a,c){c&&(l=c),m||(m=b("Arbiter").subscribe([g,h],function(a){p.log(a===g?b("TimelineProfilePictureLoggerEnums").steps.LOADING:b("TimelineProfilePictureLoggerEnums").steps.SUCCESS)}),b("Run").onLeave(n)),b("tidyEvent")(b("Event").listen(a,"click",function(a){a=b("Parent").byAttribute(a.getTarget(),i);if(!a)return;a=a.getAttribute(i);a&&p.setAction(a).log()}))},initMenuItems:function(a,b,c){p.init(a.getRoot(),c)}};e.exports=p}),null);
__d("ProfilePicCropViewerInit",["Bootloader","ProfilePictureFlowLogging","React"],(function(a,b,c,d,e,f){var g=b("React"),h="profile-picture-crop",i="loading",j=b("ProfilePictureFlowLogging").flow,k,l;function m(){l&&l.close()}function n(a,c,d){d=d||{};b("Bootloader").loadModules(["SpotlightViewerInit","ZoomProfilePicCropViewer.react","PhotoStore","AsyncRequest","AsyncResponse","XProfilePicCropViewerAsyncController"],function(b,e,f,j,n,o){m();var p=d.stickerID;k=h+":"+a+":"+c;p&&(k+=":"+p);if(!d.skipCropping){l=b.render(g.jsx(e,{cancelCallback:d.cancelCallback,cropMode:d.cropMode,errorCallback:d.errorCallback,method:d.method,open:!0,photoID:a,profileID:c,setid:k,source:d.source,successCallback:d.successCallback,uploadRequest:d.uploadRequest,warnOnCancel:d.warnOnCancel}),function(){l=null});if(f.hasBeenCreated(k)||a===i)return;b=o.getURIBuilder().setString("photo_id",a).setInt("profile_id",c).setString("set_id",k).setBool("will_load_more_photos",!0);p&&b.setInt("sticker_id",p);b=b.getURI();var q=k;new j(b).setErrorHandler(function(a){q===k&&m(),n.defaultErrorHandler(a)}).send()}},"ProfilePicCropViewerInit");return!0}a={close:m,getFlowType:function(){return j.ZOOMCROP},useCropViewer:function(){return!0},loading:function(a,b){n(i,a,b)},loadID:n};e.exports=a}),null);
__d("ReactComposerPaidVirtualEventForPageActorDisclaimer.react",["cx","fbt","FDSDivider.react","React","cxMargin"],(function(a,b,c,d,e,f,g,h){var i=b("React");function a(){return i.jsxs("div",{children:[i.jsx(b("FDSDivider.react"),{margin:"_4jnw"}),i.jsx("div",{className:"_2ph- _8kd9",children:h._("This is a paid virtual event, live videos and posts you explicitly choose to gate will only be visible to those who have purchased access. All other posts will be visible to anyone on or off Facebook.")})]})}e.exports=a}),null);
__d("ReactComposerPublicEventDisclaimer.react",["cx","fbt","FDSDivider.react","React","cxMargin"],(function(a,b,c,d,e,f,g,h){var i=b("React");function a(a){return i.jsxs("div",{children:[i.jsx(b("FDSDivider.react"),{margin:"_4jnw"}),i.jsx("div",{className:"_2ph- _8kd9",children:h._("This is a public event, so your post will be visible to anyone on or off Facebook.")})]})}e.exports=a}),null);