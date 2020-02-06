import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

export function render(root) {
  new Vue({
    render: h => h(App),
  }).$mount(root)
}

