import{s as r,j as e,C as u,r as d,a as o,G as g,D as m,I as x,T as b,b as v,R as y,c as k}from"./vendor.a31aa41b.js";const L=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function p(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(t){if(t.ep)return;t.ep=!0;const n=p(t);fetch(t.href,n)}};L();const w=r.div`
  color: #fafafa;
  text-align: center;
  padding: 10px;
`;function C(){return e(w,{children:e("h3",{children:"haneen mahdin"})})}const f=u`
  position: relative;
  color: #d1d1d1;
  text-decoration: none;
  margin: 0 8px;
  padding: 4px 8px;
  transition: 0.3s cubic-bezier(0.98, 0.07, 0.47, 0.74);
`,j=r.a`
  ${f}

  &::before {
    content: " ";
    position: absolute; 
    bottom: -5px;
    height: 2px; width: 0%;
    background: #eee;
    transition: .3s cubic-bezier(0.98, 0.07, 0.47, 0.74);
  }

  &:hover::before {
    width: 80%;
  }

  &:hover {
    color: #eee;
  }
`;function h(i){return e(j,{href:i.href,target:"_parent",referrerPolicy:"same-origin","aria-label":`Link to ${i.href} page`,children:i.text})}const I=r.nav`
  height: 100px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0;
`;class N extends d.exports.Component{render(){return o(I,{children:[e(C,{}),o("div",{style:{width:"auto",maxWidth:"100%"},children:[e(h,{href:"/",text:"projects"}),e(h,{href:"/",text:"about me"})]})]})}}const z=r.article`
    min-height: calc(100vh - 100px);
    max-width: 100vw;
    color: #fafafa;
`,M=r.div`
    text-align: left;
    padding: 100px 10%;

    * {
        margin: 6px 0;
    }

    h2 {
        font-size: 350%;
        font-weight: 800;
    }

    h4 {
        font-size: 120%;
        color: #c1c1c1;
        font-weight: 600;
    }
`,A=r.aside`
    padding: 10px 0;
    display: flex;
    align-items: flex-start;
`,a=r.a`
    ${f}
    text-align: left;
    font-size: 24px;
    margin: 0;
    margin-right: 20px;

    svg {
        stroke: #d1d1d1;
        fill: #ffffff37;
        transition: 0.3s cubic-bezier(0.35, 0.07, 0.38, 1.01);
    }

    &:hover svg,:focus svg {
        stroke: #a9a9a9;
        fill: #fff;
        transform: scale(1.2);
    }
`;class O extends d.exports.Component{render(){return e(z,{children:o(M,{children:[e("h2",{children:"Hi, I'm Haneen \u{1F44B}"}),e("h4",{children:"An aspiring full-stack developer and a UI/UX Designer."}),o(A,{children:[e(a,{target:"_blank",href:"https://github.com/haneenmahd",children:e(g,{})}),e(a,{target:"_blank",href:"https://dribbble.com/haneenmahdin",children:e(m,{})}),e(a,{target:"_blank",href:"https://instagram.com/haneenmahdin",children:e(x,{})}),e(a,{target:"_blank",href:"https://twitter.com/HaneenMahdin",children:e(b,{})}),e(a,{href:"/projects",children:e(v,{})})]})]})})}}function _(){return o("div",{className:"App",children:[e(N,{}),e(O,{})]})}y.render(e(k.StrictMode,{children:e(_,{})}),document.getElementById("root"));
