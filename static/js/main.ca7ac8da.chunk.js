(this["webpackJsonptodo-test-1"]=this["webpackJsonptodo-test-1"]||[]).push([[0],{31:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c(19),r=c.n(i),o=c(7),s=c(8),l=c(9),a=c(1),j=function(e){var t=e.activeItem,c=e.cmpltItem,n=e.add;return Object(a.jsxs)("div",{className:"bottomBtn",children:[Object(a.jsx)(l.b,{to:"/",children:Object(a.jsx)("button",{style:{cursor:"pointer"},onClick:n,children:"all"})}),Object(a.jsx)(l.b,{to:"/active",children:Object(a.jsx)("button",{style:{cursor:"pointer"},onClick:t,children:"active"})}),Object(a.jsx)(l.b,{to:"/complete",children:Object(a.jsx)("button",{style:{cursor:"pointer"},onClick:c,children:"complete"})})]})},u=c.p+"static/media/icon-sun.910b1f9a.svg",b=c.p+"static/media/icon-moon.6c03114b.svg",d=c.p+"static/media/icon-cross.6ee81d30.svg",O=c(2),h=(c(31),function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),c=t[0],i=t[1],r=Object(n.useState)(JSON.parse(localStorage.getItem("datas"))||!1),l=Object(s.a)(r,2),h=l[0],m=l[1],p=Object(n.useState)([]),x=Object(s.a)(p,2),f=x[0],v=x[1],g=Object(n.useState)([]),k=Object(s.a)(g,2),y=k[0],C=k[1],S=Object(n.useState)(""),N=Object(s.a)(S,2),I=N[0],w=N[1],J=Object(n.useState)(!1),D=Object(s.a)(J,2),B=D[0],E=D[1],K=Object(n.useState)(JSON.parse(localStorage.getItem("dark"))||!1),M=Object(s.a)(K,2),P=M[0],T=M[1];Object(n.useEffect)((function(){!function(){var e=h.map((function(e){return e.complete})).filter((function(e){return!e}));w(e.length),0!==e.length&&E(!1)}(),localStorage.setItem("dark",JSON.stringify(P)),localStorage.setItem("datas",JSON.stringify(h))}));var q=function(){if(0!==c.length){var e={text:c,id:Date.now(),complete:!1};m(h.concat(e)),i("")}},z=function(e){var t=Object(o.a)(h).filter((function(t){return t.id===e&&(t.complete=!t.complete),t}));m(t)},A=function(e){var t=Object(o.a)(h),c=Object(o.a)(f),n=Object(o.a)(y),i=t.filter((function(t){return t.id!==e})),r=c.filter((function(t){return t.id!==e})),s=n.filter((function(t){return t.id!==e}));m(i),v(r),C(s)},F={textDecoration:"line-through",opacity:.5};return Object(a.jsx)("div",{className:P?"dark":"light",children:Object(a.jsxs)("section",{children:[Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)("h1",{children:"TODO"}),Object(a.jsx)("button",{onClick:function(){return T((function(e){return!e}))},style:{cursor:"pointer"},children:Object(a.jsx)("img",{src:P?u:b,alt:"moon/sun"})})]}),Object(a.jsxs)("div",{className:"mainInp",children:[Object(a.jsx)("div",{children:Object(a.jsx)("input",{type:"checkbox",checked:B,onClick:function(){var e=Object(o.a)(h);if(!1===B){var t=e.filter((function(e){return!1===e.complete&&(e.complete=!e.complete,E(!0)),e}));m(t)}else{var c=e.filter((function(e){return!0===e.complete&&(e.complete=!e.complete),E(!1),e}));m(c)}},className:"checkbox",style:{cursor:"pointer"}})}),Object(a.jsx)("input",{className:"write",value:c,onChange:function(e){return i(e.target.value)},onKeyPress:function(e){13!==e.keyCode&&13!==e.which||q()},placeholder:"Create a new todo"})]}),Object(a.jsx)(O.a,{path:"/",exact:!0,children:Object(a.jsx)("ul",{children:h.map((function(e){return Object(a.jsxs)("li",{children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"checkbox",checked:e.complete,onChange:function(){return z(e.id)},className:"checkbox",style:{cursor:"pointer"}}),Object(a.jsx)("h2",{style:e.complete?F:null,children:e.text})]}),Object(a.jsx)("button",{onClick:function(){return A(e.id)},children:Object(a.jsx)("img",{src:d,alt:"cross"})})]},e.id)}))})}),Object(a.jsx)(O.a,{path:"/active",children:Object(a.jsx)("ul",{children:f.map((function(e){return Object(a.jsxs)("li",{children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"checkbox",checked:e.complete,onChange:function(){return z(e.id)},className:"checkbox"}),Object(a.jsx)("h2",{style:e.complete?F:null,children:e.text})]}),Object(a.jsx)("button",{onClick:function(){return A(e.id)},children:Object(a.jsx)("img",{src:d,alt:"cross"})})]},e.id)}))})}),Object(a.jsx)(O.a,{path:"/complete",children:Object(a.jsx)("ul",{children:y.map((function(e){return Object(a.jsxs)("li",{children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"checkbox",checked:e.complete,onChange:function(){return z(e.id)},className:"checkbox"}),Object(a.jsx)("h2",{style:e.complete?F:null,children:e.text})]}),Object(a.jsx)("button",{onClick:function(){return A(e.id)},children:Object(a.jsx)("img",{src:d,alt:"cross"})})]},e.id)}))})}),Object(a.jsxs)("div",{className:"bottom",children:[Object(a.jsxs)("p",{children:[I," items left"]}),Object(a.jsx)(j,{activeItem:function(){var e=Object(o.a)(h).filter((function(e){return!e.complete}));v(e),console.log(e)},cmpltItem:function(){var e=Object(o.a)(h).filter((function(e){return e.complete}));C(e),console.log(e)},add:q}),Object(a.jsx)("button",{onClick:function(){var e=Object(o.a)(h).filter((function(e){return!e.complete}));m(e),E(!1)},style:{cursor:"pointer"},children:"Clear Completed"})]})]})})});r.a.render(Object(a.jsx)(n.StrictMode,{children:Object(a.jsx)(l.a,{basename:"/",children:Object(a.jsx)(h,{})})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.ca7ac8da.chunk.js.map