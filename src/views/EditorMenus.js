import { Boot } from "@wangeditor/editor";

class PreViewMenu {
  title = '预览'
  tag = 'button'
  alwaysEnable = true
  isActive() {
    return false
  }
  getValue() {
    return ''
  }
  isDisabled() {
    return false
  }
  exec(editor, value) {
    if (this.isDisabled(editor)) return
    if (editor.hasOwnProperty('preView')) {
      editor.preView()
    }
  }
}

// 定义菜单配置
const preViewMenu = {
  key: 'preViewMenu', // menu key ，唯一。注册之后，可配置到工具栏
  factory() {
    return new PreViewMenu()
  },
}
Boot.registerMenu(preViewMenu)

class PrintMenu {
  title = '打印'
  tag = 'button'
  alwaysEnable = true
  isActive() {
    return false
  }
  getValue() {
    return ''
  }
  isDisabled() {
    return false
  }
  exec(editor, value) {
    if (this.isDisabled(editor)) return
    console.log('editor: ', editor);
  }
}

// 定义菜单配置
const printMenu = {
  key: 'printMenu', // menu key ，唯一。注册之后，可配置到工具栏
  factory() {
    return new PrintMenu()
  },
}

Boot.registerMenu(printMenu)