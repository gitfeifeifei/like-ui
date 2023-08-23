import Vue from 'vue'
import App from './App.vue'

import likeUI from './components/index';
Vue.use(likeUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
