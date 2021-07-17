(this.webpackJsonpexercise=this.webpackJsonpexercise||[]).push([[0],{206:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(22),i=n.n(r),c=(n(98),n(31)),o=n(9),u=n(18),h=n(19),l=n(21),d=n(20),j=n(210),b=n(211),m=n(1),p=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(m.jsxs)(j.a,{bg:"light",expand:"lg",children:[Object(m.jsx)(j.a.Brand,{href:"/mernfrontend/",children:"ExcerTracker"}),Object(m.jsx)(j.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(m.jsxs)(j.a.Collapse,{id:"basic-navbar-nav",children:[Object(m.jsx)(b.a.Link,{href:"/mernfrontend/",children:"Exercises"}),Object(m.jsx)(b.a.Link,{href:"/mernfrontend#/create",children:"Create Exercise Log"}),Object(m.jsx)(b.a.Link,{href:"/mernfrontend#/user",children:"Create User"})]})]})}}]),n}(a.Component),x=n(11),O=n(16),g=n.n(O),f=function(e){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:e.exercise.username}),Object(m.jsx)("td",{children:e.exercise.description}),Object(m.jsx)("td",{children:e.exercise.duration}),Object(m.jsx)("td",{children:e.exercise.date.substring(0,10)}),Object(m.jsxs)("td",{children:[Object(m.jsx)(c.b,{to:"/edit/"+e.exercise._id,children:"edit"})," |"," ",Object(m.jsx)("a",{href:"#",onClick:function(){e.deleteExercise(e.exercise._id)},children:"delete"})]})]})},v=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).deleteExercise=a.deleteExercise.bind(Object(x.a)(a)),a.state={exercises:[]},a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;g.a.get("https://pure-ocean-29656.herokuapp.com/exercises/").then((function(t){e.setState({exercises:t.data})})).catch((function(e){console.log(e)}))}},{key:"deleteExercise",value:function(e){g.a.delete("https://pure-ocean-29656.herokuapp.com/exercises/"+e).then((function(e){return console.log(e.data)})),this.setState({exercises:this.state.exercises.filter((function(t){return t._id!==e}))})}},{key:"exerciseList",value:function(){var e=this;return this.state.exercises.map((function(t){return Object(m.jsx)(f,{exercise:t,deleteExercise:e.deleteExercise},t._id)}))}},{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:"Logged exercises"}),Object(m.jsxs)("table",{className:"table",children:[Object(m.jsx)("thead",{className:"thead-light",children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"Username"}),Object(m.jsx)("th",{children:"Description"}),Object(m.jsx)("th",{children:"Duration"}),Object(m.jsx)("th",{children:"Date"}),Object(m.jsx)("th",{children:"Actions"})]})}),Object(m.jsx)("tbody",{children:this.exerciseList()})]})]})}}]),n}(a.Component),C=n(36),D=n.n(C),k=(n(64),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).onChangeUsername=a.onChangeUsername.bind(Object(x.a)(a)),a.onChangeDescription=a.onChangeDescription.bind(Object(x.a)(a)),a.onChangeDuration=a.onChangeDuration.bind(Object(x.a)(a)),a.onChangeDate=a.onChangeDate.bind(Object(x.a)(a)),a.onSubmit=a.onSubmit.bind(Object(x.a)(a)),a.state={username:"",description:"",duration:0,date:new Date,users:[]},a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;g.a.get("https://pure-ocean-29656.herokuapp.com/exercises/"+this.props.match.params.id).then((function(t){e.setState({username:t.data.username,description:t.data.description,duration:t.data.duration,date:new Date(t.data.date)})})).catch((function(e){console.log(e)})),g.a.get("https://pure-ocean-29656.herokuapp.com/users/").then((function(t){t.data.length>0&&e.setState({users:t.data.map((function(e){return e.username}))})}))}},{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangeDescription",value:function(e){this.setState({description:e.target.value})}},{key:"onChangeDuration",value:function(e){this.setState({duration:e.target.value})}},{key:"onChangeDate",value:function(e){this.setState({date:e})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,description:this.state.description,duration:this.state.duration,date:this.state.date};console.log(t),g.a.post("https://pure-ocean-29656.herokuapp.com/exercises/update/"+this.props.match.params.id,t).then((function(e){console.log(e.data),window.location="https://adnjoo.github.io/mernfrontend/"}))}},{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:"Edit exercise log"}),Object(m.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Username: "}),Object(m.jsx)("select",{ref:"userInput",required:!0,className:"form-control",value:this.state.username,onChange:this.onChangeUsername,children:this.state.users.map((function(e){return Object(m.jsx)("option",{value:e,children:e},e)}))})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Description: "}),Object(m.jsx)("input",{type:"text",required:!0,className:"form-control",value:this.state.description,onChange:this.onChangeDescription})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Duration (in minutes): "}),Object(m.jsx)("input",{type:"text",required:!0,className:"form-control",value:this.state.duration,onChange:this.onChangeDuration})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Date: "}),Object(m.jsx)("div",{children:Object(m.jsx)(D.a,{selected:this.state.date,onChange:this.onChangeDate})})]}),Object(m.jsx)("div",{className:"form-group",children:Object(m.jsx)("input",{type:"submit",value:"Edit Exercise log",className:"btn btn-primary"})})]})]})}}]),n}(a.Component)),y=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).onChangeUsername=a.onChangeUsername.bind(Object(x.a)(a)),a.onChangeDescription=a.onChangeDescription.bind(Object(x.a)(a)),a.onChangeDuration=a.onChangeDuration.bind(Object(x.a)(a)),a.onChangeDate=a.onChangeDate.bind(Object(x.a)(a)),a.onSubmit=a.onSubmit.bind(Object(x.a)(a)),a.state={username:"",description:"",duration:0,date:new Date,users:[]},a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;g.a.get("https://pure-ocean-29656.herokuapp.com/users/").then((function(t){t.data.length>0&&e.setState({users:t.data.map((function(e){return e.username})),username:t.data[0].username})}))}},{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangeDescription",value:function(e){this.setState({description:e.target.value})}},{key:"onChangeDuration",value:function(e){this.setState({duration:e.target.value})}},{key:"onChangeDate",value:function(e){this.setState({date:e})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,description:this.state.description,duration:this.state.duration,date:this.state.date};console.log(t),g.a.post("https://pure-ocean-29656.herokuapp.com/exercises/add",t).then((function(e){console.log(e.data),window.location="/"}))}},{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:"Create new exercise log"}),Object(m.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Username: "}),Object(m.jsx)("select",{ref:"userInput",required:!0,className:"form-control",value:this.state.username,onChange:this.onChangeUsername,children:this.state.users.map((function(e){return Object(m.jsx)("option",{value:e,children:e},e)}))})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Description: "}),Object(m.jsx)("input",{type:"text",required:!0,className:"form-control",value:this.state.description,onChange:this.onChangeDescription})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Duration (in minutes): "}),Object(m.jsx)("input",{type:"text",required:!0,className:"form-control",value:this.state.duration,onChange:this.onChangeDuration})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Date: "}),Object(m.jsx)("div",{children:Object(m.jsx)(D.a,{selected:this.state.date,onChange:this.onChangeDate})})]}),Object(m.jsx)("div",{className:"form-group",children:Object(m.jsx)("input",{type:"submit",value:"Create Exercise log",className:"btn btn-primary"})})]})]})}}]),n}(a.Component),S=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).onChangeUsername=a.onChangeUsername.bind(Object(x.a)(a)),a.onSubmit=a.onSubmit.bind(Object(x.a)(a)),a.state={username:""},a}return Object(h.a)(n,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username};console.log(t),g.a.post("https://pure-ocean-29656.herokuapp.com/users/add",t).then((function(e){return console.log(e.data)})),this.setState({username:""})}},{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:"Create new user"}),Object(m.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Username: "}),Object(m.jsx)("input",{type:"text",required:!0,className:"form-control",value:this.state.username,onChange:this.onChangeUsername})]}),Object(m.jsx)("div",{className:"form-group",children:Object(m.jsx)("input",{type:"submit",value:"Create User",className:"btn btn-primary"})})]})]})}}]),n}(a.Component);var N=function(){return Object(m.jsx)(c.a,{basename:"/mernfrontend",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(p,{}),Object(m.jsx)("br",{}),Object(m.jsx)(o.a,{path:"/",exact:!0,component:v}),Object(m.jsx)(o.a,{path:"/edit/:id",component:k}),Object(m.jsx)(o.a,{path:"/create",component:y}),Object(m.jsx)(o.a,{path:"/user",component:S})]})})};i.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(N,{})}),document.getElementById("root"))}},[[206,1,2]]]);
//# sourceMappingURL=main.d1fa28bb.chunk.js.map