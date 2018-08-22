# 组件化规范实践

以下以QQ旗下的[花样直播](http://huayang.qq.com/)业务为例


## 组件命名

命名规范：`[适用平台]-[所用框架]-[功能前缀]-组件用途名`

组件用途名尽量表达清晰，不要过多简写

1. 适用平台取值：

- 空：不限定平台
- hy：花样直播、交友（花样独占的全部用这个，包括签约平台等，具体的平台说明写在文档里）
- mqq：手Q

2. 所用框架取值：

- 空：无框架
- react：使用react（react-like的也用这个字段，如实在与react的区别很大，可自写）
- vue：使用vue
- ...：其他，自己写

3. 功能前缀取值（目前仅列了一部分，欢迎补充）：

- ui：UI组件
- report：上报相关组件
- utils：类似以前存在utils里的公用方法
- 空

示例：hy-react-ui-mtoast、hy-ui-pctips、hy-mapi、hy-pcapi、report-tdbank、report-isd、utils-debounce、img-lazyload


## 组件文档

组件分为：

- README.md，给用户看的
- README_DEV.md，给开发组件的人看的
- CHANGELOG.md 更新日志,把每次更新发布内容摘要记录下来，记录形式：版本号 (日期) 更新摘要

### 给用户看的文档要点

1. 组件用途、安装方式
2. 适用平台：花样直播PC、花样交友PC、手Q、花样直播iOS、花样直播Android、花样交友Android、签约平台等
3. 使用框架：react、react-like、vue、无框架
4. 依赖库：jquery、zepto、等等等
5. 跨浏览器使用请说明浏览器兼容性：PC（浏览器版本）、Mobile（iOS、Android版本、浏览器内核版本）
6. API说明、Example

### 给组件开发者看的文档要点

1. 开发调试方式（构建命令、example怎么跑）
2. 测试方式（如有）
3. 持续集成方式（如有）
4. 发布方式


## 组件代码要求

1. 源码统一使用ES2015编写，使用import, export做模块化释出的可用版本要用babel编译好
2. 不要污染全局namespace，css请带上组件前缀
3. 如果有测试代码、自测用例最好，没有也不影响，但一定要自测好。自动化测试方式待实践后补充
4. 注释使用jsDoc风格
要求注释到位，变量声明写清楚用途，关键逻辑一定要写注释，接口一定写清楚用途、入参出参
(jsDoc参考：http://www.css88.com/doc/jsdoc/tags.html 、http://usejsdoc.org/)
5. 一定要注意组件的性能
6. 第一次写不懂如何组织代码，请参考现有组件代码

### react组件化参考

- 代码最佳实践
- 暴露出来的属性请用propTypes声明好
- props默认值使用defaultProps声明
- 尽量不要直接操作DOM，谨慎使用refs
- state只存渲染相关变量，不允许存其他值
- react组件化思想
- react组件化的好文：[重新设计React组件库](http://mp.weixin.qq.com/s?__biz=MjM5MTA1MjAxMQ==&mid=2651224603&idx=1&sn=44301625e46d38125308a30a90f89e42&chksm=bd49a39f8a3e2a899ce36b76dbf516d7e0bc791593c3116ea7bb64fa0951071dc29ed8965edf&mpshare=1&scene=1&srcid=1220ddNy08UyMLc2rQtKGZua#rd)，组件的规范与自由、数据的耦合与解耦
- 使用high order component(hoc)思想：[介绍1](https://segmentfault.com/a/1190000004598113)、[介绍2](https://leozdgao.me/chushi-hoc/)
- 用好children来复用高阶组件：[children如何修改](https://segmentfault.com/a/1190000004393776)
- 其他欢迎补充



## 上传npm

### package.json要求

- 每次发布，`version`都要改变，规则使用npm官方推行的[semver](http://semver.org/)：
版本格式：`主版号.次版号.修订号`，版号递增规则如下：
- 主版号：大改动，不向下兼容，更新主版号
- 次版号：新增或改动了功能，向下兼容，更新次版号
- 修订号：修复了bug，向下兼容，更新修订号

### 构建说明

- 构建命令都写在`package.json`的`script`里，请遵循这个规范，便于别人在看你的组件源码时，方便找到构建信息。构建命令建议使用以下几个：
- `start`：开发调试
- `dist`：构建组件发布内容，通常拿来测试发布内容是否符合预期
- `prepublish`：npm官方命令，在npm publish之前被执行，详细参考[npm-scripts](https://docs.npmjs.com/misc/scripts)
- `lint`: 用于协助开发者写迅速发现不符合规范的代码，建议全局安装[`eslint`](https://github.com/eslint/eslint)和[`stylelint`](https://github.com/stylelint/stylelint)
(https://docs.npmjs.com/misc/scripts)
- 组件构建需要思考构建出的最终文件，给用户使用时能否__避免出现过多冗余__
比如react的UI组件，如果完整构建会把react的包也打进去，别人引用你组件多了几百k那肯定要完，因此在许多组件中，build我们用babel-cli的命令跑一下就可以了，无需用构建做模块化加载
反之，如果你构建出来的包，不会让用户在使用时产生过多冗余，那么你就可以考虑构建编译出用户直接能用的包，让用户的构建不用来解析node_modules
- 组件的开发构建脚手架，推荐[steamer](http://steamer.oa.com/docs/docs/Component-Starterkit.html)

### 发布步骤

__1. 注册用户__

```
$ npm adduser
```

__2. 发布，在包的根目录执行__

```
$ npm publish
```

__3. 给别人维护，需要增加npm包owner权限，否则非owner无法上传npm__

- 查看现有npm包的owner成员，ls后写包的名字：
```
$ npm owner ls react-list-scroll
```
- 新增owner，add后面写新增的owner名字及包的名字
```
$ npm owner add ningj react-list-scroll
```