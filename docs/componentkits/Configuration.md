# 基本配置

一般来说，用户配置主要关注 `config/project.js` 和 `config/steamer.config.js` 文件就可以了。

## steamer.config.js

* `webserver` `[必填]` `[String]` html的链接
* `cdn`  `[必填]` `[String]` cdn的链接
* `port`  `[必填]` `[String|Integer]` 开发环境服务器端口

## project.js

### 快捷配置

便于用户快速去进行一些 webpack 的配置

* `env` 环境配置，源于`process.env.NODE_ENV`

* `npm` 脚手架安装默认使用的 npm 命令行，默认 `npm`

* `webpack.path`
    - `src`  `[String]` 源目录
    - `dev` `[String]` 开发生成目录
    - `dist` `[String]` 生产上线目录
    - `example` `[String]` 例子
    - `test` `[String]` 测试目录

* `webpack.webserver` `[String]` html的链接，值来源于 steamer.config.js
* `webpack.port` [`String|Integer]` 开发环境服务器端口，值来源于 steamer.config.js
* `webpack.route` `[Array]` 开发环境访问的路径

* `webpack.showSource` `[Boolean]` 是否显示开发环境下的生成文件

* `webpack.clean` `[Boolean]` 是否清理生成文件夹

* `webpack.js` `[Array`] javascript 方言，目前仅 react 支持 ts(typescript)

* `webpack.style` `[Array]` 支持样式的loader, `["css", "less", "stylus", "scss", "sass"]`, 默认支持css 和 less. sass, scss 和 stylus 由 `npm-install-webpack-plugin` 自动安装

* `webpack.extractCss` `[Boolean]` 生产环境是否提取css

* `webpack,cssModule` `[Boolean]` 是否启用css模块化

* `webpack.template` `[Array]` html模板，["html", "pug", "handlebars", "ejs"], 默认支持html 和 ejs, handlebars 和 pug 由 `npm-install-webpack-plugin` 自动安装

* `webpack.promise` `[Boolean]` 是否注入es6-promise包

* `webpack.injectVar ` `[Object]` 利用DefinePlugin给应用注入变量
```javascript
injectVar: {
    "process.env": {
        NODE_ENV: JSON.stringify(__env)
    }
}
```


### 高级配置

用函数式的写法进行 webpack 配置

* `custom.getOutput` `[Function]` webpack output 配置

* `custom.getModule` `[Function]` webpack module 配置

* `custom.getResolve` `[Function]` webpack resolve 配置

* `custom.getPlugins` `[Function]` webpack plugins 配置

* `custom.getExternals` `[Function]` webpack externals 配置

* `custom.getOtherOptions` `[Function]` webpack 剩余的其它配置

### webpack-merge 策略配置
`project.js` 和 `webpack.base.js` 的配置是通过 `webpack-merge` 进行合并的，这里提供了两个配置项目，让你定义自己的合并策略：

* `webpackMerge.smartStrategyOption` `[Object]` webpack-merge smartStrategy 配置

* `webpackMerge.mergeProcess` `[Function]` 定制配置的函数
    - 参数 webpackBaseConfig `[Object]` `webpack.base.js` 的配置
    - 返回 处理后的 配置

## webpack.base.js
如果在 project.js 的配置项都无法满足你，那你可以在 `tools/webpack.base.js` 进行配置修改。但注意，`tools` 目录是非必要，尽量减少修改，是因为脚手架升级的时候，会对整个 `tools` 目录进行升级。