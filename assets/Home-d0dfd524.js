import{a as p,d as l,e as m,t as h,u as j,n as L,r as R,o as A,V as $,q as E,c as o,h as t,w as e,F as B,s as D,f as a,k as b,x as I,y as J,p as M,l as P}from"./index-e734480e.js";import{_ as U}from"./_plugin-vue_export-helper-c27b6911.js";const Y={__name:"CurrentTime",setup(c){const r=p(i(new Date));setInterval(()=>{r.value=i(new Date)},1e3);function i(s){const _=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],f=s.getFullYear(),u=n(s.getMonth()+1),d=n(s.getDate()),g=_[s.getDay()],v=n(s.getHours()),y=n(s.getMinutes()),x=n(s.getSeconds());return`${f}-${u}-${d} ${g} ${v}:${y}:${x}`}function n(s){return String(s).padStart(2,"0")}return(s,_)=>(l(),m("div",null,h(r.value),1))}};const Z=c=>(M("data-v-ed637fc7"),c=c(),P(),c),G={id:"homeContent"},K={class:"titleBox"},Q={class:"title"},W=Z(()=>a("h1",{class:"left"},"校园巡查系统",-1)),X={class:"center"},ee={class:"right"},te={class:"name"},oe={style:{"text-align":"right",margin:"0"}},se={__name:"Home",setup(c){const r=j(),i=L();p({squareUrl:"http://localhost:8080/uploads/e340d384ab2de3996016f03ed38a8da8.jpg"});const n=R({});A(()=>{Object.assign(n,JSON.parse($.get("userInfo")))}),console.log(n);const s=()=>{$.delete("token"),r.push("/login")},_=()=>{r.push("/system/set")},f=p([{id:"1",title:"巡查人员",icon:"",children:[{title:"人员列表",path:"/inspextor/list"}]},{id:"2",title:"设备管控",icon:"",children:[{title:"设备列表",path:"/equipment/list"}]},{id:"3",title:"路线管理",icon:"",children:[{title:"校园地图",path:"/routes/map"},{title:"路线列表",path:"/routes/list"}]},{id:"4",title:"任务记录",icon:"",children:[{title:"巡查任务",path:"/routes/record"},{title:"巡查记录",path:"/routes/log"}]},{id:"5",title:"管理员设置",icon:"",children:[{title:"设置",path:"/system/set"}]}]),u=p(null);return E(i,(d,g)=>{u.value=d.path},{immediate:!0,deep:!0}),(d,g)=>{const v=o("router-link"),y=o("el-menu-item-group"),x=o("el-sub-menu"),V=o("el-menu"),H=o("el-scrollbar"),q=o("el-aside"),z=o("el-avatar"),C=o("el-button"),N=o("el-popover"),T=o("el-header"),F=o("router-view"),O=o("el-main"),S=o("el-container");return l(),m("div",G,[t(S,null,{default:e(()=>[t(q,{width:"250px",class:"leftAside"},{default:e(()=>[t(H,null,{default:e(()=>[t(V,{"default-openeds":["1","2","3","4"]},{default:e(()=>[(l(!0),m(B,null,D(f.value,(k,ne)=>(l(),I(x,{index:k.id,class:"menu"},{title:e(()=>[a("div",K,[a("span",Q,h(k.title),1)])]),default:e(()=>[(l(!0),m(B,null,D(k.children,w=>(l(),I(y,{class:"btnlist"},{default:e(()=>[t(v,{to:w.path,class:J(["sub-menu-item",u.value==w.path?"active":""])},{default:e(()=>[b(h(w.title),1)]),_:2},1032,["to","class"])]),_:2},1024))),256))]),_:2},1032,["index"]))),256))]),_:1})]),_:1})]),_:1}),t(S,{class:"right"},{default:e(()=>[t(T,{class:"rightHeader"},{default:e(()=>[W,a("div",X,[t(Y)]),a("div",ee,[a("span",te,"管理员: "+h(n.username),1),t(N,{placement:"top-start",width:200,trigger:"hover"},{reference:e(()=>[t(z,{shape:"square",size:45,src:n.avatar},null,8,["src"])]),default:e(()=>[a("div",oe,[t(C,{size:"small",type:"primary",onClick:_},{default:e(()=>[b("个人信息")]),_:1}),t(C,{size:"small",type:"danger",onClick:s},{default:e(()=>[b("退出登录")]),_:1})])]),_:1})])]),_:1}),t(O,{class:"rightBody"},{default:e(()=>[t(F)]),_:1})]),_:1})]),_:1})])}}},ce=U(se,[["__scopeId","data-v-ed637fc7"]]);export{ce as default};
