const { addNote } = require("../utils/dataBaseUtils");

const createNote = (ctx) => {
  const data = ctx.request.body;
  console.log(data);
  addNote({
    id: data.id,
    title: data.title,
    content: data.content
  })
  ctx.response.body = "Created " + data.title;
}

module.exports = {createNote};