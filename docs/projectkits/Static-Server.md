# 静态资源服务器

## 服务器配置

开发使用的服务器，主要是基于 `express` ，加上 webpack-dev-middleware` 和 `webpack-hot-middleware`。同时请关注 `config/steamer.config.js` 和 `tools/server.js` 两个配置。

`steamer.config.js` 主要用于服务器端口、资源域名等配置，如果你想本地使用 `localhost`，生产环境使用正式域名，你可以将配置改造成如下：

```javascript

if (process.env.NODE_ENV === 'production') {
    module.exports = {
        "webserver": "//steamer.github.io/",
		"cdn": "//steamer.github.io/",
		"port": "9001",
		"route": ["/"]
    }
}
else {
    module.exports = {
		"webserver": "//localhost:9001/",
		"cdn": "//localhost:9001/",
		"port": "9001",
		"route": ["/"]
    }
}
```
至于 `server.js` 主要是用于具体 `express` 启动、路由配置、中间件调用、代理等等。