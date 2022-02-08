import{C as Y,s as i,L as d,j as e,r as p,a as A,G as C,D as W,I as S,T as b,b as j,M as E,c as U,F as M,U as x,d as k,R as y,e as v,B as Q,f as G,g as s,u as J,O as D}from"./vendor.8144d29f.js";const K=function(){const g=document.createElement("link").relList;if(g&&g.supports&&g.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))w(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const h of r.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&w(h)}).observe(document,{childList:!0,subtree:!0});function I(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function w(n){if(n.ep)return;n.ep=!0;const r=I(n);fetch(n.href,r)}};K();const l=Y`
  position: relative;
  color: #d1d1d1;
  text-decoration: none;
  margin: 0 8px;
  padding: 4px 8px;
  transition: 0.3s cubic-bezier(0.98, 0.07, 0.47, 0.74);
`,R=i.div`
  padding: 10px;
`,P=i(d)`
  ${l}
  color: #fafafa;
  text-align: center;
`;function H(){return e(R,{children:e(P,{to:"/",children:e("h3",{children:"haneen mahdin"})})})}const O=i(d)`
  ${l}

  &::before {
    content: " ";
    position: absolute; 
    bottom: -5px;
    height: 2px; width: 0%;
    background: #eee;
    transition: .3s cubic-bezier(0.98, 0.07, 0.47, 0.74);
  }

  &:hover::before, :active::before {
    width: 80%;
  }

  &:hover, :active {
    color: #eee;
  }
`;function m(t){return e(O,{to:t.to,"aria-label":`Link to ${t.href} page`,children:t.text})}const T=i.nav`
  height: 100px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0;
  position: fixed; top: 0;
  background-color: #111;
  z-index: 1000;
`;class B extends p.exports.Component{render(){return A(T,{children:[e(H,{}),A("div",{style:{width:"auto",maxWidth:"100%"},children:[e(m,{to:"/projects",text:"projects"}),e(m,{to:"/about",text:"about me"})]})]})}}const z=i.aside`
  padding: 10px 0;
  display: flex;
  align-items: flex-start;
`,a=i.a`
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
`;function f(){return A(z,{children:[e(a,{target:"_blank",href:"https://github.com/haneenmahd",children:e(C,{})}),e(a,{target:"_blank",href:"https://dribbble.com/haneenmahdin",children:e(W,{})}),e(a,{target:"_blank",href:"https://instagram.com/haneenmahdin",children:e(S,{})}),e(a,{target:"_blank",href:"https://twitter.com/HaneenMahdin",children:e(b,{})}),e(a,{href:"/projects",children:e(j,{})}),e(a,{target:"_blank",href:"mailto:haneenmahdin@gmail.com",children:e(E,{})})]})}const V=i.article`
    min-height: 90vh;
    max-width: 100vw;
    color: #fafafa;
    padding-top: 100px;
`,N=i.div`
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
`;class X extends p.exports.Component{render(){return e(V,{children:A(N,{children:[e("h2",{children:"Hi, I'm Haneen \u{1F44B}"}),e("h4",{children:"An aspiring full-stack developer and a UI/UX Designer."}),e(f,{})]})})}}const $=i.div`
    min-height: 300px;
    width: 300px;
    background: #222;
    border-radius: 10px;
    box-shadow: 0;
    margin: 20px;
    overflow: hidden;
    user-select: none;
    transition: all .3s;

    img {
        height: 200px;
        max-width: 100%;
    }

    &:hover {
        box-shadow: 0 30px 60px 0 #6d6d6d1f;
    }

    div {
        margin: 20px 0;
        padding: 0 0 0 20px;
    }

    button {
        margin-bottom: 20px;
    }
`,q=i.h4`
    font-size: 130%;
    font-weight: bold;
    text-align: left;
    margin: 0;
`,_=i.h4`
    font-size: 100%;
    font-weight: normal;
    text-align: left;
    padding: 7px 0;
    padding-right: 10px;
    color: #d1d1d1;
    margin: 0;
`,Z=i.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`,L=i.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  margin: 12px;
  text-decoration: none;
  max-width: 90px;
  background: ${t=>t.secondary?"#4d4d4d":"#166edc"};
  border: none;
  border-radius: 10px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  color: #fafafa;
  transition: all 0.3s;

  svg {
    height: 16px;
    width: 16px;
    margin-right: 5px;
  }

  :active {
    transform: translateY(5px);
  }
`;function o(t){return A($,{children:[e("img",{src:t.imgSource,alt:"Preview Image"}),A("div",{children:[e(q,{children:t.title}),e(_,{children:t.description})]}),A(Z,{children:[A(L,{target:"_blank",href:t.projectLink,children:[e(U,{})," View"]}),t.githubUrl&&A(L,{target:"_blank",href:t.githubUrl,secondary:!0,children:[e(C,{})," GitHub"]})]})]})}var ee="/assets/emoji-plate.b553bc5f.png",Ae="/assets/hashable.a4cc3a72.png",te="/assets/imagable.d420f47e.png",ie="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABLAAAAHTCAMAAAAApxGuAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAOVBMVEUAAADRTUzdgH7XZGTijY334+Ppqan12dn99/fnqKjUWVjzzs766+vlnJrLODjLODfLOTfLODf///9SLzeHAAAAEXRSTlMA6czYx8fBw9jB4MHLw0nDq34XYU8AAAABYktHRBJ7vGwAAAAAB3RJTUUH4QgJAC4j9dQekgAACeJJREFUeNrt1dkVgkAQRUEQFNyX/IP1B0ygh3Papm4GTPvK7i1Jf1LnCSQBS5KAJQlYkgQsSQKWJGBJErAkCViSgCVJwJIkYEkCliQBS5KAJQlYkgQsSQKWJGBJErAkCViSgCVJwJIkYEkCliQBS5KAJQlYkgQsScCSJGBJErAkAUuSgCVJwJIELEkCliQBSxKwJAlYkgQsScCSJGBJErAkAUuSgCVJwJIELEkCliQBSxKwJAlYkgQsScCSJGBJErAkAUuSgCUJWJIELEkCliRgSRKwJAlYkoAlSUXB6g9a6uOv6RHXhvhjDl6x2j4agDV+tDTGX9Mjrh3jj3n0itX2ASxgAUvAchBgAUvAAhawgAUsYAELWAKWgwALWAIWsIAFLGABC1jAErAcBFjAsg9gAQtYwAIWsIAFLAHLQYAFLPsAFrCABSxgAQtYwBKwHARYwLIPYAELWMACFrCABSwBy0GABSz7ABawgCVgAQtYwBKwHMQjAss+gAUsYAlYwAIWsAQsYAELWPYBLGABS8ASsIAlYAELWMCyD2ABC1gCloMAC1gCFrCABSxgAQtYwBKwHARYwBKwgAUsYAELWMACloDlIMACloAFLGABC1jAAhawBCwHARaw7ANYwAIWsIAFLGABS8ByEGAByz6ABSxgAQtYwAIWsAQsBwEWsOwDWMACFrCABSxgAUvAchBgAcs+gAUsYAlYwAIWsAQsYAlY9gEsYAFLwAIWsIAlYAELWMCyD2ABC1gCloAFLAELWMACln0AC1jAErAcBFjAErCABSxgAQtYwAKWgOUgwAKWgAUsYAELWMACFrAELAcBFrAELGABC1jAAhawgCVgbdkp3ASstSn+msBam+OPOdtHObBSfEcVsFJ8RxWwcnxHlX0AC1jAAhawgAUsYAELWMACFrCABSxgAQtYwAIWsIAFLGABC1jAAhawgAUsYAELWMACFrCABSxgAQtYwAIWsIAFLGABC1jAAhawgAUsYAELWMACFrCABSxgAQtYwAIWsIAFLGABC1jAAhawgAUsYAELWMACFrCABSxgActBgAUsYAELWMACFrCABSxgAQtYwAIWsIAFLGABC1jAAhawgAUsYAELWMCyD2ABC1jAAhawgAUsYAELWMACFrCABSxgAQtYwAIWsIAFLGABC1jAAhawgAUsYAELWMACFrCABSxgAQtYwAIWsIAFLGABC1jAAhawgAUsYAELWMACFrCABSxgAQtYwAIWsIAFLGABC1jAAhawgAUsYAELWMACFrCABSxgOQiwgAUsYAELWMACFrCABSxgAQtYwAIWsIAFLGABC1jAAhawgAUsYAELWMACFrCABSxgAQtYwAIWsIAFLGDZB7CABSxgAQtYwAIWsIAFLGABC1jAAhawgAUsYAELWMACFrCABSxgAQtYwAIWsIAFLGABC1jAAhawgAUsYAELWMACFrCABSxgAQtYwAIWsIAFLGABC1jAAhawgAUsYAELWMACFrCABSxgAQtYwAIWsIAFLGABC1jAAhawHARYwAIWsIAFLGABC1jAAhawgAUsYAELWMACFrCABSxgAQtYwAIWsIAFLGABC1jAAhawgAUsYAELWMACFrDsA1jAAhawgAUsYAELWMACFrCABSxgAQtYwAIWsIAFLGABC1jAAhawgAUsYAELWMACFrCABSxgAQtYwAIWsIAFLGABC1jAAhawgAUsYAELWMACFrCABSxgAQtYwAIWsIAFLGABC1jAAhawgAUsYAELWMACFrCABSxgAQtYDgIsYAELWMACFrCABSxgAQtYwAIWsIAFLGABC1jAAhawgAUsYAELWMACFrCABSxgAQtYwAIWsIAFLGABC1j2ASxgAQtYwAIWsIAFLGABC1jAAhawgAUsYAELWMACFrCABSxgAQtYwAIWsIAFLGABC1jAAhawgAUsYAELWMACFrCABSxgAQtYwAIWsIAFLGABC1jAAhawgAUsYAELWMACFrCABSxgAQtYwAIWsIAFLGABC1jA2gFY50s4YAELWMDaUcACFrCABSxgAQtYwAIWsIAFLGABC1jAAhawgAUsYAELWMACFrCABSz7ABawgAUsYAELWMACFrCABSxgAQtYwAIWsIAFLGABC1jAAhawgAUsYAELWMACFrCABSxgAQtYwAIWsIAFLEMHFrCABSxgAQtYwAIWsIAFLGABC1jAAhawgAUsYAELWMACFrCABSxgAQtYwAIWsIAFLGD5DmABC1jAAhawHARUwAIWsIAFLGABC1jAAhawgAUsYAELWMACFrCABSxgAQtYwAIWsIAFLPsAFrCABSxgAQtYwAIWsIAFLGABC1jAAhawgAUsYAELWMACFrCABSxgAQtYwAIWsIAFLGABC1jAAhawgAUsQwcWsIAFLGABC1jAAhawgAUsYAELWMACFrCABSxgAQtYwAIWsIAFLGABC1jAAhawgAUsYAELWMACFrCABSwHARawgAUsYAHLdwALWMACFrCABSwBC1jAAhawgAUsYAELWMACFrCABSxgAQtYwAIWsIAFLGABC1jAAhaw7ANYwAIWsIAFLGABC1jAAhawgAUsYAELWMDaD1jDNUMpvmMoAtYtw0Xv8ce8+45q+2gAllqWAqzRHZQzYAELWAKWgCUBC1jAErAELGAJWAKWBCxgAUvAErCAJWAJWBKwgAUsAUvAkoAlYEnAAhawBCwBSwKWgCUBC1jAErAELAlYApYELGABS8ASsCRgCVgSsIAFLAFLwJKABSxgScACFrAELAFLAhawgCUBC1jAErAELAlYwAKWgOUJgAUsAUvAkoAFLGAJWAIWsAQsAUsCFrCAJWAJWO4gYAlYErCABSwBS8CSgCVgScACFrAELAFLApaAJQELWMASsAQsCVgClgQsYAFLwBKwJGABC1gSsIAFLAFLwJKABSxgScACFrAELAFLAhawgCUBC1jAErAELAlYwAKWgCVgAUvAErAkYAELWAKWgAUsAUvAkoAFLGAJWAKWlBOsh9r1jB/kkKE+/h1+DNqiTg17+Qf8/RNKAhawJAELWBKwgCUJWMCSBCxgScACliRgAUsSsIAlAQtYkoAFLEnAApYELGBJAhawJAELWBKwgCUJWMCSBCxgScACliRgAUsSsIAlAQtYkoAFLEnAApYELGBJAhawJGAJWBKwgCUJWMCSgAUsScACliRgAUsCFrAkAQtYkoAFLAlYwJIELGBJAhawJGABSxKwgCUJWMCSgAUsScACliRgAUsCFrAkAQtYkoAFLAlYwJIELGBJAhawJGABSxKwgCUJWMCSgAUsScAClgQsAUsCFrAkAQtYErCAJQlYwJIELGBJwAKWJGABSxKwgCUBC1iSgAUs7aUvda6964aXmagAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTctMDgtMDlUMDA6NDY6MzUrMDA6MDCqCllVAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE3LTA4LTA5VDAwOjQ2OjM1KzAwOjAw21fh6QAAAABJRU5ErkJggg==",ne="/assets/apple-colors.324fed04.jpeg",re="/assets/python-icon.976ee9a0.png";const ae=i.article`
    min-height: 100vh;
    max-width: 100vw;
    padding: 50px 10%;
    color: #fafafa;
`,oe=i.div`
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
`,se=i.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    margin: 50px 0;
`,le=i(d)`
    ${l}
    color: #166edc;
    border-radius: 10px;
    padding: 10px 20px;
    font-weight: bold;

    &:hover {
        color: #2989ff;
        background: #2989ff20;
    }
