const mongoose = require("mongoose");
const NoteModel = require("../models/note.model");

module.exports = {
  setUpConnection() {
    mongoose.connect("mongodb://localhost:27017/notes", { useNewUrlParser: true })
  },
  async addNote(data) {
    console.log("Adding " + data.title);

    return NoteModel.create({
      _id: data._id,
      title: data.title,
      content: data.content
    });
  },
  async getNotes() {
    return NoteModel.find();
  },
  async removeNote(id) {
    return await NoteModel.findByIdAndDelete(id);
  }
}