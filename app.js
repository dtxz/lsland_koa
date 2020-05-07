const koa = require("koa");
const Router = require('koa-router');
const InitManager = require('./core/init')
const parser = require('koa-bodyparser')


const app = new koa();


app.use(parser())
process.cwd();

InitManager.initCore(app);

console.log('nodemon is startting!')

app.listen(5120);
