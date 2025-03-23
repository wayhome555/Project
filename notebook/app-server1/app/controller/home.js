const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const {id} = ctx.query;
    ctx.body = `hi, egg ${id}`;
  }
  async user() {
    const { ctx } = this;
    const {id} = ctx.params;
    const {name,age} = await ctx.service.home.user();
    ctx.body = {
      name,
      age,
    }
  }
  async add() {
    const { ctx } = this;
    // 请求体
    const {title} = ctx.request.body;
    ctx.body = {
      title
    }
    
  }
}

module.exports = HomeController;
