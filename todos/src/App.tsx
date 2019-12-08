import React from 'react';
import Note from './components/Note'
import 'semantic-ui-css/semantic.min.css'
import './App.css'
import {Button,Input} from 'semantic-ui-react'
import notesStore from './stores/NotesStore';
import { observer } from 'mobx-react';


@observer
class App extends React.Component {

  state = {
    name:"",
    last:1
  }
/*
  componentDidMount() {
    notesStore.notes.push({
      _id: 0,
      name: "fgggg",
      create: this.nowDate() ,
      changed: this.nowDate(),
      items: ["abc"]
    });
  }
*/
  onNew = ()=>{
    if(notesStore.notes.length < 10 && this.state.name.length > 0){
      notesStore.notes.push({
        _id: this.state.last,
        name: this.state.name,
        create: this.nowDate(),
        changed: this.nowDate(),
        items: []
      });
      this.setState({last:this.state.last+1})
    }

  }

  nowDate =() =>{
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    return dd + '/' + mm + '/' + yyyy;
  }

  onNameChange(event:any){
    this.setState({name:event.target.value})
  }

  render(){
    console.log("len: "+notesStore.notes.length)
    return (
      <div>
          <Button onClick={this.onNew} fluid = {true} size = "big" attached = 'top' color = 'blue'>New</Button>
          <Input onChange={this.onNameChange.bind(this)} fluid = {true} size = "big" attached = 'top' placeholder="Name..."></Input>
          {notesStore.notes.map(note =>
            <Note key={note._id} items = {note.items} changed = {note.changed} create = {note.create} _id = {note._id} name = {note.name}/>
          )}
      </div>
  );
}
}

export default App;
