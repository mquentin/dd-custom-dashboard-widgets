import Vue from "vue";
import MyComponent from "./MyComponent.vue";

export function render(root, preferences) {
  new Vue({
    render: h => h(MyComponent, { props: preferences })
  }).$mount(root);
}

export const preferencesDefinition = [{ name: "name", default: "Jane Doe" }];
