<template>
  <div>
    <h1>Hello {{ dName }}</h1>
    <ul id="example-1">
      <li v-for="l  in dLogIndex.indexes" v-bind:key="l.scopeId">
        {{ l.name }}
      </li>
  </ul>
</div>
</template>

<script>
    
export default {
  props: {
    name: {
      default: "Jane Doe"
    },
    logIndex:{
      default: {}
    }
  },
  data() {
    return { 
      dName: this.name, 
      dLogIndex: this.logIndex
      };
  }
};
</script>

<style scoped>
h1 {
  color: red;
}
</style>
