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
        title: '技术开发'
      },
      {
        title: '产品解析'
      },
      {
        title: '运营规范'
      },
      {
        title: '营销经验'
      },
      {
        title: '高校大赛'
      },
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