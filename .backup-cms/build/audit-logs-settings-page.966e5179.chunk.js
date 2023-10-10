"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[2812],{54920:(R,f,t)=>{t.d(f,{R:()=>E});var e=t(67294),n=t(18638),v=t(88767);function E(M={},T={}){const{id:c="",...D}=M,{get:C}=(0,n.kY)(),{data:p,isError:y,isLoading:S,refetch:A}=(0,v.useQuery)(["users",c,D],async()=>{const{data:{data:O}}=await C(`/admin/users/${c}`,{params:D});return O},T);return{users:e.useMemo(()=>c&&p?[p]:Array.isArray(p?.results)?p.results:[],[p,c]),pagination:e.useMemo(()=>p?.pagination??null,[p?.pagination]),isLoading:S,isError:y,refetch:A}}},71359:(R,f,t)=>{t.d(f,{Z:()=>p});var e=t(67294),n=t(16607),v=t(12473),E=t(18638),M=t(52933),T=t(45697),c=t.n(T),D=t(86896);const C=({displayedFilters:y})=>{const[S,A]=(0,e.useState)(!1),{formatMessage:U}=(0,D.Z)(),O=(0,e.useRef)(),Z=()=>{A(j=>!j)};return e.createElement(e.Fragment,null,e.createElement(n.x,{paddingTop:1,paddingBottom:1},e.createElement(v.z,{variant:"tertiary",ref:O,startIcon:e.createElement(M.Z,null),onClick:Z,size:"S"},U({id:"app.utils.filters",defaultMessage:"Filters"})),S&&e.createElement(E.J5,{displayedFilters:y,isVisible:S,onToggle:Z,source:O})),e.createElement(E.W$,{filtersSchema:y}))};C.propTypes={displayedFilters:c().arrayOf(c().shape({name:c().string.isRequired,metadatas:c().shape({label:c().string}),fieldSchema:c().shape({type:c().string})})).isRequired};const p=C},67220:(R,f,t)=>{t.r(f),t.d(f,{default:()=>ve});var e=t(67294),n=t(18638),v=t(86706),E=t(36364),M=t(71590),T=t(34726),c=t(16607),D=t(40720),C=t(90731),p=t(55040),y=t(86896),S=t(71359),A=t(88767),U=t(16550),O=t(54920);const j=({canReadAuditLogs:a,canReadUsers:d})=>{const{get:u}=(0,n.kY)(),{search:i}=(0,U.TH)(),m=(0,n.lm)(),[{query:l}]=(0,n.Kx)(),s={keepPreviousData:!0,retry:!1,staleTime:1e3*20,onError:L=>m({type:"warning",message:L.message})},{users:r,isError:g,isLoading:h}=(0,O.R)({},{...s,enabled:d,staleTime:2*(1e3*60)}),{data:P,isLoading:B,isError:F}=(0,A.useQuery)(["auditLogs",i],async()=>{const{data:L}=await u("/admin/audit-logs",{params:l});return L},{...s,enabled:a});return{auditLogs:P,users:r,isLoading:h||B,hasError:F||g}};var w=t(74622),k=t(36854),q=t(71543),_=t(82392),ee=t(75071),te=t(45697),o=t.n(te),ae=t(23855);const H=()=>{const{formatDate:a}=(0,y.Z)();return u=>{const i=(0,ae.Z)(u),m=a(i,{dateStyle:"long"}),l=a(i,{timeStyle:"medium",hourCycle:"h24"});return`${m}, ${l}`}};var b=t(96987),se=t(74863),I=t(10574),ne=t(31988),oe=t(81221);const Q={"entry.create":"Create entry{model, select, undefined {} other { ({model})}}","entry.update":"Update entry{model, select, undefined {} other { ({model})}}","entry.delete":"Delete entry{model, select, undefined {} other { ({model})}}","entry.publish":"Publish entry{model, select, undefined {} other { ({model})}}","entry.unpublish":"Unpublish entry{model, select, undefined {} other { ({model})}}","media.create":"Create media","media.update":"Update media","media.delete":"Delete media","media-folder.create":"Create media folder","media-folder.update":"Update media folder","media-folder.delete":"Delete media folder","user.create":"Create user","user.update":"Update user","user.delete":"Delete user","admin.auth.success":"Admin login","admin.logout":"Admin logout","content-type.create":"Create content type","content-type.update":"Update content type","content-type.delete":"Delete content type","component.create":"Create component","component.update":"Update component","component.delete":"Delete component","role.create":"Create role","role.update":"Update role","role.delete":"Delete role","permission.create":"Create permission","permission.update":"Update permission","permission.delete":"Delete permission"},W=a=>Q[a]||a,Y=({actionLabel:a,actionName:d})=>e.createElement(b.k,{direction:"column",alignItems:"baseline",gap:1},e.createElement(I.Z,{textColor:"neutral600",variant:"sigma"},a),e.createElement(I.Z,{textColor:"neutral600"},d));Y.propTypes={actionLabel:o().string.isRequired,actionName:o().string.isRequired};const x=Y,K=({status:a,data:d,formattedDate:u})=>{const{formatMessage:i}=(0,y.Z)();if(a==="loading")return e.createElement(b.k,{padding:7,justifyContent:"center",alignItems:"center"},e.createElement(se.a,null,"Loading content..."));const{action:m,user:l,payload:s}=d;return e.createElement(e.Fragment,null,e.createElement(c.x,{marginBottom:3},e.createElement(I.Z,{variant:"delta",id:"title"},i({id:"Settings.permissions.auditLogs.details",defaultMessage:"Log Details"}))),e.createElement(ne.r,{gap:4,gridCols:2,paddingTop:4,paddingBottom:4,paddingLeft:6,paddingRight:6,marginBottom:4,background:"neutral100",hasRadius:!0},e.createElement(x,{actionLabel:i({id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"}),actionName:i({id:`Settings.permissions.auditLogs.${m}`,defaultMessage:W(m)},{model:s?.model})}),e.createElement(x,{actionLabel:i({id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"}),actionName:u}),e.createElement(x,{actionLabel:i({id:"Settings.permissions.auditLogs.user",defaultMessage:"User"}),actionName:l?.displayName||"-"}),e.createElement(x,{actionLabel:i({id:"Settings.permissions.auditLogs.userId",defaultMessage:"User ID"}),actionName:l?.id.toString()||"-"})),e.createElement(oe.V,{value:JSON.stringify(s,null,2),disabled:!0,label:i({id:"Settings.permissions.auditLogs.payload",defaultMessage:"Payload"})}))};K.defaultProps={data:{}},K.propTypes={status:o().oneOf(["idle","loading","error","success"]).isRequired,data:o().shape({action:o().string,date:o().string,payload:o().object,user:o().object}),formattedDate:o().string.isRequired};const ie=K,z=({handleClose:a,logId:d})=>{const{get:u}=(0,n.kY)(),i=(0,n.lm)(),m=async h=>{const{data:P}=await u(`/admin/audit-logs/${h}`);if(!P)throw new Error("Audit log not found");return P},{data:l,status:s}=(0,A.useQuery)(["audit-log",d],()=>m(d),{onError(){i({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),a()}}),r=H(),g=l?r(l.date):"";return e.createElement(w.P,{onClose:a,labelledBy:"title"},e.createElement(k.x,null,e.createElement(_.O,{label:g,id:"title"},e.createElement(ee.$,{isCurrent:!0},g))),e.createElement(q.f,null,e.createElement(ie,{status:s,data:l,formattedDate:g})))};z.propTypes={handleClose:o().func.isRequired,logId:o().string.isRequired};const re=z,$=({pagination:a})=>e.createElement(c.x,{paddingTop:4},e.createElement(b.k,{alignItems:"flex-end",justifyContent:"space-between"},e.createElement(n.v4,null),e.createElement(n.tU,{pagination:a})));$.defaultProps={pagination:{pageCount:0,pageSize:50,total:0}},$.propTypes={pagination:o().shape({page:o().number,pageCount:o().number,pageSize:o().number,total:o().number})};const le=$;var de=t(35752),me=t(29299),J=t(69398),ue=t(96208),ce=t(81851);const V=({headers:a,rows:d,onOpenModal:u})=>{const{formatMessage:i}=(0,y.Z)(),m=H(),l=({type:s,value:r,model:g})=>s==="date"?m(r):s==="action"?i({id:`Settings.permissions.auditLogs.${r}`,defaultMessage:W(r)},{model:g}):r||"-";return e.createElement(de.p,null,d.map(s=>e.createElement(me.Tr,{key:s.id,...(0,n.X7)({fn:()=>u(s.id)})},a.map(({key:r,name:g,cellFormatter:h})=>e.createElement(J.Td,{key:r},e.createElement(I.Z,{textColor:"neutral800"},l({type:r,value:h?h(s[g]):s[g],model:s.payload?.model})))),e.createElement(J.Td,{...n.UW},e.createElement(b.k,{justifyContent:"end"},e.createElement(ue.h,{onClick:()=>u(s.id),"aria-label":i({id:"app.component.table.view",defaultMessage:"{target} details"},{target:`${s.action} action`}),noBorder:!0,icon:e.createElement(ce.Z,null)}))))))};V.defaultProps={rows:[]},V.propTypes={headers:o().array.isRequired,rows:o().array,onOpenModal:o().func.isRequired};const ge=V;var pe=t(60914),fe=t(53768);const N=({value:a,options:d,onChange:u})=>{const{formatMessage:i}=(0,y.Z)(),m=i({id:"Settings.permissions.auditLogs.filter.aria-label",defaultMessage:"Search and select an option to filter"});return e.createElement(pe.hQ,{"aria-label":m,value:a,onChange:u},d.map(({label:l,customValue:s})=>e.createElement(fe.O,{key:s,value:s},l)))};N.defaultProps={value:null},N.propTypes={value:o().string,options:o().arrayOf(o().shape({label:o().string.isRequired,customValue:o().string.isRequired}).isRequired).isRequired,onChange:o().func.isRequired};const X=N,G=[{intlLabel:{id:"components.FilterOptions.FILTER_TYPES.$eq",defaultMessage:"is"},value:"$eq"},{intlLabel:{id:"components.FilterOptions.FILTER_TYPES.$ne",defaultMessage:"is not"},value:"$ne"}],Ee=({formatMessage:a,users:d,canReadUsers:u})=>{const i=Object.keys(Q).map(l=>({label:a({id:`Settings.permissions.auditLogs.${l}`,defaultMessage:W(l)},{model:void 0}),customValue:l})),m=[{name:"action",metadatas:{customOperators:G,label:a({id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"}),customInput:X,options:i},fieldSchema:{type:"enumeration"}},{name:"date",metadatas:{label:a({id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"})},fieldSchema:{type:"datetime"}}];if(u&&d){const l=r=>r.username?r.username:r.firstname&&r.lastname?a({id:"Settings.permissions.auditLogs.user.fullname",defaultMessage:"{firstname} {lastname}"},{firstname:r.firstname,lastname:r.lastname}):r.email,s=d.map(r=>({label:l(r),customValue:r.id.toString()}));return[...m,{name:"user",metadatas:{customOperators:G,label:a({id:"Settings.permissions.auditLogs.user",defaultMessage:"User"}),options:s,customInput:X},fieldSchema:{type:"relation",mainField:{name:"id"}}}]}return m},ye=[{name:"action",key:"action",metadatas:{label:{id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"},sortable:!0}},{name:"date",key:"date",metadatas:{label:{id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"},sortable:!0}},{key:"user",name:"user",metadatas:{label:{id:"Settings.permissions.auditLogs.user",defaultMessage:"User"},sortable:!1},cellFormatter:a=>a?a.displayName:""}],Le=()=>{const{formatMessage:a}=(0,y.Z)(),d=(0,v.v9)(E._),{allowedActions:{canRead:u,canReadUsers:i}}=(0,n.ss)({...d.settings.auditLogs,readUsers:d.settings.users.read}),[{query:m},l]=(0,n.Kx)(),{auditLogs:s,users:r,isLoading:g,hasError:h}=j({canReadAuditLogs:u,canReadUsers:i});(0,n.go)();const P=Ee({formatMessage:a,users:r,canReadUsers:i}),B=a({id:"global.auditLogs",defaultMessage:"Audit Logs"}),F=ye.map(L=>({...L,metadatas:{...L.metadatas,label:a(L.metadatas.label)}}));return h?e.createElement(M.A,null,e.createElement(T.D,null,e.createElement(c.x,{paddingTop:8},e.createElement(n.Hn,null)))):e.createElement(D.o,{"aria-busy":g},e.createElement(n.SL,{name:B}),e.createElement(C.T,{title:B,subtitle:a({id:"Settings.permissions.auditLogs.listview.header.subtitle",defaultMessage:"Logs of all the activities that happened in your environment"})}),e.createElement(p.Z,{startActions:e.createElement(S.Z,{displayedFilters:P})}),e.createElement(T.D,{canRead:u},e.createElement(n.tM,{contentType:"Audit logs",headers:F,rows:s?.results||[],withBulkActions:!0,isLoading:g},e.createElement(ge,{headers:F,rows:s?.results||[],onOpenModal:L=>l({id:L})})),e.createElement(le,{pagination:s?.pagination})),m?.id&&e.createElement(re,{handleClose:()=>l({id:null},"remove"),logId:m.id}))},ve=()=>{const a=(0,v.v9)(E._);return e.createElement(n.O4,{permissions:a.settings.auditLogs.main},e.createElement(Le,null))}},53768:(R,f,t)=>{t.d(f,{O:()=>n});var e=t(60914);const n=e.Wx},55040:(R,f,t)=>{t.d(f,{Z:()=>v});var e=t(85893),n=t(96987);const v=({startActions:E,endActions:M})=>!E&&!M?null:(0,e.jsxs)(n.k,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[(0,e.jsx)(n.k,{gap:2,wrap:"wrap",children:E}),(0,e.jsx)(n.k,{gap:2,shrink:0,wrap:"wrap",children:M})]})}}]);
