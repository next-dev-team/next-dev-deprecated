"use strict";(self.webpackChunknext_dev=self.webpackChunknext_dev||[]).push([[32],{53490:function(U,C,a){a.r(C),a.d(C,{default:function(){return F}});var I=a(30279),f=a.n(I),z=a(46686),x=a.n(z),e=a(62243),G=a(36836),D=a(18212),Z=a(50959),E=a(94434),A=a.n(E),d=a(97184),M=a(18834),N=a(2153),R=a(20449),V=a(12095),p=a.n(V),j=a(43837),r=a(47146),J=function(l){var n=Z.useCallback(function(){return(0,r.tZ)("svg",p()({width:21,height:21,viewBox:"0 0 21 21",fill:"currentColor"},l),(0,r.tZ)("g",{fillRule:"evenodd"},(0,r.tZ)("g",{fillRule:"nonzero"},(0,r.tZ)("path",{d:"M7.02 3.635l12.518 12.518a1.863 1.863 0 010 2.635l-1.317 1.318a1.863 1.863 0 01-2.635 0L3.068 7.588A2.795 2.795 0 117.02 3.635zm2.09 14.428a.932.932 0 110 1.864.932.932 0 010-1.864zm-.043-9.747L7.75 9.635l9.154 9.153 1.318-1.317-9.154-9.155zM3.52 12.473c.514 0 .931.417.931.931v.932h.932a.932.932 0 110 1.864h-.932v.931a.932.932 0 01-1.863 0l-.001-.931h-.93a.932.932 0 010-1.864h.93v-.932c0-.514.418-.931.933-.931zm15.374-3.727a1.398 1.398 0 110 2.795 1.398 1.398 0 010-2.795zM4.385 4.953a.932.932 0 000 1.317l2.046 2.047L7.75 7 5.703 4.953a.932.932 0 00-1.318 0zM14.701.36a.932.932 0 01.931.932v.931h.932a.932.932 0 010 1.864h-.933l.001.932a.932.932 0 11-1.863 0l-.001-.932h-.93a.932.932 0 110-1.864h.93v-.931a.932.932 0 01.933-.932z"}))))},[l]);return(0,r.tZ)(j.Z,p()({component:n},l))},O=J,c=e.Z.defaultAlgorithm,m=e.Z.darkAlgorithm,g=e.Z.compactAlgorithm,$=function(l){var n=l.value,i=l.onChange,u=function(){var t=A()(n);n.includes(m)&&(t=t.filter(function(o){return o!==m})),n.includes(c)||t.unshift(c),i(t)},s=function(){var t=A()(n);n.includes(c)&&(t=t.filter(function(o){return o!==c})),n.includes(m)||t.push(m),i(t)},S=function(){n.includes(g)?i(n.filter(function(t){return t!==g})):i([].concat(A()(n),[g]))};return(0,r.tZ)(d.Z.Group,{trigger:"click",icon:(0,r.tZ)(O,null)},(0,r.tZ)(d.Z,{icon:(0,r.tZ)(M.Z,null),type:n.includes(c)?"primary":"default",onClick:u,tooltip:"Light"}),(0,r.tZ)(d.Z,{icon:(0,r.tZ)(N.Z,null),type:n.includes(m)?"primary":"default",onClick:s,tooltip:"Dark"}),(0,r.tZ)(d.Z,{icon:(0,r.tZ)(R.Z,null),type:n.includes(g)?"primary":"default",onClick:S,tooltip:"Compact"}))},B=$,L="antd-site-theme",H=function(l){return l==="dark"?e.Z.darkAlgorithm:l==="compact"?e.Z.compactAlgorithm:e.Z.defaultAlgorithm},P=function(l){return l===e.Z.darkAlgorithm?"dark":l===e.Z.compactAlgorithm?"compact":"light"},k=function(){var l=(0,D.pC)(),n=Z.useState({algorithm:[e.Z.defaultAlgorithm]}),i=x()(n,2),u=i[0],s=i[1],S=function(t){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,y=f()({},t);o&&(y.algorithm=u.algorithm),s(y),localStorage.setItem(L,JSON.stringify(y,function(K,T){return K==="algorithm"?Array.isArray(T)?T.map(function(Q){return P(Q)}):["light"]:T}))};return(0,Z.useLayoutEffect)(function(){var h=localStorage.getItem(L);if(h)try{var t=JSON.parse(h);t.algorithm?t.algorithm=t.algorithm.map(function(o){return H(o)}):t.algorithm=[e.Z.defaultAlgorithm],s(t)}catch(o){console.error(o)}},[]),(0,r.tZ)(G.ZP,{theme:f()({},u)},l,(0,r.tZ)(B,{value:u.algorithm,onChange:function(t){return S(f()(f()({},u),{},{algorithm:t}),!1)}}))},F=k}}]);
