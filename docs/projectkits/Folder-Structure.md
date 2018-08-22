# 目录结构

## 目录概况

```javascript
.steamer -- steamer配置
dist    -- 生产环境代码
|
src     -- 源代码
|——————css -- 公共样式
|      |—— common 公共样式
|      |—— sprites 生成的合图样式及图片
|      |
|——————img
|      |——sprits 合图原图片
|      |    |———— btn
|      |
|      js -- 公共js目录
|      |—— common 公共js
|      |
|      libs -- 公共js库，如zepto, jquery等
|      |
|      |
|      page —— 页面逻辑
|      |
|      |—— common 公共页面逻辑
|      |—— index 首页逻辑
|      |
|      |
|------favicon.ico
|      |
|      |
config -- 项目配置
|------project.js -- 用户主要关注的项目配置，主要被webpack使用
|------steamer.config.js -- 可由steamer生成，包括webserver, cdn, port, route等
|      |
|      |
tools  -- 构建工具
|
|
|------feature -- 依赖安装脚本，对应 project.js 中的 config.webpack.style, config.webpack.template, config.webpack.js
|------optimization -- webpack 优化配置，如压缩，拆包等
|------plugins -- webpack 插件配置，可在文件夹中新增文件，以添加新类型的插件
|------rules -- webpack rules配置，可在文件夹中新增文件，以添加新类型的资源规则
|——————template -- 项目开发模板
|——————script.js -- 开发和生产环境的执行命令
|——————server.js -- 开发环境服务器
|——————webpack.base.js -- webpack核心配置，用户较少关注
```

## 更改生产环境目录

默认设置将生产环境的代码，都成生到 `dist` 目录下，而目录下又再进一步划分为 `cdn` 和 `webserver`。如果你想使用其它的路径，你可以分别修改 `config/project.js` 里的如下配置：

```javascript
distCdn: "cdn",
distWebserver: "webserver"
```
