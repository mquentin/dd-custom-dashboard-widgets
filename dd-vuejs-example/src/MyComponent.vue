<template>
  <div>
    <h1>{{ dName }}</h1>
      <h2>/api/v1/monitor/search?start=0&count=50</h2>
      <button v-on:click="fetchMonitors">Refresh</button>
      <div v-if="dMonitors" id="example-1" style="height: 100px;overflow: scroll;">
        <ul>
          <li v-for="m  in dMonitors.monitors" v-bind:key="m.id">
            {{ m.id }}
              <ul>
                  <li>
                    {{ m.status }}
                  </li>
                  <li>
                    {{ m.creator }}
                  </li>
                  <li>
                    {{ m.query }}
                  </li>
              </ul>
          </li>
        </ul>
      </div>
      <h2>/api/v1/logs/indexes?type=logs</h2>
      <div v-if="dLogIndex" id="example-2" style="height: 100px;overflow: scroll;">
        <ul>
          <li v-for="l in dLogIndex.indexes" v-bind:key="l.scopeId">
            {{ l.name }}
              <ul>
                  <li>
                    {{ l.query }}
                  </li>
              </ul>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
    
export default {
  props: {
    name: {
      default: "Custom widget title"
    },
  },
  data() {
    return {
      dName: this.name,
      dLogIndex: null,
      dMonitors: null,
    };
  },
  mounted () {
    this.fetchMonitors();
  },
  methods: {
    async fetchLogs() {
      const response = await fetch(`/api/v1/logs/indexes?type=logs`)
      this.dLogIndex = await response.json();
    },
    async fetchMonitors () {
      const response = await fetch(`/api/v1/monitor/search?start=0&count=50`)
      this.dMonitors = await response.json();
    }
  }
};
</script>

<style scoped>
h1 {
  color: rebeccapurple;
}
</style>
