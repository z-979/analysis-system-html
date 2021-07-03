<template>
  <div class="main">
    <div class="one">
      <my-form @onSubmit="onSubmit" :cdOptions="cdOptions"></my-form>
    </div>
    <div class="two">
      <analysis v-if="hackReset" :form="form" :cdOptions="cdOptions"></analysis>
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
import myForm from "../items/myForm";
import Analysis from "../echarts/Analysis";
export default {
  components: {
    myForm,
    Analysis,
  },
  data() {
    return {
      form: [],
      timeUnit: 24,
      hackReset: true,
      cdOptions: {
        options: [
          //会员类指标
          {
            value: "1",
            label: "新用户人数",
          },
          {
            value: "2",
            label: "流失用户人数",
          },
          {
            value: "3",
            label: "活跃用户人数",
          },
        ],
      },
    };
  },
  methods: {
    hackReset1() {
      this.hackReset = false;
      this.$nextTick(() => {
        this.hackReset = true;
      });
    },
    onSubmit(form, cdOptions) {
      this.hackReset1();
      console.log(
        "form++++++++++++++++cdOptions++++++++++++++++++++++++++++++++++++"
      );
      console.log(form);
      this.form = form;
      console.log(cdOptions);
      this.cdOptions.options = cdOptions;
    },
  },
};
</script>

