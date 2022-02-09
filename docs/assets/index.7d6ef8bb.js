import {
  C as Y,
  s as n,
  L as x,
  j as t,
  M as S,
  S as W,
  r as d,
  a as r,
  G as u,
  D as U,
  I as j,
  T as E,
  b as v,
  c as y,
  d as M,
  u as w,
  F as Q,
  U as B,
  e as G,
  R as J,
  f as T,
  B as $,
  g as D,
  h as g,
  i as K,
  O as R,
} from './vendor.d377c6ad.js'
const P = function () {
  const i = document.createElement('link').relList
  if (i && i.supports && i.supports('modulepreload')) return
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) s(o)
  new MutationObserver((o) => {
    for (const l of o)
      if (l.type === 'childList')
        for (const p of l.addedNodes)
          p.tagName === 'LINK' && p.rel === 'modulepreload' && s(p)
  }).observe(document, { childList: !0, subtree: !0 })
  function a(o) {
    const l = {}
    return (
      o.integrity && (l.integrity = o.integrity),
      o.referrerpolicy && (l.referrerPolicy = o.referrerpolicy),
      o.crossorigin === 'use-credentials'
        ? (l.credentials = 'include')
        : o.crossorigin === 'anonymous'
        ? (l.credentials = 'omit')
        : (l.credentials = 'same-origin'),
      l
    )
  }
  function s(o) {
    if (o.ep) return
    o.ep = !0
    const l = a(o)
    fetch(o.href, l)
  }
}
P()
var A = {
  light: {
    textColor: '#111',
    lightText: '#666',
    lightTextVariant: '#666666',
    lightTextBold: '#707070',
    navBackground: 'rgba(255, 255, 255, 0.5)',
    cardBackground: ' #e6e6e6',
    linkColor: '#2a2a2a',
    iconAccent: '#00000037',
    darkIconAccent: '#f9f9f9',
    secondaryColor: '#ededed',
    iconFill: '#111',
    linkUnderLineColor: '#1b1b1b',
    mainBg: '#f4f4f4',
  },
  dark: {
    textColor: '#fafafa',
    lightText: '#c1c1c1',
    lightTextVariant: '#c6c6c6',
    lightTextBold: '#d2d2d2',
    navBackground: 'rgba(0, 0, 0, 0.5)',
    cardBackground: '#222',
    linkColor: '#d1d1d1',
    iconAccent: '#ffffff37',
    darkIconAccent: '#a9a9a9',
    secondaryColor: '#bdbdbd',
    iconFill: '#fff',
    linkUnderLineColor: '#eee',
    mainBg: '#040404',
  },
}
const m = Y`
  position: relative;
  color: ${(e) => (e.theme === 'dark' ? A.dark.linkColor : A.light.linkColor)};
  text-decoration: none;
  margin: 0 8px;
  padding: 4px 8px;
  transition: 0.3s cubic-bezier(0.98, 0.07, 0.47, 0.74);
`,
  H = n.div`
  padding: 10px;
`,
  V = n(x)`
  ${m}
  color: ${(e) => (e.theme === 'dark' ? A.dark.textColor : A.light.textColor)};
  text-align: center;
`
function O(e) {
  return t(H, {
    children: t(V, {
      theme: e.theme,
      to: '/',
      children: t('h3', { children: 'haneen mahdin' }),
    }),
  })
}
const z = n(x)`
  ${m}

  &::before {
    content: ' ';
    position: absolute;
    bottom: -5px;
    height: 2px;
    width: 0%;
    background: ${(e) =>
      e.theme === 'dark'
        ? A.dark.linkUnderLineColor
        : A.light.linkUnderLineColor};
    transition: 0.3s cubic-bezier(0.98, 0.07, 0.47, 0.74);
  }

  &:hover::before,
  :active::before {
    width: 80%;
  }

  &:hover,
  :active {
    color: ${(e) =>
      e.theme === 'dark'
        ? A.dark.linkUnderLineColor
        : A.light.linkUnderLineColor};
  }
`
function k(e) {
  return t(z, {
    theme: e.theme,
    to: e.to,
    'aria-label': `Link to ${e.href} page`,
    children: e.text,
  })
}
const N = n.button`
  height: 40px;
  width: 40px;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${(e) => (e.theme === 'dark' ? A.dark.textColor : A.light.textColor)};

  svg {
    fill: ${(e) => (e.theme === 'dark' ? A.dark.textColor : A.light.textColor)};
    stroke: ${(e) =>
      e.theme === 'dark' ? A.dark.textColor : A.light.textColor};
  }

  @media screen and (max-width: 700px) {
    margin-right: 10px;
  }
`
function X(e) {
  const { theme: i, setTheme: a } = e
  return t(N, {
    theme: e.theme,
    onClick: () => {
      a(i === 'dark' ? 'light' : 'dark')
    },
    children: i === 'dark' ? t(S, {}) : t(W, {}),
  })
}
const q = n.nav`
  height: 100px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0;
  position: fixed;
  top: 0;
  background-color: ${(e) =>
    e.theme === 'dark' ? A.dark.navBackground : A.light.navBackground};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  z-index: 1000;
`,
  _ = n.div`
  width: auto;
  max-width: 100%;

  @media screen and (max-width: 700px) {
    width: 90%;
    text-align: center;

    a {
      font-size: 14px;
      margin: 0 4px;
    }
  }
`
class L extends d.exports.Component {
  constructor(i) {
    super(i)
    this.props = i
  }
  render() {
    const { state: i, props: a } = this
    return r(q, {
      theme: a.theme,
      children: [
        t(O, { theme: a.theme }),
        r(_, {
          children: [
            t(k, { theme: a.theme, to: '/projects', text: 'projects' }),
            t(k, { theme: a.theme, to: '/about', text: 'about me' }),
          ],
        }),
        t(X, { theme: a.theme, setTheme: a.setTheme }),
      ],
    })
  }
}
const Z = n.aside`
  padding: 10px 0;
  display: flex;
  align-items: flex-start;
`,
  h = n.a`
  ${m}
  text-align: left;
  font-size: 24px;
  margin: 0;
  margin-right: 2.7%;

  svg {
    stroke: ${(e) =>
      e.theme === 'dark' ? A.dark.linkColor : A.light.linkColor};
    fill: ${(e) =>
      e.theme === 'dark' ? A.dark.iconAccent : A.light.iconAccent};
    transition: 0.3s cubic-bezier(0.35, 0.07, 0.38, 1.01);
  }

  &:hover svg,
  :focus svg {
    stroke: ${(e) =>
      e.theme === 'dark' ? A.dark.darkIconAccent : A.light.darkIconAccent};
    fill: ${(e) => (e.theme === 'dark' ? A.dark.iconFill : A.light.iconFill)};
    transform: scale(1.2);
  }
`
function f(e) {
  return r(Z, {
    children: [
      t(h, {
        theme: e.theme,
        target: '_blank',
        href: 'https://github.com/haneenmahd',
        children: t(u, {}),
      }),
      t(h, {
        theme: e.theme,
        target: '_blank',
        href: 'https://dribbble.com/haneenmahdin',
        children: t(U, {}),
      }),
      t(h, {
        theme: e.theme,
        target: '_blank',
        href: 'https://instagram.com/haneenmahdin',
        children: t(j, {}),
      }),
      t(h, {
        theme: e.theme,
        target: '_blank',
        href: 'https://twitter.com/HaneenMahdin',
        children: t(E, {}),
      }),
      t(h, { theme: e.theme, href: '/projects', children: t(v, {}) }),
      t(h, {
        theme: e.theme,
        target: '_blank',
        href: 'mailto:haneenmahdin@gmail.com',
        children: t(y, {}),
      }),
    ],
  })
}
const ee = n.article`
  min-height: 90vh;
  max-width: 100vw;
  color: ${(e) => (e.theme === 'dark' ? A.dark.textColor : A.light.textColor)};
  padding-top: 100px;
`,
  te = n.div`
  text-align: left;
  padding: 100px 10%;

  h2 {
    font-size: 350%;
    font-weight: 800;
    margin: 6px 0;
  }

  h4 {
    font-size: 120%;
    color: ${(e) =>
      e.theme === 'dark' ? A.dark.lightText : A.light.lightText};
    font-weight: 600;
    margin: 6px 0;
  }
`
class Ae extends d.exports.Component {
  constructor(i) {
    super(i)
    this.props = i
  }
  render() {
    const { props: i } = this
    return t(ee, {
      theme: i.theme,
      children: r(te, {
        theme: i.theme,
        children: [
          t('h2', { children: "Hi, I'm Haneen \u{1F44B}" }),
          t('h4', {
            children: 'An aspiring full-stack developer and a UI/UX Designer.',
          }),
          t(f, { theme: i.theme }),
        ],
      }),
    })
  }
}
const ie = n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  width: 300px;
  background: ${(e) =>
    e.theme === 'dark' ? A.dark.cardBackground : A.light.cardBackground};
  border-radius: 10px;
  box-shadow: 0;
  margin: 20px;
  overflow: hidden;
  user-select: none;
  transition: all 0.3s;

  img {
    height: 200px;
    max-width: 100%;
  }

  &:hover {
    box-shadow: 0 30px 60px 0 #6d6d6d1f;
  }

  div {
    margin: 10px 0;
    padding: 5px 20px;
  }

  button {
    margin-bottom: 20px;
  }
