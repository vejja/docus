import{r as d,$ as f,ag as g,ac as y,d as k,u as b,b as u,c as m,F as x,ah as B,n as p,e as C,t as H,J as S,ai as A,X as T,f as $,k as q}from"./entry.5485204b.js";const D=()=>{const a=d(),s=d([]),c=d([]),i=e=>e.forEach(t=>{const r=t.target.id;t.isIntersecting?s.value.push(r):s.value=s.value.filter(n=>n!==r)}),l=e=>e.forEach(t=>{a.value.observe(t)});return f(s,(e,t)=>{e.length===0?c.value=t:c.value=e},{deep:!0}),g(()=>a.value=new IntersectionObserver(i)),y(()=>{var e;return(e=a.value)==null?void 0:e.disconnect()}),{visibleHeadings:s,activeHeadings:c,updateHeadings:l}},L={class:"docs-toc-links"},M=["href","onClick"],w=k({__name:"DocsTocLinks",props:{links:{type:Array,default:()=>[]}},emits:["move"],setup(a,{emit:s}){const c=s,i=b(),{activeHeadings:l,updateHeadings:e}=D();setTimeout(()=>{e([...document.querySelectorAll(".document-driven-page h1, .docus-content h1"),...document.querySelectorAll(".document-driven-page h2, .docus-content h2"),...document.querySelectorAll(".document-driven-page h3, .docus-content h3"),...document.querySelectorAll(".document-driven-page h4, .docus-content h4")])},300);function t(n){i.push(`#${n}`),c("move",n)}function r(n){c("move",n)}return(n,v)=>{const h=E;return u(),m("ul",L,[(u(!0),m(x,null,B(a.links,o=>(u(),m("li",{key:o.text,class:p([`depth-${o.depth}`])},[C("a",{href:`#${o.id}`,class:p([S(l).includes(o.id)&&"active"]),onClick:A(_=>t(o.id),["prevent"])},H(o.text),11,M),o.children?(u(),T(h,{key:0,links:o.children,onMove:v[0]||(v[0]=_=>r(_))},null,8,["links"])):$("",!0)],2))),128))])}}});const E=q(w,[["__scopeId","data-v-b24863c8"]]);export{E as default};
