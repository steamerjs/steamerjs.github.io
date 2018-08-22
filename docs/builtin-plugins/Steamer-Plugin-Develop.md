---
title: 脚手架或命令行开发 - Develop
---

# steamer-plugin-develop

若要开发 `steamerjs` 的命令行插件或者脚手架，请使用此命令部署对应模板。

## 开发命令行插件
```javascript
steamer develop --plugin [plugin name]
// 或
steamer develop -p [plugin name]
// 命令运行后，会下载 [steamer-plugin-example](https://github.com/steamerjs/steamer-plugin-example)
```

## 开发脚手架插件
```javascript
steamer develop --kit [starterkit name]
// 或
steamer develop -k [starterkit name]
// 命令运行后，会下载 [steamer-example](https://github.com/steamerjs/steamer-example)
```