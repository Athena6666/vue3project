import { createApp } from 'vue'
import App from './App.vue'
//引入element-plus插件与样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//获取应用实例化对象
const app = createApp(App)
// 安装element-plus插件
app.use(ElementPlus,{
  locale: zhCn
})
import 'virtual:svg-icons-register'
// 将应用挂载到挂载点上
app.mount('#app')
