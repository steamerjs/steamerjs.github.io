---
title: 脚手架部署与更新 - Kit
---
# steamer-plugin-kit

starter kit 管理命令

[![NPM Version](https://img.shields.io/npm/v/steamer-plugin-kit.svg?style=flat)](https://www.npmjs.com/package/steamer-plugin-kit)
[![Travis](https://img.shields.io/travis/steamerjs/steamer-plugin-kit.svg)](https://travis-ci.org/steamerjs/steamer-plugin-kit)
[![AppVeyor](https://img.shields.io/appveyor/ci/lcxfs1991/steamer-plugin-kit.svg)](https://ci.appveyor.com/project/lcxfs1991/steamer-plugin-kit)
[![Deps](https://img.shields.io/david/steamerjs/steamer-plugin-kit.svg)](https://david-dm.org/steamerjs/steamer-plugin-kit)
[![Coverage](https://img.shields.io/coveralls/steamerjs/steamer-plugin-kit.svg)](https://coveralls.io/github/steamerjs/steamer-plugin-kit)

## 内置
`steamer-plugin-kit` 已经默认作为 `steamerjs` 的内置插件，全局安装 `steamerjs` 后即可使用。如果你额外安装 `steamer-plugin-kit`，则会优先使用这个额外安装的包。

## 安装
以下命令全局安装 `steamerjs` 或 `steamer-plugin-kit`，使用时如遇到问题，可先参见文档[[常见问题]](https://steamerjs.github.io/docs/introduction/Steamer-QA.html)，可能是没设置好 `NODE_PATH`

```javascript
// 必须
npm i -g steamerjs

// v2.0 已经内置到 steamerjs，因此可不安装
npm i -g steamer-plugin-kit
```

## 设置 `NODE_PATH`

由于 `steamerjs` 的命令或脚手架都需要全局安装，尽管steamerjs会尝试兼容，但在某些使用场景下会仍然找到不全局安装的位置，因此推荐设置环境变量 `NODE_PATH`。

[常见问题 - NODE_PATH设置](https://steamerjs.github.io/docs/introduction/Steamer-QA.html)

## 更新
```
npm i -g steamer-plugin-kit@latest

// 或者
steamer update
```

## 添加脚手架
```javascript
// 添加最新版本
steamer kit --add https://github.com/steamerjs/steamer-react.git

// 添加指定tag版本
steamer kit --add https://github.com/steamerjs/steamer-react.git --tag v3.0.7
```

## 基于脚手架初始化项目
```javascript
// 运行命令，并进行选择
steamer kit

? Which starterkit do you wanna install:  (Use arrow keys)
❯ steamer-react - alloyteam react starterkit
  steamer-vue - alloyteam vue starterkit
  steamer-simple - alloyteam frameworkless starterkit
? Which version do you need:  (Use arrow keys)
❯ 3.0.8
  3.0.5
? Which folder is your project in:  (./)
```

## 更新脚手架
```javascript
steamer kit --update --global

? Which starterkit do you wanna update:  (Use arrow keys)
❯ all starterkits
  steamer-react - alloyteam react starterkit
  steamer-vue - alloyteam vue starterkit
  steamer-simple - alloyteam frameworkless starterkit
```

## 更新项目使用的脚手架
```javascript
cd project
steamer kit --update
```

## 查看可用脚手架
```javascript
steamer kit  --list
// 或
steamer kit -l

You can use following starterkits:
* steamer-react
    - ver: 3.0.8
    - des: alloyteam react starterkit
    - url: https://github.com/steamerjs/steamer-react.git
* steamer-vue
    - ver: 3.0.5
    - des: alloyteam vue starterkit
    - url: https://github.com/steamerjs/steamer-vue.git
* steamer-simple
    - ver: 3.0.3
    - des: alloyteam frameworkless starterkit
    - url: https://github.com/steamerjs/steamer-simple.git
```

## 脚手架数据
```javascript
// 添加脚手架后，数据会存放在 $HOME/.steamer/starterkits/ 下面，脚手架的相关信息也会存放在 starterkit.js 中
// 示例信息如下：
kits = {
  list: {
      'steamer-react': {
          latestVersion: '3.0.8',
          currentVersion: '3.0.8',
          description: '',
          versions: [
            '3.0.8',
            '3.0.5'
          ],
          url: ''
      }
  },
  timestamp: ''
};
```

## 基于模板生成页面
```javascript
steamer kit --template
// or
steamer kit -t

// 初次使用时做好配置，然后选择模板
? type the template source folder: ./tools/template
? type your template destination folder:  ./src/page
? type your npm command(npm|tnpm|cnpm etc):  npm
? which template do you like:  (Use arrow keys)
❯ preact-list
  react-simple-mobx
  react-simple-redux
  react-spa-mobx
  react-spa-redux
  react-typescript
```

## 脚手架生命周期
3.0.0 版本后，新增脚手架生命周期，例如，如果脚手架叫做 `steamer-example`，则在脚手架相关配置文件 `.steamer/steamer-example.js` 中可以写如下生命周期：

```javascript
const path = require("path");
const fs = require("fs");

module.exports = {
    /**
     * some other codes here
     */

    // 初始化脚手架时，在拷贝文件发生前
    beforeInstallCopy: function (answers, folderPath) {
        console.log('====beforeInstallCopy====');
    },

    // 初始化脚手架时，在拷贝文件发生后
    afterInstallCopy: function (answers, folderPath) {
        console.log('====afterInstallCopy====');
    },

    // 初始化脚手架时，在安装依赖发生前
    beforeInstallDep: function (answers, folderPath) {
        console.log('====afterInstallDep====');
    },

    // 初始化脚手架时，在安装依赖发生后
    afterInstallDep: function (answers, folderPath) {
        console.log('====afterInstallDep====');
    },

    // 更新本地项目脚手架时，在拷贝文件发生前
    beforeUpdateCopy: function (answers, folderPath) {
        console.log('====beforeUpdateCopy====');
    },

    // 更新本地项目脚手架时，在拷贝文件发生后
    afterUpdateCopy: function (answers, folderPath) {
        console.log('====afterUpdateCopy====');
    },

    // 更新本地项目脚手架时，在更新依赖发生前
    beforeUpdateDep: function (answers, folderPath) {
        console.log('====beforeUpdateDep====');
    },

    // 更新本地项目脚手架时，在更新依赖发生后
    afterUpdateDep: function (answers, folderPath) {
        console.log('====afterUpdateDep====');
    },

};

```

## Starter Kit 的例子
符合 `steamer` 规范的 `Starter Kit`，可以参考 [steamer-example](https://github.com/steamerjs/steamer-example/)，并仿照规范，进行接入。如何想开发，可以使用下面命令初始化：

```javascript
steamer develop -k [kit name]
```

官方 Starter Kit:
* react starter kit: [steamer-react](https://github.com/steamerjs/steamer-react/)
* vue starter kit: [steamer-vue](https://github.com/steamerjs/steamer-vue/)
* 无框架 starter kit: [steamer-simple](https://github.com/steamerjs/steamer-simple/)
* react 组件开发 starter kit: [steamer-react-component](https://github.com/steamerjs/steamer-react-component/)
* vue 组件开发 starter kit: [steamer-vue-component](https://github.com/steamerjs/steamer-vue-component/)
* 无框架 组件开发 starter kit: [steamer-simple-component](https://github.com/steamerjs/steamer-simple-component/)
* 小工具开发 starter kit: [steamer-logic-component](https://github.com/steamerjs/steamer-logic-component)

## 开发脚手架
在使用 `steamer develop -k [kit name]` 初始脚手架并开发了一定程序之外，若要在本地测试，可使用以下命令：

```javascript
cd [starterkit path]

steamer kit --develop
// or
steamer kit -d

// 如果想用别名，则用
steamer kit --develop [alias name]
// or
steamer kit -d [alias name]
```
