import{j as p,s as o,R as h,a as C}from"./vendor.d8d1d1c8.js";const u=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function f(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(t){if(t.ep)return;t.ep=!0;const i=f(t);fetch(t.href,i)}};u();var x="/assets/blob.12b5a38a.svg";var g="/assets/Avatar.500e548d.png";const e=p.exports.jsx,r=p.exports.jsxs,m=n=>e("svg",{width:"25",height:"26",viewBox:"0 0 25 26",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{id:"main-path",d:"M21.7048 0.671653L1.40305 10.0418C-0.939237 11.135 -0.158475 14.5706 2.34006 14.5706H10.9294V23.1599C10.9294 25.6585 14.365 26.4397 15.4582 24.0969L24.8283 3.79519C25.6091 1.92068 23.5788 -0.109597 21.7048 0.671653V0.671653Z",fill:"white"})}),w=o.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 30px;
    background: rgba(255, 255, 255, 0.13);
    backdrop-filter: blur(50px);
    -webkit-backdrop-filter: blur(50px);
    border-radius: 63px;
    border: none;
    outline: none;
    cursor: pointer;
    margin: 20px 0;
    border: 3px solid transparent;
    transition: all .3s ease-in-out;
    
    p {
        color: #fff;
        font-size: 22px;
        margin: 0 10px;
    }

    &:hover {
        background: rgba(255, 255, 255, 0.262);
        box-shadow: 0px 23px 65px rgba(0, 0, 0, 0.14);
        border: 3px solid #ffffff75;
    }

    @media screen and (max-width: 600px) {
        p {
            font-size: 20px;
        }
    }
