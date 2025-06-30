import { App } from 'vue'
import Foo from '@demo-ui-lib/foo'
import DropdownMenu from '../dropdown-menu'
// import component end
import '../scss/index.scss'

const components = [
  Foo,
  DropdownMenu
] // components

// 全局动态添加组件
const install = (app: App): void => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export default {
  install
}
