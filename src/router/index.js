import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Login from '@/components/Login'
import Layout from '@/components/Layout'
import Welcome from '@/components/pages/Welcome'
import realTime from '@/components/pages/realTime'
import appRank from '@/components/pages/appRank'
import Sex from '@/components/pages/Sex'
import userBehavior from "@/components/pages/userBehavior"
import eventAnalysis from "@/components/pages/eventAnalysis"
import pageAnalysis from "@/components/pages/pageAnalysis"
import userAnalysis from "@/components/pages/userAnalysis"


Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'Home',
      component: Home,
      path: '/',
    },
    {
      name: 'Login',
      component: Login,
      path: '/Login'
    },
    {
      name: 'Layout',
      component: Layout,
      path: '/Layout',
      children: [
        {
          name: 'Welcome',
          component: Welcome,
          path: '/',
        },
        {
          name: 'realTime',
          component: realTime,
          path: '/realTime',
        },
        {
          name: 'appRank',
          component: appRank,
          path: '/appRank',
        },
        {
          name: 'Sex',
          component: Sex,
          path: '/Sex',
        },
        {
          name: 'userBehavior',
          component: userBehavior,
          path: '/userBehavior',
        },
        {
          name: 'eventAnalysis',
          component: eventAnalysis,
          path: '/eventAnalysis',
        },
        {
          name: 'pageAnalysis',
          component: pageAnalysis,
          path: '/pageAnalysis',
        },
        {
          name: 'userAnalysis',
          component: userAnalysis,
          path: '/userAnalysis',
        }
      ]
    }
  ]
})
