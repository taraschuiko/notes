const { combineRouters } = require('../utils');
const root = require('./root');
const notes = require('./notes');
const auth = require('./auth');

const routes = combineRouters([root, notes, auth]);

module.exports = routes;
