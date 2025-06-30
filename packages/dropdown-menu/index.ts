import DropdownMenu from './src/dropdown-menu.vue'
import { App } from 'vue'

DropdownMenu.name = 'up-dropdown-menu'

DropdownMenu.install = (app: App): void => {
  // 注册组件
  app.component(DropdownMenu.name, DropdownMenu)
}

export default DropdownMenu
