const koa = require("koa");
const InitManager = require('./core/init')
const parser = require('koa-bodyparser')
const catchError = require('./middlewares/exception')

const app = new koa();

InitManager.initCore(app);
app.use(parser());
app.use(catchError);

console.log('nodemon is startting!')

app.listen(5120);
