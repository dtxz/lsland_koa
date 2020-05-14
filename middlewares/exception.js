const catchError = async (ctx, next) => {
  try {
    await next();
  } catch (error) {

    if (error.errorCode) {
      ctx.body = {
        //message
        //errorCode 详细错误信息，自定义错误代号10001 20003等
        //request_url 当前请求的url
        msg: error.message,
        errorCode: error.errorCode,
        request: error.requestUrl
      }
      ctx.status = error.status
    }
    else {
      ctx.body = {
        msg: '服务器出现了一个未知错误！',
        errorCode: 999,
        request: `${ctx.method}${ctx.path}`
      }
      ctx.status = 500
    }
  }
}

module.exports = catchError;