`,b=()=>r(w,{children:[e(m,{}),e("p",{children:"My awesome works \u{1F389}!"})]}),v=o.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 100px 234px;

    * {
        margin: 8px 0;
    }

    @media screen and (max-width: 1250px) {
        background: rgba(0, 0, 0, 0.338);
        backdrop-filter: blur(50px);
        -webkit-backdrop-filter: blur(50px);
    }

    @media screen and (max-width: 900px) {
        padding: 10%;
    }
`,_=o.img`
    height: 290px;
    width: 290px;
    border-radius: 100%;
    filter: drop-shadow(0px 19px 29px rgba(0, 0, 0, 0.12));
`,c=o.h1`
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 60px;

    color: #FFFFFF;

    text-shadow: 0px 19px 18px rgba(0, 0, 0, 0.02);
`,y=o(c)`
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 35px;
    text-align: center;

    color: #e3e3e3;
`;function M(){return r(v,{children:[e(_,{src:g,alt:"Haneen Mahdin's Avatar"}),e(c,{children:"Hello, I am Haneen Mahdin"}),e(y,{children:"I am a great hardworker who practices constantly to build and produce great piece of software. I have worked around with Full stack Applications for a long time and I am a OpenSource developer too."}),e(b,{})]})}const k=n=>r("svg",{width:"84",height:"91",viewBox:"0 0 84 91",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("g",{filter:"url(#filter0_d_1_38)",children:e("path",{id:"main-path",d:"M50.6617 39.975C50.6617 41.8355 49.2989 43.3605 47.5726 43.3605C45.8766 43.3605 44.4834 41.8355 44.4834 39.975C44.4834 38.1145 45.8463 36.5895 47.5726 36.5895C49.2989 36.5895 50.6617 38.1145 50.6617 39.975ZM36.5183 36.5895C34.792 36.5895 33.4291 38.1145 33.4291 39.975C33.4291 41.8355 34.8223 43.3605 36.5183 43.3605C38.2446 43.3605 39.6074 41.8355 39.6074 39.975C39.6377 38.1145 38.2446 36.5895 36.5183 36.5895ZM68.5 17.283V72C60.8701 65.2097 63.3103 67.4574 54.4474 59.1595L56.0526 64.802H21.7086C18.2863 64.802 15.5 61.996 15.5 58.519V17.283C15.5 13.806 18.2863 11 21.7086 11H62.2914C65.7137 11 68.5 13.806 68.5 17.283ZM59.8686 46.197C59.8686 36.376 55.5074 28.4155 55.5074 28.4155C51.1463 25.1215 46.9971 25.213 46.9971 25.213L46.5731 25.701C51.7217 27.287 54.1143 29.5745 54.1143 29.5745C46.9201 25.6037 38.4693 25.6029 31.4909 28.69C30.3703 29.2085 29.704 29.5745 29.704 29.5745C29.704 29.5745 32.2177 27.165 37.6691 25.579L37.3663 25.213C37.3663 25.213 33.2171 25.1215 28.856 28.4155C28.856 28.4155 24.4949 36.376 24.4949 46.197C24.4949 46.197 27.0389 50.6195 33.732 50.833C33.732 50.833 34.8526 49.4605 35.7611 48.3015C31.9149 47.1425 30.4611 44.7025 30.4611 44.7025C30.9067 45.0166 31.6413 45.4237 31.7029 45.465C36.8148 48.348 44.076 49.2925 50.6011 46.5325C51.6611 46.136 52.8423 45.5565 54.084 44.733C54.084 44.733 52.5697 47.234 48.6023 48.3625C49.5109 49.5215 50.6011 50.833 50.6011 50.833C57.2943 50.6195 59.8686 46.197 59.8686 46.197V46.197Z",fill:"white"})}),e("defs",{children:r("filter",{id:"filter0_d_1_38",x:"0.5",y:"0",width:"83",height:"91",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB",children:[e("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"}),e("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),e("feOffset",{dy:"4"}),e("feGaussianBlur",{stdDeviation:"7.5"}),e("feComposite",{in2:"hardAlpha",operator:"out"}),e("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"}),e("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_1_38"}),e("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_1_38",result:"shape"})]})})]}),B=n=>r("svg",{width:"80",height:"79",viewBox:"0 0 80 79",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("g",{filter:"url(#filter0_d_1_42)",children:e("path",{id:"main-path",d:"M31.8893 50.4547C31.8893 50.6574 31.6621 50.8195 31.3756 50.8195C31.0496 50.8499 30.8224 50.6878 30.8224 50.4547C30.8224 50.2521 31.0496 50.09 31.3361 50.09C31.6325 50.0596 31.8893 50.2217 31.8893 50.4547ZM28.8169 49.9988C28.7478 50.2014 28.9454 50.4345 29.2417 50.4953C29.4986 50.5966 29.795 50.4953 29.8542 50.2926C29.9135 50.09 29.7258 49.8569 29.4294 49.7657C29.1726 49.6948 28.8861 49.7961 28.8169 49.9988ZM33.1835 49.8265C32.897 49.8975 32.6994 50.09 32.729 50.323C32.7587 50.5257 33.0155 50.6574 33.3119 50.5864C33.5984 50.5155 33.796 50.323 33.7663 50.1204C33.7367 49.9279 33.47 49.7961 33.1835 49.8265ZM39.6839 11C25.9817 11 15.5 21.6692 15.5 35.7225C15.5 46.9591 22.3956 56.5746 32.245 59.9587C33.5095 60.1918 33.954 59.3913 33.954 58.7327C33.954 58.1045 33.9244 54.6393 33.9244 52.5116C33.9244 52.5116 27.0091 54.0314 25.5569 49.4922C25.5569 49.4922 24.4306 46.5437 22.8105 45.7838C22.8105 45.7838 20.5482 44.193 22.9685 44.2234C22.9685 44.2234 25.4284 44.4261 26.7819 46.8375C28.9454 50.7486 32.571 49.6239 33.9837 48.9552C34.2109 47.334 34.853 46.2093 35.5643 45.5406C30.0419 44.9124 24.4702 44.0917 24.4702 34.3446C24.4702 31.5582 25.221 30.16 26.8016 28.3767C26.5448 27.7181 25.705 25.0027 27.0585 21.4969C29.1232 20.8384 33.875 24.2326 33.875 24.2326C35.8508 23.6652 37.9748 23.3714 40.079 23.3714C42.1833 23.3714 44.3073 23.6652 46.2831 24.2326C46.2831 24.2326 51.0349 20.8282 53.0996 21.4969C54.453 25.0128 53.6133 27.7181 53.3565 28.3767C54.9371 30.1701 55.9052 31.5683 55.9052 34.3446C55.9052 44.1221 50.0865 44.9023 44.5641 45.5406C45.473 46.3411 46.2436 47.8609 46.2436 50.2419C46.2436 53.6565 46.2139 57.8816 46.2139 58.7125C46.2139 59.371 46.6683 60.1715 47.923 59.9385C57.802 56.5746 64.5 46.9591 64.5 35.7225C64.5 21.6692 53.3861 11 39.6839 11ZM25.1024 45.9459C24.974 46.0472 25.0036 46.2803 25.1716 46.4728C25.3296 46.6349 25.5569 46.7058 25.6853 46.5741C25.8137 46.4728 25.7841 46.2397 25.6161 46.0472C25.4581 45.8851 25.2308 45.8142 25.1024 45.9459ZM24.0355 45.1252C23.9663 45.2569 24.0651 45.419 24.2627 45.5204C24.4208 45.6217 24.6183 45.5913 24.6875 45.4494C24.7567 45.3177 24.6579 45.1556 24.4603 45.0543C24.2627 44.9935 24.1046 45.0239 24.0355 45.1252ZM27.2363 48.7323C27.0782 48.864 27.1375 49.1679 27.3647 49.3605C27.5919 49.5935 27.8784 49.6239 28.0069 49.4618C28.1353 49.3301 28.076 49.0261 27.8784 48.8336C27.6611 48.6005 27.3647 48.5701 27.2363 48.7323ZM26.1101 47.2428C25.952 47.3441 25.952 47.6076 26.1101 47.8406C26.2681 48.0737 26.5349 48.175 26.6633 48.0737C26.8214 47.9419 26.8214 47.6785 26.6633 47.4455C26.525 47.2124 26.2681 47.1111 26.1101 47.2428Z",fill:"white"})}),e("defs",{children:r("filter",{id:"filter0_d_1_42",x:"0.5",y:"0",width:"79",height:"79",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[e("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"}),e("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),e("feOffset",{dy:"4"}),e("feGaussianBlur",{stdDeviation:"7.5"}),e("feComposite",{in2:"hardAlpha",operator:"out"}),e("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"}),e("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_1_42"}),e("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_1_42",result:"shape"})]})})]}),S=n=>r("svg",{width:"80",height:"79",viewBox:"0 0 80 79",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("g",{filter:"url(#filter0_d_1_40)",children:e("path",{id:"main-path",d:"M40.0055 22.937C33.0531 22.937 27.4453 28.5461 27.4453 35.5C27.4453 42.4539 33.0531 48.063 40.0055 48.063C46.9578 48.063 52.5656 42.4539 52.5656 35.5C52.5656 28.5461 46.9578 22.937 40.0055 22.937ZM40.0055 43.6676C35.5127 43.6676 31.8397 40.0047 31.8397 35.5C31.8397 30.9953 35.5017 27.3324 40.0055 27.3324C44.5092 27.3324 48.1712 30.9953 48.1712 35.5C48.1712 40.0047 44.4983 43.6676 40.0055 43.6676V43.6676ZM56.009 22.4231C56.009 24.0523 54.6973 25.3534 53.0794 25.3534C51.4506 25.3534 50.1498 24.0413 50.1498 22.4231C50.1498 20.8049 51.4616 19.4929 53.0794 19.4929C54.6973 19.4929 56.009 20.8049 56.009 22.4231ZM64.3278 25.3971C64.142 21.4719 63.2456 17.9949 60.3707 15.1303C57.5066 12.2656 54.0305 11.369 50.1061 11.1722C46.0615 10.9426 33.9385 10.9426 29.8939 11.1722C25.9805 11.3581 22.5043 12.2547 19.6293 15.1193C16.7544 17.984 15.8689 21.461 15.6722 25.3862C15.4426 29.4317 15.4426 41.5573 15.6722 45.6029C15.858 49.5281 16.7544 53.0051 19.6293 55.8697C22.5043 58.7344 25.9695 59.631 29.8939 59.8278C33.9385 60.0574 46.0615 60.0574 50.1061 59.8278C54.0305 59.6419 57.5066 58.7453 60.3707 55.8697C63.2347 53.0051 64.1311 49.5281 64.3278 45.6029C64.5574 41.5573 64.5574 29.4427 64.3278 25.3971V25.3971ZM59.1026 49.9436C58.25 52.0866 56.5993 53.7376 54.4458 54.6014C51.2211 55.8807 43.5691 55.5855 40.0055 55.5855C36.4418 55.5855 28.7789 55.8697 25.5651 54.6014C23.4225 53.7486 21.7719 52.0976 20.9083 49.9436C19.6293 46.7181 19.9245 39.0644 19.9245 35.5C19.9245 31.9356 19.6403 24.2709 20.9083 21.0564C21.761 18.9134 23.4116 17.2624 25.5651 16.3986C28.7898 15.1193 36.4418 15.4145 40.0055 15.4145C43.5691 15.4145 51.232 15.1303 54.4458 16.3986C56.5884 17.2514 58.239 18.9024 59.1026 21.0564C60.3816 24.2819 60.0864 31.9356 60.0864 35.5C60.0864 39.0644 60.3816 46.7291 59.1026 49.9436Z",fill:"white"})}),e("defs",{children:r("filter",{id:"filter0_d_1_40",x:"0.5",y:"0",width:"79",height:"79",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB",children:[e("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"}),e("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),e("feOffset",{dy:"4"}),e("feGaussianBlur",{stdDeviation:"7.5"}),e("feComposite",{in2:"hardAlpha",operator:"out"}),e("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"}),e("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_1_40"}),e("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_1_40",result:"shape"})]})})]}),F=n=>r("svg",{width:"86",height:"79",viewBox:"0 0 86 79",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("g",{filter:"url(#filter0_d_1_44)",children:e("path",{id:"main-path",d:"M65.2438 23.2117C65.2793 23.7476 65.2793 24.2836 65.2793 24.8195C65.2793 41.1655 53.7312 60 32.6244 60C26.1218 60 20.0813 57.971 15 54.4493C15.9239 54.564 16.8121 54.6023 17.7716 54.6023C23.137 54.6023 28.0762 52.6501 32.0203 49.3196C26.9746 49.2047 22.7462 45.6446 21.2893 40.7445C22 40.8593 22.7106 40.9359 23.4569 40.9359C24.4873 40.9359 25.5179 40.7827 26.4772 40.5149C21.2183 39.3663 17.274 34.3898 17.274 28.3797V28.2266C18.8019 29.1454 20.5787 29.7196 22.4618 29.796C19.3704 27.5757 17.3451 23.7859 17.3451 19.4984C17.3451 17.2015 17.9135 15.096 18.9085 13.2585C24.5583 20.7617 33.0508 25.6616 42.5735 26.1976C42.3959 25.2788 42.2893 24.3219 42.2893 23.3649C42.2893 16.5507 47.4061 11 53.7665 11C57.071 11 60.0558 12.493 62.1523 14.9047C64.7461 14.3688 67.2334 13.3351 69.4366 11.9188C68.5837 14.7899 66.7715 17.2016 64.3909 18.7328C66.7006 18.4649 68.9391 17.7757 71 16.8188C69.4368 19.2687 67.4824 21.4506 65.2438 23.2117V23.2117Z",fill:"white"})}),e("defs",{children:r("filter",{id:"filter0_d_1_44",x:"0",y:"0",width:"86",height:"79",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB",children:[e("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"}),e("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),e("feOffset",{dy:"4"}),e("feGaussianBlur",{stdDeviation:"7.5"}),e("feComposite",{in2:"hardAlpha",operator:"out"}),e("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"}),e("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_1_44"}),e("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_1_44",result:"shape"})]})})]}),A=o.div`
    position: fixed;
    top: 50%;
    left: 0;
    transform: translate(0%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 74px 39px;
    background: rgba(255, 255, 255, 0.17);
    backdrop-filter: blur(50px);
    -webkit-backdrop-filter: blur(50px);
    border-radius: 0px 50px 50px 0px;
    z-index: 100;
    box-shadow: 0px 23px 65px rgba(0, 0, 0, 0.14);

    @media screen and (max-width: 900px) {
        position: relative;
        top: 0;
        left: 50%;
        transform: translate(-50%, 0%);
        border-radius: 0;
        width: 100vw;
        padding: 0;
        justify-content: space-around;
        flex-direction: row;
    }
`,a=o.a`
    text-decoration: none;
    color: inherit;
    margin: 30px 0;

    svg path#main-path {
        fill: #e4e4e4;
        transition: all .3s ease-in-out;
    }

    &:hover {
        svg path#main-path {
            fill: #fff;
        }
    }

    @media screen and (max-width: 600px) {
        svg {
            height: 50px; width: 50px;
        }   
    }
`;function Z(){return r(A,{children:[e(a,{target:"_blank",href:"https://discord.com",children:e(k,{})}),e(a,{target:"_blank",href:"https://github.com/haneenmahd",children:e(B,{})}),e(a,{target:"_blank",href:"https://instagram.com/haneenmahdin",children:e(S,{})}),e(a,{target:"_blank",href:"https://twitter.com/HaneenMahdin",children:e(F,{})})]})}const I=o.img`
  height: auto;
  width: 100vw;
  z-index: -1;
  position: absolute;
  top: 0; left: 0;
`;function O(){return r("div",{className:"App",children:[e(I,{src:x,alt:"Background blob"}),e(Z,{}),e(M,{})]})}h.render(e(C.StrictMode,{children:e(O,{})}),document.getElementById("root"));
