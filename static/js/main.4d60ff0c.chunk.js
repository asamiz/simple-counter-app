(this["webpackJsonpsimple-counter-app"]=this["webpackJsonpsimple-counter-app"]||[]).push([[0],{24:function(e,n,t){},25:function(e,n,t){},26:function(e,n,t){},27:function(e,n,t){},30:function(e,n,t){},36:function(e,n,t){"use strict";t.r(n);var c=t(0),i=t.n(c),o=t(15),a=t.n(o),s=(t(24),t(19)),r=(t(25),t(11)),l=t(2),h=t(18),u=(t(26),t(27),t(1));var p=function(e){var n=e.title,t=e.onClick,c=e.id;return Object(u.jsx)("input",{className:"btn-container",type:"button",onClick:t,value:n,id:c})},d=t(16);var j=function(){var e=Object(c.useState)(0),n=Object(h.a)(e,2),t=n[0],i=n[1];return Object(u.jsxs)("div",{className:"home-container",children:[Object(u.jsxs)("div",{className:"home-content-container",children:[Object(u.jsx)(p,{title:"-",onClick:function(){return i((function(e){return e-1}))},id:"action-btn-home"}),Object(u.jsx)("div",{className:"home-counter-container",children:Object(u.jsx)("h1",{className:"home-counter",children:t})}),Object(u.jsx)(p,{title:"+",onClick:function(){return i((function(e){return e+1}))},id:"action-btn-home"})]}),Object(u.jsxs)("div",{className:"home-bot-view",children:[Object(u.jsx)("h5",{className:"home-bot-note",children:"Note: When you click the button this will close the app and open the mobile app, make sure you installed the mobile app successfully."}),Object(u.jsx)(p,{title:"Close",onClick:function(){if(d.isBrowser)alert("You can not perform this action on web app, please open from your phone");else{var e="qrcounter://app/counter/"+t;window.location.assign(e)}},id:"close-btn-home"})]})]})};t(30);var b=[{key:"home",path:"/home",component:j},{key:"landing",path:"/",component:function(){var e=Object(l.f)();return Object(u.jsxs)("div",{className:"landing-container",children:[Object(u.jsxs)("div",{className:"landing-left-view",children:[Object(u.jsx)("h1",{className:"landing-header",children:"Simple counter app"}),Object(u.jsx)("p",{className:"landing-body",children:"A simple counter app using developed using React framework which user can use to change the value of the counter and close the web app to open the mobile app and mobile app will add the add the counter value to a counter inside the mobile app and preserve this value even the app is closed!"})]}),Object(u.jsxs)("div",{className:"landing-right-view",children:[Object(u.jsx)("h3",{className:"landing-bot-view-text",children:"Click here to go to the counter page \ud83d\udc47"}),Object(u.jsx)(p,{onClick:function(){e.push("/home")},title:"Counter Page"})]})]})}}];var m=function(){return Object(u.jsx)(r.a,{children:Object(u.jsx)("div",{className:"app-container",children:Object(u.jsx)(l.c,{children:b.map((function(e){return Object(u.jsx)(l.a,Object(s.a)({},e))}))})})})};a.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.4d60ff0c.chunk.js.map