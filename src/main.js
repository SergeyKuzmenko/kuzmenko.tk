import Vue from 'vue'
import VueRouter from 'vue-router'
import VuePageTransition from 'vue-page-transition'
import VueI18n from 'vue-i18n'
import vmodal from 'vue-js-modal'

import 'jquery'
import 'bootstrap'
// Components
import App from './App.vue'
import Main from './components/Main.vue'
import CV from './components/CV.vue'
import Blog from './components/Blog.vue'
import PageNotFound from './components/PageNotFound.vue'
import messages from './assets/data/locales.js'

// Import locale-file
// import locales from './assets/data/locales'

// Uses in App
Vue.use(VuePageTransition)
Vue.use(VueRouter)
Vue.use(VueI18n)
Vue.use(vmodal, { dialog: true })

let routes = [
  {
    path: '/',
    component: Main,
    meta: {
      transition: 'fade-in-up',
      title: 'Sergey Kuzmenko'
    }
  },
  {
    path: '/cv',
    component: CV,
    meta: {
      title: 'CV'
    }
  },
  {
    path: '/blog',
    component: Blog,
    meta: {
      title: 'Blog'
    }
  },
  {
    path: '*',
    component: PageNotFound,
    meta: {
      title: 'Not Found'
    }
  }
]

// Router
const router = new VueRouter({
  mode: 'history',
  routes
})

router.afterEach((to, from) => {
  Vue.nextTick(() => {
    document.title = to.meta.title ? to.meta.title : 'Sergey Kuzmenko'
  })
})

// Translate i18n
const i18n = new VueI18n({
  locale: 'en', // set locale
  messages // set locale messages
})

// Vue configs
Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
