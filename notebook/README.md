# react notebook 全栈

- npm i react-router-dom -S
  
- 项目阶段
  - 开发
  - 测试
  - 上线

- 编程风格
  - react 组件 jsx文件 + css文件
    - 组件目录大写
    - 组件声明文件小写
    引入的时候直接引入组件目录即可
  - return (jsx) dom树的对齐

- 页面级别组件
  - 首页
    Home.vue 

- 选择框架
  - zarm 移动端框架

- npm run build
  - 上线之前先打包
  - dist/结果目录
    - src/开发目录
    - 不需要注释 换行等 只要浏览器运行就好
      文件小 压缩 传输更快
    - 组件打包成 js文件 css打包成 css文件
      性能优化 http并发数
      - 依赖关系
        - 不需要模块化 被依赖的放在上面 依赖的放在下面
        - 打包成一个js文件
    - vite 很快


- vite
  - 按需加载 vite-plugin-style-import

- less stylus css 预编译器
  - 快
  - 变量、嵌套
  - module css
    - style,module.less
    - 支持 css 模块
      - vite 申明 less -> 解析
      - {s.index}

- 移动端适配
  rem 10rem = 宽度
  - lib-flexible rem 适配
  - postcss-px2rem 包 自动化 px->rem 提高开发效率
    - postcss

- axios 配置
  - baseURL 
    前后端分离 前端访问的是后端的接口 一般都会以/api 开头
    方便 baseURL 统一配置
    - axios + vite proxy 代理解决跨域问题
  - 请求、响应拦截器
    - 统一的token设置
    - 统一的错误设置
    - res 丰富的 状态码
    - return res.data 直接返回数据

- cookie
  - http协议本身是无状态的 method url 返回的结果一定一样
  - 小饼干 字符串
  - key=value
  - 过期时间
  - expires
  - kb 关键 用户身份
  - 请求时都会默认带上 太大的话 会影响性能
  - domain 当下域名的cookie
  - path 限制cookie的作用范围
  - httpOnly 请求时带上 js没有办法获取 更安全
  - secure 安全的cookie https 协议下才会带上
    XSS 跨站脚本攻击 黑客通过 发文 评论 注入 获取cookie代码 并执行
    黑客使用我们的cookie 访问你的网站 窃取信息
    <script> -> < &lt; 转义

## 业务开发
- NavBar 组件
  - components 公共组件
  - zarm TabBar
- react-router-dom
  useNavigate hook
  navigateTo('/user')
- 单页应用 SPA singe page application
  - 传统的a标签刷新页面 服务器重新渲染所有的html 白屏 慢 体验差
  - 单页应用 只渲染当前页面 快 体验好
- CustomIcon 组件
  Icon.createFromIconfont
- react props 类型约束
  - prop-types
  - PropTypes.bool

- react hooks
- useEffect useState hooks
  - useEffect 解决到用户页面导航消失 (回调函数 依赖数组)
  - useState 状态管理 [状态变量 修改状态变量的方法]
  - useMemo 性能优化

- css
  - react module css
  - less
  - iconfont
  - linear-gradient 线性渐变代替图片

- 功能需求
  - login 表单

- 项目用了哪些包
  - classnames 动态类名的逻辑安排
  - 

- 记账产品
  - 账单首页
    -时间和类型 查询
    - 账单列表
  - 可视化账单 数据
    echarts 图标展示
  - crud 账单
    - jwt
    - 跨域
    - 文件上传

## 用户页面的静态开发
  - 行内样式
    {{"":"","":""}}
  - nth-of-type(n) 会根据元素的类型进行选择
  - align-self baseline 基线对齐

  - react and vue slot and props.children 区别
    - 以modal组件为例 通用组件
    - 需要强大的定制性
      title footer props string | jsx 传入
      - content 插槽 

## AI 特性
- prompt 提效的模板
- 假如你是前端工程师 使用react + javascript 技术栈， 请根据上图分析功能模块和交互细节 给出要开发的功能点， 难点 和预计需要的开发时间。 只需要开发前端， 后端不需要考虑。


## 首页 静态开发
- 用户的账单列表
  - 所有 按时间排序 倒序 分页
  - 按类型查询（收入|支出）
  - 按月份查询
- 整个页面的设计 响应式
- 按日期分组
  列表 细节 并进行支出和收入的统计
- 交互
  - 类型 支出收入 日期 的弹出
- 开发时间？
- list 列表业务
  - 两重循环 按日期分组 比较复杂
  - 通过prompt获得假数据

- utils 封装公用的函数 数据

- post 请求体的格式
  - form-data 有附件
  - json 复杂数据
  - x-www-form-urlencoded key:value
- get/post 区别

## 开发流程
- 需求分析
- 数据库设计 服务端接口编写 
- 前端开发
- 部署上线

- AI 编程工具的使用
  - MarsCode 
  - Cursor / Trae
  - prompt engineering
  - 交互前端不可替代
  - 多语言 低代码 快速学习
  - 不只是项目开发前 prompt 生成项目
  - 细节功能 喂伪代码

- mysql
  - mysql2 数据库驱动
  - sequelize orm 对象关系映射
    不需要写sql 直接对象开干
  - service
    crud
  - model
    User

- 登录注册
  - 密码加密
    单向加密 