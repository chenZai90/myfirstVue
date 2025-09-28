import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import BasicsDemo from '../views/BasicsDemo.vue'
import ComputedDemo from '../views/ComputedDemo.vue'
import WatchersDemo from '../views/WatchersDemo.vue'
import ConditionalDemo from '../views/ConditionalDemo.vue'
import ListDemo from '../views/ListDemo.vue'
import EventsDemo from '../views/EventsDemo.vue'
import FormsDemo from '../views/FormsDemo.vue'
import ComponentsDemo from '../views/ComponentsDemo.vue'
import LifecycleDemo from '../views/LifecycleDemo.vue'
import TemplateDemo from '../views/TemplateDemo.vue'

// 路由配置
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: '首页 - Vue3学习项目' }
  },
  {
    path: '/basics',
    name: 'BasicsDemo',
    component: BasicsDemo,
    meta: { title: '响应式基础 - Vue3学习项目' }
  },
  {
    path: '/computed',
    name: 'ComputedDemo',
    component: ComputedDemo,
    meta: { title: '计算属性 - Vue3学习项目' }
  },
  {
    path: '/watchers',
    name: 'WatchersDemo',
    component: WatchersDemo,
    meta: { title: '侦听器 - Vue3学习项目' }
  },
  {
    path: '/conditional',
    name: 'ConditionalDemo',
    component: ConditionalDemo,
    meta: { title: '条件渲染 - Vue3学习项目' }
  },
  {
    path: '/list',
    name: 'ListDemo',
    component: ListDemo,
    meta: { title: '列表渲染 - Vue3学习项目' }
  },
  {
    path: '/events',
    name: 'EventsDemo',
    component: EventsDemo,
    meta: { title: '事件处理 - Vue3学习项目' }
  },
  {
    path: '/forms',
    name: 'FormsDemo',
    component: FormsDemo,
    meta: { title: '表单绑定 - Vue3学习项目' }
  },
  {
    path: '/components',
    name: 'ComponentsDemo',
    component: ComponentsDemo,
    meta: { title: '组件基础 - Vue3学习项目' }
  },
  {
    path: '/lifecycle',
    name: 'LifecycleDemo',
    component: LifecycleDemo,
    meta: { title: '生命周期 - Vue3学习项目' }
  },
  {
    path: '/template',
    name: 'TemplateDemo',
    component: TemplateDemo,
    meta: { title: '模板语法 - Vue3学习项目' }
  }
]

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes
})

// 路由守卫 - 设置页面标题
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router