<template>
  <div>
    <h1>{{ dTitle }}</h1>
      <h2>/api/v1/monitor/search?start=0&count=50</h2>
      <button v-on:click="fetchMonitors">Refresh</button>
      <div id="example-1" style="height: 100px;overflow: scroll;">
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
      <div id="example-2" style="height: 100px;overflow: scroll;">
        <ul>
          <li v-for="l  in dLogIndex.indexes" v-bind:key="l.scopeId">
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
    title: {
      default: "Title"
    },
    logIndex:{
      default: {}
    },
    monitors:{
      default: {}
    }
  },
  data() {
    return { 
      dTitle: this.title, 
      dLogIndex: this.logIndex,
      dMonitors: this.monitors
      };
  },
  mounted () {
    fetch(`/api/v1/logs/indexes?type=logs`)
      .then(response => response.json())
      .then(json => {
        this.dLogIndex = json;
    });
    this.fetchMonitors();
  },
  methods: {
    fetchMonitors: function () {
      fetch(`/api/v1/monitor/search?start=0&count=50`)
        .then(response => response.json())
        .then(json => {
          this.dMonitors = json;
      });
    }
  }
};
</script>

<style scoped>
h1 {
  color: rebeccapurple;
}
</style>
