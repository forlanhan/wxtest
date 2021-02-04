// pages/api/api.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
   //获取系统信息
  getinfo:function(){
   wx.getSystemInfo({
    success: (res) => {
      console.log(res)
    },
    fail: (res) => {},
    complete: (res) => {},
  })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //调用函数
    //知识补充：this - 这里的this是指向js的page函数（当前页面函数）
   // console.log(this.getinfo)
    //执行函数
    //this.getinfo()
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

  }
})