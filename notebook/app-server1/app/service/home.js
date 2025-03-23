// Service 模块化 sql服务
'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
  async user() {
    return{
        name: '张三',
        age: 18,
    }
  }
}

module.exports = HomeService;