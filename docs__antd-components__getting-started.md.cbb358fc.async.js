(self["webpackChunk_next_dev_docs"]=self["webpackChunk_next_dev_docs"]||[]).push([[668],{99298:function(){},52703:function(e,n,t){"use strict";t.r(n);t(21785);var o=t(80190),s=(t(26801),t(2006)),r=t(76985),i=t(43017),a=t(15679),c=t(74153),l=t(58138);n["default"]=({children:e,...n})=>(0,i.isBrowser)()?(0,l.jsx)(c.ZP,{height:`calc(${n.height} + 128px)`||500,offset:500,placeholder:parseInt(n.height)>300?(0,l.jsx)("div",{className:"__dumi-default-previewer",style:{padding:24,background:"rgb(245, 245, 245)"},children:(0,l.jsx)(r.ZP,{type:"descriptions"})}):(0,l.jsx)("div",{style:{paddingTop:100,textAlign:"center"},children:(0,l.jsx)(s.Z,{size:"large"})}),once:!0,children:(0,l.jsxs)("div",{className:"space-y-3",children:[(0,l.jsx)(o.Z,{type:"primary",children:"Toolbox"}),(0,l.jsx)(a.Z,{...n,children:(0,l.jsx)("div",{style:{minHeight:n.height},children:e})})]})}):null},71921:function(e,n,t){"use strict";t.r(n);var o=t(96832),s=t(3774),r=(t(52703),t(90127)),i=t(58138);const a=o.memo((({demos:e})=>(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"markdown",children:[(0,i.jsxs)("h1",{id:"getting-started",children:[(0,i.jsx)(s.AnchorLink,{to:"#getting-started","aria-hidden":"true",tabIndex:-1,children:(0,i.jsx)("span",{className:"icon icon-link"})}),"Getting Started"]}),(0,i.jsx)("p",{children:"ProComponents is a template component developed based on Ant Design, which provides higher-level abstraction support out of the box. It can significantly improve the efficiency of making CRUD pages and focus more on pages."}),(0,i.jsx)("p",{children:"Check out a typical demo to see if the component is right for your business before using it. ProComponents focuses on CRUD in the middle and back end, with quite a few preset styles and behaviors. These behaviors and styles will be more difficult to change. If your business requires rich customization, it is recommended to use Ant Design directly."}),(0,i.jsxs)("h2",{id:"install",children:[(0,i.jsx)(s.AnchorLink,{to:"#install","aria-hidden":"true",tabIndex:-1,children:(0,i.jsx)("span",{className:"icon icon-link"})}),"Install"]}),(0,i.jsx)("p",{children:"Currently, each component of ProComponents is an independent package, you need to install the corresponding npm package in your project and use it."}),(0,i.jsx)(r.Z,{code:"$ npm i @ant-design/pro-components --save",lang:"shell"}),(0,i.jsx)("p",{children:"Currently ProComponents provides the following components for direct use:"}),(0,i.jsx)("ul",{children:(0,i.jsx)("li",{children:(0,i.jsx)("code",{children:"npm i @ant-design/pro-components --save"})})}),(0,i.jsxs)("h2",{id:"use-in-the-project",children:[(0,i.jsx)(s.AnchorLink,{to:"#use-in-the-project","aria-hidden":"true",tabIndex:-1,children:(0,i.jsx)("span",{className:"icon icon-link"})}),"use in the project"]}),(0,i.jsx)("p",{children:"Each package is an independent component package. The usage examples are as follows:"}),(0,i.jsxs)("p",{children:["All our packages use less for style management and easy theme customization. If you don't have less-loader try importing css from ",(0,i.jsx)("code",{children:"dist"}),"."]}),(0,i.jsx)(r.Z,{code:"import '@ant-design/pro-components/dist/components.css';",lang:"tsx"}),(0,i.jsx)("p",{children:"It is recommended to use less, which can facilitate theme customization, and can also be loaded on demand."})]})})));n["default"]=e=>{const n=o.useContext(s.context),t=n.demos;return o.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&s.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),(0,i.jsx)(a,{demos:t})}},90127:function(e,n,t){"use strict";var o=t(96832),s=t(78210),r=t(3774);t(99298);function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},i.apply(this,arguments)}function a(e,n){return h(e)||u(e,n)||l(e,n)||c()}function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(e,n){if(e){if("string"===typeof e)return d(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?d(e,n):void 0}}function d(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}function u(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var o,s,r=[],i=!0,a=!1;try{for(t=t.call(e);!(i=(o=t.next()).done);i=!0)if(r.push(o.value),n&&r.length===n)break}catch(c){a=!0,s=c}finally{try{i||null==t["return"]||t["return"]()}finally{if(a)throw s}}return r}}function h(e){if(Array.isArray(e))return e}var p={acss:"css",axml:"xml"};n["Z"]=function(e){var n=e.code,t=e.lang,c=e.showCopy,l=void 0===c||c,d=(0,r.useCopy)(),u=a(d,2),h=u[0],m=u[1];return o.createElement("div",{className:"__dumi-default-code-block"},o.createElement(s.ZP,i({},s.lG,{code:n,language:p[t]||t,theme:void 0}),(function(e){var t=e.className,s=e.style,r=e.tokens,i=e.getLineProps,a=e.getTokenProps;return o.createElement("pre",{className:t,style:s},l&&o.createElement("button",{className:"__dumi-default-icon __dumi-default-code-block-copy-btn","data-status":m,onClick:function(){return h(n)}}),r.map((function(e,n){return o.createElement("div",i({line:e,key:n}),e.map((function(e,n){return o.createElement("span",a({token:e,key:n}))})))})))})))}}}]);