// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App'

import VueRouter from 'vue-router'
import router from './router/index'
// 引入echarts
import * as echarts from 'echarts'
//引入element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//引入axios
import axios from 'axios';

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

Vue.prototype.$echarts = echarts;
Vue.use(ElementUI);
Vue.use(VueRouter);
//引入echarts主题
import 'echarts/theme/shine.js'
import 'echarts/theme/macarons.js'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')