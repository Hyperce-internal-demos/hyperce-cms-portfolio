(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[8853],{28557:(h,E,t)=>{"use strict";t.r(E),t.d(E,{default:()=>At});var e=t(67294),n=t(18638),r=t(16550),o=t(84419),l=t(83086),m=t(40720),c=t(90731),x=t(12473),O=t(34726),y=t(96987),A=t(16607),f=t(10574),g=t(31988),u=t(6498),M=t(38670),R=t(457),b=t(18226),I=t(41054),j=t(86896),$=t(45697),B=t.n($);const U=(0,e.createContext)({}),z=({children:s,value:i})=>e.createElement(U.Provider,{value:i},s),W=()=>(0,e.useContext)(U);z.propTypes={children:B().node.isRequired,value:B().object.isRequired};var w=t(97961),V=t(63122),ie=t(1744),ee=t(68889),le=t(11700),Q=t.n(le);function te(s){switch(s){case"application":return"Application";case"plugin::content-manager":return"Content manager";case"plugin::content-type-builder":return"Content types builder";case"plugin::documentation":return"Documentation";case"plugin::email":return"Email";case"plugin::i18n":return"i18n";case"plugin::upload":return"Upload";case"plugin::users-permissions":return"Users-permissions";default:return Q()(s.replace("api::","").replace("plugin::",""))}}const ce=te,de=(s,i)=>{const a=Object.keys(i).sort().map(d=>({name:d,isOpen:!1}));return{...s,collapses:a}};var ue=t(89734),ne=t.n(ue),J=t(22546),q=t(22304),se=t(40989),Be=t(27361),re=t.n(Be),ae=t(1565);const fe=(0,ae.iv)`
  background: ${s=>s.theme.colors.primary100};
  svg {
    opacity: 1;
  }
`,Se=(0,ae.ZP)(A.x)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    opacity: 0;
    path {
      fill: ${s=>s.theme.colors.primary600};
    }
  }

  /* Show active style both on hover and when the action is selected */
  ${s=>s.isActive&&fe}
  &:hover {
    ${fe}
  }
`,Ze=ae.ZP.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:s})=>s.colors.neutral150};
`,xe=({subCategory:s})=>{const{formatMessage:i}=(0,j.Z)(),{onChange:a,onChangeSelectAll:d,onSelectedAction:C,selectedAction:p,modifiedData:D}=W(),T=(0,e.useMemo)(()=>re()(D,s.name,{}),[D,s]),L=(0,e.useMemo)(()=>Object.values(T).every(v=>v.enabled===!0),[T]),P=(0,e.useMemo)(()=>Object.values(T).some(v=>v.enabled===!0)&&!L,[T,L]),Z=(0,e.useCallback)(({target:{name:v}})=>{d({target:{name:v,value:!L}})},[L,d]),S=(0,e.useCallback)(v=>p===v,[p]);return e.createElement(A.x,null,e.createElement(y.k,{justifyContent:"space-between",alignItems:"center"},e.createElement(A.x,{paddingRight:4},e.createElement(f.Z,{variant:"sigma",textColor:"neutral600"},s.label)),e.createElement(Ze,null),e.createElement(A.x,{paddingLeft:4},e.createElement(J.X,{name:s.name,value:L,onValueChange:v=>Z({target:{name:s.name,value:v}}),indeterminate:P},i({id:"app.utils.select-all",defaultMessage:"Select all"})))),e.createElement(y.k,{paddingTop:6,paddingBottom:6},e.createElement(g.r,{gap:2,style:{flex:1}},s.actions.map(v=>{const F=`${v.name}.enabled`;return e.createElement(u.P,{col:6,key:v.name},e.createElement(Se,{isActive:S(v.name),padding:2,hasRadius:!0},e.createElement(J.X,{value:re()(D,F,!1),name:F,onValueChange:G=>a({target:{name:F,value:G}})},v.label),e.createElement("button",{type:"button",onClick:()=>C(v.name),style:{display:"inline-flex",alignItems:"center"}},e.createElement(q.T,{as:"span"},i({id:"app.utils.show-bound-route",defaultMessage:"Show bound route for {route}"},{route:v.name})),e.createElement(se.Z,null))))}))))};xe.propTypes={subCategory:B().object.isRequired};const Ie=xe,ye=({name:s,permissions:i})=>{const a=(0,e.useMemo)(()=>ne()(Object.values(i.controllers).reduce((d,C,p)=>{const D=`${s}.controllers.${Object.keys(i.controllers)[p]}`,T=ne()(Object.keys(C).reduce((L,P)=>[...L,{...C[P],label:P,name:`${D}.${P}`}],[]),"label");return[...d,{actions:T,label:Object.keys(i.controllers)[p],name:D}]},[]),"label"),[s,i]);return e.createElement(A.x,{padding:6},a.map(d=>e.createElement(Ie,{key:d.name,subCategory:d})))};ye.propTypes={name:B().string.isRequired,permissions:B().object.isRequired};const Ue=ye;var me=t(18172);const $e={collapses:[]},ke=(s,i)=>(0,me.ZP)(s,a=>{switch(i.type){case"TOGGLE_COLLAPSE":{a.collapses=s.collapses.map((d,C)=>C===i.index?{...d,isOpen:!d.isOpen}:{...d,isOpen:!1});break}default:return a}}),We=()=>{const{modifiedData:s}=W(),{formatMessage:i}=(0,j.Z)(),[{collapses:a},d]=(0,e.useReducer)(ke,$e,p=>de(p,s)),C=p=>d({type:"TOGGLE_COLLAPSE",index:p});return e.createElement(y.k,{direction:"column",alignItems:"stretch",gap:1},a.map((p,D)=>e.createElement(V.U,{expanded:p.isOpen,onToggle:()=>C(D),key:p.name,variant:D%2===0?"secondary":void 0},e.createElement(ie.B,{title:ce(p.name),description:i({id:"users-permissions.Plugin.permissions.plugins.description",defaultMessage:"Define all allowed actions for the {name} plugin."},{name:p.name}),variant:D%2?"primary":"secondary"}),e.createElement(ee.v,null,e.createElement(A.x,null,e.createElement(Ue,{permissions:s[p.name],name:p.name}))))))};var Fe=t(41609),Ne=t.n(Fe),we=t(82569),Ge=t.n(we),Ke=t(35161),ze=t.n(Ke),He=t(13217),Ve=t.n(He);const Ye=s=>{switch(s){case"POST":return{text:"success600",border:"success200",background:"success100"};case"GET":return{text:"secondary600",border:"secondary200",background:"secondary100"};case"PUT":return{text:"warning600",border:"warning200",background:"warning100"};case"DELETE":return{text:"danger600",border:"danger200",background:"danger100"};default:return{text:"neutral600",border:"neutral200",background:"neutral100"}}},Xe=(0,ae.ZP)(A.x)`
  margin: -1px;
  border-radius: ${({theme:s})=>s.spaces[1]} 0 0 ${({theme:s})=>s.spaces[1]};
`;function ge({route:s}){const{formatMessage:i}=(0,j.Z)(),{method:a,handler:d,path:C}=s,p=C?Ve()(C.split("/")):[],[D="",T=""]=d?d.split("."):[],L=Ye(s.method);return e.createElement(y.k,{direction:"column",alignItems:"stretch",gap:2},e.createElement(f.Z,{variant:"delta",as:"h3"},i({id:"users-permissions.BoundRoute.title",defaultMessage:"Bound route to"}),"\xA0",e.createElement("span",null,D),e.createElement(f.Z,{variant:"delta",textColor:"primary600"},".",T)),e.createElement(y.k,{hasRadius:!0,background:"neutral0",borderColor:"neutral200",gap:0},e.createElement(Xe,{background:L.background,borderColor:L.border,padding:2},e.createElement(f.Z,{fontWeight:"bold",textColor:L.text},a)),e.createElement(A.x,{paddingLeft:2,paddingRight:2},ze()(p,P=>e.createElement(f.Z,{key:P,textColor:P.includes(":")?"neutral600":"neutral900"},"/",P)))))}ge.defaultProps={route:{handler:"Nocontroller.error",method:"GET",path:"/there-is-no-path"}},ge.propTypes={route:B().shape({handler:B().string,method:B().string,path:B().string})};const Qe=ge,Je=()=>{const{formatMessage:s}=(0,j.Z)(),{selectedAction:i,routes:a}=W(),d=Ge()(i.split("."),"controllers"),C=re()(a,d[0]),p=d.slice(1).join("."),D=Ne()(C)?[]:C.filter(T=>T.handler.endsWith(p));return e.createElement(u.P,{col:5,background:"neutral150",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,style:{minHeight:"100%"}},i?e.createElement(y.k,{direction:"column",alignItems:"stretch",gap:2},D.map((T,L)=>e.createElement(Qe,{key:L,route:T}))):e.createElement(y.k,{direction:"column",alignItems:"stretch",gap:2},e.createElement(f.Z,{variant:"delta",as:"h3"},s({id:"users-permissions.Policies.header.title",defaultMessage:"Advanced settings"})),e.createElement(f.Z,{as:"p",textColor:"neutral600"},s({id:"users-permissions.Policies.header.hint",defaultMessage:"Select the application's actions or the plugin's actions and click on the cog icon to display the bound route"}))))},qe=(s,i,a)=>({...s,initialData:i,modifiedData:i,routes:a});var _e=t(36968),ve=t.n(_e),et=t(69572),tt=t.n(et);const nt={initialData:{},modifiedData:{},routes:{},selectedAction:"",policies:[]},st=(s,i)=>(0,me.ZP)(s,a=>{switch(i.type){case"ON_CHANGE":{const d=i.keys.length,C=i.keys[d-1]==="enabled";if(i.value&&C){const p=tt()(i.keys,d-1).join(".");a.selectedAction=p}ve()(a,["modifiedData",...i.keys],i.value);break}case"ON_CHANGE_SELECT_ALL":{const d=["modifiedData",...i.keys],C=re()(s,d,{}),p=Object.keys(C).reduce((D,T)=>(D[T]={...C[T],enabled:i.value},D),{});ve()(a,d,p);break}case"ON_RESET":{a.modifiedData=s.initialData;break}case"ON_SUBMIT_SUCCEEDED":{a.initialData=s.modifiedData;break}case"SELECT_ACTION":{const{actionToSelect:d}=i;a.selectedAction=d===s.selectedAction?"":d;break}default:return a}}),Re=(0,e.forwardRef)(({permissions:s,routes:i},a)=>{const{formatMessage:d}=(0,j.Z)(),[C,p]=(0,e.useReducer)(st,nt,Z=>qe(Z,s,i));(0,e.useImperativeHandle)(a,()=>({getPermissions(){return{permissions:C.modifiedData}},resetForm(){p({type:"ON_RESET"})},setFormAfterSubmit(){p({type:"ON_SUBMIT_SUCCEEDED"})}}));const P={...C,onChange:({target:{name:Z,value:S}})=>p({type:"ON_CHANGE",keys:Z.split("."),value:S==="empty__string_value"?"":S}),onChangeSelectAll:({target:{name:Z,value:S}})=>p({type:"ON_CHANGE_SELECT_ALL",keys:Z.split("."),value:S}),onSelectedAction:Z=>p({type:"SELECT_ACTION",actionToSelect:Z})};return e.createElement(z,{value:P},e.createElement(g.r,{gap:0,shadow:"filterShadow",hasRadius:!0,background:"neutral0"},e.createElement(u.P,{col:7,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(y.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(y.k,{direction:"column",alignItems:"stretch",gap:2},e.createElement(f.Z,{variant:"delta",as:"h2"},d({id:(0,w.Z)("Plugins.header.title"),defaultMessage:"Permissions"})),e.createElement(f.Z,{as:"p",textColor:"neutral600"},d({id:(0,w.Z)("Plugins.header.description"),defaultMessage:"Only actions bound by a route are listed below."}))),e.createElement(We,null))),e.createElement(Je,null)))});Re.propTypes={permissions:B().object.isRequired,routes:B().object.isRequired};const Ce=(0,e.memo)(Re),Kt={isLoading:!0,modifiedData:{}},zt=(s,i)=>produce(s,a=>{switch(i.type){case"GET_DATA":{a.isLoading=!0,a.modifiedData={};break}case"GET_DATA_SUCCEEDED":{a.isLoading=!1,a.modifiedData=i.data;break}case"GET_DATA_ERROR":{a.isLoading=!0;break}case"ON_SUBMIT_SUCCEEDED":{a.modifiedData=i.data;break}default:return a}}),Ht=null,Vt=(s,i)=>{const{isLoading:a,allowedActions:d}=useRBAC(i),[{isLoading:C,modifiedData:p},D]=useReducer(reducer,initialState),T=useNotification(),L=useRef(!0),{get:P}=useFetchClient();useEffect(()=>(a||(async()=>{try{D({type:"GET_DATA"});const{data:v}=await P(`/users-permissions/${s}`);D({type:"GET_DATA_SUCCEEDED",data:v})}catch(v){L.current&&(D({type:"GET_DATA_ERROR"}),console.error(v),T({type:"warning",message:{id:"notification.error"}}))}})(),()=>{L.current=!1}),[a,s,P,T]);const Z=useCallback(S=>{D({type:"ON_SUBMIT_SUCCEEDED",data:S})},[]);return{allowedActions:d,dispatchSubmitSucceeded:Z,isLoading:C,isLoadingForPermissions:a,modifiedData:p}},Yt=null,Xt={roles:[],isLoading:!0},Qt=(s,i)=>produce(s,a=>{switch(i.type){case"GET_DATA":{a.isLoading=!0,a.roles=[];break}case"GET_DATA_SUCCEEDED":{a.roles=i.data,a.isLoading=!1;break}case"GET_DATA_ERROR":{a.isLoading=!1;break}default:return a}}),Jt=null,qt=(s=!0)=>{const[{roles:i,isLoading:a},d]=useReducer(reducer,initialState,()=>init(initialState,s)),C=useNotification(),p=useRef(!0),D=useFetchClient(),T=useCallback(async()=>{try{d({type:"GET_DATA"});const{data:{roles:L}}=await D.get(`/${pluginId}/roles`);d({type:"GET_DATA_SUCCEEDED",data:L})}catch(L){const P=get(L,["response","payload","message"],"An error occured");p.current&&(d({type:"GET_DATA_ERROR"}),P!=="Forbidden"&&C({type:"warning",message:P}))}},[D,C]);return useEffect(()=>(s&&T(),()=>{p.current=!1}),[s,T]),{roles:i,isLoading:a,getData:T}},_t=null;var pe=t(88767),_=t(99688);const Pe=()=>{const s=(0,n.lm)(),{get:i}=(0,n.kY)(),{formatAPIError:a}=(0,n.So)(_.OB),[{data:d,isLoading:C,error:p,refetch:D},{data:T,isLoading:L,error:P,refetch:Z}]=(0,pe.useQueries)([{queryKey:[l.Z,"permissions"],async queryFn(){return(await i(`/${l.Z}/permissions`)).data.permissions}},{queryKey:[l.Z,"routes"],async queryFn(){return(await i(`/${l.Z}/routes`)).data.routes}}]),S=async()=>{await Promise.all([D(),Z()])};(0,e.useEffect)(()=>{p&&s({type:"warning",message:a(p)})},[s,p,a]),(0,e.useEffect)(()=>{P&&s({type:"warning",message:a(P)})},[s,P,a]);const v=C||L;return{permissions:d?(0,_.YX)(d):{},routes:T??{},getData:S,isLoading:v}},rt={role:{},isLoading:!0},at=(s,i)=>(0,me.ZP)(s,a=>{switch(i.type){case"GET_DATA_SUCCEEDED":{a.role=i.role,a.isLoading=!1;break}case"GET_DATA_ERROR":{a.isLoading=!1;break}case"ON_SUBMIT_SUCCEEDED":{a.role.name=i.name,a.role.description=i.description;break}default:return a}}),ot=s=>{const[i,a]=(0,e.useReducer)(at,rt),d=(0,n.lm)(),C=(0,e.useRef)(null),{get:p}=(0,n.kY)();(0,e.useEffect)(()=>(C.current=!0,s?D(s):a({type:"GET_DATA_SUCCEEDED",role:{}}),()=>C.current=!1),[s]);const D=async L=>{try{const{data:{role:P}}=await p(`/${l.Z}/roles/${L}`);C.current&&a({type:"GET_DATA_SUCCEEDED",role:P})}catch(P){console.error(P),a({type:"GET_DATA_ERROR"}),d({type:"warning",message:{id:"notification.error"}})}},T=(0,e.useCallback)(L=>{a({type:"ON_SUBMIT_SUCCEEDED",...L})},[]);return{...i,onSubmitSucceeded:T}};var he=t(87561);const De=he.Ry().shape({name:he.Z_().required(n.I0.required),description:he.Z_().required(n.I0.required)}),it=()=>{const{formatMessage:s}=(0,j.Z)(),[i,a]=(0,e.useState)(!1),d=(0,n.lm)(),{goBack:C}=(0,r.k6)(),{lockApp:p,unlockApp:D}=(0,n.o1)(),{isLoading:T,permissions:L,routes:P}=Pe(),{trackUsage:Z}=(0,n.rS)(),S=(0,e.useRef)(),{post:v}=(0,n.kY)(),F=async G=>{p(),a(!0);try{const k=S.current.getPermissions();await v(`/${l.Z}/roles`,{...G,...k,users:[]}),Z("didCreateRole"),d({type:"success",message:{id:(0,w.Z)("Settings.roles.created"),defaultMessage:"Role created"}}),C()}catch(k){console.error(k),d({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}a(!1),D()};return e.createElement(m.o,null,e.createElement(n.SL,{name:"Roles"}),e.createElement(I.J9,{enableReinitialize:!0,initialValues:{name:"",description:""},onSubmit:F,validationSchema:De},({handleSubmit:G,values:k,handleChange:N,errors:K})=>e.createElement(n.l0,{noValidate:!0,onSubmit:G},e.createElement(c.T,{primaryAction:!T&&e.createElement(x.z,{type:"submit",loading:i,startIcon:e.createElement(b.Z,null)},s({id:"global.save",defaultMessage:"Save"})),title:s({id:"Settings.roles.create.title",defaultMessage:"Create a role"}),subtitle:s({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"})}),e.createElement(O.D,null,e.createElement(y.k,{direction:"column",alignItems:"stretch",gap:7},e.createElement(A.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(y.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(f.Z,{variant:"delta",as:"h2"},s({id:(0,w.Z)("EditPage.form.roles"),defaultMessage:"Role details"})),e.createElement(g.r,{gap:4},e.createElement(u.P,{col:6},e.createElement(M.o,{name:"name",value:k.name||"",onChange:N,label:s({id:"global.name",defaultMessage:"Name"}),error:K.name?s({id:K.name,defaultMessage:"Invalid value"}):null})),e.createElement(u.P,{col:6},e.createElement(R.g,{id:"description",value:k.description||"",onChange:N,label:s({id:"global.description",defaultMessage:"Description"}),error:K.description?s({id:K.description,defaultMessage:"Invalid value"}):null}))))),!T&&e.createElement(Ce,{ref:S,permissions:L,routes:P}))))))},lt=()=>e.createElement(n.O4,{permissions:o._.createRole},e.createElement(it,null));var ct=t(97695);const dt=()=>{const{formatMessage:s}=(0,j.Z)(),[i,a]=(0,e.useState)(!1),d=(0,n.lm)(),{lockApp:C,unlockApp:p}=(0,n.o1)(),{params:{id:D}}=(0,r.$B)(`/settings/${l.Z}/roles/:id`),{isLoading:T,routes:L}=Pe(),{role:P,onSubmitSucceeded:Z,isLoading:S}=ot(D),v=(0,e.useRef)(),{put:F}=(0,n.kY)(),G=async k=>{C(),a(!0);try{const N=v.current.getPermissions();await F(`/${l.Z}/roles/${D}`,{...k,...N,users:[]}),Z({name:k.name,description:k.description}),d({type:"success",message:{id:(0,w.Z)("Settings.roles.edited"),defaultMessage:"Role edited"}})}catch(N){console.error(N),d({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}a(!1),p()};return S?e.createElement(n.dO,null):e.createElement(m.o,null,e.createElement(n.SL,{name:"Roles"}),e.createElement(I.J9,{enableReinitialize:!0,initialValues:{name:P.name,description:P.description},onSubmit:G,validationSchema:De},({handleSubmit:k,values:N,handleChange:K,errors:Y})=>e.createElement(n.l0,{noValidate:!0,onSubmit:k},e.createElement(c.T,{primaryAction:!T&&e.createElement(x.z,{disabled:P.code==="strapi-super-admin",type:"submit",loading:i,startIcon:e.createElement(b.Z,null)},s({id:"global.save",defaultMessage:"Save"})),title:P.name,subtitle:P.description,navigationAction:e.createElement(n.rU,{startIcon:e.createElement(ct.Z,null),to:"/settings/users-permissions/roles"},s({id:"global.back",defaultMessage:"Back"}))}),e.createElement(O.D,null,e.createElement(y.k,{direction:"column",alignItems:"stretch",gap:7},e.createElement(A.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(y.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(f.Z,{variant:"delta",as:"h2"},s({id:(0,w.Z)("EditPage.form.roles"),defaultMessage:"Role details"})),e.createElement(g.r,{gap:4},e.createElement(u.P,{col:6},e.createElement(M.o,{name:"name",value:N.name||"",onChange:K,label:s({id:"global.name",defaultMessage:"Name"}),error:Y.name?s({id:Y.name,defaultMessage:"Invalid value"}):null})),e.createElement(u.P,{col:6},e.createElement(R.g,{id:"description",value:N.description||"",onChange:K,label:s({id:"global.description",defaultMessage:"Description"}),error:Y.description?s({id:Y.description,defaultMessage:"Invalid value"}):null}))))),!T&&e.createElement(Ce,{ref:v,permissions:P.permissions,routes:L}))))))},ut=()=>e.createElement(n.O4,{permissions:o._.updateRole},e.createElement(dt,null));var mt=t(334),gt=t(71590),pt=t(55040),ht=t(5923),Et=t(3547),Te=t(29299),H=t(69398),ft=t(83598),xt=t(35752),Ae=t(96208),yt=t(2382),vt=t(54425);const Ee=({sortedRoles:s,canDelete:i,permissions:a,setRoleToDelete:d,onDelete:C})=>{const{formatMessage:p}=(0,j.Z)(),{push:D}=(0,r.k6)(),[T,L]=C,P=v=>i&&!["public","authenticated"].includes(v.type),Z=v=>{d(v),L(!T)},S=v=>{D(`/settings/${l.Z}/roles/${v}`)};return e.createElement(xt.p,null,s?.map(v=>e.createElement(Te.Tr,{key:v.name,...(0,n.X7)({fn:()=>S(v.id)})},e.createElement(H.Td,{width:"20%"},e.createElement(f.Z,null,v.name)),e.createElement(H.Td,{width:"50%"},e.createElement(f.Z,null,v.description)),e.createElement(H.Td,{width:"30%"},e.createElement(f.Z,null,p({id:"Roles.RoleRow.user-count",defaultMessage:"{number, plural, =0 {# user} one {# user} other {# users}}"},{number:v.nb_users}))),e.createElement(H.Td,null,e.createElement(y.k,{justifyContent:"end",...n.UW},e.createElement(n.jW,{permissions:a.updateRole},e.createElement(Ae.h,{onClick:()=>S(v.id),noBorder:!0,icon:e.createElement(yt.Z,null),label:p({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:`${v.name}`})})),P(v)&&e.createElement(n.jW,{permissions:a.deleteRole},e.createElement(Ae.h,{onClick:()=>Z(v.id),noBorder:!0,icon:e.createElement(vt.Z,null),label:p({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:`${v.name}`})})))))))},Rt=Ee;Ee.defaultProps={canDelete:!1},Ee.propTypes={onDelete:B().array.isRequired,permissions:B().object.isRequired,setRoleToDelete:B().func.isRequired,sortedRoles:B().array.isRequired,canDelete:B().bool};const Ct=async(s,i)=>{try{const{get:a}=(0,n.tg)(),{data:d}=await a("/users-permissions/roles");return i("The roles have loaded successfully"),d}catch(a){throw s({type:"warning",message:{id:"notification.error"}}),new Error(a)}},Pt=async(s,i)=>{try{const{del:a}=(0,n.tg)();await a(`/users-permissions/roles/${s}`)}catch{i({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}},Dt=()=>{const{trackUsage:s}=(0,n.rS)(),{formatMessage:i,locale:a}=(0,j.Z)(),{push:d}=(0,r.k6)(),C=(0,n.lm)(),{notifyStatus:p}=(0,mt.G)(),[{query:D}]=(0,n.Kx)(),T=D?._q||"",[L,P]=(0,e.useState)(!1),[Z,S]=(0,e.useState)(!1),[v,F]=(0,e.useState)();(0,n.go)();const{isLoading:G,allowedActions:{canRead:k,canDelete:N}}=(0,n.ss)({create:o._.createRole,read:o._.readRoles,update:o._.updateRole,delete:o._.deleteRole}),{isLoading:K,data:{roles:Y},isFetching:Mt,refetch:bt}=(0,pe.useQuery)("get-roles",()=>Ct(C,p),{initialData:{},enabled:k}),{includes:Me}=(0,n.L0)(a,{sensitivity:"base"}),be=(0,n.Xe)(a,{sensitivity:"base"}),Le=K||Mt,Lt=()=>{s("willCreateRole"),d(`/settings/${l.Z}/roles/new`)},Ot=()=>{P(!L)},jt={roles:{id:(0,_.OB)("Roles.empty"),defaultMessage:"You don't have any roles yet."},search:{id:(0,_.OB)("Roles.empty.search"),defaultMessage:"No roles match the search."}},Bt=i({id:"global.roles",defaultMessage:"Roles"}),St=(0,pe.useMutation)(X=>Pt(X,C),{async onSuccess(){await bt()}}),Zt=async()=>{S(!0),await St.mutateAsync(v),P(!L),S(!1)},oe=(Y||[]).filter(X=>Me(X.name,T)||Me(X.description,T)).sort((X,Oe)=>be.compare(X.name,Oe.name)||be.compare(X.description,Oe.description)),It=T&&!oe.length?"search":"roles",Ut=4,$t=(Y?.length||0)+1;return e.createElement(gt.A,null,e.createElement(n.SL,{name:Bt}),e.createElement(m.o,{"aria-busy":Le},e.createElement(c.T,{title:i({id:"global.roles",defaultMessage:"Roles"}),subtitle:i({id:"Settings.roles.list.description",defaultMessage:"List of roles"}),primaryAction:e.createElement(n.jW,{permissions:o._.createRole},e.createElement(x.z,{onClick:Lt,startIcon:e.createElement(ft.Z,null),size:"S"},i({id:(0,_.OB)("List.button.roles"),defaultMessage:"Add new role"})))}),e.createElement(pt.Z,{startActions:e.createElement(n.m,{label:i({id:"app.component.search.label",defaultMessage:"Search"})})}),e.createElement(O.D,null,!k&&e.createElement(n.ZF,null),(Le||G)&&e.createElement(n.dO,null),k&&oe&&oe?.length?e.createElement(ht.i,{colCount:Ut,rowCount:$t},e.createElement(Et.h,null,e.createElement(Te.Tr,null,e.createElement(H.Th,null,e.createElement(f.Z,{variant:"sigma",textColor:"neutral600"},i({id:"global.name",defaultMessage:"Name"}))),e.createElement(H.Th,null,e.createElement(f.Z,{variant:"sigma",textColor:"neutral600"},i({id:"global.description",defaultMessage:"Description"}))),e.createElement(H.Th,null,e.createElement(f.Z,{variant:"sigma",textColor:"neutral600"},i({id:"global.users",defaultMessage:"Users"}))),e.createElement(H.Th,null,e.createElement(q.T,null,i({id:"global.actions",defaultMessage:"Actions"}))))),e.createElement(Rt,{sortedRoles:oe,canDelete:N,permissions:o._,setRoleToDelete:F,onDelete:[L,P]})):e.createElement(n.x7,{content:jt[It]})),e.createElement(n.QH,{isConfirmButtonLoading:Z,onConfirm:Zt,onToggleDialog:Ot,isOpen:L})))},Tt=()=>e.createElement(n.O4,{permissions:o._.accessRoles},e.createElement(Dt,null)),At=()=>e.createElement(n.O4,{permissions:o._.accessRoles},e.createElement(r.rs,null,e.createElement(r.AW,{path:`/settings/${l.Z}/roles/new`,component:lt,exact:!0}),e.createElement(r.AW,{path:`/settings/${l.Z}/roles/:id`,component:ut,exact:!0}),e.createElement(r.AW,{path:`/settings/${l.Z}/roles`,component:Tt,exact:!0}),e.createElement(r.AW,{path:"",component:n.Hn})))},99688:(h,E,t)=>{"use strict";t.d(E,{YX:()=>o,OB:()=>l.Z});var e=t(41609),n=t.n(e);const o=m=>Object.keys(m).reduce((c,x)=>{const O=m[x].controllers,y=Object.keys(O).reduce((A,f)=>(n()(O[f])||(A[f]=O[f]),A),{});return n()(y)||(c[x]={controllers:y}),c},{});var l=t(97961)},47443:(h,E,t)=>{var e=t(42118);function n(r,o){var l=r==null?0:r.length;return!!l&&e(r,o,0)>-1}h.exports=n},1196:h=>{function E(t,e,n){for(var r=-1,o=t==null?0:t.length;++r<o;)if(n(e,t[r]))return!0;return!1}h.exports=E},20731:(h,E,t)=>{var e=t(88668),n=t(47443),r=t(1196),o=t(29932),l=t(7518),m=t(74757),c=200;function x(O,y,A,f){var g=-1,u=n,M=!0,R=O.length,b=[],I=y.length;if(!R)return b;A&&(y=o(y,l(A))),f?(u=r,M=!1):y.length>=c&&(u=m,M=!1,y=new e(y));e:for(;++g<R;){var j=O[g],$=A==null?j:A(j);if(j=f||j!==0?j:0,M&&$===$){for(var B=I;B--;)if(y[B]===$)continue e;b.push(j)}else u(y,$,f)||b.push(j)}return b}h.exports=x},89881:(h,E,t)=>{var e=t(47816),n=t(99291),r=n(e);h.exports=r},41848:h=>{function E(t,e,n,r){for(var o=t.length,l=n+(r?1:-1);r?l--:++l<o;)if(e(t[l],l,t))return l;return-1}h.exports=E},42118:(h,E,t)=>{var e=t(41848),n=t(62722),r=t(42351);function o(l,m,c){return m===m?r(l,m,c):e(l,n,c)}h.exports=o},62722:h=>{function E(t){return t!==t}h.exports=E},69199:(h,E,t)=>{var e=t(89881),n=t(98612);function r(o,l){var m=-1,c=n(o)?Array(o.length):[];return e(o,function(x,O,y){c[++m]=l(x,O,y)}),c}h.exports=r},82689:(h,E,t)=>{var e=t(29932),n=t(97786),r=t(67206),o=t(69199),l=t(71131),m=t(7518),c=t(85022),x=t(6557),O=t(1469);function y(A,f,g){f.length?f=e(f,function(R){return O(R)?function(b){return n(b,R.length===1?R[0]:R)}:R}):f=[x];var u=-1;f=e(f,m(r));var M=o(A,function(R,b,I){var j=e(f,function($){return $(R)});return{criteria:j,index:++u,value:R}});return l(M,function(R,b){return c(R,b,g)})}h.exports=y},71131:h=>{function E(t,e){var n=t.length;for(t.sort(e);n--;)t[n]=t[n].value;return t}h.exports=E},26393:(h,E,t)=>{var e=t(33448);function n(r,o){if(r!==o){var l=r!==void 0,m=r===null,c=r===r,x=e(r),O=o!==void 0,y=o===null,A=o===o,f=e(o);if(!y&&!f&&!x&&r>o||x&&O&&A&&!y&&!f||m&&O&&A||!l&&A||!c)return 1;if(!m&&!x&&!f&&r<o||f&&l&&c&&!m&&!x||y&&l&&c||!O&&c||!A)return-1}return 0}h.exports=n},85022:(h,E,t)=>{var e=t(26393);function n(r,o,l){for(var m=-1,c=r.criteria,x=o.criteria,O=c.length,y=l.length;++m<O;){var A=e(c[m],x[m]);if(A){if(m>=y)return A;var f=l[m];return A*(f=="desc"?-1:1)}}return r.index-o.index}h.exports=n},99291:(h,E,t)=>{var e=t(98612);function n(r,o){return function(l,m){if(l==null)return l;if(!e(l))return r(l,m);for(var c=l.length,x=o?c:-1,O=Object(l);(o?x--:++x<c)&&m(O[x],x,O)!==!1;);return l}}h.exports=n},42351:h=>{function E(t,e,n){for(var r=n-1,o=t.length;++r<o;)if(t[r]===e)return r;return-1}h.exports=E},35161:(h,E,t)=>{var e=t(29932),n=t(67206),r=t(69199),o=t(1469);function l(m,c){var x=o(m)?e:r;return x(m,n(c,3))}h.exports=l},89734:(h,E,t)=>{var e=t(21078),n=t(82689),r=t(5976),o=t(16612),l=r(function(m,c){if(m==null)return[];var x=c.length;return x>1&&o(m,c[0],c[1])?c=[]:x>2&&o(c[0],c[1],c[2])&&(c=[c[0]]),n(m,e(c,1),[])});h.exports=l},13217:(h,E,t)=>{var e=t(14259);function n(r){var o=r==null?0:r.length;return o?e(r,1,o):[]}h.exports=n},69572:(h,E,t)=>{var e=t(14259),n=t(40554);function r(o,l,m){return o&&o.length?(l=m||l===void 0?1:n(l),e(o,0,l<0?0:l)):[]}h.exports=r},82569:(h,E,t)=>{var e=t(20731),n=t(5976),r=t(29246),o=n(function(l,m){return r(l)?e(l,m):[]});h.exports=o},63122:(h,E,t)=>{"use strict";t.d(E,{U:()=>f,y:()=>y});var e=t(85893),n=t(67294),r=t(1565),o=t(31254),l=t(92058),m=t(10574),c=t(96987),x=t(16607);const O=({theme:g,expanded:u,variant:M,disabled:R,error:b})=>b?`1px solid ${g.colors.danger600} !important`:R?`1px solid ${g.colors.neutral150}`:u?`1px solid ${g.colors.primary600}`:M==="primary"?`1px solid ${g.colors.neutral0}`:`1px solid ${g.colors.neutral100}`,y=(0,r.ZP)(m.Z)``,A=(0,r.ZP)(x.x)`
  border: ${O};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:g})=>g.colors.primary600};

    ${y} {
      color: ${({theme:g,expanded:u})=>u?void 0:g.colors.primary700};
    }

    ${m.Z} {
      color: ${({theme:g,expanded:u})=>u?void 0:g.colors.primary600};
    }

    & > ${c.k} {
      background: ${({theme:g})=>g.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:g})=>g.colors.primary200};
    }
  }
`,f=({children:g,disabled:u=!1,error:M,expanded:R=!1,hasErrorMessage:b=!0,id:I,onToggle:j,toggle:$,size:B="M",variant:U="primary",shadow:z})=>{const W=(0,l.M)(I),w=n.useMemo(()=>({expanded:R,onToggle:j,toggle:$,id:W,size:B,variant:U,disabled:u}),[u,R,W,j,B,$,U]);return(0,e.jsxs)(o.S.Provider,{value:w,children:[(0,e.jsx)(A,{"data-strapi-expanded":R,disabled:u,"aria-disabled":u,expanded:R,hasRadius:!0,variant:U,error:M,shadow:z,children:g}),M&&b&&(0,e.jsx)(x.x,{paddingTop:1,children:(0,e.jsx)(m.Z,{variant:"pi",textColor:"danger600",children:M})})]})}},68889:(h,E,t)=>{"use strict";t.d(E,{v:()=>o});var e=t(85893),n=t(31254),r=t(16607);const o=({children:l,...m})=>{const{expanded:c,id:x}=(0,n.A)();if(!c)return null;const O=`accordion-content-${x}`,y=`accordion-label-${x}`,A=`accordion-desc-${x}`;return(0,e.jsx)(r.x,{role:"region",id:O,"aria-labelledby":y,"aria-describedby":A,...m,children:l})}},31254:(h,E,t)=>{"use strict";t.d(E,{A:()=>r,S:()=>n});var e=t(67294);const n=(0,e.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),r=()=>(0,e.useContext)(n)},1744:(h,E,t)=>{"use strict";t.d(E,{B:()=>g});var e=t(85893),n=t(58471),r=t(1565),o=t(63122),l=t(31254);const m=({expanded:u,disabled:M,variant:R})=>{let b="neutral100";return u?b="primary100":M?b="neutral150":R==="primary"&&(b="neutral0"),b};var c=t(58753),x=t(85200),O=t(96987),y=t(10574);const A=(0,r.ZP)(c.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:u,expanded:M})=>M?u.colors.primary600:u.colors.neutral500};
    }
  }
`,f=(0,r.ZP)(O.k)`
  min-height: ${({theme:u,size:M})=>u.sizes.accordions[M]};
  border-radius: ${({theme:u,expanded:M})=>M?`${u.borderRadius} ${u.borderRadius} 0 0`:u.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:u})=>u.colors.primary600};
      }
    }
  }
`,g=({title:u,description:M,as:R="span",togglePosition:b="right",action:I,...j})=>{const{onToggle:$,toggle:B,expanded:U,id:z,size:W,variant:w,disabled:V}=(0,l.A)(),ie=`accordion-content-${z}`,ee=`accordion-label-${z}`,le=`accordion-desc-${z}`,Q=W==="M"?6:4,te=W==="M"?Q:Q-2,ce=m({expanded:U,disabled:V,variant:w}),de={as:R,fontWeight:W==="S"?"bold":void 0,id:ee,textColor:U?"primary600":"neutral700",ellipsis:!0,variant:W==="M"?"delta":void 0},ue=U?"primary600":"neutral600",ne=U?"primary200":"neutral200",J=W==="M"?`${32/16}rem`:`${24/16}rem`,q=()=>{V||(B&&!$?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),B()):$&&$())},se=(0,e.jsx)(O.k,{justifyContent:"center",borderRadius:"50%",height:J,width:J,transform:U?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:ne,cursor:V?"not-allowed":"pointer",onClick:q,shrink:0,children:(0,e.jsx)(x.J,{as:n.Z,width:W==="M"?`${11/16}rem`:`${8/16}rem`,color:U?"primary600":"neutral600"})});return(0,e.jsx)(f,{paddingBottom:te,paddingLeft:Q,paddingRight:Q,paddingTop:te,background:ce,expanded:U,size:W,justifyContent:"space-between",cursor:V?"not-allowed":"",children:(0,e.jsxs)(O.k,{gap:3,flex:1,maxWidth:"100%",children:[b==="left"&&se,(0,e.jsx)(A,{onClick:q,"aria-disabled":V,"aria-expanded":U,"aria-controls":ie,"aria-labelledby":ee,"data-strapi-accordion-toggle":!0,expanded:U,type:"button",flex:1,minWidth:0,...j,children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(o.y,{...de,children:u}),M&&(0,e.jsx)(y.Z,{as:"p",id:le,textColor:ue,children:M})]})}),b==="right"&&(0,e.jsxs)(O.k,{gap:3,children:[se,I]}),b==="left"&&I]})})}},55040:(h,E,t)=>{"use strict";t.d(E,{Z:()=>r});var e=t(85893),n=t(96987);const r=({startActions:o,endActions:l})=>!o&&!l?null:(0,e.jsxs)(n.k,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[(0,e.jsx)(n.k,{gap:2,wrap:"wrap",children:o}),(0,e.jsx)(n.k,{gap:2,shrink:0,wrap:"wrap",children:l})]})},34726:(h,E,t)=>{"use strict";t.d(E,{D:()=>r});var e=t(85893),n=t(16607);const r=({children:o})=>(0,e.jsx)(n.x,{paddingLeft:10,paddingRight:10,children:o})},90731:(h,E,t)=>{"use strict";t.d(E,{T:()=>y});var e=t(85893),n=t(67294),r=t(1565);const o=g=>{const u=(0,n.useRef)(null),[M,R]=(0,n.useState)(!0),b=([I])=>{R(I.isIntersecting)};return(0,n.useEffect)(()=>{const I=u.current,j=new IntersectionObserver(b,g);return I&&j.observe(u.current),()=>{I&&j.disconnect()}},[u,g]),[u,M]};var l=t(79698);const m=(g,u)=>{const M=(0,l.W)(u);(0,n.useLayoutEffect)(()=>{const R=new ResizeObserver(M);return Array.isArray(g)?g.forEach(b=>{b.current&&R.observe(b.current)}):g.current&&R.observe(g.current),()=>{R.disconnect()}},[g,M])};var c=t(16607),x=t(96987),O=t(10574);const y=g=>{const u=(0,n.useRef)(null),[M,R]=(0,n.useState)(null),[b,I]=o({root:null,rootMargin:"0px",threshold:0});return m(b,()=>{b.current&&R(b.current.getBoundingClientRect())}),(0,n.useEffect)(()=>{u.current&&R(u.current.getBoundingClientRect())},[u]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{style:{height:M?.height},ref:b,children:I&&(0,e.jsx)(f,{ref:u,...g})}),!I&&(0,e.jsx)(f,{...g,sticky:!0,width:M?.width})]})};y.displayName="HeaderLayout";const A=(0,r.ZP)(c.x)`
  width: ${({width:g})=>g?`${g/16}rem`:void 0};
  z-index: ${({theme:g})=>g.zIndices[1]};
`,f=n.forwardRef(({navigationAction:g,primaryAction:u,secondaryAction:M,subtitle:R,title:b,sticky:I,width:j,...$},B)=>{const U=typeof R=="string";return I?(0,e.jsx)(A,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:j,"data-strapi-header-sticky":!0,children:(0,e.jsxs)(x.k,{justifyContent:"space-between",children:[(0,e.jsxs)(x.k,{children:[g&&(0,e.jsx)(c.x,{paddingRight:3,children:g}),(0,e.jsxs)(c.x,{children:[(0,e.jsx)(O.Z,{variant:"beta",as:"h1",...$,children:b}),U?(0,e.jsx)(O.Z,{variant:"pi",textColor:"neutral600",children:R}):R]}),M?(0,e.jsx)(c.x,{paddingLeft:4,children:M}):null]}),(0,e.jsx)(x.k,{children:u?(0,e.jsx)(c.x,{paddingLeft:2,children:u}):void 0})]})}):(0,e.jsxs)(c.x,{ref:B,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:g?6:8,background:"neutral100","data-strapi-header":!0,children:[g?(0,e.jsx)(c.x,{paddingBottom:2,children:g}):null,(0,e.jsxs)(x.k,{justifyContent:"space-between",children:[(0,e.jsxs)(x.k,{minWidth:0,children:[(0,e.jsx)(O.Z,{as:"h1",variant:"alpha",...$,children:b}),M?(0,e.jsx)(c.x,{paddingLeft:4,children:M}):null]}),u]}),U?(0,e.jsx)(O.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:R}):R]})})},71590:(h,E,t)=>{"use strict";t.d(E,{A:()=>m});var e=t(85893),n=t(1565),r=t(16607);const o=(0,n.ZP)(r.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:c})=>c?"auto 1fr":"1fr"};
`,l=(0,n.ZP)(r.x)`
  overflow-x: hidden;
