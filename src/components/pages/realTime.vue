<template>
  <div class="main">
    <div class="one">
      <el-card>
        <div slot="header" class="clearfix">
          <span> 实时观测项目选择：(最多同时选择4项)</span>
        </div>
        <el-select
          v-model="selects"
          :multiple-limit="4"
          multiple
          placeholder="请选择"
          style="margin: 10px 0; float: left; width: auto"
        >
          <el-option
            v-for="item in options"
            :key="item.index"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <div style="margin: 11px 20px 30px 20px; float: left">
          <el-radio
            v-model="select"
            v-for="item in selects"
            :key="item.index"
            :label="item"
            border
            size="medium"
            >{{ item }}</el-radio
          >
        </div>
      </el-card>
    </div>
    <div class="two">
      <real-time :select="select" v-if="hackReset"></real-time>
    </div>
  </div>
</template>

<style scoped>
.main > div {
  height: auto;
  width: 98%;
  height: auto;
  margin: 10px 1%;
  background-color: #fbfbfb;
}
</style>
<script>
import realTime from "../echarts/realTime.vue";
export default {
  components: {
    realTime,
  },
  data() {
    return {
      hackReset: true,
      selects: ["销售量"],
      select: "销售量",
      options: [
        {
          value: "销售量",
          label: "销售量",
          max: 10000,
          index: "1",
        },
        {
          value: "销售额",
          label: "销售额",
          max: 1000000,
          index: "2",
        },
        {
          value: "订单数",
          label: "订单数",
          max: 200,
          index: "3",
        },
        {
          value: "新增用户数",
          label: "新增用户数",
          max: 20,
          index: "4",
        },
        {
          value: "加入购物车数",
          label: "加入购物车数",
          max: 100,
          index: "5",
        },
      ],
    };
  },
  watch: {
    select: function (val, oldval) {
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
  },
};
</script>

