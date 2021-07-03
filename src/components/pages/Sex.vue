<template>
  <div class="main">
    <div class="one">
      <sex @onSubmit="onSubmit"></sex>
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
import sex from "../echarts/Sex";
export default {
  components: {
    sex,
  },
  data() {
    return {
      date: new Date(2018, 3, 29, 0, 0),
      hackReset: true,
    };
  },
  watch: {
    date: function (val, oldVal) {
      // console.log("============更新1========================");
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
      // console.log("date+++++++++++++++++++++++++++date");
      // console.log(date);
    },
  },
};
</script>

