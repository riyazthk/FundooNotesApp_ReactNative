import {AddNotes} from '../services/dataBaseController';
let boolean = false;
let getTitle;
let getNotes;
export function CallDataBase(title, notes) {
  getTitle = title;
  getNotes = notes;
  console.log(boolean);
}
export function CallDataBases() {
  console.log('enter');
  boolean = true;
  if (boolean === true) {
    console.log('print notes', getTitle, getNotes);
    AddNotes(getTitle, getNotes);
  }
}
