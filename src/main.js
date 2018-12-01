import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'

Vue.config.productionTip = false

Vue.use(Vuetify, {
  theme: {
    primary: '#22264b',
    secondary: '#e8edf3',
    accent: '#e6cf8b',
    strong: '#b56969',
    error: '#f44336',
    warning: '#ffeb3b',
    info: '#00ACC1',
    success: '#43A047'
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
