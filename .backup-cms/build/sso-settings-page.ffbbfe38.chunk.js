"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[302],{51754:(W,u,e)=>{e.d(u,{F:()=>p});var t=e(67294),m=e(18638),L=e(86896),M=e(88767);const p=(y={},O={})=>{const{id:i="",...f}=y,{get:c}=(0,m.kY)(),{locale:C}=(0,L.Z)(),h=(0,m.Xe)(C,{sensitivity:"base"}),{data:n,error:v,isError:o,isLoading:I,refetch:A}=(0,M.useQuery)(["roles",i,f],async()=>{const{data:r}=await c(`/admin/roles/${i??""}`,{params:f});return r},O);return{roles:t.useMemo(()=>{let r=[];return i&&n?r=[n.data]:Array.isArray(n?.data)&&(r=n.data),[...r].sort((R,P)=>h.compare(R.name,P.name))},[n,i,h]),error:v,isError:o,isLoading:I,refetch:A}}},29388:(W,u,e)=>{e.r(u),e.d(u,{SingleSignOn:()=>K,default:()=>Z});var t=e(67294),m=e(71590),L=e(40720),M=e(90731),p=e(12473),y=e(34726),O=e(96987),i=e(10574),f=e(31988),c=e(6498),C=e(17705),h=e(59586),n=e(40933),v=e(82832),o=e(18638),I=e(18226),A=e(18446),b=e.n(A),r=e(86896),R=e(86706),P=e(92807),x=e(51754),B=e(36364),g=e(87561);const F=g.Ry().shape({autoRegister:g.Xg().required(o.I0.required),defaultRole:g.nK().when("autoRegister",(a,l)=>a?l.required(o.I0.required):l.nullable()),ssoLockedRoles:g.IX().nullable().of(g.nK().when("ssoLockedRoles",(a,l)=>a?l.required(o.I0.required):l.nullable()))}),K=()=>{(0,o.go)();const{formatMessage:a}=(0,r.Z)(),l=(0,R.v9)(B._),{isLoading:G,allowedActions:{canUpdate:D,canReadRoles:X}}=(0,o.ss)({...l.settings.sso,readRoles:l.settings.roles.read}),[{formErrors:d,initialData:j,isLoading:z,modifiedData:E,showHeaderButtonLoader:H},,{handleChange:S,handleSubmit:N}]=(0,P.G4)("/admin/providers/options",F,()=>{},["autoRegister","defaultRole","ssoLockedRoles"]),{roles:U,isLoading:Q}=(0,x.F)(void 0,{enabled:X}),Y=G||Q||z;return t.createElement(m.A,null,t.createElement(o.SL,{name:"SSO"}),t.createElement(L.o,{tabIndex:-1},t.createElement("form",{onSubmit:N},t.createElement(M.T,{primaryAction:t.createElement(p.z,{"data-testid":"save-button",disabled:b()(j,E),loading:H,startIcon:t.createElement(I.Z,null),type:"submit",size:"L"},a({id:"global.save",defaultMessage:"Save"})),title:a({id:"Settings.sso.title",defaultMessage:"Single Sign-On"}),subtitle:a({id:"Settings.sso.description",defaultMessage:"Configure the settings for the Single Sign-On feature."})}),t.createElement(y.D,null,Y?t.createElement(o.dO,null):t.createElement(O.k,{direction:"column",alignItems:"stretch",gap:4,background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},t.createElement(i.Z,{variant:"delta",as:"h2"},a({id:"global.settings",defaultMessage:"Settings"})),t.createElement(f.r,{gap:4},t.createElement(c.P,{col:6,m:6,s:12},t.createElement(C.s,{"aria-label":"autoRegister","data-testid":"autoRegister",disabled:!D,checked:E.autoRegister,hint:a({id:"Settings.sso.form.registration.description",defaultMessage:"Create new user on SSO login if no account exists"}),label:a({id:"Settings.sso.form.registration.label",defaultMessage:"Auto-registration"}),name:"autoRegister",offLabel:a({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:a({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:s=>{S({target:{name:"autoRegister",value:s.target.checked}})}})),t.createElement(c.P,{col:6,m:6,s:12},t.createElement(h.P,{disabled:!D,hint:a({id:"Settings.sso.form.defaultRole.description",defaultMessage:"It will attach the new authenticated user to the selected role"}),error:d.defaultRole?a({id:d.defaultRole.id,defaultMessage:d.defaultRole.id}):"",label:a({id:"Settings.sso.form.defaultRole.label",defaultMessage:"Default role"}),name:"defaultRole",onChange:s=>{S({target:{name:"defaultRole",value:s}})},placeholder:a({id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"}),value:E.defaultRole},U.map(({id:s,name:T})=>t.createElement(n.W,{key:s,value:s.toString()},T)))),t.createElement(c.P,{col:6,m:6,s:12},t.createElement(v.NU,{disabled:!D,hint:a({id:"Settings.sso.form.localAuthenticationLock.description",defaultMessage:"Select the roles for which you want to disable the local authentication"}),error:d.ssoLockedRoles?a({id:d.ssoLockedRoles.id,defaultMessage:d.ssoLockedRoles.id}):"",label:a({id:"Settings.sso.form.localAuthenticationLock.label",defaultMessage:"Local authentication lock-out"}),name:"ssoLockedRoles",onChange:s=>{S({target:{name:"ssoLockedRoles",value:s}})},placeholder:a({id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"}),onClear:()=>{S({target:{name:"ssoLockedRoles",emptyArray:[]}})},value:E.ssoLockedRoles||[],withTags:!0},U.map(({id:s,name:T})=>t.createElement(v.ML,{key:s,value:s.toString()},T))))))))))},Z=()=>{const a=(0,R.v9)(B._);return t.createElement(o.O4,{permissions:a.settings.sso.main},t.createElement(K,null))}}}]);