`,m=({sideNav:c,children:x})=>(0,e.jsxs)(o,{hasSideNav:Boolean(c),children:[c,(0,e.jsx)(l,{paddingBottom:10,children:x})]})},40720:(h,E,t)=>{"use strict";t.d(E,{o:()=>l});var e=t(85893),n=t(1565),r=t(16607);const o=(0,n.ZP)(r.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,l=({labelledBy:m="main-content-title",...c})=>(0,e.jsx)(o,{"aria-labelledby":m,as:"main",id:"main-content",tabIndex:-1,...c})},97695:(h,E,t)=>{"use strict";t.d(E,{Z:()=>r});var e=t(85893);const n=o=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...o,children:(0,e.jsx)("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),r=n},40989:(h,E,t)=>{"use strict";t.d(E,{Z:()=>r});var e=t(85893);const n=o=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...o,children:(0,e.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"M2.68 9.192c-.6.276-2.114 1.18-2.306 1.303a.792.792 0 0 0-.374.68v1.65a.797.797 0 0 0 .384.687c.254.16 1.73 1.042 2.306 1.303l.744 1.8c-.24.634-.67 2.333-.72 2.554a.797.797 0 0 0 .216.744l1.167 1.166a.801.801 0 0 0 .744.216l.03-.008c.36-.092 1.946-.498 2.523-.712l1.8.744c.276.6 1.181 2.115 1.304 2.307a.805.805 0 0 0 .679.374h1.649a.797.797 0 0 0 .686-.384c.16-.254 1.042-1.73 1.303-2.306l1.8-.744c.634.24 2.333.67 2.554.72a.797.797 0 0 0 .744-.216l1.166-1.167a.803.803 0 0 0 .216-.744l-.008-.03c-.092-.36-.498-1.946-.712-2.523l.744-1.8c.6-.276 2.115-1.181 2.307-1.304a.804.804 0 0 0 .374-.679v-1.649a.796.796 0 0 0-.382-.679c-.254-.16-1.73-1.041-2.306-1.303l-.744-1.8c.24-.634.67-2.333.72-2.554a.796.796 0 0 0-.216-.744l-1.166-1.173a.802.802 0 0 0-.744-.216l-.03.008c-.361.092-1.947.498-2.524.712l-1.8-.744c-.276-.6-1.18-2.115-1.303-2.307a.803.803 0 0 0-.68-.374h-1.65a.797.797 0 0 0-.68.382c-.16.254-1.041 1.73-1.303 2.306l-1.8.744c-.634-.24-2.333-.67-2.554-.72a.797.797 0 0 0-.744.216L2.921 4.094a.802.802 0 0 0-.216.744l.008.03c.092.361.498 1.947.712 2.524l-.744 1.8ZM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z",clipRule:"evenodd"})}),r=n}}]);
