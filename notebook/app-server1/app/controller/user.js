'use strict';
const { Controller } = require('egg');
const bcrypt = require('bcryptjs'); // 单向加密
const defaultAvatar = 'http://s.yezgea02.com/1615973940679/WeChat77d6d2ac093e247c361f0b8a7aeb6c2a.png';
// java 风格
class UserController extends Controller {
    // 注册
  async register() {
  // 解析请求体
  // 校验参数
  // 检索数据库 username 是否存在
  // 返回结果
  const {ctx} = this;
  const {username,password} = ctx.request.body;

  if (!username || !password) {
    ctx.body = {
      code: 400,
      msg: '用户名或密码不能为空',
    }
    return;
  }

  // 校验username
  const userInfo = await ctx.service.user.getUserByName(username);
  console.log(userInfo,'//////');
  if(userInfo && userInfo.id) {
    ctx.body = {
      code: 400,
      msg: '用户名已存在,请重新输入',
    }
    return ;
  }

  const hashedPassword = await bcrypt.hashSync(password,10);
  console.log(hashedPassword);

  const result = await ctx.service.user.register({
    username,
    password:hashedPassword,
    avatar:defaultAvatar,
    ctime:+Date.now(),
    signature:'这个人很懒，什么都没留下',
  });
  
  if(result){
    ctx.body = {
      code: 200,
      msg: '注册成功',
      data: null,
    }
  }
    else {
      ctx.body = {
        code: 500,
        msg: '注册失败',
        data: null,
      }
    }
  }

  
  // 登录
  async login() {
    // 参数
    const {ctx,app} = this;
    const {username,password} = ctx.request.body;

    if(!username || !password) {
      ctx.body = {
        code: 400,
        msg: '用户名或密码不能为空',
        data:null,
      }
      return;
    }

    const userInfo = await ctx.service.user.getUserByName(username);
    if(!userInfo || !userInfo.id) {
      ctx.body = {
        code: 500,
        msg: '用户名不存在',
        data:null,
      }
      return;
    }

    const isPasswordValid = await bcrypt.compare(password,userInfo.password);
    if(!isPasswordValid && userInfo) {
      ctx.body = {
        code: 500,
        msg: '密码不正确',
        data:null,
      }
      return;
    }
    // jwt token json web token
    const token = app.jwt.sign({
      id:userInfo.id,
      username:userInfo.username,
      exp:Math.floor(Date.now()/1000) + (24*60*60), // 24h过期
    },app.config.jwt.secret);

    ctx.body = {
    code: 200,
    msg: '登录成功',
    data:{
      token,
    }
  }
  }
  async editSignature() {
    const {ctx} = this;
    console.log(ctx.user);
    if(!ctx.user){
      ctx.body = {
        code:401,
        msg:'请先登录',
        data:null, 
      }
      return;
    }
    const {signature} = ctx.request.body;
    if(!signature) {
      ctx.body = {
        code:400,
        msg:'签名不能为空',
        data:null,
      }
      return;
    }
    
    try{
      const result = await ctx.service.user.editSignature(ctx.user.username,signature);
      ctx.body ={
        code:200,
        msg:'修改成功',
        data:result,
      }
    } catch (err) {
      ctx.body = {
        code:500,
        msg:'修改签名失败',
        data:null,
      }
    }
  }

  async getUserInfo() {
    const {ctx} = this;
    if(!ctx.user) {
      ctx.body = {
        code:401,
        msg:'请先登录',
        data:null,
      }
      return;
    } 

    try{
    const result = await ctx.service.user.getUserByName(ctx.user.username);
    ctx.body = {
      code:200,
      msg:'获取用户信息成功',
      data:result, 
    }
    }
    catch (err) {
      ctx.body = {
        code:500,
        msg:'获取用户信息失败',
        data:null,
      }
    }
}
}

module.exports = UserController;