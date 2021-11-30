(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[2],{104:function(t,e,n){},107:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),a=n(29),i=n.n(a),u=(n(60),n(4)),s=n(48),o=n.n(s),l=n(6),b=n(17),j=n(25),d=n.n(j),f=n(15),h=n(1),p=function(){var t=Object(l.c)(f.b);return Object(h.jsxs)("nav",{children:[Object(h.jsx)(b.b,{exact:!0,to:"/",className:d.a.navLink,activeClassName:d.a.activeLink,children:"Home"}),t&&Object(h.jsx)(b.b,{exact:!0,to:"/contacts",className:d.a.navLink,activeClassName:d.a.activeLink,children:"Phonebook"}),Object(h.jsx)("hr",{})]})},v=n(22),O=n.n(v);function x(){return Object(h.jsxs)("div",{className:O.a.nav__container,children:[Object(h.jsx)(b.b,{to:"/signup",className:O.a.navLink,activeClassName:O.a.activeLink,children:"SignUp"}),Object(h.jsx)(b.b,{to:"/login",className:O.a.navLink,activeClassName:O.a.activeLink,children:"LogIn"})]})}var g=n(32),_=n.n(g),k=n(18);function m(){var t=Object(l.b)(),e=Object(l.c)(f.c);return Object(h.jsxs)("div",{className:_.a.user__container,children:[Object(h.jsxs)("span",{className:_.a.greeting__title,children:["Welcome, ",e,"!"]}),Object(h.jsx)("button",{type:"button",className:_.a.logout__btn,onClick:function(){return t(Object(k.c)())},children:"LogOut"})]})}var L=n(51),y=n.n(L);function N(){var t=Object(l.c)(f.b);return Object(h.jsxs)("header",{className:y.a.header__style,children:[Object(h.jsx)(p,{}),t?Object(h.jsx)(m,{}):Object(h.jsx)(x,{})]})}var w=function(t){var e=t.children;return Object(h.jsx)("div",{children:e})},C=(n(104),n(21)),I=n(31),U=["children","restricted","redirectTo"];function W(t){var e=t.children,n=(t.restricted,t.redirectTo),c=void 0===n?"/":n,r=Object(I.a)(t,U),a=Object(l.c)(f.b);return Object(h.jsx)(u.b,Object(C.a)(Object(C.a)({},r),{},{children:a?e:Object(h.jsx)(u.a,{to:c})}))}var V=["children","restricted"];function z(t){var e=t.children,n=t.restricted,c=void 0!==n&&n,r=Object(I.a)(t,V),a=Object(l.c)(f.b)&&c;return Object(h.jsx)(u.b,Object(C.a)(Object(C.a)({},r),{},{children:a?Object(h.jsx)(u.a,{to:"/"}):e}))}var A=Object(c.lazy)((function(){return n.e(0).then(n.bind(null,116))})),F=Object(c.lazy)((function(){return n.e(5).then(n.bind(null,117))})),M=Object(c.lazy)((function(){return n.e(1).then(n.bind(null,118))})),S=Object(c.lazy)((function(){return n.e(3).then(n.bind(null,112))}));function Z(){var t=Object(l.b)(),e=Object(l.c)(f.a);return Object(c.useEffect)((function(){t(Object(k.a)())}),[t]),!e&&Object(h.jsxs)("div",{className:"Container",children:[Object(h.jsx)(N,{}),Object(h.jsx)(w,{children:Object(h.jsx)(c.Suspense,{fallback:Object(h.jsx)(o.a,{}),children:Object(h.jsxs)(u.d,{children:[Object(h.jsx)(z,{exact:!0,path:"/",children:Object(h.jsx)(A,{})}),Object(h.jsx)(W,{path:"/contacts",redirectTo:"/login",children:Object(h.jsx)(S,{})}),Object(h.jsx)(z,{exact:!0,path:"/signup",restricted:!0,children:Object(h.jsx)(F,{})}),Object(h.jsx)(z,{exact:!0,path:"/login",restricted:!0,children:Object(h.jsx)(M,{})})]})})})]})}var B,E,T=n(7),H=n(5),J=n(10),R=n(55),X=n(26),q=n(37),P=Object(H.d)([],(B={},Object(J.a)(B,X.b.fulfilled,(function(t,e){return e.payload})),Object(J.a)(B,X.a.fulfilled,(function(t,e){var n=e.payload;return[].concat(Object(R.a)(t),[n])})),Object(J.a)(B,X.c.fulfilled,(function(t,e){var n=e.payload;t.filter((function(t){return t.id!==n}))})),B)),Q=Object(H.d)("",Object(J.a)({},q.a,(function(t,e){return e.payload}))),D=Object(H.e)({name:"auth",initialState:{user:{name:"",email:""},token:"",isLoggedIn:!1,IsFetchingCurrentUser:!1},extraReducers:(E={},Object(J.a)(E,k.d.fulfilled,(function(t,e){var n=e.payload;t.user=n.user,t.token=n.token,t.isLoggedIn=!0})),Object(J.a)(E,k.b.fulfilled,(function(t,e){var n=e.payload;t.user=n.user,t.token=n.token,t.isLoggedIn=!0})),Object(J.a)(E,k.c.fulfilled,(function(t,e){t.user={name:"",email:""},t.token="",t.isLoggedIn=!1})),Object(J.a)(E,k.a.pending,(function(t){t.IsFecthingCurrentUser=!0})),Object(J.a)(E,k.a.fulfilled,(function(t,e){var n=e.payload;t.user=n,t.isLoggedIn=!0})),Object(J.a)(E,k.a.rejected,(function(t){t.IsFecthingCurrentUser=!1})),E)}).reducer,G=n(52),K=n.n(G),Y=n(20),$=n(53),tt={key:"auth",storage:n.n($).a,whitelist:["token"]},et=Object(T.b)({contactList:P,contactFilter:Q}),nt=Object(H.a)({reducer:{auth:Object(Y.g)(tt,D),contacts:et},middleware:function(t){return t({serializableCheck:{ignoredActions:[Y.a,Y.f,Y.b,Y.c,Y.d,Y.e]}}).concat(K.a)}}),ct=Object(Y.h)(nt),rt=n(54);i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(l.a,{store:nt,children:Object(h.jsx)(rt.a,{persistor:ct,loading:null,children:Object(h.jsx)(b.a,{children:Object(h.jsx)(Z,{})})})})}),document.getElementById("root"))},15:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var c=function(t){return t.auth.isLoggedIn},r=function(t){return t.auth.user.name},a=function(t){return t.auth.isFetchingCurrentUser}},18:function(t,e,n){"use strict";n.d(e,"d",(function(){return j})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return f})),n.d(e,"a",(function(){return h}));var c=n(8),r=n.n(c),a=n(19),i=n(16),u=n.n(i),s=n(5),o="https://connections-api.herokuapp.com",l=function(t){u.a.defaults.headers.common.Authorization="Bearer ".concat(t)},b=function(){u.a.defaults.headers.common.Authorization=""},j=Object(s.c)("auth/register",function(){var t=Object(a.a)(r.a.mark((function t(e,n){var c,a,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n.rejectWithValue,t.prev=1,t.next=4,u.a.post("".concat(o,"/users/signup"),e);case 4:return a=t.sent,i=a.data,l(i.token),t.abrupt("return",i);case 10:t.prev=10,t.t0=t.catch(1),c(t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,n){return t.apply(this,arguments)}}()),d=Object(s.c)("auth/login",function(){var t=Object(a.a)(r.a.mark((function t(e,n){var c,a,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n.rejectWithValue,t.prev=1,t.next=4,u.a.post("".concat(o,"/users/login"),e);case 4:return a=t.sent,i=a.data,l(i.token),t.abrupt("return",i);case 10:t.prev=10,t.t0=t.catch(1),c(t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,n){return t.apply(this,arguments)}}()),f=Object(s.c)("auth/logout",function(){var t=Object(a.a)(r.a.mark((function t(e,n){var c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n.rejectWithValue,t.prev=1,t.next=4,u.a.post("".concat(o,"/users/logout"));case 4:b(),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),c(t.t0);case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e,n){return t.apply(this,arguments)}}()),h=Object(s.c)("auth/refresh",function(){var t=Object(a.a)(r.a.mark((function t(e,n,c){var a,i,s,o,b;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=c.rejectWithValue,i=n.getState(),""!==(s=i.auth.token)){t.next=6;break}return console.log("No token"),t.abrupt("return",n.rejectWithValue());case 6:return l(s),t.prev=7,t.next=10,u.a.get("/users/current");case 10:return o=t.sent,b=o.data,t.abrupt("return",b);case 15:t.prev=15,t.t0=t.catch(7),a(t.t0);case 18:case"end":return t.stop()}}),t,null,[[7,15]])})));return function(e,n,c){return t.apply(this,arguments)}}())},22:function(t,e,n){t.exports={navLink:"AuthNav_navLink__1FZ1a",activeNavLink:"AuthNav_activeNavLink__ZE7yM",nav__container:"AuthNav_nav__container__1vMuZ"}},25:function(t,e,n){t.exports={navLink:"Navigation_navLink___FiXb",activeNavLink:"Navigation_activeNavLink__2dQuH"}},26:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return b}));var c=n(8),r=n.n(c),a=n(19),i=n(16),u=n.n(i),s=n(5);u.a.defaults.baseURL="https://connections-api.herokuapp.com";var o=Object(s.c)("contacts/addContacts",function(){var t=Object(a.a)(r.a.mark((function t(e,n){var c,a,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n.rejectWithValue,t.prev=1,t.next=4,u.a.post("/contacts",e);case 4:return a=t.sent,i=a.data,t.abrupt("return",i);case 9:t.prev=9,t.t0=t.catch(1),c(t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,n){return t.apply(this,arguments)}}()),l=Object(s.c)("contacts/fetchContacts",function(){var t=Object(a.a)(r.a.mark((function t(e,n){var c,a,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n.rejectWithValue,t.prev=1,t.next=4,u.a.get("/contacts");case 4:return a=t.sent,i=a.data,t.abrupt("return",i);case 9:t.prev=9,t.t0=t.catch(1),c(t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,n){return t.apply(this,arguments)}}()),b=Object(s.c)("contacts/removeContact",function(){var t=Object(a.a)(r.a.mark((function t(e,n){var c,a,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n.rejectWithValue,t.prev=1,t.next=4,u.a.delete("/contacts/".concat(e));case 4:return a=t.sent,i=a.data.id,t.abrupt("return",i);case 9:t.prev=9,t.t0=t.catch(1),c(t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,n){return t.apply(this,arguments)}}())},32:function(t,e,n){t.exports={user__container:"UserMenu_user__container__Ufilq",logout__btn:"UserMenu_logout__btn__ZNavM"}},37:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var c=n(5),r=Object(c.b)("contact/filter")},51:function(t,e,n){t.exports={header__style:"AppBar_header__style__XSbLe"}},60:function(t,e,n){}},[[107,4,6]]]);
//# sourceMappingURL=main.0e70d082.chunk.js.map