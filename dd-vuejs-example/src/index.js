import Vue from "vue";
import MyComponent from "./MyComponent.vue";

const MyComponentClass = Vue.extend(MyComponent)

export function render(root, api) {
  const vm = new MyComponentClass({ propsData: api.preferences }).$mount(root);

  api.onPreferencesChange(newPreferences => {
    Object.assign(vm.$props, newPreferences)
  })

  api.onDestroy(() => {
    vm.$destroy()
  })
}

export const preferencesDefinition = [{ name: "name", default: "Custom widget title" }];
