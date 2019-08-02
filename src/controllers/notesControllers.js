const createNote = (ctx) => {
  const data = ctx.request.body;
  createNote({
    id: data.id,
    title: data.title,
    content: data.content
  })
}

module.exports = {createNote};