import React from 'react';
import {Checkbox} from 'semantic-ui-react'
import notesStore from '../stores/NotesStore';
import axios from 'axios';


export type TodoProps = {
  text : string
  isCompleted : boolean
  _id : number
  note_id : number
}

class Todo extends React.Component<TodoProps> {

  completed = () => {
    const note = notesStore.notes.filter(note => this.props.note_id === note._id)[0]
    const item = note.items.findIndex(item => this.props._id === item._id)
    note.items[item].isCompleted = !note.items[item].isCompleted
    axios.patch('http://localhost:5000/updateNote/' +note._id,note).then((res) => {           
                console.log(res.data)
      });
  }

  render(){
      return (
          <div>
            <Checkbox checked = {this.props.isCompleted} onChange = {this.completed} label={this.props.text} />
          </div>
       );
  }   
} 

export default Todo;
