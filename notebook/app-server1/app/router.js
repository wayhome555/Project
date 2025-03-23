/**
 * @param {Egg.Application} app - egg application
 */
// commonjs 模块
// 用 URL 定位资源，用 HTTP 方法定义操作
module.exports = app => {
  const { router, controller, middleware } = app;
  const _jwt = middleware.jwtErr(app.config.jwt.secret);

  router.get('/', controller.home.index);
  router.get('/post', controller.post.index);
  // router.get('/user/:id', controller.home.user);
  router.post('/add', controller.home.add);
  // 用户模块
  router.post('/register', controller.user.register); // 登录
  router.post('/login', controller.user.login); // 注册
  router.post('/upload', controller.upload.index); // 上传文件
  // 修改资源 patch put
  router.patch('/user/signature', _jwt ,controller.user.editSignature); 
  router.get('/user/getUserInfo', _jwt,controller.user.getUserInfo); 

};
