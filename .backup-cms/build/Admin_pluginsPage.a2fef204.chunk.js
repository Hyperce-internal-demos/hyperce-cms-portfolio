"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[3677],{4186:(M,o,e)=>{e.r(o),e.d(o,{default:()=>j});var t=e(67294),n=e(18638),r=e(64593),i=e(86896),m=e(86706),E=e(36364),a=e(334),u=e(71590),P=e(40720),T=e(90731),C=e(34726),x=e(5923),L=e(3547),y=e(29299),g=e(69398),d=e(10574),I=e(35752),O=e(88767);const A=l=>{const s=(0,n.lm)(),{get:c}=(0,n.kY)();return(0,O.useQuery)(["plugins"],async()=>{const{data:f}=await c("/admin/plugins");return f},{onSuccess(){l&&l()},onError(){s({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})},Z=()=>{const{formatMessage:l}=(0,i.Z)(),{notifyStatus:s}=(0,a.G)();(0,n.go)();const c=l({id:"global.plugins",defaultMessage:"Plugins"}),f=()=>{s(l({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:c}))},{status:h,data:p}=A(f);return h!=="success"&&h!=="error"?t.createElement(u.A,null,t.createElement(P.o,{"aria-busy":!0},t.createElement(n.dO,null))):t.createElement(u.A,null,t.createElement(P.o,null,t.createElement(T.T,{title:c,subtitle:l({id:"app.components.ListPluginsPage.description",defaultMessage:"List of the installed plugins in the project."})}),t.createElement(C.D,null,t.createElement(x.i,{colCount:2,rowCount:p?.plugins?.length??0+1},t.createElement(L.h,null,t.createElement(y.Tr,null,t.createElement(g.Th,null,t.createElement(d.Z,{variant:"sigma",textColor:"neutral600"},l({id:"global.name",defaultMessage:"Name"}))),t.createElement(g.Th,null,t.createElement(d.Z,{variant:"sigma",textColor:"neutral600"},l({id:"global.description",defaultMessage:"description"}))))),t.createElement(I.p,null,p.plugins.map(({name:v,displayName:B,description:D})=>t.createElement(y.Tr,{key:v},t.createElement(g.Td,null,t.createElement(d.Z,{textColor:"neutral800",variant:"omega",fontWeight:"bold"},l({id:`global.plugins.${v}`,defaultMessage:B}))),t.createElement(g.Td,null,t.createElement(d.Z,{textColor:"neutral800"},l({id:`global.plugins.${v}.description`,defaultMessage:D}))))))))))},j=()=>{const{formatMessage:l}=(0,i.Z)(),s=(0,m.v9)(E._);return t.createElement(n.O4,{permissions:s.marketplace.main},t.createElement(r.q,{title:l({id:"global.plugins",defaultMessage:"Plugins"})}),t.createElement(Z,null))}},71590:(M,o,e)=>{e.d(o,{A:()=>E});var t=e(85893),n=e(1565),r=e(16607);const i=(0,n.ZP)(r.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:a})=>a?"auto 1fr":"1fr"};
`,m=(0,n.ZP)(r.x)`
  overflow-x: hidden;
`,E=({sideNav:a,children:u})=>(0,t.jsxs)(i,{hasSideNav:Boolean(a),children:[a,(0,t.jsx)(m,{paddingBottom:10,children:u})]})}}]);
