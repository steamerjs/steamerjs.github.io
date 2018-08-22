---
title: 项目发布 - JB
---
# steamer-plugin-jb

捷豹系统快速配置

[![NPM Version](https://img.shields.io/npm/v/steamer-plugin-jb.svg?style=flat)](https://www.npmjs.com/package/steamer-plugin-jb)
[![Travis](https://img.shields.io/travis/steamerjs/steamer-plugin-jb.svg)](https://travis-ci.org/steamerjs/steamer-plugin-jb)
[![Deps](https://img.shields.io/david/steamerjs/steamer-plugin-jb.svg)](https://david-dm.org/steamerjs/steamer-plugin-jb)
[![Coverage](https://img.shields.io/coveralls/steamerjs/steamer-plugin-jb.svg)](https://coveralls.io/github/steamerjs/steamer-plugin-jb)

## 安装
以下命令全局安装 `steamerjs` 或 `steamer-plugin-jb`，使用时如遇到问题，可先参见文档[[常见问题]](https://steamerjs.github.io/docs/introduction/Steamer-QA.html)，可能是没设置好 `NODE_PATH`

```javascript
// 必须
npm i -g steamerjs

npm i -g steamer-plugin-jb
```

* 注意：本插件依赖于 `git`，因此请在全局安装 [git](https://git-scm.com/downloads)

## 使用
### 初始化配置

```javascript
steamer jb
```

* type
	- online, jb 服务器构建
	- offline, jb 本地构建


### 添加 JB 部署单 ID(仅支持GIT)

```javascript
// 给当前分支添加部署id
steamer jb --add [id]

// 给特定分支添加部署id
steamer jb --add [branch]=[id]

// 可用 -a 简写 
```

示例配置，位置在项目的 `.steamer/steamer-plugin-jb.js`

```javascript
module.exports = {
    "plugin": "steamer-plugin-jb",
    "config": {
        "git": {
            "master": "R009082",
            "develop": "R008348"
        }
    }
};
```

### 根据 JB 分支和部署单 ID 进行捷豹部署(仅支持GIT)
* 注意，请务必在配置中存有该分支的部署单ID，部署单一般都以 `R` 开头，如 `R009082`，否则会报错

```javascript
// 给当前分支部署
steamer jb --run

// 给特定分支部署
steamer jb --run [branch]

// 可用 -r 简写
```
