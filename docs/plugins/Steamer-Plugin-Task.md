---
title: 任务执行 - Task
---
# steamer-plugin-task

并行或串行执行自定义任务

[![NPM Version](https://img.shields.io/npm/v/steamer-plugin-task.svg?style=flat)](https://www.npmjs.com/package/steamer-plugin-task)
[![Travis](https://img.shields.io/travis/steamerjs/steamer-plugin-task.svg)](https://travis-ci.org/steamerjs/steamer-plugin-task)
[![Deps](https://david-dm.org/steamerjs/steamer-plugin-task.svg)](https://img.shields.io/steamerjs/steamer-plugin-task)
[![Coverage](https://img.shields.io/coveralls/steamerjs/steamer-plugin-task.svg)](https://coveralls.io/github/steamerjs/steamer-plugin-task)

## 添加任务
```javascript
steamer task --add [task name]

// 如：
steamer task --add alloyteam
// 1. 全局安装 steamer-task-alloyteam
// 2. 将 steamer-task-alloyteam 里的 .steamer 内容全数拷贝到项目的 .steamer内
// 3. 安装 steamer-task-alloyteam 任务所需依赖到项目中
```

## 任务配置
```javascript
// 自动生成配置
steamer task

// .steamer/steamer-plugin-task.js
/**
 * 如果 task 是一个文件路径字符串，并且存在，文件会被 require 之后，执行
 * 如果 task 是字符串且中间有空格分割，task 会被解析成命令行，直接用 spawn 执行
 */
module.exports = {
    "plugin": "steamer-plugin-task",
    "config": {
        // 用对象写法是并行运行命令
        "dev": {
            0: "steamer list",
            1: "cde.js",
        },
        // 用数组写法是串行运行命令
        "dist": [
            "steamer kit -l",
            "bcd.js",
            "abc.js"
        ]
    }
};

// .steamer/task
task
 |-- abc.js
 |-- bcd.js
 |-- cde.js
 |-- def.js

// 并行任务
// cde.js
module.exports = function (ctx) {
    console.log('cde');
};

// def.js
module.exports = function (ctx) {
    console.log('def');
};

// 串行任务
// bcd.js
module.exports = function(ctx, next) {
    console.log('bcd');
    next();
};

// abc.js, 最后一个任务无须执行next
module.exports = function(ctx) {
    console.log('abc');
};

```

## 并行或串行运行任务
```javascript
// 并行运行 dev 的命令
steamer task dev
start running task: steamer list
start running task: cde.js
// output from node cde.js
finishing task: cde.js
// output from steamer list
finishing task: steamer list

// 串行运行 dist 的命令
start running task: steamer kit -l
// output from steamer list
steamer task dist
start running task: bcd.js
// 1 second later
// output from node bcd.js
start running task: abc.js
// out from node abc.js
```

