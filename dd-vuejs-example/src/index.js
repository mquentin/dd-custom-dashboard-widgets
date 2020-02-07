import Vue from "vue";
import MyComponent from "./MyComponent.vue";

export function render(root, preferences) {
  if(!preferences){
    preferences = {};
  }
  if(!preferences.logIndex){
    preferences.logIndex = {"locked":false,"historicalIndexes":[{"from":"2019-11-01T04:00:00Z","readDataAccess":true,"scopeId":"690221","name":"AAA","to":"2020-02-06T22:00:00Z"}],"indexes":[{"name":"AAA","dailyLimit":2500000000,"rateLimited":false,"scopeId":"1","query":"(short_image:*) OR (service:kubernetes)","retention":7,"readDataAccess":true,"dailyQuotaDisabled":false},{"name":"test-AAA","dailyLimit":1000000000,"rateLimited":false,"scopeId":"114","query":"\"wubalubadubdub wubalubadubdub wubalubadubdub\"","retention":15,"readDataAccess":true,"dailyQuotaDisabled":false},{"name":"AAA","dailyLimit":null,"rateLimited":false,"scopeId":"54924","query":"AAA:devenv-*","retention":15,"readDataAccess":true,"dailyQuotaDisabled":true},{"name":"AAA","dailyLimit":null,"rateLimited":false,"scopeId":"55474","query":"source:compliance-mvp","retention":15,"readDataAccess":true,"dailyQuotaDisabled":true},{"name":"AAA","dailyLimit":800000000,"rateLimited":false,"scopeId":"7","query":"*","retention":15,"readDataAccess":true,"dailyQuotaDisabled":false}]};  
  }
  if(!preferences.monitors){
    preferences.monitors = {"counts": {}, "monitors":[{"status":"Alert","scopes":["*"],"classification":"metric","creator":{"handle":"TESTTEST@test.com","id":283348,"name":"test test"},"overall_state_modified":1571230111,"metrics":["system.load.5"],"notifications":[],"last_triggered_ts":1571230084,"query":"avg(last_1h):avg:system.load.5{*} > 2","id":12179104,"name":"Test","tags":[],"org_id":2,"type":"metric alert"}]}
  }

  new Vue({
    render: h => h(MyComponent, { props: preferences })
  }).$mount(root);
}

export const preferencesDefinition = [{ name: "name", default: "Custom widget title" }];
