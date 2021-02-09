// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
//跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
//在小程序插件中使用时，只能在当前插件的页面中调用
  switchTab(){
    wx.switchTab({
      url: '/pages/logs/logs',
      success: (res) => {
        console.log(res)
      },
      fail: (res) => {
        console.log(res)
      },
      complete: (res) => {},
    })
  },
  //关闭所有页面，打开到应用内的某个页面
  reLaunch(){
    wx.reLaunch({
      //如何接收参数，在哪里接收。为什么需要参数
      url: '/pages/detail/detail?msg=666',
      success: (res) => {
        console.log(res)
      },
      fail: (res) => {
        console.log(res)
      },
      complete: (res) => {
        console.log(res)
      },
    })
  },
  navigatorTO(){
    wx.navigateTo({
      url: '/pages/detail/detail?name=hh&age=23',
      events: 555,
      success: (result) => {
      setTimeout(() => {
        wx.navigateBack({
          delta: 1,
          success: (res) => {},
          fail: (res) => {},
          complete: (res) => {
            console.log(res)
          },
        })
      }, 2000)
      },
      fail: (res) => {
        console.log(res)
      },
      complete: (res) => {
        console.log(res)
      },
    })
  },
  //本地缓存-存数据
  setStorage:function(){
    wx.setStorageSync('list', [1,2,3,4,5,6])
  },
  //本地缓存-取数据
  getStroage(){
    wx.getStorage({
      key: 'list',
      success: (res) => {
        console.log(res)
      },
      fail: (res) => {},
      complete: (res) => {},
    })
  },
  //移除数据-单个
  reMove(){
    wx.removeStorage({
      key: 'list',
      success: (res) => {
        console.log(res)
      },
      fail: (res) => {},
      complete: (res) => {},
    })
  },
  //删除数据-全部
  del(){
    wx.clearStorage({
      success: (res) => {
      console.log(res)
      },
      fail: (res) => {},
      complete: (res) => {},
    })
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
