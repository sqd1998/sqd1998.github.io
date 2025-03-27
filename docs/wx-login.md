---
title: 获取用户头像
date: 2023-01-06 15:10:38
tags: 头像
---

# 解决小程序wx.getUserProfile接口回收，wxfile://tmp临时文件转base64传回后台



## 调整说明

自 2022 年 10 月 25 日 24 时后（以下统称 “生效期” ），用户头像昵称获取规则将进行如下调整：

1. **自生效期起，小程序 wx.getUserProfile 接口将被收回**：生效期后发布的小程序新版本，通过 wx.getUserProfile 接口获取用户头像将统一返回默认[灰色头像](https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0)，昵称将统一返回 “微信用户”。生效期前发布的小程序版本不受影响，但如果要进行版本更新则需要进行适配。
2. **自生效期起，插件通过 wx.getUserInfo 接口获取用户昵称头像将被收回**：生效期后发布的插件新版本，通过 wx.getUserInfo 接口获取用户头像将统一返回默认[灰色头像](https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0)，昵称将统一返回 “微信用户”。生效期前发布的插件版本不受影响，但如果要进行版本更新则需要进行适配。通过 wx.login 与 wx.getUserInfo 接口获取 openId、unionId 能力不受影响。
3. **「头像昵称填写能力」支持获取用户头像昵称**：如业务需获取用户头像昵称，可以使用「[头像昵称填写能力](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/userProfile.html)」（基础库 2.21.2 版本开始支持，覆盖iOS与安卓微信 8.0.16 以上版本），具体实践可见下方《最佳实践》。
4. **小程序 wx.getUserProfile 与插件 wx.getUserInfo 接口兼容基础库 2.27.1 以下版本的头像昵称获取需求**：对于来自低版本的基础库与微信客户端的访问，小程序通过 wx.getUserProfile 接口将正常返回用户头像昵称，插件通过 wx.getUserInfo 接口将正常返回用户头像昵称，开发者可继续使用以上能力做向下兼容。

对于上述 3，wx.getUserProfile 接口、wx.getUserInfo 接口、头像昵称填写能力的基础库版本支持能力详细对比见下表：

![img](http://mmbiz.qpic.cn/mmbiz_png/3Luz3T7WxtaRRvnrN66rl7p7nSBeLxNum8opvj1NMWia879rxrV3arjgJjiat4DzW0vTBd0icpJe9Bgl1KrwKqRGg/0?wx_fmt=png)





```javascript
onChooseAvatar(e) {
      this.userInfo.avatarUrl = 'data:image/jpeg;base64,' +     wx.getFileSystemManager().readFileSync(e.detail.avatarUrl,'base64')
      console.log(this.userInfo.avatarUrl)
    },
```

