const mongoose = require("mongoose");
const NoteModel = require("../models/note.model");

module.exports = {
  setUpConnection() {
    mongoose.connect("mongodb://localhost:27017/notes", { useNewUrlParser: true, useFindAndModify: true })
  },
  async addNote(data) {
    console.log("Adding " + data.title);

    return NoteModel.create({
      id: data.id,
      title: data.title,
      content: data.content
    });
  },
  async getNotes() {
    return NoteModel.find();
  },
  async deleteNote(id) {
    return await NoteModel.findByIdAndDelete(id);
  },
  async updateNote(id, data) {
    return await NoteModel.findByIdAndUpdate(id, data);
  }
}