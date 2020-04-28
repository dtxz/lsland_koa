const koa = require("koa");
const Router = require('koa-router');
const InitManager = require('./core/init')

const app = new koa();

process.cwd();

InitManager.initCore(app);

console.log('nodemon is startting!')

app.listen(5120);
