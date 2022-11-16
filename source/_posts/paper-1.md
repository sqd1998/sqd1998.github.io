---
title: vue复制插件
date: 2022-11-15 18:14:44
tags: vue-cliboard2
---

### vue使用vue-clipboard2的过程

------

```js
npm install --save vue-clipboard2
```

###### main.js注册

```javascript
import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'

Vue.use(VueClipboard)
```

###### 组件内使用  ---通过方法this.$copyText

```javascript
<div id="app"></div>

  <template id="t">
    <div class="container">
    <input type="text" v-model="message">
    <button type="button" @click="doCopy">Copy!</button>
    </div>
  </template>

  <script>
  new Vue({
    el: '#app',
    template: '#t',
    data: function () {
      return {
        message: 'Copy These Text'
      }
    },
    methods: {
      doCopy: function () {
        this.$copyText(this.message).then(function (e) {
          alert('Copied')
          console.log(e)
        }, function (e) {
          alert('Can not copy')
          console.log(e)
        })
      }
    }
  })
  </script>
```

通过指令 v-clipboard

```javascript
<div id="app"></div>

<template id="t">
  <div class="container">
    <input type="text" v-model="message">
    <button type="button"
      v-clipboard:copy="message"
      v-clipboard:success="onCopy"
      v-clipboard:error="onError">Copy!</button>
  </div>
</template>

<script>
new Vue({
  el: '#app',
  template: '#t',
  data: function () {
    return {
      message: 'Copy These Text'
    }
  },
  methods: {
    onCopy: function (e) {
      alert('You just copied: ' + e.text)
    },
    onError: function (e) {
      alert('Failed to copy texts')
    }
  }
})
</script>
```

###### vue使用vue-clipboard2实现复制功能遇到的问题

翻译：
是的，您可以使用我们的新方法：this.$copyText。请参见sample2，在这里我们将剪贴板指令替换为v-on指令。
现代浏览器有一些限制，比如不能在没有用户交互的情况下使用window.open。所以复制东西也有同样的限制！在使用之前先测试一下。确保没有在任何异步方法中使用此方法。
在使用此功能之前，请先阅读：本期和本页。

emmm所以说不能在异步方法中使用这个方法，总算找到原因了，但是没找到解决方法。