// require.context('./components/', true, /\.js$/)
// let alljs = require("../js", true, /\.js$/)

const a = [
  { text: '浏览器', link: '/browser/0浏览器渲染过程' },
  { text: 'JavaScript', link: '/js/0数据类型' },
  // { text: 'TypeScript', link: '/ts/数据类型' },
  { text: 'React', link: '/react/react' },
  { text: 'LeetCode', link: '/leetcode/one' },
  { text: 'Other', link: '/others/Nginx静态资源部署' },
  { text: 'About Me', link: '/' }
]
module.exports = {
  title: '2U\'s blog',
  description: '2U blog 前端开发者的成长日记',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    nav: a,
    sidebar: require("./sidebar")
  },
};