`;function u(t){return A(ae,{children:[A(oe,{children:[e("h2",{children:"Projects \u{1F47E}"}),e("h4",{children:"Here are some of my works that i have put up my time, skills, and effort into \u{1F4AA}\u{1F3FB}."})]}),A(se,{children:[e(o,{title:"Imagable",description:"A Utility to resize and optimize your icons for all platforms instanly with one click \u{1F92F}!",imgSource:te,projectLink:"https://imagable.vercel.app",githubUrl:"https://github.com/imagable/imagable"}),e(o,{title:"Emoji Plate",description:"A collection of textual emojis and symbols",imgSource:ee,projectLink:"https://emoji-plate.netlify.app",githubUrl:"https://github.com/emoji-plate/client"}),e(o,{title:"Hashable",description:"An API to access high-level crypto functions inside your browser \u2620\uFE0F!",imgSource:Ae,projectLink:"https://hashable.space",githubUrl:"https://github.com/haneenmahd/hashable"}),t.showMoreLinks||A(M,{children:[e(o,{title:"typeinstall",description:"Automatically installs types for your typescript project",imgSource:ie,projectLink:"https://www.npmjs.com/package/typeinstall",githubUrl:"https://github.com/haneenmahd/typeinstall"}),e(o,{title:"apple-colors",description:"A Package for using Colors in your User Interace with colors used by apple\u{1F34E}",imgSource:ne,projectLink:"https://www.npmjs.com/package/typeinstall",githubUrl:"https://github.com/haneenmahd/typeinstall"}),e(o,{title:"blobby",description:"Convert Image Files into Supported Pdf Format",imgSource:re,projectLink:"https://www.npmjs.com/package/typeinstall",githubUrl:"https://github.com/haneenmahd/typeinstall"})]})]}),t.showMoreLinks&&e(le,{to:"/projects",children:"> View all projects"})]})}var ce="/assets/pfp.b19ad75d.png";const ge=i.div`
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
`,he=x`
    0% {
        opacity: 0.2;
    }

    50% {
        opacity: 0.8;
    }

    100% {
        opacity: 0.2;
    }
