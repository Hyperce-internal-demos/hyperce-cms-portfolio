"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[6394],{7761:(y,g,t)=>{t.d(g,{pl:()=>a,aY:()=>T,q5:()=>p.q});var e=t(67294),c=t(72848),u=t(18172);const f={data:[],isLoading:!0},m=(i,n)=>(0,u.ZP)(i,o=>{switch(n.type){case"GET_DATA_SUCCEEDED":{o.data=n.data,o.isLoading=!1;break}case"GET_DATA_ERROR":{o.isLoading=!1;break}default:return o}}),a=({ssoEnabled:i})=>{const[n,o]=(0,e.useReducer)(m,f),R=(0,c.lm)(),{get:h}=(0,c.kY)();return(0,e.useEffect)(()=>{(async()=>{try{if(!i){o({type:"GET_DATA_SUCCEEDED",data:[]});return}const{data:A}=await h("/admin/providers");o({type:"GET_DATA_SUCCEEDED",data:A})}catch(A){console.error(A),o({type:"GET_DATA_ERROR"}),R({type:"warning",message:{id:"notification.error"}})}})()},[h,i,R]),n};var L=t(14293),E=t.n(L),_=t(86896),d=t(16550),p=t(71926);const r="strapi-notification-seat-limit",P="https://cloud.strapi.io/profile/billing",O="https://strapi.io/billing/request-seats",T=()=>{const{formatMessage:i}=(0,_.Z)();let{license:n,isError:o,isLoading:R}=(0,p.q)();const h=(0,c.lm)(),{pathname:v}=(0,d.TH)(),{enforcementUserCount:A,permittedSeats:I,licenseLimitStatus:M,isHostedOnStrapiCloud:C}=n;(0,e.useEffect)(()=>{if(o||R)return;const S=!E()(I)&&!window.sessionStorage.getItem(`${r}-${v}`)&&(M==="AT_LIMIT"||M==="OVER_LIMIT");let U;M==="OVER_LIMIT"?U="warning":M==="AT_LIMIT"&&(U="softWarning"),S&&h({type:U,message:i({id:"notification.ee.warning.over-.message",defaultMessage:"Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} other {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app."},{licenseLimitStatus:M}),title:i({id:"notification.ee.warning.at-seat-limit.title",defaultMessage:"{licenseLimitStatus, select, OVER_LIMIT {Over} other {At}} seat limit ({enforcementUserCount}/{permittedSeats})"},{licenseLimitStatus:M,enforcementUserCount:A,permittedSeats:I}),link:{url:C?P:O,label:i({id:"notification.ee.warning.seat-limit.link",defaultMessage:"{isHostedOnStrapiCloud, select, true {ADD SEATS} other {CONTACT SALES}}"},{isHostedOnStrapiCloud:C})},blockTransition:!0,onClose(){window.sessionStorage.setItem(`${r}-${v}`,!0)}})},[h,n,v,i,R,I,M,A,C,o])}},71926:(y,g,t)=>{t.d(g,{q:()=>f});var e=t(67294),c=t(72848),u=t(88767);function f({enabled:D}={enabled:!0}){const{get:m}=(0,c.kY)(),{data:l,isError:a,isLoading:L}=(0,u.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:d}}=await m("/admin/license-limit-information");return d},{enabled:D}),E=l??{},_=e.useCallback(d=>(E?.features??[]).find(r=>r.name===d)?.options??{},[E?.features]);return{license:E,getFeature:_,isError:a,isLoading:L}}},76394:(y,g,t)=>{t.r(g),t.d(g,{LoginEE:()=>P});var e=t(67294),c=t(70004),u=t(41580),f=t(11047),D=t(75515),m=t(45697),l=t.n(m),a=t(86896),L=t(88972),E=t(50745),_=t(31640),d=t(7761),p=t(80090);const r=(0,L.ZP)(c.i)`
  flex: 1;
`,P=O=>{const s=window.strapi.features.isEnabled(window.strapi.features.SSO),{isLoading:T,data:i}=(0,d.pl)({ssoEnabled:s}),{formatMessage:n}=(0,a.Z)();return!s||!T&&i.length===0?e.createElement(E.ZP,null,e.createElement(_.Z,{...O})):e.createElement(E.ZP,null,e.createElement(_.Z,{...O},e.createElement(u.x,{paddingTop:7},e.createElement(f.k,{direction:"column",alignItems:"stretch",gap:7},e.createElement(f.k,null,e.createElement(r,null),e.createElement(u.x,{paddingLeft:3,paddingRight:3},e.createElement(D.Z,{variant:"sigma",textColor:"neutral600"},n({id:"Auth.login.sso.divider"}))),e.createElement(r,null)),e.createElement(p.Z,{providers:i,displayAllProviders:!1})))))};P.defaultProps={onSubmit:O=>O.preventDefault(),requestError:null},P.propTypes={formErrors:l().object.isRequired,modifiedData:l().object.isRequired,onChange:l().func.isRequired,onSubmit:l().func,requestError:l().object}},80090:(y,g,t)=>{t.d(g,{Z:()=>O});var e=t(67294),c=t(11047),u=t(84495),f=t(75515),D=t(11276),m=t(67819),l=t(45697),a=t.n(l),L=t(86896),E=t(73727),_=t(88972);const d=_.ZP.a`
  width: ${136/16}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${48/16}rem;
  border: 1px solid ${({theme:s})=>s.colors.neutral150};
  border-radius: ${({theme:s})=>s.borderRadius};
  text-decoration: inherit;
  &:link {
    text-decoration: none;
  }
  color: ${({theme:s})=>s.colors.neutral600};
`,p=(0,_.ZP)(c.k)`
  & a:not(:first-child):not(:last-child) {
    margin: 0 ${({theme:s})=>s.spaces[2]};
  }
  & a:first-child {
    margin-right: ${({theme:s})=>s.spaces[2]};
  }
  & a:last-child {
    margin-left: ${({theme:s})=>s.spaces[2]};
  }
`,r=({provider:s})=>e.createElement(u.u,{label:s.displayName},e.createElement(d,{href:`${window.strapi.backendURL}/admin/connect/${s.uid}`},s.icon?e.createElement("img",{src:s.icon,"aria-hidden":!0,alt:"",height:"32px"}):e.createElement(f.Z,null,s.displayName)));r.propTypes={provider:a().shape({icon:a().string,displayName:a().string.isRequired,uid:a().string.isRequired}).isRequired};const P=({providers:s,displayAllProviders:T})=>{const{formatMessage:i}=(0,L.Z)();return T?e.createElement(D.r,{gap:4},s.map(n=>e.createElement(m.P,{key:n.uid,col:4},e.createElement(r,{provider:n})))):s.length>2&&!T?e.createElement(D.r,{gap:4},s.slice(0,2).map(n=>e.createElement(m.P,{key:n.uid,col:4},e.createElement(r,{provider:n}))),e.createElement(m.P,{col:4},e.createElement(u.u,{label:i({id:"global.see-more"})},e.createElement(d,{as:E.rU,to:"/auth/providers"},e.createElement("span",{"aria-hidden":!0},"\u2022\u2022\u2022"))))):e.createElement(p,{justifyContent:"center"},s.map(n=>e.createElement(r,{key:n.uid,provider:n})))};P.defaultProps={displayAllProviders:!0},P.propTypes={providers:a().arrayOf(a().object).isRequired,displayAllProviders:a().bool};const O=P}}]);
