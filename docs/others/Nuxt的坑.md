# Nuxt踩坑日记

## 插件

1. 插件使用了window对象

部署

1. nginx部署后容易挂？

``` bash
npm install -g pm2 # 全局在服务器安装pm2进程守护
pm2 start npm --[name] nuxt -- start # name =package.json中的name
```

