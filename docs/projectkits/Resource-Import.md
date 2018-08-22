# 资源引用

## `JS` 文件内的资源引用

`js` 文件是 `webpack` 的天然入口，因此许多资源的搜索路径，都随 `webpack` 自身的 `resolve` 配置。而且 `js` 中能够引用几乎任何资源，只要有合适的 `loader` 进行解析。有一点要注意的是，如果想 `webpack` 按着 `resolve.modules` 配置的路径逐一搜索，直到搜索到为止，可以如一引用资源：

```javascript
import Lib from 'page/index/components/nav';
```


## `CSS` 文件内的资源引用

`css` 既可以遵循 `webpack` 自身的 `resolve` 配置，也可以在相关的样式 `loader` 里对搜索路径进行重写（详请各个样式 `loader` 的文档），比如 `less-loader` 会有这样的参数配置：

```javascript
options: {
    paths: [
        'project/path/src',
        "node_modules"
    ]
}
```

如果想 `webpack` 按着 `resolve.modules` 配置的路径逐一搜索，直到搜索到为止，可以如一引用资源：

```css
@import "~btn.less"; 
```

* 此中方式 webpack 逐渐不再支持，只有个别 `loader` 如 `less-loader` 仍在支持。


## `HTML` 文件内的资源引用

`html` 文件主要用于 `css` 和 `js` 资源的最终引用。此处借助了插件[html-res-webpack-plugin](https://github.com/lcxfs1991/html-res-webpack-plugin)，采取匹配的方式，将 `webpack` 生成的资源替换到 `html` 文件中，不要忘记后缀名，如下：

```html
<html lang="zh">
<head>
    <link crossorigin rel="stylesheet" href="index.css">
</head>
<body>
    <script crossorigin src="index.js"></script>
</body>
</html>

```

`js/index` 是指 `webpack` 的 `entry` 配置中的 `key` 值，如：

```
entry: {
    'js/index': ['project/path/src/page/index']
}
```

这些可以匹配的 `entry` 名，`html-res-webpack-plugin` 都会帮你在命令行中打印出来，方便你进行匹配。更多的 `html` 文件资源引用，可参考[插件文档](https://github.com/lcxfs1991/html-res-webpack-plugin)。

```javascript
html-res-webapck-plugin:
assets used like:
<link rel="stylesheet" href="index.css">
<script src="index.js"></script>
chunk1: index.js
chunk2: libs/jquery.js
chunk3: libs/zepto.js
```