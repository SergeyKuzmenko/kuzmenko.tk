import Vue from 'vue'
import VueRouter from 'vue-router'
import VuePageTransition from 'vue-page-transition'
import VueI18n from 'vue-i18n'
// Components
import App from './App.vue'
import Main from './components/Main.vue'
import CV from './components/CV.vue'
import Blog from './components/Blog.vue'
import PageNotFound from './components/PageNotFound.vue'

// Import locale-file
//import locales from './assets/data/locales'

// Uses in App
Vue.use(VuePageTransition);
Vue.use(VueRouter);
Vue.use(VueI18n);

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
];

// Router
const router = new VueRouter({
  mode: 'history',
  routes
});

router.afterEach((to, from) => {
  Vue.nextTick(() => {
    document.title = to.meta.title ? to.meta.title : 'Sergey Kuzmenko';
  });
});
import messages from './assets/data/locales.js'

// const messages = {
//   en: {
//     full_name: 'Sergey Kuzmenko',
//     welcome: 'Hello from',
//     country: 'Ukraine',
//     location: 'Kropyvnytskyi, Ukraine',
//     cv: 'CV',
//     blog: 'Blog'
//   },
//   ru: {
//     full_name: 'Кузьменко Сергей',
//     welcome: 'Привет c',
//     country: 'Украины',
//     location: 'Кропивницкий, Украина',
//     cv: 'Резюме',
//     blog: 'Блог'
//   },
//   ua: {
//     full_name: 'Кузьменко Сергій',
//     welcome: 'Привіт з',
//     country: 'України',
//     location: 'Кропивницький, Україна',
//     cv: 'Резюме',
//     blog: 'Блог'
//   }
// };
// Translate i18n
const i18n = new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
});

// Vue configs
Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app');