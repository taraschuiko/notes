const root = require('./root');
const notes = require('./notes');

const routes = [
    ...root,
    ...notes
];

module.exports = routes;
