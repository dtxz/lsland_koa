const koa = require("koa");
const Router = require('koa-router');
const book = require('./api/v1/book')
const classic = require('./api/v1/classic')

const app = new koa();

app.use(book.routes())
app.use(classic.routes())
console.log('nodemon-node-test')

app.listen(9527);
