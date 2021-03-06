// 整个包的入口
// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
// 统一导出
// 导入颜色选择器组件
import Button from './button'
import Dialog from './dialog'
import Input from './input'
import Checkbox from './checkbox'
import Radio from './radio'
import RadioGroup from './radio-group'
import Switch from './switch'
import CheckboxGroup from './checkbox-group'
import Form from './form'
import FormItem from './form-item'
import Collapse from './collapse'
import CollapseItem from './collapse-item'
import Arc from './arc'
import Track from './track'
import './assets/fonts/font.scss'
import './assets/css/base.scss'
import './assets/css/code.scss'

// 存储组件列表
const components = [
  Button,
  Dialog,
  Input,
  Checkbox,
  Radio,
  RadioGroup,
  Switch,
  CheckboxGroup,
  Form,
  FormItem,
  Collapse,
  CollapseItem,
  Arc,
  Track
]
const install = function (Vue,options) {
  if(options&&options.components){//按需加载
    const componentsPart = options.components 
    componentsPart.forEach(componentsPartName=>{
      components.forEach(component=>{
        if(componentsPartName==component.name){
          Vue.component(component.name,component)
        }
      })
    })
  }else{
    // 全局注册所有的组件
    components.forEach((item) => {
      Vue.component(item.name, item)
    })
  }
}

// 判断是否是直接引入文件,如果是，就不用调用 Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