`,
  re = n.h4`
  font-size: 130%;
  font-weight: bold;
  text-align: left;
  color: ${(e) => (e.theme === 'dark' ? A.dark.textColor : A.light.textColor)};
  margin: 0;
`,
  ne = n.h4`
  font-size: 100%;
  font-weight: normal;
  text-align: left;
  padding: 7px 0;
  padding-right: 10px;
  color: ${(e) => (e.theme === 'dark' ? A.dark.linkColor : A.light.linkColor)};
  margin: 0;
`,
  ae = n.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`,
  F = n.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  margin: 12px;
  text-decoration: none;
  max-width: 90px;
  background: ${(e) => (e.secondary ? '#4d4d4d' : '#166edc')};
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
`
function c(e) {
  return r(ie, {
    theme: e.theme,
    children: [
      t('img', { src: e.imgSource, alt: 'Preview Image' }),
      r('div', {
        children: [
          t(re, { theme: e.theme, children: e.title }),
          t(ne, { theme: e.theme, children: e.description }),
        ],
      }),
      r(ae, {
        children: [
          r(F, {
            target: '_blank',
            href: e.projectLink,
            children: [t(M, {}), ' View'],
          }),
          e.githubUrl &&
            r(F, {
              target: '_blank',
              href: e.githubUrl,
              secondary: !0,
              children: [t(u, {}), ' GitHub'],
            }),
        ],
      }),
    ],
  })
}
var oe = '/assets/emoji-plate.b553bc5f.png',
  le = '/assets/hashable.a4cc3a72.png',
  se = '/assets/imagable.d420f47e.png',
  he =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABLAAAAHTCAMAAAAApxGuAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAOVBMVEUAAADRTUzdgH7XZGTijY334+Ppqan12dn99/fnqKjUWVjzzs766+vlnJrLODjLODfLOTfLODf///9SLzeHAAAAEXRSTlMA6czYx8fBw9jB4MHLw0nDq34XYU8AAAABYktHRBJ7vGwAAAAAB3RJTUUH4QgJAC4j9dQekgAACeJJREFUeNrt1dkVgkAQRUEQFNyX/IP1B0ygh3Papm4GTPvK7i1Jf1LnCSQBS5KAJQlYkgQsSQKWJGBJErAkCViSgCVJwJIkYEkCliQBS5KAJQlYkgQsSQKWJGBJErAkCViSgCVJwJIkYEkCliQBS5KAJQlYkgQsScCSJGBJErAkAUuSgCVJwJIELEkCliQBSxKwJAlYkgQsScCSJGBJErAkAUuSgCVJwJIELEkCliQBSxKwJAlYkgQsScCSJGBJErAkAUuSgCUJWJIELEkCliRgSRKwJAlYkoAlSUXB6g9a6uOv6RHXhvhjDl6x2j4agDV+tDTGX9Mjrh3jj3n0itX2ASxgAUvAchBgAUvAAhawgAUsYAELWAKWgwALWAIWsIAFLGABC1jAErAcBFjAsg9gAQtYwAIWsIAFLAHLQYAFLPsAFrCABSxgAQtYwBKwHARYwLIPYAELWMACFrCABSwBy0GABSz7ABawgCVgAQtYwBKwHMQjAss+gAUsYAlYwAIWsAQsYAELWPYBLGABS8ASsIAlYAELWMCyD2ABC1gCloMAC1gCFrCABSxgAQtYwBKwHARYwBKwgAUsYAELWMACloDlIMACloAFLGABC1jAAhawBCwHARaw7ANYwAIWsIAFLGABS8ByEGAByz6ABSxgAQtYwAIWsAQsBwEWsOwDWMACFrCABSxgAUvAchBgAcs+gAUsYAlYwAIWsAQsYAlY9gEsYAFLwAIWsIAlYAELWMCyD2ABC1gCloAFLAELWMACln0AC1jAErAcBFjAErCABSxgAQtYwAKWgOUgwAKWgAUsYAELWMACFrAELAcBFrAELGABC1jAAhawgCVgbdkp3ASstSn+msBam+OPOdtHObBSfEcVsFJ8RxWwcnxHlX0AC1jAAhawgAUsYAELWMACFrCABSxgAQtYwAIWsIAFLGABC1jAAhawgAUsYAELWMACFrCABSxgAQtYwAIWsIAFLGABC1jAAhawgAUsYAELWMACFrCABSxgAQtYwAIWsIAFLGABC1jAAhawgAUsYAELWMACFrCABSxgActBgAUsYAELWMACFrCABSxgAQtYwAIWsIAFLGABC1jAAhawgAUsYAELWMCyD2ABC1jAAhawgAUsYAELWMACFrCABSxgAQtYwAIWsIAFLGABC1jAAhawgAUsYAELWMACFrCABSxgAQtYwAIWsIAFLGABC1jAAhawgAUsYAELWMACFrCABSxgAQtYwAIWsIAFLGABC1jAAhawgAUsYAELWMACFrCABSxgOQiwgAUsYAELWMACFrCABSxgAQtYwAIWsIAFLGABC1jAAhawgAUsYAELWMACFrCABSxgAQtYwAIWsIAFLGDZB7CABSxgAQtYwAIWsIAFLGABC1jAAhawgAUsYAELWMACFrCABSxgAQtYwAIWsIAFLGABC1jAAhawgAUsYAELWMACFrCABSxgAQtYwAIWsIAFLGABC1jAAhawgAUsYAELWMACFrCABSxgAQtYwAIWsIAFLGABC1jAAhawHARYwAIWsIAFLGABC1jAAhawgAUsYAELWMACFrCABSxgAQtYwAIWsIAFLGABC1jAAhawgAUsYAELWMACFrDsA1jAAhawgAUsYAELWMACFrCABSxgAQtYwAIWsIAFLGABC1jAAhawgAUsYAELWMACFrCABSxgAQtYwAIWsIAFLGABC1jAAhawgAUsYAELWMACFrCABSxgAQtYwAIWsIAFLGABC1jAAhawgAUsYAELWMACFrCABSxgAQtYDgIsYAELWMACFrCABSxgAQtYwAIWsIAFLGABC1jAAhawgAUsYAELWMACFrCABSxgAQtYwAIWsIAFLGABC1j2ASxgAQtYwAIWsIAFLGABC1jAAhawgAUsYAELWMACFrCABSxgAQtYwAIWsIAFLGABC1jAAhawgAUsYAELWMACFrCABSxgAQtYwAIWsIAFLGABC1jAAhawgAUsYAELWMACFrCABSxgAQtYwAIWsIAFLGABC1jA2gFY50s4YAELWMDaUcACFrCABSxgAQtYwAIWsIAFLGABC1jAAhawgAUsYAELWMACFrCABSz7ABawgAUsYAELWMACFrCABSxgAQtYwAIWsIAFLGABC1jAAhawgAUsYAELWMACFrCABSxgAQtYwAIWsIAFLEMHFrCABSxgAQtYwAIWsIAFLGABC1jAAhawgAUsYAELWMACFrCABSxgAQtYwAIWsIAFLGD5DmABC1jAAhawHARUwAIWsIAFLGABC1jAAhawgAUsYAELWMACFrCABSxgAQtYwAIWsIAFLPsAFrCABSxgAQtYwAIWsIAFLGABC1jAAhawgAUsYAELWMACFrCABSxgAQtYwAIWsIAFLGABC1jAAhawgAUsQwcWsIAFLGABC1jAAhawgAUsYAELWMACFrCABSxgAQtYwAIWsIAFLGABC1jAAhawgAUsYAELWMACFrCABSwHARawgAUsYAHLdwALWMACFrCABSwBC1jAAhawgAUsYAELWMACFrCABSxgAQtYwAIWsIAFLGABC1jAAhaw7ANYwAIWsIAFLGABC1jAAhawgAUsYAELWMDaD1jDNUMpvmMoAtYtw0Xv8ce8+45q+2gAllqWAqzRHZQzYAELWAKWgCUBC1jAErAELGAJWAKWBCxgAUvAErCAJWAJWBKwgAUsAUvAkoAlYEnAAhawBCwBSwKWgCUBC1jAErAELAlYApYELGABS8ASsCRgCVgSsIAFLAFLwJKABSxgScACFrAELAFLAhawgCUBC1jAErAELAlYwAKWgOUJgAUsAUvAkoAFLGAJWAIWsAQsAUsCFrCAJWAJWO4gYAlYErCABSwBS8CSgCVgScACFrAELAFLApaAJQELWMASsAQsCVgClgQsYAFLwBKwJGABC1gSsIAFLAFLwJKABSxgScACFrAELAFLAhawgCUBC1jAErAELAlYwAKWgCVgAUvAErAkYAELWAKWgAUsAUvAkoAFLGAJWAKWlBOsh9r1jB/kkKE+/h1+DNqiTg17+Qf8/RNKAhawJAELWBKwgCUJWMCSBCxgScACliRgAUsSsIAlAQtYkoAFLEnAApYELGBJAhawJAELWBKwgCUJWMCSBCxgScACliRgAUsSsIAlAQtYkoAFLEnAApYELGBJAhawJGAJWBKwgCUJWMCSgAUsScACliRgAUsCFrAkAQtYkoAFLAlYwJIELGBJAhawJGABSxKwgCUJWMCSgAUsScACliRgAUsCFrAkAQtYkoAFLAlYwJIELGBJAhawJGABSxKwgCUJWMCSgAUsScAClgQsAUsCFrAkAQtYErCAJQlYwJIELGBJwAKWJGABSxKwgCUBC1iSgAUs7aUvda6964aXmagAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTctMDgtMDlUMDA6NDY6MzUrMDA6MDCqCllVAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE3LTA4LTA5VDAwOjQ2OjM1KzAwOjAw21fh6QAAAABJRU5ErkJggg==',
  ce = '/assets/apple-colors.324fed04.jpeg',
  de = '/assets/python-icon.976ee9a0.png'
const ge = n.article`
  min-height: 100vh;
  max-width: 100vw;
  padding: 50px 2%;
  background: ${(e) => (e.theme === 'dark' ? A.dark.mainBg : A.light.mainBg)};
  color: ${(e) => (e.theme === 'dark' ? A.dark.textColor : A.light.textColor)};
