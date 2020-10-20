import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

/*
new Vue({
  el: '#app',
  render: function (h) {
    return h(App)
  }
})
 */

//箭头函数：用得最多的是把另一个函数作为参数传入函数中，如：h
new Vue({
  render: h => h(App),
}).$mount('#app')
