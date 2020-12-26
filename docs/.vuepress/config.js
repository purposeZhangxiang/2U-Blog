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
  // themeConfig: {
  //   nav: [ // 导航栏配置
  //     { text: 'javascript', link: '/js/one' },
  //     { text: 'typescript', link: '/ts/' },
  //     { text: 'leetcode', link: '/leetcode/one.md' },
  //     { text: 'workbugs', link: '/workbugs' },
  //   ],
  //   sidebar:'auto',
  //   // sidebar: [
  //   //   {
  //   //     title: 'js开发指南',
  //   //     collapsable: false, //是否展开
  //   //     children: ['/js/one', '/js/two']
  //   //   },
  //   //   {
  //   //     title: '组件',
  //   //     collapsable: false
  //   //   },
  //   // ]
  //   // 侧边栏配置
  //   sidebarDepth: 2, // 侧边栏显示2级
  // },
  themeConfig: {
    nav: [
      { text: 'JavaScript', link: '/js/闭包' },
      { text: 'TypeScript', link: '/ts/数据类型' },
      { text: 'React', link: '/react/react' },
      { text: 'Other', link: '/others/Nginx静态资源部署' },
      { text: 'About Me', link: '/' }
    ],
    sidebar: {
      '/js': ['/js/闭包', '/js/高阶函数','/js/EventLoop'],
      '/ts': ['/ts/数据类型', '/ts/接口', '/ts/类型type和interface'],
      '/react': ['/react/react','react/react1'],
      '/others': ['/others/Nginx静态资源部署','/others/javasciript迷惑行为']
    }
  },
};