`,
  me = n.div`
  text-align: left;
  padding: 0 30px;

  * {
    margin: 6px 0;
  }

  h2 {
    font-size: 300%;
    font-weight: 800;
    color: ${(e) =>
      e.theme === 'dark' ? A.dark.textColor : A.light.textColor};
  }

  h4 {
    font-size: 120%;
    color: ${(e) =>
      e.theme === 'dark' ? A.dark.lightText : A.light.lightText};
    font-weight: 600;
  }
`,
  Ce = n.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  margin: 50px 0;
`,
  pe = n(x)`
  ${m}
  color: #166edc;
  border-radius: 10px;
  padding: 10px 20px;
  font-weight: bold;

  &:hover {
    color: #2989ff;
    background: #2989ff20;
  }
`
function I(e) {
  const [i] = w()
  return r(ge, {
    theme: i,
    children: [
      r(me, {
        theme: i,
        children: [
          t('h2', { children: 'Projects \u{1F47E}' }),
          t('h4', {
            children:
              'Here are some of my works that i have put up my time, skills, and effort into \u{1F4AA}\u{1F3FB}.',
          }),
        ],
      }),
      r(Ce, {
        children: [
          t(c, {
            theme: i,
            title: 'Imagable',
            description:
              'A Utility to resize and optimize your icons for all platforms instanly with one click \u{1F92F}!',
            imgSource: se,
            projectLink: 'https://imagable.vercel.app',
            githubUrl: 'https://github.com/imagable/imagable',
          }),
          t(c, {
            theme: i,
            title: 'Emoji Plate',
            description: 'A collection of textual emojis and symbols',
            imgSource: oe,
            projectLink: 'https://emoji-plate.netlify.app',
            githubUrl: 'https://github.com/emoji-plate/client',
          }),
          t(c, {
            theme: i,
            title: 'Hashable',
            description:
              'An API to access high-level crypto functions inside your browser \u2620\uFE0F!',
            imgSource: le,
            projectLink: 'https://hashable.space',
            githubUrl: 'https://github.com/haneenmahd/hashable',
          }),
          e.showMoreLinks ||
            r(Q, {
              children: [
                t(c, {
                  theme: i,
                  title: 'typeinstall',
                  description:
                    'Automatically installs types for your typescript project',
                  imgSource: he,
                  projectLink: 'https://www.npmjs.com/package/typeinstall',
                  githubUrl: 'https://github.com/haneenmahd/typeinstall',
                }),
                t(c, {
                  theme: i,
                  title: 'apple-colors',
                  description:
                    'A Package for using Colors in your User Interace with colors used by apple\u{1F34E}',
                  imgSource: ce,
                  projectLink: 'https://www.npmjs.com/package/typeinstall',
                  githubUrl: 'https://github.com/haneenmahd/typeinstall',
                }),
                t(c, {
                  theme: i,
                  title: 'blobby',
                  description: 'Convert Image Files into Supported Pdf Format',
                  imgSource: de,
                  projectLink: 'https://www.npmjs.com/package/typeinstall',
                  githubUrl: 'https://github.com/haneenmahd/typeinstall',
                }),
              ],
            }),
        ],
      }),
      e.showMoreLinks &&
        t(pe, { to: '/projects', children: '> View all projects' }),
    ],
  })
}
var xe = '/assets/pfp.b19ad75d.png'
const we = n.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-evenly;
  min-height: 100vh;
  max-width: 100vw;
  padding: 50px 7%;
  background: ${(e) => (e.theme === 'dark' ? A.dark.mainBg : A.light.mainBg)};
  color: ${(e) => (e.theme === 'dark' ? A.dark.textColor : A.light.textColor)};

  @media screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`,
  ue = B`
    0% {
        opacity: 0.2;
    }

    50% {
        opacity: 0.8;
    }

    100% {
        opacity: 0.2;
    }
