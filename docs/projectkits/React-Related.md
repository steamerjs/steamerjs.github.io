---
title: React 开发相关
---

# React Related  React开发相关

## 支持路由管理
脚手架使用官方推荐的 `react-router-redux` 和 `react-router` 进行路由管理，可参考 `src/page/spa` 目录


## Redux开发工具
[Redux Devtools](https://github.com/gaearon/redux-devtools)
目前在开发环境可以使用Redux Devtools。可以在`src/page/xxx/constatns/constants.js`中的DEBUG里控制开关，`true`表示开启，`false`表示关闭。

* <kbd>ctrl</kbd> <kbd>+</kbd> h进行切换
* <kbd>ctrl</kbd> <kbd>+</kbd> q切换位置

其它命令可以参考`src/page/common/devtools/DevTools.js`可以调defaultSize设置自己喜欢的大小。目前默认设置在底部，占30%的屏幕大小。


## 支持preact轻量类react框架
由于某些需求如运营活动可能需要比较轻量的框架，因此starter-kit也支持`preact`。目前，默认有`preact`相关引入的文件，都需要在文件顶部加上`/** @jsx h */`才能正常编译，或者可以通过使用 `jsx` 后缀进行区分。具体可参考 `src/page/pindex` 文件夹，或到 `preact`[官方网站](https://preactjs.com/)参考文档。