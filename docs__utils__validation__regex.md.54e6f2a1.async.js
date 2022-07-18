(self["webpackChunk_next_dev_docs"]=self["webpackChunk_next_dev_docs"]||[]).push([[523],{99298:function(){},88003:function(){},52703:function(e,t,r){"use strict";r.r(t);r(21785);var n=r(80190),i=(r(26801),r(2006)),l=r(76985),s=r(43017),c=r(15679),d=r(74153),o=r(58138);t["default"]=({children:e,...t})=>(0,s.isBrowser)()?(0,o.jsx)(d.ZP,{height:`calc(${t.height} + 128px)`||500,offset:500,placeholder:parseInt(t.height)>300?(0,o.jsx)("div",{className:"__dumi-default-previewer",style:{padding:24,background:"rgb(245, 245, 245)"},children:(0,o.jsx)(l.ZP,{type:"descriptions"})}):(0,o.jsx)("div",{style:{paddingTop:100,textAlign:"center"},children:(0,o.jsx)(i.Z,{size:"large"})}),once:!0,children:(0,o.jsxs)("div",{className:"space-y-3",children:[(0,o.jsx)(n.Z,{type:"primary",children:"Toolbox"}),(0,o.jsx)(c.Z,{...t,children:(0,o.jsx)("div",{style:{minHeight:t.height},children:e})})]})}):null},34506:function(e,t,r){"use strict";r.r(t);var n=r(96832),i=r(3774),l=(r(52703),r(90127)),s=r(53702),c=r(58138);const d=n.memo((({demos:e})=>(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("div",{className:"markdown",children:[(0,c.jsxs)("h1",{id:"regex",children:[(0,c.jsx)(i.AnchorLink,{to:"#regex","aria-hidden":"true",tabIndex:-1,children:(0,c.jsx)("span",{className:"icon icon-link"})}),"Regex"]}),(0,c.jsx)("p",{children:"Provides related all common regex"}),(0,c.jsx)(l.Z,{code:"import { regex } from '@next-dev';\n\nconst { urlRegexp, ... } = regex;",lang:"tsx"}),(0,c.jsxs)(s.Z,{children:[(0,c.jsx)("thead",{children:(0,c.jsxs)("tr",{children:[(0,c.jsx)("th",{children:"Name"}),(0,c.jsx)("th",{children:"Description"}),(0,c.jsx)("th",{children:"Antd Form Validation"}),(0,c.jsx)("th",{children:"Test"}),(0,c.jsx)("th",{children:"Result"})]})}),(0,c.jsxs)("tbody",{children:[(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:"urlRegexp"}),(0,c.jsxs)("td",{children:["contain ",(0,c.jsx)("code",{children:"www.anytext"})]}),(0,c.jsx)("td",{children:(0,c.jsxs)("code",{children:["{"," pattern: urlRegexp ","}"]})}),(0,c.jsxs)("td",{children:["urlRegexp.test('",(0,c.jsx)(i.Link,{to:"http://www.next-dev.com/",children:"www.next-dev.com"}),"')"]}),(0,c.jsx)("td",{children:"true"})]}),(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:"isImg"}),(0,c.jsx)("td",{children:"gif jpg jpeg png svg"}),(0,c.jsx)("td",{children:(0,c.jsxs)("code",{children:["{"," pattern: isImg ","}"]})}),(0,c.jsx)("td",{children:"isImg.test('png')"}),(0,c.jsx)("td",{children:"true"})]}),(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:"positiveInteger"}),(0,c.jsx)("td",{children:"0-9"}),(0,c.jsx)("td",{children:(0,c.jsxs)("code",{children:["{"," pattern: positiveInteger ","}"]})}),(0,c.jsx)("td",{children:"positiveInteger.test('-1')"}),(0,c.jsx)("td",{children:"false"})]}),(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:"number"}),(0,c.jsx)("td",{children:"Must be a number"}),(0,c.jsx)("td",{children:(0,c.jsxs)("code",{children:["{"," pattern: number ","}"]})}),(0,c.jsx)("td",{children:"number.test('1')"}),(0,c.jsx)("td",{children:"true"})]}),(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:"email"}),(0,c.jsx)("td",{children:"Must be a valid email"}),(0,c.jsx)("td",{children:(0,c.jsxs)("code",{children:["{"," pattern: email ","}"]})}),(0,c.jsx)("td",{children:"email.test('1')"}),(0,c.jsx)("td",{children:"false"})]}),(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:"integer"}),(0,c.jsx)("td",{children:"integer"}),(0,c.jsx)("td",{children:(0,c.jsxs)("code",{children:["{"," pattern: integer ","}"]})}),(0,c.jsx)("td",{children:"integer.test('1')"}),(0,c.jsx)("td",{children:"true"})]})]})]})]})})));t["default"]=e=>{const t=n.useContext(i.context),r=t.demos;return n.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&i.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),(0,c.jsx)(d,{demos:r})}},90127:function(e,t,r){"use strict";var n=r(96832),i=r(78210),l=r(3774);r(99298);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function c(e,t){return h(e)||u(e,t)||o(e,t)||d()}function d(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,t){if(e){if("string"===typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function u(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,l=[],s=!0,c=!1;try{for(r=r.call(e);!(s=(n=r.next()).done);s=!0)if(l.push(n.value),t&&l.length===t)break}catch(d){c=!0,i=d}finally{try{s||null==r["return"]||r["return"]()}finally{if(c)throw i}}return l}}function h(e){if(Array.isArray(e))return e}var x={acss:"css",axml:"xml"};t["Z"]=function(e){var t=e.code,r=e.lang,d=e.showCopy,o=void 0===d||d,a=(0,l.useCopy)(),u=c(a,2),h=u[0],f=u[1];return n.createElement("div",{className:"__dumi-default-code-block"},n.createElement(i.ZP,s({},i.lG,{code:t,language:x[r]||r,theme:void 0}),(function(e){var r=e.className,i=e.style,l=e.tokens,s=e.getLineProps,c=e.getTokenProps;return n.createElement("pre",{className:r,style:i},o&&n.createElement("button",{className:"__dumi-default-icon __dumi-default-code-block-copy-btn","data-status":f,onClick:function(){return h(t)}}),l.map((function(e,t){return n.createElement("div",s({line:e,key:t}),e.map((function(e,t){return n.createElement("span",c({token:e,key:t}))})))})))})))}},53702:function(e,t,r){"use strict";var n=r(96832),i=r(14978),l=r.n(i);r(88003);function s(e,t){return u(e)||a(e,t)||d(e,t)||c()}function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e,t){if(e){if("string"===typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,l=[],s=!0,c=!1;try{for(r=r.call(e);!(s=(n=r.next()).done);s=!0)if(l.push(n.value),t&&l.length===t)break}catch(d){c=!0,i=d}finally{try{s||null==r["return"]||r["return"]()}finally{if(c)throw i}}return l}}function u(e){if(Array.isArray(e))return e}var h=function(e){var t=e.children,r=(0,n.useRef)(),i=(0,n.useState)(!1),c=s(i,2),d=c[0],o=c[1],a=(0,n.useState)(!1),u=s(a,2),h=u[0],x=u[1];return(0,n.useEffect)((function(){var e=r.current,t=l()((function(){o(e.scrollLeft>0),x(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),n.createElement("div",{className:"__dumi-default-table"},n.createElement("div",{className:"__dumi-default-table-content",ref:r,"data-left-folded":d||void 0,"data-right-folded":h||void 0},n.createElement("table",null,t)))};t["Z"]=h}}]);