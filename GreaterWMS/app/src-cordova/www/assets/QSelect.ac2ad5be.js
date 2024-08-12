import{j as Ne,aX as Ke,aY as st,aZ as dt,a_ as ft,a2 as Mt,a$ as Ot,a4 as Ft,b0 as Bt,c as S,aN as Et,g as je,h as y,Q as Be,b1 as Rt,aG as Ht,a7 as ue,t as Lt,r as B,w as ge,ao as G,aO as Tt,b2 as Pt,I as Dt,H as $t,n as vt,b3 as Nt,b4 as Kt,b5 as ot,aI as ze,b6 as jt,b7 as Qt,an as Pe,b8 as Ut,s as Se,a6 as Wt,aH as Xt,aS as Yt,x as Gt}from"./index.0a98aec3.js";import{b as Zt,a as Jt}from"./QList.88c3db1c.js";import{Q as el}from"./QItemLabel.6b69de3f.js";import{Q as tl}from"./QMenu.f282bd8a.js";import{r as $e}from"./rtl.b51694b1.js";import{n as it}from"./format.a33550d6.js";var ll=Ne({name:"QField",inheritAttrs:!1,props:Ke,emits:st,setup(){return dt(ft())}});const ul={xs:8,sm:10,md:14,lg:20,xl:24};var nl=Ne({name:"QChip",props:{...Mt,...Ot,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:s,emit:i}){const{proxy:{$q:V}}=je(),_=Ft(e,V),o=Bt(e,ul),O=S(()=>e.selected===!0||e.icon!==void 0),b=S(()=>e.selected===!0?e.iconSelected||V.iconSet.chip.selected:e.icon),h=S(()=>e.iconRemove||V.iconSet.chip.remove),I=S(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),c=S(()=>{const C=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(C?` text-${C} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(I.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(_.value===!0?" q-chip--dark q-dark":"")}),x=S(()=>e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||V.lang.label.remove});function A(C){C.keyCode===13&&g(C)}function g(C){e.disable||(i("update:selected",!e.selected),i("click",C))}function T(C){(C.keyCode===void 0||C.keyCode===13)&&(ue(C),e.disable===!1&&(i("update:modelValue",!1),i("remove")))}function E(){const C=[];I.value===!0&&C.push(y("div",{class:"q-focus-helper"})),O.value===!0&&C.push(y(Be,{class:"q-chip__icon q-chip__icon--left",name:b.value}));const j=e.label!==void 0?[y("div",{class:"ellipsis"},[e.label])]:void 0;return C.push(y("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},Rt(s.default,j))),e.iconRight&&C.push(y(Be,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&C.push(y(Be,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:h.value,...x.value,onClick:T,onKeyup:T})),C}return()=>{if(e.modelValue===!1)return;const C={class:c.value,style:o.value};return I.value===!0&&Object.assign(C,x.value,{onClick:g,onKeyup:A}),Et("div",C,E(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[Ht,e.ripple]])}}});const K=1e3,al=["start","center","end","start-force","center-force","end-force"],mt=Array.prototype.filter,ol=window.getComputedStyle(document.body).overflowAnchor===void 0?Lt:function(e,s){e!==null&&(cancelAnimationFrame(e._qOverflowAnimationFrame),e._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(e===null)return;const i=e.children||[];mt.call(i,_=>_.dataset&&_.dataset.qVsAnchor!==void 0).forEach(_=>{delete _.dataset.qVsAnchor});const V=i[s];V&&V.dataset&&(V.dataset.qVsAnchor="")}))};function he(e,s){return e+s}function De(e,s,i,V,_,o,O,b){const h=e===window?document.scrollingElement||document.documentElement:e,I=_===!0?"offsetWidth":"offsetHeight",c={scrollStart:0,scrollViewSize:-O-b,scrollMaxSize:0,offsetStart:-O,offsetEnd:-b};if(_===!0?(e===window?(c.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,c.scrollViewSize+=document.documentElement.clientWidth):(c.scrollStart=h.scrollLeft,c.scrollViewSize+=h.clientWidth),c.scrollMaxSize=h.scrollWidth,o===!0&&(c.scrollStart=($e===!0?c.scrollMaxSize-c.scrollViewSize:0)-c.scrollStart)):(e===window?(c.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,c.scrollViewSize+=document.documentElement.clientHeight):(c.scrollStart=h.scrollTop,c.scrollViewSize+=h.clientHeight),c.scrollMaxSize=h.scrollHeight),i!==null)for(let x=i.previousElementSibling;x!==null;x=x.previousElementSibling)x.classList.contains("q-virtual-scroll--skip")===!1&&(c.offsetStart+=x[I]);if(V!==null)for(let x=V.nextElementSibling;x!==null;x=x.nextElementSibling)x.classList.contains("q-virtual-scroll--skip")===!1&&(c.offsetEnd+=x[I]);if(s!==e){const x=h.getBoundingClientRect(),A=s.getBoundingClientRect();_===!0?(c.offsetStart+=A.left-x.left,c.offsetEnd-=A.width):(c.offsetStart+=A.top-x.top,c.offsetEnd-=A.height),e!==window&&(c.offsetStart+=c.scrollStart),c.offsetEnd+=c.scrollMaxSize-c.offsetStart}return c}function rt(e,s,i,V){s==="end"&&(s=(e===window?document.body:e)[i===!0?"scrollWidth":"scrollHeight"]),e===window?i===!0?(V===!0&&(s=($e===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-s),window.scrollTo(s,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,s):i===!0?(V===!0&&(s=($e===!0?e.scrollWidth-e.offsetWidth:0)-s),e.scrollLeft=s):e.scrollTop=s}function Ae(e,s,i,V){if(i>=V)return 0;const _=s.length,o=Math.floor(i/K),O=Math.floor((V-1)/K)+1;let b=e.slice(o,O).reduce(he,0);return i%K!==0&&(b-=s.slice(o*K,i).reduce(he,0)),V%K!==0&&V!==_&&(b-=s.slice(V,O*K).reduce(he,0)),b}const il={virtualScrollSliceSize:{type:[Number,String],default:null},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},rl={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...il};function cl({virtualScrollLength:e,getVirtualScrollTarget:s,getVirtualScrollEl:i,virtualScrollItemSizeComputed:V}){const _=je(),{props:o,emit:O,proxy:b}=_,{$q:h}=b;let I,c,x,A=[],g;const T=B(0),E=B(0),C=B({}),j=B(null),D=B(null),W=B(null),F=B({from:0,to:0}),M=S(()=>o.tableColspan!==void 0?o.tableColspan:100);V===void 0&&(V=S(()=>o.virtualScrollItemSize));const X=S(()=>V.value+";"+o.virtualScrollHorizontal),ye=S(()=>X.value+";"+o.virtualScrollSliceRatioBefore+";"+o.virtualScrollSliceRatioAfter);ge(ye,()=>{Y()}),ge(X,ne);function ne(){J(c,!0)}function be(n){J(n===void 0?c:n)}function Z(n,r){const f=s();if(f==null||f.nodeType===8)return;const z=De(f,i(),j.value,D.value,o.virtualScrollHorizontal,h.lang.rtl,o.virtualScrollStickySizeStart,o.virtualScrollStickySizeEnd);x!==z.scrollViewSize&&Y(z.scrollViewSize),ae(f,z,Math.min(e.value-1,Math.max(0,parseInt(n,10)||0)),0,al.indexOf(r)>-1?r:c>-1&&n>c?"end":"start")}function Q(){const n=s();if(n==null||n.nodeType===8)return;const r=De(n,i(),j.value,D.value,o.virtualScrollHorizontal,h.lang.rtl,o.virtualScrollStickySizeStart,o.virtualScrollStickySizeEnd),f=e.value-1,z=r.scrollMaxSize-r.offsetStart-r.offsetEnd-E.value;if(I===r.scrollStart)return;if(r.scrollMaxSize<=0){ae(n,r,0,0);return}x!==r.scrollViewSize&&Y(r.scrollViewSize),we(F.value.from);const R=Math.floor(r.scrollMaxSize-Math.max(r.scrollViewSize,r.offsetEnd)-Math.min(g[f],r.scrollViewSize/2));if(R>0&&Math.ceil(r.scrollStart)>=R){ae(n,r,f,r.scrollMaxSize-r.offsetEnd-A.reduce(he,0));return}let w=0,v=r.scrollStart-r.offsetStart,L=v;if(v<=z&&v+r.scrollViewSize>=T.value)v-=T.value,w=F.value.from,L=v;else for(let m=0;v>=A[m]&&w<f;m++)v-=A[m],w+=K;for(;v>0&&w<f;)v-=g[w],v>-r.scrollViewSize?(w++,L=v):L=g[w]+v;ae(n,r,w,L)}function ae(n,r,f,z,R){const w=typeof R=="string"&&R.indexOf("-force")>-1,v=w===!0?R.replace("-force",""):R,L=v!==void 0?v:"start";let m=Math.max(0,f-C.value[L]),$=m+C.value.total;$>e.value&&($=e.value,m=Math.max(0,$-C.value.total)),I=r.scrollStart;const ee=m!==F.value.from||$!==F.value.to;if(ee===!1&&v===void 0){Ce(f);return}const{activeElement:ke}=document,U=W.value;ee===!0&&U!==null&&U!==ke&&U.contains(ke)===!0&&(U.addEventListener("focusout",Ve),setTimeout(()=>{U!==null&&U.removeEventListener("focusout",Ve)})),ol(U,f-m);const pe=v!==void 0?g.slice(m,f).reduce(he,0):0;if(ee===!0){const ie=$>=F.value.from&&m<=F.value.to?F.value.to:$;F.value={from:m,to:ie},T.value=Ae(A,g,0,m),E.value=Ae(A,g,$,e.value),requestAnimationFrame(()=>{F.value.to!==$&&I===r.scrollStart&&(F.value={from:F.value.from,to:$},E.value=Ae(A,g,$,e.value))})}requestAnimationFrame(()=>{if(I!==r.scrollStart)return;ee===!0&&we(m);const ie=g.slice(m,f).reduce(he,0),re=ie+r.offsetStart+T.value,_e=re+g[f];let xe=re+z;if(v!==void 0){const N=ie-pe,H=r.scrollStart+N;xe=w!==!0&&H<re&&_e<H+r.scrollViewSize?H:v==="end"?_e-r.scrollViewSize:re-(v==="start"?0:Math.round((r.scrollViewSize-g[f])/2))}I=xe,rt(n,xe,o.virtualScrollHorizontal,h.lang.rtl),Ce(f)})}function we(n){const r=W.value;if(r){const f=mt.call(r.children,m=>m.classList&&m.classList.contains("q-virtual-scroll--skip")===!1),z=f.length,R=o.virtualScrollHorizontal===!0?m=>m.getBoundingClientRect().width:m=>m.offsetHeight;let w=n,v,L;for(let m=0;m<z;){for(v=R(f[m]),m++;m<z&&f[m].classList.contains("q-virtual-scroll--with-prev")===!0;)v+=R(f[m]),m++;L=v-g[w],L!==0&&(g[w]+=L,A[Math.floor(w/K)]+=L),w++}}}function Ve(){W.value!==null&&W.value!==void 0&&W.value.focus()}function J(n,r){const f=1*V.value;(r===!0||Array.isArray(g)===!1)&&(g=[]);const z=g.length;g.length=e.value;for(let w=e.value-1;w>=z;w--)g[w]=f;const R=Math.floor((e.value-1)/K);A=[];for(let w=0;w<=R;w++){let v=0;const L=Math.min((w+1)*K,e.value);for(let m=w*K;m<L;m++)v+=g[m];A.push(v)}c=-1,I=void 0,T.value=Ae(A,g,0,F.value.from),E.value=Ae(A,g,F.value.to,e.value),n>=0?(we(F.value.from),G(()=>{Z(n)})):oe()}function Y(n){if(n===void 0&&typeof window!="undefined"){const v=s();v!=null&&v.nodeType!==8&&(n=De(v,i(),j.value,D.value,o.virtualScrollHorizontal,h.lang.rtl,o.virtualScrollStickySizeStart,o.virtualScrollStickySizeEnd).scrollViewSize)}x=n;const r=parseFloat(o.virtualScrollSliceRatioBefore)||0,f=parseFloat(o.virtualScrollSliceRatioAfter)||0,z=1+r+f,R=n===void 0||n<=0?1:Math.ceil(n/V.value),w=Math.max(1,R,Math.ceil((o.virtualScrollSliceSize>0?o.virtualScrollSliceSize:10)/z));C.value={total:Math.ceil(w*z),start:Math.ceil(w*r),center:Math.ceil(w*(.5+r)),end:Math.ceil(w*(1+r)),view:R}}function Ie(n,r){const f=o.virtualScrollHorizontal===!0?"width":"height",z={["--q-virtual-scroll-item-"+f]:V.value+"px"};return[n==="tbody"?y(n,{class:"q-virtual-scroll__padding",key:"before",ref:j},[y("tr",[y("td",{style:{[f]:`${T.value}px`,...z},colspan:M.value})])]):y(n,{class:"q-virtual-scroll__padding",key:"before",ref:j,style:{[f]:`${T.value}px`,...z}}),y(n,{class:"q-virtual-scroll__content",key:"content",ref:W,tabindex:-1},r.flat()),n==="tbody"?y(n,{class:"q-virtual-scroll__padding",key:"after",ref:D},[y("tr",[y("td",{style:{[f]:`${E.value}px`,...z},colspan:M.value})])]):y(n,{class:"q-virtual-scroll__padding",key:"after",ref:D,style:{[f]:`${E.value}px`,...z}})]}function Ce(n){c!==n&&(o.onVirtualScroll!==void 0&&O("virtual-scroll",{index:n,from:F.value.from,to:F.value.to-1,direction:n<c?"decrease":"increase",ref:b}),c=n)}Y();const oe=Tt(Q,h.platform.is.ios===!0?120:35);Pt(()=>{Y()});let a=!1;return Dt(()=>{a=!0}),$t(()=>{if(a!==!0)return;const n=s();I!==void 0&&n!==void 0&&n!==null&&n.nodeType!==8?rt(n,I,o.virtualScrollHorizontal,h.lang.rtl):Z(c)}),vt(()=>{oe.cancel()}),Object.assign(b,{scrollTo:Z,reset:ne,refresh:be}),{virtualScrollSliceRange:F,virtualScrollSliceSizeComputed:C,setVirtualScrollSize:Y,onVirtualScrollEvt:oe,localResetVirtualScroll:J,padVirtualScroll:Ie,scrollTo:Z,reset:ne,refresh:be}}const ct=e=>["add","add-unique","toggle"].includes(e),sl=".*+?^${}()|[]\\",dl=Object.keys(Ke);var yl=Ne({name:"QSelect",inheritAttrs:!1,props:{...rl,...Nt,...Ke,modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:ct},mapOptions:Boolean,emitValue:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:String,transitionHide:String,transitionDuration:[String,Number],behavior:{type:String,validator:e=>["default","menu","dialog"].includes(e),default:"default"},virtualScrollItemSize:{type:[Number,String],default:void 0},onNewValue:Function,onFilter:Function},emits:[...st,"add","remove","input-value","new-value","keyup","keypress","keydown","filter-abort"],setup(e,{slots:s,emit:i}){const{proxy:V}=je(),{$q:_}=V,o=B(!1),O=B(!1),b=B(-1),h=B(""),I=B(!1),c=B(!1);let x,A,g,T,E,C,j,D,W;const F=B(null),M=B(null),X=B(null),ye=B(null),ne=B(null),be=Kt(e),Z=Ut(tt),Q=S(()=>Array.isArray(e.options)?e.options.length:0),ae=S(()=>e.virtualScrollItemSize===void 0?e.optionsDense===!0?24:48:e.virtualScrollItemSize),{virtualScrollSliceRange:we,virtualScrollSliceSizeComputed:Ve,localResetVirtualScroll:J,padVirtualScroll:Y,onVirtualScrollEvt:Ie,scrollTo:Ce,setVirtualScrollSize:oe}=cl({virtualScrollLength:Q,getVirtualScrollTarget:yt,getVirtualScrollEl:Je,virtualScrollItemSizeComputed:ae}),a=ft(),n=S(()=>{const t=e.mapOptions===!0&&e.multiple!==!0,u=e.modelValue!==void 0&&(e.modelValue!==null||t===!0)?e.multiple===!0&&Array.isArray(e.modelValue)?e.modelValue:[e.modelValue]:[];if(e.mapOptions===!0&&Array.isArray(e.options)===!0){const l=e.mapOptions===!0&&A!==void 0?A:[],d=u.map(q=>ht(q,l));return e.modelValue===null&&t===!0?d.filter(q=>q!==null):d}return u}),r=S(()=>{const t={};return dl.forEach(u=>{const l=e[u];l!==void 0&&(t[u]=l)}),t}),f=S(()=>e.optionsDark===null?a.isDark.value:e.optionsDark),z=S(()=>ot(n.value)),R=S(()=>{let t="q-field__input q-placeholder col";return e.hideSelected===!0||n.value.length===0?[t,e.inputClass]:(t+=" q-field__input--padding",e.inputClass===void 0?t:[t,e.inputClass])}),w=S(()=>(e.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(e.popupContentClass?" "+e.popupContentClass:"")),v=S(()=>Q.value===0),L=S(()=>n.value.map(t=>H.value(t)).join(", ")),m=S(()=>e.optionsHtml===!0?()=>!0:t=>t!=null&&t.html===!0),$=S(()=>e.displayValueHtml===!0||e.displayValue===void 0&&(e.optionsHtml===!0||n.value.some(m.value))),ee=S(()=>a.focused.value===!0?e.tabindex:-1),ke=S(()=>({tabindex:e.tabindex,role:"combobox","aria-label":e.label,"aria-readonly":e.readonly===!0?"true":"false","aria-autocomplete":e.useInput===!0?"list":"none","aria-expanded":o.value===!0?"true":"false","aria-owns":`${a.targetUid.value}_lb`,"aria-controls":`${a.targetUid.value}_lb`})),U=S(()=>{const t={id:`${a.targetUid.value}_lb`,role:"listbox","aria-multiselectable":e.multiple===!0?"true":"false"};return b.value>=0&&(t["aria-activedescendant"]=`${a.targetUid.value}_${b.value}`),t}),pe=S(()=>n.value.map((t,u)=>({index:u,opt:t,html:m.value(t),selected:!0,removeAtIndex:gt,toggleOption:te,tabindex:ee.value}))),ie=S(()=>{if(Q.value===0)return[];const{from:t,to:u}=we.value;return e.options.slice(t,u).map((l,d)=>{const q=ce.value(l)===!0,k=t+d,p={clickable:!0,active:!1,activeClass:xe.value,manualFocus:!0,focused:!1,disable:q,tabindex:-1,dense:e.optionsDense,dark:f.value,role:"option",id:`${a.targetUid.value}_${k}`,onClick:()=>{te(l)}};return q!==!0&&(He(l)===!0&&(p.active=!0),b.value===k&&(p.focused=!0),p["aria-selected"]=p.active===!0?"true":"false",_.platform.is.desktop===!0&&(p.onMousemove=()=>{o.value===!0&&se(k)})),{index:k,opt:l,html:m.value(l),label:H.value(l),selected:p.active,focused:p.focused,toggleOption:te,setOptionIndex:se,itemProps:p}})}),re=S(()=>e.dropdownIcon!==void 0?e.dropdownIcon:_.iconSet.arrow.dropdown),_e=S(()=>e.optionsCover===!1&&e.outlined!==!0&&e.standout!==!0&&e.borderless!==!0&&e.rounded!==!0),xe=S(()=>e.optionsSelectedClass!==void 0?e.optionsSelectedClass:e.color!==void 0?`text-${e.color}`:""),N=S(()=>Re(e.optionValue,"value")),H=S(()=>Re(e.optionLabel,"label")),ce=S(()=>Re(e.optionDisable,"disable")),Me=S(()=>n.value.map(t=>N.value(t))),St=S(()=>{const t={onInput:tt,onChange:Z,onKeydown:Ze,onKeyup:Ye,onKeypress:Ge,onFocus:We,onClick(u){g===!0&&Se(u)}};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=Z,t});ge(n,t=>{A=t,e.useInput===!0&&e.fillInput===!0&&e.multiple!==!0&&a.innerLoading.value!==!0&&(O.value!==!0&&o.value!==!0||z.value!==!0)&&(T!==!0&&me(),(O.value===!0||o.value===!0)&&de(""))},{immediate:!0}),ge(()=>e.fillInput,me),ge(o,Le),ge(Q,_t);function Qe(t){return e.emitValue===!0?N.value(t):t}function Ee(t){if(t>-1&&t<n.value.length)if(e.multiple===!0){const u=e.modelValue.slice();i("remove",{index:t,value:u.splice(t,1)[0]}),i("update:modelValue",u)}else i("update:modelValue",null)}function gt(t){Ee(t),a.focus()}function Ue(t,u){const l=Qe(t);if(e.multiple!==!0){e.fillInput===!0&&qe(H.value(t),!0,!0),i("update:modelValue",l);return}if(n.value.length===0){i("add",{index:0,value:l}),i("update:modelValue",e.multiple===!0?[l]:l);return}if(u===!0&&He(t)===!0||e.maxValues!==void 0&&e.modelValue.length>=e.maxValues)return;const d=e.modelValue.slice();i("add",{index:d.length,value:l}),d.push(l),i("update:modelValue",d)}function te(t,u){if(a.editable.value!==!0||t===void 0||ce.value(t)===!0)return;const l=N.value(t);if(e.multiple!==!0){u!==!0&&(qe(e.fillInput===!0?H.value(t):"",!0,!0),le()),M.value!==null&&M.value.focus(),(n.value.length===0||ze(N.value(n.value[0]),l)!==!0)&&i("update:modelValue",e.emitValue===!0?l:t);return}if((g!==!0||I.value===!0)&&a.focus(),We(),n.value.length===0){const k=e.emitValue===!0?l:t;i("add",{index:0,value:k}),i("update:modelValue",e.multiple===!0?[k]:k);return}const d=e.modelValue.slice(),q=Me.value.findIndex(k=>ze(k,l));if(q>-1)i("remove",{index:q,value:d.splice(q,1)[0]});else{if(e.maxValues!==void 0&&d.length>=e.maxValues)return;const k=e.emitValue===!0?l:t;i("add",{index:d.length,value:k}),d.push(k)}i("update:modelValue",d)}function se(t){if(_.platform.is.desktop!==!0)return;const u=t>-1&&t<Q.value?t:-1;b.value!==u&&(b.value=u)}function Oe(t=1,u){if(o.value===!0){let l=b.value;do l=it(l+t,-1,Q.value-1);while(l!==-1&&l!==b.value&&ce.value(e.options[l])===!0);b.value!==l&&(se(l),Ce(l),u!==!0&&e.useInput===!0&&e.fillInput===!0&&Fe(l>=0?H.value(e.options[l]):C))}}function ht(t,u){const l=d=>ze(N.value(d),t);return e.options.find(l)||u.find(l)||t}function Re(t,u){const l=t!==void 0?t:u;return typeof l=="function"?l:d=>d!==null&&typeof d=="object"&&l in d?d[l]:d}function He(t){const u=N.value(t);return Me.value.find(l=>ze(l,u))!==void 0}function We(t){e.useInput===!0&&M.value!==null&&(t===void 0||M.value===t.target&&t.target.value===L.value)&&M.value.select()}function Xe(t){Wt(t,27)===!0&&o.value===!0&&(Se(t),le(),me()),i("keyup",t)}function Ye(t){const{value:u}=t.target;if(t.keyCode!==void 0){Xe(t);return}if(t.target.value="",clearTimeout(x),me(),typeof u=="string"&&u.length>0){const l=u.toLocaleLowerCase(),d=k=>{const p=e.options.find(P=>k.value(P).toLocaleLowerCase()===l);return p===void 0?!1:(n.value.indexOf(p)===-1?te(p):le(),!0)},q=k=>{d(N)!==!0&&(d(H)===!0||k===!0||de(u,!0,()=>q(!0)))};q()}else a.clearValue(t)}function Ge(t){i("keypress",t)}function Ze(t){if(i("keydown",t),Xt(t)===!0)return;const u=h.value.length>0&&(e.newValueMode!==void 0||e.onNewValue!==void 0),l=t.shiftKey!==!0&&e.multiple!==!0&&(b.value>-1||u===!0);if(t.keyCode===27){Pe(t);return}if(t.keyCode===9&&l===!1){fe();return}if(t.target===void 0||t.target.id!==a.targetUid.value)return;if(t.keyCode===40&&a.innerLoading.value!==!0&&o.value===!1){ue(t),ve();return}if(t.keyCode===8&&e.hideSelected!==!0&&h.value.length===0){e.multiple===!0&&Array.isArray(e.modelValue)===!0?Ee(e.modelValue.length-1):e.multiple!==!0&&e.modelValue!==null&&i("update:modelValue",null);return}(t.keyCode===35||t.keyCode===36)&&(typeof h.value!="string"||h.value.length===0)&&(ue(t),b.value=-1,Oe(t.keyCode===36?1:-1,e.multiple)),(t.keyCode===33||t.keyCode===34)&&Ve.value!==void 0&&(ue(t),b.value=Math.max(-1,Math.min(Q.value,b.value+(t.keyCode===33?-1:1)*Ve.value.view)),Oe(t.keyCode===33?1:-1,e.multiple)),(t.keyCode===38||t.keyCode===40)&&(ue(t),Oe(t.keyCode===38?-1:1,e.multiple));const d=Q.value;if((D===void 0||W<Date.now())&&(D=""),d>0&&e.useInput!==!0&&t.key!==void 0&&t.key.length===1&&t.altKey===t.ctrlKey&&(t.keyCode!==32||D.length>0)){o.value!==!0&&ve(t);const q=t.key.toLocaleLowerCase(),k=D.length===1&&D[0]===q;W=Date.now()+1500,k===!1&&(ue(t),D+=q);const p=new RegExp("^"+D.split("").map(Te=>sl.indexOf(Te)>-1?"\\"+Te:Te).join(".*"),"i");let P=b.value;if(k===!0||P<0||p.test(H.value(e.options[P]))!==!0)do P=it(P+1,-1,d-1);while(P!==b.value&&(ce.value(e.options[P])===!0||p.test(H.value(e.options[P]))!==!0));b.value!==P&&G(()=>{se(P),Ce(P),P>=0&&e.useInput===!0&&e.fillInput===!0&&Fe(H.value(e.options[P]))});return}if(!(t.keyCode!==13&&(t.keyCode!==32||e.useInput===!0||D!=="")&&(t.keyCode!==9||l===!1))){if(t.keyCode!==9&&ue(t),b.value>-1&&b.value<d){te(e.options[b.value]);return}if(u===!0){const q=(k,p)=>{if(p){if(ct(p)!==!0)return}else p=e.newValueMode;if(k==null)return;qe("",e.multiple!==!0,!0),(p==="toggle"?te:Ue)(k,p==="add-unique"),e.multiple!==!0&&(M.value!==null&&M.value.focus(),le())};if(e.onNewValue!==void 0?i("new-value",h.value,q):q(h.value),e.multiple!==!0)return}o.value===!0?fe():a.innerLoading.value!==!0&&ve()}}function Je(){return g===!0?ne.value:X.value!==null&&X.value.__qPortalInnerRef.value!==null?X.value.__qPortalInnerRef.value:void 0}function yt(){return Je()}function bt(){return e.hideSelected===!0?[]:s["selected-item"]!==void 0?pe.value.map(t=>s["selected-item"](t)).slice():s.selected!==void 0?[].concat(s.selected()):e.useChips===!0?pe.value.map((t,u)=>y(nl,{key:"option-"+u,removable:a.editable.value===!0&&ce.value(t.opt)!==!0,dense:!0,textColor:e.color,tabindex:ee.value,onRemove(){t.removeAtIndex(u)}},()=>y("span",{class:"ellipsis",[t.html===!0?"innerHTML":"textContent"]:H.value(t.opt)}))):[y("span",{[$.value===!0?"innerHTML":"textContent"]:e.displayValue!==void 0?e.displayValue:L.value})]}function et(){if(v.value===!0)return s["no-option"]!==void 0?s["no-option"]({inputValue:h.value}):void 0;const t=s.option!==void 0?s.option:l=>y(Jt,{key:l.index,...l.itemProps},()=>y(Zt,()=>y(el,()=>y("span",{[l.html===!0?"innerHTML":"textContent"]:l.label}))));let u=Y("div",ie.value.map(t));return s["before-options"]!==void 0&&(u=s["before-options"]().concat(u)),Gt(s["after-options"],u)}function wt(t,u){const l=u===!0?{...ke.value,...a.splitAttrs.attributes.value}:void 0,d={ref:u===!0?M:void 0,key:"i_t",class:R.value,style:e.inputStyle,value:h.value!==void 0?h.value:"",type:"search",...l,id:u===!0?a.targetUid.value:void 0,maxlength:e.maxlength,autocomplete:e.autocomplete,"data-autofocus":t!==!0&&e.autofocus===!0||void 0,disabled:e.disable===!0,readonly:e.readonly===!0,...St.value};return t!==!0&&g===!0&&(Array.isArray(d.class)===!0?d.class=[...d.class,"no-pointer-events"]:d.class+=" no-pointer-events"),y("input",d)}function tt(t){clearTimeout(x),!(t&&t.target&&t.target.qComposing===!0)&&(Fe(t.target.value||""),T=!0,C=h.value,a.focused.value!==!0&&(g!==!0||I.value===!0)&&a.focus(),e.onFilter!==void 0&&(x=setTimeout(()=>{de(h.value)},e.inputDebounce)))}function Fe(t){h.value!==t&&(h.value=t,i("input-value",t))}function qe(t,u,l){T=l!==!0,e.useInput===!0&&(Fe(t),(u===!0||l!==!0)&&(C=t),u!==!0&&de(t))}function de(t,u,l){if(e.onFilter===void 0||u!==!0&&a.focused.value!==!0)return;a.innerLoading.value===!0?i("filter-abort"):(a.innerLoading.value=!0,c.value=!0),t!==""&&e.multiple!==!0&&n.value.length>0&&T!==!0&&t===H.value(n.value[0])&&(t="");const d=setTimeout(()=>{o.value===!0&&(o.value=!1)},10);clearTimeout(E),E=d,i("filter",t,(q,k)=>{(u===!0||a.focused.value===!0)&&E===d&&(clearTimeout(E),typeof q=="function"&&q(),c.value=!1,G(()=>{a.innerLoading.value=!1,a.editable.value===!0&&(u===!0?o.value===!0&&le():o.value===!0?Le(!0):o.value=!0),typeof k=="function"&&G(()=>{k(V)}),typeof l=="function"&&G(()=>{l(V)})}))},()=>{a.focused.value===!0&&E===d&&(clearTimeout(E),a.innerLoading.value=!1,c.value=!1),o.value===!0&&(o.value=!1)})}function Vt(){return y(tl,{ref:X,class:w.value,style:e.popupContentStyle,modelValue:o.value,fit:e.menuShrink!==!0,cover:e.optionsCover===!0&&v.value!==!0&&e.useInput!==!0,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,dark:f.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,square:_e.value,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,separateClosePopup:!0,...U.value,onScrollPassive:Ie,onBeforeShow:ut,onBeforeHide:Ct,onShow:kt},et)}function Ct(t){nt(t),fe()}function kt(){oe()}function xt(t){Se(t),M.value!==null&&M.value.focus(),I.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function qt(t){Se(t),G(()=>{I.value=!1})}function zt(){const t=[y(ll,{class:`col-auto ${a.fieldClass.value}`,...r.value,for:a.targetUid.value,dark:f.value,square:!0,loading:c.value,itemAligned:!1,filled:!0,stackLabel:h.value.length>0,...a.splitAttrs.listeners.value,onFocus:xt,onBlur:qt},{...s,rawControl:()=>a.getControl(!0),before:void 0,after:void 0})];return o.value===!0&&t.push(y("div",{ref:ne,class:w.value+" scroll",style:e.popupContentStyle,...U.value,onClick:Pe,onScrollPassive:Ie},et())),y(Yt,{ref:ye,modelValue:O.value,position:e.useInput===!0?"top":void 0,transitionShow:j,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:ut,onBeforeHide:At,onHide:It,onShow:pt},()=>y("div",{class:"q-select__dialog"+(f.value===!0?" q-select__dialog--dark q-dark":"")+(I.value===!0?" q-select__dialog--focused":"")},t))}function At(t){nt(t),ye.value!==null&&ye.value.__updateRefocusTarget(a.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),a.focused.value=!1}function It(t){le(),a.focused.value===!1&&i("blur",t),me()}function pt(){const t=document.activeElement;(t===null||t.id!==a.targetUid.value)&&M.value!==null&&M.value!==t&&M.value.focus(),oe()}function fe(){O.value!==!0&&(b.value=-1,o.value===!0&&(o.value=!1),a.focused.value===!1&&(clearTimeout(E),E=void 0,a.innerLoading.value===!0&&(i("filter-abort"),a.innerLoading.value=!1,c.value=!1)))}function ve(t){a.editable.value===!0&&(g===!0?(a.onControlFocusin(t),O.value=!0,G(()=>{a.focus()})):a.focus(),e.onFilter!==void 0?de(h.value):(v.value!==!0||s["no-option"]!==void 0)&&(o.value=!0))}function le(){O.value=!1,fe()}function me(){e.useInput===!0&&qe(e.multiple!==!0&&e.fillInput===!0&&n.value.length>0&&H.value(n.value[0])||"",!0,!0)}function Le(t){let u=-1;if(t===!0){if(n.value.length>0){const l=N.value(n.value[0]);u=e.options.findIndex(d=>ze(N.value(d),l))}J(u)}se(u)}function _t(t,u){o.value===!0&&a.innerLoading.value===!1&&(J(-1,!0),G(()=>{o.value===!0&&a.innerLoading.value===!1&&(t>u?J():Le(!0))}))}function lt(){O.value===!1&&X.value!==null&&X.value.updatePosition()}function ut(t){t!==void 0&&Se(t),i("popup-show",t),a.hasPopupOpen=!0,a.onControlFocusin(t)}function nt(t){t!==void 0&&Se(t),i("popup-hide",t),a.hasPopupOpen=!1,a.onControlFocusout(t)}function at(){g=_.platform.is.mobile!==!0&&e.behavior!=="dialog"?!1:e.behavior!=="menu"&&(e.useInput===!0?s["no-option"]!==void 0||e.onFilter!==void 0||v.value===!1:!0),j=_.platform.is.ios===!0&&g===!0&&e.useInput===!0?"fade":e.transitionShow}return jt(at),Qt(lt),at(),vt(()=>{clearTimeout(x)}),Object.assign(V,{showPopup:ve,hidePopup:le,removeAtIndex:Ee,add:Ue,toggleOption:te,getOptionIndex:()=>b.value,setOptionIndex:se,moveOptionSelection:Oe,filter:de,updateMenuPosition:lt,updateInputValue:qe,isOptionSelected:He,getEmittingOptionValue:Qe,isOptionDisabled:(...t)=>ce.value.apply(null,t)===!0,getOptionValue:(...t)=>N.value.apply(null,t),getOptionLabel:(...t)=>H.value.apply(null,t)}),Object.assign(a,{innerValue:n,fieldClass:S(()=>`q-select q-field--auto-height q-select--with${e.useInput!==!0?"out":""}-input q-select--with${e.useChips!==!0?"out":""}-chips q-select--${e.multiple===!0?"multiple":"single"}`),inputRef:F,targetRef:M,hasValue:z,showPopup:ve,floatingLabel:S(()=>e.hideSelected!==!0&&z.value===!0||typeof h.value=="number"||h.value.length>0||ot(e.displayValue)),getControlChild:()=>{if(a.editable.value!==!1&&(O.value===!0||v.value!==!0||s["no-option"]!==void 0))return g===!0?zt():Vt();a.hasPopupOpen===!0&&(a.hasPopupOpen=!1)},controlEvents:{onFocusin(t){a.onControlFocusin(t)},onFocusout(t){a.onControlFocusout(t,()=>{me(),fe()})},onClick(t){if(Pe(t),g!==!0&&o.value===!0){fe(),M.value!==null&&M.value.focus();return}ve(t)}},getControl:t=>{const u=bt(),l=t===!0||O.value!==!0||g!==!0;if(e.useInput===!0)u.push(wt(t,l));else if(a.editable.value===!0){const q=l===!0?ke.value:void 0;u.push(y("input",{ref:l===!0?M:void 0,key:"d_t",class:"q-select__focus-target",id:l===!0?a.targetUid.value:void 0,readonly:!0,"data-autofocus":t!==!0&&e.autofocus===!0||void 0,...q,onKeydown:Ze,onKeyup:Xe,onKeypress:Ge})),l===!0&&typeof e.autocomplete=="string"&&e.autocomplete.length>0&&u.push(y("input",{class:"q-select__autocomplete-input",autocomplete:e.autocomplete,tabindex:-1,onKeyup:Ye}))}if(be.value!==void 0&&e.disable!==!0&&Me.value.length>0){const q=Me.value.map(k=>y("option",{value:k,selected:!0}));u.push(y("select",{class:"hidden",name:be.value,multiple:e.multiple},q))}const d=e.useInput===!0||l!==!0?void 0:a.splitAttrs.attributes.value;return y("div",{class:"q-field__native row items-center",...d},u)},getInnerAppend:()=>e.loading!==!0&&c.value!==!0&&e.hideDropdownIcon!==!0?[y(Be,{class:"q-select__dropdown-icon"+(o.value===!0?" rotate-180":""),name:re.value})]:null}),dt(a)}});export{yl as Q};
