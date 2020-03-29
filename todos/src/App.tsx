import React from "react";
import Note, { NoteProps } from "./components/Note";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import { Button, Input, Form } from "semantic-ui-react";
import notesStore from "./stores/NotesStore";
import { observer } from "mobx-react";
import axios from "axios";

interface IProps {}

interface IState {
  name: string;
}
@observer
class App extends React.Component<IProps, IState> {
  constructor(props: Readonly<IProps>) {
    super(props);
    this.state = {
      name: ""
    };
  }

  componentDidMount() {
    this.update();
  }

  update = () => {
    axios.get("http://localhost:5000/getAllNotes").then((res: any) => {
      notesStore.notes.replace(res.data);
    });
  };

  onNew = () => {
    if (notesStore.notes.length < 10 && this.state.name.length > 0) {
      let len = 0;
      if (notesStore.notes.length > 0)
        len = notesStore.notes[notesStore.notes.length - 1]._id + 1;
      const note = {
        _id: len,
        name: this.state.name,
        create: this.nowDate(),
        changed: this.nowDate(),
        items: [],
        isExist: false
      };
      notesStore.notes.push(note);
      axios.post("http://localhost:5000/createNote", note);
      this.setState({ name: "" });
    }
  };

  nowDate = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    return dd + "/" + mm + "/" + yyyy;
  };

  onNameChange(event: any) {
    this.setState({ name: event.target.value });
  }

  render() {
    return (
      <div className="main-back">
        <Form onSubmit={this.onNew}>
          <Button
            onClick={this.onNew}
            fluid={true}
            size="big"
            attached="top"
            color="blue"
          >
            New
          </Button>
          <Input
            onChange={this.onNameChange.bind(this)}
            fluid={true}
            size="big"
            attached="top"
            placeholder="Name..."
            value={this.state.name}
          ></Input>
        </Form>
        {notesStore.notes.map((note: NoteProps) => (
          <Note
            key={note._id}
            isExist={note.isExist}
            items={note.items}
            changed={note.changed}
            create={note.create}
            _id={note._id}
            name={note.name}
          />
        ))}
      </div>
    );
  }
}

export default App;
