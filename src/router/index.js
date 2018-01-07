import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/containers/Home'
import CreateCategory from '@/containers/CreateCategory'
import CreateTask from '@/containers/CreateTask'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/category/new',
      name: 'Create Category',
      component: CreateCategory
    },
    {
      path: '/task/new',
      name: 'Create Task',
      component: CreateTask,
      props: (route) => ({ category: route.query.category })
    }
  ]
})
