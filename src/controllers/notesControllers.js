const db = require("../utils/dataBaseUtils");
const uuid = require('uuid/v1');

module.exports = {
  async createNote(ctx) {
    try {
      const data = ctx.request.body;
      const newNote = {
        id: uuid(),
        title: data.title,
        content: data.content
      }
      db.addNote(newNote);
      ctx.response.body = newNote;
    } catch(e) {
      console.error(e);
    }
  },
  async getNotes(ctx) {
    try {
      ctx.response.body = await db.getNotes();
    } catch(e) {
      console.error(e);
    }
  },
  async removeNote(ctx) {
    
  }
}