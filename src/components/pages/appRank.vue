<template>
  <div class="main">
    <div class="one">
      <app-rank @onSubmit="onSubmit"></app-rank>
    </div>
  </div>
</template>

<style scoped>
.main > div {
  height: auto;
  width: 98%;
  min-height: 200px;
  margin: 10px 1%;
  background-color: #fbfbfb;
}
</style>
<script>
import appRank from "../echarts/appRank";
export default {
  components: {
    appRank,
  },
  data() {
    return {
      date: new Date(2018, 3, 29, 0, 0),
      hackReset: true,
    };
  },
  watch: {
    date: function (val, oldVal) {
      console.log("============更新1========================");
      this.hackReset1();
    },
  },
  methods: {
    hackReset1() {
      this.hackReset = false;
      this.$nextTick(() => {
        this.hackReset = true;
      });
    },
    onSubmit(date) {
      this.date = date;
      console.log("date+++++++++++++++++++++++++++date");
      console.log(date);
    },
  },
};
</script>

