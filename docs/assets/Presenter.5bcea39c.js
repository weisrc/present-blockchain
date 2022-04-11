import{o as u,c as v,a as t,r as h,u as L,b as H,d as z,e as R,f as $,w as D,g as A,h as P,i as o,n as w,t as B,F as I,j as U,v as E,k as F,_ as O,l as W,m as Y,p as b,q as Z,s as S,x as q,y as j,z as G,A as J,B as K,C as Q,D as X,E as ee,G as se,H as te,I as oe,J as c,K as C,L as ae,M as T,N as ne,O as M,P as V,Q as le,S as ie,R as re,T as ce,U as ue,V as de,W as pe,X as k,Y as me,Z as _e,$ as ve,a0 as fe}from"./index.407cc634.js";import he from"./DrawingControls.b2c58f86.js";const ge={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},xe=t("path",{fill:"currentColor",d:"M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8zm8 12h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8z"},null,-1),we=[xe];function ke(n,l){return u(),v("svg",ge,we)}var ye={name:"carbon-renew",render:ke};const $e={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},be=t("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),Se=t("path",{fill:"currentColor",d:"M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z"},null,-1),Ce=[be,Se];function Te(n,l){return u(),v("svg",$e,Ce)}var Me={name:"carbon-time",render:Te},Ve="/present-blockchain/assets/logo-title-horizontal.96c3c915.png";function He(){const n=h(Date.now()),l=L({interval:1e3}),p=H(()=>{const i=(l.value-n.value)/1e3,d=Math.floor(i%60).toString().padStart(2,"0");return`${Math.floor(i/60).toString().padStart(2,"0")}:${d}`});function g(){n.value=l.value}return{timer:p,resetTimer:g}}const ze=["innerHTML"],Ae=["textContent"],Be=["placeholder"],Ie=z({props:{class:{default:""},placeholder:{default:"No notes for this slide"}},setup(n){const l=n,{info:p,update:g}=R($),i=h("");let d;const{ignoreUpdates:m}=D(i,s=>{const e=$.value;clearTimeout(d),d=setTimeout(()=>{g({raw:null,note:s},e)},500)});A(p,s=>{clearTimeout(d),m(()=>{i.value=(s==null?void 0:s.note)||""})},{immediate:!0,flush:"sync"});const _=h(),a=h(!1);async function f(s){var e,r,x;((e=s==null?void 0:s.target)==null?void 0:e.tagName)!=="A"&&(a.value=!0,(r=_.value)==null||r.focus(),await F(),(x=_.value)==null||x.focus())}return P(_,()=>{a.value=!1}),(s,e)=>{var r,x;return!a.value&&i.value?(u(),v(I,{key:0},[(r=o(p))!=null&&r.notesHTML?(u(),v("div",{key:0,class:w(["prose overflow-auto outline-none",l.class]),onClick:f,innerHTML:(x=o(p))==null?void 0:x.notesHTML},null,10,ze)):(u(),v("div",{key:1,class:w(["prose overflow-auto outline-none",l.class]),onClick:f,textContent:B(i.value)},null,10,Ae))],2112)):U((u(),v("textarea",{key:1,ref_key:"input",ref:_,"onUpdate:modelValue":e[0]||(e[0]=y=>i.value=y),class:w(["prose resize-none overflow-auto outline-none bg-transparent block",l.class]),placeholder:n.placeholder,onFocus:e[1]||(e[1]=y=>a.value=!0)},null,42,Be)),[[E,i.value]])}}}),N=n=>(ve("data-v-ab2b25ae"),n=n(),fe(),n),Ne={class:"bg-main h-full slidev-presenter"},Le={class:"grid-container"},Re={class:"grid-section top flex"},De=N(()=>t("img",{src:Ve,class:"h-14 ml-2 py-2 my-auto"},null,-1)),Pe=N(()=>t("div",{class:"flex-auto"},null,-1)),Ue={class:"text-2xl pl-2 pr-6 my-auto"},Ee={class:"grid-section next flex flex-col p-4"},Fe={class:"grid-section note overflow-auto"},Oe={class:"grid-section bottom"},We={class:"progress-bar"},Ye=z({setup(n){const l=h();W(),Y(l);const p=b.titleTemplate.replace("%s",b.title||"Slidev");Z({title:`Presenter - ${p}`});const{timer:g,resetTimer:i}=He(),d=h([]),m=H(()=>S.value<q.value?{route:j.value,clicks:S.value+1}:G.value?{route:J.value,clicks:0}:null);return K(()=>{const _=l.value.querySelector("#slide-content"),a=Q(X()),f=ee();A(()=>{if(!f.value||te.value||!oe.value)return;const s=_.getBoundingClientRect(),e=(a.x-s.left)/s.width*100,r=(a.y-s.top)/s.height*100;if(!(e<0||e>100||r<0||r>100))return{x:e,y:r}},s=>{se.cursor=s})}),(_,a)=>{const f=Me,s=ye;return u(),v(I,null,[t("div",Ne,[t("div",Le,[t("div",Re,[De,Pe,t("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:a[0]||(a[0]=(...e)=>o(i)&&o(i)(...e))},[c(f,{class:"absolute"}),c(s,{class:"absolute opacity-0"})]),t("div",Ue,B(o(g)),1)]),t("div",{ref_key:"main",ref:l,class:"grid-section main flex flex-col p-4",style:C(o(ae))},[c(M,{key:"main",class:"h-full w-full"},{default:T(()=>[c(ne)]),_:1})],4),t("div",Ee,[o(m)?(u(),V(M,{key:"next",class:"h-full w-full"},{default:T(()=>{var e;return[c(o(ie),{is:(e=o(m).route)==null?void 0:e.component,"clicks-elements":d.value,"onUpdate:clicks-elements":a[1]||(a[1]=r=>d.value=r),clicks:o(m).clicks,"clicks-disabled":!1,class:w(o(le)(o(m).route))},null,8,["is","clicks-elements","clicks","class"])]}),_:1})):re("v-if",!0)]),t("div",Fe,[c(Ie,{class:"w-full h-full p-4 overflow-auto"})]),t("div",Oe,[c(ce,{persist:!0})]),(u(),V(he,{key:0}))]),t("div",We,[t("div",{class:"progress h-2px bg-primary transition-all",style:C({width:`${(o(ue)-1)/(o(de)-1)*100}%`})},null,4)])]),c(pe),c(_e,{modelValue:o(k),"onUpdate:modelValue":a[2]||(a[2]=e=>me(k)?k.value=e:null)},null,8,["modelValue"])],64)}}});var je=O(Ye,[["__scopeId","data-v-ab2b25ae"]]);export{je as default};
