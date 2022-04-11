"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[903],{9917:function(n,e,t){t.d(e,{UP:function(){return l},__:function(){return s},l0:function(){return c}});var r,a,o,i=t(168),u=t(6031),c=u.ZP.form(r||(r=(0,i.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n  width: 60%;\n"]))),s=u.ZP.label(a||(a=(0,i.Z)(["\n  font-weight: 500;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n"]))),l=u.ZP.input(o||(o=(0,i.Z)(["\n  margin-top: 10px;\n  padding: 15px;\n  border: 1px solid #bdbdbd;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n"])))},8903:function(n,e,t){t.r(e),t.d(e,{default:function(){return F}});var r=t(2791),a=t(6030),o=t(6140),i=t(885),u=t(4569),c=t.n(u),s=t(9312),l=function(){return function(n){n((0,s.$0)()),c().get("/contacts").then((function(e){var t=e.data;return n((0,s.v2)(t))})).catch((function(e){return n((0,s.I7)(e))}))}},d=t(9917),f=t(8445),m=function(n){return n.phonebook.contacts},h=function(n){return n.phonebook.filter},p=t(184);function x(){var n=(0,r.useState)(""),e=(0,i.Z)(n,2),t=e[0],u=e[1],l=(0,r.useState)(""),h=(0,i.Z)(l,2),x=h[0],b=h[1],g=(0,a.v9)(m),v=(0,a.I0)(),Z=function(n){var e=n.target,t=e.name,r=e.value;switch(t){case"name":u(r);break;case"number":b(r);break;default:return}};return(0,p.jsxs)(d.l0,{onSubmit:function(n){if(n.preventDefault(),g.find((function(n){return n.name.toLocaleLowerCase()===t.toLocaleLowerCase()}))){var e="".concat(t," is already on list");o.ZP.error(e)}else v(function(n){var e=n.name,t=n.number;return function(n){var r={name:e,number:t};n((0,s.md)()),c().post("/contacts",r).then((function(e){var t=e.data;n((0,s.ff)(t))})).catch((function(e){return n((0,s.xZ)(e))}))}}({name:t,number:x})),u(""),b("")},children:[(0,p.jsxs)(d.__,{htmlFor:"",children:["Name",(0,p.jsx)(d.UP,{type:"text",name:"name",value:t,onChange:Z,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"name"})]}),(0,p.jsxs)(d.__,{htmlFor:"",children:["Number",(0,p.jsx)(d.UP,{type:"tel",name:"number",value:x,onChange:Z,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"number"})]}),(0,p.jsx)(f.z,{type:"submit",children:"Add contact"})]})}var b,g,v,Z,j,w=t(168),_=t(6031),y=_.ZP.li(b||(b=(0,w.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  &:not(:last-child) {\n    margin-bottom: 20px;\n  }\n"]))),C=_.ZP.ul(g||(g=(0,w.Z)(["\n  width: 60%;\n  margin-left: auto;\n  margin-right: auto;\n"]))),P=_.ZP.p(v||(v=(0,w.Z)([""])));_.ZP.button(Z||(Z=(0,w.Z)([""])));function k(){var n=(0,a.v9)((function(n){return function(n){var e=m(n),t=h(n).toLowerCase();return e.filter((function(n){return n.name.toLowerCase().includes(t)}))}(n)})),e=(0,a.I0)(),t=function(n){return e(function(n){return function(e){e((0,s.us)()),c().delete("/contacts/".concat(n)).then((function(){return e((0,s.uv)(n))})).catch((function(n){return e((0,s.EF)(n))}))}}(n))};return(0,r.useEffect)((function(){e(l())}),[e]),(0,p.jsx)(C,{children:n.map((function(n){var e=n.id,r=n.name,a=n.number;return(0,p.jsxs)(y,{children:[(0,p.jsxs)(P,{children:[r,": ",a]}),(0,p.jsx)(f.z,{onClick:function(){return t(e)},children:"Delete"})]},e)}))})}function A(){var n=(0,a.v9)(h),e=(0,a.I0)();return(0,p.jsx)(d.l0,{children:(0,p.jsx)(d.__,{htmlFor:"",children:(0,p.jsx)(d.UP,{type:"text",name:"filter",value:n,onChange:function(n){return e((0,s.M6)(n.currentTarget.value))},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"Enter key word"})})})}var z=_.ZP.div(j||(j=(0,w.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n"]))),F=function(n){var e=(0,a.I0)();return(0,r.useEffect)((function(){return e(l())}),[e]),(0,p.jsxs)(z,{children:[(0,p.jsx)(o.x7,{}),(0,p.jsx)(x,{}),(0,p.jsx)("h2",{style:{textAlign:"center"},children:"Contacts"}),(0,p.jsx)(A,{}),(0,p.jsx)(k,{})]})}}}]);
//# sourceMappingURL=903.60c08f48.chunk.js.map