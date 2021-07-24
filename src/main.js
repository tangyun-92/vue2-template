import Vue from 'vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/zh-CN'
import App from './App'
import store from './store'
import router from './router'
import GV from '@/utils/global-variable'
import 'normalize.css/normalize.css'
// import 'element-ui/lib/theme-chalk/index.css'
import './styles/element-variables.scss'
import '@/styles/index.scss'
import '@/icons'

// 引用鉴权代码
// import '@/permission'
const isDev = process.env.NODE_ENV === 'development'
console.log('isDev', isDev)
Vue.prototype.$GV = GV
Vue.use(ElementUI, { locale })
// baseUrl
Vue.prototype.$__BASE_URL = window._BASE_CONFIG.baseUrl
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
