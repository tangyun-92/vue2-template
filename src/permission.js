import router from './router'
import store from './store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { param2Obj } from '@/utils/url-utils'
// import getPageTitle from '@/utils/get-page-title'
NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login', '/loading']
const location = window.location
const { href } = location

if (href.includes('session')) {
  const urlParams = param2Obj(href)
  const token = urlParams.session
  store.dispatch('user/setToken', token)
} else {
  const cookieToken = localStorage.getItem(window._BASE_CONFIG.projectKey)
  if (cookieToken) {
    store.dispatch('user/setToken', cookieToken)
  }
}

router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start()
  const hasToken = localStorage.getItem(window._BASE_CONFIG.projectKey)
  if (hasToken) {
    next()
  } else {
    // TODO: 当有token时检查路由是否在白名单内，若不在白名单则跳转到cas认证界面
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      const encodeUrl = encodeURIComponent(`${window.location.href}`)
      window.location.href = window._BASE_CONFIG.baseUrl + `/ssoLogin?redirectUrl=${encodeUrl}`
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
