---
title: vue使用自定义校验的问题
date: 2022-12-06 15:14:34
tags: 问题
---

------

有一个需求,需要使用vue的表单校验对上传的附件就行必填校验,查阅资料后,使用validator添加自定义校验规则,测试后发现自定义校验的value存在数据不能及时更新问题,后来采用判断本地数据的方法就行问题解决

```javascript
<el-form-item
                label="付款回单附件:"
                style="width: 520px"
                prop="fileListBack"
              >
                <div style="display: flex">
                  <el-upload
                    class="upload-demo"
                    :action="uploadImgUrl"
                    :headers="headers"
                    ref="uploads"
                    :on-success="handleSuccessbz"
                    :on-exceed="handleExceed"
                    :before-upload="beforeAvatarUpload"
                    :before-remove="beforeRemove"
                    :on-remove="removeHandlerFK"
                    :on-preview="handlePreview"
                    :limit="limit"
                    :file-list="paymentForm.fileListBack"
                    accept=".jpg,.jpeg,.png,.pdf"
                  >
                    <el-button
                      type="primary"
                      size="small"
                      icon="el-icon-upload2"
                      >上传文件</el-button
                    >
                    <div slot="tip" class="el-upload__tip" style="width: 420px">
                      最多可上传20个文件,单个文件不能超过20MB,支持pdf、png、jpg、jpeg格式。
                    </div>
                  </el-upload>
                </div>
              </el-form-item>
```



```javascript
fileListBack: [
          {
            required: true,
            message: "请上传付款回单附件",
            trigger: "change",
            validator: validscfj,
          },
        ],
```



```javascript
var validscfj = (rule, value, callback) => {
      console.log(this.paymentForm.fileListBack);

      if (this.paymentForm.fileListBack.length == 0) {
        callback(new Error("请添加付款回单附件"));
      } else {
        callback();
      }
    };
```

表单校验:需要在el-form绑定v-model   ref 绑定表单 :rules绑定规则      el-form-item绑定prop值为表单下的数据