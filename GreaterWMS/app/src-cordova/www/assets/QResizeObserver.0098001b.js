import{r as g,D as z,o as l,j as y,aq as f,n as v,t as w,h as R,g as O,at as b}from"./index.e67e618e.js";function x(){const i=g(!z.value);return i.value===!1&&l(()=>{i.value=!0}),i}const m=typeof ResizeObserver!="undefined",h=m===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var L=y({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(i,{emit:p}){let r=null,t,o={width:-1,height:-1};function s(e){e===!0||i.debounce===0||i.debounce==="0"?u():r===null&&(r=setTimeout(u,i.debounce))}function u(){if(clearTimeout(r),r=null,t){const{offsetWidth:e,offsetHeight:n}=t;(e!==o.width||n!==o.height)&&(o={width:e,height:n},p("resize",o))}}const{proxy:a}=O();if(m===!0){let e;return l(()=>{f(()=>{t=a.$el.parentNode,t&&(e=new ResizeObserver(s),e.observe(t),u())})}),v(()=>{clearTimeout(r),e!==void 0&&(e.disconnect!==void 0?e.disconnect():t&&e.unobserve(t))}),w}else{let d=function(){clearTimeout(r),n!==void 0&&(n.removeEventListener!==void 0&&n.removeEventListener("resize",s,b.passive),n=void 0)},c=function(){d(),t&&t.contentDocument&&(n=t.contentDocument.defaultView,n.addEventListener("resize",s,b.passive),u())};const e=x();let n;return l(()=>{f(()=>{t=a.$el,t&&c()})}),v(d),a.trigger=s,()=>{if(e.value===!0)return R("object",{style:h.style,tabindex:-1,type:"text/html",data:h.url,"aria-hidden":"true",onLoad:c})}}}});export{L as Q};
