---
title: JS-filter
date: 2023-02-10 13:50:16
tags: js-filter
---

### 项目背景：

一个项目中，需要根据不同条件的筛选，选出一个[数组对象](https://so.csdn.net/so/search?q=数组对象&spm=1001.2101.3001.7020)中的某几个凑成一个新的数组。

```javascript
let array = [ 
{ 
  date: '2022-05-02', 
  name: 'cuclife', 
  status: 'success', 
  tag: '70', 
 band:['R','B'] 
}, 
 
{ 
  date: '2022-05-04', 
  name: 'Lily', 
  status: 'fail', 
  tag: '50', 
  band:['R','G'] 
}, 
 
{ 
  date: '2022-05-01', 
  name: 'Kevin', 
  status: 'success', 
  tag: '20', 
  band:['R','G','B'] 
}, 
{ 
  date: '2022-05-02', 
  name: 'Kevin', 
  status: 'success', 
  tag: '70', 
  band:['R','G','B','RE'] 
}, 
]; 
 
let filterBand=['R','G','RE'];                 //条件1 
let filterNames = ['Lily', 'Kevin'];         //条件2 
let filterTag =["20",'70'];                     //条件3 
let result = array.filter((a,i)=>{ 
    return (  filterNames.some(f=>(f === a.name)) &&filterTag.some(f=>(f === a.tag)) &&  filterBand.some(f=>( a.band.includes(f))) ) 
}) 
 
console.log(result) 

```

实际项目代码

```javascript
let walletListNew = [ 
{ 
  seqNo: '3', 
  isShow: 'true', 
}, 
 
{ 
  seqNo: '', 
  isShow: 'false', 
}, 

];       
//筛选出this.walletListNew中带有空的undefined的对象
      let filterNull = ["", undefined];
      let result = this.walletListNew.filter((a, i) => {
        return filterNull.some((f) => f === a.seqNo);
      });
```

```javascript
	//筛选this.walletListNew带有true的对象
	  let filterFalse = [true];
      let result2 = this.walletListNew.filter((a, i) => {
        return filterFalse.some((f) => f === a.isShow);
      });
      console.log(result2);
```

