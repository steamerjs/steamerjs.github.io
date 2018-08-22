(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{182:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("AlloyKit平台生成离线包命令")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.npmjs.com/package/steamer-plugin-ak",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/npm/v/steamer-plugin-ak.svg?style=flat",alt:"NPM Version"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://travis-ci.org/steamerjs/steamer-plugin-ak",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/travis/steamerjs/steamer-plugin-ak.svg",alt:"Travis"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://david-dm.org/steamerjs/steamer-plugin-ak",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/david/steamerjs/steamer-plugin-ak.svg",alt:"Deps"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://coveralls.io/github/steamerjs/steamer-plugin-ak",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/coveralls/steamerjs/steamer-plugin-ak.svg",alt:"Coverage"}}),a("OutboundLink")],1)]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("如果是 "),a("code",[t._v("steamer")]),t._v(" 系列的 "),a("code",[t._v("webpack")]),t._v(" 脚手架，可使用 "),a("a",{attrs:{href:"https://github.com/steamerjs/ak-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("ak-webpack-plugin"),a("OutboundLink")],1),t._v(" 插件。")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),a("p",[t._v("如果项目的生成环境的代码结构如下：")]),t._v(" "),t._m(5),a("p",[t._v("初始化：")]),t._v(" "),t._m(6),a("p",[t._v("它会弹出下面的一些问题：")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),a("p",[t._v("这里是配置文件的范例 (.steamer/steamer-plugin-ak.js).")]),t._v(" "),t._m(11),t._m(12),t._v(" "),a("p",[t._v("Here is another example config.")]),t._v(" "),t._m(13),t._m(14),t._v(" "),a("p",[t._v("如果你想部份文件走离线包，部份走线上，你在生成离线包的时候，可以 "),a("code",[t._v("exclude")]),t._v(" 部份文件。 "),a("code",[t._v("exclude")]),t._v(" 参数，主要是 "),a("code",[t._v("Globs")]),t._v(" 的写法，可以参考 "),a("a",{attrs:{href:"https://github.com/isaacs/minimatch",target:"_blank",rel:"noopener noreferrer"}},[t._v("minimatch"),a("OutboundLink")],1),t._v(" 的配置。示例配置如下。对于一些比较长的路径，如 "),a("code",[t._v("/a/b/c/d/1.png")]),t._v("，可以尝试如 "),a("code",[t._v("**/c/d/*.png")]),t._v(" 类似的匹配。")]),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),t._m(18),t._v(" "),t._m(19)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"steamer-plugin-ak"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#steamer-plugin-ak","aria-hidden":"true"}},[this._v("#")]),this._v(" steamer-plugin-ak")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"webpack-插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack-插件","aria-hidden":"true"}},[this._v("#")]),this._v(" Webpack 插件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("npm i "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("g steamerjs\n\nnpm i "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("g steamer"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("plugin"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("ak\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v(" dist\n\t"),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("\n\t"),a("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v(" cdn\n\t"),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("\t"),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("\n\t"),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("\t"),a("span",{attrs:{class:"token operator"}},[t._v("|")]),a("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v(" css\n\t"),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("\t"),a("span",{attrs:{class:"token operator"}},[t._v("|")]),a("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v(" img\n\t"),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("\t"),a("span",{attrs:{class:"token operator"}},[t._v("|")]),a("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v(" js\n\t"),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("\n\t"),a("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v(" webserver\n\t\t"),a("span",{attrs:{class:"token operator"}},[t._v("|")]),a("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v(" index"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html\n\t\t"),a("span",{attrs:{class:"token operator"}},[t._v("|")]),a("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v(" detail"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html\n\t\t"),a("span",{attrs:{class:"token operator"}},[t._v("|")]),a("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v(" comment"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[this._v("steamer ak "),s("span",{attrs:{class:"token operator"}},[this._v("-")]),this._v("i\n\n或\n\nsteamer ak "),s("span",{attrs:{class:"token operator"}},[this._v("-")]),this._v("init\n\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("Your zip file name")]),this._v(", 意思是最终生成的离线包名称，默认值是 "),s("code",[this._v("offline")]),this._v("，"),s("strong",[this._v("当前文件夹位置以命令执行位置为基准")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("Your source folder")]),this._v(", 生成环境的代码源，上面的项目结构中是 "),s("code",[this._v("dist")]),this._v("，这也是默认值。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("后面三个选项会一直循环出现，除非你输入空值，因为项目中可能有多个 "),a("code",[t._v("cdn")]),t._v(" 对应多个静态资源。例如，你可能会用 "),a("code",[t._v("//huayang.qq.com/h5/")]),t._v(" 给你的 "),a("code",[t._v("html")]),t._v(" 文件，而用 "),a("code",[t._v("//s1.url.cn/h5/")]),t._v(" 给你的其它静态资源。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("Your zip file "),a("span",{attrs:{class:"token function"}},[t._v("name")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("g"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" offline"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("offline"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nYour source "),a("span",{attrs:{class:"token function"}},[t._v("folder")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("g"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" build"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pub"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dist"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dist"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nWhether to add webserver url "),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" all resources"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("No"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nYour resource "),a("span",{attrs:{class:"token function"}},[t._v("folder")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("g"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cdn"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cdn"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("js"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cdn"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("css"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" webserver"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\nYour destination "),a("span",{attrs:{class:"token function"}},[t._v("url")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("g"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token comment"}},[t._v("//huayang.qq.com/h5/):")]),t._v("\n\nYour destination "),a("span",{attrs:{class:"token function"}},[t._v("folder")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("g"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/, /")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" js"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" css"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("module"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v('"plugin"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"steamer-plugin-ak"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v('"config"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("// String, 最终生成的离线包名称，默认值是 `offline`，**当前文件夹位置以命令执行位置为基准**")]),t._v("\n        "),a("span",{attrs:{class:"token string"}},[t._v('"zipFileName"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"dist/offline"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n        "),a("span",{attrs:{class:"token comment"}},[t._v("// String, 生成环境的代码源，默认值 `dist`")]),t._v("\n        "),a("span",{attrs:{class:"token string"}},[t._v('"src"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"dist"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("// 压缩参数，详参 https://archiverjs.com")]),t._v("\n        "),a("span",{attrs:{class:"token string"}},[t._v('"zipConfig"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            zlib"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" level"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("9")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n        "),a("span",{attrs:{class:"token comment"}},[t._v("// 具体的文件目录及cdn映射,")]),t._v("\n        "),a("span",{attrs:{class:"token string"}},[t._v('"map"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{attrs:{class:"token string"}},[t._v('"src"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"webserver"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{attrs:{class:"token string"}},[t._v('"url"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"//localhost:9000/"')]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{attrs:{class:"token string"}},[t._v('"src"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"cdn"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{attrs:{class:"token string"}},[t._v('"url"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"//localhost:8000/"')]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("// minimatch 配置，以下是默认的配置")]),t._v("\n        "),a("span",{attrs:{class:"token string"}},[t._v('"minimatchOpt"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            matchBase"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t    dot"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("// 下列回调方法，可以直接使用this.fs (fs-extra), this.success, this.info, this.warn, this.alert")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("// 在 拷贝文件到 offline 离线文件夹之前")]),t._v("\n        beforeCopy"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            \n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("// 在 拷贝文件到 offline 离线文件夹之后")]),t._v("\n        afterCopy"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            \n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("// 在压缩 offline 离线文件夹之前")]),t._v("\n        beforeZip"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("offlineFiles"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token comment"}},[t._v("// offlineFiles 在离线包文件夹内的文件路径信息")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("// 在压缩 offline 离线文件夹之后")]),t._v("\n        afterZip"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("zipFilePath"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token comment"}},[t._v("// zipFilePath 最终生成的离线zip包路径")]),t._v("\n            \n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("然而，有时候你会对 "),a("code",[t._v("html")]),t._v(" 以外的静态资源再进行细分，使用不同的 "),a("code",[t._v("cdn")]),t._v(" 域名，例如 "),a("code",[t._v("//s1.url.cn/h5/")]),t._v(" 给你的 "),a("code",[t._v("js")]),t._v("文件，用 "),a("code",[t._v("//s2.url.cn/h5/")]),t._v(" 给 "),a("code",[t._v("css")]),t._v(" 文件， 然后用 "),a("code",[t._v("//s3.url.cn/h5/")]),t._v(" 给其它的文件。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("module"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v('"plugin"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"steamer-plugin-ak"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v('"config"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token string"}},[t._v('"zipFileName"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"offline"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token string"}},[t._v('"src"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"dist"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token string"}},[t._v('"map"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{attrs:{class:"token string"}},[t._v('"src"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"cdn/js"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{attrs:{class:"token comment"}},[t._v("// String, 目标文件路径子文件夹，默认为空字符串")]),t._v("\n                "),a("span",{attrs:{class:"token string"}},[t._v('"dest"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"js"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{attrs:{class:"token comment"}},[t._v("// Boolean， 默认 false，如果为 true， 则会将 cdn 的 url替换成与 isWebserver 为 true 的 cdn url")]),t._v("\n                "),a("span",{attrs:{class:"token string"}},[t._v('"isSameOrigin"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                "),a("span",{attrs:{class:"token string"}},[t._v('"url"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"s1.url.cn/huayang/"')]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{attrs:{class:"token string"}},[t._v('"src"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"cdn/css"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{attrs:{class:"token string"}},[t._v('"dest"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"css"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{attrs:{class:"token string"}},[t._v('"url"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"s2.url.cn/huayang/"')]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{attrs:{class:"token string"}},[t._v('"src"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"cdn/img"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{attrs:{class:"token string"}},[t._v('"dest"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"img"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{attrs:{class:"token string"}},[t._v('"url"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"s3.url.cn/huayang/"')]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{attrs:{class:"token string"}},[t._v('"src"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"cdn/lib"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{attrs:{class:"token string"}},[t._v('"dest"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"lib"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{attrs:{class:"token string"}},[t._v('"url"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"s1.url.cn/huayang/"')]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{attrs:{class:"token string"}},[t._v('"src"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"webserver"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{attrs:{class:"token comment"}},[t._v("// Boolean， 默认为 false，如果为 true，则这将告诉插件这是 html 的主要 cdn url ")]),t._v("\n                "),a("span",{attrs:{class:"token string"}},[t._v('"isWebserver"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{attrs:{class:"token string"}},[t._v('"url"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"huayang.qq.com/huayang/activity/"')]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("之所以要用 "),a("code",[t._v("isSameOrigin")]),t._v(" 与 "),a("code",[t._v("isWebserver")]),t._v("，是有时候需要 "),a("code",[t._v("html")]),t._v(" 文件和 "),a("code",[t._v("js")]),t._v(" 文件的域名一致，例如有时候需要收集js的报错，让两者的 "),a("code",[t._v("cdn")]),t._v(" 一致会更方便收集到具体的报错信息。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("module"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v('"plugin"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"steamer-plugin-ak"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v('"config"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token string"}},[t._v('"zipFileName"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"dist/offline"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token string"}},[t._v('"src"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"dist"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token string"}},[t._v('"map"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{attrs:{class:"token string"}},[t._v('"src"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"webserver"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{attrs:{class:"token string"}},[t._v('"dest"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('""')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{attrs:{class:"token string"}},[t._v('"url"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"//huayang.qq.com/h5/"')]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{attrs:{class:"token string"}},[t._v('"src"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"cdn"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{attrs:{class:"token string"}},[t._v('"dest"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('""')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{attrs:{class:"token string"}},[t._v('"url"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"//s1.url.cn/h5/"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{attrs:{class:"token string"}},[t._v('"exclude"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'*.png'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'*ell.jpg'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("下面的命令，会进行压缩，并生成 "),s("code",[this._v("offline")]),this._v(" 文件夹，还有 "),s("code",[this._v("offline.zip")]),this._v(" 文件。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[this._v("steamer ak "),s("span",{attrs:{class:"token operator"}},[this._v("-")]),this._v("c\n\nor\n\nsteamer ak "),s("span",{attrs:{class:"token operator"}},[this._v("-")]),this._v("compress\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#测试","aria-hidden":"true"}},[this._v("#")]),this._v(" 测试")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token comment"}},[this._v("// 安装eslint工具")]),this._v("\nnpm i "),s("span",{attrs:{class:"token operator"}},[this._v("-")]),this._v("g eslint\n\nnpm run test\n")])])])}],!1,null,null,null);e.options.__file="Steamer-Plugin-Ak.md";s.default=e.exports}}]);