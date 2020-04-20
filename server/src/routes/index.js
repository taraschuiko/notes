const { combineRouters } = require('../utils');
const root = require('./root');
const auth = require('./auth');
const notes = require('./notes');

const routes = combineRouters([root, auth, notes]);

module.exports = routes;
