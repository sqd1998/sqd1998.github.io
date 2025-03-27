---
title: 闭包问题
date: 2023-01-05 09:22:44
tags: 闭包
---

微信小程序碰到闭包问题   通过使用箭头函数  或者使用

```
var that = this;
```

来解决this指向问题





```
data: {
    context: null,
    hasDraw: false, //默认没有画
    src:null,
    isDisable: false,
    userInfo: {},
    isShowImg: true,
    openID: null
  },
```

```js
  sign1ok: function () {
    var that = this;
    if(!that.data.hasDraw){
      console.log("签字是空白的 没有签字")
      wx.showToast({
        title: '签字板是空白的 没有签字',  //标题
        icon: 'none',  
        duration: 2000
    })
    }else{
      var context = that.data.context;
      context.draw(true, wx.canvasToTempFilePath({
        canvasId: 'handWriting1',
        success:(res)=>{
          // console.log(res.tempFilePath) //得到了图片下面自己写上传吧
          that.setData({
            src: res.tempFilePath
          }) 
         
          wx.uploadFile({
            url: "https://api-annual.caijinlvjian.com/sign/upload",
            filePath: res.tempFilePath,
            name: "file",
            formData: {
              filetype: "image",
              photo: this.data.userInfo.avatarUrl,
            nickName: this.data.userInfo.nickName,
            openId: this.data.openID
              
            },
            success: function (result) {
              
              let data = JSON.parse(result.data)
              console.log(data);
              if(data.code == '1'){
                wx.showToast({
                  title: '您已签到!',  //标题
                  icon: 'none',  
                  duration: 2000
              })
              that.setData({
                isDisable: true
              })
              }else {              
                wx.showToast({
                  title: '签到成功!',  //标题
                  icon: 'none',  
                  duration: 2000
              })
              that.setData({
                isDisable: true
              })
              }                         
            },
            fail: function (result) {
              console.log(result)
              wx.showToast({
                title: '签到失败,请重试!',  //标题
                icon: 'none',  
                duration: 2000
            })
            }
          })
        }
      }))
    }
  },
```

