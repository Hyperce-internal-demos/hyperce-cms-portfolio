(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[6630],{25970:(x,b,s)=>{var n=s(63012),c=s(79095);function g(d,h){return n(d,h,function(y,f){return c(d,f)})}x.exports=g},63012:(x,b,s)=>{var n=s(97786),c=s(10611),g=s(71811);function d(h,y,f){for(var j=-1,O=y.length,w={};++j<O;){var F=y[j],M=n(h,F);f(M,F)&&c(w,g(F,h),M)}return w}x.exports=d},92052:(x,b,s)=>{var n=s(42980),c=s(13218);function g(d,h,y,f,j,O){return c(d)&&c(h)&&(O.set(h,d),n(d,h,void 0,g,O),O.delete(h)),d}x.exports=g},66913:(x,b,s)=>{var n=s(96874),c=s(5976),g=s(92052),d=s(30236),h=c(function(y){return y.push(void 0,g),n(d,void 0,y)});x.exports=h},30236:(x,b,s)=>{var n=s(42980),c=s(21463),g=c(function(d,h,y,f){n(d,h,y,f)});x.exports=g},78718:(x,b,s)=>{var n=s(25970),c=s(99021),g=c(function(d,h){return d==null?{}:n(d,h)});x.exports=g},98601:(x,b,s)=>{var n=s(57406);function c(g,d){return g==null?!0:n(g,d)}x.exports=c},29558:(x,b,s)=>{"use strict";s.d(b,{Z:()=>ve});var n=s(97582),c=s(67294),g=s(74806),d=s(680),h=s(25687),y=s(16284),f=s(88222),j=s(39943);function O(e,i){return Object.keys(e).reduce(function(r,t){return r[t]=(0,n.pi)({timeZone:i},e[t]),r},{})}function w(e,i){var r=Object.keys((0,n.pi)((0,n.pi)({},e),i));return r.reduce(function(t,o){return t[o]=(0,n.pi)((0,n.pi)({},e[o]||{}),i[o]||{}),t},{})}function F(e,i){if(!i)return e;var r=y.C.formats;return(0,n.pi)((0,n.pi)((0,n.pi)({},r),e),{date:w(O(r.date,i),O(e.date||{},i)),time:w(O(r.time,i),O(e.time||{},i))})}var M=function(e,i,r,t,o){var a=e.locale,l=e.formats,u=e.messages,v=e.defaultLocale,L=e.defaultFormats,p=e.fallbackOnEmptyString,C=e.onError,B=e.timeZone,J=e.defaultRichTextElements;r===void 0&&(r={id:""});var V=r.id,D=r.defaultMessage;(0,h.kG)(!!V,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var N=String(V),R=u&&Object.prototype.hasOwnProperty.call(u,N)&&u[N];if(Array.isArray(R)&&R.length===1&&R[0].type===j.wD.literal)return R[0].value;if(!t&&R&&typeof R=="string"&&!J)return R.replace(/'\{(.*?)\}'/gi,"{$1}");if(t=(0,n.pi)((0,n.pi)({},J),t||{}),l=F(l,B),L=F(L,B),!R){if(p===!1&&R==="")return R;if((!D||a&&a.toLowerCase()!==v.toLowerCase())&&C(new f.$6(r,a)),D)try{var Z=i.getMessageFormat(D,v,L,o);return Z.format(t)}catch(W){return C(new f.X9('Error formatting default message for: "'.concat(N,'", rendering default message verbatim'),a,r,W)),typeof D=="string"?D:N}return N}try{var Z=i.getMessageFormat(R,a,l,(0,n.pi)({formatters:i},o||{}));return Z.format(t)}catch(W){C(new f.X9('Error formatting message: "'.concat(N,'", using ').concat(D?"default message":"id"," as fallback."),a,r,W))}if(D)try{var Z=i.getMessageFormat(D,v,L,o);return Z.format(t)}catch(W){C(new f.X9('Error formatting the default message for: "'.concat(N,'", rendering message verbatim'),a,r,W))}return typeof R=="string"?R:typeof D=="string"?D:N},m=s(82644),T=["style","currency","currencyDisplay","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem"];function P(e,i,r){var t=e.locale,o=e.formats,a=e.onError;r===void 0&&(r={});var l=r.format,u=l&&(0,m.TB)(o,"number",l,a)||{},v=(0,m.L6)(r,T,u);return i(t,v)}function I(e,i,r,t){t===void 0&&(t={});try{return P(e,i,t).format(r)}catch(o){e.onError(new f.Qe("Error formatting number.",e.locale,o))}return String(r)}function S(e,i,r,t){t===void 0&&(t={});try{return P(e,i,t).formatToParts(r)}catch(o){e.onError(new f.Qe("Error formatting number.",e.locale,o))}return[]}var E=s(11050),k=["numeric","style"];function U(e,i,r){var t=e.locale,o=e.formats,a=e.onError;r===void 0&&(r={});var l=r.format,u=!!l&&(0,m.TB)(o,"relative",l,a)||{},v=(0,m.L6)(r,k,u);return i(t,v)}function z(e,i,r,t,o){o===void 0&&(o={}),t||(t="second");var a=Intl.RelativeTimeFormat;a||e.onError(new E.u_(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,E.jK.MISSING_INTL_API));try{return U(e,i,o).format(r,t)}catch(l){e.onError(new f.Qe("Error formatting relative time.",e.locale,l))}return String(r)}var A=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function K(e,i,r,t){var o=e.locale,a=e.formats,l=e.onError,u=e.timeZone;t===void 0&&(t={});var v=t.format,L=(0,n.pi)((0,n.pi)({},u&&{timeZone:u}),v&&(0,m.TB)(a,i,v,l)),p=(0,m.L6)(t,A,L);return i==="time"&&!p.hour&&!p.minute&&!p.second&&!p.timeStyle&&!p.dateStyle&&(p=(0,n.pi)((0,n.pi)({},p),{hour:"numeric",minute:"numeric"})),r(o,p)}function _(e,i){for(var r=[],t=2;t<arguments.length;t++)r[t-2]=arguments[t];var o=r[0],a=r[1],l=a===void 0?{}:a,u=typeof o=="string"?new Date(o||0):o;try{return K(e,"date",i,l).format(u)}catch(v){e.onError(new f.Qe("Error formatting date.",e.locale,v))}return String(u)}function q(e,i){for(var r=[],t=2;t<arguments.length;t++)r[t-2]=arguments[t];var o=r[0],a=r[1],l=a===void 0?{}:a,u=typeof o=="string"?new Date(o||0):o;try{return K(e,"time",i,l).format(u)}catch(v){e.onError(new f.Qe("Error formatting time.",e.locale,v))}return String(u)}function ee(e,i){for(var r=[],t=2;t<arguments.length;t++)r[t-2]=arguments[t];var o=r[0],a=r[1],l=r[2],u=l===void 0?{}:l,v=e.timeZone,L=e.locale,p=e.onError,C=(0,m.L6)(u,A,v?{timeZone:v}:{});try{return i(L,C).formatRange(o,a)}catch(B){p(new f.Qe("Error formatting date time range.",e.locale,B))}return String(o)}function te(e,i){for(var r=[],t=2;t<arguments.length;t++)r[t-2]=arguments[t];var o=r[0],a=r[1],l=a===void 0?{}:a,u=typeof o=="string"?new Date(o||0):o;try{return K(e,"date",i,l).formatToParts(u)}catch(v){e.onError(new f.Qe("Error formatting date.",e.locale,v))}return[]}function re(e,i){for(var r=[],t=2;t<arguments.length;t++)r[t-2]=arguments[t];var o=r[0],a=r[1],l=a===void 0?{}:a,u=typeof o=="string"?new Date(o||0):o;try{return K(e,"time",i,l).formatToParts(u)}catch(v){e.onError(new f.Qe("Error formatting time.",e.locale,v))}return[]}var ne=["type"];function ae(e,i,r,t){var o=e.locale,a=e.onError;t===void 0&&(t={}),Intl.PluralRules||a(new E.u_(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,E.jK.MISSING_INTL_API));var l=(0,m.L6)(t,ne);try{return i(o,l).select(r)}catch(u){a(new f.Qe("Error formatting plural.",o,u))}return"other"}var oe=["type","style"],$=Date.now();function ie(e){return"".concat($,"_").concat(e,"_").concat($)}function se(e,i,r,t){t===void 0&&(t={});var o=G(e,i,r,t).reduce(function(a,l){var u=l.value;return typeof u!="string"?a.push(u):typeof a[a.length-1]=="string"?a[a.length-1]+=u:a.push(u),a},[]);return o.length===1?o[0]:o.length===0?"":o}function G(e,i,r,t){var o=e.locale,a=e.onError;t===void 0&&(t={});var l=Intl.ListFormat;l||a(new E.u_(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,E.jK.MISSING_INTL_API));var u=(0,m.L6)(t,oe);try{var v={},L=r.map(function(p,C){if(typeof p=="object"){var B=ie(C);return v[B]=p,B}return String(p)});return i(o,u).formatToParts(L).map(function(p){return p.type==="literal"?p:(0,n.pi)((0,n.pi)({},p),{value:v[p.value]||p.value})})}catch(p){a(new f.Qe("Error formatting list.",o,p))}return r}var le=["style","type","fallback","languageDisplay"];function ue(e,i,r,t){var o=e.locale,a=e.onError,l=Intl.DisplayNames;l||a(new E.u_(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,E.jK.MISSING_INTL_API));var u=(0,m.L6)(t,le);try{return i(o,u).of(r)}catch(v){a(new f.Qe("Error formatting display name.",o,v))}}function fe(e){var i=e?e[Object.keys(e)[0]]:void 0;return typeof i=="string"}function me(e){e.onWarn&&e.defaultRichTextElements&&fe(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`)}function ce(e,i){var r=(0,m.ax)(i),t=(0,n.pi)((0,n.pi)({},m.Z0),e),o=t.locale,a=t.defaultLocale,l=t.onError;return o?!Intl.NumberFormat.supportedLocalesOf(o).length&&l?l(new f.gb('Missing locale data for locale: "'.concat(o,'" in Intl.NumberFormat. Using default locale: "').concat(a,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(o).length&&l&&l(new f.gb('Missing locale data for locale: "'.concat(o,'" in Intl.DateTimeFormat. Using default locale: "').concat(a,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):(l&&l(new f.OV('"locale" was not configured, using "'.concat(a,'" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))),t.locale=t.defaultLocale||"en"),me(t),(0,n.pi)((0,n.pi)({},t),{formatters:r,formatNumber:I.bind(null,t,r.getNumberFormat),formatNumberToParts:S.bind(null,t,r.getNumberFormat),formatRelativeTime:z.bind(null,t,r.getRelativeTimeFormat),formatDate:_.bind(null,t,r.getDateTimeFormat),formatDateToParts:te.bind(null,t,r.getDateTimeFormat),formatTime:q.bind(null,t,r.getDateTimeFormat),formatDateTimeRange:ee.bind(null,t,r.getDateTimeFormat),formatTimeToParts:re.bind(null,t,r.getDateTimeFormat),formatPlural:ae.bind(null,t,r.getPluralRules),formatMessage:M.bind(null,t,r),$t:M.bind(null,t,r),formatList:se.bind(null,t,r.getListFormat),formatListToParts:G.bind(null,t,r.getListFormat),formatDisplayName:ue.bind(null,t,r.getDisplayNames)})}var de=s(61092);function Q(e){return{locale:e.locale,timeZone:e.timeZone,fallbackOnEmptyString:e.fallbackOnEmptyString,formats:e.formats,textComponent:e.textComponent,messages:e.messages,defaultLocale:e.defaultLocale,defaultFormats:e.defaultFormats,onError:e.onError,onWarn:e.onWarn,wrapRichTextChunksInFragment:e.wrapRichTextChunksInFragment,defaultRichTextElements:e.defaultRichTextElements}}function H(e){return e&&Object.keys(e).reduce(function(i,r){var t=e[r];return i[r]=(0,de.Gt)(t)?(0,d.dt)(t):t,i},{})}var X=function(e,i,r,t){for(var o=[],a=4;a<arguments.length;a++)o[a-4]=arguments[a];var l=H(t),u=M.apply(void 0,(0,n.ev)([e,i,r,l],o,!1));return Array.isArray(u)?c.Children.toArray(u):u},Y=function(e,i){var r=e.defaultRichTextElements,t=(0,n._T)(e,["defaultRichTextElements"]),o=H(r),a=ce((0,n.pi)((0,n.pi)((0,n.pi)({},d.Z0),t),{defaultRichTextElements:o}),i),l={locale:a.locale,timeZone:a.timeZone,fallbackOnEmptyString:a.fallbackOnEmptyString,formats:a.formats,defaultLocale:a.defaultLocale,defaultFormats:a.defaultFormats,messages:a.messages,onError:a.onError,defaultRichTextElements:o};return(0,n.pi)((0,n.pi)({},a),{formatMessage:X.bind(null,l,a.formatters),$t:X.bind(null,l,a.formatters)})},ge=function(e){(0,n.ZT)(i,e);function i(){var r=e!==null&&e.apply(this,arguments)||this;return r.cache=(0,m.Sn)(),r.state={cache:r.cache,intl:Y(Q(r.props),r.cache),prevConfig:Q(r.props)},r}return i.getDerivedStateFromProps=function(r,t){var o=t.prevConfig,a=t.cache,l=Q(r);return(0,d.wU)(o,l)?null:{intl:Y(l,a),prevConfig:l}},i.prototype.render=function(){return(0,d.lq)(this.state.intl),c.createElement(g.zt,{value:this.state.intl},this.props.children)},i.displayName="IntlProvider",i.defaultProps=d.Z0,i}(c.PureComponent);const ve=ge},34726:(x,b,s)=>{"use strict";s.d(b,{D:()=>g});var n=s(85893),c=s(16607);const g=({children:d})=>(0,n.jsx)(c.x,{paddingLeft:10,paddingRight:10,children:d})},90731:(x,b,s)=>{"use strict";s.d(b,{T:()=>w});var n=s(85893),c=s(67294),g=s(1565);const d=m=>{const T=(0,c.useRef)(null),[P,I]=(0,c.useState)(!0),S=([E])=>{I(E.isIntersecting)};return(0,c.useEffect)(()=>{const E=T.current,k=new IntersectionObserver(S,m);return E&&k.observe(T.current),()=>{E&&k.disconnect()}},[T,m]),[T,P]};var h=s(79698);const y=(m,T)=>{const P=(0,h.W)(T);(0,c.useLayoutEffect)(()=>{const I=new ResizeObserver(P);return Array.isArray(m)?m.forEach(S=>{S.current&&I.observe(S.current)}):m.current&&I.observe(m.current),()=>{I.disconnect()}},[m,P])};var f=s(16607),j=s(96987),O=s(10574);const w=m=>{const T=(0,c.useRef)(null),[P,I]=(0,c.useState)(null),[S,E]=d({root:null,rootMargin:"0px",threshold:0});return y(S,()=>{S.current&&I(S.current.getBoundingClientRect())}),(0,c.useEffect)(()=>{T.current&&I(T.current.getBoundingClientRect())},[T]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{style:{height:P?.height},ref:S,children:E&&(0,n.jsx)(M,{ref:T,...m})}),!E&&(0,n.jsx)(M,{...m,sticky:!0,width:P?.width})]})};w.displayName="HeaderLayout";const F=(0,g.ZP)(f.x)`
  width: ${({width:m})=>m?`${m/16}rem`:void 0};
  z-index: ${({theme:m})=>m.zIndices[1]};
`,M=c.forwardRef(({navigationAction:m,primaryAction:T,secondaryAction:P,subtitle:I,title:S,sticky:E,width:k,...U},z)=>{const A=typeof I=="string";return E?(0,n.jsx)(F,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:k,"data-strapi-header-sticky":!0,children:(0,n.jsxs)(j.k,{justifyContent:"space-between",children:[(0,n.jsxs)(j.k,{children:[m&&(0,n.jsx)(f.x,{paddingRight:3,children:m}),(0,n.jsxs)(f.x,{children:[(0,n.jsx)(O.Z,{variant:"beta",as:"h1",...U,children:S}),A?(0,n.jsx)(O.Z,{variant:"pi",textColor:"neutral600",children:I}):I]}),P?(0,n.jsx)(f.x,{paddingLeft:4,children:P}):null]}),(0,n.jsx)(j.k,{children:T?(0,n.jsx)(f.x,{paddingLeft:2,children:T}):void 0})]})}):(0,n.jsxs)(f.x,{ref:z,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:m?6:8,background:"neutral100","data-strapi-header":!0,children:[m?(0,n.jsx)(f.x,{paddingBottom:2,children:m}):null,(0,n.jsxs)(j.k,{justifyContent:"space-between",children:[(0,n.jsxs)(j.k,{minWidth:0,children:[(0,n.jsx)(O.Z,{as:"h1",variant:"alpha",...U,children:S}),P?(0,n.jsx)(f.x,{paddingLeft:4,children:P}):null]}),T]}),A?(0,n.jsx)(O.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:I}):I]})})},40720:(x,b,s)=>{"use strict";s.d(b,{o:()=>h});var n=s(85893),c=s(1565),g=s(16607);const d=(0,c.ZP)(g.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,h=({labelledBy:y="main-content-title",...f})=>(0,n.jsx)(d,{"aria-labelledby":y,as:"main",id:"main-content",tabIndex:-1,...f})},47754:(x,b,s)=>{"use strict";s.d(b,{z:()=>h});var n=s(85893),c=s(1565),g=s(16607);const d=(0,c.ZP)(g.x)`
  text-decoration: none;

  &:focus {
    left: ${({theme:y})=>y.spaces[3]};
    top: ${({theme:y})=>y.spaces[3]};
  }
`,h=({children:y})=>(0,n.jsx)(d,{as:"a",href:"#main-content",background:"primary600",color:"neutral0",left:"-100%",padding:3,position:"absolute",top:"-100%",hasRadius:!0,zIndex:9999,children:y})},5907:(x,b,s)=>{"use strict";s.d(b,{$:()=>d});const n={color:{alternative100:"#181826",alternative200:"#4a4a6a",alternative500:"#ac73e6",alternative600:"#ac73e6",alternative700:"#e0c1f4",buttonNeutral0:"#ffffff",buttonPrimary500:"#7b79ff",buttonPrimary600:"#4945ff",danger100:"#181826",danger200:"#4a4a6a",danger500:"#ee5e52",danger600:"#ee5e52",danger700:"#ee5e52",neutral0:"#212134",neutral100:"#181826",neutral1000:"#ffffff",neutral150:"#32324d",neutral200:"#4a4a6a",neutral300:"#666687",neutral400:"#a5a5ba",neutral500:"#c0c0cf",neutral600:"#a5a5ba",neutral700:"#eaeaef",neutral800:"#ffffff",neutral900:"#ffffff",primary100:"#181826",primary200:"#4a4a6a",primary500:"#4945ff",primary600:"#7b79ff",primary700:"#7b79ff",secondary100:"#181826",secondary200:"#4a4a6a",secondary500:"#66b7f1",secondary600:"#66b7f1",secondary700:"#b8e1ff",success100:"#181826",success200:"#4a4a6a",success500:"#5cb176",success600:"#5cb176",success700:"#c6f0c2",warning100:"#181826",warning200:"#4a4a6a",warning500:"#f29d41",warning600:"#f29d41",warning700:"#fae7b9"}},c={shadow:{filterShadow:"1px 1px 10px rgba(3, 3, 5, 0.35)",focus:"inset 2px 0px 0px rgb(39, 31, 224), inset 0px 2px 0px rgb(39, 31, 224), inset -2px 0px 0px rgb(39, 31, 224), inset 0px -2px 0px rgb(39, 31, 224)",focusShadow:"0px 0px 6px rgba(76, 191, 255, 0.75)",popupShadow:"1px 1px 10px rgba(3, 3, 5, 0.35)",tableShadow:"1px 1px 10px rgba(3, 3, 5, 0.2)"}};var g=s(55189);const d={colors:n.color,shadows:c.shadow,...g.x}}}]);
