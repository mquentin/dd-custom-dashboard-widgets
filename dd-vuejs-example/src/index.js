import Vue from 'vue'
import MyComponent from './MyComponent.vue'

export function render(root) {
  new Vue({
    render: h => h(MyComponent),
  }).$mount(root)
}
