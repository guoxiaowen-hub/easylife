import { createRouter, createWebHistory } from 'vue-router'
import detail from "@/views/detail/detail";

const  Home = () => import('../views/home/home')
const  Category = () => import('../views/category/category')
const  MyOrder = () => import('../views/myorder/myorder')
const  Profile = () => import('../views/profile/profile')
const  Detail = () => import('../views/detail/detail')

const Login = () => import('../views/login/login')

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
    path: '/myorder',
    component: MyOrder
  },
  {
    path: '/profile',
    component: Profile,
    children: [
      {
        path: 'login',
        component: Login
      }
    ]
  },
  {
    name: detail,
    path: '/detail/:id',
    component: Detail
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
