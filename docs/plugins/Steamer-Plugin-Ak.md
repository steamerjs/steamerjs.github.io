---
title: 离线包发布 - AK
---
# steamer-plugin-ak

AlloyKit平台生成离线包命令

[![NPM Version](https://img.shields.io/npm/v/steamer-plugin-ak.svg?style=flat)](https://www.npmjs.com/package/steamer-plugin-ak)
[![Travis](https://img.shields.io/travis/steamerjs/steamer-plugin-ak.svg)](https://travis-ci.org/steamerjs/steamer-plugin-ak)
[![Deps](https://img.shields.io/david/steamerjs/steamer-plugin-ak.svg)](https://david-dm.org/steamerjs/steamer-plugin-ak)
[![Coverage](https://img.shields.io/coveralls/steamerjs/steamer-plugin-ak.svg)](https://coveralls.io/github/steamerjs/steamer-plugin-ak)

## Webpack 插件
如果是 `steamer` 系列的 `webpack` 脚手架，可使用 [ak-webpack-plugin](https://github.com/steamerjs/ak-webpack-plugin) 插件。

## 安装

```javascript
npm i -g steamerjs

npm i -g steamer-plugin-ak
```

## 使用

如果项目的生成环境的代码结构如下：

```javascript
-- dist
	|
	-- cdn
	|	|
	|	|-- css
	|	|-- img
	|	|-- js
	|
	-- webserver
		|-- index.html
		|-- detail.html
		|-- comment.html
```

初始化：

```javascript
steamer ak -i

或

steamer ak -init

```

它会弹出下面的一些问题：

`Your zip file name`, 意思是最终生成的离线包名称，默认值是 `offline`，**当前文件夹位置以命令执行位置为基准**。

`Your source folder`, 生成环境的代码源，上面的项目结构中是 `dist`，这也是默认值。

后面三个选项会一直循环出现，除非你输入空值，因为项目中可能有多个 `cdn` 对应多个静态资源。例如，你可能会用 `//huayang.qq.com/h5/` 给你的 `html` 文件，而用 `//s1.url.cn/h5/` 给你的其它静态资源。


```javascript
Your zip file name(e.g., offline): (offline)

Your source folder(e.g., build, pub, dist): (dist)

Whether to add webserver url for all resources: (No)

Your resource folder(e.g., cdn, cdn/js, cdn/css, webserver):

Your destination url(e.g.,//huayang.qq.com/h5/):

Your destination folder(e.g., /, /, js, css):
```

这里是配置文件的范例 (.steamer/steamer-plugin-ak.js).

```javascript
module.exports = {
    "plugin": "steamer-plugin-ak",
    "config": {
        // String, 最终生成的离线包名称，默认值是 `offline`，**当前文件夹位置以命令执行位置为基准**
        "zipFileName": "dist/offline", 
        // String, 生成环境的代码源，默认值 `dist`
        "src": "dist",
        // 压缩参数，详参 https://archiverjs.com
        "zipConfig": {
            zlib: { level: 9 },
        },  
        // 具体的文件目录及cdn映射,
        "map": [
            {
                "src": "webserver",
                "url": "//localhost:9000/"
            },
            {
                "src": "cdn",
                "url": "//localhost:8000/"
            }
        ],
        // minimatch 配置，以下是默认的配置
        "minimatchOpt": {
            matchBase: true,
		    dot: true
        },
        // 下列回调方法，可以直接使用this.fs (fs-extra), this.success, this.info, this.warn, this.alert
        // 在 拷贝文件到 offline 离线文件夹之前
        beforeCopy: function() {
            
        },
        // 在 拷贝文件到 offline 离线文件夹之后
        afterCopy: function() {
            
        },
        // 在压缩 offline 离线文件夹之前
        beforeZip: function(offlineFiles) {
            // offlineFiles 在离线包文件夹内的文件路径信息
        },
        // 在压缩 offline 离线文件夹之后
        afterZip: function(zipFilePath) {
            // zipFilePath 最终生成的离线zip包路径
            
        }
    }
}
```

然而，有时候你会对 `html` 以外的静态资源再进行细分，使用不同的 `cdn` 域名，例如 `//s1.url.cn/h5/` 给你的 `js`文件，用 `//s2.url.cn/h5/` 给 `css` 文件， 然后用 `//s3.url.cn/h5/` 给其它的文件。

Here is another example config.

```javascript
module.exports = {
    "plugin": "steamer-plugin-ak",
    "config": {
        "zipFileName": "offline",
        "src": "dist",
        "map": [
            {
                "src": "cdn/js",
                // String, 目标文件路径子文件夹，默认为空字符串
                "dest": "js",
                // Boolean， 默认 false，如果为 true， 则会将 cdn 的 url替换成与 isWebserver 为 true 的 cdn url
                "isSameOrigin": true, 
                "url": "s1.url.cn/huayang/"
            },
            {
                "src": "cdn/css",
                "dest": "css",
                "url": "s2.url.cn/huayang/"
            },
            {
                "src": "cdn/img",
                "dest": "img",
                "url": "s3.url.cn/huayang/"
            },
            {
                "src": "cdn/lib",
                "dest": "lib",
                "url": "s1.url.cn/huayang/"
            },
            {
                "src": "webserver",
                // Boolean， 默认为 false，如果为 true，则这将告诉插件这是 html 的主要 cdn url 
                "isWebserver": true,
                "url": "huayang.qq.com/huayang/activity/"
            }
        ]
    }
}
```

之所以要用 `isSameOrigin` 与 `isWebserver`，是有时候需要 `html` 文件和 `js` 文件的域名一致，例如有时候需要收集js的报错，让两者的 `cdn` 一致会更方便收集到具体的报错信息。

如果你想部份文件走离线包，部份走线上，你在生成离线包的时候，可以 `exclude` 部份文件。 `exclude` 参数，主要是 `Globs` 的写法，可以参考 [minimatch](https://github.com/isaacs/minimatch) 的配置。示例配置如下。对于一些比较长的路径，如 `/a/b/c/d/1.png`，可以尝试如 `**/c/d/*.png` 类似的匹配。

```javascript
module.exports = {
    "plugin": "steamer-plugin-ak",
    "config": {
        "zipFileName": "dist/offline",
        "src": "dist",
        "map": [
            {
                "src": "webserver",
                "dest": "",
                "url": "//huayang.qq.com/h5/"
            },
            {
                "src": "cdn",
                "dest": "",
                "url": "//s1.url.cn/h5/",
                "exclude": ['*.png', '*ell.jpg'],
            }
        ]
    }
}

```

下面的命令，会进行压缩，并生成 `offline` 文件夹，还有 `offline.zip` 文件。

```javascript
steamer ak -c

or

steamer ak -compress
```

## 测试

```javascript
// 安装eslint工具
npm i -g eslint

npm run test
```
