import {AddNotes, DeleteNotes, EditNotes} from '../services/noteService';

let boolean = false;
let getTitle;
let getNotes;
let getIndex;
let getColor;
export function CallDataBase(title, notes, index) {
  getTitle = title;
  getNotes = notes;
  getIndex = index;
  console.log(boolean);
}
export function CallDataBases() {
  boolean = true;

  if (getColor === undefined) {
    getColor = 'white';
  }
  console.log('test', getTitle, getNotes);
  if (
    boolean === true &&
    getTitle !== undefined &&
    getNotes !== undefined &&
    getIndex === undefined
  ) {
    AddNotes(getTitle, getNotes, getColor);
  } else if (getIndex !== undefined) {
    EditNotes(getTitle, getNotes, getIndex, getColor);
  }
}
export function addColorNote(value) {
  console.log('color', value);

  getColor = value;
}
export function CallDeleteNotes(value, index) {
  console.log('deleteNote');
  DeleteNotes(index);
}
