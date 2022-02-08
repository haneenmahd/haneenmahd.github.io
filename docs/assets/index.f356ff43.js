import{C as j,s as n,L as m,j as e,r as f,a as t,G as k,D as A,I as C,T as L,b as P,M as S,U as x,R as F,c as M,B as $,d as z,e as c,u as N,O as H}from"./vendor.3acc2cee.js";const R=function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))g(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const h of r.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&g(h)}).observe(document,{childList:!0,subtree:!0});function I(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function g(i){if(i.ep)return;i.ep=!0;const r=I(i);fetch(i.href,r)}};R();const l=j`
  position: relative;
  color: #d1d1d1;
  text-decoration: none;
  margin: 0 8px;
  padding: 4px 8px;
  transition: 0.3s cubic-bezier(0.98, 0.07, 0.47, 0.74);
`,T=n.div`
  padding: 10px;
`,B=n(m)`
  ${l}
  color: #fafafa;
  text-align: center;
`;function D(){return e(T,{children:e(B,{to:"/",children:e("h3",{children:"haneen mahdin"})})})}const E=n(m)`
  ${l}

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
`;function u(o){return e(E,{to:o.to,"aria-label":`Link to ${o.href} page`,children:o.text})}const O=n.nav`
  height: 100px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0;
  position: fixed; top: 0;
  background-color: #111;
  z-index: 1000;
`;class b extends f.exports.Component{render(){return t(O,{children:[e(D,{}),t("div",{style:{width:"auto",maxWidth:"100%"},children:[e(u,{to:"/projects",text:"projects"}),e(u,{to:"/about",text:"about me"})]})]})}}const U=n.aside`
  padding: 10px 0;
  display: flex;
  align-items: flex-start;
`,a=n.a`
  ${l}
  text-align: left;
  font-size: 24px;
  margin: 0;
  margin-right: 2.7%;

  svg {
    stroke: #d1d1d1;
    fill: #ffffff37;
    transition: 0.3s cubic-bezier(0.35, 0.07, 0.38, 1.01);
  }

  &:hover svg,
  :focus svg {
    stroke: #a9a9a9;
    fill: #fff;
    transform: scale(1.2);
  }
`;function w(){return t(U,{children:[e(a,{target:"_blank",href:"https://github.com/haneenmahd",children:e(k,{})}),e(a,{target:"_blank",href:"https://dribbble.com/haneenmahdin",children:e(A,{})}),e(a,{target:"_blank",href:"https://instagram.com/haneenmahdin",children:e(C,{})}),e(a,{target:"_blank",href:"https://twitter.com/HaneenMahdin",children:e(L,{})}),e(a,{href:"/projects",children:e(P,{})}),e(a,{target:"_blank",href:"mailto:haneenmahdin@gmail.com",children:e(S,{})})]})}const G=n.article`
    min-height: 90vh;
    max-width: 100vw;
    color: #fafafa;
    padding-top: 100px;
`,_=n.div`
    text-align: left;
    padding: 100px 10%;

    h2 {
        font-size: 350%;
        font-weight: 800;
        margin: 6px 0;
    }

    h4 {
        font-size: 120%;
        color: #c1c1c1;
        font-weight: 600;
        margin: 6px 0;
    }
`;class J extends f.exports.Component{render(){return e(G,{children:t(_,{children:[e("h2",{children:"Hi, I'm Haneen \u{1F44B}"}),e("h4",{children:"An aspiring full-stack developer and a UI/UX Designer."}),e(w,{})]})})}}const V=n.div`
    min-height: 300px;
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

    div {
        margin: 20px 0;
        padding: 0 0 0 20px;
    }
`,K=n.h4`
    font-size: 130%;
    font-weight: bold;
    text-align: left;
    margin: 0;
`,W=n.h4`
    font-size: 100%;
    font-weight: normal;
    text-align: left;
    padding: 7px 0;
    padding-right: 10px;
    color: #d1d1d1;
    margin: 0;
`;function p(o){return t(V,{children:[e("img",{src:o.imgSource,alt:"Preview Image"}),t("div",{children:[e(K,{children:o.title}),e(W,{children:o.description})]})]})}var X="/assets/emoji-plate.b553bc5f.png",q="/assets/hashable.27b43c1b.png",Q="/assets/imagable.2a7b709f.png";const Y=n.article`
    min-height: 100vh;
    max-width: 100vw;
    padding: 50px 10%;
    color: #fafafa;
`,Z=n.div`
    text-align: left;

    * {
        margin: 6px 0;
    }

    h2 {
        font-size: 300%;
        font-weight: 800;
    }

    h4 {
        font-size: 120%;
        color: #c1c1c1;
        font-weight: 600;
    }
`,ee=n.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    margin: 50px 0;
`,te=n.a`
    ${l}
    color: #166edc;
    font-weight: bold;

    &:hover {
        color: #2989ff;
    }
