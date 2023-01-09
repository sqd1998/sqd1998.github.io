---
title: 监测和设置微信小程序横竖屏转换
date: 2023-01-05 13:59:56
tags: 微信小程序
---

### 监测和设置微信小程序横竖屏转换



今天在使用小程序测试横竖屏时，发现官方给出的配置有问题

如果想要某个页面支持屏幕旋转，需要在此页面的 json文件中配置

```
“pageOrientation”: “auto”，//自动旋转横屏或者竖屏
```

```
"pageOrientation": "landscape",//旋转横屏
```



```javascript
1 {
5   "pageOrientation":"auto"
6 }
```

然后如果手机屏幕旋转，页面会自动进行旋转。我们需要根据屏幕方向显示不同的内容，那如何判断当前屏幕的方向呢？可以在此页面的 js 文件中加入 

```javascript
onResize:function(res){} 
```

方法来进行屏幕方向的监听，每次屏幕旋转时这个方法都会调用。

```javascript
1 Page({
2   onResize:function(res) {
3     console.log('屏幕方向旋转',res)
4   }
5 })
```

可以通过获取到的显示区域的宽度和高度来判断当前屏幕是横屏还是竖屏，然后显示不同的内容。注意，模拟器不会触发此方法，所以请使用真机调试。