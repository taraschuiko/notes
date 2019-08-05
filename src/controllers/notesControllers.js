const db = require("../utils/dataBaseUtils");
const uuid = require('uuid/v1');

module.exports = {
  async createNote(ctx) {
    const data = ctx.request.body;
    db.addNote({
      id: uuid(),
      title: data.title,
      content: data.content
    }).then(data => {
      console.log("Created new note: ", data)
    })
    ctx.response.body = "Created " + data.title;
  },
  async getNotes(ctx) {
    try {
      let data = await db.getNotes();
      console.log(data);
      ctx.response.body = data;
    } catch(e) {
      console.error(e);
    }
  }
}