Page({
  data: {
    tabs: [],
    activeTab: 0,
    seckill_hour: 1,
    seckill_minute: 59,
    seckill_second: 59
  },

  onLoad() {
    const titles = ['首页', '外卖', '商超生鲜', '购物', '美食饮品', '生活服务', '休闲娱乐', '出行']
    const tabs = titles.map(item => ({title: item}))
    this.setData({tabs})
  },

  onTabCLick(e) {
    const index = e.detail.index
    this.setData({activeTab: index})
  },

  onChange(e) {
    const index = e.detail.index
    this.setData({activeTab: index})
  }

})
