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
      bool:false,
      arr:[1,2,3,'wx'],
      obj:{
        name:'胡瀚',
        age:36,
        sex:"男"
      },
     //在wx：for中遍历
       objarr:[
      { a:1, b:5,c:9 },
      { a:2, b:6,c:10 },
      { a:3, b:7,c:11 },
      { a:4, b:8,c:12 },
          ],

     /*   video:
      {
        "code":200,
        "message":"成功!",
        "result":[
            {
                "sid":"31577089",
                "text":"孩子厉害👍",
                "type":"video",
                "thumbnail":"http://wimg.spriteapp.cn/picture/2020/1026/5f967bc4e7de2_wpd.jpg",
                "video":"http://uvideo.spriteapp.cn/video/2020/1026/5f967bc4e7de2_wpd.mp4",
                "images":null,
                "up":"114",
                "down":"3",
                "forward":"0",
                "comment":"6",
                "uid":"23005857",
                "name":"无情无义",
                "header":"http://wimg.spriteapp.cn/profile/large/2020/02/09/5e3fc8f551f9a_mini.jpg",
                "top_comments_content":"厉害不厉害不知道。反正比我强",
                "top_comments_voiceuri":"",
                "top_comments_uid":"11981984",
                "top_comments_name":"不得姐用户",
                "top_comments_header":"http://qzapp.qlogo.cn/qzapp/100336987/D2C67A061C37841FD39E2D6232DE9833/100",
                "passtime":"2020-12-24 18:30:05"
            },
            {
                "sid":"31551566",
                "text":"给我一个你不想买的理由",
                "type":"video",
                "thumbnail":"http://wimg.spriteapp.cn/picture/2020/0730/5f22acff7206e_wpd.jpg",
                "video":"http://uvideo.spriteapp.cn/video/2020/0730/5f22acff7206e_wpd.mp4",
                "images":null,
                "up":"68",
                "down":"0",
                "forward":"0",
                "comment":"13",
                "uid":"23131725",
                "name":"天才少女爱我",
                "header":"http://wimg.spriteapp.cn/profile/large/2019/07/04/5d1d909ccbf44_mini.jpg",
                "top_comments_content":null,
                "top_comments_voiceuri":null,
                "top_comments_uid":null,
                "top_comments_name":null,
                "top_comments_header":null,
                "passtime":"2020-11-26 10:53:03"
            },
            {
                "sid":"31575044",
                "text":"以为是青铜…………",
                "type":"video",
                "thumbnail":"http://wimg.spriteapp.cn/picture/2020/1015/388a5358-0eaf-11eb-a0f2-1866daeb0df0_wpd.jpg",
                "video":"http://uvideo.spriteapp.cn/video/2020/1015/388a5358-0eaf-11eb-a0f2-1866daeb0df0_wpd.mp4",
                "images":null,
                "up":"282",
                "down":"4",
                "forward":"2",
                "comment":"38",
                "uid":"23188275",
                "name":"布丁",
                "header":"http://wimg.spriteapp.cn/profile/large/2019/12/24/5e01929eac7e9_mini.jpg",
                "top_comments_content":"叫什么名字？哪里买的？我要买给我闺女",
                "top_comments_voiceuri":"",
                "top_comments_uid":"23220040",
                "top_comments_name":"用户nNGrdj",
                "top_comments_header":"http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKuyMqNHMy5Aqws2wHFsxzqUnz5SzBWxqz6K4ntvXYfXdkZtbcUlA6ico8bqgdbicGhbwjt5JpgfVsA/132",
                "passtime":"2020-11-12 18:51:33"
            },
            {
                "sid":"31574857",
                "text":"我想碰个瓷需要注意什么",
                "type":"video",
                "thumbnail":"http://wimg.spriteapp.cn/picture/2020/1014/1afc61f6-0df0-11eb-85bd-1866daeb0df0_wpd.jpg",
                "video":"http://uvideo.spriteapp.cn/video/2020/1014/1afc61f6-0df0-11eb-85bd-1866daeb0df0_wpd.mp4",
                "images":null,
                "up":"99",
                "down":"6",
                "forward":"0",
                "comment":"34",
                "uid":"23188364",
                "name":"林深时见鹿",
                "header":"http://wimg.spriteapp.cn/profile/large/2019/12/24/5e0192b3188d9_mini.jpg",
                "top_comments_content":null,
                "top_comments_voiceuri":null,
                "top_comments_uid":null,
                "top_comments_name":null,
                "top_comments_header":null,
                "passtime":"2020-11-12 18:51:31"
            },
            {
                "sid":"31577698",
                "text":"回顾下过往老婆骑小电驴接我的瞬间，哈哈。",
                "type":"video",
                "thumbnail":"http://wimg.spriteapp.cn/picture/2020/1029/5f9a7fea2f8f5_wpd.jpg",
                "video":"http://uvideo.spriteapp.cn/video/2020/1029/5f9a7fea2f8f5_wpd.mp4",
                "images":null,
                "up":"140",
                "down":"5",
                "forward":"0",
                "comment":"29",
                "uid":"23188364",
                "name":"林深时见鹿",
                "header":"http://wimg.spriteapp.cn/profile/large/2019/12/24/5e0192b3188d9_mini.jpg",
                "top_comments_content":"吾与曹贼何异？",
                "top_comments_voiceuri":"",
                "top_comments_uid":"23084046",
                "top_comments_name":"南有乔木0017",
                "top_comments_header":"http://wimg.spriteapp.cn/profile",
                "passtime":"2020-11-12 18:51:27"
            }
        ]
    }*/
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