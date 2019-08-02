const { addNote } = require("../utils/dataBaseUtils");
const uuid = require('uuid/v1');

const createNote = (ctx) => {
  const data = ctx.request.body;
  addNote({
    id: uuid(),
    title: data.title,
    content: data.content
  })
  ctx.response.body = "Created " + data.title;
}

module.exports = {createNote};