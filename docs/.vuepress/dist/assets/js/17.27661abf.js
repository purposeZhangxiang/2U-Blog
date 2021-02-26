(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{374:function(n,t,s){"use strict";s.r(t);var a=s(42),e=Object(a.a)({},(function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h1",{attrs:{id:"nginx静态部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx静态部署"}},[n._v("#")]),n._v(" Nginx静态部署")]),n._v(" "),s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[n._v("#")]),n._v(" 前言")]),n._v(" "),s("p",[n._v("作为一名前端开发者,自己想搭建一个属于自己的博客。还是得需要了解一下nginx如何做静态部署和反向代理。")]),n._v(" "),s("h2",{attrs:{id:"centos安装nginx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#centos安装nginx"}},[n._v("#")]),n._v(" centos安装nginx")]),n._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[n._v("cd")]),n._v(" /usr/local "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# cd到local目录下")]),n._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("wget")]),n._v(" https://jaist.dl.sourceforge.net/project/pcre/pcre/8.42/pcre-8.42.tar.gz "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 安装pcre库")]),n._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("tar")]),n._v(" -xvf pcre-8.42.tar.gz "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 解压prce 压缩包")]),n._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[n._v("cd")]),n._v(" pcre-8.42 \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 安装编译")]),n._v("\n./configure\n"),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("make")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("&&")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("make")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("install")]),n._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 查看安装pcre版本")]),n._v("\npcre-config --version\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# https://nginx.org/download/ 可在该网址下查看（以1.15.9版本举例）")]),n._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("wget")]),n._v(" https://nginx.org/download/nginx-1.15.9.tar.gz  "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 下载nginx tar压缩包")]),n._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("tar")]),n._v(" -zxvf  nginx-1.15.9.tar.gz  "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 解压下载的nginx压缩包")]),n._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[n._v("cd")]),n._v(" nginx-1.15.9\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 安装编译")]),n._v("\n./configure\n"),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("make")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("&&")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("make")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("install")]),n._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#查看版本")]),n._v("\n/usr/local/nginx/sbin/nginx -v\n")])])]),s("h2",{attrs:{id:"修改配置文件ngix-conf"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改配置文件ngix-conf"}},[n._v("#")]),n._v(" 修改配置文件ngix.conf")]),n._v(" "),s("div",{staticClass:"language-conf extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("\n")])])]),s("h2",{attrs:{id:"nginx服务命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx服务命令"}},[n._v("#")]),n._v(" nginx服务命令")]),n._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# nginx命令 需要在安装目录的sbin下执行")]),n._v("\n/usr/local/nginx/sbin/nginx -s reload "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 重新加载nginx.conf配置文件 再重启nginx服务")]),n._v("\n\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);