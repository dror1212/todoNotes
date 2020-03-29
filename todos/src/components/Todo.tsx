import React from "react";
import { Checkbox } from "semantic-ui-react";
import notesStore from "../stores/NotesStore";
import axios from "axios";
import { NoteProps } from "./Note";

export type TodoProps = {
  text: string;
  isCompleted: boolean;
  _id: number;
  note_id: number;
};

interface IState {}

class Todo extends React.Component<TodoProps, IState> {
  constructor(props: Readonly<TodoProps>) {
    super(props);
    this.state = {};
  }

  completed = () => {
    const note = notesStore.notes.find((note: NoteProps) => {
      return this.props.note_id === note._id;
    });
    if (note) {
      const index: number = note.items.findIndex(
        (item: any) => this.props._id === item._id
      );
      note.items[index].isCompleted = !note.items[index].isCompleted;
      axios.patch("http://localhost:5000/updateNote/" + note._id, note);
    }
  };

  render() {
    return (
      <div>
        <Checkbox
          checked={this.props.isCompleted}
          onChange={this.completed}
          label={this.props.text}
        />
      </div>
    );
  }
}

export default Todo;
