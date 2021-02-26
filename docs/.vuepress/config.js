// require.context('./components/', true, /\.js$/)
// let alljs = require("../js", true, /\.js$/)
console.log(__dirname);
module.exports = {
  title: '2U\'s blog',
  description: '2U blog ',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    nav: [
      { text: 'JavaScript', link: '/js/闭包' },
      { text: 'TypeScript', link: '/ts/数据类型' },
      { text: 'React', link: '/react/react' },
      { text: 'LeetCode', link: '/leetcode/one' },
      { text: 'Other', link: '/others/Nginx静态资源部署' },
      { text: 'About Me', link: '/' }
    ],
    sidebar: {
      '/js': ['/js/闭包', '/js/高阶函数', '/js/防抖和节流', '/js/Promise', '/js/EventLoop', "/js/AOP"],
      '/ts': ['/ts/数据类型', '/ts/接口', '/ts/类型type和interface'],
      '/react': ['/react/react', 'react/React组件实例三大核心', '/react/ReactContext', 'react/react1', 'react/React生命周期', 'react/React路由', 'react/ReactHooks'],
      '/LeetCode': [],
      '/others': ['/others/Nginx静态资源部署', '/others/javasciript迷惑行为', '/others/Git基本操作', '/others/NPM包（发布,更新,删除）']
    }
  },
};