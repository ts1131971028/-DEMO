//index.js
//获取应用实例
const app = getApp()

Page({
  onShareAppMessage() {
    return {
      title: 'tabs',
      path: 'page/weui/example/tabs/tabs'
    }
  },
  data: {
    tabs: [],
    activeTab: 0,
  },

  onLoad() {
    const tabs = [
      {
        title: '精选推荐'
      },
      {
        title: '热卖推荐'
      },
      {
        title: '美容护肤'
      },
      {
        title: '个人护理'
      },
      {
        title: '美食饮品'
      },
      {
        title: '牙齿美白'
      }
    ]
    this.setData({ tabs })
  },

  onTabClick(e) {
    const index = e.detail.index
    this.setData({ 
      activeTab: index 
    })
  },

  onChange(e) {
    const index = e.detail.index
    this.setData({ 
      activeTab: index 
    })
  },
  handleClick(e) {
    wx.navigateTo({
      url: './webview',
    })
  }
})