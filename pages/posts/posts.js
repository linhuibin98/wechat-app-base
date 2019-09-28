// pages/posts/posts.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let local_database = [{
        date: "Jan 06 2019",
        title: "正是虾肥蟹壮时",
        imgSrc: "/images/post/crab.png",
        avatar: "/images/avatar/1.png",
        content: "“山明水净夜来霜，数树深红出浅黄。试上高楼清入骨，岂如春色嗾人狂。”金秋时节，天高云淡，秋风送爽，气候宜人。秋风秋阳中，硕果坠挂枝头，玉米抚须含笑，高粱引颈高歌，豆荚饱满圆润。",
        reading: "112",
        collection: "96",
      },
      {
        date: "Jan 03 2018",
        title: "比利·林恩的中场战事",
        imgSrc: "/images/post/bl.png",
        avatar: "/images/avatar/2.png",
        content: "伊拉克战争时期，来自美国德州的19岁技术兵比利·林恩（乔·阿尔文 Joe Alwyn 饰）因为一段偶然拍摄的视频而家喻户晓。那是一次规模不大却激烈非常的遭遇战，战斗中林恩所在的B班班长（范·迪塞尔 Vin Diesel 饰）遭到当地武装分子的伏击和劫持，而林恩为了营救班长不惜铤而走险冲锋陷阵。",
        reading: "92",
        collection: "65",
      },
      {
        date: "Jan 05 2018",
        title: "肖申克的救赎",
        imgSrc: "/images/post/sls.jpg",
        avatar: "/images/avatar/3.png",
        content: "20世纪40年代末，小有成就的青年银行家安迪（蒂姆·罗宾斯 Tim Robbins 饰）因涉嫌杀害妻子及她的情人而锒铛入狱。在这座名为肖申克的监狱内，希望似乎虚无缥缈，终身监禁的惩罚无疑注定了安迪接下来灰暗绝望的人生。",
        reading: "92",
        collection: "65",
      },
      {
        date: "Jan 01 2018",
        title: "霸王别姬",
        imgSrc: "/images/post/cat.png",
        avatar: "/images/avatar/4.png",
        content: "段小楼（张丰毅）与程蝶衣（张国荣）是一对打小一起长大的师兄弟，两人一个演生，一个饰旦，一向配合天衣无缝，尤其一出《霸王别姬》，更是誉满京城，为此，两人约定合演一辈子《霸王别姬》。但两人对戏剧与人生关系的理解有本质不同，段小楼深知戏非人生，程蝶衣则是人戏不分。",
        reading: "110",
        collection: "99",
      },
      {
        date: "Jan 08 2018",
        title: "这个杀手不太冷",
        imgSrc: "/images/post/crab.png",
        avatar: "/images/avatar/5.png",
        content: "里昂（让·雷诺饰）是名孤独的×××，受人雇佣。一天，邻居家小姑娘马蒂尔达（纳塔丽·波特曼饰)敲开他的房门，要求在他那里暂避杀身之祸。原来邻居家的主人是警方缉毒组的眼线，只因贪污了一小包×××而遭恶警（加里·奥德曼饰）杀害全家的惩罚。",
        reading: "999",
        collection: "666",
      },
      {
        date: "Jan 04 2018",
        title: "阿甘正传",
        imgSrc: "/images/post/sls.jpg",
        avatar: "/images/avatar/1.png",
        content: "阿甘（汤姆·汉克斯 饰）于二战结束后不久出生在美国南方阿拉巴马州一个闭塞的小镇，他先天弱智，智商只有75，然而他的妈妈是一个性格坚强的女性，她常常鼓励阿甘“傻人有傻福”，要他自强不息。",
        reading: "60",
        collection: "19",
      },
    ];

    this.setData({
      artData: local_database
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})