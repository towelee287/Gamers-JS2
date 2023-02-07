import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'

const routes = [{
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/product/:id',
    name: 'ProductView',
    component: ProductView,
    props: true
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router