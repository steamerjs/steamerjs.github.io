# 构建配置

一般来说，用户配置主要关注 `config/project.js` 和 `config/steamer.config.js` 文件就可以了。

## steamer.config.js

`steamer-plugin-kit` 脚手架管理使用时，所要求填写的配置项目，一律生成为此文件内容。主要是存放一些关键构建变量。

* `webserver` `[必填]` `[String]` html的链接
* `cdn`  `[必填]` `[String]` cdn的链接
* `cssCdn`  `[选填]` `[String]` css cdn的链接，默认值为 `cdn` 的值
* `imgCdn`  `[选填]` `[String]` image cdn的链接，默认值为 `cdn` 的值
* `port`  `[必填]` `[String|Integer]` 开发环境服务器端口
* `route` `[选填]` `[String|Array]` 开发环境访问的路径
* `api-port` `[选填]` `[String|Integer]` 后台服务访问的端口，一般是Mock数据服务
* `api-route` `[选填]` `[Array]` 后台访问的路径，一般是Mock数据服务

## project.js

### 快捷配置

便于用户快速去进行一些 webpack 的配置

* `env` 环境配置，源于`process.env.NODE_ENV`

* `npm` 脚手架安装默认使用的 npm 命令行，默认 `npm`

* `webpack.path`
    - `src` `[String]` 源目录
    - `dev` `[String]` 开发生成目录
    - `dist` `[String]` 生产上线目录
    - `sprite` `[String]` 合图目录
    - `distCdn` `[String]` 生产上线目录下的 `cdn` 资源，如 `js`, `css`, `img` 等资源
    - `distWebserver` `[String]` 生产上线目录下的 `html`

* `webpack.webserver` [String] html的链接，值来源于 steamer.config.js
* `webpack.cdn` [String] cdn的链接，值来源于 steamer.config.js
* `webpack.port` [String|Integer] 开发环境服务器端口，值来源于 steamer.config.js
* `webpack.route` [Array] 开发环境访问的路径
* `webpack.api-port` [String|Integer] 后台转发端口，值来源于 steamer.config.js
* `webpack.api-route` [Array] 后台转发路径，值来源于 steamer.config.js

* `webpack.showSource` `[Boolean]` 是否生成开发环境下的文件 默认 `true`

* `webpack.clean` `[Boolean]` 是否清理生成文件夹

* `webpack.sourceMap`
    - `development` `[String]` 开发环境sourcemap
    - `production` `[String]` 生产环境sourcemap

* `webpack.cssSourceMap` `[Boolean]` css sourcemap

* `webpack.js` `[Array]` javascript 方言，目前仅 react 支持 ts(typescript)

* `webpack.style` `[Array]` 支持样式的loader, `["css", "less", "stylus", "scss", "sass"]`, 默认支持css 和 less. sass, scss 和 stylus 若使用，会自动安装相应依赖

* `webpack.extractCss` `[Boolean]` 生产环境是否提取css

* `webpack,cssModule` `[Boolean]` 是否启用css模块化

* `webpack.spriteMode` `[String]` 合图，normal (仅1倍图) , retinaonly (仅2倍图), retina (包括1倍及2倍图) 

* `webpack.spriteStyle` `[String]` 合图样式, 默认支持less. sass, scss 和 stylus 若使用，会自动安装相应依赖

* `webpack.template` `[Array]` html模板，["html", "pug", "handlebars", "ejs"], 默认支持html 和 ejs, handlebars 和 pug 由 `npm-install-webpack-plugin` 自动安装

* `webpack.promise` `[Boolean]` 是否注入es6-promise包

* `webpack.compress` `[Boolean]` 生产环境下资源是否压缩

* `webpack.static` `[Array]` 不经webpack打包的资源
```javascript
static: [
    {
        src: "libs/",
        hash: true,
    }
]
```

* `webpack.injectVar ` `[Object]` 利用DefinePlugin给应用注入变量
```javascript
injectVar: {
    "process.env": {
        NODE_ENV: JSON.stringify(__env)
    }
}
```
* `webpack.alias` `[Object]` webpack resolve.alias 包别名

* `webpack.hash` `[String]` webpack hash，主要用于 `file-loader`, `copy-webpack-plugin` 等等

* `webpack.chunkhash` `[String]` webpack chunkhash, 主要用于 js 文件

* `webpack.contenthash` `[String]` webpack content hash，主要用于 `extract-text-webpack-plugin`

* `webpack.hashName` `[String]` webpack hash 文件名

* `webpack.chunkhashName` `[String]` webpack chunkhash 文件名

* `webpack.contenthashName` `[String]` webpack contenthash 文件名

* `webpack.entry` `[Object]` 对应是 webpack 的 entry 配置
```javascript
// 根据约定，自动扫描js entry，约定是src/page/xxx/main.js 或 src/page/xxx/main.jsx
// 获取结果示例
{
    'js/index': [path.join(configWebpack.path.src, "/page/index/main.js")],
    'js/spa': [path.join(configWebpack.path.src, "/page/spa/main.js")],
    'js/pindex': [path.join(configWebpack.path.src, "/page/pindex/main.jsx")],
}
```
* `webpack.html` `[Array]` webpack entry 对应生成的 html 文件
```javascript
// 自动扫描html，配合html-res-webpack-plugin
// 获取结果示例
[ 
    { 
        key: 'index',
        path: 'path/src/page/index/index.html'
    },
    { 
        key: 'spa',
        path: 'path/src/page/spa/index.html'
    },
    { 
        key: 'pindex',
        path: 'path/src/page/pindex/index.html'
    } 
]
```

* `webpack.sprites` `[Array]` 生成的合图文件
```javascript
// 自动扫描合图，配合webpack-spritesmith插件
// 获取结果示例
[
    { 
        key: 'btn',
        path: 'path/src/img/sprites/btn'
    },
]
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