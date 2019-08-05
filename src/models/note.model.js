const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  _id: {type: String},
  title: {type: String},
  content: {type: String}
}, {
  collection: "NotesCollection"
})

module.exports = mongoose.model("NoteModel", NoteSchema);