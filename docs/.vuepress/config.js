module.exports = {
  title: 'UI组件库',
  base: '/webpj-ui/',
  description: '模拟element-ui的组件库',//默认在.vuepress目录下
  themeConfig: {
      nav:require('./nav.js'),
      sidebar:require('./sidebar.js'),
      sidebarDepth: 2,
      lastUpdated: 'Last Updated',
      searchMaxSuggestoins: 10,
      serviceWorker: {
          updatePopup: {
              message: "有新的内容.",
              buttonText: '更新'
          }
      },
  }
}
