"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[8296],{7761:(O,r,t)=>{t.d(r,{pl:()=>A,aY:()=>M,q5:()=>v.q});var i=t(67294),n=t(72848),l=t(18172);const u={data:[],isLoading:!0},T=(s,o)=>(0,l.ZP)(s,e=>{switch(o.type){case"GET_DATA_SUCCEEDED":{e.data=o.data,e.isLoading=!1;break}case"GET_DATA_ERROR":{e.isLoading=!1;break}default:return e}}),A=({ssoEnabled:s})=>{const[o,e]=(0,i.useReducer)(T,u),f=(0,n.lm)(),{get:E}=(0,n.kY)();return(0,i.useEffect)(()=>{(async()=>{try{if(!s){e({type:"GET_DATA_SUCCEEDED",data:[]});return}const{data:c}=await E("/admin/providers");e({type:"GET_DATA_SUCCEEDED",data:c})}catch(c){console.error(c),e({type:"GET_DATA_ERROR"}),f({type:"warning",message:{id:"notification.error"}})}})()},[E,s,f]),o};var h=t(14293),d=t.n(h),I=t(86896),m=t(16550),v=t(71926);const g="strapi-notification-seat-limit",S="https://cloud.strapi.io/profile/billing",y="https://strapi.io/billing/request-seats",M=()=>{const{formatMessage:s}=(0,I.Z)();let{license:o,isError:e,isLoading:f}=(0,v.q)();const E=(0,n.lm)(),{pathname:L}=(0,m.TH)(),{enforcementUserCount:c,permittedSeats:p,licenseLimitStatus:a,isHostedOnStrapiCloud:D}=o;(0,i.useEffect)(()=>{if(e||f)return;const U=!d()(p)&&!window.sessionStorage.getItem(`${g}-${L}`)&&(a==="AT_LIMIT"||a==="OVER_LIMIT");let C;a==="OVER_LIMIT"?C="warning":a==="AT_LIMIT"&&(C="softWarning"),U&&E({type:C,message:s({id:"notification.ee.warning.over-.message",defaultMessage:"Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} other {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app."},{licenseLimitStatus:a}),title:s({id:"notification.ee.warning.at-seat-limit.title",defaultMessage:"{licenseLimitStatus, select, OVER_LIMIT {Over} other {At}} seat limit ({enforcementUserCount}/{permittedSeats})"},{licenseLimitStatus:a,enforcementUserCount:c,permittedSeats:p}),link:{url:D?S:y,label:s({id:"notification.ee.warning.seat-limit.link",defaultMessage:"{isHostedOnStrapiCloud, select, true {ADD SEATS} other {CONTACT SALES}}"},{isHostedOnStrapiCloud:D})},blockTransition:!0,onClose(){window.sessionStorage.setItem(`${g}-${L}`,!0)}})},[E,o,L,s,f,p,a,c,D,e])}},71926:(O,r,t)=>{t.d(r,{q:()=>u});var i=t(67294),n=t(72848),l=t(88767);function u({enabled:P}={enabled:!0}){const{get:T}=(0,n.kY)(),{data:R,isError:A,isLoading:h}=(0,l.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:m}}=await T("/admin/license-limit-information");return m},{enabled:P}),d=R??{},I=i.useCallback(m=>(d?.features??[]).find(g=>g.name===m)?.options??{},[d?.features]);return{license:d,getFeature:I,isError:A,isLoading:h}}},66831:(O,r,t)=>{t.r(r),t.d(r,{HomePageEE:()=>u});var i=t(67294),n=t(89687),l=t(7761);function u(){return(0,l.aY)(),i.createElement(n.HomePageCE,null)}}}]);
