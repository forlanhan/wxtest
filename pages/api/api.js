// pages/api/api.js
var that
Page({
  /**
   * 页面的初始数据
   */
  data: {
     selectName:'',
     timer:null,
     arrName:[
       {name:"张一山"},
       {name:"吴亦凡"},
       {name:"张艺兴"},
       {name:"胡瀚"},
       {name:"蔡徐坤"},
       {name:"陆一鸣"},
       {name:"聂小倩"},
       {name:"关一刀"},
       {name:"诸葛亮"},
     ],
    aaa:0
  },
  //随机获取arrname人名
  getname:function(){
    //定义记录执行定时器的变量
    var index = 0 
    //欲用定时器，先清除定时器
    clearInterval(that.data.timer)
    //定时器：每过？毫秒之后自动执行一次
    that.setData({
      timer:setInterval(function(){
        index++
        //通过下标获得名字  
        //如何获取特定区间数字
        //例如：[0-8]-[66-77] - random
        //取特定区间的数字Math.random()*(max - min) +min
        var num = parseInt(Math.random(num) * (9-0))+0
        //console.log(num)
        console.log(that.data.arrName[num].name)
        //data数据一改变，页面会更新渲染
        //下面的赋值方式不能引起页面的重新渲染
        //that.selectName = that.data.arrName[num].name
        //修改数据，用this.setdata({})
        that.setData({
          selectName:that.data.arrName[num].name,
          aaa:num
        })
        //如果定时器执行的次数大于10，就暂停
        if(index >= 10){
          clearInterval(that.data.timer)
        }
        },500)
    })
    },


    
   //获取系统信息
  getinfo:function(e){
    console.log(e)
    console.log(e.currentTarget.dataset.aaa)
    /*  wx.getSystemInfo({
      success: (res) => {
        console.log(res)
      },
      fail: (res) => {},
      complete: (res) => {},
    })
 */
  //页面交互的API
  //用在向后台请求数据，但是数据可能由于网络或者页面未渲染时显示
  /*   wx.showLoading({
      title: '加载中',
      mask: true,
      success: (res) => {},
      fail: (res) => {},
      complete: (res) => {},
    }) */
    //假如数据2s后请求到，让加载消失
  /*   setTimeout(function () {
     wx.hideLoading({
       success: (res) => {},
       fail: (res) => {},
       complete: (res) => {},
     })
    }, 2000) */
  //showModal
/*     wx.showModal({
      content: '是否放入购物车',
      showCancel: true,
      title: '购物车',
      success: (result) => {},
      fail: (res) => {},
      complete: (res) => {},
    }) */
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