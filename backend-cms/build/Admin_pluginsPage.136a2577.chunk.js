"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[3677],{4186:(M,o,t)=>{t.r(o),t.d(o,{default:()=>j});var e=t(67294),n=t(72848),r=t(64593),i=t(86896),m=t(86706),E=t(36364),a=t(14087),d=t(17034),P=t(185),T=t(53979),C=t(49066),x=t(38939),L=t(8060),h=t(79031),u=t(37909),g=t(75515),A=t(15234),I=t(88767);const O=l=>{const s=(0,n.lm)(),{get:c}=(0,n.kY)();return(0,I.useQuery)(["plugins"],async()=>{const{data:v}=await c("/admin/plugins");return v},{onSuccess(){l&&l()},onError(){s({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})},Z=()=>{const{formatMessage:l}=(0,i.Z)(),{notifyStatus:s}=(0,a.G)();(0,n.go)();const c=l({id:"global.plugins",defaultMessage:"Plugins"}),v=()=>{s(l({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:c}))},{status:y,data:p}=O(v);return y!=="success"&&y!=="error"?e.createElement(d.A,null,e.createElement(P.o,{"aria-busy":!0},e.createElement(n.dO,null))):e.createElement(d.A,null,e.createElement(P.o,null,e.createElement(T.T,{title:c,subtitle:l({id:"app.components.ListPluginsPage.description",defaultMessage:"List of the installed plugins in the project."})}),e.createElement(C.D,null,e.createElement(x.i,{colCount:2,rowCount:p?.plugins?.length??0+1},e.createElement(L.h,null,e.createElement(h.Tr,null,e.createElement(u.Th,null,e.createElement(g.Z,{variant:"sigma",textColor:"neutral600"},l({id:"global.name",defaultMessage:"Name"}))),e.createElement(u.Th,null,e.createElement(g.Z,{variant:"sigma",textColor:"neutral600"},l({id:"global.description",defaultMessage:"description"}))))),e.createElement(A.p,null,p.plugins.map(({name:f,displayName:D,description:B})=>e.createElement(h.Tr,{key:f},e.createElement(u.Td,null,e.createElement(g.Z,{textColor:"neutral800",variant:"omega",fontWeight:"bold"},l({id:`global.plugins.${f}`,defaultMessage:D}))),e.createElement(u.Td,null,e.createElement(g.Z,{textColor:"neutral800"},l({id:`global.plugins.${f}.description`,defaultMessage:B}))))))))))},j=()=>{const{formatMessage:l}=(0,i.Z)(),s=(0,m.v9)(E._);return e.createElement(n.O4,{permissions:s.marketplace.main},e.createElement(r.q,{title:l({id:"global.plugins",defaultMessage:"Plugins"})}),e.createElement(Z,null))}},17034:(M,o,t)=>{t.d(o,{A:()=>E});var e=t(85893),n=t(88972),r=t(41580);const i=(0,n.ZP)(r.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:a})=>a?"auto 1fr":"1fr"};
`,m=(0,n.ZP)(r.x)`
  overflow-x: hidden;
`,E=({sideNav:a,children:d})=>(0,e.jsxs)(i,{hasSideNav:!!a,children:[a,(0,e.jsx)(m,{paddingBottom:10,children:d})]})}}]);
