(this["webpackJsonpsimple-counter-app"]=this["webpackJsonpsimple-counter-app"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),a=n(15),o=n.n(a),s=(n(23),n(18)),l=(n(24),n(11)),r=n(2),h=n(17),u=(n(25),n(26),n(1));var d=function(e){var t=e.title,n=e.onClick,c=e.id;return Object(u.jsx)("input",{className:"btn-container",type:"button",onClick:n,value:t,id:c})};var j=function(){var e=Object(c.useState)(0),t=Object(h.a)(e,2),n=t[0],i=t[1];return Object(u.jsxs)("div",{className:"home-container",children:[Object(u.jsxs)("div",{className:"home-content-container",children:[Object(u.jsx)(d,{title:"-",onClick:function(){return i((function(e){return e-1}))},id:"action-btn-home"}),Object(u.jsx)("div",{className:"home-counter-container",children:Object(u.jsx)("h1",{className:"home-counter",children:n})}),Object(u.jsx)(d,{title:"+",onClick:function(){return i((function(e){return e+1}))},id:"action-btn-home"})]}),Object(u.jsxs)("div",{className:"home-bot-view",children:[Object(u.jsx)("h5",{className:"home-bot-note",children:"Note: When you click the button this will close the app and open the mobile app, make sure you installed the mobile app successfully."}),Object(u.jsx)(d,{title:"Close",onClick:function(){},id:"close-btn-home"})]})]})};n(28);var p=[{key:"home",path:"/home",component:j},{key:"landing",path:"/",component:function(){var e=Object(r.f)();return Object(u.jsxs)("div",{className:"landing-container",children:[Object(u.jsxs)("div",{className:"landing-left-view",children:[Object(u.jsx)("h1",{className:"landing-header",children:"Simple counter app"}),Object(u.jsx)("p",{className:"landing-body",children:"A simple counter app using developed using React framework which user can use to change the value of the counter and close the web app to open the mobile app and mobile app will add the add the counter value to a counter inside the mobile app and preserve this value even the app is closed!"})]}),Object(u.jsxs)("div",{className:"landing-right-view",children:[Object(u.jsx)("h3",{className:"landing-bot-view-text",children:"Click here to go to the counter page \ud83d\udc47"}),Object(u.jsx)(d,{onClick:function(){e.push("/home")},title:"Counter Page"})]})]})}}];var b=function(){return Object(u.jsx)(l.a,{children:Object(u.jsx)("div",{className:"app-container",children:Object(u.jsx)(r.c,{children:p.map((function(e){return Object(u.jsx)(r.a,Object(s.a)({},e))}))})})})};o.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.3dd5d63a.chunk.js.map