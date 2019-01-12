import Vue from 'vue'
import Game from './Game.vue'
import router from './components/router.js'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuex from 'vuex'

import VueParallaxJs from 'vue-parallax-js'

Vue.use(BootstrapVue)
Vue.use(VueParallaxJs)
Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(Game),
}).$mount('#game')

