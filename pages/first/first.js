// pages/first/first.js
Page({

  /**
   * 页面的初始数据
   */
  /* 本页面数据是以键值对（key,value）的形式存在（对象） */
  //可以通过键取到对应的数值
  data: {
      //语言类型类型是共通的，c,c++,java是强语言类型，而javascrip（js）是弱语言类型，更加简单
      //前端的数据类型：字符串、数字、布尔、null、对象类型等
      str:'字符串',
      num:11,
      bool:true,
      obj:{
        name:'胡瀚',
        age:36,
        sex:"男"
      }
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

  }
})