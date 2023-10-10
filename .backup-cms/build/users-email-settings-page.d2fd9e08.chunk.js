"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[8418],{84210:(j,p,n)=>{n.r(p),n.d(p,{default:()=>oe});var t=n(67294),o=n(334),i=n(40720),r=n(90731),h=n(34726),e=n(18638),a=n(86896),u=n(88767),E=n(84419),m=n(99688),T=n(74622),c=n(36854),d=n(71543),g=n(31988),l=n(6498),s=n(457),$=n(37022),v=n(12473),L=n(67276),Z=n(28971),D=n(41054),z=n(45697),x=n.n(z),P=n(87561);const J=P.Ry().shape({options:P.Ry().shape({from:P.Ry().shape({name:P.Z_().required(e.I0.required),email:P.Z_().email(e.I0.email).required(e.I0.required)}).required(),response_email:P.Z_().email(e.I0.email),object:P.Z_().required(e.I0.required),message:P.Z_().required(e.I0.required)}).required(e.I0.required)}),U=({template:f,onToggle:y,onSubmit:b})=>{const{formatMessage:M}=(0,a.Z)();return t.createElement(T.P,{onClose:y,labelledBy:`${M({id:(0,m.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${M({id:(0,m.OB)(f.display),defaultMessage:f.display})}`},t.createElement(c.x,null,t.createElement(L.O,{label:`${M({id:(0,m.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${M({id:(0,m.OB)(f.display),defaultMessage:f.display})}`},t.createElement(Z.$,null,M({id:(0,m.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})),t.createElement(Z.$,{isCurrent:!0},M({id:(0,m.OB)(f.display),defaultMessage:f.display})))),t.createElement(D.J9,{onSubmit:b,initialValues:f,validateOnChange:!1,validationSchema:J,enableReinitialize:!0},({errors:O,values:C,handleChange:R,isSubmitting:H})=>t.createElement(e.l0,null,t.createElement(d.f,null,t.createElement(g.r,{gap:5},t.createElement(l.P,{col:6,s:12},t.createElement(e.jm,{intlLabel:{id:(0,m.OB)("PopUpForm.Email.options.from.name.label"),defaultMessage:"Shipper name"},name:"options.from.name",onChange:R,value:C.options.from.name,error:O?.options?.from?.name,type:"text"})),t.createElement(l.P,{col:6,s:12},t.createElement(e.jm,{intlLabel:{id:(0,m.OB)("PopUpForm.Email.options.from.email.label"),defaultMessage:"Shipper email"},name:"options.from.email",onChange:R,value:C.options.from.email,error:O?.options?.from?.email,type:"text"})),t.createElement(l.P,{col:6,s:12},t.createElement(e.jm,{intlLabel:{id:(0,m.OB)("PopUpForm.Email.options.response_email.label"),defaultMessage:"Response email"},name:"options.response_email",onChange:R,value:C.options.response_email,error:O?.options?.response_email,type:"text"})),t.createElement(l.P,{col:6,s:12},t.createElement(e.jm,{intlLabel:{id:(0,m.OB)("PopUpForm.Email.options.object.label"),defaultMessage:"Subject"},name:"options.object",onChange:R,value:C.options.object,error:O?.options?.object,type:"text"})),t.createElement(l.P,{col:12,s:12},t.createElement(s.g,{label:M({id:(0,m.OB)("PopUpForm.Email.options.message.label"),defaultMessage:"Message"}),id:"options.message",onChange:R,value:C.options.message,error:O?.options?.message&&M({id:O.options.message,defaultMessage:O.options.message})})))),t.createElement($.m,{startActions:t.createElement(v.z,{onClick:y,variant:"tertiary"},"Cancel"),endActions:t.createElement(v.z,{loading:H,type:"submit"},"Finish")}))))};U.propTypes={template:x().shape({display:x().string,icon:x().string,options:x().shape({from:x().shape({name:x().string,email:x().string}),message:x().string,object:x().string,response_email:x().string})}).isRequired,onSubmit:x().func.isRequired,onToggle:x().func.isRequired};const Y=U;var k=n(5923),q=n(3547),I=n(29299),B=n(69398),F=n(22304),W=n(10574),_=n(35752),w=n(85200),K=n(96208),ee=n(75975),N=n(2382),te=n(18226);const Q=({canUpdate:f,onEditClick:y})=>{const{formatMessage:b}=(0,a.Z)();return t.createElement(k.i,{colCount:3,rowCount:3},t.createElement(q.h,null,t.createElement(I.Tr,null,t.createElement(B.Th,{width:"1%"},t.createElement(F.T,null,b({id:(0,m.OB)("Email.template.table.icon.label"),defaultMessage:"icon"}))),t.createElement(B.Th,null,t.createElement(W.Z,{variant:"sigma",textColor:"neutral600"},b({id:(0,m.OB)("Email.template.table.name.label"),defaultMessage:"name"}))),t.createElement(B.Th,{width:"1%"},t.createElement(F.T,null,b({id:(0,m.OB)("Email.template.table.action.label"),defaultMessage:"action"}))))),t.createElement(_.p,null,t.createElement(I.Tr,{...(0,e.X7)({fn:()=>y("reset_password")})},t.createElement(B.Td,null,t.createElement(w.J,null,t.createElement(ee.Z,{"aria-label":b({id:"global.reset-password",defaultMessage:"Reset password"})}))),t.createElement(B.Td,null,t.createElement(W.Z,null,b({id:"global.reset-password",defaultMessage:"Reset password"}))),t.createElement(B.Td,{...e.UW},t.createElement(K.h,{onClick:()=>y("reset_password"),label:b({id:(0,m.OB)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:f&&t.createElement(N.Z,null)}))),t.createElement(I.Tr,{...(0,e.X7)({fn:()=>y("email_confirmation")})},t.createElement(B.Td,null,t.createElement(w.J,null,t.createElement(te.Z,{"aria-label":b({id:(0,m.OB)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"})}))),t.createElement(B.Td,null,t.createElement(W.Z,null,b({id:(0,m.OB)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"}))),t.createElement(B.Td,{...e.UW},t.createElement(K.h,{onClick:()=>y("email_confirmation"),label:b({id:(0,m.OB)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:f&&t.createElement(N.Z,null)})))))};Q.propTypes={canUpdate:x().bool.isRequired,onEditClick:x().func.isRequired};const ae=Q,ne=async()=>{const{get:f}=(0,e.tg)(),{data:y}=await f("/users-permissions/email-templates");return y},se=f=>{const{put:y}=(0,e.tg)();return y("/users-permissions/email-templates",f)},ie=()=>t.createElement(e.O4,{permissions:E._.readEmailTemplates},t.createElement(le,null)),le=()=>{const{formatMessage:f}=(0,a.Z)(),{trackUsage:y}=(0,e.rS)(),{notifyStatus:b}=(0,o.G)(),M=(0,e.lm)(),{lockApp:O,unlockApp:C}=(0,e.o1)(),R=(0,t.useRef)(y),H=(0,u.useQueryClient)();(0,e.go)();const[re,de]=(0,t.useState)(!1),[V,me]=(0,t.useState)(null),{isLoading:ce,allowedActions:{canUpdate:he}}=(0,e.ss)({update:E._.updateEmailTemplates}),{status:ue,data:X}=(0,u.useQuery)("email-templates",()=>ne(),{onSuccess(){b(f({id:(0,m.OB)("Email.template.data.loaded"),defaultMessage:"Email templates has been loaded"}))},onError(){M({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),pe=ce||ue!=="success",A=()=>{de(S=>!S)},ge=S=>{me(S),A()},G=(0,u.useMutation)(S=>se({"email-templates":S}),{async onSuccess(){await H.invalidateQueries("email-templates"),M({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}}),R.current("didEditEmailTemplates"),C(),A()},onError(){M({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),C()},refetchActive:!0}),{isLoading:fe}=G,Ee=S=>{O(),R.current("willEditEmailTemplates");const $e={...X,[V]:S};G.mutate($e)};return pe?t.createElement(i.o,{"aria-busy":"true"},t.createElement(e.SL,{name:f({id:(0,m.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),t.createElement(r.T,{title:f({id:(0,m.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),t.createElement(h.D,null,t.createElement(e.dO,null))):t.createElement(i.o,{"aria-busy":fe},t.createElement(e.SL,{name:f({id:(0,m.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),t.createElement(r.T,{title:f({id:(0,m.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),t.createElement(h.D,null,t.createElement(ae,{onEditClick:ge,canUpdate:he}),re&&t.createElement(Y,{template:X[V],onToggle:A,onSubmit:Ee})))},oe=ie},99688:(j,p,n)=>{n.d(p,{YX:()=>r,OB:()=>h.Z});var t=n(41609),o=n.n(t);const r=e=>Object.keys(e).reduce((a,u)=>{const E=e[u].controllers,m=Object.keys(E).reduce((T,c)=>(o()(E[c])||(T[c]=E[c]),T),{});return o()(m)||(a[u]={controllers:m}),a},{});var h=n(97961)},34726:(j,p,n)=>{n.d(p,{D:()=>i});var t=n(85893),o=n(16607);const i=({children:r})=>(0,t.jsx)(o.x,{paddingLeft:10,paddingRight:10,children:r})},90731:(j,p,n)=>{n.d(p,{T:()=>m});var t=n(85893),o=n(67294),i=n(1565);const r=d=>{const g=(0,o.useRef)(null),[l,s]=(0,o.useState)(!0),$=([v])=>{s(v.isIntersecting)};return(0,o.useEffect)(()=>{const v=g.current,L=new IntersectionObserver($,d);return v&&L.observe(g.current),()=>{v&&L.disconnect()}},[g,d]),[g,l]};var h=n(79698);const e=(d,g)=>{const l=(0,h.W)(g);(0,o.useLayoutEffect)(()=>{const s=new ResizeObserver(l);return Array.isArray(d)?d.forEach($=>{$.current&&s.observe($.current)}):d.current&&s.observe(d.current),()=>{s.disconnect()}},[d,l])};var a=n(16607),u=n(96987),E=n(10574);const m=d=>{const g=(0,o.useRef)(null),[l,s]=(0,o.useState)(null),[$,v]=r({root:null,rootMargin:"0px",threshold:0});return e($,()=>{$.current&&s($.current.getBoundingClientRect())}),(0,o.useEffect)(()=>{g.current&&s(g.current.getBoundingClientRect())},[g]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{style:{height:l?.height},ref:$,children:v&&(0,t.jsx)(c,{ref:g,...d})}),!v&&(0,t.jsx)(c,{...d,sticky:!0,width:l?.width})]})};m.displayName="HeaderLayout";const T=(0,i.ZP)(a.x)`
  width: ${({width:d})=>d?`${d/16}rem`:void 0};
  z-index: ${({theme:d})=>d.zIndices[1]};
`,c=o.forwardRef(({navigationAction:d,primaryAction:g,secondaryAction:l,subtitle:s,title:$,sticky:v,width:L,...Z},D)=>{const z=typeof s=="string";return v?(0,t.jsx)(T,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:L,"data-strapi-header-sticky":!0,children:(0,t.jsxs)(u.k,{justifyContent:"space-between",children:[(0,t.jsxs)(u.k,{children:[d&&(0,t.jsx)(a.x,{paddingRight:3,children:d}),(0,t.jsxs)(a.x,{children:[(0,t.jsx)(E.Z,{variant:"beta",as:"h1",...Z,children:$}),z?(0,t.jsx)(E.Z,{variant:"pi",textColor:"neutral600",children:s}):s]}),l?(0,t.jsx)(a.x,{paddingLeft:4,children:l}):null]}),(0,t.jsx)(u.k,{children:g?(0,t.jsx)(a.x,{paddingLeft:2,children:g}):void 0})]})}):(0,t.jsxs)(a.x,{ref:D,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:d?6:8,background:"neutral100","data-strapi-header":!0,children:[d?(0,t.jsx)(a.x,{paddingBottom:2,children:d}):null,(0,t.jsxs)(u.k,{justifyContent:"space-between",children:[(0,t.jsxs)(u.k,{minWidth:0,children:[(0,t.jsx)(E.Z,{as:"h1",variant:"alpha",...Z,children:$}),l?(0,t.jsx)(a.x,{paddingLeft:4,children:l}):null]}),g]}),z?(0,t.jsx)(E.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:s}):s]})})},40720:(j,p,n)=>{n.d(p,{o:()=>h});var t=n(85893),o=n(1565),i=n(16607);const r=(0,o.ZP)(i.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,h=({labelledBy:e="main-content-title",...a})=>(0,t.jsx)(r,{"aria-labelledby":e,as:"main",id:"main-content",tabIndex:-1,...a})},29385:(j,p,n)=>{n.d(p,{x:()=>h});var t=n(1565),o=n(76067),i=n(86822);const r={color:!0,cursor:!0,height:!0,width:!0},h=t.ZP.div.withConfig({shouldForwardProp:(e,a)=>!r[e]&&a(e)})`
  // Font
  font-size: ${({fontSize:e,theme:a})=>(0,i.$)(a.fontSizes,e,e)};

  // Colors
  background: ${({theme:e,background:a})=>(0,i.$)(e.colors,a,a)};
  color: ${({theme:e,color:a})=>(0,i.$)(e.colors,a,void 0)};

  // Spaces
  ${({theme:e,padding:a})=>(0,o.Z)("padding",a,e)}
  ${({theme:e,paddingTop:a})=>(0,o.Z)("padding-top",a,e)}
  ${({theme:e,paddingRight:a})=>(0,o.Z)("padding-right",a,e)}
  ${({theme:e,paddingBottom:a})=>(0,o.Z)("padding-bottom",a,e)}
  ${({theme:e,paddingLeft:a})=>(0,o.Z)("padding-left",a,e)}
  ${({theme:e,marginLeft:a})=>(0,o.Z)("margin-left",a,e)}
  ${({theme:e,marginRight:a})=>(0,o.Z)("margin-right",a,e)}
  ${({theme:e,marginTop:a})=>(0,o.Z)("margin-top",a,e)}
  ${({theme:e,marginBottom:a})=>(0,o.Z)("margin-bottom",a,e)}

  // Responsive hiding
  ${({theme:e,hiddenS:a})=>a?`${e.mediaQueries.tablet} { display: none; }`:void 0}
  ${({theme:e,hiddenXS:a})=>a?`${e.mediaQueries.mobile} { display: none; }`:void 0}
  

  // Borders
  border-radius: ${({theme:e,hasRadius:a,borderRadius:u})=>a?e.borderRadius:u};
  border-style: ${({borderStyle:e})=>e};
  border-width: ${({borderWidth:e})=>e};
  border-color: ${({borderColor:e,theme:a})=>(0,i.$)(a.colors,e,void 0)};
  border: ${({theme:e,borderColor:a,borderStyle:u,borderWidth:E})=>{if(a&&!u&&typeof E>"u")return`1px solid ${e.colors[a]}`}};

  // Shadows
  box-shadow: ${({theme:e,shadow:a})=>(0,i.$)(e.shadows,a,void 0)};

  // Handlers
  pointer-events: ${({pointerEvents:e})=>e};
  &:hover {
    ${({_hover:e,theme:a})=>e?e(a):void 0}
  }

  // Display
  display: ${({display:e})=>e};

  // Position
  position: ${({position:e})=>e};
  left: ${({left:e,theme:a})=>(0,i.$)(a.spaces,e,e)};
  right: ${({right:e,theme:a})=>(0,i.$)(a.spaces,e,e)};
  top: ${({top:e,theme:a})=>(0,i.$)(a.spaces,e,e)};
  bottom: ${({bottom:e,theme:a})=>(0,i.$)(a.spaces,e,e)};
  z-index: ${({zIndex:e})=>e};
  overflow: ${({overflow:e})=>e};

  // Size
  width: ${({width:e,theme:a})=>(0,i.$)(a.spaces,e,e)};
  max-width: ${({maxWidth:e,theme:a})=>(0,i.$)(a.spaces,e,e)};
  min-width: ${({minWidth:e,theme:a})=>(0,i.$)(a.spaces,e,e)};
  height: ${({height:e,theme:a})=>(0,i.$)(a.spaces,e,e)};
  max-height: ${({maxHeight:e,theme:a})=>(0,i.$)(a.spaces,e,e)};
  min-height: ${({minHeight:e,theme:a})=>(0,i.$)(a.spaces,e,e)};

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
  line-height: ${({theme:e,lineHeight:a})=>(0,i.$)(e.lineHeights,a,a)};

  // Cursor
  cursor: ${({cursor:e})=>e};
`},3122:(j,p,n)=>{n.d(p,{Z:()=>g});var t=n(1565);const o="alpha",i="beta",r="delta",h="epsilon",e="omega",a="pi",u="sigma",E=[o,i,r,h,e,a,u],m=({ellipsis:l=!1})=>l&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,T=({variant:l=e,theme:s})=>{switch(l){case o:return`
        font-weight: ${s.fontWeights.bold};
        font-size: ${s.fontSizes[5]};
        line-height: ${s.lineHeights[2]};
      `;case i:return`
        font-weight: ${s.fontWeights.bold};
        font-size: ${s.fontSizes[4]};
        line-height: ${s.lineHeights[1]};
      `;case r:return`
        font-weight: ${s.fontWeights.semiBold};
        font-size: ${s.fontSizes[3]};
        line-height: ${s.lineHeights[2]};
      `;case h:return`
        font-size: ${s.fontSizes[3]};
        line-height: ${s.lineHeights[6]};
      `;case e:return`
        font-size: ${s.fontSizes[2]};
        line-height: ${s.lineHeights[4]};
      `;case a:return`
        font-size: ${s.fontSizes[1]};
        line-height: ${s.lineHeights[3]};
      `;case u:return`
        font-weight: ${s.fontWeights.bold};
        font-size: ${s.fontSizes[0]};
        line-height: ${s.lineHeights[5]};
        text-transform: uppercase;
      `;default:return`
        font-size: ${s.fontSizes[2]};
      `}};var c=n(86822);const d={fontSize:!0,fontWeight:!0},g=t.ZP.span.withConfig({shouldForwardProp:(l,s)=>!d[l]&&s(l)})`
  ${T}
  ${m}

  // These properties need to come after {variantStyle}, because they might
  // overwrite a variant attribute
  font-weight: ${({theme:l,fontWeight:s})=>(0,c.$)(l.fontWeights,s,void 0)};
  font-size: ${({theme:l,fontSize:s})=>(0,c.$)(l.fontSizes,s,void 0)};
  line-height: ${({theme:l,lineHeight:s})=>(0,c.$)(l.lineHeights,s,s)};
  color: ${({theme:l,textColor:s})=>l.colors[s||"neutral800"]};
  text-align: ${({textAlign:l})=>l};
  text-decoration: ${({textDecoration:l})=>l};
  text-transform: ${({textTransform:l})=>l};
`},76067:(j,p,n)=>{n.d(p,{Z:()=>t});const t=(o,i,r)=>{if(!i)return;let h=Array.isArray(i)?i:[];if(!Array.isArray(i)&&typeof i=="object"&&(h=[i?.desktop,i?.tablet,i?.mobile]),h.length>0)return h.reduce((a,u,E)=>{if(u)switch(E){case 0:return`${a}${o}: ${r.spaces[u]};`;case 1:return`${a}${r.mediaQueries.tablet}{${o}: ${r.spaces[u]};}`;case 2:return`${a}${r.mediaQueries.mobile}{${o}: ${r.spaces[u]};}`;default:return a}return a},"");const e=r.spaces[i]||i;return`${o}: ${e};`}},86822:(j,p,n)=>{n.d(p,{$:()=>i});function t(r,h){return typeof r=="string"?!1:h in r}function o(r){return r&&typeof r=="object"&&!Array.isArray(r)}function i(r,h,e){return h&&t(r,h)?r[h]:e}},67276:(j,p,n)=>{n.d(p,{O:()=>T});var t=n(85893),o=n(67294),i=n(1565),r=n(29385),h=n(3122);const e=()=>(0,t.jsx)(r.x,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:(0,t.jsx)(h.Z,{variant:"pi",textColor:"neutral500",children:"/"})});e.displayName="Divider";var a=n(76067);const u={direction:!0},E=(0,i.ZP)(r.x).withConfig({shouldForwardProp:(c,d)=>!u[c]&&d(c)})`
  align-items: ${({alignItems:c="center"})=>c};
  display: ${({display:c="flex",inline:d})=>d?"inline-flex":c};
  flex-direction: ${({direction:c="row"})=>c};
  flex-shrink: ${({shrink:c})=>c};
  flex-wrap: ${({wrap:c})=>c};
  ${({gap:c,theme:d})=>(0,a.Z)("gap",c,d)};
  justify-content: ${({justifyContent:c})=>c};
`,m=(0,i.ZP)(E)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({theme:c})=>`calc(-1*${c.spaces[2]})`};
  }
`,T=({label:c,children:d,...g})=>{const l=o.Children.toArray(d);return(0,t.jsx)(r.x,{"aria-label":c,...g,children:(0,t.jsx)(m,{as:"ol",children:o.Children.map(l,(s,$)=>{const v=l.length>1&&$+1<l.length;return(0,t.jsxs)(E,{inline:!0,as:"li",children:[s,v&&(0,t.jsx)(e,{})]})})})})};T.displayName="Breadcrumbs"},28971:(j,p,n)=>{n.d(p,{$:()=>r});var t=n(85893),o=n(29385),i=n(3122);const r=({children:h,isCurrent:e=!1,...a})=>(0,t.jsx)(o.x,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,children:(0,t.jsx)(i.Z,{variant:"pi",textColor:"neutral800",fontWeight:e?"bold":"normal","aria-current":e,...a,children:h})});r.displayName="Crumb"}}]);
