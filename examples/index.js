import E from 'wangeditor'
import {AlertMenu} from '../src/index' 

const menuKey = 'alertMenuKey' 

// 注册菜单
E.registerMenu(menuKey, AlertMenu)

const editor =  new E('#div1')

editor.create()