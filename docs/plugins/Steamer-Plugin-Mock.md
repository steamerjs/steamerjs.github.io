---
title: 假数据模拟 - Mock
---
# steamer-plugin-mock

快速添加本地 mock 假数据命令。可以用于模拟后台接口进行测试。本项目的服务器是基于 [JSON-Server](https://github.com/typicode/json-server) 进行搭建。与服务器相关的路由、转发相关，可参考 [JSON-Server](https://github.com/typicode/json-server) 的文档。

[![NPM Version](https://img.shields.io/npm/v/steamer-plugin-mock.svg?style=flat)](https://www.npmjs.com/package/steamer-plugin-mock)
[![Travis](https://img.shields.io/travis/steamerjs/steamer-plugin-mock.svg)](https://travis-ci.org/steamerjs/steamer-plugin-mock)
[![Deps](https://img.shields.io/david/steamerjs/steamer-plugin-mock.svg)](https://david-dm.org/steamerjs/steamer-plugin-mock)
[![Coverage](https://img.shields.io/coveralls/steamerjs/steamer-plugin-mock.svg)](https://coveralls.io/github/steamerjs/steamer-plugin-mock)

## 安装
```javascript
npm i -g steamerjs

npm i -g steamer-plugin-mock
```

## 使用

```javascript
steamer mock
```

此插件会为您在项目中自动生成 `mock` 目录并在此目录生成一个默认的 `db.js` 文件。然后运行 [JSON-Server](https://github.com/typicode/json-server) 在 `7000` 端口上。
您之后可以修改`db.js`来完成您自己的mock需求。

效果如图：
![](http://pub.idqqimg.com/pc/misc/files/20170802/5c15a3282b594217b046a6d1b6966bd8.jpg)


## 在 steamer 脚手架中使用
如果你想在 [steamer 系列脚手架](https://steamerjs.github.io/docs/Starterkit.html)中使用，`steamer-plugin-mock` 的功能，可以设置 `config/steamer.config.js` 中 `"api-port": 7000` 的端口。此外，脚手架默认转发至 `/api/` 路径，因此 `steamer-plugin-mock` 需要配置 `--route` 参数，详细可参考后面相关的文档。



## 路由说明
[JSON-Server](https://github.com/typicode/json-server) 服务器根据传入的`Object`或者`JSON`文件的key作为API资源路径，值则作为返回的结果。
[JSON-Server](https://github.com/typicode/json-server) 服务器完全支持`RESTful`的路由，如

* 获取第一个用户
```
GET /users/1
```

* 分页
```
GET /users?_pages=7
```

* 筛选
```
GET /users?id=2
```

* 排序
```
GET /users?_sort=id&_order=asc
```

## 参数说明
### `--config`
```javascript
steamer mock --config xxx.js/xxx.json
```
此插件会使用`--config`参数所指定的文件运行json-server。
* 注意：如果使用js文件，您必须`export`一个Object对象。

### `--port`
```
steamer mock --port 8888
```
使用指定端口运行json-server

### `--route`
```
steamer mock --route route.json
```
使用指定自定义配置来自定URL，比如当您遇到一下场景

1. 真正想访问的接口资源url是`api/xxx`，需要转发到[JSON-Server](https://github.com/typicode/json-server)
2. 想通过`/posts/:category`的方式访问博客文章的不同类别

您可以如下配置：
* 示例文件
```json
{
  "/api/*": "/$1",
  "/posts/:category": "/posts?category=:category"
}
```
效果如下
```
/api/posts # → /posts
/api/posts/1  # → /posts/1
/posts/javascript # → /posts?category=javascript
```


## 使用js生成假数据
如果你想用强大的js快速生成一些假数据，可以借助下面两个推荐库的能力。

* [Faker](https://github.com/marak/Faker.js/) 是用于快速生成假数据的库，包括常用的头像、邮箱、电话号码等信息，推荐使用。
* [Mock](http://mockjs.com/) 同样是生成随机数据的库，并且能生成常用的随机汉字。

下面以 `Faker` 作为例子，介绍如何生成用户列表数据：

```javascript
const faker = require('faker');
module.exports = () => {
    let data = {
        users: [],
        foo: [],
        bar: [],
    };
    // For more usage of faker.js, please visit http://marak.github.io/faker.js/
    for(let id = 0; id < 50; id++) {
        data.users.push({
            id: id,
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            phoneNumber: faker.phone.phoneNumber(),
            avatar: faker.internet.avatar()
        })
    }
    return data;
}
```

以上js文件通过`steamer mock --config example.js`运行后，使用HTTP协议`GET localhost:6800/users`，即可获得50个随机生成的用户信息组成的数组：
```javascript
[
  {
    "id": 0,
    "firstName": "Micheal",
    "lastName": "McKenzie",
    "email": "Taya29@hotmail.com",
    "phoneNumber": "837-316-7833",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/poormini/128.jpg"
  },
  ...
]
```
可以使用RESTful的语法操作数据：

`GET localhost:6800/users/2` 获取第二个用户
```javascript
{
  "id": 2,
  "firstName": "Devante",
  "lastName": "Crooks",
  "email": "Bonnie.Pouros82@gmail.com",
  "phoneNumber": "(108) 724-7222 x5486",
  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/silv3rgvn/128.jpg"
}
```
`DELETE localhost:6800/users/3` 删除第三个用户
