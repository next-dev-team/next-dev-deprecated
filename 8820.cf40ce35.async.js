(self.webpackChunknext_dev=self.webpackChunknext_dev||[]).push([[8820],{45803:function(A,g,h){"use strict";h.r(g),h.d(g,{blue:function(){return L},cyan:function(){return V},geekblue:function(){return N},generate:function(){return u},gold:function(){return E},gray:function(){return Z},green:function(){return B},grey:function(){return j},lime:function(){return I},magenta:function(){return U},orange:function(){return D},presetDarkPalettes:function(){return c},presetPalettes:function(){return s},presetPrimaryColors:function(){return x},purple:function(){return G},red:function(){return C},volcano:function(){return R},yellow:function(){return _}});var a=h(51746),b=h(35560),m=2,M=.16,T=.05,S=.05,n=.15,t=5,r=4,i=[{index:7,opacity:.15},{index:6,opacity:.25},{index:5,opacity:.3},{index:5,opacity:.45},{index:5,opacity:.65},{index:5,opacity:.85},{index:4,opacity:.9},{index:3,opacity:.95},{index:2,opacity:.97},{index:1,opacity:.98}];function l(p){var w=p.r,k=p.g,y=p.b,H=(0,a.py)(w,k,y);return{h:H.h*360,s:H.s,v:H.v}}function v(p){var w=p.r,k=p.g,y=p.b;return"#".concat((0,a.vq)(w,k,y,!1))}function o(p,w,k){var y=k/100,H={r:(w.r-p.r)*y+p.r,g:(w.g-p.g)*y+p.g,b:(w.b-p.b)*y+p.b};return H}function d(p,w,k){var y;return Math.round(p.h)>=60&&Math.round(p.h)<=240?y=k?Math.round(p.h)-m*w:Math.round(p.h)+m*w:y=k?Math.round(p.h)+m*w:Math.round(p.h)-m*w,y<0?y+=360:y>=360&&(y-=360),y}function e(p,w,k){if(p.h===0&&p.s===0)return p.s;var y;return k?y=p.s-M*w:w===r?y=p.s+M:y=p.s+T*w,y>1&&(y=1),k&&w===t&&y>.1&&(y=.1),y<.06&&(y=.06),Number(y.toFixed(2))}function f(p,w,k){var y;return k?y=p.v+S*w:y=p.v-n*w,y>1&&(y=1),Number(y.toFixed(2))}function u(p){for(var w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},k=[],y=(0,b.uA)(p),H=t;H>0;H-=1){var O=l(y),K=v((0,b.uA)({h:d(O,H,!0),s:e(O,H,!0),v:f(O,H,!0)}));k.push(K)}k.push(v(y));for(var F=1;F<=r;F+=1){var P=l(y),J=v((0,b.uA)({h:d(P,F),s:e(P,F),v:f(P,F)}));k.push(J)}return w.theme==="dark"?i.map(function(W){var X=W.index,Y=W.opacity,z=v(o((0,b.uA)(w.backgroundColor||"#141414"),(0,b.uA)(k[X]),Y*100));return z}):k}var x={red:"#F5222D",volcano:"#FA541C",orange:"#FA8C16",gold:"#FAAD14",yellow:"#FADB14",lime:"#A0D911",green:"#52C41A",cyan:"#13C2C2",blue:"#1677FF",geekblue:"#2F54EB",purple:"#722ED1",magenta:"#EB2F96",grey:"#666666"},s={},c={};Object.keys(x).forEach(function(p){s[p]=u(x[p]),s[p].primary=s[p][5],c[p]=u(x[p],{theme:"dark",backgroundColor:"#141414"}),c[p].primary=c[p][5]});var C=s.red,R=s.volcano,E=s.gold,D=s.orange,_=s.yellow,I=s.lime,B=s.green,V=s.cyan,L=s.blue,N=s.geekblue,G=s.purple,U=s.magenta,j=s.grey,Z=s.grey},51746:function(A,g,h){"use strict";h.d(g,{T6:function(){return v},VD:function(){return o},WE:function(){return n},Yt:function(){return d},lC:function(){return m},py:function(){return S},rW:function(){return b},s:function(){return r},ve:function(){return T},vq:function(){return t}});var a=h(17007);function b(e,f,u){return{r:(0,a.sh)(e,255)*255,g:(0,a.sh)(f,255)*255,b:(0,a.sh)(u,255)*255}}function m(e,f,u){e=(0,a.sh)(e,255),f=(0,a.sh)(f,255),u=(0,a.sh)(u,255);var x=Math.max(e,f,u),s=Math.min(e,f,u),c=0,C=0,R=(x+s)/2;if(x===s)C=0,c=0;else{var E=x-s;switch(C=R>.5?E/(2-x-s):E/(x+s),x){case e:c=(f-u)/E+(f<u?6:0);break;case f:c=(u-e)/E+2;break;case u:c=(e-f)/E+4;break;default:break}c/=6}return{h:c,s:C,l:R}}function M(e,f,u){return u<0&&(u+=1),u>1&&(u-=1),u<1/6?e+(f-e)*(6*u):u<1/2?f:u<2/3?e+(f-e)*(2/3-u)*6:e}function T(e,f,u){var x,s,c;if(e=(0,a.sh)(e,360),f=(0,a.sh)(f,100),u=(0,a.sh)(u,100),f===0)s=u,c=u,x=u;else{var C=u<.5?u*(1+f):u+f-u*f,R=2*u-C;x=M(R,C,e+1/3),s=M(R,C,e),c=M(R,C,e-1/3)}return{r:x*255,g:s*255,b:c*255}}function S(e,f,u){e=(0,a.sh)(e,255),f=(0,a.sh)(f,255),u=(0,a.sh)(u,255);var x=Math.max(e,f,u),s=Math.min(e,f,u),c=0,C=x,R=x-s,E=x===0?0:R/x;if(x===s)c=0;else{switch(x){case e:c=(f-u)/R+(f<u?6:0);break;case f:c=(u-e)/R+2;break;case u:c=(e-f)/R+4;break;default:break}c/=6}return{h:c,s:E,v:C}}function n(e,f,u){e=(0,a.sh)(e,360)*6,f=(0,a.sh)(f,100),u=(0,a.sh)(u,100);var x=Math.floor(e),s=e-x,c=u*(1-f),C=u*(1-s*f),R=u*(1-(1-s)*f),E=x%6,D=[u,C,c,c,R,u][E],_=[R,u,u,C,c,c][E],I=[c,c,R,u,u,C][E];return{r:D*255,g:_*255,b:I*255}}function t(e,f,u,x){var s=[(0,a.FZ)(Math.round(e).toString(16)),(0,a.FZ)(Math.round(f).toString(16)),(0,a.FZ)(Math.round(u).toString(16))];return x&&s[0].startsWith(s[0].charAt(1))&&s[1].startsWith(s[1].charAt(1))&&s[2].startsWith(s[2].charAt(1))?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0):s.join("")}function r(e,f,u,x,s){var c=[(0,a.FZ)(Math.round(e).toString(16)),(0,a.FZ)(Math.round(f).toString(16)),(0,a.FZ)(Math.round(u).toString(16)),(0,a.FZ)(l(x))];return s&&c[0].startsWith(c[0].charAt(1))&&c[1].startsWith(c[1].charAt(1))&&c[2].startsWith(c[2].charAt(1))&&c[3].startsWith(c[3].charAt(1))?c[0].charAt(0)+c[1].charAt(0)+c[2].charAt(0)+c[3].charAt(0):c.join("")}function i(e,f,u,x){var s=[pad2(l(x)),pad2(Math.round(e).toString(16)),pad2(Math.round(f).toString(16)),pad2(Math.round(u).toString(16))];return s.join("")}function l(e){return Math.round(parseFloat(e)*255).toString(16)}function v(e){return o(e)/255}function o(e){return parseInt(e,16)}function d(e){return{r:e>>16,g:(e&65280)>>8,b:e&255}}},6411:function(A,g,h){"use strict";h.d(g,{R:function(){return a}});var a={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"}},35560:function(A,g,h){"use strict";h.d(g,{uA:function(){return M}});var a=h(51746),b=h(6411),m=h(17007);function M(o){var d={r:0,g:0,b:0},e=1,f=null,u=null,x=null,s=!1,c=!1;return typeof o=="string"&&(o=l(o)),typeof o=="object"&&(v(o.r)&&v(o.g)&&v(o.b)?(d=(0,a.rW)(o.r,o.g,o.b),s=!0,c=String(o.r).substr(-1)==="%"?"prgb":"rgb"):v(o.h)&&v(o.s)&&v(o.v)?(f=(0,m.JX)(o.s),u=(0,m.JX)(o.v),d=(0,a.WE)(o.h,f,u),s=!0,c="hsv"):v(o.h)&&v(o.s)&&v(o.l)&&(f=(0,m.JX)(o.s),x=(0,m.JX)(o.l),d=(0,a.ve)(o.h,f,x),s=!0,c="hsl"),Object.prototype.hasOwnProperty.call(o,"a")&&(e=o.a)),e=(0,m.Yq)(e),{ok:s,format:o.format||c,r:Math.min(255,Math.max(d.r,0)),g:Math.min(255,Math.max(d.g,0)),b:Math.min(255,Math.max(d.b,0)),a:e}}var T="[-\\+]?\\d+%?",S="[-\\+]?\\d*\\.\\d+%?",n="(?:".concat(S,")|(?:").concat(T,")"),t="[\\s|\\(]+(".concat(n,")[,|\\s]+(").concat(n,")[,|\\s]+(").concat(n,")\\s*\\)?"),r="[\\s|\\(]+(".concat(n,")[,|\\s]+(").concat(n,")[,|\\s]+(").concat(n,")[,|\\s]+(").concat(n,")\\s*\\)?"),i={CSS_UNIT:new RegExp(n),rgb:new RegExp("rgb"+t),rgba:new RegExp("rgba"+r),hsl:new RegExp("hsl"+t),hsla:new RegExp("hsla"+r),hsv:new RegExp("hsv"+t),hsva:new RegExp("hsva"+r),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function l(o){if(o=o.trim().toLowerCase(),o.length===0)return!1;var d=!1;if(b.R[o])o=b.R[o],d=!0;else if(o==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var e=i.rgb.exec(o);return e?{r:e[1],g:e[2],b:e[3]}:(e=i.rgba.exec(o),e?{r:e[1],g:e[2],b:e[3],a:e[4]}:(e=i.hsl.exec(o),e?{h:e[1],s:e[2],l:e[3]}:(e=i.hsla.exec(o),e?{h:e[1],s:e[2],l:e[3],a:e[4]}:(e=i.hsv.exec(o),e?{h:e[1],s:e[2],v:e[3]}:(e=i.hsva.exec(o),e?{h:e[1],s:e[2],v:e[3],a:e[4]}:(e=i.hex8.exec(o),e?{r:(0,a.VD)(e[1]),g:(0,a.VD)(e[2]),b:(0,a.VD)(e[3]),a:(0,a.T6)(e[4]),format:d?"name":"hex8"}:(e=i.hex6.exec(o),e?{r:(0,a.VD)(e[1]),g:(0,a.VD)(e[2]),b:(0,a.VD)(e[3]),format:d?"name":"hex"}:(e=i.hex4.exec(o),e?{r:(0,a.VD)(e[1]+e[1]),g:(0,a.VD)(e[2]+e[2]),b:(0,a.VD)(e[3]+e[3]),a:(0,a.T6)(e[4]+e[4]),format:d?"name":"hex8"}:(e=i.hex3.exec(o),e?{r:(0,a.VD)(e[1]+e[1]),g:(0,a.VD)(e[2]+e[2]),b:(0,a.VD)(e[3]+e[3]),format:d?"name":"hex"}:!1)))))))))}function v(o){return Boolean(i.CSS_UNIT.exec(String(o)))}},12440:function(A,g,h){"use strict";h.d(g,{C:function(){return T}});var a=h(51746),b=h(6411),m=h(35560),M=h(17007),T=function(){function n(t,r){t===void 0&&(t=""),r===void 0&&(r={});var i;if(t instanceof n)return t;typeof t=="number"&&(t=(0,a.Yt)(t)),this.originalInput=t;var l=(0,m.uA)(t);this.originalInput=t,this.r=l.r,this.g=l.g,this.b=l.b,this.a=l.a,this.roundA=Math.round(100*this.a)/100,this.format=(i=r.format)!==null&&i!==void 0?i:l.format,this.gradientType=r.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=l.ok}return n.prototype.isDark=function(){return this.getBrightness()<128},n.prototype.isLight=function(){return!this.isDark()},n.prototype.getBrightness=function(){var t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3},n.prototype.getLuminance=function(){var t=this.toRgb(),r,i,l,v=t.r/255,o=t.g/255,d=t.b/255;return v<=.03928?r=v/12.92:r=Math.pow((v+.055)/1.055,2.4),o<=.03928?i=o/12.92:i=Math.pow((o+.055)/1.055,2.4),d<=.03928?l=d/12.92:l=Math.pow((d+.055)/1.055,2.4),.2126*r+.7152*i+.0722*l},n.prototype.getAlpha=function(){return this.a},n.prototype.setAlpha=function(t){return this.a=(0,M.Yq)(t),this.roundA=Math.round(100*this.a)/100,this},n.prototype.isMonochrome=function(){var t=this.toHsl().s;return t===0},n.prototype.toHsv=function(){var t=(0,a.py)(this.r,this.g,this.b);return{h:t.h*360,s:t.s,v:t.v,a:this.a}},n.prototype.toHsvString=function(){var t=(0,a.py)(this.r,this.g,this.b),r=Math.round(t.h*360),i=Math.round(t.s*100),l=Math.round(t.v*100);return this.a===1?"hsv(".concat(r,", ").concat(i,"%, ").concat(l,"%)"):"hsva(".concat(r,", ").concat(i,"%, ").concat(l,"%, ").concat(this.roundA,")")},n.prototype.toHsl=function(){var t=(0,a.lC)(this.r,this.g,this.b);return{h:t.h*360,s:t.s,l:t.l,a:this.a}},n.prototype.toHslString=function(){var t=(0,a.lC)(this.r,this.g,this.b),r=Math.round(t.h*360),i=Math.round(t.s*100),l=Math.round(t.l*100);return this.a===1?"hsl(".concat(r,", ").concat(i,"%, ").concat(l,"%)"):"hsla(".concat(r,", ").concat(i,"%, ").concat(l,"%, ").concat(this.roundA,")")},n.prototype.toHex=function(t){return t===void 0&&(t=!1),(0,a.vq)(this.r,this.g,this.b,t)},n.prototype.toHexString=function(t){return t===void 0&&(t=!1),"#"+this.toHex(t)},n.prototype.toHex8=function(t){return t===void 0&&(t=!1),(0,a.s)(this.r,this.g,this.b,this.a,t)},n.prototype.toHex8String=function(t){return t===void 0&&(t=!1),"#"+this.toHex8(t)},n.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},n.prototype.toRgbString=function(){var t=Math.round(this.r),r=Math.round(this.g),i=Math.round(this.b);return this.a===1?"rgb(".concat(t,", ").concat(r,", ").concat(i,")"):"rgba(".concat(t,", ").concat(r,", ").concat(i,", ").concat(this.roundA,")")},n.prototype.toPercentageRgb=function(){var t=function(r){return"".concat(Math.round((0,M.sh)(r,255)*100),"%")};return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}},n.prototype.toPercentageRgbString=function(){var t=function(r){return Math.round((0,M.sh)(r,255)*100)};return this.a===1?"rgb(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%)"):"rgba(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%, ").concat(this.roundA,")")},n.prototype.toName=function(){if(this.a===0)return"transparent";if(this.a<1)return!1;for(var t="#"+(0,a.vq)(this.r,this.g,this.b,!1),r=0,i=Object.entries(b.R);r<i.length;r++){var l=i[r],v=l[0],o=l[1];if(t===o)return v}return!1},n.prototype.toString=function(t){var r=Boolean(t);t=t!=null?t:this.format;var i=!1,l=this.a<1&&this.a>=0,v=!r&&l&&(t.startsWith("hex")||t==="name");return v?t==="name"&&this.a===0?this.toName():this.toRgbString():(t==="rgb"&&(i=this.toRgbString()),t==="prgb"&&(i=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(i=this.toHexString()),t==="hex3"&&(i=this.toHexString(!0)),t==="hex4"&&(i=this.toHex8String(!0)),t==="hex8"&&(i=this.toHex8String()),t==="name"&&(i=this.toName()),t==="hsl"&&(i=this.toHslString()),t==="hsv"&&(i=this.toHsvString()),i||this.toHexString())},n.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},n.prototype.clone=function(){return new n(this.toString())},n.prototype.lighten=function(t){t===void 0&&(t=10);var r=this.toHsl();return r.l+=t/100,r.l=(0,M.V2)(r.l),new n(r)},n.prototype.brighten=function(t){t===void 0&&(t=10);var r=this.toRgb();return r.r=Math.max(0,Math.min(255,r.r-Math.round(255*-(t/100)))),r.g=Math.max(0,Math.min(255,r.g-Math.round(255*-(t/100)))),r.b=Math.max(0,Math.min(255,r.b-Math.round(255*-(t/100)))),new n(r)},n.prototype.darken=function(t){t===void 0&&(t=10);var r=this.toHsl();return r.l-=t/100,r.l=(0,M.V2)(r.l),new n(r)},n.prototype.tint=function(t){return t===void 0&&(t=10),this.mix("white",t)},n.prototype.shade=function(t){return t===void 0&&(t=10),this.mix("black",t)},n.prototype.desaturate=function(t){t===void 0&&(t=10);var r=this.toHsl();return r.s-=t/100,r.s=(0,M.V2)(r.s),new n(r)},n.prototype.saturate=function(t){t===void 0&&(t=10);var r=this.toHsl();return r.s+=t/100,r.s=(0,M.V2)(r.s),new n(r)},n.prototype.greyscale=function(){return this.desaturate(100)},n.prototype.spin=function(t){var r=this.toHsl(),i=(r.h+t)%360;return r.h=i<0?360+i:i,new n(r)},n.prototype.mix=function(t,r){r===void 0&&(r=50);var i=this.toRgb(),l=new n(t).toRgb(),v=r/100,o={r:(l.r-i.r)*v+i.r,g:(l.g-i.g)*v+i.g,b:(l.b-i.b)*v+i.b,a:(l.a-i.a)*v+i.a};return new n(o)},n.prototype.analogous=function(t,r){t===void 0&&(t=6),r===void 0&&(r=30);var i=this.toHsl(),l=360/r,v=[this];for(i.h=(i.h-(l*t>>1)+720)%360;--t;)i.h=(i.h+l)%360,v.push(new n(i));return v},n.prototype.complement=function(){var t=this.toHsl();return t.h=(t.h+180)%360,new n(t)},n.prototype.monochromatic=function(t){t===void 0&&(t=6);for(var r=this.toHsv(),i=r.h,l=r.s,v=r.v,o=[],d=1/t;t--;)o.push(new n({h:i,s:l,v})),v=(v+d)%1;return o},n.prototype.splitcomplement=function(){var t=this.toHsl(),r=t.h;return[this,new n({h:(r+72)%360,s:t.s,l:t.l}),new n({h:(r+216)%360,s:t.s,l:t.l})]},n.prototype.onBackground=function(t){var r=this.toRgb(),i=new n(t).toRgb();return new n({r:i.r+(r.r-i.r)*r.a,g:i.g+(r.g-i.g)*r.a,b:i.b+(r.b-i.b)*r.a})},n.prototype.triad=function(){return this.polyad(3)},n.prototype.tetrad=function(){return this.polyad(4)},n.prototype.polyad=function(t){for(var r=this.toHsl(),i=r.h,l=[this],v=360/t,o=1;o<t;o++)l.push(new n({h:(i+o*v)%360,s:r.s,l:r.l}));return l},n.prototype.equals=function(t){return this.toRgbString()===new n(t).toRgbString()},n}();function S(n,t){return n===void 0&&(n=""),t===void 0&&(t={}),new T(n,t)}},17007:function(A,g,h){"use strict";h.d(g,{FZ:function(){return n},JX:function(){return S},V2:function(){return b},Yq:function(){return T},sh:function(){return a}});function a(t,r){m(t)&&(t="100%");var i=M(t);return t=r===360?t:Math.min(r,Math.max(0,parseFloat(t))),i&&(t=parseInt(String(t*r),10)/100),Math.abs(t-r)<1e-6?1:(r===360?t=(t<0?t%r+r:t%r)/parseFloat(String(r)):t=t%r/parseFloat(String(r)),t)}function b(t){return Math.min(1,Math.max(0,t))}function m(t){return typeof t=="string"&&t.indexOf(".")!==-1&&parseFloat(t)===1}function M(t){return typeof t=="string"&&t.indexOf("%")!==-1}function T(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function S(t){return t<=1?"".concat(Number(t)*100,"%"):t}function n(t){return t.length===1?"0"+t:String(t)}},393:function(A,g){"use strict";function h(a){for(var b=0,m,M=0,T=a.length;T>=4;++M,T-=4)m=a.charCodeAt(M)&255|(a.charCodeAt(++M)&255)<<8|(a.charCodeAt(++M)&255)<<16|(a.charCodeAt(++M)&255)<<24,m=(m&65535)*1540483477+((m>>>16)*59797<<16),m^=m>>>24,b=(m&65535)*1540483477+((m>>>16)*59797<<16)^(b&65535)*1540483477+((b>>>16)*59797<<16);switch(T){case 3:b^=(a.charCodeAt(M+2)&255)<<16;case 2:b^=(a.charCodeAt(M+1)&255)<<8;case 1:b^=a.charCodeAt(M)&255,b=(b&65535)*1540483477+((b>>>16)*59797<<16)}return b^=b>>>13,b=(b&65535)*1540483477+((b>>>16)*59797<<16),((b^b>>>15)>>>0).toString(36)}g.Z=h},15074:function(A,g){"use strict";var h={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};g.Z=h},84425:function(A){var g=A.exports={},h,a;function b(){throw new Error("setTimeout has not been defined")}function m(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?h=setTimeout:h=b}catch(d){h=b}try{typeof clearTimeout=="function"?a=clearTimeout:a=m}catch(d){a=m}})();function M(d){if(h===setTimeout)return setTimeout(d,0);if((h===b||!h)&&setTimeout)return h=setTimeout,setTimeout(d,0);try{return h(d,0)}catch(e){try{return h.call(null,d,0)}catch(f){return h.call(this,d,0)}}}function T(d){if(a===clearTimeout)return clearTimeout(d);if((a===m||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(d);try{return a(d)}catch(e){try{return a.call(null,d)}catch(f){return a.call(this,d)}}}var S=[],n=!1,t,r=-1;function i(){!n||!t||(n=!1,t.length?S=t.concat(S):r=-1,S.length&&l())}function l(){if(!n){var d=M(i);n=!0;for(var e=S.length;e;){for(t=S,S=[];++r<e;)t&&t[r].run();r=-1,e=S.length}t=null,n=!1,T(d)}}g.nextTick=function(d){var e=new Array(arguments.length-1);if(arguments.length>1)for(var f=1;f<arguments.length;f++)e[f-1]=arguments[f];S.push(new v(d,e)),S.length===1&&!n&&M(l)};function v(d,e){this.fun=d,this.array=e}v.prototype.run=function(){this.fun.apply(null,this.array)},g.title="browser",g.browser=!0,g.env={},g.argv=[],g.version="",g.versions={};function o(){}g.on=o,g.addListener=o,g.once=o,g.off=o,g.removeListener=o,g.removeAllListeners=o,g.emit=o,g.prependListener=o,g.prependOnceListener=o,g.listeners=function(d){return[]},g.binding=function(d){throw new Error("process.binding is not supported")},g.cwd=function(){return"/"},g.chdir=function(d){throw new Error("process.chdir is not supported")},g.umask=function(){return 0}},52076:function(A,g,h){var a=h(74365);function b(m){if(Array.isArray(m))return a(m)}A.exports=b,A.exports.__esModule=!0,A.exports.default=A.exports},19768:function(A){function g(h){if(typeof Symbol!="undefined"&&h[Symbol.iterator]!=null||h["@@iterator"]!=null)return Array.from(h)}A.exports=g,A.exports.__esModule=!0,A.exports.default=A.exports},83798:function(A){function g(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}A.exports=g,A.exports.__esModule=!0,A.exports.default=A.exports},91559:function(A,g,h){var a=h(52076),b=h(19768),m=h(63160),M=h(83798);function T(S){return a(S)||b(S)||m(S)||M()}A.exports=T,A.exports.__esModule=!0,A.exports.default=A.exports}}]);
