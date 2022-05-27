import{r as a,c as b,d as v,R as e}from"./index.5fb3b2e1.js";import{C as i,A as y,B as x,L as C}from"./Card.fe0a1029.js";import{F as t}from"./Form.0ac5660d.js";import"./lodash.212e8aaf.js";import"./mjml-browser.3becd21a.js";function F(){const s=a.exports.useRef(),r=a.exports.useRef(),m=a.exports.useRef(),{currentUser:l,updateEmail:d,updatePassword:p}=b(),[c,n]=a.exports.useState(""),[f,u]=a.exports.useState(!1),E=v();function h(w){if(w.preventDefault(),r.current.value!==m.current.value)return n("Passwords do not match");const o=[];u(!0),n(""),s.current.value!==l.email&&o.push(d(s.current.value)),r.current.value!==l.password&&o.push(p(r.current.value)),Promise.all(o).then(()=>{E.push("/")}).catch(()=>{n("Failed to update account")}).finally(()=>{u(!1)})}return e.createElement(e.Fragment,null,e.createElement(i,null,e.createElement(i.Body,null,e.createElement("h2",{className:"text-center mb-4"},"Update Profile"),c&&e.createElement(y,{variant:"danger"},c),e.createElement(t,{onSubmit:h},e.createElement(t.Group,{id:"email"},e.createElement(t.Label,null,"Email"),e.createElement(t.Control,{type:"email",ref:s,required:!0,defaultValue:l.email})),e.createElement(t.Group,{id:"password"},e.createElement(t.Label,null,"Password"),e.createElement(t.Control,{type:"password",ref:r,placeholder:"Leave empty for not making a change"})),e.createElement(t.Group,{id:"password-confirm"},e.createElement(t.Label,null,"Password Confirm"),e.createElement(t.Control,{type:"password",ref:m,placeholder:"Leave empty for not making a change"})),e.createElement(x,{disabled:f,className:"w-100 mt-3",type:"submit"},"Update")))),e.createElement("div",{className:"w-100 text-center mt-2"},e.createElement(C,{to:"/"},"Cancel")))}export{F as default};
//# sourceMappingURL=UpdateProfile.cfeff64f.js.map
