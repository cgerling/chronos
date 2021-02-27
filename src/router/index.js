import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/containers/Home'
import CreateCategory from '@/containers/CreateCategory'
import CreateTask from '@/containers/CreateTask'
import CategoryDetails from '@/containers/CategoryDetails'

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
      path: '/category/:category',
      name: 'Category Details',
      component: CategoryDetails,
      props: true
    },
    {
      path: '/task/new',
      name: 'Create Task',
      component: CreateTask,
      props: (route) => ({ category: route.query.category })
    }
  ]
})
