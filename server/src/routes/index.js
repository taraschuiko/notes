const root = require('./root');
// const auth = require('./auth');
const notes = require('./notes');

const routes = [
    ...root,
    // ...auth,
    ...notes
]

module.exports = routes;
