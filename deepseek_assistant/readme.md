# AI Assistant 全栈项目

- 大前端全栈
- 后端驱动全栈为主
  - 设计模式
    大前端 前端 mvvm (Model-View-ViewModel)
    后端 mvc (Model-View-Controller)
  - 并发数
  - 基础设施
  - DDos 肉鸡攻击 qps 

## 后端全栈AI 项目
- python flask 框架 node koa
  app.py 单点入口
- 纯JS
- deepseek 在线api

python -m venv ai_assistant

.\ai_assistant\Scripts\activate

pip install openai Flask python-dotenv -i https://mirrors.aliyun.com/pypi/simple/

from openai import OpenAI

client = OpenAI(api_key="<DeepSeek API Key>", base_url="https://api.deepseek.com")

response = client.chat.completions.create(
    model="deepseek-chat",
    messages=[
        {"role": "system", "content": "You are a helpful assistant"},
        {"role": "user", "content": "Hello"},
    ],
    stream=False
)

print(response.choices[0].message.content)

flask koa 后端框架

- 没有做前后端分离 
  - 前端 static 目录下
  - 路由 / 显示 index.html

- 静态文件
  - js/css/img 
  - 启动静态服务器

- 状态码
  1xx 请求中
  2xx 成功
  3xx 重定向
  4xx 客户端错误
  5xx 服务器错误

  响应头第一个数据包 浏览器或程序 就通过状态码知道怎么处理
  知道怎么处理
  程序逻辑的一部风

- env

## 界面
- html 结构
  - 写注释
  - 图标字体库 font-awesome iconfont
    - 性能优化
    - 小图标都用图片 http 请求数量爆炸 网页同时并发请求数量是有上限的
    - 下载一个图标字体文件
    - font-awesome 不提供选择
    - iconfont 提供选择 自定义
  - css 样式的组合 面向对象特性 多态 方便复用和维护
    tailwindcss 原子类
  - textarea LLM 支持比较多的tokens
  - 语义化标签
  - 无障碍访问 label for

- css 样式
  - 弹性布局
    - 居中
    - flex-direction 方向
    - align-items 纵轴
    - justify-content 横轴
  - grid 布局
    display: grid;
    grid-template-columns:;
    gap:;
  - 响应式布局
    width max-width
    @media screen and (max-width: 768px) {
      
    }
  - transition animation
    - width transition ipad 旋转屏幕

  - 面向对象思想
    - 封装 多态 继承
    - button 样式组件
      UI 风格 antd
    - 组合业务样式
      primary secondary default -> tailwindcss 原子类
  - calc
    css中执行简单的数学运算 精确控制元素的大小与位置
    性能有点问题 涉及不必要的重绘重排
  - flex:1
    弹性布局
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0%;
  
  - js
    - 用户体验
      - keydown enter 阻止默认行为
      - event.preventDefault();
    -promise
      - await 后面肯定是promise
      - then 链式调用
        处理函数返回的仍然是promise
    - BOM
      - navigator.userAgent
      操作系统 浏览器版本 内核
      - navigator.clipboard
    - localStorage
      - 本地存储
      - 存储空间 5M
      - getItem
      - setItem
      - removeItem
      - clear
    - string array 强化
    - event 事件机制
      - 事件冒泡
      - 事件委托
      - 事件监听 开销比较大
  
  - 产品需求
    - 产品经理提出产品需求
    - 设计师 界面设计
    - 前端 vue/react 完成需求
      - 分析
      - 技术设计
      - 代码实现
      - debug
      - 交付
    - 后端

  - 代码风格
    - 注释
    - 封装
      - 一个函数只做一件事
      - 一个函数不超过10行
    - es6+ 风格
      promise async await


  ## 业务
     - 界面业务
