import Vue from 'vue'
import VueRouter from 'vue-router'
import VuePageTransition from 'vue-page-transition'
import VueI18n from 'vue-i18n'
import vmodal from 'vue-js-modal'

import 'jquery'
import 'bootstrap'
// Components
import App from './App.vue'
import messages from './assets/data/locales.js'

const Main = () =>
  import ('../src/components/Main.vue')
const CV = () =>
  import ('../src/components/CV.vue')
const Blog = () =>
  import ('../src/components/Blog.vue')
const PageNotFound = () =>
  import ('../src/components/PageNotFound.vue')

// Uses in App
Vue.use(VuePageTransition)
Vue.use(VueRouter)
Vue.use(VueI18n)
Vue.use(vmodal, {
  dialog: true
})

let routes = [{
  path: '/',
  component: Main,
  meta: {
    transition: 'fade-in-up',
    title: 'Sergey Kuzmenko'
  }
}, {
  path: '/cv',
  component: CV,
  meta: {
    title: 'CV'
  }
}, {
  path: '/blog',
  component: Blog,
  meta: {
    title: 'Blog'
  }
}, {
  path: '*',
  component: PageNotFound,
  meta: {
    title: 'Not Found'
  }
}]

// Router
const router = new VueRouter({
  mode: 'history',
  routes
})

router.afterEach((to, from) => {
  Vue.nextTick(() => {
    document.title = to.meta.title ? to.meta.title : 'Сергей Кузьменко'
  })
})

function getLocale() {
  let language = localStorage.getItem('locale')
  if (!language) {
    language = window.navigator ? (window.navigator.language ||
      window.navigator.systemLanguage ||
      window.navigator.userLanguage) : "ru";
    language = language.substr(0, 2).toLowerCase();
    localStorage.setItem('locale', language)
    return language
  } else {
    return localStorage.getItem('locale')
  }
}
// Translate i18n
console.log('Locale: ' + getLocale())
const i18n = new VueI18n({
  locale: getLocale(),
  messages
})

// Vue configs
Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')