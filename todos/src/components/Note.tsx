import React from "react";
import { Card, Button, Input, Label, Icon, Form } from "semantic-ui-react";
import Todo from "./Todo";
import { observer } from "mobx-react";
import axios from "axios";
import notesStore from "../stores/NotesStore";

export type NoteProps = {
  _id: number;
  name: string;
  create: string;
  changed: string;
  items: { _id: number; text: string; isCompleted: boolean }[];
  isExist: boolean;
};
interface IState {
  name: string;
  changed: string;
}
@observer
class Note extends React.Component<NoteProps, IState> {
  constructor(props: Readonly<NoteProps>) {
    super(props);
    this.state = {
      name: "",
      changed: this.props.changed
    };
  }

  nowDate = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    return dd + "/" + mm + "/" + yyyy;
  };

  onNew = () => {
    if (this.state.name.length > 0) {
      const note = notesStore.notes.find((note: NoteProps) => {
        return this.props._id === note._id;
      });

      if (note) {
        note.items.push({
          _id: this.props.items.length,
          text: this.state.name,
          isCompleted: false
        });
        note.changed = this.nowDate();
        console.log(this.props._id);
        axios.patch("http://localhost:5000/updateNote/" + note._id, note);
        this.setState({ changed: this.nowDate(), name: "" });
      }
    }
  };

  onNameChange(event: any) {
    this.setState({ name: event.target.value });
  }

  handleDeleteClick = () => {
    axios.delete("http://localhost:5000/deleteSpecificNote/" + this.props._id);
    notesStore.notes.replace(
      notesStore.notes.filter((note: NoteProps) => {
        return note._id !== this.props._id;
      })
    );
  };

  render() {
    return (
      <div className="App-header">
        <Label>
          <Icon
            corner="top right"
            color="red"
            name="delete"
            link
            onClick={this.handleDeleteClick}
          />
          <Card fluid={true}>
            <Card.Content
              header={this.props.name}
              meta={
                "Created: " +
                this.props.create +
                "   Edited: " +
                this.state.changed
              }
            />
            {this.props.items.map(item => (
              <Todo
                key={item._id}
                note_id={this.props._id}
                _id={item._id}
                text={item.text}
                isCompleted={item.isCompleted}
              ></Todo>
            ))}
            {"\n"}
            <Form onSubmit={this.onNew}>
              <Input
                onChange={this.onNameChange.bind(this)}
                fluid={true}
                size="small"
                attached="top"
                placeholder="Name..."
                value={this.state.name}
              ></Input>
              <Button
                onClick={this.onNew}
                basic={false}
                color="orange"
                size="small"
              >
                Add
              </Button>
            </Form>
          </Card>
        </Label>
      </div>
    );
  }
}

export default Note;

// window.notesStore.notes.push({_id:0,name:"hello",create:1234,changed:4320,items: ["aaaa","bbbb","cccc"]})
