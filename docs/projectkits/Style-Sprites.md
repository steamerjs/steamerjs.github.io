# 样式与合图

## 样式
### 样式支持
* css
* less
* stylus
* sass
* scss

默认支持 `css` 和 `less`。如果想支持其它，可以在构建启动前，在 `config/project.js` 里进行配置，在跑 `npm start` 命令后，脚手架会帮你自动安装依赖。

### 样式引用
在样式 loader 处 添加了以下配置，因此可以更方便地引入样式文件。
```javascript
options: {
    paths: [
       config.webpack.path.src,
       "node_modules"
    ]
}
```

例如，若想引入在组件中引用src/css/中的样式文件，可以使用:
```css
@import "/css/common/common.less";
```

## 合图
### 合图放置
目前构建已经支持多个合图。只需要在 `src/img/sprites/` 下面新建文件夹，然后放在需要合的图，就会自动在 `src/css/` 文件夹下生成 `src/css/sprites/`文件夹，里面包含了对应的合图和样式文件。

### 相关配置
在 `project.js` 中，有两个合图相关配置:

* `spriteMode` 表示使用哪种模式，`normal` 表示只生成1倍图，`retinaonly` 表示只生成2倍图，`retina` 表示同时生成1倍和2倍图。在`retina` 模式下，放的图片必须包括1倍图和2倍图，而2倍图需要以 `@2x` 结尾，如 `gmail@2x.png`。`none` 表示不使用合图。

* `spriteStyle` 表示使用哪种样式，可选 `less` 或才 `stylus`

### 使用
#### 全量引入
如果你想将成生的合图内容和样式全部引入，可以将 `src/img/sprites/` 目录下带有 `.full` 后缀的 `.css` 文件直接引入即可。然后你可以用 `icon-xxx` 引入合图图片。

#### 单独引入 
使用的时候，在组件对应的less样式文件中引入便可，这是因为使用了 `postcss-import`插件，能避免最终生成的代码重复引用相同的样式。可参考`src/page/index`里面的做法。如下：
```css
@import "css/sprites/btn.less"; 
```

具体语法如下,更详情可以参考生成到 `css/sprites` 里的合图样式：
`less`: 
```css
// 1倍图
.icon1 {
   .sprite(@gmail);
}
// 2倍图
.icon2 {
    .retina-sprite(@gmail-group);
}
```

`stylus`:
```css
// 1倍图
.icon1 {
    sprite($apple)
}
// 2倍图
.icon2 {
    retinaSprite($apple_group)
}
```

`scss or sass`:
```css
// 1倍图
.icon1 {
    @include sprite($apple)
}
// 2倍图
.icon2 {
    @include retina-sprite($apple_group)
}
```
有的时候，你的项目中同时存在PC端和移动端的页面，而你又懒得使用两种分辨率的图片，那你可以将 `spriteMode` 设置为 `normal`，然后将需要使用2倍图的移动端合图文件夹，带上 `_retina`，如 `btn_retina`，这样脚手架会帮你自动将这个图片生成2倍图对应的样式。
