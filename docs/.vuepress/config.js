module.exports = {
  title: "桃花源记",
  description: '少一些功利主义的追求，多一些不为什么的坚持',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/head.png' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig: {
    type:'blog',
    huawei: false,
    nav: [
      { text: 'Home', link: '/', icon: 'reco-home' },
      { text: 'TimeLine', link: '/timeLine/', icon: 'reco-date' },
      { text: 'Contact', 
        icon: 'reco-message',
        items: [
          { text: 'GitHub', link: 'https://github.com/wangjie0216', icon: 'reco-github' },
          { text: '简书', link: 'https://www.jianshu.com/u/78d745feebc2', icon: 'reco-jianshu' },
          { text: 'WeChat', link: 'https://mp.weixin.qq.com/s/bvtwABoGzU9GBGaqc6i7nA', icon: 'reco-wechat' },
        ]
      }
    ],
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: 'Category' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: 'Tag' // 默认 “标签”
      }
    },
    logo: '/head.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    sidebar: 'auto',
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: '临渊',
    // 备案号
    // record: 'xxxx',
    // 项目开始时间
    startYear: '2017'
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */

    // valineConfig: {
    //   appId: '...',// your appId
    //   appKey: '...', // your appKey
    // }
  },
  markdown: {
    lineNumbers: true,
    toc: { includeLevel: [2, 3], }
  },
  plugins: ['@vuepress/medium-zoom', 'flowchart']
}  