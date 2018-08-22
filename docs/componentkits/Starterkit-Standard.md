# 脚手架使用规范

## 开发组件规范

* 修改 `package.json` 的相关信息，如 `name`, `description`, `repository`, `bugs`, `homepage`等
* 在 `src` 目录下进行核心组件代码开发
* 在 `example/src` 目录下，进行 `demo` 的开发，引用src目录下的源码
* 使用 `npm run start` 命令，访问 `localhost:9000` 能访问 `demo`
* 如果想查看具体生成的 `demo` 代码，可以在 `config/project.js` 中配置 `showSource` 参数
* 开发完毕后，请使用 `npm run dist` 生成可供使用的生产代码

```javascript
注意，目前 npm run dist 其实是运行了 npm run webpack，表示是直接使用 webpack 帮助你进行编译。 这便于你使用 umd, cmd 等各种模板引用模式。

另外，在在使用 webpack 编译打包的时候，有时引用库你并不想打包到你的组件里面。

那么，请在 config/project.js 配置文件里设置 external 参数，这样 webapck 就不会帮你将这些 external 的库打包进组件里面。

如果想使用 babel 编译，请将 npm run dist 的命令内容改为 npm run babel。
```


### 逻辑组件注意事项

逻辑组件开发时，可能并不需要具体 `demo`，这时，测试的一些文件（非测试用例文件），可放在 `example` 或者 `tests` 中。

由于脚手架自带 `babel-jest` 依赖，运行测试的时候会帮你自动编译好源码。因此可以在测试的时候直接引用 `src` 中的源码，测试结果与引用 `dist` 中的生产环境代码无二。

- 示例：[pure-render-deepCompare-decorator](https://github.com/steamerjs/pure-render-deepCompare-decorator)

### UI组件注意事项

UI组件开发的时候，往往需要同时开发具体的 `demo` 供测试，或者调试。这时候，使用后面会说到的 `npm start` 等开发命令，能够启动一个服务器，帮助你通过页面进行调试或测试。如果你想查看具体开发时候的代码，可以使用 `npm run source`。

对UI组件进行测试的时候，除了[jest](https://github.com/facebook/jest)之外，还需要到 `Airbnb` 开发的 [enzyme](https://github.com/airbnb/enzyme)，方便进行 `react` 组件的渲染、搜索等，可能还需要到 [jsdom](https://github.com/tmpvar/jsdom) 和[jest-environment-jsdom](https://github.com/facebook/jest/tree/master/packages/jest-environment-jsdom) 帮你注入全局 `window`。除此之外，你可能想不测某式内容，例如样式等，你可以在 `test/mocks` 文件夹中，放一个 `styleMock.js` 文件，用于虚构样式文件。详细可以参考下面的例子。

- 示例：[react-list-scroll](https://github.com/SteamerTeam/react-list-scroll)

## 两种编译与两种测试方式

### 编译方式：
* babel
    - 用于 commonjs 的引用方式
    - 外部引用，如样式，会保留在代码中, 最后由使用组件的项目构建进行解析
* webpack
    - 用于多种引用方式，包括 commonjs, amd, umd等，
    - 外部引用，如样式，建议保留内联在js中，最后由使用组件的项目构建进行提取； 如 react 库，建议设置 external。

### 测试方式：
* jest
    - 使用虚拟 dom 进行测试
    - react的常用测试工具
    - 仅适用于 babel 的编译方式
* karma
    - 使用真实 dom 进行测试，会打开浏览器
    - 适用于 babel 和 webpack 两种编译方式

使用 `jest` 的时候，可把用例放在 `test/unit/specs`， 并且文件格式应使用如 `[name].spec.js`。

`karma` 能和 `jest` 共用以上的测试用用例（已经配置好），测试时会自动运行Karma自有的webpack server并进行代码测试，测试结果会以mocha-reporter形式展现，代码覆盖率报告会在浏览器中自动打开。
