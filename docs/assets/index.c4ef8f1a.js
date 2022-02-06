import{s as n,j as e,C as m,r as h,a as o,G as u,D as x,I as b,T as v,b as w,R as y,c as j}from"./vendor.a31aa41b.js";const k=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function g(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=g(t);fetch(t.href,r)}};k();const L=n.div`
  color: #fafafa;
  text-align: center;
  padding: 10px;
`;function C(){return e(L,{children:e("h3",{children:"haneen mahdin"})})}const f=m`
  position: relative;
  color: #d1d1d1;
  text-decoration: none;
  margin: 0 8px;
  padding: 4px 8px;
  transition: 0.3s cubic-bezier(0.98, 0.07, 0.47, 0.74);
`,P=n.a`
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
`;function p(i){return e(P,{href:i.href,target:"_parent",referrerPolicy:"same-origin","aria-label":`Link to ${i.href} page`,children:i.text})}const I=n.nav`
  height: 100px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0;
`;class z extends h.exports.Component{render(){return o(I,{children:[e(C,{}),o("div",{style:{width:"auto",maxWidth:"100%"},children:[e(p,{href:"/",text:"projects"}),e(p,{href:"/",text:"about me"})]})]})}}const S=n.article`
    min-height: 90vh;
    max-width: 100vw;
    color: #fafafa;
`,N=n.div`
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
`,H=n.aside`
    padding: 10px 0;
    display: flex;
    align-items: flex-start;
`,a=n.a`
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
`;class M extends h.exports.Component{render(){return e(S,{children:o(N,{children:[e("h2",{children:"Hi, I'm Haneen \u{1F44B}"}),e("h4",{children:"An aspiring full-stack developer and a UI/UX Designer."}),o(H,{children:[e(a,{target:"_blank",href:"https://github.com/haneenmahd",children:e(u,{})}),e(a,{target:"_blank",href:"https://dribbble.com/haneenmahdin",children:e(x,{})}),e(a,{target:"_blank",href:"https://instagram.com/haneenmahdin",children:e(b,{})}),e(a,{target:"_blank",href:"https://twitter.com/HaneenMahdin",children:e(v,{})}),e(a,{href:"/projects",children:e(w,{})})]})]})})}}const $=n.div`
    height: 300px;
    width: 300px;
    background: #222;
    border-radius: 10px;
    box-shadow: 0;
    margin: 20px;
    overflow: hidden;
    transition: all .3s ;
    cursor: pointer;

    img {
        height: 200px;
        width: 100%;
    }

    &:hover {
        box-shadow: 0 30px 60px 0 #6d6d6d1f;
    }
`;function d(i){return e($,{children:e("img",{src:i.imgSource,alt:"Preview Image"})})}var A="/assets/emoji-plate.b553bc5f.png",O="/assets/hashable.27b43c1b.png",_="/assets/imagable.2a7b709f.png";const D=n.article`
    min-height: 100vh;
    max-width: 100vw;
    padding: 50px 10%;
    color: #fafafa;
`,E=n.div`
    text-align: left;

    * {
        margin: 6px 0;
    }

    h2 {
        font-size: 300%;
        font-weight: 800;
    }

    h4 {
        font-size: 100%;
        color: #c1c1c1;
        font-weight: 600;
    }
`,B=n.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    margin: 50px 0;
`;function F(){return o(D,{children:[o(E,{children:[e("h2",{children:"Projects \u{1F47E}"}),e("h4",{children:"Here are some of the projects that i have put hard-work, time, and dedication"})]}),o(B,{children:[e(d,{imgSource:A}),e(d,{imgSource:O}),e(d,{imgSource:_})]})]})}function R(){return o("div",{className:"App",children:[e(z,{}),e(M,{}),e(F,{})]})}y.render(e(j.StrictMode,{children:e(R,{})}),document.getElementById("root"));
