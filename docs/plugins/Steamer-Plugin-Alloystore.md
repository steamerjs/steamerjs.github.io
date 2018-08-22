---
title: 组件发布 - AlloyStore
---
# steamer-plugin-alloystore

将组件上传或更新至alloystore(一个组件展示平台)


## 安装

```javascript
// tnpm是内部npm管理命令行工具
tnpm i -g steamerjs

tnpm i -g steamer-plugin-alloystore
```


## 推荐脚手架

组件开发推荐使用以下脚手架:
* [steamer-react-component](https://github.com/SteamerTeam/steamer-react-component)
* [steamer-vue-component](https://github.com/SteamerTeam/steamer-vue-component)
* [steamer-simple-component](https://github.com/SteamerTeam/steamer-simple-component)

组件的 `example` 需要符合以下规范，才能正确被读取，并上传到 `alloystore`

* `example` 源码写在 `example/src` 下

* `js` 代码仅且仅写在一个 `js` 文件中，此文件位置默认在 `example/src/page/index/container/index.js`

* `css` 或其它样式代码，仅写在一个文件中，此文件位置默认在 `example/src/page/index/container/` 下，与 `js` 文件同级，支持 `css|less|stylus|scss|sass` 5种后缀，名字为 `index.[ext]`，但在 `index.js` 中要引用，并以完整名称引用，如 `require('./index.css')` 或 `import './index.css`

* 如果你想自定 `example` 路径，可以在 `package.json` 中设置，如下:

```javascript
"alloystore": {
    "demo": "example/src/index/container/"
}
```

`example` 的配置也可以是 `Object`，此时写文件的完整路径。此时也可以带上 `html`。

```javascript
"alloystore": {
    "demo": {
    	"js": "example/src/index/container/index.js",
    	"style": "example/src/index/container/index.less",
    	"html": "example/src/index/main.html"
    }
}
```

`html`文件默认路径是在 `example/src/page/index/main.html`。

`html`文件里的 `<script>` 标签，请不要写在 `<body>`标签里，因为命令行只会解析被上传 `<body>` 标签里的内容。如

```html
// 原html
<!DOCTYPE html>
<html>
<head>
  	<link rel="stylesheet" href="index">
  	<script src="index"></script>
</head>

<body>
	<div id="root"></div>
</body>
</html>

// 上传内容
<div id="root"></div>
```

* 开发demo的时候，你可能会将 `src` 里的入口文件进行引用，此时建议在 `webpack` 的 `alias` 中为组件设置别名，直接指向 `src` 中的入口文件，这样一来，你可以方便地这样引用：

```javascript
import Index from 'react-list-scroll';
```

* 开发demo的时候，请将最终 `export` 的 `class`，名字改成 `Main`，这样才能被 `Alloystore` 识别。



## 使用

进入组件目录

```javascript
cd component
```

初次使用，进行登录，输入用户名和密码，正确后，会自动进行上传

```javascript
steamer alloystore
```

如果已经上传过，命令会在 `package.json` 写入以下字段，记录组件的 `id`:

```
"alloystore": {
	"id": 35
}
```

那么再次使用命令时，会帮你自动更新组件在线上的版本，以及 `example`。

如果你只是想上传 `example`，而不更新组件的版本，可使用以下命令：

```
steamer alloystore -u example
// or
steamer alloystore --update example
```


### 开发

```javascript
// 将你的插件传至全局路径，那你就可以直接使用 `steamer example`
npm link

// 当你完成开发，可以 `unlink` 你的插件
npm unlink

```
