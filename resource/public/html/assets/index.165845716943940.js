var v=Object.defineProperty;var i=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var l=(e,s,t)=>s in e?v(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,_=(e,s)=>{for(var t in s||(s={}))w.call(s,t)&&l(e,t,s[t]);if(i)for(var t of i(s))x.call(s,t)&&l(e,t,s[t]);return e};import{i as g}from"./getStyleSheets.1658457169439.js";import{_ as F}from"./index.1658457169439.js";import{j as I,$,d as k,ac as y,l as d,V as u,O as a,_ as n,k as c,F as A,a3 as B,M as L,m as o,I as C,U as E}from"./vue.1658457169439.js";const S=I({name:"pagesAwesome",setup(){const e=$({sheetsIconList:[]}),s=()=>{g.awe().then(t=>e.sheetsIconList=t)};return k(()=>{s()}),_({},y(e))}}),V={class:"awesome-container"},D={class:"iconfont-warp"},M={class:"flex-margin"},N={class:"iconfont-warp-value"},b={class:"iconfont-warp-label mt10"};function j(e,s,t,z,G,O){const m=n("el-col"),p=n("el-row"),f=n("el-card");return c(),d("div",V,[u(f,{shadow:"hover",header:`fontawesome \u5B57\u4F53\u56FE\u6807(\u81EA\u52A8\u8F7D\u5165)\uFF1A${e.sheetsIconList.length-24}\u4E2A`},{default:a(()=>[u(p,{class:"iconfont-row"},{default:a(()=>[(c(!0),d(A,null,B(e.sheetsIconList,(r,h)=>(c(),L(m,{xs:12,sm:8,md:6,lg:4,xl:2,key:h},{default:a(()=>[o("div",D,[o("div",M,[o("div",N,[o("i",{class:C([r,"fa"])},null,2)]),o("div",b,E(r),1)])])]),_:2},1024))),128))]),_:1})]),_:1},8,["header"])])}var J=F(S,[["render",j],["__scopeId","data-v-6a551862"]]);export{J as default};