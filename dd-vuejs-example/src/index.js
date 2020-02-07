import Vue from "vue";
import MyComponent from "./MyComponent.vue";

const MyComponentClass = Vue.extend(MyComponent);

export function render(root, api) {
  const vm = new MyComponentClass({ propsData: api.preferences }).$mount(root);

  api.onPreferencesChange(newPreferences => {
    Object.assign(vm.$props, newPreferences);
  });

  vm.$on("update:selectedMonitor", selectedMonitor => {
    api.setPreference("selectedMonitor", selectedMonitor);
  });

  api.onDestroy(() => {
    vm.$destroy();
  });
}

export const preferencesDefinition = [
  { name: "background", default: "" },
  { name: "title", default: "My super widget" }
];
