const mongoose = require("mongoose");
const NoteModel = require("../models/note.model");

module.exports = {
  setUpConnection() {
    mongoose.connect("mongodb://localhost:27017/notes", { useNewUrlParser: true })
  },
  createNote(data) {
    console.log("Adding " + data.title);

    return NoteModel.create({
      id: data.id,
      title: data.title,
      content: data.content
    });
  },
  getNote(id) {
    return NoteModel.find({ id });
  }
}