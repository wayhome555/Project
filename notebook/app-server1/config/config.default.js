/* eslint valid-jsdoc: "off" */

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1740482819005_3905';

  // add your middleware config here
  config.middleware = [];
  // 配置安全性
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    domainWhiteList: ['*'],
  };
  // 加密
  config.jwt = {
    secret: 'abcdef123456/*-',

  }

  exports.sequelize = {
    dialog:'mysql',
    host:'localhost',
    port:3306,
    database:'zhangben',
    username:'root',
    password:'123456',
    define:{
      timestamps:false,
      freezeTableName:true,
      underscored:true,
    }
  }
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
