"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[764],{6764:function(n,e,r){r.r(e),r.d(e,{default:function(){return Z}});var t,a,c=r(5861),s=r(9439),i=r(7757),u=r.n(i),o=r(2791),l=r(7689),p=r(1087),f=r(2029),d=r(168),h=r(5867),v=h.zo.div(t||(t=(0,d.Z)(["\n  display: flex;\n  gap: 20px;\n"]))),x=r(184),m=function(n){var e=n.details;return(0,x.jsxs)(v,{children:[(0,x.jsxs)("div",{children:[e.poster_path&&(0,x.jsx)("img",{src:"".concat(f.Mt).concat(f.vf).concat(e.poster_path),alt:e.name}),!e.poster_path&&(0,x.jsx)("img",{src:f.Xp,alt:e.name})]}),(0,x.jsxs)("div",{children:[(0,x.jsxs)("h1",{children:[e.title," (",e.release_date.split("-")[0],")"]}),(0,x.jsxs)("p",{children:["User Score: ",Math.round(10*e.vote_average),"%"]}),(0,x.jsx)("h2",{children:"Overview"}),(0,x.jsx)("p",{children:e.overview}),(0,x.jsx)("h2",{children:"Genres"}),(0,x.jsx)("p",{children:e.genres.map((function(n){return n.name})).join(" ")})]})]})},g=r(719),w=(0,h.zo)(p.rU)(a||(a=(0,d.Z)(["\n  border: 2px solid lightgray;\n  padding: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  width: 120px;\n  margin-bottom: 16px;\n"]))),j=function(n){var e=n.to;return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(w,{to:e,children:[(0,x.jsx)(g.YiX,{size:"24"}),"Go back"]})})},b=r(8174),Z=function(){var n,e,r=(0,l.UO)().movieId,t=(0,o.useState)(null),a=(0,s.Z)(t,2),i=a[0],d=a[1],h=(0,l.TH)(),v=(0,o.useRef)(null!==(n=null===(e=h.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/");return(0,o.useEffect)((function(){var n=new AbortController,e=function(){var n=(0,c.Z)(u().mark((function n(e,r){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,f.TP)(e,r);case 3:t=n.sent,d(t.data),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),"canceled"!==n.t0.message&&b.Am.error(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,r){return n.apply(this,arguments)}}();return e(r,n),function(){n.abort()}}),[r]),(0,x.jsx)("main",{children:i&&(0,x.jsxs)("div",{children:[(0,x.jsx)(j,{to:v.current}),(0,x.jsx)(m,{details:i}),(0,x.jsxs)("ul",{children:[(0,x.jsx)("li",{children:(0,x.jsx)(p.rU,{to:"cast",children:"Cast"})}),(0,x.jsx)("li",{children:(0,x.jsx)(p.rU,{to:"reviews",children:"Reviews"})})]}),(0,x.jsx)(o.Suspense,{fallback:(0,x.jsx)("div",{children:"Loading..."}),children:(0,x.jsx)(l.j3,{})})]})})}},2029:function(n,e,r){r.d(e,{Hg:function(){return h},Mt:function(){return u},TP:function(){return x},Xp:function(){return p},mu:function(){return l},tx:function(){return g},vf:function(){return o},wv:function(){return f},z1:function(){return v},zv:function(){return m}});var t=r(1413),a=r(5861),c=r(7757),s=r.n(c),i=r(5294),u="http://image.tmdb.org/t/p/",o="w500",l="w92";i.Z.defaults.baseURL="https://api.themoviedb.org/3";var p="https://via.placeholder.com/500",f="https://via.placeholder.com/92",d={api_key:"581db6ffc94d7a54214a956facb825d1"},h=function(){var n=(0,a.Z)(s().mark((function n(e){var r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=new URLSearchParams(d),n.next=3,i.Z.get("/trending/movie/day?".concat(r),{signal:e.signal});case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,a.Z)(s().mark((function n(e,r){var a,c;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=(0,t.Z)((0,t.Z)({},d),{},{query:e}),c=new URLSearchParams(a),n.next=4,i.Z.get("/search/movie?".concat(c),{signal:r.signal});case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}(),x=function(){var n=(0,a.Z)(s().mark((function n(e,r){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new URLSearchParams(d),n.next=3,i.Z.get("/movie/".concat(e,"?").concat(t),{signal:r.signal});case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}(),m=function(){var n=(0,a.Z)(s().mark((function n(e,r){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new URLSearchParams(d),n.next=3,i.Z.get("/movie/".concat(e,"/credits?").concat(t),{signal:r.signal});case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}(),g=function(){var n=(0,a.Z)(s().mark((function n(e,r){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new URLSearchParams(d),n.next=3,i.Z.get("/movie/".concat(e,"/reviews?").concat(t),{signal:r.signal});case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=764.8d64d4b3.chunk.js.map