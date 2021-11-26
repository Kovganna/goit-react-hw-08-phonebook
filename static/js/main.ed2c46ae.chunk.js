(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={item:"ContactList_item__3jZyl"}},19:function(t,e,n){t.exports={filter__container:"Filter_filter__container__2ztXu",filter__input:"Filter_filter__input__2zkKA"}},40:function(t,e,n){},41:function(t,e,n){},7:function(t,e,n){t.exports={contact__form:"ContactForm_contact__form__1d3bS",input__number:"ContactForm_input__number__2h2nS",input__name:"ContactForm_input__name__rblk1",input__title:"ContactForm_input__title__G4neL",btn__add:"ContactForm_btn__add__2La8B"}},71:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(15),i=n.n(r),s=(n(40),n(41),n(22)),o=n(5),u=n(16),l=function(t){return t.contacts.contactList},b=function(t){return t.contacts.contactFilter},j=Object(u.a)([l,b],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),d=n(8),_=n.n(d),f=n(18),p=n(10),m=n.n(p),O=n(4);m.a.defaults.baseURL="https://6198e96a164fa60017c2321d.mockapi.io/contacts";var h=Object(O.c)("contacts/addContacts",function(){var t=Object(f.a)(_.a.mark((function t(e,n){var a,c,r;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.rejectWithValue,t.prev=1,t.next=4,m.a.post("/contacts",e);case 4:return c=t.sent,r=c.data,t.abrupt("return",r);case 9:t.prev=9,t.t0=t.catch(1),a(t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,n){return t.apply(this,arguments)}}()),v=Object(O.c)("contacts/fetchContacts",function(){var t=Object(f.a)(_.a.mark((function t(e,n){var a,c,r;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.rejectWithValue,t.prev=1,t.next=4,m.a.get("/contacts");case 4:return c=t.sent,r=c.data,t.abrupt("return",r);case 9:t.prev=9,t.t0=t.catch(1),a(t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,n){return t.apply(this,arguments)}}()),x=Object(O.c)("contacts/removeContact",function(){var t=Object(f.a)(_.a.mark((function t(e,n){var a,c,r;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.rejectWithValue,t.prev=1,t.next=4,m.a.delete("/contacts/".concat(e));case 4:return c=t.sent,r=c.data.id,t.abrupt("return",r);case 9:t.prev=9,t.t0=t.catch(1),a(t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,n){return t.apply(this,arguments)}}()),C=n(7),k=n.n(C),N=n(1);function g(){var t=Object(a.useState)(""),e=Object(s.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),i=Object(s.a)(r,2),u=i[0],b=i[1],j=Object(o.c)(l),d=Object(o.b)(),_=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":c(a);break;case"number":b(a);break;default:return}},f=function(){c(""),b("")};return Object(N.jsx)("div",{className:k.a.contact__form,children:Object(N.jsxs)("form",{className:k.a.input__form,onSubmit:function(t){t.preventDefault(),j.find((function(t){return t.name.toLowerCase()===n.toLowerCase()}))?alert("".concat(n," is already in contacts.")):d(h({name:n,number:u})),f()},children:[Object(N.jsxs)("label",{children:[Object(N.jsx)("span",{className:k.a.input__title,children:"Name"}),Object(N.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,className:k.a.input__name,value:n,onChange:_})]}),Object(N.jsxs)("label",{children:[Object(N.jsx)("span",{className:k.a.input__title,children:"Number"}),Object(N.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,className:k.a.input__number,value:u,onChange:_})]}),Object(N.jsx)("button",{type:"submit",className:k.a.btn__add,children:"Add contact"})]})})}var y=Object(O.b)("contact/filter"),w=n(19),F=n.n(w),L=function(){var t=Object(o.c)(b),e=Object(o.b)();return Object(N.jsx)("div",{className:F.a.filter__container,children:Object(N.jsxs)("label",{className:F.a.filter__title,children:["Find contacts by name",Object(N.jsx)("input",{className:F.a.filter__input,type:"text",value:t,name:"name",onChange:function(t){e(y(t.target.value))}})]})})},A=n(11),z=n.n(A);function S(){var t=Object(o.c)(j),e=Object(o.b)();return Object(a.useEffect)((function(){e(v())}),[e]),Object(N.jsx)("div",{children:Object(N.jsx)("ul",{className:"contact-list",children:t.map((function(t){var n=t.name,a=t.phone,c=t.id;return Object(N.jsxs)("li",{className:z.a.contact__item,children:[Object(N.jsxs)("p",{className:z.a.item,children:[n,":"]}),Object(N.jsx)("p",{className:z.a.item,children:a}),Object(N.jsx)("button",{type:"button",className:z.a.onClick__btn,onClick:function(){return e(x(c))},children:"Delete"},c)]},c)}))})})}function Z(){return Object(N.jsxs)("div",{className:"Container",children:[Object(N.jsx)("h1",{children:"Phonebook"}),Object(N.jsx)(g,{}),Object(N.jsx)("h2",{children:"Contacts"}),Object(N.jsx)(L,{}),Object(N.jsx)(S,{})]})}var B,J=n(2),V=n(12),W=n(35),q=Object(O.d)([],(B={},Object(V.a)(B,v.fulfilled,(function(t,e){return e.payload})),Object(V.a)(B,h.fulfilled,(function(t,e){var n=e.payload;return[].concat(Object(W.a)(t),[n])})),Object(V.a)(B,x.fulfilled,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),B)),D=Object(O.d)("",Object(V.a)({},y,(function(t,e){return e.payload}))),E=n(32),M=n.n(E),G=n(6),I=n(33),K={key:"contacts",version:1,storage:n.n(I).a,blacklist:["contactFilter"]},P=Object(J.b)({contactList:q,contactFilter:D}),R=Object(O.a)({reducer:{contacts:Object(G.g)(K,P)},middleware:function(t){return t({serializableCheck:{ignoredActions:[G.a,G.f,G.b,G.c,G.d,G.e]}}).concat(M.a)}}),U=Object(G.h)(R),X=n(34);i.a.render(Object(N.jsx)(c.a.StrictMode,{children:Object(N.jsx)(o.a,{store:R,children:Object(N.jsx)(X.a,{persistor:U,loading:null,children:Object(N.jsx)(Z,{})})})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.ed2c46ae.chunk.js.map