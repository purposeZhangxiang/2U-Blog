# NPM包（发布,更新,删除）

## 发布

1. 首先你得有一个npm账号。

2. 切换npm源地址。

   ```
   npm config get registry // 先康康你的是否是npm官方的源，不是请切回
   npm config set registry https://registry.npmjs.org
   ```

3. 第一发布用npm adduser (填写你注册的npm账号的username,password,email) 。否则用npm login即可。

   ``` 
   npm whoami // 可以查看当前登录的npm用户
   ```

4. npm publish(一定要把邮箱给认证了,否则publish会报错的) 稍等片刻就可在 package里面看到自己的的npm包了。

## 更新

代码如果有更新,publish的时候需要更改版本号的，否则也提交不到。方式两种如下

1. 直接改package.json

2. npm指令操作package.json

   ```
   npm version patch  //补丁版本,最后一位数加1 
   npm version minor  //增加了新功能 中间的数字加1
   npm version major //大改动,不向下兼容 第一位数字加1
   ```

## 删除

1. 操作命令

   ```
   npm unpublish [packagename]--force
   ```

   