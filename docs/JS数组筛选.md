---
title: 数组筛选-筛选数组中未勾选的内容
date: 2023-01-13 11:32:13
tags: arr
---

```javascript
buttonConfirm() {
      var arr = []
      this.buttonPermission.forEach(item=>{
        if(this.checkedButtonPermission.indexOf(item.buttonId) ==-1){
          arr.push(item.buttonId)
        }
      })
      let data = {
        roleId: this.roleId,
        buttonIdList:arr,
      };
      if (this.check && this.check.id) {
        data.menuId = this.check.id;
      }
      this.submitLoadingBtn = true;
      changeButtonListByRoleId(data)
        .then((res) => {
          if (res.code == 0) {
            this.centerDialogVisible = false;
            this.$modal.msgSuccess(res.msg);
          } else {
            this.$modal.msgError(res.msg);
            antiShakeHanlder(() => {
              this.submitLoadingBtn = false;
            });
          }
        })
        .catch((res) => {
          antiShakeHanlder(() => {
            this.submitLoadingBtn = false;
          });
        });
    },
```

