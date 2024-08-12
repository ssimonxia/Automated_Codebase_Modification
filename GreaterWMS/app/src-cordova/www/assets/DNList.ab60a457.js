import{Q as d}from"./QItemLabel.8b351527.js";import{Q as Z,b as N,a as O}from"./QList.5473fc14.js";import{_ as z,aC as G,J as H,aR as K,r as ee,c as t,w as C,o as ae,M as S,O as te,R as o,f as s,W as g,X as i,$ as j,Y as x,Z as ne,F as J,S as se,a1 as oe}from"./index.1785b037.js";import{u as ce}from"./use-quasar.8d75fc37.js";import{a as ie}from"./index.2885cb15.js";import{u as le}from"./vue-i18n.runtime.esm-bundler.ec1d6f08.js";const de=G({name:"DNList",data(){return{}},setup(){const e=H(),k=K(),m=ce(),u=ee(0),{t:r}=le(),w=t({get:()=>e.state.fabchange.fab1}),l=t({get:()=>e.state.fabchange.fab2}),f=t({get:()=>e.state.fabchange.fab3}),y=t({get:()=>e.state.fabchange.fab4}),L=t({get:()=>e.state.screenchange.screenscroll}),Q=t({get:()=>e.state.linkchange.oldlink,set:a=>{e.commit("linkchange/OldLinkChanged",a)}}),V=t({get:()=>e.state.linkchange.newlink,set:a=>{e.commit("linkchange/NewLinkChanged",a)}}),A=t({get:()=>e.state.loginauth.authin}),P=t({get:()=>e.state.loginauth.login_name}),B=t({get:()=>e.state.loginauth.operator}),I=t({get:()=>e.state.settings.openid}),T=t({get:()=>e.state.langchange.lang}),_=t({get:()=>e.state.settings.server}),E=t({get:()=>e.state.scanchanged.scandata,set:a=>{e.commit("scanchanged/ScanChanged",a)}}),W=t({get:()=>e.state.scanchanged.datadetail,set:a=>{e.commit("scanchanged/ScanDataChanged",a)}}),X=t({get:()=>e.state.scanchanged.asndata,set:a=>{e.commit("scanchanged/ASNDataChanged",a)}}),D=t({get:()=>e.state.scanchanged.dndata,set:a=>{e.commit("scanchanged/DNDataChanged",a)}}),Y=t({get:()=>e.state.scanchanged.bindata,set:a=>{e.commit("scanchanged/BinDataChanged",a)}}),h=t({get:()=>e.state.scanchanged.tablelist,set:a=>{e.commit("scanchanged/TableDataChanged",a)}}),p=t({get:()=>e.state.scanchanged.scanmode,set:a=>{e.commit("scanchanged/ScanModeChanged",a)}}),M=t({get:()=>e.state.scanchanged.bar_scanned}),v=t({get:()=>e.state.scanchanged.apiurl,set:a=>{e.commit("scanchanged/ApiUrlChanged",a)}}),b=t({get:()=>e.state.scanchanged.apiurlnext,set:a=>{e.commit("scanchanged/ApiUrlNextChanged",a)}}),R=t({get:()=>e.state.scanchanged.apiurlprevious,set:a=>{e.commit("scanchanged/ApiUrlPreviousChanged",a)}});function U(a){if(a!==null){var n=_.value.split(":"),c=a.split(":");if(c.length===2)return n[0]!==c[0]?n[0]+":"+c[1]:a;if(c.length===3)return n[0]!==c[0]?n[0]+":"+c[1]+":"+c[2]:a}else return null}function q(a){D.value=a,p.value="DN",Q.value="dnlist",V.value="dndetail",k.push({name:"dndetail"})}function F(a){ie.get(v.value+a,{headers:{"Content-Type":"application/json",token:I.value,language:T.value,operator:B.value}}).then(n=>{if(n.data.detail)m.notify({type:"negative",message:r("notice.mobile_scan.notice1")});else{var c=[];h.value.forEach($=>{c.push($)}),n.data.results.forEach($=>{c.push($)}),h.value=c,R.value=U(n.data.previous),b.value=U(n.data.next)}}).catch(n=>{m.notify({type:"negative",message:r("notice.mobile_scan.notice3")})})}return C(L,(a,n)=>{a>=.95?b.value!==null&&(v.value=b.value,u.value=1):u.value=0}),C(u,(a,n)=>{a===1&&F("")}),C(M,(a,n)=>{p.value==="DN"&&q(E.value)}),ae(()=>{A.value==="0"?m.notify({type:"negative",message:r("notice.mobile_userlogin.notice9")}):(p.value="DN",v.value=_.value+"/dn/list/",D.value="",h.value=[],F(""))}),{t:r,fab1:w,fab2:l,fab3:f,fab4:y,screenscroll:L,oldlink:Q,newlink:V,authin:A,login_name:P,openid:I,operator:B,lang:T,requestauth:u,baseurl:_,apiurl:v,apiurlnext:b,apiurlprevious:R,scandata:E,datadetail:W,tablelist:h,asndata:X,dndata:D,bindata:Y,scanmode:p,bar_scanned:M,DetailLine:q}}});function ge(e,k,m,u,r,w){return S(),te(Z,{bordered:"",padding:""},{default:o(()=>[s(O,null,{default:o(()=>[s(N,null,{default:o(()=>[s(d,{overline:""},{default:o(()=>[g(i(e.$t("notice.mobile_dn.notice1")),1)]),_:1}),s(d,{caption:""},{default:o(()=>[g(i(e.$t("notice.mobile_dn.notice2")),1)]),_:1})]),_:1})]),_:1}),s(j,{spaced:""}),(S(!0),x(J,null,ne(e.tablelist,(l,f)=>(S(),x(J,{key:f},[s(O,null,{default:o(()=>[s(N,{onClick:y=>e.DetailLine(l.dn_code)},{default:o(()=>[s(d,null,{default:o(()=>[g(i(l.dn_code),1)]),_:2},1024),s(d,{caption:"",lines:"2"},{default:o(()=>[g(i(e.$t("notice.mobile_dn.notice3"))+i(l.customer),1)]),_:2},1024)]),_:2},1032,["onClick"]),s(N,{side:"",top:""},{default:o(()=>[s(d,{caption:""},{default:o(()=>[g(i(e.$t("notice.mobile_dn.notice4"))+i(l.total_cost),1)]),_:2},1024),s(d,{caption:""},{default:o(()=>[g(i(e.$t("notice.mobile_dn.notice5"))+i(l.dn_status),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),se(s(j,{spaced:"",inset:"item"},null,512),[[oe,f+1!==e.tablelist.length]])],64))),128))]),_:1})}var ve=z(de,[["render",ge]]);export{ve as default};
