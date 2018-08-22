# 快速开始 —— 使用 steamerjs 安装与更新脚手架

## 安装 steamerjs 和脚手架管理插件

* [steamerjs](https://github.com/steamerjs/steamerjs)
* [steamer-plugin-kit](https://github.com/steamerjs/steamer-plugin-kit)

```javascript
npm i -g steamerjs

// v2.0 之后已经内置，可不额外安装
npm i -g steamer-plugin-kit
```

## 安装你喜欢的脚手架

```javascript
steamer kit --add https://github.com/steamerjs/steamer-react.git
```

## 本地部署脚手架

```javascript
steamer kit
// 然后选择你喜欢的脚手架
? Which starterkit do you wanna install:  (Use arrow keys)
❯ steamer-react - alloyteam react starterkit
  steamer-vue - alloyteam vue starterkit
  steamer-simple - alloyteam frameworkless starterkit
  steamer-react-component - react component development starter kit
  steamer-vue-component - vue component development starter kit
  steamer-simple-component - frameless component development starter kit
  steamer-logic-component - logic component development starterkit
  steamer-example - steamer starter kit example
```

## 脚手架自身命令

```javascript
// 安装依赖
npm i

// 开发
npm start 或 npm run dev
// 打开链接
localhost:9000

// 代码规范扫描
npm lint

// 生产代码生成
npm run dist 或 npm run pub
```

## 基于模板生成页面

```javascript
steamer kit --template
// 然后选择你想选的模板，进行页面生成

? type the template source folder: ./tools/template
? type your template destination folder:  ./src/page
? type your npm command(npm|tnpm|cnpm etc):  npm
which template do you like:  (Use arrow keys)
❯ index
  list
  preact-list
  spa
? type in your page name:  detail
```

## 更新脚手架

```javascript
// 更新脚手架
steamer kit --update --global

// 更新你的项目构建
cd project // 进入项目目录

steamer kit --update
```
更新完毕，为将 `tools`，`package.json` `README.md` 做备份，其它内容会进行覆盖。