(self.webpackChunknext_dev=self.webpackChunknext_dev||[]).push([[2763],{84425:function(s){var c=s.exports={},u,d;function v(){throw new Error("setTimeout has not been defined")}function b(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?u=setTimeout:u=v}catch(p){u=v}try{typeof clearTimeout=="function"?d=clearTimeout:d=b}catch(p){d=b}})();function x(p){if(u===setTimeout)return setTimeout(p,0);if((u===v||!u)&&setTimeout)return u=setTimeout,setTimeout(p,0);try{return u(p,0)}catch(A){try{return u.call(null,p,0)}catch(j){return u.call(this,p,0)}}}function C(p){if(d===clearTimeout)return clearTimeout(p);if((d===b||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(p);try{return d(p)}catch(A){try{return d.call(null,p)}catch(j){return d.call(this,p)}}}var g=[],I=!1,k,V=-1;function J(){!I||!k||(I=!1,k.length?g=k.concat(g):V=-1,g.length&&F())}function F(){if(!I){var p=x(J);I=!0;for(var A=g.length;A;){for(k=g,g=[];++V<A;)k&&k[V].run();V=-1,A=g.length}k=null,I=!1,C(p)}}c.nextTick=function(p){var A=new Array(arguments.length-1);if(arguments.length>1)for(var j=1;j<arguments.length;j++)A[j-1]=arguments[j];g.push(new H(p,A)),g.length===1&&!I&&x(F)};function H(p,A){this.fun=p,this.array=A}H.prototype.run=function(){this.fun.apply(null,this.array)},c.title="browser",c.browser=!0,c.env={},c.argv=[],c.version="",c.versions={};function M(){}c.on=M,c.addListener=M,c.once=M,c.off=M,c.removeListener=M,c.removeAllListeners=M,c.emit=M,c.prependListener=M,c.prependOnceListener=M,c.listeners=function(p){return[]},c.binding=function(p){throw new Error("process.binding is not supported")},c.cwd=function(){return"/"},c.chdir=function(p){throw new Error("process.chdir is not supported")},c.umask=function(){return 0}},52076:function(s,c,u){var d=u(74365);function v(b){if(Array.isArray(b))return d(b)}s.exports=v,s.exports.__esModule=!0,s.exports.default=s.exports},23477:function(s){function c(){return s.exports=c=Object.assign?Object.assign.bind():function(u){for(var d=1;d<arguments.length;d++){var v=arguments[d];for(var b in v)Object.prototype.hasOwnProperty.call(v,b)&&(u[b]=v[b])}return u},s.exports.__esModule=!0,s.exports.default=s.exports,c.apply(this,arguments)}s.exports=c,s.exports.__esModule=!0,s.exports.default=s.exports},19768:function(s){function c(u){if(typeof Symbol!="undefined"&&u[Symbol.iterator]!=null||u["@@iterator"]!=null)return Array.from(u)}s.exports=c,s.exports.__esModule=!0,s.exports.default=s.exports},83798:function(s){function c(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}s.exports=c,s.exports.__esModule=!0,s.exports.default=s.exports},74316:function(s,c,u){var d=u(82554);function v(b,x){if(b==null)return{};var C=d(b,x),g,I;if(Object.getOwnPropertySymbols){var k=Object.getOwnPropertySymbols(b);for(I=0;I<k.length;I++)g=k[I],!(x.indexOf(g)>=0)&&Object.prototype.propertyIsEnumerable.call(b,g)&&(C[g]=b[g])}return C}s.exports=v,s.exports.__esModule=!0,s.exports.default=s.exports},82554:function(s){function c(u,d){if(u==null)return{};var v={},b=Object.keys(u),x,C;for(C=0;C<b.length;C++)x=b[C],!(d.indexOf(x)>=0)&&(v[x]=u[x]);return v}s.exports=c,s.exports.__esModule=!0,s.exports.default=s.exports},91559:function(s,c,u){var d=u(52076),v=u(19768),b=u(63160),x=u(83798);function C(g){return d(g)||v(g)||b(g)||x()}s.exports=C,s.exports.__esModule=!0,s.exports.default=s.exports},97600:function(s,c,u){"use strict";u.d(c,{m:function(){return Ir}});function d(){return d=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},d.apply(this,arguments)}var v="-";function b(e){var r=I(e);function t(a){var l=a.split(v);return l[0]===""&&l.length!==1&&l.shift(),x(l,r)||g(a)}function o(a){return e.conflictingClassGroups[a]||[]}return{getClassGroupId:t,getConflictingClassGroupIds:o}}function x(e,r){var t;if(e.length===0)return r.classGroupId;var o=e[0],a=r.nextPart.get(o),l=a?x(e.slice(1),a):void 0;if(l)return l;if(r.validators.length!==0){var i=e.join(v);return(t=r.validators.find(function(n){var m=n.validator;return m(i)}))==null?void 0:t.classGroupId}}var C=/^\[(.+)\]$/;function g(e){if(C.test(e)){var r=C.exec(e)[1],t=r==null?void 0:r.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}}function I(e){var r=e.theme,t=e.prefix,o={nextPart:new Map,validators:[]},a=F(Object.entries(e.classGroups),t);return a.forEach(function(l){var i=l[0],n=l[1];k(n,o,i,r)}),o}function k(e,r,t,o){e.forEach(function(a){if(typeof a=="string"){var l=a===""?r:V(r,a);l.classGroupId=t;return}if(typeof a=="function"){if(J(a)){k(a(o),r,t,o);return}r.validators.push({validator:a,classGroupId:t});return}Object.entries(a).forEach(function(i){var n=i[0],m=i[1];k(m,V(r,n),t,o)})})}function V(e,r){var t=e;return r.split(v).forEach(function(o){t.nextPart.has(o)||t.nextPart.set(o,{nextPart:new Map,validators:[]}),t=t.nextPart.get(o)}),t}function J(e){return e.isThemeGetter}function F(e,r){return r?e.map(function(t){var o=t[0],a=t[1],l=a.map(function(i){return typeof i=="string"?r+i:typeof i=="object"?Object.fromEntries(Object.entries(i).map(function(n){var m=n[0],h=n[1];return[r+m,h]})):i});return[o,l]}):e}function H(e){if(e<1)return{get:function(){},set:function(){}};var r=0,t=new Map,o=new Map;function a(l,i){t.set(l,i),r++,r>e&&(r=0,o=t,t=new Map)}return{get:function(i){var n=t.get(i);if(n!==void 0)return n;if((n=o.get(i))!==void 0)return a(i,n),n},set:function(i,n){t.has(i)?t.set(i,n):a(i,n)}}}var M="!";function p(e){var r=e.separator||":";return function(o){for(var a=0,l=[],i=0,n=0;n<o.length;n++){var m=o[n];a===0&&m===r[0]&&(r.length===1||o.slice(n,n+r.length)===r)&&(l.push(o.slice(i,n)),i=n+r.length),m==="["?a++:m==="]"&&a--}var h=l.length===0?o:o.substring(i),T=h.startsWith(M),_=T?h.substring(1):h;return{modifiers:l,hasImportantModifier:T,baseClassName:_}}}function A(e){if(e.length<=1)return e;var r=[],t=[];return e.forEach(function(o){var a=o[0]==="[";a?(r.push.apply(r,t.sort().concat([o])),t=[]):t.push(o)}),r.push.apply(r,t.sort()),r}function j(e){return d({cache:H(e.cacheSize),splitModifiers:p(e)},b(e))}var dr=/\s+/;function pr(e,r){var t=r.splitModifiers,o=r.getClassGroupId,a=r.getConflictingClassGroupIds,l=new Set;return e.trim().split(dr).map(function(i){var n=t(i),m=n.modifiers,h=n.hasImportantModifier,T=n.baseClassName,_=o(T);if(!_)return{isTailwindClass:!1,originalClassName:i};var E=A(m).join(":"),N=h?E+M:E;return{isTailwindClass:!0,modifierId:N,classGroupId:_,originalClassName:i}}).reverse().filter(function(i){if(!i.isTailwindClass)return!0;var n=i.modifierId,m=i.classGroupId,h=n+m;return l.has(h)?!1:(l.add(h),a(m).forEach(function(T){return l.add(n+T)}),!0)}).reverse().map(function(i){return i.originalClassName}).join(" ")}function fr(){for(var e=0,r,t,o="";e<arguments.length;)(r=arguments[e++])&&(t=D(r))&&(o&&(o+=" "),o+=t);return o}function D(e){if(typeof e=="string")return e;for(var r,t="",o=0;o<e.length;o++)e[o]&&(r=D(e[o]))&&(t&&(t+=" "),t+=r);return t}function br(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];var o,a,l,i=n;function n(h){var T=r[0],_=r.slice(1),E=_.reduce(function(N,S){return S(N)},T());return o=j(E),a=o.cache.get,l=o.cache.set,i=m,m(h)}function m(h){var T=a(h);if(T)return T;var _=pr(h,o);return l(h,_),_}return function(){return i(fr.apply(null,arguments))}}function f(e){var r=function(o){return o[e]||[]};return r.isThemeGetter=!0,r}var R=/^\[(.+)\]$/,gr=/^\d+\/\d+$/,vr=new Set(["px","full","screen"]),mr=/^(\d+)?(xs|sm|md|lg|xl)$/,hr=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh)/,yr=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function z(e){return!Number.isNaN(Number(e))||vr.has(e)||gr.test(e)||L(e)}function L(e){var r,t=(r=R.exec(e))==null?void 0:r[1];return t?t.startsWith("length:")||hr.test(t):!1}function xr(e){var r,t=(r=R.exec(e))==null?void 0:r[1];return t?t.startsWith("size:"):!1}function wr(e){var r,t=(r=R.exec(e))==null?void 0:r[1];return t?t.startsWith("position:"):!1}function Cr(e){var r,t=(r=R.exec(e))==null?void 0:r[1];return t?t.startsWith("url(")||t.startsWith("url:"):!1}function rr(e){var r,t=(r=R.exec(e))==null?void 0:r[1];return t?!Number.isNaN(Number(t))||t.startsWith("number:"):!1}var Mr=null;function w(e){var r,t=(r=R.exec(e))==null?void 0:r[1];return t?Number.isInteger(Number(t)):Number.isInteger(Number(e))}function y(e){return R.test(e)}function U(){return!0}function O(e){return mr.test(e)}function kr(e){var r,t=(r=R.exec(e))==null?void 0:r[1];return t?yr.test(t):!1}function Tr(){var e=f("colors"),r=f("spacing"),t=f("blur"),o=f("brightness"),a=f("borderColor"),l=f("borderRadius"),i=f("borderSpacing"),n=f("borderWidth"),m=f("contrast"),h=f("grayscale"),T=f("hueRotate"),_=f("invert"),E=f("gap"),N=f("gradientColorStops"),S=f("inset"),P=f("margin"),W=f("opacity"),$=f("padding"),er=f("saturate"),X=f("scale"),tr=f("sepia"),or=f("skew"),nr=f("space"),ar=f("translate"),q=function(){return["auto","contain","none"]},K=function(){return["auto","hidden","clip","visible","scroll"]},ir=function(){return["auto",r]},sr=function(){return["",z]},Q=function(){return["auto",w]},lr=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},Z=function(){return["solid","dashed","dotted","double","none"]},cr=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},Y=function(){return["start","end","center","between","around","evenly"]},B=function(){return["","0",y]},ur=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]};return{cacheSize:500,theme:{colors:[U],spacing:[z],blur:["none","",O,L],brightness:[w],borderColor:[e],borderRadius:["none","","full",O,L],borderSpacing:[r],borderWidth:sr(),contrast:[w],grayscale:B(),hueRotate:[w],invert:B(),gap:[r],gradientColorStops:[e],inset:ir(),margin:ir(),opacity:[w],padding:[r],saturate:[w],scale:[w],sepia:B(),skew:[w,y],space:[r],translate:[r]},classGroups:{aspect:[{aspect:["auto","square","video",y]}],container:["container"],columns:[{columns:[O]}],"break-after":[{"break-after":ur()}],"break-before":[{"break-before":ur()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(lr(),[y])}],overflow:[{overflow:K()}],"overflow-x":[{"overflow-x":K()}],"overflow-y":[{"overflow-y":K()}],overscroll:[{overscroll:q()}],"overscroll-x":[{"overscroll-x":q()}],"overscroll-y":[{"overscroll-y":q()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[S]}],"inset-x":[{"inset-x":[S]}],"inset-y":[{"inset-y":[S]}],top:[{top:[S]}],right:[{right:[S]}],bottom:[{bottom:[S]}],left:[{left:[S]}],visibility:["visible","invisible","collapse"],z:[{z:[w]}],basis:[{basis:[r]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",y]}],grow:[{grow:B()}],shrink:[{shrink:B()}],order:[{order:["first","last","none",w]}],"grid-cols":[{"grid-cols":[U]}],"col-start-end":[{col:["auto",{span:[w]}]}],"col-start":[{"col-start":Q()}],"col-end":[{"col-end":Q()}],"grid-rows":[{"grid-rows":[U]}],"row-start-end":[{row:["auto",{span:[w]}]}],"row-start":[{"row-start":Q()}],"row-end":[{"row-end":Q()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",y]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",y]}],gap:[{gap:[E]}],"gap-x":[{"gap-x":[E]}],"gap-y":[{"gap-y":[E]}],"justify-content":[{justify:Y()}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:[].concat(Y(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(Y(),["baseline","stretch"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[$]}],px:[{px:[$]}],py:[{py:[$]}],pt:[{pt:[$]}],pr:[{pr:[$]}],pb:[{pb:[$]}],pl:[{pl:[$]}],m:[{m:[P]}],mx:[{mx:[P]}],my:[{my:[P]}],mt:[{mt:[P]}],mr:[{mr:[P]}],mb:[{mb:[P]}],ml:[{ml:[P]}],"space-x":[{"space-x":[nr]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[nr]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",r]}],"min-w":[{"min-w":["min","max","fit",z]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[O]},O,L]}],h:[{h:[r,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",z]}],"max-h":[{"max-h":[r,"min","max","fit"]}],"font-size":[{text:["base",O,L]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",rr]}],"font-family":[{font:[U]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",L]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",z]}],"list-style-type":[{list:["none","disc","decimal",y]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[W]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[W]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(Z(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",z]}],"underline-offset":[{"underline-offset":["auto",z]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:[r]}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",L]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap"]}],break:[{break:["normal","words","all","keep"]}],content:[{content:["none",y]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[W]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(lr(),[wr])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",xr]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Cr]}],"bg-color":[{bg:[e]}],"gradient-from":[{from:[N]}],"gradient-via":[{via:[N]}],"gradient-to":[{to:[N]}],rounded:[{rounded:[l]}],"rounded-t":[{"rounded-t":[l]}],"rounded-r":[{"rounded-r":[l]}],"rounded-b":[{"rounded-b":[l]}],"rounded-l":[{"rounded-l":[l]}],"rounded-tl":[{"rounded-tl":[l]}],"rounded-tr":[{"rounded-tr":[l]}],"rounded-br":[{"rounded-br":[l]}],"rounded-bl":[{"rounded-bl":[l]}],"border-w":[{border:[n]}],"border-w-x":[{"border-x":[n]}],"border-w-y":[{"border-y":[n]}],"border-w-t":[{"border-t":[n]}],"border-w-r":[{"border-r":[n]}],"border-w-b":[{"border-b":[n]}],"border-w-l":[{"border-l":[n]}],"border-opacity":[{"border-opacity":[W]}],"border-style":[{border:[].concat(Z(),["hidden"])}],"divide-x":[{"divide-x":[n]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[n]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[W]}],"divide-style":[{divide:Z()}],"border-color":[{border:[a]}],"border-color-x":[{"border-x":[a]}],"border-color-y":[{"border-y":[a]}],"border-color-t":[{"border-t":[a]}],"border-color-r":[{"border-r":[a]}],"border-color-b":[{"border-b":[a]}],"border-color-l":[{"border-l":[a]}],"divide-color":[{divide:[a]}],"outline-style":[{outline:[""].concat(Z())}],"outline-offset":[{"outline-offset":[z]}],"outline-w":[{outline:[z]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:sr()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[W]}],"ring-offset-w":[{"ring-offset":[z]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",O,kr]}],"shadow-color":[{shadow:[U]}],opacity:[{opacity:[W]}],"mix-blend":[{"mix-blend":cr()}],"bg-blend":[{"bg-blend":cr()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[m]}],"drop-shadow":[{"drop-shadow":["","none",O,y]}],grayscale:[{grayscale:[h]}],"hue-rotate":[{"hue-rotate":[T]}],invert:[{invert:[_]}],saturate:[{saturate:[er]}],sepia:[{sepia:[tr]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[m]}],"backdrop-grayscale":[{"backdrop-grayscale":[h]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[T]}],"backdrop-invert":[{"backdrop-invert":[_]}],"backdrop-opacity":[{"backdrop-opacity":[W]}],"backdrop-saturate":[{"backdrop-saturate":[er]}],"backdrop-sepia":[{"backdrop-sepia":[tr]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",y]}],duration:[{duration:[w]}],ease:[{ease:["linear","in","out","in-out",y]}],delay:[{delay:[w]}],animate:[{animate:["none","spin","ping","pulse","bounce",y]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[X]}],"scale-x":[{"scale-x":[X]}],"scale-y":[{"scale-y":[X]}],rotate:[{rotate:[w,y]}],"translate-x":[{"translate-x":[ar]}],"translate-y":[{"translate-y":[ar]}],"skew-x":[{"skew-x":[or]}],"skew-y":[{"skew-y":[or]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",y]}],accent:[{accent:["auto",e]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",y]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":[r]}],"scroll-mx":[{"scroll-mx":[r]}],"scroll-my":[{"scroll-my":[r]}],"scroll-mt":[{"scroll-mt":[r]}],"scroll-mr":[{"scroll-mr":[r]}],"scroll-mb":[{"scroll-mb":[r]}],"scroll-ml":[{"scroll-ml":[r]}],"scroll-p":[{"scroll-p":[r]}],"scroll-px":[{"scroll-px":[r]}],"scroll-py":[{"scroll-py":[r]}],"scroll-pt":[{"scroll-pt":[r]}],"scroll-pr":[{"scroll-pr":[r]}],"scroll-pb":[{"scroll-pb":[r]}],"scroll-pl":[{"scroll-pl":[r]}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",y]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[z,rr]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-t","rounded-r","rounded-b","rounded-l","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]}}}var Ir=br(Tr)}}]);