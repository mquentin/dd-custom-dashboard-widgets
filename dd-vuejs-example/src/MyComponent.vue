<template>
  <div>
    <h1>{{ dTitle }}</h1>
    <ul id="example-1">
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
</template>

<script>
    
export default {
  props: {
    title: {
      default: "Title"
    },
    logIndex:{
      default: {}
    }
  },
  data() {
    return { 
      dTitle: this.title, 
      dLogIndex: this.logIndex
      };
  },
  mounted () {
    fetch(`/api/v1/logs/indexes?type=logs`)
      .then(response => response.json())
      .then(json => {
        this.dLogIndex = json;
    });
  }
};
</script>

<style scoped>
h1 {
  color: rebeccapurple;
}
</style>
