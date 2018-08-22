(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{193:function(e,t,r){"use strict";r.r(t);var s=r(0),_=Object(s.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),r("ul",[r("li",[e._v("示例："),r("a",{attrs:{href:"https://github.com/steamerjs/pure-render-deepCompare-decorator",target:"_blank",rel:"noopener noreferrer"}},[e._v("pure-render-deepCompare-decorator"),r("OutboundLink")],1)])]),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),r("p",[e._v("对UI组件进行测试的时候，除了"),r("a",{attrs:{href:"https://github.com/facebook/jest",target:"_blank",rel:"noopener noreferrer"}},[e._v("jest"),r("OutboundLink")],1),e._v("之外，还需要到 "),r("code",[e._v("Airbnb")]),e._v(" 开发的 "),r("a",{attrs:{href:"https://github.com/airbnb/enzyme",target:"_blank",rel:"noopener noreferrer"}},[e._v("enzyme"),r("OutboundLink")],1),e._v("，方便进行 "),r("code",[e._v("react")]),e._v(" 组件的渲染、搜索等，可能还需要到 "),r("a",{attrs:{href:"https://github.com/tmpvar/jsdom",target:"_blank",rel:"noopener noreferrer"}},[e._v("jsdom"),r("OutboundLink")],1),e._v(" 和"),r("a",{attrs:{href:"https://github.com/facebook/jest/tree/master/packages/jest-environment-jsdom",target:"_blank",rel:"noopener noreferrer"}},[e._v("jest-environment-jsdom"),r("OutboundLink")],1),e._v(" 帮你注入全局 "),r("code",[e._v("window")]),e._v("。除此之外，你可能想不测某式内容，例如样式等，你可以在 "),r("code",[e._v("test/mocks")]),e._v(" 文件夹中，放一个 "),r("code",[e._v("styleMock.js")]),e._v(" 文件，用于虚构样式文件。详细可以参考下面的例子。")]),e._v(" "),r("ul",[r("li",[e._v("示例："),r("a",{attrs:{href:"https://github.com/SteamerTeam/react-list-scroll",target:"_blank",rel:"noopener noreferrer"}},[e._v("react-list-scroll"),r("OutboundLink")],1)])]),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),e._m(15)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"脚手架使用规范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#脚手架使用规范","aria-hidden":"true"}},[this._v("#")]),this._v(" 脚手架使用规范")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"开发组件规范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开发组件规范","aria-hidden":"true"}},[this._v("#")]),this._v(" 开发组件规范")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[e._v("修改 "),r("code",[e._v("package.json")]),e._v(" 的相关信息，如 "),r("code",[e._v("name")]),e._v(", "),r("code",[e._v("description")]),e._v(", "),r("code",[e._v("repository")]),e._v(", "),r("code",[e._v("bugs")]),e._v(", "),r("code",[e._v("homepage")]),e._v("等")]),e._v(" "),r("li",[e._v("在 "),r("code",[e._v("src")]),e._v(" 目录下进行核心组件代码开发")]),e._v(" "),r("li",[e._v("在 "),r("code",[e._v("example/src")]),e._v(" 目录下，进行 "),r("code",[e._v("demo")]),e._v(" 的开发，引用src目录下的源码")]),e._v(" "),r("li",[e._v("使用 "),r("code",[e._v("npm run start")]),e._v(" 命令，访问 "),r("code",[e._v("localhost:9000")]),e._v(" 能访问 "),r("code",[e._v("demo")])]),e._v(" "),r("li",[e._v("如果想查看具体生成的 "),r("code",[e._v("demo")]),e._v(" 代码，可以在 "),r("code",[e._v("config/project.js")]),e._v(" 中配置 "),r("code",[e._v("showSource")]),e._v(" 参数")]),e._v(" "),r("li",[e._v("开发完毕后，请使用 "),r("code",[e._v("npm run dist")]),e._v(" 生成可供使用的生产代码")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[this._v("注意，目前 npm run dist 其实是运行了 npm run webpack，表示是直接使用 webpack 帮助你进行编译。 这便于你使用 umd"),t("span",{attrs:{class:"token punctuation"}},[this._v(",")]),this._v(" cmd 等各种模板引用模式。\n\n另外，在在使用 webpack 编译打包的时候，有时引用库你并不想打包到你的组件里面。\n\n那么，请在 config"),t("span",{attrs:{class:"token operator"}},[this._v("/")]),this._v("project"),t("span",{attrs:{class:"token punctuation"}},[this._v(".")]),this._v("js 配置文件里设置 external 参数，这样 webapck 就不会帮你将这些 external 的库打包进组件里面。\n\n如果想使用 babel 编译，请将 npm run dist 的命令内容改为 npm run babel。\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"逻辑组件注意事项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#逻辑组件注意事项","aria-hidden":"true"}},[this._v("#")]),this._v(" 逻辑组件注意事项")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("逻辑组件开发时，可能并不需要具体 "),t("code",[this._v("demo")]),this._v("，这时，测试的一些文件（非测试用例文件），可放在 "),t("code",[this._v("example")]),this._v(" 或者 "),t("code",[this._v("tests")]),this._v(" 中。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("由于脚手架自带 "),t("code",[this._v("babel-jest")]),this._v(" 依赖，运行测试的时候会帮你自动编译好源码。因此可以在测试的时候直接引用 "),t("code",[this._v("src")]),this._v(" 中的源码，测试结果与引用 "),t("code",[this._v("dist")]),this._v(" 中的生产环境代码无二。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"ui组件注意事项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ui组件注意事项","aria-hidden":"true"}},[this._v("#")]),this._v(" UI组件注意事项")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("UI组件开发的时候，往往需要同时开发具体的 "),t("code",[this._v("demo")]),this._v(" 供测试，或者调试。这时候，使用后面会说到的 "),t("code",[this._v("npm start")]),this._v(" 等开发命令，能够启动一个服务器，帮助你通过页面进行调试或测试。如果你想查看具体开发时候的代码，可以使用 "),t("code",[this._v("npm run source")]),this._v("。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"两种编译与两种测试方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#两种编译与两种测试方式","aria-hidden":"true"}},[this._v("#")]),this._v(" 两种编译与两种测试方式")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"编译方式："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译方式：","aria-hidden":"true"}},[this._v("#")]),this._v(" 编译方式：")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[e._v("babel\n"),r("ul",[r("li",[e._v("用于 commonjs 的引用方式")]),e._v(" "),r("li",[e._v("外部引用，如样式，会保留在代码中, 最后由使用组件的项目构建进行解析")])])]),e._v(" "),r("li",[e._v("webpack\n"),r("ul",[r("li",[e._v("用于多种引用方式，包括 commonjs, amd, umd等，")]),e._v(" "),r("li",[e._v("外部引用，如样式，建议保留内联在js中，最后由使用组件的项目构建进行提取； 如 react 库，建议设置 external。")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"测试方式："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#测试方式：","aria-hidden":"true"}},[this._v("#")]),this._v(" 测试方式：")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[e._v("jest\n"),r("ul",[r("li",[e._v("使用虚拟 dom 进行测试")]),e._v(" "),r("li",[e._v("react的常用测试工具")]),e._v(" "),r("li",[e._v("仅适用于 babel 的编译方式")])])]),e._v(" "),r("li",[e._v("karma\n"),r("ul",[r("li",[e._v("使用真实 dom 进行测试，会打开浏览器")]),e._v(" "),r("li",[e._v("适用于 babel 和 webpack 两种编译方式")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("使用 "),t("code",[this._v("jest")]),this._v(" 的时候，可把用例放在 "),t("code",[this._v("test/unit/specs")]),this._v("， 并且文件格式应使用如 "),t("code",[this._v("[name].spec.js")]),this._v("。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("karma")]),this._v(" 能和 "),t("code",[this._v("jest")]),this._v(" 共用以上的测试用用例（已经配置好），测试时会自动运行Karma自有的webpack server并进行代码测试，测试结果会以mocha-reporter形式展现，代码覆盖率报告会在浏览器中自动打开。")])}],!1,null,null,null);_.options.__file="Starterkit-Standard.md";t.default=_.exports}}]);