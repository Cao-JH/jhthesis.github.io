import{g as H,r as R,a as h,H as K,c as y,d as I,e as N,f as o,h as c,w as u,C as X,k as O,F as Y,s as Z,j as x,v as b,x as U,p as ee,l as te,I as le,t as F}from"./index-e734480e.js";import{e as ae,f as oe,c as ne}from"./equipment-d5176f02.js";import{a as se}from"./route-506fe335.js";import{Q as ie}from"./qrcode.vue.esm-b23db4f0.js";import{_ as re}from"./_plugin-vue_export-helper-c27b6911.js";const J=A=>(ee("data-v-d1e2aba2"),A=A(),te(),A),ue={class:"map"},ce={class:"btns"},de={class:"routes box"},pe={class:"card-header"},me=J(()=>o("span",null,"路线预览",-1)),ge={class:"text item"},fe=J(()=>o("div",{class:"point box"},[o("span",null,"点击地图添加坐标"),o("span",null,"点击坐标查看信息"),o("span",null,"右键坐标删除坐标")],-1)),ve={class:"left"},_e={class:"right"},he={class:"btnBox"},we={__name:"Map",setup(A){const{proxy:i}=H(),f=R({list:[],isRoute:!1}),k=[],n=R([]),Q=async()=>{let t=await oe();t.code==200&&(console.log(t),D(t.list),Object.assign(f.list,t.list),console.log(f.list))},r=h(),d=h(),E=async()=>{d.value=await le.load({key:"7ae93e0dc1ec50c2c1285e8c0c423ea1",version:"2.0",plugins:["AMap.Scale","AMap.Geolocation","AMap.ToolBar"]}),r.value=new d.value.Map("container",{viewMode:"2D",zoom:16,center:[110.932158,35.124512]}),r.value.addControl(new d.value.Scale),r.value.addControl(new d.value.ToolBar);for(let e=0;e<f.list.length;e++)B(r.value,f.list[e]);const t=new d.value.Bounds(new d.value.LngLat(110.922131,35.116344),new d.value.LngLat(110.941396,35.130926));r.value.setLimitBounds(t)},w=R({qrCodeValue:"",showQRCode:!1}),j=()=>{S.value.validate(async t=>{t&&(w.qrCodeValue=JSON.stringify(s.value),w.showQRCode=!0,i.message.success("二维码下载中..."),setTimeout(()=>{let e=document.getElementById("app").getElementsByTagName("canvas"),l=e[1].getContext("2d");const m=l.getImageData(0,0,130,130);e[1].setAttribute("height",150),e[1].style.setProperty("height","150px"),l.fillRect(0,0,130,150),l.putImageData(m,0,0),l.fillStyle="#fff",l.fillRect(0,124,130,130),l.fillStyle="#000",l.textAlign="center";const p=`${s.value.name}`;l.font="bold 14px Arial",l.fillText(p,65,140);let _=document.createElement("a");_.href=e[1].toDataURL("image/png"),_.download=`${s.value.name}`,_.click()},0))})},D=t=>{try{if(Array.isArray(t)&&t.length>0)for(let e of t){const l=JSON.parse(e.lnglat);e.lnglat=l}else{const e=JSON.parse(t.lnglat);t.lnglat=e}}catch(e){console.log(e)}},v=R({show:!1,title:"标题",buttons:[{type:"danger",text:"确定",click:()=>{W()}}]}),L=h({name:{required:!0,message:"请输入坐标名字"},location:{required:!0,message:"请输入坐标地址"},lnglat:{required:!0,message:"请输入坐标"},type:{required:!0,message:"请选择种类"},routeName:{required:!0,message:"请输入路线名称"},discription:{required:!0,message:"请输入描述"}}),s=h({}),S=h(),z=()=>{r.value.on("click",t=>{const e=[t.lnglat.lng,t.lnglat.lat];e.length>0&&(w.qrCodeValue="",w.showQRCode=!1,v.show=!0,X(()=>{S.value.resetFields(),v.title="添加新坐标",s.value.lnglat=JSON.stringify(e)}))})},B=(t,e)=>{let l=new d.value.Marker({position:e.lnglat,map:t});const m=new d.value.InfoWindow({offset:new d.value.Pixel(0,-30),content:e.name});l.on("click",()=>{m.open(t,l.getPosition())}),n.indexOf(e)!=-1&&l.setIcon("http://webapi.amap.com/theme/v1.3/markers/n/mark_r.png");const p=new d.value.ContextMenu,_=(a,C)=>{n.indexOf(e)==-1?i.confirm("确定要删除这个点吗",async()=>{const M=R({});M.lnglat=JSON.stringify(a);const P=await ne(M);P.code==200?(i.message.success(P.msg),l&&(l.setMap(null),l=null),C()):i.message.error(P.msg)}):i.message.error("改点在路线中无法删除!")},V=(a,C)=>{n.indexOf(e)==-1?(l.setIcon("http://webapi.amap.com/theme/v1.3/markers/n/mark_r.png"),n.push(e),C()):i.message.error("改点已添加入路线中!")},q=(a,C)=>{if(n.indexOf(e)!=-1){l.setIcon("https://webapi.amap.com/theme/v1.3/markers/n/mark_bs.png"),n.splice(n.indexOf(e),1),C();for(let M=0;M<n.length;M++);}else i.message.error("路线中不存在该点!")};p.addItem("删除坐标",function(){_(e.lnglat,async()=>{p.close()})},0),p.addItem("加入路线",function(){V(e.lnglat,async()=>{p.close()})},1),p.addItem("移出路线",function(){q(e.lnglat,async()=>{p.close()})},2),l.on("rightclick",()=>{p.open(t,e.lnglat)})},W=async()=>{const t=await ae(s.value);D(s.value),t.code==200?(i.message.success(t.msg),B(r.value,s.value),v.show=!1):i.message.error(t.msg)},$=()=>{if(console.log("points",k),k.length>0){r.value.clearMap(),k.length=0;for(let t=0;t<f.list.length;t++)B(r.value,f.list[t])}if(console.log("routeArr",n),n.length>0){for(let e=0;e<n.length;e++)k.push(n[e].lnglat);new d.value.Polyline({path:k,strokeColor:"#3366FF",strokeWeight:5}).setMap(r.value)}else i.message.error("没有数据!")},g=h({}),T=h(),G=()=>{i.confirm("确定要添加这个这个路线吗",async()=>{if(g.value.name!=null&&g.value.description!=null){const t=[];for(let l=0;l<n.length;l++)t.push(JSON.stringify(n[l].lnglat));g.value.points=t.join(",");const e=await se(g.value);if(e.code==200){i.message.success(e.msg),T.value.resetFields(),r.value.clearMap(),n.length=0;for(let l=0;l<f.list.length;l++)B(r.value,f.list[l])}else i.message.error(e.msg)}else i.message.error("路线名称或路线描述未填")})};return(async()=>{await Q(),E()})(),K(()=>{r.value.destroy(),r.value=null}),(t,e)=>{const l=y("el-button"),m=y("el-form-item"),p=y("el-form"),_=y("el-card"),V=y("el-image"),q=y("Dialog");return I(),N("div",ue,[o("div",{class:"mapContainer"},[o("div",{id:"container",onClick:z})]),o("div",ce,[o("div",de,[c(_,{class:"box-card","body-style":{padding:"0px"}},{header:u(()=>[o("div",pe,[me,c(l,{class:"button",type:"primary",round:"",onClick:$},{default:u(()=>[O("预览")]),_:1})])]),default:u(()=>[(I(!0),N(Y,null,Z(n,a=>(I(),N("div",ge,F(a.name)+" "+F(a.lnglat),1))),256)),c(p,{model:g.value,rules:L.value,ref_key:"newRouteRef",ref:T,"label-width":"10px"},{default:u(()=>[c(m,{prop:"routeName",label:""},{default:u(()=>[x(o("input",{placeholder:"请输入路线名称","onUpdate:modelValue":e[0]||(e[0]=a=>g.value.name=a)},null,512),[[b,g.value.name]])]),_:1}),c(m,{prop:"description",label:""},{default:u(()=>[x(o("input",{placeholder:"请输入路线描述","onUpdate:modelValue":e[1]||(e[1]=a=>g.value.description=a)},null,512),[[b,g.value.description]])]),_:1}),c(l,{plain:"",class:"addButton",onClick:G},{default:u(()=>[O("添加路线")]),_:1})]),_:1},8,["model","rules"])]),_:1})]),fe]),c(q,{title:v.title,show:v.show,buttons:v.buttons,onClose:e[6]||(e[6]=a=>v.show=!1),width:"600px"},{default:u(()=>[c(p,{model:s.value,rules:L.value,ref_key:"newPointRef",ref:S,"label-width":"80px",class:"content"},{default:u(()=>[o("div",ve,[c(m,{prop:"name",label:"设备名称"},{default:u(()=>[x(o("input",{placeholder:"请输入设备名称","onUpdate:modelValue":e[2]||(e[2]=a=>s.value.name=a)},null,512),[[b,s.value.name]])]),_:1}),c(m,{prop:"location",label:"设备地址"},{default:u(()=>[x(o("input",{placeholder:"请输入设备地址","onUpdate:modelValue":e[3]||(e[3]=a=>s.value.location=a)},null,512),[[b,s.value.location]])]),_:1}),c(m,{prop:"lnglat",label:"设备坐标"},{default:u(()=>[x(o("input",{placeholder:"","onUpdate:modelValue":e[4]||(e[4]=a=>s.value.lnglat=a),disabled:""},null,512),[[b,s.value.lnglat]])]),_:1}),c(m,{prop:"type",label:"设备类型"},{default:u(()=>[x(o("input",{placeholder:"请输入设备类型","onUpdate:modelValue":e[5]||(e[5]=a=>s.value.type=a)},null,512),[[b,s.value.type]])]),_:1})]),o("div",_e,[w.showQRCode?(I(),U(ie,{key:0,value:w.qrCodeValue,style:{width:"130px",height:"130px"}},null,8,["value"])):(I(),U(V,{key:1,style:{width:"130px",height:"150px"},"zoom-rate":1.2,"initial-index":4,fit:"cover"},null,8,["zoom-rate"])),o("div",he,[c(l,{type:"primary",class:"creatBtn",onClick:j},{default:u(()=>[O("生成二维码")]),_:1})])])]),_:1},8,["model","rules"])]),_:1},8,["title","show","buttons"])])}}},Re=re(we,[["__scopeId","data-v-d1e2aba2"]]);export{Re as default};
