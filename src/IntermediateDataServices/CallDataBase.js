// import {AddNotes, DeleteNotes, EditNotes} from '../services/noteService';

// let boolean = false;
// let getTitle;
// let getNotes;
// let getIndex;
// let getColor = 'white';
// let getPin = false;
// export function CallDataBase(title, notes, index) {
//   getTitle = title;
//   getNotes = notes;
//   getIndex = index;
//   console.log('print title', getTitle, getNotes);
// }
// export function CallDataBases(title, notes) {
//   boolean = true;
//   if (getTitle === undefined) {
//     getTitle = title;
//   }
//   if (getNotes === undefined) {
//     getNotes = notes;
//   }
//   // if (getColor === undefined) {
//   //   getColor = 'white';
//   // }
//   console.log('test', getTitle, getNotes);
//   if (
//     boolean === true &&
//     getTitle !== undefined &&
//     getNotes !== undefined &&
//     getIndex === undefined
//   ) {
//     console.log('add notes');
//     AddNotes(getTitle, getNotes, getColor, getPin);
//   } else if (getIndex !== undefined) {
//     console.log('edit notes', getColor);
//     EditNotes(getTitle, getNotes, getIndex, getColor, getPin);
//   }
// }
// // export function addColorNote(title, notes, index, color, pin) {
// //   console.log('pinned data', title, notes, pin, index, color);
// //   getTitle = title;
// //   getNotes = notes;
// //   getColor = color;
// //   getIndex = index;
// //   getPin = pin;
// // }
// export function addColorNote(color) {
//   getColor = color;
// }
// export function CallDeleteNotes(value, index) {
//   console.log('deleteNote', index);
//   DeleteNotes(index);
// }
// // export function callPinned(title, notes, index, color, pin) {
// //   getTitle = title;
// //   getNotes = notes;
// //   getPin = pin;
// //   getIndex = index;
// //   getColor = color;
// // }
// export function callPinned(pin) {
//   getPin = pin;
// }
noteData = Object.keys(this.state.notes).map((note) => {
  var key = note
  noteData.push(this.state.notes[key]);
  const filteredData = noteData.filter(function (Note) {
      return Note.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1 || Note.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
  });
  this.setState({
      filterNotes: filteredData
  })