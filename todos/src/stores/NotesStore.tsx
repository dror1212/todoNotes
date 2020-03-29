import { observable, IObservableArray } from "mobx";
import { NoteProps } from "../components/Note";

class NotesStore {
  @observable notes: IObservableArray<NoteProps> = observable([]);
}

var notesStore = ((window as any).notesStore = new NotesStore());

export default notesStore;
