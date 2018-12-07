// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
// ElementUi
import ElementUI from "element-ui";
import locale from 'element-ui/lib/locale/lang/es'
import "element-ui/lib/theme-chalk/index.css";
import 'element-ui/lib/theme-chalk/display.css';
//Bootstrap
import 'jquery'
import 'popper.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as VueGoogleMaps from 'vue2-google-maps'

//Animate.css
import 'animate.css'
// valida input para telefono 2
import VueTelInput from 'vue-tel-input'
import 'vue-tel-input/dist/vue-tel-input.css';
//google maps
import moment from 'moment';
Vue.use(moment);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBGX9Idq22bpPlt-WOXv_py3SfeNhLgEhk',
    libraries: 'places'
  },
})
Vue.use(VueTelInput)
Vue.use(ElementUI, {
  locale
})

Vue.config.productionTip = false

//configurando la auntenticacion en la ruta 
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.loggedIn) {
      next({
        path: "/login", //este es el path al que se va a redireccionar
      });
    } else {
      next();
    }
  } else {
    next()
  }
  if (to.meta.adminAuth) {
    if (localStorage.getItem('user_role') != 2) {
      next({
        path: "/inicio",
      });
    } else {
      next()
    }
  }
  // else {
  //   next(); // make sure to always call next()!
  // }
});

new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
