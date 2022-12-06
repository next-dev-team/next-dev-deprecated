"use strict";(self.webpackChunknext_dev=self.webpackChunknext_dev||[]).push([[506],{56088:function(O,x,v){v.r(x),v.d(x,{blue:function(){return j},cyan:function(){return V},geekblue:function(){return Z},generate:function(){return f},gold:function(){return E},green:function(){return W},grey:function(){return L},lime:function(){return T},magenta:function(){return U},orange:function(){return C},presetDarkPalettes:function(){return h},presetPalettes:function(){return u},presetPrimaryColors:function(){return m},purple:function(){return N},red:function(){return R},volcano:function(){return A},yellow:function(){return F}});var a=v(82696),l=v(79409),b=2,d=.16,_=.05,S=.05,n=.15,t=5,r=4,i=[{index:7,opacity:.15},{index:6,opacity:.25},{index:5,opacity:.3},{index:5,opacity:.45},{index:5,opacity:.65},{index:5,opacity:.85},{index:4,opacity:.9},{index:3,opacity:.95},{index:2,opacity:.97},{index:1,opacity:.98}];function c(g){var w=g.r,k=g.g,y=g.b,P=(0,a.py)(w,k,y);return{h:P.h*360,s:P.s,v:P.v}}function p(g){var w=g.r,k=g.g,y=g.b;return"#".concat((0,a.vq)(w,k,y,!1))}function o(g,w,k){var y=k/100,P={r:(w.r-g.r)*y+g.r,g:(w.g-g.g)*y+g.g,b:(w.b-g.b)*y+g.b};return P}function M(g,w,k){var y;return Math.round(g.h)>=60&&Math.round(g.h)<=240?y=k?Math.round(g.h)-b*w:Math.round(g.h)+b*w:y=k?Math.round(g.h)+b*w:Math.round(g.h)-b*w,y<0?y+=360:y>=360&&(y-=360),y}function e(g,w,k){if(g.h===0&&g.s===0)return g.s;var y;return k?y=g.s-d*w:w===r?y=g.s+d:y=g.s+_*w,y>1&&(y=1),k&&w===t&&y>.1&&(y=.1),y<.06&&(y=.06),Number(y.toFixed(2))}function s(g,w,k){var y;return k?y=g.v+S*w:y=g.v-n*w,y>1&&(y=1),Number(y.toFixed(2))}function f(g){for(var w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},k=[],y=(0,l.uA)(g),P=t;P>0;P-=1){var H=c(y),G=p((0,l.uA)({h:M(H,P,!0),s:e(H,P,!0),v:s(H,P,!0)}));k.push(G)}k.push(p(y));for(var D=1;D<=r;D+=1){var I=c(y),K=p((0,l.uA)({h:M(I,D),s:e(I,D),v:s(I,D)}));k.push(K)}return w.theme==="dark"?i.map(function(B){var z=B.index,J=B.opacity,X=p(o((0,l.uA)(w.backgroundColor||"#141414"),(0,l.uA)(k[z]),J*100));return X}):k}var m={red:"#F5222D",volcano:"#FA541C",orange:"#FA8C16",gold:"#FAAD14",yellow:"#FADB14",lime:"#A0D911",green:"#52C41A",cyan:"#13C2C2",blue:"#1890FF",geekblue:"#2F54EB",purple:"#722ED1",magenta:"#EB2F96",grey:"#666666"},u={},h={};Object.keys(m).forEach(function(g){u[g]=f(m[g]),u[g].primary=u[g][5],h[g]=f(m[g],{theme:"dark",backgroundColor:"#141414"}),h[g].primary=h[g][5]});var R=u.red,A=u.volcano,E=u.gold,C=u.orange,F=u.yellow,T=u.lime,W=u.green,V=u.cyan,j=u.blue,Z=u.geekblue,N=u.purple,U=u.magenta,L=u.grey},82696:function(O,x,v){v.d(x,{T6:function(){return p},VD:function(){return o},WE:function(){return n},Yt:function(){return M},lC:function(){return b},py:function(){return S},rW:function(){return l},s:function(){return r},ve:function(){return _},vq:function(){return t}});var a=v(4916);function l(e,s,f){return{r:(0,a.sh)(e,255)*255,g:(0,a.sh)(s,255)*255,b:(0,a.sh)(f,255)*255}}function b(e,s,f){e=(0,a.sh)(e,255),s=(0,a.sh)(s,255),f=(0,a.sh)(f,255);var m=Math.max(e,s,f),u=Math.min(e,s,f),h=0,R=0,A=(m+u)/2;if(m===u)R=0,h=0;else{var E=m-u;switch(R=A>.5?E/(2-m-u):E/(m+u),m){case e:h=(s-f)/E+(s<f?6:0);break;case s:h=(f-e)/E+2;break;case f:h=(e-s)/E+4;break;default:break}h/=6}return{h,s:R,l:A}}function d(e,s,f){return f<0&&(f+=1),f>1&&(f-=1),f<1/6?e+(s-e)*(6*f):f<1/2?s:f<2/3?e+(s-e)*(2/3-f)*6:e}function _(e,s,f){var m,u,h;if(e=(0,a.sh)(e,360),s=(0,a.sh)(s,100),f=(0,a.sh)(f,100),s===0)u=f,h=f,m=f;else{var R=f<.5?f*(1+s):f+s-f*s,A=2*f-R;m=d(A,R,e+1/3),u=d(A,R,e),h=d(A,R,e-1/3)}return{r:m*255,g:u*255,b:h*255}}function S(e,s,f){e=(0,a.sh)(e,255),s=(0,a.sh)(s,255),f=(0,a.sh)(f,255);var m=Math.max(e,s,f),u=Math.min(e,s,f),h=0,R=m,A=m-u,E=m===0?0:A/m;if(m===u)h=0;else{switch(m){case e:h=(s-f)/A+(s<f?6:0);break;case s:h=(f-e)/A+2;break;case f:h=(e-s)/A+4;break;default:break}h/=6}return{h,s:E,v:R}}function n(e,s,f){e=(0,a.sh)(e,360)*6,s=(0,a.sh)(s,100),f=(0,a.sh)(f,100);var m=Math.floor(e),u=e-m,h=f*(1-s),R=f*(1-u*s),A=f*(1-(1-u)*s),E=m%6,C=[f,R,h,h,A,f][E],F=[A,f,f,R,h,h][E],T=[h,h,A,f,f,R][E];return{r:C*255,g:F*255,b:T*255}}function t(e,s,f,m){var u=[(0,a.FZ)(Math.round(e).toString(16)),(0,a.FZ)(Math.round(s).toString(16)),(0,a.FZ)(Math.round(f).toString(16))];return m&&u[0].startsWith(u[0].charAt(1))&&u[1].startsWith(u[1].charAt(1))&&u[2].startsWith(u[2].charAt(1))?u[0].charAt(0)+u[1].charAt(0)+u[2].charAt(0):u.join("")}function r(e,s,f,m,u){var h=[(0,a.FZ)(Math.round(e).toString(16)),(0,a.FZ)(Math.round(s).toString(16)),(0,a.FZ)(Math.round(f).toString(16)),(0,a.FZ)(c(m))];return u&&h[0].startsWith(h[0].charAt(1))&&h[1].startsWith(h[1].charAt(1))&&h[2].startsWith(h[2].charAt(1))&&h[3].startsWith(h[3].charAt(1))?h[0].charAt(0)+h[1].charAt(0)+h[2].charAt(0)+h[3].charAt(0):h.join("")}function i(e,s,f,m){var u=[pad2(c(m)),pad2(Math.round(e).toString(16)),pad2(Math.round(s).toString(16)),pad2(Math.round(f).toString(16))];return u.join("")}function c(e){return Math.round(parseFloat(e)*255).toString(16)}function p(e){return o(e)/255}function o(e){return parseInt(e,16)}function M(e){return{r:e>>16,g:(e&65280)>>8,b:e&255}}},32147:function(O,x,v){v.d(x,{R:function(){return a}});var a={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"}},79409:function(O,x,v){v.d(x,{uA:function(){return d}});var a=v(82696),l=v(32147),b=v(4916);function d(o){var M={r:0,g:0,b:0},e=1,s=null,f=null,m=null,u=!1,h=!1;return typeof o=="string"&&(o=c(o)),typeof o=="object"&&(p(o.r)&&p(o.g)&&p(o.b)?(M=(0,a.rW)(o.r,o.g,o.b),u=!0,h=String(o.r).substr(-1)==="%"?"prgb":"rgb"):p(o.h)&&p(o.s)&&p(o.v)?(s=(0,b.JX)(o.s),f=(0,b.JX)(o.v),M=(0,a.WE)(o.h,s,f),u=!0,h="hsv"):p(o.h)&&p(o.s)&&p(o.l)&&(s=(0,b.JX)(o.s),m=(0,b.JX)(o.l),M=(0,a.ve)(o.h,s,m),u=!0,h="hsl"),Object.prototype.hasOwnProperty.call(o,"a")&&(e=o.a)),e=(0,b.Yq)(e),{ok:u,format:o.format||h,r:Math.min(255,Math.max(M.r,0)),g:Math.min(255,Math.max(M.g,0)),b:Math.min(255,Math.max(M.b,0)),a:e}}var _="[-\\+]?\\d+%?",S="[-\\+]?\\d*\\.\\d+%?",n="(?:".concat(S,")|(?:").concat(_,")"),t="[\\s|\\(]+(".concat(n,")[,|\\s]+(").concat(n,")[,|\\s]+(").concat(n,")\\s*\\)?"),r="[\\s|\\(]+(".concat(n,")[,|\\s]+(").concat(n,")[,|\\s]+(").concat(n,")[,|\\s]+(").concat(n,")\\s*\\)?"),i={CSS_UNIT:new RegExp(n),rgb:new RegExp("rgb"+t),rgba:new RegExp("rgba"+r),hsl:new RegExp("hsl"+t),hsla:new RegExp("hsla"+r),hsv:new RegExp("hsv"+t),hsva:new RegExp("hsva"+r),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function c(o){if(o=o.trim().toLowerCase(),o.length===0)return!1;var M=!1;if(l.R[o])o=l.R[o],M=!0;else if(o==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var e=i.rgb.exec(o);return e?{r:e[1],g:e[2],b:e[3]}:(e=i.rgba.exec(o),e?{r:e[1],g:e[2],b:e[3],a:e[4]}:(e=i.hsl.exec(o),e?{h:e[1],s:e[2],l:e[3]}:(e=i.hsla.exec(o),e?{h:e[1],s:e[2],l:e[3],a:e[4]}:(e=i.hsv.exec(o),e?{h:e[1],s:e[2],v:e[3]}:(e=i.hsva.exec(o),e?{h:e[1],s:e[2],v:e[3],a:e[4]}:(e=i.hex8.exec(o),e?{r:(0,a.VD)(e[1]),g:(0,a.VD)(e[2]),b:(0,a.VD)(e[3]),a:(0,a.T6)(e[4]),format:M?"name":"hex8"}:(e=i.hex6.exec(o),e?{r:(0,a.VD)(e[1]),g:(0,a.VD)(e[2]),b:(0,a.VD)(e[3]),format:M?"name":"hex"}:(e=i.hex4.exec(o),e?{r:(0,a.VD)(e[1]+e[1]),g:(0,a.VD)(e[2]+e[2]),b:(0,a.VD)(e[3]+e[3]),a:(0,a.T6)(e[4]+e[4]),format:M?"name":"hex8"}:(e=i.hex3.exec(o),e?{r:(0,a.VD)(e[1]+e[1]),g:(0,a.VD)(e[2]+e[2]),b:(0,a.VD)(e[3]+e[3]),format:M?"name":"hex"}:!1)))))))))}function p(o){return Boolean(i.CSS_UNIT.exec(String(o)))}},46746:function(O,x,v){v.d(x,{C:function(){return _}});var a=v(82696),l=v(32147),b=v(79409),d=v(4916),_=function(){function n(t,r){t===void 0&&(t=""),r===void 0&&(r={});var i;if(t instanceof n)return t;typeof t=="number"&&(t=(0,a.Yt)(t)),this.originalInput=t;var c=(0,b.uA)(t);this.originalInput=t,this.r=c.r,this.g=c.g,this.b=c.b,this.a=c.a,this.roundA=Math.round(100*this.a)/100,this.format=(i=r.format)!==null&&i!==void 0?i:c.format,this.gradientType=r.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=c.ok}return n.prototype.isDark=function(){return this.getBrightness()<128},n.prototype.isLight=function(){return!this.isDark()},n.prototype.getBrightness=function(){var t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3},n.prototype.getLuminance=function(){var t=this.toRgb(),r,i,c,p=t.r/255,o=t.g/255,M=t.b/255;return p<=.03928?r=p/12.92:r=Math.pow((p+.055)/1.055,2.4),o<=.03928?i=o/12.92:i=Math.pow((o+.055)/1.055,2.4),M<=.03928?c=M/12.92:c=Math.pow((M+.055)/1.055,2.4),.2126*r+.7152*i+.0722*c},n.prototype.getAlpha=function(){return this.a},n.prototype.setAlpha=function(t){return this.a=(0,d.Yq)(t),this.roundA=Math.round(100*this.a)/100,this},n.prototype.isMonochrome=function(){var t=this.toHsl().s;return t===0},n.prototype.toHsv=function(){var t=(0,a.py)(this.r,this.g,this.b);return{h:t.h*360,s:t.s,v:t.v,a:this.a}},n.prototype.toHsvString=function(){var t=(0,a.py)(this.r,this.g,this.b),r=Math.round(t.h*360),i=Math.round(t.s*100),c=Math.round(t.v*100);return this.a===1?"hsv(".concat(r,", ").concat(i,"%, ").concat(c,"%)"):"hsva(".concat(r,", ").concat(i,"%, ").concat(c,"%, ").concat(this.roundA,")")},n.prototype.toHsl=function(){var t=(0,a.lC)(this.r,this.g,this.b);return{h:t.h*360,s:t.s,l:t.l,a:this.a}},n.prototype.toHslString=function(){var t=(0,a.lC)(this.r,this.g,this.b),r=Math.round(t.h*360),i=Math.round(t.s*100),c=Math.round(t.l*100);return this.a===1?"hsl(".concat(r,", ").concat(i,"%, ").concat(c,"%)"):"hsla(".concat(r,", ").concat(i,"%, ").concat(c,"%, ").concat(this.roundA,")")},n.prototype.toHex=function(t){return t===void 0&&(t=!1),(0,a.vq)(this.r,this.g,this.b,t)},n.prototype.toHexString=function(t){return t===void 0&&(t=!1),"#"+this.toHex(t)},n.prototype.toHex8=function(t){return t===void 0&&(t=!1),(0,a.s)(this.r,this.g,this.b,this.a,t)},n.prototype.toHex8String=function(t){return t===void 0&&(t=!1),"#"+this.toHex8(t)},n.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},n.prototype.toRgbString=function(){var t=Math.round(this.r),r=Math.round(this.g),i=Math.round(this.b);return this.a===1?"rgb(".concat(t,", ").concat(r,", ").concat(i,")"):"rgba(".concat(t,", ").concat(r,", ").concat(i,", ").concat(this.roundA,")")},n.prototype.toPercentageRgb=function(){var t=function(r){return"".concat(Math.round((0,d.sh)(r,255)*100),"%")};return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}},n.prototype.toPercentageRgbString=function(){var t=function(r){return Math.round((0,d.sh)(r,255)*100)};return this.a===1?"rgb(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%)"):"rgba(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%, ").concat(this.roundA,")")},n.prototype.toName=function(){if(this.a===0)return"transparent";if(this.a<1)return!1;for(var t="#"+(0,a.vq)(this.r,this.g,this.b,!1),r=0,i=Object.entries(l.R);r<i.length;r++){var c=i[r],p=c[0],o=c[1];if(t===o)return p}return!1},n.prototype.toString=function(t){var r=Boolean(t);t=t!=null?t:this.format;var i=!1,c=this.a<1&&this.a>=0,p=!r&&c&&(t.startsWith("hex")||t==="name");return p?t==="name"&&this.a===0?this.toName():this.toRgbString():(t==="rgb"&&(i=this.toRgbString()),t==="prgb"&&(i=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(i=this.toHexString()),t==="hex3"&&(i=this.toHexString(!0)),t==="hex4"&&(i=this.toHex8String(!0)),t==="hex8"&&(i=this.toHex8String()),t==="name"&&(i=this.toName()),t==="hsl"&&(i=this.toHslString()),t==="hsv"&&(i=this.toHsvString()),i||this.toHexString())},n.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},n.prototype.clone=function(){return new n(this.toString())},n.prototype.lighten=function(t){t===void 0&&(t=10);var r=this.toHsl();return r.l+=t/100,r.l=(0,d.V2)(r.l),new n(r)},n.prototype.brighten=function(t){t===void 0&&(t=10);var r=this.toRgb();return r.r=Math.max(0,Math.min(255,r.r-Math.round(255*-(t/100)))),r.g=Math.max(0,Math.min(255,r.g-Math.round(255*-(t/100)))),r.b=Math.max(0,Math.min(255,r.b-Math.round(255*-(t/100)))),new n(r)},n.prototype.darken=function(t){t===void 0&&(t=10);var r=this.toHsl();return r.l-=t/100,r.l=(0,d.V2)(r.l),new n(r)},n.prototype.tint=function(t){return t===void 0&&(t=10),this.mix("white",t)},n.prototype.shade=function(t){return t===void 0&&(t=10),this.mix("black",t)},n.prototype.desaturate=function(t){t===void 0&&(t=10);var r=this.toHsl();return r.s-=t/100,r.s=(0,d.V2)(r.s),new n(r)},n.prototype.saturate=function(t){t===void 0&&(t=10);var r=this.toHsl();return r.s+=t/100,r.s=(0,d.V2)(r.s),new n(r)},n.prototype.greyscale=function(){return this.desaturate(100)},n.prototype.spin=function(t){var r=this.toHsl(),i=(r.h+t)%360;return r.h=i<0?360+i:i,new n(r)},n.prototype.mix=function(t,r){r===void 0&&(r=50);var i=this.toRgb(),c=new n(t).toRgb(),p=r/100,o={r:(c.r-i.r)*p+i.r,g:(c.g-i.g)*p+i.g,b:(c.b-i.b)*p+i.b,a:(c.a-i.a)*p+i.a};return new n(o)},n.prototype.analogous=function(t,r){t===void 0&&(t=6),r===void 0&&(r=30);var i=this.toHsl(),c=360/r,p=[this];for(i.h=(i.h-(c*t>>1)+720)%360;--t;)i.h=(i.h+c)%360,p.push(new n(i));return p},n.prototype.complement=function(){var t=this.toHsl();return t.h=(t.h+180)%360,new n(t)},n.prototype.monochromatic=function(t){t===void 0&&(t=6);for(var r=this.toHsv(),i=r.h,c=r.s,p=r.v,o=[],M=1/t;t--;)o.push(new n({h:i,s:c,v:p})),p=(p+M)%1;return o},n.prototype.splitcomplement=function(){var t=this.toHsl(),r=t.h;return[this,new n({h:(r+72)%360,s:t.s,l:t.l}),new n({h:(r+216)%360,s:t.s,l:t.l})]},n.prototype.onBackground=function(t){var r=this.toRgb(),i=new n(t).toRgb();return new n({r:i.r+(r.r-i.r)*r.a,g:i.g+(r.g-i.g)*r.a,b:i.b+(r.b-i.b)*r.a})},n.prototype.triad=function(){return this.polyad(3)},n.prototype.tetrad=function(){return this.polyad(4)},n.prototype.polyad=function(t){for(var r=this.toHsl(),i=r.h,c=[this],p=360/t,o=1;o<t;o++)c.push(new n({h:(i+o*p)%360,s:r.s,l:r.l}));return c},n.prototype.equals=function(t){return this.toRgbString()===new n(t).toRgbString()},n}();function S(n,t){return n===void 0&&(n=""),t===void 0&&(t={}),new _(n,t)}},4916:function(O,x,v){v.d(x,{FZ:function(){return n},JX:function(){return S},V2:function(){return l},Yq:function(){return _},sh:function(){return a}});function a(t,r){b(t)&&(t="100%");var i=d(t);return t=r===360?t:Math.min(r,Math.max(0,parseFloat(t))),i&&(t=parseInt(String(t*r),10)/100),Math.abs(t-r)<1e-6?1:(r===360?t=(t<0?t%r+r:t%r)/parseFloat(String(r)):t=t%r/parseFloat(String(r)),t)}function l(t){return Math.min(1,Math.max(0,t))}function b(t){return typeof t=="string"&&t.indexOf(".")!==-1&&parseFloat(t)===1}function d(t){return typeof t=="string"&&t.indexOf("%")!==-1}function _(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function S(t){return t<=1?"".concat(Number(t)*100,"%"):t}function n(t){return t.length===1?"0"+t:String(t)}},49257:function(O,x){function v(a){for(var l=0,b,d=0,_=a.length;_>=4;++d,_-=4)b=a.charCodeAt(d)&255|(a.charCodeAt(++d)&255)<<8|(a.charCodeAt(++d)&255)<<16|(a.charCodeAt(++d)&255)<<24,b=(b&65535)*1540483477+((b>>>16)*59797<<16),b^=b>>>24,l=(b&65535)*1540483477+((b>>>16)*59797<<16)^(l&65535)*1540483477+((l>>>16)*59797<<16);switch(_){case 3:l^=(a.charCodeAt(d+2)&255)<<16;case 2:l^=(a.charCodeAt(d+1)&255)<<8;case 1:l^=a.charCodeAt(d)&255,l=(l&65535)*1540483477+((l>>>16)*59797<<16)}return l^=l>>>13,l=(l&65535)*1540483477+((l>>>16)*59797<<16),((l^l>>>15)>>>0).toString(36)}x.Z=v},67126:function(O,x){var v={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};x.Z=v},43565:function(O,x,v){v.d(x,{Z:function(){return a}});function a(l){if(l===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return l}},7403:function(O,x,v){v.d(x,{Z:function(){return a}});function a(l,b){if(!(l instanceof b))throw new TypeError("Cannot call a class as a function")}},56141:function(O,x,v){v.d(x,{Z:function(){return b}});var a=v(87895);function l(d,_){for(var S=0;S<_.length;S++){var n=_[S];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(d,(0,a.Z)(n.key),n)}}function b(d,_,S){return _&&l(d.prototype,_),S&&l(d,S),Object.defineProperty(d,"prototype",{writable:!1}),d}},96064:function(O,x,v){v.d(x,{Z:function(){return S}});function a(n){return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},a(n)}function l(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(n){return!1}}var b=v(72558),d=v(43565);function _(n,t){if(t&&((0,b.Z)(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return(0,d.Z)(n)}function S(n){var t=l();return function(){var i=a(n),c;if(t){var p=a(this).constructor;c=Reflect.construct(i,arguments,p)}else c=i.apply(this,arguments);return _(this,c)}}},21936:function(O,x,v){v.d(x,{Z:function(){return l}});function a(b,d){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(S,n){return S.__proto__=n,S},a(b,d)}function l(b,d){if(typeof d!="function"&&d!==null)throw new TypeError("Super expression must either be null or a function");b.prototype=Object.create(d&&d.prototype,{constructor:{value:b,writable:!0,configurable:!0}}),Object.defineProperty(b,"prototype",{writable:!1}),d&&a(b,d)}}}]);
