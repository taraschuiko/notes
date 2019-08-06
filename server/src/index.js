const Koa = require('koa');
const app = new Koa();
const bodyParser = require("koa-bodyparser");
const routes = require('./routes');
const { setUpConnection, createNote, getNote } = require("./utils/dataBaseUtils");

if (process.env.NODE_ENV === 'development') require('dotenv').config();

const { PORT, HOST } = process.env;

setUpConnection();
app.use(bodyParser());
app.use(routes);
app.listen(PORT, () => {
  console.log(`started in http://${HOST}:${PORT}`);
});
