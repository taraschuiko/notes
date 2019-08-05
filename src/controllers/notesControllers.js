const db = require("../utils/dataBaseUtils");
const uuid = require('uuid/v1');

module.exports = {
  async createNote(ctx) {
    try {
      const data = ctx.request.body;
      const newNote = {
        _id: uuid(),
        title: data.title,
        content: data.content
      }
      db.addNote(newNote);
      ctx.response.body = newNote;
    } catch(e) {
      console.error("create note error: ", e);
    }
  },
  async getNotes(ctx) {
    try {
      ctx.response.body = await db.getNotes();
    } catch(e) {
      console.error("get notes error: ", e);
    }
  },
  async removeNote(ctx) {
    try {
      ctx.response.body = await db.removeNote(ctx.request.body._id);
    } catch(e) {
      console.error("remove note error: ", e);
    }
  }
}