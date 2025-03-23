'use strict';
// 鉴权中间件
module.exports = (secret) => {
    return async function jwtErr(ctx, next) {
       const token = ctx.request.header.authorization;
       let decode;
       if(token && token != 'null') {
        try {
            decode = ctx.app.jwt.verify(token,secret);
            // console.log(decode);
            ctx.user = decode;
            await next(); 
        }
        catch (error) {
            ctx.body = {
                code: 401, // unauthorized
                msg: '请先登录',
            }
        }
       } else {
        ctx.status = 401;
        ctx.body = {
            code: 401, // unauthorized
            msg: '请先登录',
        }
       }
    }
};