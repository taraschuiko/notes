const route = require('koa-route');
const controllers = require("../controllers/notesControllers");

const routes = [
  route.post('/notes', controllers.createNote),
  route.get('/notes', controllers.getNotes),
  route.delete('/notes/:id', controllers.deleteNote),
  route.put('/notes/:id', controllers.updateNote),
];

module.exports = routes;
