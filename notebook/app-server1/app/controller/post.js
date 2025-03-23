'use strict'; // 严格模式

const { Controller } = require('egg');

class PostController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = '文章列表';
  }
}

module.exports = PostController;