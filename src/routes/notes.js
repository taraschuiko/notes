const Router = require('koa-router');
const controllers = require("../controllers/notesControllers");

const notes = new Router();

notes.post('/notes', controllers.createNote)
  .get('/notes', controllers.getNotes)
  .delete('/notes/:id', controllers.deleteNote)

module.exports = notes;