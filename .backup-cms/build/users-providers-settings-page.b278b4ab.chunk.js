(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[2282],{8884:(p,m,t)=>{"use strict";t.r(m),t.d(m,{ProvidersPage:()=>le,default:()=>Ze});var r=t(67294),o=t(334),s=t(71590),a=t(40720),l=t(90731),e=t(34726),n=t(5923),c=t(3547),f=t(29299),x=t(69398),v=t(10574),u=t(22304),h=t(35752),$=t(96208),i=t(18638),d=t(2382),E=t(18721),L=t.n(E),U=t(11700),W=t.n(U),H=t(86896),F=t(88767),he=t(74622),me=t(36854),ge=t(71543),fe=t(96987),pe=t(31988),ve=t(6498),be=t(37022),ne=t(12473),xe=t(67276),ye=t(28971),$e=t(41054),Ee=t(45697),g=t.n(Ee),Pe=t(17705),Me=t(38670);const X=({description:y,disabled:B,intlLabel:j,error:Z,name:C,onChange:z,placeholder:T,providerToEditName:w,type:D,value:P})=>{const{formatMessage:R}=(0,H.Z)(),A=C==="noName"?`${window.strapi.backendURL}/api/connect/${w}/callback`:P,I=R({id:j.id,defaultMessage:j.defaultMessage},{provider:w,...j.values}),S=y?R({id:y.id,defaultMessage:y.defaultMessage},{provider:w,...y.values}):"";if(D==="bool")return r.createElement(Pe.s,{"aria-label":C,checked:P,disabled:B,hint:S,label:I,name:C,offLabel:R({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:R({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:_=>{z({target:{name:C,value:_.target.checked}})}});const q=T?R({id:T.id,defaultMessage:T.defaultMessage},{...T.values}):"",N=Z?R({id:Z,defaultMessage:Z}):"";return r.createElement(Me.o,{"aria-label":C,disabled:B,error:N,label:I,name:C,onChange:z,placeholder:q,type:D,value:A})};X.defaultProps={description:null,disabled:!1,error:"",placeholder:null,value:""},X.propTypes={description:g().shape({id:g().string.isRequired,defaultMessage:g().string.isRequired,values:g().object}),disabled:g().bool,error:g().string,intlLabel:g().shape({id:g().string.isRequired,defaultMessage:g().string.isRequired,values:g().object}).isRequired,name:g().string.isRequired,onChange:g().func.isRequired,placeholder:g().shape({id:g().string.isRequired,defaultMessage:g().string.isRequired,values:g().object}),providerToEditName:g().string.isRequired,type:g().string.isRequired,value:g().oneOfType([g().bool,g().string])};const Be=X,k=({headerBreadcrumbs:y,initialData:B,isSubmiting:j,layout:Z,isOpen:C,onSubmit:z,onToggle:T,providerToEditName:w})=>{const{formatMessage:D}=(0,H.Z)();return C?r.createElement(he.P,{onClose:T,labelledBy:"title"},r.createElement(me.x,null,r.createElement(xe.O,{label:y.join(", ")},y.map((P,R,A)=>r.createElement(ye.$,{isCurrent:R===A.length-1,key:P},P)))),r.createElement($e.J9,{onSubmit:P=>z(P),initialValues:B,validationSchema:Z.schema,validateOnChange:!1},({errors:P,handleChange:R,values:A})=>r.createElement(i.l0,null,r.createElement(ge.f,null,r.createElement(fe.k,{direction:"column",alignItems:"stretch",gap:1},r.createElement(pe.r,{gap:5},Z.form.map(I=>I.map(S=>r.createElement(ve.P,{key:S.name,col:S.size,xs:12},r.createElement(Be,{...S,error:P[S.name],onChange:R,value:A[S.name],providerToEditName:w}))))))),r.createElement(be.m,{startActions:r.createElement(ne.z,{variant:"tertiary",onClick:T,type:"button"},D({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:r.createElement(ne.z,{type:"submit",loading:j},D({id:"global.save",defaultMessage:"Save"}))})))):null};k.defaultProps={initialData:null,providerToEditName:null},k.propTypes={headerBreadcrumbs:g().arrayOf(g().string).isRequired,initialData:g().object,layout:g().shape({form:g().arrayOf(g().array),schema:g().object}).isRequired,isOpen:g().bool.isRequired,isSubmiting:g().bool.isRequired,onSubmit:g().func.isRequired,onToggle:g().func.isRequired,providerToEditName:g().string};const Oe=k;var re=t(84419),M=t(99688);const Le=async y=>{try{const{get:B}=(0,i.tg)(),{data:j}=await B("/users-permissions/providers");return j}catch{throw y({type:"warning",message:{id:"notification.error"}}),new Error("error")}},Ce=y=>{const{put:B}=(0,i.tg)();return B("/users-permissions/providers",y)};var je=t(89734),Te=t.n(je);const Re=y=>Te()(Object.keys(y).reduce((B,j)=>{const{icon:Z,enabled:C,subdomain:z}=y[j],T=Z==="envelope"?["fas","envelope"]:["fab",Z];return z!==void 0?B.push({name:j,icon:T,enabled:C,subdomain:z}):B.push({name:j,icon:T,enabled:C}),B},[]),"name");var b=t(87561);const se={id:(0,M.OB)("PopUpForm.Providers.redirectURL.front-end.label"),defaultMessage:"The redirect URL to your front-end app"},ae={id:"http://www.client-app.com",defaultMessage:"http://www.client-app.com"},G={id:(0,M.OB)("PopUpForm.Providers.enabled.description"),defaultMessage:"If disabled, users won't be able to use this provider."},J={id:(0,M.OB)("PopUpForm.Providers.enabled.label"),defaultMessage:"Enable"},ie={id:(0,M.OB)("PopUpForm.Providers.key.label"),defaultMessage:"Client ID"},oe={id:(0,M.OB)("PopUpForm.Providers.redirectURL.label"),defaultMessage:"The redirect URL to add in your {provider} application configurations"},K={id:(0,M.OB)("PopUpForm.Providers.key.placeholder"),defaultMessage:"TEXT"},de={id:(0,M.OB)("PopUpForm.Providers.secret.label"),defaultMessage:"Client Secret"},Y={email:{form:[[{intlLabel:J,name:"enabled",type:"bool",description:G,size:6}]],schema:b.Ry().shape({enabled:b.Xg().required(i.I0.required)})},providers:{form:[[{intlLabel:J,name:"enabled",type:"bool",description:G,size:6,validations:{required:!0}}],[{intlLabel:ie,name:"key",type:"text",placeholder:K,size:12,validations:{required:!0}}],[{intlLabel:de,name:"secret",type:"text",placeholder:K,size:12,validations:{required:!0}}],[{intlLabel:se,placeholder:ae,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:oe,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:b.Ry().shape({enabled:b.Xg().required(i.I0.required),key:b.Z_().when("enabled",{is:!0,then:b.Z_().required(i.I0.required),otherwise:b.Z_()}),secret:b.Z_().when("enabled",{is:!0,then:b.Z_().required(i.I0.required),otherwise:b.Z_()}),callback:b.Z_().when("enabled",{is:!0,then:b.Z_().required(i.I0.required),otherwise:b.Z_()})})},providersWithSubdomain:{form:[[{intlLabel:J,name:"enabled",type:"bool",description:G,size:6,validations:{required:!0}}],[{intlLabel:ie,name:"key",type:"text",placeholder:K,size:12,validations:{required:!0}}],[{intlLabel:de,name:"secret",type:"text",placeholder:K,size:12,validations:{required:!0}}],[{intlLabel:{id:(0,M.OB)({id:"PopUpForm.Providers.jwksurl.label"}),defaultMessage:"JWKS URL"},name:"jwksurl",type:"text",placeholder:K,size:12,validations:{required:!1}}],[{intlLabel:{id:(0,M.OB)("PopUpForm.Providers.subdomain.label"),defaultMessage:"Host URI (Subdomain)"},name:"subdomain",type:"text",placeholder:{id:(0,M.OB)("PopUpForm.Providers.subdomain.placeholder"),defaultMessage:"my.subdomain.com"},size:12,validations:{required:!0}}],[{intlLabel:se,placeholder:ae,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:oe,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:b.Ry().shape({enabled:b.Xg().required(i.I0.required),key:b.Z_().when("enabled",{is:!0,then:b.Z_().required(i.I0.required),otherwise:b.Z_()}),secret:b.Z_().when("enabled",{is:!0,then:b.Z_().required(i.I0.required),otherwise:b.Z_()}),subdomain:b.Z_().when("enabled",{is:!0,then:b.Z_().required(i.I0.required),otherwise:b.Z_()}),callback:b.Z_().when("enabled",{is:!0,then:b.Z_().required(i.I0.required),otherwise:b.Z_()})})}},le=()=>{const{formatMessage:y}=(0,H.Z)();(0,i.go)();const{notifyStatus:B}=(0,o.G)(),j=(0,F.useQueryClient)(),{trackUsage:Z}=(0,i.rS)(),C=(0,r.useRef)(Z),[z,T]=(0,r.useState)(!1),[w,D]=(0,r.useState)(!1),[P,R]=(0,r.useState)(null),A=(0,i.lm)(),{lockApp:I,unlockApp:S}=(0,i.o1)(),{isLoading:q,allowedActions:{canUpdate:N}}=(0,i.ss)({update:re._.updateProviders}),{isLoading:_,data:V,isFetching:Se}=(0,F.useQuery)("get-providers",()=>Le(A),{onSuccess(){B(y({id:(0,M.OB)("Providers.data.loaded"),defaultMessage:"Providers have been loaded"}))},initialData:{}}),ze=_||Se,De=(0,F.useMutation)(Ce,{async onSuccess(){await j.invalidateQueries("get-providers"),A({type:"info",message:{id:(0,M.OB)("notification.success.submit")}}),C.current("didEditAuthenticationProvider"),D(!1),ee(),S()},onError(){A({type:"warning",message:{id:"notification.error"}}),S(),D(!1)},refetchActive:!1}),Q=(0,r.useMemo)(()=>Re(V),[V]),Ae=Q.length,ue=(0,r.useMemo)(()=>{if(!P)return!1;const O=Q.find(te=>te.name===P);return L()(O,"subdomain")},[Q,P]),Ue=y({id:(0,M.OB)("HeaderNav.link.providers"),defaultMessage:"Providers"}),we=(0,r.useMemo)(()=>P==="email"?Y.email:ue?Y.providersWithSubdomain:Y.providers,[P,ue]),ee=()=>{T(O=>!O)},ce=O=>{N&&(R(O.name),ee())},We=async O=>{D(!0),I(),C.current("willEditAuthenticationProvider");const te={...V,[P]:O};De.mutate({providers:te})};return r.createElement(s.A,null,r.createElement(i.SL,{name:Ue}),r.createElement(a.o,null,r.createElement(l.T,{title:y({id:(0,M.OB)("HeaderNav.link.providers"),defaultMessage:"Providers"})}),ze||q?r.createElement(i.dO,null):r.createElement(e.D,null,r.createElement(n.i,{colCount:3,rowCount:Ae+1},r.createElement(c.h,null,r.createElement(f.Tr,null,r.createElement(x.Th,null,r.createElement(v.Z,{variant:"sigma",textColor:"neutral600"},y({id:"global.name",defaultMessage:"Name"}))),r.createElement(x.Th,null,r.createElement(v.Z,{variant:"sigma",textColor:"neutral600"},y({id:(0,M.OB)("Providers.status"),defaultMessage:"Status"}))),r.createElement(x.Th,null,r.createElement(v.Z,{variant:"sigma"},r.createElement(u.T,null,y({id:"global.settings",defaultMessage:"Settings"})))))),r.createElement(h.p,null,Q.map(O=>r.createElement(f.Tr,{key:O.name,...(0,i.X7)({fn:()=>ce(O),condition:N})},r.createElement(x.Td,{width:"45%"},r.createElement(v.Z,{fontWeight:"semiBold",textColor:"neutral800"},O.name)),r.createElement(x.Td,{width:"65%"},r.createElement(v.Z,{textColor:O.enabled?"success600":"danger600","data-testid":`enable-${O.name}`},O.enabled?y({id:"global.enabled",defaultMessage:"Enabled"}):y({id:"global.disabled",defaultMessage:"Disabled"}))),r.createElement(x.Td,{...i.UW},N&&r.createElement($.h,{onClick:()=>ce(O),noBorder:!0,icon:r.createElement(d.Z,null),label:"Edit"})))))))),r.createElement(Oe,{initialData:V[P],isOpen:z,isSubmiting:w,layout:we,headerBreadcrumbs:[y({id:(0,M.OB)("PopUpForm.header.edit.providers"),defaultMessage:"Edit Provider"}),W()(P)],onToggle:ee,onSubmit:We,providerToEditName:P}))},Ze=()=>r.createElement(i.O4,{permissions:re._.readProviders},r.createElement(le,null))},99688:(p,m,t)=>{"use strict";t.d(m,{YX:()=>a,OB:()=>l.Z});var r=t(41609),o=t.n(r);const a=e=>Object.keys(e).reduce((n,c)=>{const f=e[c].controllers,x=Object.keys(f).reduce((v,u)=>(o()(f[u])||(v[u]=f[u]),v),{});return o()(x)||(n[c]={controllers:x}),n},{});var l=t(97961)},89881:(p,m,t)=>{var r=t(47816),o=t(99291),s=o(r);p.exports=s},69199:(p,m,t)=>{var r=t(89881),o=t(98612);function s(a,l){var e=-1,n=o(a)?Array(a.length):[];return r(a,function(c,f,x){n[++e]=l(c,f,x)}),n}p.exports=s},82689:(p,m,t)=>{var r=t(29932),o=t(97786),s=t(67206),a=t(69199),l=t(71131),e=t(7518),n=t(85022),c=t(6557),f=t(1469);function x(v,u,h){u.length?u=r(u,function(d){return f(d)?function(E){return o(E,d.length===1?d[0]:d)}:d}):u=[c];var $=-1;u=r(u,e(s));var i=a(v,function(d,E,L){var U=r(u,function(W){return W(d)});return{criteria:U,index:++$,value:d}});return l(i,function(d,E){return n(d,E,h)})}p.exports=x},71131:p=>{function m(t,r){var o=t.length;for(t.sort(r);o--;)t[o]=t[o].value;return t}p.exports=m},26393:(p,m,t)=>{var r=t(33448);function o(s,a){if(s!==a){var l=s!==void 0,e=s===null,n=s===s,c=r(s),f=a!==void 0,x=a===null,v=a===a,u=r(a);if(!x&&!u&&!c&&s>a||c&&f&&v&&!x&&!u||e&&f&&v||!l&&v||!n)return 1;if(!e&&!c&&!u&&s<a||u&&l&&n&&!e&&!c||x&&l&&n||!f&&n||!v)return-1}return 0}p.exports=o},85022:(p,m,t)=>{var r=t(26393);function o(s,a,l){for(var e=-1,n=s.criteria,c=a.criteria,f=n.length,x=l.length;++e<f;){var v=r(n[e],c[e]);if(v){if(e>=x)return v;var u=l[e];return v*(u=="desc"?-1:1)}}return s.index-a.index}p.exports=o},99291:(p,m,t)=>{var r=t(98612);function o(s,a){return function(l,e){if(l==null)return l;if(!r(l))return s(l,e);for(var n=l.length,c=a?n:-1,f=Object(l);(a?c--:++c<n)&&e(f[c],c,f)!==!1;);return l}}p.exports=o},89734:(p,m,t)=>{var r=t(21078),o=t(82689),s=t(5976),a=t(16612),l=s(function(e,n){if(e==null)return[];var c=n.length;return c>1&&a(e,n[0],n[1])?n=[]:c>2&&a(n[0],n[1],n[2])&&(n=[n[0]]),o(e,r(n,1),[])});p.exports=l},34726:(p,m,t)=>{"use strict";t.d(m,{D:()=>s});var r=t(85893),o=t(16607);const s=({children:a})=>(0,r.jsx)(o.x,{paddingLeft:10,paddingRight:10,children:a})},90731:(p,m,t)=>{"use strict";t.d(m,{T:()=>x});var r=t(85893),o=t(67294),s=t(1565);const a=h=>{const $=(0,o.useRef)(null),[i,d]=(0,o.useState)(!0),E=([L])=>{d(L.isIntersecting)};return(0,o.useEffect)(()=>{const L=$.current,U=new IntersectionObserver(E,h);return L&&U.observe($.current),()=>{L&&U.disconnect()}},[$,h]),[$,i]};var l=t(79698);const e=(h,$)=>{const i=(0,l.W)($);(0,o.useLayoutEffect)(()=>{const d=new ResizeObserver(i);return Array.isArray(h)?h.forEach(E=>{E.current&&d.observe(E.current)}):h.current&&d.observe(h.current),()=>{d.disconnect()}},[h,i])};var n=t(16607),c=t(96987),f=t(10574);const x=h=>{const $=(0,o.useRef)(null),[i,d]=(0,o.useState)(null),[E,L]=a({root:null,rootMargin:"0px",threshold:0});return e(E,()=>{E.current&&d(E.current.getBoundingClientRect())}),(0,o.useEffect)(()=>{$.current&&d($.current.getBoundingClientRect())},[$]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{style:{height:i?.height},ref:E,children:L&&(0,r.jsx)(u,{ref:$,...h})}),!L&&(0,r.jsx)(u,{...h,sticky:!0,width:i?.width})]})};x.displayName="HeaderLayout";const v=(0,s.ZP)(n.x)`
  width: ${({width:h})=>h?`${h/16}rem`:void 0};
  z-index: ${({theme:h})=>h.zIndices[1]};
`,u=o.forwardRef(({navigationAction:h,primaryAction:$,secondaryAction:i,subtitle:d,title:E,sticky:L,width:U,...W},H)=>{const F=typeof d=="string";return L?(0,r.jsx)(v,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:U,"data-strapi-header-sticky":!0,children:(0,r.jsxs)(c.k,{justifyContent:"space-between",children:[(0,r.jsxs)(c.k,{children:[h&&(0,r.jsx)(n.x,{paddingRight:3,children:h}),(0,r.jsxs)(n.x,{children:[(0,r.jsx)(f.Z,{variant:"beta",as:"h1",...W,children:E}),F?(0,r.jsx)(f.Z,{variant:"pi",textColor:"neutral600",children:d}):d]}),i?(0,r.jsx)(n.x,{paddingLeft:4,children:i}):null]}),(0,r.jsx)(c.k,{children:$?(0,r.jsx)(n.x,{paddingLeft:2,children:$}):void 0})]})}):(0,r.jsxs)(n.x,{ref:H,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:h?6:8,background:"neutral100","data-strapi-header":!0,children:[h?(0,r.jsx)(n.x,{paddingBottom:2,children:h}):null,(0,r.jsxs)(c.k,{justifyContent:"space-between",children:[(0,r.jsxs)(c.k,{minWidth:0,children:[(0,r.jsx)(f.Z,{as:"h1",variant:"alpha",...W,children:E}),i?(0,r.jsx)(n.x,{paddingLeft:4,children:i}):null]}),$]}),F?(0,r.jsx)(f.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:d}):d]})})},71590:(p,m,t)=>{"use strict";t.d(m,{A:()=>e});var r=t(85893),o=t(1565),s=t(16607);const a=(0,o.ZP)(s.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:n})=>n?"auto 1fr":"1fr"};
`,l=(0,o.ZP)(s.x)`
  overflow-x: hidden;
`,e=({sideNav:n,children:c})=>(0,r.jsxs)(a,{hasSideNav:Boolean(n),children:[n,(0,r.jsx)(l,{paddingBottom:10,children:c})]})},40720:(p,m,t)=>{"use strict";t.d(m,{o:()=>l});var r=t(85893),o=t(1565),s=t(16607);const a=(0,o.ZP)(s.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,l=({labelledBy:e="main-content-title",...n})=>(0,r.jsx)(a,{"aria-labelledby":e,as:"main",id:"main-content",tabIndex:-1,...n})},29385:(p,m,t)=>{"use strict";t.d(m,{x:()=>l});var r=t(1565),o=t(76067),s=t(86822);const a={color:!0,cursor:!0,height:!0,width:!0},l=r.ZP.div.withConfig({shouldForwardProp:(e,n)=>!a[e]&&n(e)})`
  // Font
  font-size: ${({fontSize:e,theme:n})=>(0,s.$)(n.fontSizes,e,e)};

  // Colors
  background: ${({theme:e,background:n})=>(0,s.$)(e.colors,n,n)};
  color: ${({theme:e,color:n})=>(0,s.$)(e.colors,n,void 0)};

  // Spaces
  ${({theme:e,padding:n})=>(0,o.Z)("padding",n,e)}
  ${({theme:e,paddingTop:n})=>(0,o.Z)("padding-top",n,e)}
  ${({theme:e,paddingRight:n})=>(0,o.Z)("padding-right",n,e)}
  ${({theme:e,paddingBottom:n})=>(0,o.Z)("padding-bottom",n,e)}
  ${({theme:e,paddingLeft:n})=>(0,o.Z)("padding-left",n,e)}
  ${({theme:e,marginLeft:n})=>(0,o.Z)("margin-left",n,e)}
  ${({theme:e,marginRight:n})=>(0,o.Z)("margin-right",n,e)}
  ${({theme:e,marginTop:n})=>(0,o.Z)("margin-top",n,e)}
  ${({theme:e,marginBottom:n})=>(0,o.Z)("margin-bottom",n,e)}

  // Responsive hiding
  ${({theme:e,hiddenS:n})=>n?`${e.mediaQueries.tablet} { display: none; }`:void 0}
  ${({theme:e,hiddenXS:n})=>n?`${e.mediaQueries.mobile} { display: none; }`:void 0}
  

  // Borders
  border-radius: ${({theme:e,hasRadius:n,borderRadius:c})=>n?e.borderRadius:c};
  border-style: ${({borderStyle:e})=>e};
  border-width: ${({borderWidth:e})=>e};
  border-color: ${({borderColor:e,theme:n})=>(0,s.$)(n.colors,e,void 0)};
  border: ${({theme:e,borderColor:n,borderStyle:c,borderWidth:f})=>{if(n&&!c&&typeof f>"u")return`1px solid ${e.colors[n]}`}};

  // Shadows
  box-shadow: ${({theme:e,shadow:n})=>(0,s.$)(e.shadows,n,void 0)};

  // Handlers
  pointer-events: ${({pointerEvents:e})=>e};
  &:hover {
    ${({_hover:e,theme:n})=>e?e(n):void 0}
  }

  // Display
  display: ${({display:e})=>e};

  // Position
  position: ${({position:e})=>e};
  left: ${({left:e,theme:n})=>(0,s.$)(n.spaces,e,e)};
  right: ${({right:e,theme:n})=>(0,s.$)(n.spaces,e,e)};
  top: ${({top:e,theme:n})=>(0,s.$)(n.spaces,e,e)};
  bottom: ${({bottom:e,theme:n})=>(0,s.$)(n.spaces,e,e)};
  z-index: ${({zIndex:e})=>e};
  overflow: ${({overflow:e})=>e};

  // Size
  width: ${({width:e,theme:n})=>(0,s.$)(n.spaces,e,e)};
  max-width: ${({maxWidth:e,theme:n})=>(0,s.$)(n.spaces,e,e)};
  min-width: ${({minWidth:e,theme:n})=>(0,s.$)(n.spaces,e,e)};
  height: ${({height:e,theme:n})=>(0,s.$)(n.spaces,e,e)};
  max-height: ${({maxHeight:e,theme:n})=>(0,s.$)(n.spaces,e,e)};
  min-height: ${({minHeight:e,theme:n})=>(0,s.$)(n.spaces,e,e)};

  // Animation
  transition: ${({transition:e})=>e};
  transform: ${({transform:e})=>e};
  animation: ${({animation:e})=>e};

  //Flexbox children props
  flex-shrink: ${({shrink:e})=>e};
  flex-grow: ${({grow:e})=>e};
  flex-basis: ${({basis:e})=>e};
  flex: ${({flex:e})=>e};

  // Text
  text-align: ${({textAlign:e})=>e};
  text-transform: ${({textTransform:e})=>e};
  line-height: ${({theme:e,lineHeight:n})=>(0,s.$)(e.lineHeights,n,n)};

  // Cursor
  cursor: ${({cursor:e})=>e};
`},3122:(p,m,t)=>{"use strict";t.d(m,{Z:()=>$});var r=t(1565);const o="alpha",s="beta",a="delta",l="epsilon",e="omega",n="pi",c="sigma",f=[o,s,a,l,e,n,c],x=({ellipsis:i=!1})=>i&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,v=({variant:i=e,theme:d})=>{switch(i){case o:return`
        font-weight: ${d.fontWeights.bold};
        font-size: ${d.fontSizes[5]};
        line-height: ${d.lineHeights[2]};
      `;case s:return`
        font-weight: ${d.fontWeights.bold};
        font-size: ${d.fontSizes[4]};
        line-height: ${d.lineHeights[1]};
      `;case a:return`
        font-weight: ${d.fontWeights.semiBold};
        font-size: ${d.fontSizes[3]};
        line-height: ${d.lineHeights[2]};
      `;case l:return`
        font-size: ${d.fontSizes[3]};
        line-height: ${d.lineHeights[6]};
      `;case e:return`
        font-size: ${d.fontSizes[2]};
        line-height: ${d.lineHeights[4]};
      `;case n:return`
        font-size: ${d.fontSizes[1]};
        line-height: ${d.lineHeights[3]};
      `;case c:return`
        font-weight: ${d.fontWeights.bold};
        font-size: ${d.fontSizes[0]};
        line-height: ${d.lineHeights[5]};
        text-transform: uppercase;
      `;default:return`
        font-size: ${d.fontSizes[2]};
      `}};var u=t(86822);const h={fontSize:!0,fontWeight:!0},$=r.ZP.span.withConfig({shouldForwardProp:(i,d)=>!h[i]&&d(i)})`
  ${v}
  ${x}

  // These properties need to come after {variantStyle}, because they might
  // overwrite a variant attribute
  font-weight: ${({theme:i,fontWeight:d})=>(0,u.$)(i.fontWeights,d,void 0)};
  font-size: ${({theme:i,fontSize:d})=>(0,u.$)(i.fontSizes,d,void 0)};
  line-height: ${({theme:i,lineHeight:d})=>(0,u.$)(i.lineHeights,d,d)};
  color: ${({theme:i,textColor:d})=>i.colors[d||"neutral800"]};
  text-align: ${({textAlign:i})=>i};
  text-decoration: ${({textDecoration:i})=>i};
  text-transform: ${({textTransform:i})=>i};
`},76067:(p,m,t)=>{"use strict";t.d(m,{Z:()=>r});const r=(o,s,a)=>{if(!s)return;let l=Array.isArray(s)?s:[];if(!Array.isArray(s)&&typeof s=="object"&&(l=[s?.desktop,s?.tablet,s?.mobile]),l.length>0)return l.reduce((n,c,f)=>{if(c)switch(f){case 0:return`${n}${o}: ${a.spaces[c]};`;case 1:return`${n}${a.mediaQueries.tablet}{${o}: ${a.spaces[c]};}`;case 2:return`${n}${a.mediaQueries.mobile}{${o}: ${a.spaces[c]};}`;default:return n}return n},"");const e=a.spaces[s]||s;return`${o}: ${e};`}},86822:(p,m,t)=>{"use strict";t.d(m,{$:()=>s});function r(a,l){return typeof a=="string"?!1:l in a}function o(a){return a&&typeof a=="object"&&!Array.isArray(a)}function s(a,l,e){return l&&r(a,l)?a[l]:e}},67276:(p,m,t)=>{"use strict";t.d(m,{O:()=>v});var r=t(85893),o=t(67294),s=t(1565),a=t(29385),l=t(3122);const e=()=>(0,r.jsx)(a.x,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:(0,r.jsx)(l.Z,{variant:"pi",textColor:"neutral500",children:"/"})});e.displayName="Divider";var n=t(76067);const c={direction:!0},f=(0,s.ZP)(a.x).withConfig({shouldForwardProp:(u,h)=>!c[u]&&h(u)})`
  align-items: ${({alignItems:u="center"})=>u};
  display: ${({display:u="flex",inline:h})=>h?"inline-flex":u};
  flex-direction: ${({direction:u="row"})=>u};
  flex-shrink: ${({shrink:u})=>u};
  flex-wrap: ${({wrap:u})=>u};
  ${({gap:u,theme:h})=>(0,n.Z)("gap",u,h)};
  justify-content: ${({justifyContent:u})=>u};
`,x=(0,s.ZP)(f)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({theme:u})=>`calc(-1*${u.spaces[2]})`};
  }
`,v=({label:u,children:h,...$})=>{const i=o.Children.toArray(h);return(0,r.jsx)(a.x,{"aria-label":u,...$,children:(0,r.jsx)(x,{as:"ol",children:o.Children.map(i,(d,E)=>{const L=i.length>1&&E+1<i.length;return(0,r.jsxs)(f,{inline:!0,as:"li",children:[d,L&&(0,r.jsx)(e,{})]})})})})};v.displayName="Breadcrumbs"},28971:(p,m,t)=>{"use strict";t.d(m,{$:()=>a});var r=t(85893),o=t(29385),s=t(3122);const a=({children:l,isCurrent:e=!1,...n})=>(0,r.jsx)(o.x,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,children:(0,r.jsx)(s.Z,{variant:"pi",textColor:"neutral800",fontWeight:e?"bold":"normal","aria-current":e,...n,children:l})});a.displayName="Crumb"}}]);
