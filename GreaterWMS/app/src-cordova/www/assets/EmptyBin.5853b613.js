import{Q as h}from"./QItemLabel.9fc1e402.js";import{Q as Z,b as S,a as x}from"./QList.51918774.js";import{_ as z,aD as G,L as H,aS as J,r as K,c as t,w as A,o as O,R as C,S as W,U as o,f as n,Y as v,Z as r,a1 as U,$ as k,a0 as X,F as q,V as ee,a3 as ae}from"./index.f89e22ff.js";import{u as te}from"./use-quasar.9196b276.js";import{a as ne}from"./index.e56f7e34.js";import{u as se}from"./vue-i18n.runtime.esm-bundler.386ff9c8.js";import"./axios.e6fce94e.js";const oe=G({name:"EmptyBin",data(){return{}},setup(){const e=H();J();const u=te(),i=K(0),{t:l}=se(),D=t({get:()=>e.state.fabchange.fab1}),$=t({get:()=>e.state.fabchange.fab2}),d=t({get:()=>e.state.fabchange.fab3}),g=t({get:()=>e.state.fabchange.fab4}),B=t({get:()=>e.state.screenchange.screenscroll}),Q=t({get:()=>e.state.loginauth.authin}),F=t({get:()=>e.state.loginauth.login_name}),E=t({get:()=>e.state.loginauth.operator}),N=t({get:()=>e.state.settings.openid}),I=t({get:()=>e.state.langchange.lang}),b=t({get:()=>e.state.settings.server}),M=t({get:()=>e.state.scanchanged.scandata,set:a=>{e.commit("scanchanged/ScanChanged",a)}}),R=t({get:()=>e.state.scanchanged.datadetail,set:a=>{e.commit("scanchanged/ScanDataChanged",a)}}),j=t({get:()=>e.state.scanchanged.asndata,set:a=>{e.commit("scanchanged/ASNDataChanged",a)}}),P=t({get:()=>e.state.scanchanged.dndata,set:a=>{e.commit("scanchanged/DNDataChanged",a)}}),T=t({get:()=>e.state.scanchanged.bindata,set:a=>{e.commit("scanchanged/BinDataChanged",a)}}),m=t({get:()=>e.state.scanchanged.tablelist,set:a=>{e.commit("scanchanged/TableDataChanged",a)}}),_=t({get:()=>e.state.scanchanged.scanmode,set:a=>{e.commit("scanchanged/ScanModeChanged",a)}}),p=t({get:()=>e.state.scanchanged.apiurl,set:a=>{e.commit("scanchanged/ApiUrlChanged",a)}}),f=t({get:()=>e.state.scanchanged.apiurlnext,set:a=>{e.commit("scanchanged/ApiUrlNextChanged",a)}}),w=t({get:()=>e.state.scanchanged.apiurlprevious,set:a=>{e.commit("scanchanged/ApiUrlPreviousChanged",a)}});function L(a){if(a!==null){var s=b.value.split(":"),c=a.split(":");return s[0]!==c[0]?s[0]+":"+c[1]:c}else return null}function Y(a){T.value=a,_.value="BINSET"}function V(a){ne.get(p.value+a,{headers:{"Content-Type":"application/json",token:N.value,language:I.value,operator:E.value}}).then(s=>{if(s.data.detail)u.notify({type:"negative",message:l("notice.mobile_scan.notice1")});else{var c=[];m.value.forEach(y=>{c.push(y)}),s.data.results.forEach(y=>{c.push(y)}),m.value=c,w.value=L(s.data.previous),f.value=L(s.data.next)}}).catch(s=>{u.notify({type:"negative",message:l("notice.mobile_scan.notice3")})})}return A(B,(a,s)=>{a>=.95?f.value!==null&&(p.value=f.value,i.value=1):i.value=0}),A(i,(a,s)=>{a===1&&V("")}),O(()=>{Q.value==="0"?u.notify({type:"negative",message:l("notice.mobile_userlogin.notice9")}):(_.value="BINSET",p.value=b.value+"binset/?empty_label=true",m.value=[],V(""))}),{t:l,fab1:D,fab2:$,fab3:d,fab4:g,screenscroll:B,authin:Q,login_name:F,openid:N,operator:E,lang:I,requestauth:i,baseurl:b,apiurl:p,apiurlnext:f,apiurlprevious:w,scandata:M,datadetail:R,tablelist:m,asndata:j,dndata:P,bindata:T,scanmode:_,DetailLine:Y}}});function ce(e,u,i,l,D,$){return C(),W(Z,{bordered:"",padding:""},{default:o(()=>[n(x,null,{default:o(()=>[n(S,null,{default:o(()=>[n(h,{overline:""},{default:o(()=>[v(r(e.$t("notice.mobile_emptybin.notice1")),1)]),_:1}),n(h,{caption:""},{default:o(()=>[v(r(e.$t("notice.mobile_emptybin.notice2")),1)]),_:1})]),_:1})]),_:1}),n(U,{spaced:""}),(C(!0),k(q,null,X(e.tablelist,(d,g)=>(C(),k(q,{key:g},[n(x,null,{default:o(()=>[n(S,null,{default:o(()=>[n(h,null,{default:o(()=>[v(r(d.bin_name),1)]),_:2},1024)]),_:2},1024),n(S,{side:""},{default:o(()=>[n(h,{caption:""},{default:o(()=>[v(r(e.$t("notice.mobile_emptybin.notice3"))+r(d.bin_property),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),ee(n(U,{spaced:"",inset:"item"},null,512),[[ae,g+1!==e.tablelist.length]])],64))),128))]),_:1})}var pe=z(oe,[["render",ce]]);export{pe as default};
