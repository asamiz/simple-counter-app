(this["webpackJsonpsimple-counter-app"]=this["webpackJsonpsimple-counter-app"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},30:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),o=n(15),a=n.n(o),s=(n(24),n(19)),r=(n(25),n(11)),l=n(2),d=n(18),p=(n(26),n(27),n(1));var h=function(e){var t=e.title,n=e.onClick,c=e.id,i=e.testId,o=void 0===i?"app-btn":i;return Object(p.jsx)("input",{"data-testid":o,className:"btn-container",type:"button",onClick:n,value:t,id:c})},u=n(16);var b=function(){var e=Object(c.useState)(0),t=Object(d.a)(e,2),n=t[0],i=t[1];return Object(p.jsx)("div",{className:"home-container","data-testid":"home-container",children:Object(p.jsxs)("div",{className:"home-content-container",children:[Object(p.jsxs)("div",{className:"home-counter-section-container",children:[Object(p.jsx)(h,{title:"-",onClick:function(){return i((function(e){return e-1}))},id:"action-btn-home",testId:"action-btn-decrement"}),Object(p.jsx)("div",{className:"home-counter-container",children:Object(p.jsx)("h1",{className:"home-counter","data-testid":"app-counter",children:n})}),Object(p.jsx)(h,{title:"+",onClick:function(){return i((function(e){return e+1}))},id:"action-btn-home",testId:"action-btn-increment"})]}),Object(p.jsxs)("div",{className:"home-bot-view",children:[Object(p.jsx)("h5",{className:"home-bot-note",children:"Note: When you click the button this will close the app and open the mobile app, make sure you installed the mobile app successfully."}),Object(p.jsx)(h,{title:"Open Mobile App",onClick:function(){if(u.isBrowser)alert("You can not perform this action on web app, please open from your phone");else{var e="demo://app/counter/"+n;window.location.assign(e)}},id:"close-btn-home",testId:"close-btn-home"})]})]})})};n(30);var j=[{key:"home",path:"/home",component:b},{key:"landing",path:"/",component:function(){var e=Object(l.f)();return Object(p.jsxs)("div",{className:"landing-container",children:[Object(p.jsxs)("div",{className:"landing-left-view",children:[Object(p.jsx)("h1",{className:"landing-header",children:"Simple counter app"}),Object(p.jsx)("p",{className:"landing-body",children:"A simple counter app developed using React framework which user can use to change the value of the counter and close the web app to open the mobile app and mobile app will add the add the counter value to a counter inside the mobile app and preserve this value even the app is closed!"})]}),Object(p.jsxs)("div",{className:"landing-right-view",children:[Object(p.jsx)("h3",{className:"landing-bot-view-text",children:"CLICK HERE TO GO TO THE COUNTER PAGE \ud83d\udc47"}),Object(p.jsx)(h,{onClick:function(){e.push("/home")},title:"Counter Page",testId:"counter-page-btn",id:"counter-page-btn"})]})]})}}];var m=function(){return Object(p.jsx)(r.a,{children:Object(p.jsx)("div",{className:"app-container",children:Object(p.jsx)(l.c,{children:j.map((function(e){return Object(p.jsx)(l.a,Object(s.a)({},e))}))})})})};a.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(m,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.fa3ef966.chunk.js.map