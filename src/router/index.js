import { createRouter, createWebHistory } from 'vue-router'

const  Home = () => import('../views/home/home')
const  Category = () => import('../views/category/category')
const  Order = () => import('../views/order/order')
const  Profile = () => import('../views/profile/profile')

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/order',
    component: Order
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
