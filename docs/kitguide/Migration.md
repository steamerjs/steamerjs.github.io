# 非Steamer系列脚手架项目迁移

## 1. 对象

此文档主要针对不是使用 Steamer 系列的脚手架进行迁移，让老旧项目也能使用上更新的技术。

## 2. 入口文件，HTML

旧式的项目脚手架，一般都是以目录来划分的，非常死板。但 Steamer 系列脚手架，主要是基于入口文件的，因此升级替换比较方便。

Steamer 系列脚手架，预先做了约定，一般都将页面，放在 `src/page` 下面，每个页面对应一个文件夹，入口文件一般是 `main.js`, 而对应的 HTML 文件，则是 `main.html`。如果你有更定制化的需求，可以在 `config/project.js` 中的 `webpack.entry` 和 `webpack.html` 中做相应的改动。默认 Steamer 脚手架都帮你做好自动扫描，只要你按照名字规范放到对应的目录位置即可。


## 3. 资源引用

至于 HTML 的资源引用， 此处是采用了 [html-res-webpack-plugin](https://github.com/lcxfs1991/html-res-webpack-plugin) 插件，主要的引用方式是路径匹配。（如果英文不好，可以看[中文文档](https://github.com/lcxfs1991/html-res-webpack-plugin/blob/v3/README_ZH.md)）。

### 3.1 webpack 入口文件及相关引用的资源引用
虽然该插件也支持像 `html-webpack-plugin` 那样的配置注入方式，但更建议采取资源匹配的方式，这是该插件的特色。运行的时候，插件会在命令行输出，哪些由 `webpack` 生成的 `chunk` 可以提供给你作为引用的资源，例如：

```javascript
=====html-res-webapck-plugin=====
chunk1: commons.js
chunk2: js/index.js
chunk3: js/index.css
chunk4: js/list.js
chunk5: js/list.css
chunk6: js/detail.js
chunk7: js/detail.css
```

然后你就可以像如下一样引用（记得加上后缀名）：
```html
<script asycn defer src="js/react.js"></script>
<link asycn defer rel="stylesheet" href="js/index.css">
```

### 3.2 通过 copy-webpack-plugin-hash 拷贝的资源引用
有些资源，你是不想通过 webpack 编译打包而直接拷贝的。Steamer 系列脚手架默认将 `src/libs` 下面的文件直接拷贝到开发或者生产目录。当然，你也可以在 `config/project` 中配置 `webpack.static`，添加更多直接拷贝的目录。

假设资源目录如下：
```javascript
-- src
  |-- index.html
  |-- libs
  |    |-- react.js
```

那你可以像如下一样匹配资源：
```javascript
<script asycn defer src="./libs/react.js"></script>
```

### 3.3 资源内联
可以直接在原有资源引用的后面添加 `?__inline`：
```javascript
<script asycn defer src="./libs/react.js?__inline"></script>
```

插件也支持，你按相对路径来内联资源，假设资源目录如下：

```javascript
-- src
  |-- index.html
  |-- libs
  |    |-- react.js
  |-- css
  |    |-- index.css
```

你可以这样内联：
```javascript
<script asycn defer src="./libs/react.js?__inline"></script>
<link asycn defer rel="stylesheet" href="./css/index.css?__inline">
```

### 3.4 根据环境引用资源
你可能会想在开发环境和生产环境，分别去引用不同的资源，你可以先在插件参数中，给 `options.env` 传入当前环境变量(`development` 或 `production`)。

然后配置下面资源，那么开发环境的时候会引入第一条资源，而生产环境则只会引入第二条。

```javascript
<script asycn defer src="libs/react.js?__development"></script>
<link asycn defer rel="stylesheet" href="./css/index.css?__production">
```

## 4. 样式与模板

Steamer 系列脚手架中，默认是使用 `Less` 作为样式预处理器，但并没有采取哪个模板作为默认开启的模板。但许多老旧项目中，有各式各样的样式与模板需要兼容。放心， Steamer 脚手架对市面上大部份主流的样式编译器与模板都有所支持，你可以到 `config.project` 中，去配置 `webpack.style` 和 `webpack.template`。

目前样式预变异器支持 `sass`, `scss`, `less`, `stylus`，而模板则支持 `pug`(原本叫 `jade`), `handlebars` 和 `ejs`。 配置好后，重新 `npm start`，会自动帮你安装相关依赖。

## 5. 合图

以上所支持的各种样式的合图，Steamer 系列脚手架都支持。同时提供了 `1倍图(normal)`, `2倍图(retinaonly)` 和 `同时生成1和2倍(retina)`。不过请记得同时要设置一下 `spriteStyle`。目前仅支持同一项目中一种样式的合图。更多文档，请参考[样式与合图](/docs/projectkits/Style-Sprites.html)。


## 6. `import`, `require`, `export` 和 `module.exports`

`webpack 3` 以后，模块导出的时候，就不再支持 `export` 和 `module.exports` 在同一文件中混用了，因此如果你改造的项目中有这种情况，可能会报错。

同时 `require` 默认模块的时候，记得在后面补上 `default`， 如 `require('xxx').default`。