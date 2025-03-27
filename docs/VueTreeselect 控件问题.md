---
title: VueTreeselect 问题
date: 2022-11-16 10:12:55
tags: 解决方法
---

# VueTreeselect 控件显示[unknown]

treeselect 绑定的值需要与options输出的id相对应，若是空值，请不要给空[字符串](https://so.csdn.net/so/search?q=字符串&spm=1001.2101.3001.7020)，0，等，因为会出现unknown，并且当选择了值以后，会出现选中的值后面会拼上unknown。

解决办法就是把v-modle绑定的值设为null，必须是null，不能是‘null’，初始化的时候才不会出现unknown。

