---
title: 系统命令配置 - Config
---

# steamer-plugin-config

管理 steamerjs 配置

```javascript
// 初始化本地文件夹配置
steamer config --init

或

steamer config -i

// 设置配置的键值
steamer config --set http-proxy=http://proxy.steamer.com

或

steamer config -s http-proxy=http://proxy.steamer.com

// 如果想设置全局配置，请加上 -g 或 --global 参数。


// 删除键值
steamer config --del http-proxy

或

steamer config -d http-proxy

// 如果想删除全局配置，请加上  -g 或 --global 参数。


// 罗列所有配置值
steamer config --list

或

steamer config -l

// 如果想罗列所有全局配置值，请加上  -g 或 --global 参数。

```