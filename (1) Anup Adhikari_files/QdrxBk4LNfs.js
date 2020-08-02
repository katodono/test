if (self.CavalryLogger) { CavalryLogger.start_js(["trvRE"]); }

__d("GeoPrivateARIACollapsibleListbox.react",["GeoPrivateARIAListboxContext","Keys","React","useBoolean","useGeoOnClickOutside","useLayoutEffect_SAFE_FOR_SSR","usePrevious"],(function(a,b,c,d,e,f){"use strict";var g=b("React");c=b("React");var h=c.useCallback,i=c.useMemo,j=c.useRef;function a(a){var c=a.buttonRenderer,d=a.isMultiSelectable,e=d===void 0?!1:d;d=a.labelID;var f=a.popupRenderer,n=a.onCollapse,o=a.onExpand;a=b("useBoolean")(!1);var p=a.value,q=a.setFalse,r=a.setTrue;a=j(null);var s=h(function(){p&&(q(),n==null?void 0:n())},[q,p,n]),t=h(function(){p||(r(),o==null?void 0:o())},[r,p,o]),u=l(t),v=k(a,s);m(a,p);c=c({accessibilityProps:{"aria-expanded":p,"aria-haspopup":"listbox","aria-labelledby":d},onClick:t,onKeyDown:u});t=f({collapse:s,labelID:d,onKeyDown:v,ref:a});var w=h(function(a){a==null?void 0:a.preventDefault();a=(a==null?void 0:a.nativeEvent)instanceof KeyboardEvent&&a.nativeEvent.keyCode===b("Keys").RETURN;a=!e||a;a&&s()},[s,e]);u=i(function(){return{onSelect:w}},[w]);return g.jsxs(b("GeoPrivateARIAListboxContext").Provider,{value:u,children:[c,p&&t]})}function k(a,c){b("useGeoOnClickOutside")(c,[a]);return h(function(a){a.keyCode===b("Keys").ESC&&(a.stopPropagation(),c())},[c])}function l(a){return h(function(c){switch(c.keyCode){case b("Keys").UP:case b("Keys").DOWN:c.preventDefault();a();return;default:return}},[a])}function m(a,c){var d=b("usePrevious")(c),e=c!==d;b("useLayoutEffect_SAFE_FOR_SSR")(function(){if(e&&c){var b;b=(b=a.current)==null?void 0:b.querySelector('[role="listbox"]');b==null?void 0:b.focus()}},[c,e,a])}e.exports=a}),null);