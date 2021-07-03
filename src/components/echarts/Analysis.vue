<template>
  <el-card>
    <div id="myChart" style="width: 100%; height: 400px"></div>
  </el-card>
</template>
<script>
import "./shine.js";
export default {
  props: ["form", "cdOptions"],
  data() {
    return {
      hackReset: true,
      source: [],
      series: [],
      text: 0,
      timeUnit: 24,
      chartsData: [],
    };
  },
  watch: {
    timeUnit: function (val, oldval) {
      this.drawLine();
    },
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    async setData() {
      let form = this.form;
      let cdOptions = this.cdOptions.options;
      console.log(cdOptions);
      if (form.length < 3) {
        console.log("form is null");
        return;
      }
      let date0 = form.date[0].getTime();
      let date1 = form.date[1].getTime();
      let timeUnit = this.timeUnit;
      let k = (date1 - date0) / (3600000 * timeUnit) + 1;
      var x = ["product"];
      var y = [];
      let data = [];
      let series = [];
      var optionlabels = [];
      this.text = k;
      console.log(form.options.length);
      //得到类型数据
      for (let i = 0; i < form.options.length; i++) {
        series.push({ type: "bar" });
        var optionlabel = cdOptions[parseInt(form.options[i]) - 1].label;
        x.push(optionlabel);

        optionlabels.push(optionlabel);
      }
      data.push(x);

      //得到x轴的时间坐标
      for (let i = k; i > 0; i--) {
        if (timeUnit < 2) {
          let dates =
            new Date(
              form.date[1] - i * 3600000 * timeUnit
            ).toLocaleDateString() +
            ":" +
            new Date(form.date[1] - i * 1000 * 60 * 60 * timeUnit).getHours();
          await y.push(dates);
        } else if (timeUnit < 30) {
          let dates = new Date(
            form.date[1] - i * 3600000 * timeUnit
          ).toLocaleDateString();
          await y.push(dates);
        } else {
          let dates =
            new Date(
              form.date[1] - i * 3600000 * timeUnit
            ).toLocaleDateString() +
            "-" +
            new Date(
              form.date[1] - (i - 1) * 3600000 * timeUnit - 3600000 * 24
            ).toLocaleDateString();
          await y.push(dates);
        }
        //获取后台数据
        for (let m = 0; m < optionlabels.length; m++) {
          let _this = this;
          var _time = 1 + Math.round(Math.random() * 9);
          console.log(_time);
          var params = { time: _time };
          await _this.$axios
            .post("http://localhost:8989/analysis", params)
            .then((response) => {
              // console.log(response);
              // console.log(response.data[0].num);
              // console.log(response.data.length);

              for (let j = 0; j < response.data.length; j++) {
                if (response.data[j].event == optionlabels[m]) {
                  console.log(response.data[j].event);
                  y.push(response.data[j].num);
                }
              }
              console.log(y);
            });
        }
        data.push(y);
        console.log(data);
        y = [];
      }
      this.source = data;
      this.series = series;
    },
    async drawLine() {
      await this.setData();
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(
        document.getElementById("myChart"),
        "shine"
      );

      //异步加载数据
      //转转转
      myChart.showLoading();
      // $.get('data.json').done(function (data) {
      myChart.hideLoading();
      //  myChart.setOption(...);
      // });

      let option = {
        legend: {},
        tooltip: {},
        dataset: {
          // 这里指定了维度名的顺序，从而可以利用默认的维度到坐标轴的映射。
          // 如果不指定 dimensions，也可以通过指定 series.encode 完成映射，参见后文。
          source: this.source,
          //              [
          //              ['product', '直接访问','邮件营销','联盟广告'],
          //              ["2017-10-10",320, 332, 301],
          //              ['2017-10-11',120, 132, 101],
          //              ['2017-10-12',220, 182, 191]
          //            ]
        },
        xAxis: { type: "category" },
        yAxis: {},
        series: this.series,
      };
      // 绘制图表
      myChart.setOption(option);
    },
  },
};
</script>
<style scoped>
.el-checkbox-group {
  float: left;
}
.el-checkbox-group {
  margin: 0 0 10px 0;
}
</style>
