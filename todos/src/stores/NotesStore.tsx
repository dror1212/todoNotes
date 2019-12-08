import {observable} from 'mobx';
import { NoteProps } from '../components/Note';

class NotesStore {

    @observable notes: NoteProps[] = [];

}

var notesStore = (window as any).notesStore = new NotesStore();

export default notesStore;