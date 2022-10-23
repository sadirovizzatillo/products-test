import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import axios from "axios"

Vue.config.productionTip = false


console.log(axios.get("https://dummyjson.com/products"))

new Vue({
  vuetify,
  router,
  axios,
  render: h => h(App)
}).$mount('#app')
