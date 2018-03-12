Page({
  data: {
    
  },
  onLoad:function(){
    this.net();
  },
  net:function(){
    let that = this;
    wx.request({
      url: "https://api.douban.com/v2/movie/in_theaters",
      header:{
        "content-type":"application/xml"
      },
      success: res => {
        console.log(res);
        if(res.data){
          that.setData({
            moiveList:res.data
          })
        }else{
          wx.showToast({
            title: '请求错误'
          })
        }
      }
    })
  }
})