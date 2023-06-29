import{g as Y,a as f,r as S,c as u,d as c,e as p,f as d,h as l,w as o,A as Z,F as q,B as ee,k as I,s as B,j as te,v as le,x as oe,D as A,t as ae,C as se,p as ne,l as ie}from"./index-e734480e.js";import{e as de,a as ue,b as re,c as ce}from"./equipment-d5176f02.js";import{Q as pe}from"./qrcode.vue.esm-b23db4f0.js";import{_ as me}from"./_plugin-vue_export-helper-c27b6911.js";const ve=w=>(ne("data-v-e3e264a0"),w=w(),ie(),w),_e={class:"top-panel"},fe={key:0},ge={key:1},he={key:0,style:{color:"#aaa"}},be=["onClick"],ye=["onClick"],ke={class:"op"},we=["onClick"],Ce=["onClick"],Ve=["onClick"],xe={class:"code"},De={class:"dialog-footer"},Se={class:"img"},qe=["src"],Ie={key:0,class:"msg"},$e=ve(()=>d("span",{class:"title"},"问题描述: ",-1)),je={class:"body"},Be={class:"dialog-footer"},Ue={__name:"List",setup(w){const{proxy:$}=Y(),C=f(!1);f("C:/Users/25008/Downloads");const Q=[{label:"ID",prop:"id",width:50},{label:"设备名称",prop:"name",width:150},{label:"设备位置",prop:"location",width:250},{label:"设备类型",prop:"type",width:100,scopedSlots:"type"},{label:"设备状态",prop:"status",width:100,scopedSlots:"status"},{label:"最后检查时间",prop:"update_at",width:200},{label:"安装时间",prop:"created_at",width:200},{label:"操作",prop:"op",scopedSlots:"op"}],g=f({}),U=[{value:"",label:"全部"},{value:"1",label:"未查验"},{value:"2",label:"正常"},{value:"3",label:"存在问题"}],F=[{value:"1",label:"消防设备"},{value:"2",label:"电子设备"}],m=S({show:!1,title:"标题",buttons:[{type:"danger",text:"确定",click:a=>{K()}}]}),M=f({name:{required:!0,message:"请输入巡查人员姓名"},location:{required:!0,message:"请输入地址"},type:{required:!0,message:"请输入类型"},status:{required:!0,message:"请选择状态",trigger:"blur"}}),i=f({}),j=f(),J=(a,e)=>{m.show=!0,se(()=>{j.value.resetFields(),a=="add"?(m.title="新增设备",i.value={choose:"add"}):a=="update"&&(m.title="编辑设备信息",console.log(e),i.value=JSON.parse(JSON.stringify(e)),Object.assign(i.value,{choose:"update"}))})},K=()=>{j.value.validate(async a=>{if(!a)return;let{choose:e}=i.value,s={};Object.assign(s,i.value);let n="";e=="add"?n=await de(s):n=await ue(s),console.log(n),n.code==200&&(m.show=!1,$.message.success("保存成功!"),h())})},N=S({list:[]}),P={extHeight:50},O=S({page:1,pageSize:10,pageCount:0,count:0,keyword:"",gender:""}),h=async()=>{Object.assign(O,g.value);let a=await re(O);a.code==200&&(Object.assign(N,a.data),console.log(a.data))},z=a=>{$.confirm(`你确定要删除${a.name}吗?`,async()=>{let e=await ce({id:a.id});if(console.log(e),e.code==200)$.message.success(e.msg),h();else return})},V=S({qrCodeValue:"",showQRCode:!1}),H=a=>{console.log(a),C.value=!0,V.qrCodeValue=JSON.stringify({id:a.id}),V.showQRCode=!0,setTimeout(()=>{let e=document.getElementById("app").getElementsByTagName("canvas"),s=e[0].getContext("2d");const n=s.getImageData(0,0,130,130);e[0].setAttribute("height",160),e[0].style.setProperty("height","160px"),e[0].style.setProperty("width","130px"),s.fillRect(0,0,130,160),s.putImageData(n,0,0),s.fillStyle="#fff",s.fillRect(0,124,130,130),s.fillStyle="#000",s.textAlign="center";const b=`${a.name}`;s.font="bold 14px Arial",s.fillText(b,65,140)},0)},G=()=>{function a(b){let _="";const y="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",k=y.length;for(let x=0;x<b;x++)_+=y.charAt(Math.floor(Math.random()*k));return _}const e=a(10);let s=document.getElementById("app").getElementsByTagName("canvas"),n=document.createElement("a");n.href=s[0].toDataURL("image/png"),n.download=`${e}`,n.click()},v=f({}),R=a=>{console.log(a),v.value.open=!0,Object.assign(v.value,a)};return(a,e)=>{const s=u("el-input"),n=u("el-form-item"),b=u("el-col"),_=u("el-button"),y=u("el-option"),k=u("el-select"),x=u("el-row"),T=u("el-form"),E=u("el-divider"),W=u("Table"),X=u("Dialog"),L=u("el-dialog");return c(),p(q,null,[d("div",_e,[l(T,{onSubmit:e[4]||(e[4]=Z(()=>{},["prevent"])),model:g.value,class:"search-form",labelAlign:"left"},{default:o(()=>[l(x,{gutter:5},{default:o(()=>[l(b,{span:5},{default:o(()=>[l(n,{label:""},{default:o(()=>[l(s,{modelValue:g.value.keyword,"onUpdate:modelValue":e[0]||(e[0]=t=>g.value.keyword=t),placeholder:"支持模糊搜索",onKeyup:ee(h,["enter","native"]),allowClear:""},null,8,["modelValue","onKeyup"])]),_:1})]),_:1}),l(b,{span:2},{default:o(()=>[l(n,null,{default:o(()=>[l(_,{type:"danger",onClick:e[1]||(e[1]=t=>h())},{default:o(()=>[I("搜索")]),_:1})]),_:1})]),_:1}),l(k,{span:2,modelValue:g.value.status,"onUpdate:modelValue":e[3]||(e[3]=t=>g.value.status=t),class:"m-2",placeholder:"状态"},{default:o(()=>[(c(),p(q,null,B(U,t=>l(y,{key:t.value,label:t.label,onClick:e[2]||(e[2]=r=>h()),value:t.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])]),l(W,{columns:Q,showPagination:!0,dataSource:N,fetch:h,options:P},{type:o(({index:t,row:r})=>[r.type==1?(c(),p("div",fe,"消防设备")):(c(),p("div",ge,"电子设备"))]),status:o(({index:t,row:r})=>[r.status==1?(c(),p("div",he,"未查验")):r.status==2?(c(),p("a",{key:1,href:"javascript:void(0)",class:"a-link",style:{color:"#73a942"},onClick:D=>R(r)},"正常",8,be)):(c(),p("a",{key:2,href:"javascript:void(0)",class:"a-link",style:{color:"#b80202"},onClick:D=>R(r)},"存在问题",8,ye))]),op:o(({index:t,row:r})=>[d("div",ke,[d("a",{href:"javascript:void(0)",class:"a-link",onClick:D=>J("update",r)},"修改",8,we),l(E,{direction:"vertical"}),d("a",{href:"javascript:void(0)",class:"a-link",onClick:D=>z(r)},"删除",8,Ce),l(E,{direction:"vertical"}),d("a",{href:"javascript:void(0)",class:"a-link",onClick:D=>H(r)},"查看二维码",8,Ve)])]),_:1},8,["dataSource"]),l(X,{title:m.title,show:m.show,buttons:m.buttons,onClose:e[9]||(e[9]=t=>m.show=!1),width:"300px"},{default:o(()=>[l(T,{model:i.value,rules:M.value,ref_key:"formDataRef",ref:j,"label-width":"80px"},{default:o(()=>[l(n,{prop:"name",label:"设备名称"},{default:o(()=>[te(d("input",{placeholder:"请输入设备名称","onUpdate:modelValue":e[5]||(e[5]=t=>i.value.name=t),disabled:""},null,512),[[le,i.value.name]])]),_:1}),l(n,{prop:"location",label:"详细地址"},{default:o(()=>[l(s,{modelValue:i.value.location,"onUpdate:modelValue":e[6]||(e[6]=t=>i.value.location=t),rows:2,type:"textarea",placeholder:"请输入设备地址"},null,8,["modelValue"])]),_:1}),l(n,{prop:"type",label:"设备类型"},{default:o(()=>[l(k,{modelValue:i.value.type,"onUpdate:modelValue":e[7]||(e[7]=t=>i.value.type=t),class:"m-2",placeholder:"设备种类"},{default:o(()=>[(c(),p(q,null,B(F,t=>l(y,{key:t.value,label:t.label,value:t.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),l(n,{prop:"status",label:"设备状态"},{default:o(()=>[l(k,{modelValue:i.value.status,"onUpdate:modelValue":e[8]||(e[8]=t=>i.value.status=t),class:"m-2",placeholder:"设备状态"},{default:o(()=>[(c(),p(q,null,B(U,t=>l(y,{key:t.value,label:t.label,value:t.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["title","show","buttons"]),l(L,{modelValue:C.value,"onUpdate:modelValue":e[11]||(e[11]=t=>C.value=t),title:"二维码",width:"30%",center:""},{footer:o(()=>[d("span",De,[l(_,{onClick:e[10]||(e[10]=t=>C.value=!1)},{default:o(()=>[I("取消")]),_:1}),l(_,{type:"primary",onClick:G},{default:o(()=>[I(" 下载 ")]),_:1})])]),default:o(()=>[d("div",xe,[V.showQRCode?(c(),oe(pe,{key:0,value:V.qrCodeValue,style:{width:"130px",height:"130px"}},null,8,["value"])):A("",!0)])]),_:1},8,["modelValue"]),l(L,{modelValue:v.value.open,"onUpdate:modelValue":e[13]||(e[13]=t=>v.value.open=t),title:"打卡照片",class:"photoBox",width:"30%",center:""},{footer:o(()=>[d("span",Be,[l(_,{onClick:e[12]||(e[12]=t=>v.value.open=!1)},{default:o(()=>[I("关闭")]),_:1})])]),default:o(()=>[d("div",Se,[d("img",{src:v.value.img,alt:""},null,8,qe)]),v.value.status==3?(c(),p("div",Ie,[$e,d("span",je,ae(v.value.msg),1)])):A("",!0)]),_:1},8,["modelValue"])],64)}}},Ee=me(Ue,[["__scopeId","data-v-e3e264a0"]]);export{Ee as default};
