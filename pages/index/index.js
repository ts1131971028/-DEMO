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
    const tabs = titles.map(item => ({ title: item }))
    this.setData({ tabs })
    this.changeSecond()
  },

  onTabCLick(e) {
    const index = e.detail.index
    this.setData({ activeTab: index })
  },

  onChange(e) {
    const index = e.detail.index
    this.setData({ activeTab: index })
  },
  changeSecond() {
    setInterval(() => {
      let num = this.data.seckill_second - 1
      if (num >= 10) {
        this.setData({ seckill_second: num })
      } 
      if (num >= 0 && num < 10) {
        let str = `0${num}`
        this.setData({ seckill_second: str })
      }
      if (num < 0) {
        this.setData({ seckill_second: 59 })
        let num1 = this.data.seckill_minute - 1
        this.setData({ seckill_minute: num1 })
        let num2 = this.data.seckill_minute
        if (num2 < 10 & num2 >= 0) {
          let str2 = `0${num2}`
          this.setData({ seckill_minute: str2 })
        } else if (num2 < 0) {
          this.data.seckill_hour - 1
        }
      }
    }, 1000)
  },
  goToGoods(){
    wx.navigateTo({
      url: '../goods/index'
    })
  }
})
