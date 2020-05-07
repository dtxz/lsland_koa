const Router = require('koa-router')
const router = new Router();



router.get('/v1/classic/latest', (ctx, next) => {
  const path = ctx.param;
  const query = ctx.request.query;
  const headers = crx.request.header;
  const body = ctx.request.body;
  ctx.body = { key: "classic" }
});

module.exports = router