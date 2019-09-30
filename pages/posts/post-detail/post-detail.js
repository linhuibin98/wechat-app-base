import local_database from '../../../data/data.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    database: {},
    storage: {}
  },

  handleCollectionTap: function() {  // 点击收藏按钮时，更新收藏状态, 保存在Storage中
    let id = this.data.database.postId;
    let storage = wx.getStorageSync('collection');
    if (storage) { // 是否存在（是否是第一次初始化storage）
      storage[id] = !storage[id]; // 若storage[id]不存在, undefined去反为true，表示第一次收
      this.setData({ storage });
      wx.showToast({
        title: storage[id] ? '收藏成功' : '取消收藏',
      });
      wx.setStorageSync('collection', storage);
    } else {
      let storage ={
        [id]: true
      }
      this.setData({ storage });
      wx.showToast({
        title: '收藏成功',
      });
      wx.setStorageSync('collection', storage);
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.postid;
    let data = local_database.filter(function(item, index) {
      if (item.postId === parseFloat(id)) {
        return item;
      } 
    });
    this.setData({
      database: data[0]
    });
    // 加载时获取文章收藏状态
    let storage = wx.getStorageSync('collection');
    if (storage) {
      this.setData({ storage });
    }
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