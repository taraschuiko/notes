const Router = require('koa-router');
const controllers = require("../controllers/notesControllers");

const notes = new Router();

notes.post('/notes', controllers.createNote)
  .get('/notes', controllers.getNotes)

module.exports = notes;