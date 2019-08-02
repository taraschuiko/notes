const db = require("../utils/dataBaseUtils");
const uuid = require('uuid/v1');

module.exports = {
  createNote(ctx) {
    const data = ctx.request.body;
    db.addNote({
      id: uuid(),
      title: data.title,
      content: data.content
    })
    ctx.response.body = "Created " + data.title;
  },
  getNotes() {
    let data = db.getNotes();
    console.log(data);
    ctx.response.body = data;
  }
}