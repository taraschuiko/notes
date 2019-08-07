const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
  id: {type: String},
  title: {type: String},
  content: {type: String},
  username: {type: String}
}, {
  collection: "NotesCollection"
})

module.exports = mongoose.model("NoteModel", NoteSchema);