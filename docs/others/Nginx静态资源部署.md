# Nginx静态部署

## 前言

作为一名前端开发者,自己想搭建一个属于自己的博客。还是得需要了解一下nginx如何做静态部署和反向代理。


## centos安装nginx

```bash
cd /usr/local # cd到local目录下

wget https://jaist.dl.sourceforge.net/project/pcre/pcre/8.42/pcre-8.42.tar.gz # 安装pcre库
tar -xvf pcre-8.42.tar.gz # 解压prce 压缩包
cd pcre-8.42 
# 安装编译
./configure
make && make install
# 查看安装pcre版本
pcre-config --version

# https://nginx.org/download/ 可在该网址下查看（以1.15.9版本举例）
wget https://nginx.org/download/nginx-1.15.9.tar.gz  # 下载nginx tar压缩包
tar -zxvf  nginx-1.15.9.tar.gz  # 解压下载的nginx压缩包
cd nginx-1.15.9
# 安装编译
./configure
make && make install
#查看版本
/usr/local/nginx/sbin/nginx -v
```

## 修改配置文件ngix.conf

```conf

```

## nginx服务命令

```bash
# nginx命令 需要在安装目录的sbin下执行
/usr/local/nginx/sbin/nginx -s reload # 重新加载nginx.conf配置文件 再重启nginx服务

```
