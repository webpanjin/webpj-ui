import Vue from 'vue'
import App from './App.vue'
import './assets/fonts/font.scss'
import './assets/css/code.scss'
import Button from './components/button.vue'
import Dialog from './components/dialog.vue'
import Input from './components/input.vue'
import Switch from './components/switch.vue'
import Radio from './components/radio.vue'
import RadioGroup from './components/radio-group.vue'
import Checkbox from './components/checkbox.vue'
import CheckboxGroup from './components/checkbox-group.vue'
import Form from './components/form.vue'
import FormItem from './components/form-item.vue'
import collapseItem from './components/collapse-item.vue'
import collapse from './components/collapse.vue'
import Icon from './components/icon.vue'
import CodeBlock from './components/code-block.vue'
Vue.config.productionTip = false
Vue.component(Button.name, Button)
Vue.component(Dialog.name, Dialog)
Vue.component(Input.name, Input)
Vue.component(Switch.name, Switch)
Vue.component(Radio.name, Radio)
Vue.component(RadioGroup.name, RadioGroup)
Vue.component(Checkbox.name, Checkbox)
Vue.component(CheckboxGroup.name, CheckboxGroup)
Vue.component(Form.name, Form)
Vue.component(FormItem.name, FormItem)
Vue.component(collapseItem.name, collapseItem)
Vue.component(collapse.name, collapse)
Vue.component(Icon.name, Icon)
Vue.component(CodeBlock.name, CodeBlock)

new Vue({
  render: h => h(App)
}).$mount('#app')
