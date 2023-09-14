import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import auth from './store'

Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
  modules: {
    auth,
  },
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
