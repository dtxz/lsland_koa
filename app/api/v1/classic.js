const Router = require('koa-router')
const router = new Router();
const { PositiveIntegerValidator } = require('../../validators/validator');


router.post('/v1/:id/classic/latest', (ctx, next) => {
  const path = ctx.param;
  const query = ctx.request.query;
  const headers = ctx.request.header;
  const body = ctx.request.body;

  //验证
  const v = new PositiveIntegerValidator().validate(ctx);
  const id = v.get('path.id');
  ctx.body = 'success';



});

module.exports = router