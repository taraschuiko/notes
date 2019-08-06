const { combineRouters } = require('../utils');
const root = require('./root');
const notes = require('./notes');

const routes = combineRouters([root, notes]);

module.exports = routes;
