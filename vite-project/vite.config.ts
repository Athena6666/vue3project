import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
//引入svg需要用到的插件
import {createSvgIconsPlugin} from 'vite-plugin-svg-icons'
export default defineConfig({
  plugins: [vue(),
  ], 
})
