(this.webpackJsonptodos=this.webpackJsonptodos||[]).push([[0],{188:function(e,t,n){e.exports=n(332)},331:function(e,t,n){},332:function(e,t,n){"use strict";n.r(t);var a,i,o,r,s=n(0),c=n.n(s),l=n(24),d=n.n(l),h=n(33),u=n(48),p=n(50),m=n(51),f=n(57),g=n(41),b=n(344),v=n(343),C=n(342),_=n(333),E=n(341),w=n(157),N=n(158),j=(n(193),n(15)),k=(a=function e(){Object(h.a)(this,e),Object(w.a)(this,"notes",i,this)},i=Object(N.a)(a.prototype,"notes",[j.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return Object(j.m)([])}}),a),O=window.notesStore=new k,S=n(34),D=n.n(S),y=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).completed=function(){var e=O.notes.find((function(e){return a.props.note_id===e._id}));if(e){var t=e.items.findIndex((function(e){return a.props._id===e._id}));e.items[t].isCompleted=!e.items[t].isCompleted,D.a.patch("http://localhost:5000/updateNote/"+e._id,e)}},a.state={},a}return Object(u.a)(n,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(E.a,{checked:this.props.isCompleted,onChange:this.completed,label:this.props.text}))}}]),n}(c.a.Component),x=n(79),z=Object(x.a)(o=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).nowDate=function(){var e=new Date;return String(e.getDate()).padStart(2,"0")+"/"+String(e.getMonth()+1).padStart(2,"0")+"/"+e.getFullYear()},a.onNew=function(){if(a.state.name.length>0){var e=O.notes.find((function(e){return a.props._id===e._id}));e&&(e.items.push({_id:a.props.items.length,text:a.state.name,isCompleted:!1}),e.changed=a.nowDate(),console.log(a.props._id),D.a.patch("http://localhost:5000/updateNote/"+e._id,e),a.setState({changed:a.nowDate(),name:""}))}},a.handleDeleteClick=function(){D.a.delete("http://localhost:5000/deleteSpecificNote/"+a.props._id),O.notes.replace(O.notes.filter((function(e){return e._id!==a.props._id})))},a.state={name:"",changed:a.props.changed},a}return Object(u.a)(n,[{key:"onNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"App-header"},c.a.createElement(f.a,null,c.a.createElement(g.a,{corner:"top right",color:"red",name:"delete",link:!0,onClick:this.handleDeleteClick}),c.a.createElement(b.a,{fluid:!0},c.a.createElement(b.a.Content,{header:this.props.name,meta:"Created: "+this.props.create+"   Edited: "+this.state.changed}),this.props.items.map((function(t){return c.a.createElement(y,{key:t._id,note_id:e.props._id,_id:t._id,text:t.text,isCompleted:t.isCompleted})})),"\n",c.a.createElement(v.a,{onSubmit:this.onNew},c.a.createElement(C.a,{onChange:this.onNameChange.bind(this),fluid:!0,size:"small",attached:"top",placeholder:"Name...",value:this.state.name}),c.a.createElement(_.a,{onClick:this.onNew,basic:!1,color:"orange",size:"small"},"Add")))))}}]),n}(c.a.Component))||o,A=(n(330),n(331),Object(x.a)(r=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).update=function(){D.a.get("http://localhost:5000/getAllNotes").then((function(e){O.notes.replace(e.data)}))},a.onNew=function(){if(O.notes.length<10&&a.state.name.length>0){var e=0;O.notes.length>0&&(e=O.notes[O.notes.length-1]._id+1);var t={_id:e,name:a.state.name,create:a.nowDate(),changed:a.nowDate(),items:[],isExist:!1};O.notes.push(t),D.a.post("http://localhost:5000/createNote",t),a.setState({name:""})}},a.nowDate=function(){var e=new Date;return String(e.getDate()).padStart(2,"0")+"/"+String(e.getMonth()+1).padStart(2,"0")+"/"+e.getFullYear()},a.state={name:""},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.update()}},{key:"onNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"render",value:function(){return c.a.createElement("div",{className:"main-back"},c.a.createElement(v.a,{onSubmit:this.onNew},c.a.createElement(_.a,{onClick:this.onNew,fluid:!0,size:"big",attached:"top",color:"blue"},"New"),c.a.createElement(C.a,{onChange:this.onNameChange.bind(this),fluid:!0,size:"big",attached:"top",placeholder:"Name...",value:this.state.name})),O.notes.map((function(e){return c.a.createElement(z,{key:e._id,isExist:e.isExist,items:e.items,changed:e.changed,create:e.create,_id:e._id,name:e.name})})))}}]),n}(c.a.Component))||r);d.a.render(c.a.createElement(A,null),document.getElementById("root"))}},[[188,1,2]]]);
//# sourceMappingURL=main.96e81843.chunk.js.map