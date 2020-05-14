const requireDirectory = require('require-directory');
const Router = require('koa-router');
//初始化自动路由
class InitManager {
  static initCore(app) {
    //入口方法
    InitManager.app = app;
    InitManager.initLoadRouters();
    InitManager.loadHttpException();
  }
  static initLoadRouters() {
    //配置路径
    const apiDirectory = `${process.cwd()}/app/api`;

    //requireDirectory实现路由自动
    requireDirectory(module, apiDirectory, {
      visit: whenLoadMoudle
    })

    function whenLoadMoudle(obj) {
      if (obj instanceof Router) {
        InitManager.app.use(obj.routes());
      }
    }
  }

  static loadHttpException() {
    const errors = require('./http-exception');
    global.errs = errors;
  }
}

module.exports = InitManager;