if (self.CavalryLogger) { CavalryLogger.start_js(["+6DDU"]); }

__d("GroupDescription",["Arbiter","Event","tidyEvent"],(function(a,b,c,d,e,f){a={onDescriptionActionButtonClick:function(a){b("tidyEvent")(b("Event").listen(a,"click",function(){b("Arbiter").inform("GroupsRHC/expandDescContainer")}))}};e.exports=a}),null);
__d("GroupsDescTagContainer",["cx","Arbiter","CSS","Event","tidyEvent"],(function(a,b,c,d,e,f,g){a=function(){"use strict";function a(a,c,d){this.$1=a,this.$2=c,this.$3=d,this.checkAndCollapseContent(),b("Arbiter").subscribe("GroupsRHC/expandDescContainer",this.expandContainer.bind(this))}var c=a.prototype;c.checkAndCollapseContent=function(){if(this.$1.getBoundingClientRect().height<=this.$3)return;b("CSS").addClass(this.$1,"__gz");b("CSS").show(this.$2);b("tidyEvent")(b("Event").listen(this.$2,"click",this.expandContainer.bind(this)))};c.expandContainer=function(){b("CSS").removeClass(this.$1,"__gz"),b("CSS").hide(this.$2)};return a}();e.exports=a}),null);
__d("GroupsMemberCountUpdater",["Arbiter","DOM"],(function(a,b,c,d,e,f){function a(){}a.subscribeMemberCount=function(a){b("Arbiter").subscribe("GroupsMemberCount/changeText",function(c,d){b("DOM").setContent(a,d)})};a.subscribeNewMemberCount=function(a){b("Arbiter").subscribe("GroupsMemberCount/changeNewMembersText",function(c,d){b("DOM").setContent(a,d)})};a.subscribeWelcomeMemberCount=function(a){b("Arbiter").subscribe("GroupsMemberCount/changeWelcomeMembersText",function(c,d){b("DOM").setContent(a,d)})};e.exports=a}),null);
__d("XReactComposerGroupNewMemberAutoTaggedController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/react_composer/groups/new_member_welcome/",{group_id:{type:"FBID"},__asyncDialog:{type:"Int"}})}),null);
__d("GroupNewMemberWelcomePost",["ActorURI","Arbiter","AsyncRequest","CSS","Event","ReactComposerEvents","XReactComposerGroupNewMemberAutoTaggedController","tidyEvent"],(function(a,b,c,d,e,f){var g=null;a=function(){"use strict";function a(){}var c=a.prototype;c.construct=function(){};a.initRhcNotice=function(a){g=a};a.registerForComposerFinish=function(a,c){b("Arbiter").subscribe(b("ReactComposerEvents").POST_SUCCEEDED+a,function(){g!=null&&b("CSS").hide(g),c&&c.hide()})};a.onClickButton=function(a){b("tidyEvent")(b("Event").listen(a.button,"click",function(){var c=b("XReactComposerGroupNewMemberAutoTaggedController").getURIBuilder().setFBID("group_id",a.groupID).getURI();c=b("ActorURI").create(c,a.actorID);new(b("AsyncRequest"))(c).send()}))};return a}();e.exports=a}),null);
__d("GroupsAddMemberTypeahead",["Arbiter","DOM","Typeahead","ge"],(function(a,b,c,d,e,f){function a(a,b){a&&b&&this.init(a,b)}Object.assign(a.prototype,{init:function(a,c){a.subscribe("select",function(a,d){b("Arbiter").inform("GroupsAddMemberTypeahead/add",{gid:c,uid:d.selected.uid,name:d.selected.text,photo:d.selected.photo})}),b("Arbiter").subscribe("GroupsAddMemberTypeahead/updateGroupToken",this.resetTypeaheadCaches.bind(this))},resetTypeaheadCaches:function(a,c){a=b("DOM").scry(b("ge")("pagelet_group_"),".uiTypeahead:not(.uiPlacesTypeahead)");for(var d=0;d<a.length;d++){var e=b("Typeahead").getInstance(a[d]);if(e){var f=e.getData();f.updateToken(c.token);e.getCore().subscribe("focus",f.bootstrap.bind(f))}}}});e.exports=a}),null);
__d("legacy:GroupsAddMemberTypeahead",["GroupsAddMemberTypeahead"],(function(a,b,c,d,e,f){a.GroupsAddMemberTypeahead=b("GroupsAddMemberTypeahead")}),3);
__d("GroupsAddTypeaheadView",["Arbiter","ContextualTypeaheadView"],(function(a,b,c,d,e,f){a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.select=function(c){var d=this.results[this.index];b("Arbiter").inform("GroupsMemberSuggestion/remove",d.uid);d.is_member?this.reset():a.prototype.select.call(this,!!c)};return c}(b("ContextualTypeaheadView"));e.exports=a}),null);
__d("GroupsAddMemberTypeaheadView",["csx","cx","fbt","CSS","CurrentUser","DOM","GroupsAddTypeaheadView","ex","getOrCreateDOMID"],(function(a,b,c,d,e,f,g,h,i){var j="friends",k="others",l="coworkers",m="email";function n(a){var c;switch(a){case j:c=i._("Friends");break;case k:c=i._("Others");break;case l:c=i._("Coworkers");break;case m:c=i._("Email");break;default:throw new Error(b("ex")("The given typeahead result category seems to be untransformed: %s",a))}a=b("DOM").create("li",{className:"_3cz5",data:a},c);return a}c=function(c){"use strict";babelHelpers.inheritsLoose(d,c);function d(){return c.apply(this,arguments)||this}var e=d.prototype;e.getItems=function(){return b("DOM").scry(this.content,'li[role="option"]')};e.buildResults=function(c){var d,e=null;typeof this.renderer==="function"?(d=this.renderer,e=this.renderer.className||""):(d=a.TypeaheadRenderers[this.renderer],e=this.renderer);d=d.bind(this);var f=null;c=c.reduce(function(a,c,e){e=c.node||d(c,e);var g=c.bootstrapped&&c.type!="email"?j:k;b("CurrentUser").isWorkUser()&&(c.aux_data&&c.aux_data.is_email?g=m:g=l);c.header=g;if(c.inviter_type!=="page"&&g!==f){c=n(g);f!==null&&b("CSS").addClass(c,"_3cz6");a=a.concat(c);f=g}return a.concat(e)},[]);if(c.length>0){var g=c.filter(function(a){return b("CSS").matchesSelector(a,"._3cz5")});g.length==1&&c[0].className==="_3cz5"&&c[0].attributes.data.value===k&&c.shift()}g=b("DOM").create("ul",{className:e,id:"typeahead_list_"+b("getOrCreateDOMID")(this.typeahead?this.typeahead:this.element)},c);g.setAttribute("role","listbox");return g};e.render=function(a,b,d){var e={friends:[],others:[]};b.reduce(function(a,b){b.header===j?a.friends.push(b):a.others.push(b);return a},e);b=e.friends.concat(e.others);return c.prototype.render.call(this,a,b,d)};return d}(b("GroupsAddTypeaheadView"));e.exports=c}),null);
__d("GroupsAddMemberTypeaheadRenderer",["cx","fbt","DOM"],(function(a,b,c,d,e,f,g,h){"use strict";function a(a){var c=[];a.photo&&c.push(b("DOM").create("img",{alt:"",src:a.photo,className:"_2-fx"}));a.text&&c.push(b("DOM").create("span",{className:"_2-fy"},a.text));if(a.subtext){var d=[a.subtext];c.push(b("DOM").create("span",{className:"subtext"},d))}a.type==="member"?d=h._("Already a member"):a.already_invited_to_group?d=h._("Already invited"):d=a.category;c.push(b("DOM").create("span",{className:"subtext"},d));d=b("DOM").create("li",{className:a.type||""},c);a.text&&(d.setAttribute("title",a.text),d.setAttribute("role","option"),d.setAttribute("aria-label",a.text));return d}a.className="_2-fz";e.exports=a}),null);
__d("FormSubmit",["AsyncRequest","AsyncResponse","CSS","DOMQuery","Event","Form","Parent","trackReferrer"],(function(a,b,c,d,e,f){var g={buildRequest:function(a,c){var d=(b("Form").getAttribute(a,"method")||"GET").toUpperCase();c=c&&b("Parent").byTag(c,"button")||c;var e=c&&b("Parent").byClass(c,"stat_elem")||a;if(b("CSS").hasClass(e,"async_saving"))return null;if(c&&(c.form!==a||c.nodeName!="INPUT"&&c.nodeName!="BUTTON"||c.type!="submit")){var f=b("DOMQuery").scry(a,".enter_submit_target")[0];f&&(c=f)}f=b("Form").serialize(a,c);b("Form").setDisabled(a,!0);c=b("Form").getAttribute(a,"ajaxify")||b("Form").getAttribute(a,"action");var g=!!b("Form").getAttribute(a,"data-cors");b("trackReferrer")(a,c);return new(b("AsyncRequest"))().setAllowCrossOrigin(g).setURI(c).setData(f).setNectarModuleDataSafe(a).setReadOnly(d=="GET").setMethod(d).setRelativeTo(a).setStatusElement(e).setInitialHandler(b("Form").setDisabled.bind(null,a,!1)).setHandler(function(c){b("Event").fire(a,"success",{response:c})}).setErrorHandler(function(c){b("Event").fire(a,"error",{response:c})!==!1&&b("AsyncResponse").defaultErrorHandler(c)}).setFinallyHandler(b("Form").setDisabled.bind(null,a,!1))},send:function(a,b){a=g.buildRequest(a,b);a&&a.send();return a}};e.exports=g}),null);
__d("GroupAddMemberCustomTypeahead",["Typeahead"],(function(a,b,c,d,e,f){a=function(a){"use strict";babelHelpers.inheritsLoose(b,a);function b(b,c,d,e,f){b=a.call(this,b,c,d,e)||this;b._memberSuggestions=f;return b}var c=b.prototype;c.containsInSuggestedMembers=function(a){a=parseInt(a,10);return this._memberSuggestions.indexOf(a)>-1};c.addSuggestedMember=function(a){a=parseInt(a,10);this._memberSuggestions.push(a)};c.removeSuggestedMember=function(a){a=parseInt(a,10);a=this._memberSuggestions.indexOf(a);a>-1&&this._memberSuggestions.splice(a,1)};return b}(b("Typeahead"));e.exports=a}),null);
__d("TypeaheadSubmitOnSelect",["FormSubmit"],(function(a,b,c,d,e,f){a=function(){"use strict";function a(a){this._typeahead=a}var c=a.prototype;c.enable=function(){this._subscription=this._typeahead.subscribe("select",function(){var a=this._typeahead.getCore().getElement().form;a&&(a.getAttribute("rel")=="async"?b("FormSubmit").send(a):a.submit())}.bind(this))};c.disable=function(){this._typeahead.unsubscribe(this._subscription),this._subscription=null};return a}();Object.assign(a.prototype,{_subscription:null});e.exports=a}),null);
__d("legacy:SubmitOnSelectTypeaheadBehavior",["TypeaheadSubmitOnSelect"],(function(a,b,c,d,e,f){a.TypeaheadBehaviors||(a.TypeaheadBehaviors={}),a.TypeaheadBehaviors.submitOnSelect=function(a){a.enableBehavior(b("TypeaheadSubmitOnSelect"))}}),3);
__d("TypeaheadShowResultsOnFocus",["Event","Keys"],(function(a,b,c,d,e,f){a=function(){"use strict";function a(a){this._typeahead=a}var c=a.prototype;c.enable=function(){this._typeahead.getCore().resetOnKeyup=!1,this._subscription=this._typeahead.subscribe("bootstrap",function(a,b){this.firstFetch(b,this._typeahead.getCore(),this._typeahead.getData())}.bind(this)),this._keyUpListener=b("Event").listen(this._typeahead.getCore().getElement(),"keyup",function(a){(b("Event").getKeyCode(a)==b("Keys").BACKSPACE||b("Event").getKeyCode(a)==b("Keys").DELETE)&&this.respond(this._typeahead.getCore(),this._typeahead.getData())}.bind(this)),this._focusListener=b("Event").listen(this._typeahead.getCore().getElement(),"focus",function(a){this.respond(this._typeahead.getCore(),this._typeahead.getData())}.bind(this))};c.disable=function(){this._typeahead.unsubscribe(this._subscription),this._subscription=null,this._keyUpListener.remove(),this._keyUpListener=null,this._focusListener.remove(),this._focusListener=null};c.firstFetch=function(a,b,c){a.bootstrapping||this.respond(b,c)};c.respond=function(a,b){a.getValue()||this.refreshAndShowNeededResults(a,b)};c.refreshAndShowNeededResults=function(a,b){var c=this.getUidsFromData(b);a.setValue("");a=b.buildUids(" ",c);b.respond("",a)};c.getUidsFromData=function(a){a=a.getAllEntries();var b=[];for(var c in a)b.push({uid:a[c].uid,index:a[c].index});b.sort(function(a,b){return a.index-b.index});return b.map(function(a){return a.uid})};return a}();Object.assign(a.prototype,{_subscription:null,_keyUpListener:null,_focusListener:null});e.exports=a}),null);
__d("TypeaheadCustomGroupShowMemberSuggestionsOnFocus",["TypeaheadShowResultsOnFocus"],(function(a,b,c,d,e,f){a=function(a){"use strict";babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var c=b.prototype;c.enable=function(){a.prototype.enable.call(this),this.enableCustomizedFeature()};c.firstFetch=function(b,c,d){var e=this;setTimeout(function(){a.prototype.firstFetch.call(e,b,c,d)},200)};c.enableCustomizedFeature=function(){this._typeahead.subscribe("select",function(a,b){this._typeahead.removeSuggestedMember(b.selected.uid),this.refreshAndShowNeededResults(this._typeahead.getCore(),this._typeahead.getData())}.bind(this))};c.getUidsFromData=function(a){a=a.getAllEntries();var b=[];for(var c in a)this._typeahead.containsInSuggestedMembers(a[c].uid)&&b.push({uid:a[c].uid,index:a[c].index});b.sort(function(a,b){return a.index-b.index});return b.map(function(a){return a.uid})};return b}(b("TypeaheadShowResultsOnFocus"));e.exports=a}),null);
__d("TypeaheadCustomGroupShowMemberSuggestionsOnRHCFocus",["TypeaheadCustomGroupShowMemberSuggestionsOnFocus"],(function(a,b,c,d,e,f){a=function(a){"use strict";babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var c=b.prototype;c.enableCustomizedFeature=function(){this._typeahead.subscribe("select",function(a,b){this._typeahead.removeSuggestedMember(b.selected.uid)}.bind(this))};return b}(b("TypeaheadCustomGroupShowMemberSuggestionsOnFocus"));e.exports=a}),null);
__d("htmlSpecialChars",[],(function(a,b,c,d,e,f){var g=/&/g,h=/</g,i=/>/g,j=/\"/g,k=/\'/g;function a(a){if(typeof a==="undefined"||a===null||!a.toString)return"";if(a===!1)return"0";else if(a===!0)return"1";return a.toString().replace(g,"&amp;").replace(j,"&quot;").replace(k,"&#039;").replace(h,"&lt;").replace(i,"&gt;")}e.exports=a}),null);