`,de=x`
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
`,pe=i.aside`
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
    animation: ${he} 3s ease-in infinite 1.2s;
  }

  img {
    height: 400px;
    width: 400px;
    margin: 20px 0;
    box-shadow: 0 20px 20px 0 #7722cc76, 0 20px 20px 0 #2222cc76;
    animation: ${de} 5s linear infinite;
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
`,we=i.aside`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (min-width: 700px) {
    margin-left: 20px;
  }
`,c=i.div`
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
`;function F(){return A(ge,{children:[A(pe,{children:[e("h2",{children:"About Me"}),e("img",{src:ce,alt:"My Pic"})]}),A(we,{children:[A(c,{children:[e("h3",{children:"Intro"}),e("p",{children:"Hello, I am Haneen Mahdin, an 14 year-old aspiring Full-stack Developer building awesome And cool things."})]}),A(c,{children:[e("h3",{children:"Journey"}),A("p",{children:["I was 12 years-old when i first got to code a cool website in HTML and CSS from a FreeCodeCamp.org's crash course. I was really interested in design at first."," ",e("b",{children:"I believed in that good design can make a product better"}),". I started to learn web development deeply by creating websites using"," ",e("b",{children:"React"}),". I learned ",e("b",{children:"UI/UX"})," Design later that year. Then I moved on to learning Backend Development with ",e("b",{children:"Node.js"})," with"," ",e("b",{children:"MongoDB"}),". Tried building my own APIs, failed a lot, but never gave up \u{1F4AA}\u{1F3FB}. I learned to build apps using ",e("b",{children:"React Native"})," and"," ",e("b",{children:"Expo"})," afterwards. I started re-searching about new and latest technologies and still continue to learn new things\u{1F603}!"]})]}),A(c,{children:[e("h3",{children:"Technologies I use \u{1F680}"}),A("ul",{children:[e("li",{children:"HTML, CSS, Javascript"}),e("li",{children:"React, Vite, Next.js, Styled Components, Sass"}),e("li",{children:"React Native, Expo"}),e("li",{children:"Node.js, MongoDB, Express"}),e("li",{children:"Python, C, C++"}),e("li",{children:"Swift (learning \u{1F60B})"}),e("li",{children:"VSCode, Git, GitHub"})]})]}),A(c,{children:[e("h3",{children:"Keep in touch \u{1F940}"}),A("p",{children:["I love to get to know more people in this Tech Community and am interested to join in your project or team or company. If you are interested to have a nice talk or something you can text me on"," ",e("i",{children:"Instagram"}),", ",e("i",{children:"Twitter"})," or get me a ",e("i",{children:"Mail"}),"."]}),e(f,{})]})]})]})}function Ce(){return A("div",{className:"App",children:[e(B,{}),e(X,{}),e(u,{showMoreLinks:!0}),e(F,{})]})}k.polyfill();function xe(){const t=J();return p.exports.useEffect(()=>{window.scrollTo(0,0)},[t.pathname]),A("div",{className:`App ${t.pathname!=="/"&&"page"}`,children:[e(B,{}),e(D,{})]})}y.render(e(v.StrictMode,{children:e(Q,{children:e(G,{children:A(s,{path:"/",element:e(xe,{}),children:[e(s,{index:!0,element:e(Ce,{})}),e(s,{path:"projects",element:e(u,{})}),e(s,{path:"about",element:e(F,{})})]})})})}),document.getElementById("root"));
