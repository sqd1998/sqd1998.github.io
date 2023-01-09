---
title: js数据传输转换为JSON字符串
date: 2023-01-05 14:06:26
tags: JSON,数据传输
---

```javascript
wx.navigateTo({
          url: '/pages/index/index?userinfo=' +JSON.stringify(userinfo) + '&openID=' + openId
        })
```

```javascript
let userinfo = JSON.parse(options.userinfo)
```