`;function v(){return t(Y,{children:[t(Z,{children:[e("h2",{children:"Projects \u{1F47E}"}),e("h4",{children:"Here are some of my works that i have put up my time, skills, and effort into \u{1F4AA}\u{1F3FB}."})]}),t(ee,{children:[e(p,{title:"Emoji Plate",description:"A collection of textual emojis and symbols",imgSource:X}),e(p,{title:"Hashable",description:"An open-source, client-side gateway for users to test out and access cryptographic functions and hashing methods. We also support a REST API which users can use to has on client-side Javascript Applications.",imgSource:q}),e(p,{title:"Imagable",description:"A Utility to resize and optimize your icons for all platforms instanly with one click \u{1F92F}!",imgSource:Q})]}),e(te,{href:"#",children:"> View all projects"})]})}var ne="/assets/pfp.b19ad75d.png";const ie=n.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-evenly;
  min-height: 100vh;
  max-width: 100vw;
  padding: 50px 7%;
  color: #fafafa;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`,oe=x`
    0% {
        opacity: 0.2;
    }

    50% {
        opacity: 0.8;
    }

    100% {
        opacity: 0.2;
    }
`,re=x`
    0% {
        box-shadow: 0 20px 20px 0 #7722cc76, 0 20px 20px 0 #2222cc76;
    }

    20% {
        box-shadow: 0 50px 20px 0 #7722cc76, 0 20px 20px 0 #2222cc76;
    }
    
    50% {
        box-shadow: 0 80px 40px 0 #7722cc46, 0 20px 20px 0 #2222cc46
    }

    60% {
        box-shadow: 0 50px 35px 0 #22c9cc46, 0 20px 20px 0 #2222cc76
    }

    85% {
        box-shadow: 0 50px 25px 0 #7722cc76, 0 20px 20px 0 #2222cc76
    }

    100% {
        box-shadow: 0 20px 20px 0 #7722cc76, 0 20px 20px 0 #2222cc76
    }
`,ae=n.aside`
  text-align: left;
  padding: 20px;
  max-width: 100%;

  * {
    margin: 6px 0;
  }

  h2 {
    font-weight: 800;
  }

  h4 {
    color: #c1c1c1;
    font-weight: 600;
    animation: ${oe} 3s ease-in infinite 1.2s;
  }

  img {
    height: 400px;
    width: 400px;
    margin: 20px 0;
    box-shadow: 0 20px 20px 0 #7722cc76, 0 20px 20px 0 #2222cc76;
    animation: ${re} 5s linear infinite;
    user-select: none;

    @media screen and (max-width: 600px) {
      max-width: 100%;
      height: auto;
    }
  }

  @media screen and (min-width: 820px) {
    position: -webkit-sticky;
    top: 100px;
  }
`,ce=n.aside`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (min-width: 700px) {
    margin-left: 20px;
  }
`,s=n.div`
  text-align: left;
  max-width: 100%;

  p {
    color: #c6c6c6;
    line-height: 1.45rem;
    font-weight: 600;
    margin: 10px 0;
    max-width: 90%;

    b {
      color: #d2d2d2;

      ::before,
      ::after {
        content: '"';
      }
    }
  }

  ul {
    padding-left: 20px;
    color: #c6c6c6;
    line-height: 1.45rem;
    font-weight: 600;
    margin: 20px 0;
    max-width: 90%;
  }
`;function y(){return t(ie,{children:[t(ae,{children:[e("h2",{children:"About Me"}),e("img",{src:ne,alt:"My Pic"})]}),t(ce,{children:[t(s,{children:[e("h3",{children:"Intro"}),e("p",{children:"Hello, I am Haneen Mahdin, an 14 year-old aspiring Full-stack Developer building awesome And cool things."})]}),t(s,{children:[e("h3",{children:"Journey"}),t("p",{children:["I was 12 years-old when i first got to code a cool website in HTML and CSS from a FreeCodeCamp.org's crash course. I was really interested in design at first."," ",e("b",{children:"I believed in that good design can make a product better"}),". I started to learn web development deeply by creating websites using"," ",e("b",{children:"React"}),". I learned ",e("b",{children:"UI/UX"})," Design later that year. Then I moved on to learning Backend Development with ",e("b",{children:"Node.js"})," with"," ",e("b",{children:"MongoDB"}),". Tried building my own APIs, failed a lot, but never gave up \u{1F4AA}\u{1F3FB}. I learned to build apps using ",e("b",{children:"React Native"})," and"," ",e("b",{children:"Expo"})," afterwards. I started re-searching about new and latest technologies and still continue to learn new things\u{1F603}!"]})]}),t(s,{children:[e("h3",{children:"Technologies I use \u{1F680}"}),t("ul",{children:[e("li",{children:"HTML, CSS, Javascript"}),e("li",{children:"React, Vite, Next.js, Styled Components, Sass"}),e("li",{children:"React Native, Expo"}),e("li",{children:"Node.js, MongoDB, Express"}),e("li",{children:"Python, C, C++"}),e("li",{children:"Swift (learning \u{1F60B})"}),e("li",{children:"VSCode, Git, GitHub"})]})]}),t(s,{children:[e("h3",{children:"Keep in touch \u{1F940}"}),t("p",{children:["I love to get to know more people in this Tech Community and am interested to join in your project or team or company. If you are interested to have a nice talk or something you can text me on"," ",e("i",{children:"Instagram"}),", ",e("i",{children:"Twitter"})," or get me a ",e("i",{children:"Mail"}),"."]}),e(w,{})]})]})]})}function le(){return t("div",{className:"App",children:[e(b,{}),e(J,{}),e(v,{}),e(y,{})]})}function se(){const o=N();return t("div",{className:`App ${o.pathname!=="/"&&"page"}`,children:[e(b,{}),e(H,{})]})}F.render(e(M.StrictMode,{children:e($,{children:e(z,{children:t(c,{path:"/",element:e(se,{}),children:[e(c,{index:!0,element:e(le,{})}),e(c,{path:"projects",element:e(v,{})}),e(c,{path:"about",element:e(y,{})})]})})})}),document.getElementById("root"));
