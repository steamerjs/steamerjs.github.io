# 目录结构

## 目录概况

```javascript
.steamer -- steamer配置
dist    -- 生产环境代码
|
example -- 例子
|------dev 开发环境代码
|------src 例子源码
|
src     -- 源代码
|      
config -- 项目配置
|------project.js -- 用户主要关注的项目配置，主要被webpack使用
|------steamer.config.js -- 可由steamer生成，包括webserver, cdn, port, route等
|
test   -- 测试相关
|------unit jest 和 karma 单元测试用例
|------mocks 测试用例模拟的数据
|      
|      
tools  -- 构建工具
|
|------feature -- 依赖安装脚本，对应 project.js 中的 config.webpack.style, config.webpack.template, config.webpack.js
|------plugins -- webpack 插件配置，可在文件夹中新增文件，以添加新类型的插件
|------rules -- webpack rules配置，可在文件夹中新增文件，以添加新类型的资源规则
|——————script.js -- 开发，生产环境和karma的执行命令
|——————server.js -- 开发环境服务器
|——————webpack.base.js -- webpack核心配置，用户较少关注
|
.babelrc 使用 babel 进行编译的配置
package.json npm 相关发布配置
```

## 更改生产环境目录

默认设置将生产环境的代码，都成生到 `dist` 目录下。如果你想使用其它的路径，你可以分别修改 `config/project.js` 里的配置：

```javascript
dist: distPath,
```