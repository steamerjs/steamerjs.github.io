(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{179:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("捷豹系统快速配置")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.npmjs.com/package/steamer-plugin-jb",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/npm/v/steamer-plugin-jb.svg?style=flat",alt:"NPM Version"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://travis-ci.org/steamerjs/steamer-plugin-jb",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/travis/steamerjs/steamer-plugin-jb.svg",alt:"Travis"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://david-dm.org/steamerjs/steamer-plugin-jb",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/david/steamerjs/steamer-plugin-jb.svg",alt:"Deps"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://coveralls.io/github/steamerjs/steamer-plugin-jb",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/coveralls/steamerjs/steamer-plugin-jb.svg",alt:"Coverage"}}),a("OutboundLink")],1)]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("以下命令全局安装 "),a("code",[t._v("steamerjs")]),t._v(" 或 "),a("code",[t._v("steamer-plugin-jb")]),t._v("，使用时如遇到问题，可先参见文档"),a("a",{attrs:{href:"https://steamerjs.github.io/docs/introduction/Steamer-QA.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("[常见问题]"),a("OutboundLink")],1),t._v("，可能是没设置好 "),a("code",[t._v("NODE_PATH")])]),t._v(" "),t._m(2),a("ul",[a("li",[t._v("注意：本插件依赖于 "),a("code",[t._v("git")]),t._v("，因此请在全局安装 "),a("a",{attrs:{href:"https://git-scm.com/downloads",target:"_blank",rel:"noopener noreferrer"}},[t._v("git"),a("OutboundLink")],1)])]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"steamer-plugin-jb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#steamer-plugin-jb","aria-hidden":"true"}},[this._v("#")]),this._v(" steamer-plugin-jb")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 必须")]),t._v("\nnpm i "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("g steamerjs\n\nnpm i "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("g steamer"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("plugin"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("jb\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"初始化配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初始化配置","aria-hidden":"true"}},[this._v("#")]),this._v(" 初始化配置")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[this._v("steamer jb\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("type\n"),s("ul",[s("li",[this._v("online, jb 服务器构建")]),this._v(" "),s("li",[this._v("offline, jb 本地构建")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"添加-jb-部署单-id-仅支持git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加-jb-部署单-id-仅支持git","aria-hidden":"true"}},[this._v("#")]),this._v(" 添加 JB 部署单 ID(仅支持GIT)")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 给当前分支添加部署id")]),t._v("\nsteamer jb "),a("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v("add "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("id"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 给特定分支添加部署id")]),t._v("\nsteamer jb "),a("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v("add "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("id"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 可用 -a 简写 ")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("示例配置，位置在项目的 "),s("code",[this._v(".steamer/steamer-plugin-jb.js")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("module"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v('"plugin"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"steamer-plugin-jb"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v('"config"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token string"}},[t._v('"git"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token string"}},[t._v('"master"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"R009082"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token string"}},[t._v('"develop"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"R008348"')]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"根据-jb-分支和部署单-id-进行捷豹部署-仅支持git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#根据-jb-分支和部署单-id-进行捷豹部署-仅支持git","aria-hidden":"true"}},[this._v("#")]),this._v(" 根据 JB 分支和部署单 ID 进行捷豹部署(仅支持GIT)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("注意，请务必在配置中存有该分支的部署单ID，部署单一般都以 "),s("code",[this._v("R")]),this._v(" 开头，如 "),s("code",[this._v("R009082")]),this._v("，否则会报错")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 给当前分支部署")]),t._v("\nsteamer jb "),a("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v("run\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 给特定分支部署")]),t._v("\nsteamer jb "),a("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v("run "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 可用 -r 简写")]),t._v("\n")])])])}],!1,null,null,null);n.options.__file="Steamer-Plugin-JB.md";s.default=n.exports}}]);