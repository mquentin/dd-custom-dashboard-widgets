<template>
  <div class="dd-vue-widget" :style="bgStyle">
    <h1>{{ title }}</h1>
    <div v-if="monitors">
      <p>Select a monitor:</p>
      <p>
        <select
          :value="selectedMonitor"
          @change="
            $emit('update:selectedMonitor', $event.target.value);
            fetchMonitor($event.target.value);
          "
          style="width:80%"
        >
          <option disabled value="">Please select one</option>
          <option v-for="monitor in monitors" :value="monitor.id">
            {{ monitor.name }}
          </option>
        </select>
      </p>
      <template v-if="monitor && monitor.id > 0">
        <p>Selected: {{ selectedMonitor }}</p>
        <h2>{{ monitor.name }}</h2>
        <p>Created by {{ monitor.creator.name }}</p>
        <p>Status: {{ monitor.overall_state }}</p>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    background: {
      default: ""
    },
    title: {
      default: "My super widget"
    },
    selectedMonitor: Number
  },
  data() {
    return {
      monitors: null,
      monitor: null
    };
  },
  mounted() {
    this.fetchMonitors();
    if (this.selectedMonitor) {
      this.fetchMonitor(this.selectedMonitor);
    }
  },
  methods: {
    async fetchMonitors() {
      const response = await fetch(
        `/api/v1/monitor/search?start=0&per_page=50&sort=name,asc&text=type:metric`
      );
      this.monitors = (await response.json()).monitors;
    },

    async fetchMonitor(id) {
      const response = await fetch(`/api/v1/monitor/${id}`);
      this.monitor = await response.json();
    }
  },
  computed: {
    bgStyle() {
      return {
        backgroundImage: `url(${this.background})`
      };
    }
  }
};
</script>

<style scoped>
h1,
h2,
h3 {
  color: rebeccapurple;
}
.dd-vue-widget {
  padding: 10px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-size: cover;
}
</style>
