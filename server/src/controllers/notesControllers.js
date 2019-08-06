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
      if (await db.addNote(newNote)) {
        ctx.response.status = 200;
        ctx.response.message = "Added";
      }
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
  async deleteNote(ctx) {
    try {
      if (await db.deleteNote(ctx.params.id)) {
        ctx.response.status = 200;
        ctx.response.message = "Deleted";
      }
    } catch(e) {
      console.error("remove note error: ", e);
    }
  },
  async updateNote(ctx) {
    try {
      if (await db.updateNote(ctx.params.id, ctx.request.body)) {
        ctx.response.status = 200;
        ctx.response.message = "Updated";
      }
    } catch(e) {
      console.error('update note error', e);
    }
  }
}