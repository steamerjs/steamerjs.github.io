# 常见问题

## NODE_PATH的全局变量
`steamerjs` 体系内，有不少需要调用 `NODE_PATH` 位置的，因此需要设置好此变量。如果发现插件或者脚手架找不到，那往往是由于没有设置 `NODE_PATH`。如果使用时候并无报错，也建议进行设置，那样会提高核心库引用插件的运行速度。

### 获取 `NODE_PATH` 值

```javascript
npm root -g
```

### `MacOS`

* `MacOS` 默认值通常为：`/usr/local/lib/node_modules`

OS X 系统的环境变量，加载顺序为：

```javascript
/etc/profile
/etc/paths 
~/.bash_profile 
~/.bash_login 
~/.profile 
~/.bashrc
```

`/etc/profile` 和 `/etc/paths` 是系统级别的，系统启动就会加载，后面几个是当前用户级的环境变量。 `~/.bash_profile`，`~/.bash_login`，`~/.profile`按照从前往后的顺序读取，如果 `~/.bash_profile` 文件存在，则后面的几个文件就会被忽略不读了，

如果 `~/.bash_profile` 文件不存在，才会以此类推读取后面的文件。`~/.bashrc` 没有上述规则，它是 `bash shell` 打开的时候载入的。

```javascript
// 在环境变量文件中设置 `NODE_PATH`
export NODE_PATH="/usr/lib/node_modules;/usr/local/lib/node_modules" # 指定 NODE_PATH 变量

```

### `Windows`

* 32位默认值通常为：`C:\Program Files (x86)\nodejs\node_modules`
* 64位默认值通常为：`C:\Program Files\nodejs\node_modules`

```javascript
1. 鼠标右击计算机
2. 属性
3. 高级系统设置
4. 环境变量
5. 系统变量，添加 `NODE_PATH`
```

注意，如果你的系统需要多个 `Node` 版本，共存，建议 `MacOS` 使用 [nvm](https://github.com/creationix/nvm)，`Windows` 使用 [nvm-windows](https://github.com/coreybutler/nvm-windows)。

选定主要版本后，再安装 `steamerjs` 及其它生态的相关插件或者脚手架。