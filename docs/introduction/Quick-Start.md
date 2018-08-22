# 快速开始

## 安装核心库
```javascript
npm i -g steamerjs
```

## 安装团队配置

```javascript
// 默认团队，包括配置、脚手架、命令行插件
npm i -g steamer-team-default

// 如果你是AlloyTeam 成员，你可以安装
npm i -g steamer-team-alloyteam

// 如果你是其它团队的成员，你可以自建一份团队配置，如 steamer-team-xxx，然后发布到 npm 上，再安装
npm i -g steamer-team-xxx
```

## 使用命令

```javascript
// 安装本地 mock 服务
npm i -g steamer-plugin-mock

// 使用
steamer mock
```

## 基于脚手架初始化项目
```javascript
steamer kit

// 然后选择本机已有的脚手架进行初始化
```