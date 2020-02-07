<template>
  <div>
    <h1>{{ name }}</h1>
    <div v-if="monitors" style="height: 100px;overflow: scroll;">
      <select :value="selectedMonitor" @change="$emit('update:selectedMonitor', $event.target.value)">
        <option disabled value="">Please select one</option>
        <option v-for="monitor in monitors" :value="monitor.id">
        {{ monitor.name}}
        </option>
      </select>
      <span>Selected: {{ selectedMonitor }}</span>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    name: {
      default: "Custom widget title"
    },
    selectedMonitor: Number
  },
  data() {
    return {
      monitors: null,
    };
  },
  mounted () {
    this.fetchMonitors();
  },
  methods: {
    async fetchMonitors () {
      const response = await fetch(`/api/v1/monitor/search?start=0&count=50`)
      this.monitors = (await response.json()).monitors;
    }
  }
};
</script>

<style scoped>
h1 {
  color: rebeccapurple;
}
</style>
