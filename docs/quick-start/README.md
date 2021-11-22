---
title: '快速上手'
permalink: /get-started
---

# 快速上手
本节将介绍如何在项目中使用 webpj-ui。

## 引入 webpj-ui
你可以引入整个 webpj-ui，或是根据需要仅引入部分组件。先介绍如何引入完整的 webpj-ui。

### 完整引入
入口文件main.js：
```
import Vue from 'vue';
import webpjUi from 'webpj-ui';
import 'webpj-ui/lib/webpj-ui.css'
Vue.use(webpjUi)

new Vue({
  el: '#app',
  render: h => h(App)
});
```

### 按需引入
如果你只希望引入部分组件，比如 Button，那么需要在 main.js 中写入以下内容：
// TODO: 
```
import Vue from 'vue';
import webpjUi from 'webpj-ui';
import 'webpj-ui/lib/webpj-ui.css'
Vue.use(webpjUi,{
  components:[
    'PjButton',
    'PjInput'
  ]
})
import App from './App.vue';
export default {
    name: 'app',
}
```