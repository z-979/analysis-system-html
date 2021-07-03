<template>
  <div class="welcome">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  data() {
    return {
      msg: "Welcome to Your User Behavior Analysis System",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 30px;
  color: #409eff;
}
</style>
