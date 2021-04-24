import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('views/home/home')
const Category = () => import('views/category/category')
const MyOrder = () => import('views/myorder/myorder')
const Profile = () => import('views/profile/profile')
const Detail = () => import('views/detail/detail')
const Address = () => import('views/raddress/raddress')
const Shop = () => import('views/shop/shop')
const Order = () => import('views/order/order')
const NewOrder = () => import('views/neworder/neworder')

const Login = () => import('views/login/login')
const Setting = () => import('views/setting/setting')
const NameChange = () => import("views/setting/childComps/NameChange")
const BirthdayChange = () => import("views/setting/childComps/BirthdayChange")
const AddressChange = () => import("views/raddress/childComps/RAddressChange")

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
      },
      {
        path: 'setting',
        component: Setting,
        children: [
          {
            path: 'namechange',
            component: NameChange
          },
          {
            path: 'birthdaychange',
            component: BirthdayChange
          }
        ]
      },
    ]
  },
  {
    path: '/detail/:id',
    component: Detail
  },
  {
    path: '/raddress',
    component: Address,
    children: [
      {
        path: 'addresschange/:index',
        component: AddressChange,
      }
    ]
  },
  {
    path: '/order/:orderid',
    component: Order
  },
  {
    path: '/shop',
    component: Shop
  },
  {
    path: '/neworder',
    component: NewOrder
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
