(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{447:function(e,t,a){"use strict";a.r(t);var s=a(50),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"快速上手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速上手"}},[e._v("#")]),e._v(" 快速上手")]),e._v(" "),a("p",[e._v("本节将介绍如何在项目中使用 webpj-ui。")]),e._v(" "),a("h2",{attrs:{id:"引入-webpj-ui"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引入-webpj-ui"}},[e._v("#")]),e._v(" 引入 webpj-ui")]),e._v(" "),a("p",[e._v("你可以引入整个 webpj-ui，或是根据需要仅引入部分组件。先介绍如何引入完整的 webpj-ui。")]),e._v(" "),a("h3",{attrs:{id:"完整引入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#完整引入"}},[e._v("#")]),e._v(" 完整引入")]),e._v(" "),a("p",[e._v("入口文件main.js：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("import Vue from 'vue';\nimport webpjUi from 'webpj-ui';\nimport 'webpj-ui/lib/webpj-ui.css'\nVue.use(webpjUi)\n\nnew Vue({\n  el: '#app',\n  render: h => h(App)\n});\n")])])]),a("h3",{attrs:{id:"按需引入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#按需引入"}},[e._v("#")]),e._v(" 按需引入")]),e._v(" "),a("p",[e._v("如果你只希望引入部分组件，比如 Button，那么需要在 main.js 中写入以下内容：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("import Vue from 'vue';\nimport webpjUi from 'webpj-ui';\nimport 'webpj-ui/lib/webpj-ui.css'\nVue.use(webpjUi,{\n  components:[\n    'PjButton',\n    'PjInput'\n  ]\n})\nimport App from './App.vue';\nexport default {\n    name: 'app',\n}\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);