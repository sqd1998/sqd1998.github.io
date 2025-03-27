---
title: v-if与v-for一起使用的冲突
date: 2022-11-18 11:03:09
tags: 问题
---

# 总结

1. v-if 不能和 v-for一起使用的原因是v-for 的优先级比 v-if高，一起使用会造成性能浪费 ,解决方案有两种，把v-if放在v-for的外层或者把需要v-for的属性先从计算属性中过滤一次
   
2. v-if 和  v-for的优先级问题在vue3中不需要考虑，vue3更新了v-if和v-for的优先级，使v-if的优先级高于v-for
   

