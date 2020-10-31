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
export function CallDataBases(value, index) {
  console.log('enter');
  console.log(value);
  boolean = true;
  if (getColor === undefined) {
    getColor = 'white';
  }
  if (
    boolean === true &&
    getTitle !== undefined &&
    getNotes !== undefined &&
    getIndex === undefined
  ) {
    AddNotes(getTitle, getNotes, getColor);
  } else if (getIndex !== undefined) {
    EditNotes(getTitle, getNotes, getIndex);
  }
  if (value === 'delete') {
    console.log('enter delete');
    DeleteNotes(index);
  }
}
export function addColorNote(value) {
  console.log('color', value);

  getColor = value;
}
