(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{16:function(t,e,n){},17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var s=n(0),a=n(1),c=n.n(a),i=n(5),r=n.n(i),l=(n(16),n(8)),o=n(6),d=n(7),u=n(2),b=n(10),h=n(9);n(4);var j=function(t){var e=t.items.map((function(e){return Object(s.jsx)("div",{class:"card key={item.key}",children:Object(s.jsx)("ul",{class:"list-group list-group-flush",children:Object(s.jsx)("li",{class:"list-group-item",children:Object(s.jsxs)("div",{class:"row g-5",children:[Object(s.jsx)("input",{type:"text",class:"form-control-plaintext col",id:e.key,value:e.text,onChange:function(n){t.setUpdate(n.target.value,e.key)}}),Object(s.jsx)("button",{type:"button",class:"btn btn-danger btn-sm float-right",onClick:function(){return t.deleteItem(e.key)},children:"Delete"})]})})})})}));return Object(s.jsx)("div",{children:e})},m=(n(17),function(t){Object(b.a)(n,t);var e=Object(h.a)(n);function n(t){var s;return Object(o.a)(this,n),(s=e.call(this,t)).state={items:[],currentItem:{text:"",key:""}},s.handleInput=s.handleInput.bind(Object(u.a)(s)),s.addItem=s.addItem.bind(Object(u.a)(s)),s.deleteItem=s.deleteItem.bind(Object(u.a)(s)),s.setUpdate=s.setUpdate.bind(Object(u.a)(s)),s}return Object(d.a)(n,[{key:"handleInput",value:function(t){this.setState({currentItem:{text:t.target.value,key:Date.now()}})}},{key:"addItem",value:function(t){t.preventDefault();var e=this.state.currentItem;if(console.log(e),""!==e.text){var n=[].concat(Object(l.a)(this.state.items),[e]);this.setState({items:n,currentItem:{text:"",key:""}})}}},{key:"deleteItem",value:function(t){var e=this.state.items.filter((function(e){return e.key!==t}));this.setState({items:e})}},{key:"setUpdate",value:function(t,e){var n=this.state.items;n.map((function(n){n.key===e&&(n.text=t)})),this.setState({items:n})}},{key:"render",value:function(){return Object(s.jsxs)("div",{class:"container",children:[Object(s.jsx)("div",{class:"alert alert-danger",role:"alert",children:"Go away, I wanna be alone and sad!!"}),Object(s.jsx)("h1",{children:"To-do list"}),Object(s.jsxs)("form",{class:"row g-3",onSubmit:this.addItem,children:[Object(s.jsx)("div",{class:"col-auto",children:Object(s.jsx)("input",{type:"text",class:"form-control",placeholder:"Enter task",value:this.state.currentItem.text,onChange:this.handleInput})}),Object(s.jsx)("div",{class:"col-auto",children:Object(s.jsx)("button",{type:"submit",class:"btn btn-primary mb-3",children:"Add"})})]}),Object(s.jsx)(j,{items:this.state.items,deleteItem:this.deleteItem,setUpdate:this.setUpdate})]})}}]),n}(c.a.Component)),p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(e){var n=e.getCLS,s=e.getFID,a=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),s(t),a(t),c(t),i(t)}))};r.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(m,{})}),document.getElementById("root")),p()}},[[18,1,2]]]);
//# sourceMappingURL=main.ea181ecf.chunk.js.map