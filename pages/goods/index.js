// pages/goods/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isActiveGoods: "underline_color",
    isActiveComment: String,
    isActiveParticulars: String,
    isActiveRecommend: String,
    // 轮播图
    current: 0,  //当前所在页面的 index
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔
    duration: 800, //滑动动画时长
    circular: true, //是否采用衔接滑动
    imgUrls: [
      '/static/goods/1.png',
      '/static/goods/2.png',
      '/static/goods/3.png',
      '/static/goods/4.png',
      '/static/goods/5.png'
    ],
    links: [
      '/pages/second/register',
      '/pages/second/register',
      '/pages/second/register'
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  clickNavGoods() {
    setTimeout(() => {
      this.setData({ isActiveGoods: "underline_color" })
      this.setData({ isActiveComment: "" })
      this.setData({ isActiveParticulars: "" })
      this.setData({ isActiveRecommend: "" })
    }, 300)
  },
  clickNavComment() {
    setTimeout(() => {
      this.setData({ isActiveGoods: "" })
      this.setData({ isActiveComment: "underline_color" })
      this.setData({ isActiveParticulars: "" })
      this.setData({ isActiveRecommend: "" })
    }, 300)
  },
  clickNavParticulars() {
    setTimeout(() => {
      this.setData({ isActiveGoods: "" })
      this.setData({ isActiveComment: "" })
      this.setData({ isActiveParticulars: "underline_color" })
      this.setData({ isActiveRecommend: "" })
    }, 300)
  },
  clickNavRecommend() {
    setTimeout(() => {
      this.setData({ isActiveGoods: "" })
      this.setData({ isActiveComment: "" })
      this.setData({ isActiveParticulars: "" })
      this.setData({ isActiveRecommend: "underline_color" })
    }, 300)
  }
})

