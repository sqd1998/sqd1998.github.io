
```
title: vue3+ts 封装mqtt
date: 2025-09-10 09:50:16
tags: vue3+ts 封装mqtt
```


一、mqtt下载
```javascript
npm install mqtt -S
```

二、封装mqtt.ts 
```javascript
import type { MqttClient, OnMessageCallback } from 'mqtt';
import * as mqtt from 'mqtt/dist/mqtt.min.js';

class MQTT {
  url: string; // mqtt地址
  topic: string; //订阅地址
  client!: MqttClient;
  constructor(topic: string) {
    this.topic = topic;
    // 虽然是mqtt但是在客户端这里必须采用websock的链接方式
    this.url = 'ws://11111111/mqtt';
  }

  //初始化mqtt
  init() {
    const options = {
      clean: true,
      clientId: '111',
      password: '111',
      username: '1111',
      connectTimeout: 4000, // 超时时间
    };
    this.client = mqtt.connect(this.url, options);
    this.client.on('error', (error: any) => {
      console.log(error);
    });
    this.client.on('reconnect', (error: Error) => {
      console.log(error);
    });
  }
  //取消订阅
  unsubscribes() {
    this.client.unsubscribe(this.topic, (error: Error) => {
      if (!error) {
        console.log(this.topic, '取消订阅成功');
      } else {
        console.log(this.topic, '取消订阅失败');
      }
    });
  }
  //连接
  link() {
    this.client.on('connect', () => {
      this.client.subscribe(this.topic, (error: any) => {
        if (!error) {
          console.log('订阅成功');
        } else {
          console.log('订阅失败');
        }
      });
    });
  }
  //收到的消息
  get(callback: OnMessageCallback) {
    this.client.on('message', callback);
  }
  //结束链接
  over() {
    this.client.end();
  }
}
export default MQTT;
```
三.封装usemqtt.ts
```javascript
import MQTT from '@/utils/mqtt';
import type { OnMessageCallback } from 'mqtt';

export default function useMqtt() {
  const PublicMqtt = ref<MQTT | null>(null);

  const startMqtt = (val: string, callback: OnMessageCallback) => {
    //设置订阅地址
    PublicMqtt.value = new MQTT(val);
    //初始化mqtt
    PublicMqtt.value.init();
    //链接mqtt
    PublicMqtt.value.link();
    getMessage(callback);
  };
  const getMessage = (callback: OnMessageCallback) => {
    // PublicMqtt.value?.client.on('message', callback);
    PublicMqtt.value?.get(callback);
  };
  onUnmounted(() => {
    //页面销毁结束订阅
    if (PublicMqtt.value) {
      PublicMqtt.value.unsubscribes();
      PublicMqtt.value.over();
    }
  });

  return {
    startMqtt,
  };
}
```
四.页面中使用
```javascript
import useMqtt from '@/composables/utils/useMqtt';
const { startMqtt } = useMqtt();
startMqtt('主题topic', (topic, message) => {
   const msg = JSON.parse(message.toString());
   console.log(msg);
});
```



