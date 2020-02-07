<template>
  <h1>Hello {{ name }}</h1>
</template>

<script>
export default {
  props: {
    name: {
      default: "Jane Doe"
    }
  },
  data() {
    return { name: this.name };
  }
};
</script>

<style scoped>
h1 {
  color: red;
}
</style>
