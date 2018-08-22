---
title: 推荐工作流
---

# steamerjs 前端开发体系及其工作流

前端的开发体系，不外乎如下几大要样，AlloyTeam 内部都有对应的解决方案。

1. Steamer 命令行工具及脚手架
2. AlloyStore 组件展示平台
3. LinkStar 假数据联调平台
4. JB 测试部署平台
5. Ars 发布上线平台
6. AlloyData 数据上报平台
7. Sentry 错误监控平台
8. AlloyKit 离线包发布平台
9. XuanWu 直出平台

具体的开发流程，是怎么样的呢？

## 第零步 Steamerjs 核心库安装

为日后开发更为顺畅，请你入职第一天先把 Steamerjs 这个核心库先安装了，这对于你后面提高开发效率大有裨益，因为你可以使用各类 Steamer 命令行插件以及系列的脚手架进行开发。

## 第一步 脚手架生成

我们通过 Steamer 命令行工具 [steamer-plugin-kit](https://steamerjs.github.io/docs/How-To-Start.html) 生成脚手架，官方分别提供了 [业务项目](https://steamerjs.github.io/docs/Starterkit.html) 及 [组件开发](https://steamerjs.github.io/docs/Component-Starterkit.html) 两种脚手架。

通过 命令行工具 [steamer-plugin-ak](https://steamerjs.github.io/docs/Steamer-Plugin-AK.html) 或者 webpack插件 [ak-webpack-pulgin](https://github.com/steamerjs/ak-webpack-plugin)，集成了离线包发布功能。生成的离线包 `zip` 文件，可以通过 AlloyKit 离线包发布平台进行发布。

通过 集成 SDK 方式，脚手架支持 alloy_report 统一上报工具，以及 Sentry 错误监控。项目发布后，便可以通过 AlloyStore, Monitor, TDW, Sentry 等平台监控我们产品各个纬度的数据。

通过集成直出服务器的方式，可以允许我们通过 Steamer 系列脚手架同时进行直出及静态资源逻辑的开发。

## 第二步 假数据联调

有时候前端开发比较快，那我们可以利用内部的 LinkStar 系统进行数据联调。不过，有时候我们会开发一些与业务无关的技术项目或者运营项目，那我们可以使用 [steamer-plugin-mock](https://steamerjs.github.io/docs/Steamer-Plugin-Mock.html) 在脚手架中部署我们的本地假数据联调平台。

## 第三步 组件开发

业务开发过程中，为了方便复用，我们会提取出一些组件。我们通常会采用 Steamer提供的 [组件开发](https://steamerjs.github.io/docs/Component-Starterkit.html) 脚手架进行开发。开发完毕后，你可以手动将脚手架中的 example 目录中的 demo 拷贝到AlloyStore 组件展示平台上。但我们有更快捷的方法，我们可以使用 [steamer-plugin-alloystore](https://steamerjs.github.io/docs/Steamer-Plugin-Alloystore.html) 上传你的组件 demo 到 AlloyStore 上面。

## 第四步 测试部署

项目开发基本结束后，我们要通过 JB 测试部署平台将准生产代码部署到测试服务器上，给产品体验及测试提测。我们可以通过 [steamer-plugin-jb](https://steamerjs.github.io/docs/Steamer-Plugin-JB.html) 生成 JB 的相关配置。如果你是采用本地构建的，使用命令的时候选择 offline； 如果你是采用服务器构建的，你使用命令的时候请选择 online。

## 第五步 发布上线

当测试通过后，我们便会从 JB 测试部署平台上，选择通过 ARS 平台，将代码发布到外网。