`,
  Be = B`
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
`,
  ke = n.aside`
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
    color: ${(e) =>
      e.theme === 'dark' ? A.dark.lightText : A.light.lightText};
    font-weight: 600;
    animation: ${ue} 3s ease-in infinite 1.2s;
  }

  img {
    height: 400px;
    width: 400px;
    margin: 20px 0;
    box-shadow: 0 20px 20px 0 #7722cc76, 0 20px 20px 0 #2222cc76;
    animation: ${Be} 5s linear infinite;
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
`,
  Le = n.aside`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (min-width: 700px) {
    margin-left: 20px;
  }
`,
  C = n.div`
  text-align: left;
  max-width: 100%;
  color: ${(e) => (e.theme === 'dark' ? A.dark.textColor : A.light.textColor)};

  p {
    color: ${(e) =>
      e.theme === 'dark' ? A.dark.lightTextVariant : A.light.lightTextVariant};
    line-height: 1.45rem;
    font-weight: 600;
    margin: 10px 0;
    max-width: 90%;

    b {
      color: ${(e) =>
        e.theme === 'dark' ? A.dark.lightTextBold : A.light.lightTextBold};

      ::before,
      ::after {
        content: '"';
      }
    }
  }

  ul {
    padding-left: 20px;
    color: ${(e) =>
      e.theme === 'dark' ? A.dark.lightTextVariant : A.light.lightTextVariant};
    line-height: 1.45rem;
    font-weight: 600;
    margin: 20px 0;
    max-width: 90%;
  }
`
function b(e) {
  const [i] = w()
  return r(we, {
    theme: i,
    children: [
      r(ke, {
        theme: i,
        children: [
          t('h2', { children: 'About Me' }),
          t('img', { src: xe, alt: 'My Pic' }),
        ],
      }),
      r(Le, {
        children: [
          r(C, {
            theme: i,
            children: [
              t('h3', { children: 'Intro' }),
              t('p', {
                children:
                  'Hello, I am Haneen Mahdin, an 14 year-old aspiring Full-stack Developer building awesome And cool things.',
              }),
            ],
          }),
          r(C, {
            theme: i,
            children: [
              t('h3', { children: 'Journey' }),
              r('p', {
                children: [
                  "I was 12 years-old when i first got to code a cool website in HTML and CSS from a FreeCodeCamp.org's crash course. I was really interested in design at first.",
                  ' ',
                  t('b', {
                    children:
                      'I believed in that good design can make a product better',
                  }),
                  '. I started to learn web development deeply by creating websites using',
                  ' ',
                  t('b', { children: 'React' }),
                  '. I learned ',
                  t('b', { children: 'UI/UX' }),
                  ' Design later that year. Then I moved on to learning Backend Development with ',
                  t('b', { children: 'Node.js' }),
                  ' with',
                  ' ',
                  t('b', { children: 'MongoDB' }),
                  '. Tried building my own APIs, failed a lot, but never gave up \u{1F4AA}\u{1F3FB}. I learned to build apps using ',
                  t('b', { children: 'React Native' }),
                  ' and',
                  ' ',
                  t('b', { children: 'Expo' }),
                  ' afterwards. I started re-searching about new and latest technologies and still continue to learn new things\u{1F603}!',
                ],
              }),
            ],
          }),
          r(C, {
            theme: i,
            children: [
              t('h3', { children: 'Technologies I use \u{1F680}' }),
              r('ul', {
                children: [
                  t('li', { children: 'HTML, CSS, Javascript' }),
                  t('li', {
                    children: 'React, Vite, Next.js, Styled Components, Sass',
                  }),
                  t('li', { children: 'React Native, Expo' }),
                  t('li', { children: 'Node.js, MongoDB, Express' }),
                  t('li', { children: 'Python, C, C++' }),
                  t('li', { children: 'Swift (learning \u{1F60B})' }),
                  t('li', { children: 'VSCode, Git, GitHub' }),
                ],
              }),
            ],
          }),
          r(C, {
            theme: i,
            children: [
              t('h3', { children: 'Keep in touch \u{1F940}' }),
              r('p', {
                children: [
                  'I love to get to know more people in this Tech Community and am interested to join in your project or team or company. If you are interested to have a nice talk or something you can text me on',
                  ' ',
                  t('i', { children: 'Instagram' }),
                  ', ',
                  t('i', { children: 'Twitter' }),
                  ' or get me a ',
                  t('i', { children: 'Mail' }),
                  '.',
                ],
              }),
              t(f, { theme: i }),
            ],
          }),
        ],
      }),
    ],
  })
}
const fe = n.div`
  min-height: 100vh;
  max-width: 100vw;
  text-align: center;
  background-color: ${(e) =>
    e.theme === 'dark' ? A.dark.mainBg : A.light.mainBg};
  color: ${(e) => (e.theme === 'dark' ? A.dark.textColor : A.light.textColor)};

  &.page {
    padding-top: 80px;
  }
`
function Fe(e) {
  const [i, a] = w()
  return r(fe, {
    theme: i,
    children: [
      t(L, { theme: i, setTheme: (s) => a(s) }),
      t(Ae, { theme: i }),
      t(I, { theme: i, showMoreLinks: !0 }),
      t(b, { theme: i }),
    ],
  })
}
G.polyfill()
function Ie() {
  const [e, i] = d.exports.useState('light'),
    a = K()
  return (
    d.exports.useEffect(() => {
      window.scrollTo(0, 0)
    }, [a.pathname]),
    r('div', {
      style: {
        paddingTop: a.pathname !== '/' ? 85 : 0,
        backgroundColor: e === 'dark' ? A.dark.mainBg : A.light.mainBg,
      },
      children: [
        t(L, { theme: e, setTheme: (s) => i(s) }),
        t(R, { context: [e, i] }),
      ],
    })
  )
}
J.render(
  t(T.StrictMode, {
    children: t($, {
      children: t(D, {
        children: r(g, {
          path: '/',
          element: t(Ie, {}),
          children: [
            t(g, { index: !0, element: t(Fe, {}) }),
            t(g, { path: 'projects', element: t(I, {}) }),
            t(g, { path: 'about', element: t(b, {}) }),
          ],
        }),
      }),
    }),
  }),
  document.getElementById('root')
)
