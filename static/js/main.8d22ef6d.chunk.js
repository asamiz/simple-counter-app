(this["webpackJsonpsimple-counter-app"]=this["webpackJsonpsimple-counter-app"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},30:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),i=n(15),a=n.n(i),s=(n(24),n(19)),r=(n(25),n(11)),l=n(2),d=n(18),h=(n(26),n(27),n(1));var u=function(e){var t=e.title,n=e.onClick,c=e.id,o=e.testId,i=void 0===o?"app-btn":o;return Object(h.jsx)("input",{"data-testid":i,className:"btn-container",type:"button",onClick:n,value:t,id:c})},p=n(16);var b=function(){var e=Object(c.useState)(0),t=Object(d.a)(e,2),n=t[0],o=t[1];return Object(h.jsxs)("div",{className:"home-container","data-testid":"home-container",children:[Object(h.jsxs)("div",{className:"home-content-container",children:[Object(h.jsx)(u,{title:"-",onClick:function(){return o((function(e){return e-1}))},id:"action-btn-home",testId:"action-btn-decrement"}),Object(h.jsx)("div",{className:"home-counter-container",children:Object(h.jsx)("h1",{className:"home-counter","data-testid":"app-counter",children:n})}),Object(h.jsx)(u,{title:"+",onClick:function(){return o((function(e){return e+1}))},id:"action-btn-home",testId:"action-btn-increment"})]}),Object(h.jsxs)("div",{className:"home-bot-view",children:[Object(h.jsx)("h5",{className:"home-bot-note",children:"Note: When you click the button this will close the app and open the mobile app, make sure you installed the mobile app successfully."}),Object(h.jsx)(u,{title:"Close",onClick:function(){if(p.isBrowser)alert("You can not perform this action on web app, please open from your phone");else{var e="demo://app/counter/"+n;window.location.assign(e)}},id:"close-btn-home",testId:"close-btn-home"})]})]})};n(30);var j=[{key:"home",path:"/home",component:b},{key:"landing",path:"/",component:function(){var e=Object(l.f)();return Object(h.jsxs)("div",{className:"landing-container",children:[Object(h.jsxs)("div",{className:"landing-left-view",children:[Object(h.jsx)("h1",{className:"landing-header",children:"Simple counter app"}),Object(h.jsx)("p",{className:"landing-body",children:"A simple counter app using developed using React framework which user can use to change the value of the counter and close the web app to open the mobile app and mobile app will add the add the counter value to a counter inside the mobile app and preserve this value even the app is closed!"})]}),Object(h.jsxs)("div",{className:"landing-right-view",children:[Object(h.jsx)("h3",{className:"landing-bot-view-text",children:"Click here to go to the counter page \ud83d\udc47"}),Object(h.jsx)(u,{onClick:function(){e.push("/home")},title:"Counter Page",testId:"counter-page-btn",id:"counter-page-btn"})]})]})}}];var m=function(){return Object(h.jsx)(r.a,{children:Object(h.jsx)("div",{className:"app-container",children:Object(h.jsx)(l.c,{children:j.map((function(e){return Object(h.jsx)(l.a,Object(s.a)({},e))}))})})})};a.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(m,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.8d22ef6d.chunk.js.map