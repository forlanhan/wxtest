// pages/api/api.js
var that
Page({
  /**
   * 页面的初始数据
   */
  data: {

     selectname:'',
     arrname:[
       {name:"张一山"},
       {name:"吴亦凡"},
       {name:"张艺兴"},
       {name:"胡瀚"},
       {name:"蔡徐坤"},
       {name:"陆一鸣"},
       {name:"聂小倩"},
       {name:"关一刀"},
       {name:"诸葛亮"},
     ]
  },
  //随机获取arrname人名
  getname:function(){
    //定时器：每过？毫秒之后自动执行一次
     setInterval(function(){
         //通过下标获得名字  
    //如何获取特定区间数字
    //例如：[0-8]-[66-77] - random
    //取特定区间的数字Math.random()*(max - min) +min
    var num = parseInt(Math.random(num) * (9-0))+0
    //console.log(num)
    console.log(that.data.arrname[num].name)
    //data数据一改变，页面会更新渲染
    //修改数据，用this.setdata({})
    that.setData({
      selectname:that.data.arrname[num].name
    })
    },500)
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
    //让that指向this
    that =  this
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