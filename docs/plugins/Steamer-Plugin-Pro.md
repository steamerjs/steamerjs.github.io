---
title: 多框架管理 - Pro
---
##  steamer-plugin-pro

多框架管理工具

[![NPM Version](https://img.shields.io/npm/v/steamer-plugin-pro.svg?style=flat)](https://www.npmjs.com/package/steamer-plugin-pro)
[![Travis](https://img.shields.io/travis/steamerjs/steamer-plugin-pro.svg)](https://travis-ci.org/steamerjs/steamer-plugin-pro)
[![Deps](https://img.shields.io/david/steamerjs/steamer-plugin-pro.svg)](https://david-dm.org/steamerjs/steamer-plugin-pro)
[![Coverage](https://img.shields.io/coveralls/steamerjs/steamer-plugin-pro.svg)](https://coveralls.io/github/steamerjs/steamer-plugin-pro)

### 安装

```javascript
npm i -g steamerjs

npm i -g steamer-plugin-pro
```


### 项目结构

通常来说，会有两种的项目结构

* 兄弟结构

```javascript

Main Porject
	|---- A Project 
	|---- B Project

```

* 父子结构
	- 默认, `steamer-plugin-pro` 只会搜索到第2层

```javascript

Main Project 
	|
	|---- A Project 
	  |
	  |---- B Project

```

### 初始化

如果你希望 `steamer-plugin-pro` 自动检测你的项目，你需要适当改动你的子项目的 `package.json`。 下面的 `name`, `start` 和 `dist` 就是会使用到的值。

```javascript
{
  "name": "steamer-project",
  "scripts": {
  	"start": "",
  	"dist": "",
  },
}

```

下面是一个展示的例子, `steamer-plugin-pro` 会生成 `steamer-plugin-pro.js` 配置文件.

```javascript
steamer pro -i

or 

steamer pro --init

// 父项目为第0层，一直搜索到第4层
steamer pro -i -l 4

or

steamer pro --init --level 4

// 无论 `steamer-plugin-pro.js` 配置文件是否存在，直接覆盖
steamer pro -i -f

or

steamer pro --init --force
```

`package.json`中的 `name` 值，直接作为 `project` 的值. `package.json` 里的 `scripts`中，`start` 和 `dist`  被用于配置中的 `cmds` 值。

`src` 值，则表示子项目文件的相对位置。

```javascript
module.exports = {
    "plugin": "steamer-plugin-pro",
    "config": {
        "projects": {
            "steamer-project": {
                "src": "project",
                "cmds": {
                    "start": "",
                    "dist": ""
                }
            },
            "steamer-koa": {
                "src": "koa",
                "cmds": {
                    "start": "node-dev ./app.js",
                    "dist": ""
                }
            },
            "steamer-model": {
                "folder": "model",
                "cmds": {
                    "start": "gulp&&node ./webpack.server.js",
                    "dist": "gulp sprites&&export NODE_ENV=production&&webpack"
                }
            },
            "steamer-react": {
                "folder": "react",
                "cmds": {
                    "start": "gulp&&node ./webpack.server.js",
                    "dist": "gulp sprites&&export NODE_ENV=production&&webpack"
                }
            }
        },
        "steps": {
            "start": {},
            "dist": {}
        }
    }
}
```


### 开发或发布你的项目

* 开发项目

```javascript
// 开发所有项目
steamer pro -s 

or 

steamer pro --start

// 只开发特定项目

steamer pro -s steamer-react

or 

steamer pro --start steamer-react
```

* 发布项目

```javascript
// 发布所有项目
steamer pro -d 

or 

steamer pro --dist

// 只发布特定项目

steamer pro -d steamer-react

or 

steamer pro --dist steamer-react
```

你也可以设置以下的回调函数，`config` 会作为参数传递到回调函数中。

* `config.currentProject`
	- 当前子进程的执行的项目

* `config.isEnd`
	- 只会在 `finish` 回调中出现, 如果是 `true`, 表示所有子进程结束

```javascript
"steps": {
    "start": {
        start: function(config) {       // 命令开始
            console.log("=====start=====");
            console.log(config);
        },
        finish: function(config) {      // 命令结束
            if (config.isEnd) {
                console.log("======end=====");
            }
        }
    },
    "dist": {
        start: function(config) {       // 命令开始
            console.log("=====start=====");
            console.log(config);
        },
        finish: function(config) {      // 命令结束
            if (config.isEnd) {
                console.log(config);
            }
        }
    }
}
```

有时候，你会希望将各个子项目中的 `dist` 文件夹中的文件，全部放置到父项目文件夹的某个文件夹中，这时，首先你可以在各个项目的配置中，添加 `dist` 字段，记录子项目的 `dist` 目录将会生成父项目的某个文件夹，如下，设置 `dist` 的值为 `dist 表示，将子项目的 `dist` 目录，将生成到父项目的 `dist` 目录下。插件强制规定子项目线上代码必须放在 `dist` 中（符合 `steamer` starter kit 的规范），你无法定制。

```javascript
"projects": {
    "steamer-react": {
        "src": "steamer-react",
        "dist": "dist",
        "cmds": {
            "start": "node ./tools/start.js",
            "dist": "node ./tools/dist.js"
        }
    },
    "steamer-simple": {
        "src": "steamer-simple",
        "dist": "dist",
        "cmds": {
            "start": "node ./tools/start.js",
            "dist": "node ./tools/dist.js"
        }
    }
},
```

然后，当 `steamer pro -d` 编译结束后，在调用 `steps.dist.finish` 回调时，调用插件内置的方法 `this.copyToDist`，如下，插件会帮你完成此功能：

```javascript
...
"steps": {
    "start": {},
    "dist": {
        start: function(config) {
            console.log("=====start=====");
            // console.log(config);
        },
        finish: function(config) {    
            if (config.isEnd) {
                this.copyToDist();
            }
        }
    }
}
```

如果你想进行深度定制，你可以通过 `config` 参数，获取各项目的相关位置信息，然后自己进一步写逻辑定制。


### 开发
```
// 将此模块链接到全局下
npm link

// 进入specPlugin中，在project2/steamer-simple, project2/steamer-react, project3/steamer-simple中安装依赖

// 运行测试用例
npm i -g eslint // 安装eslint

npm test
```