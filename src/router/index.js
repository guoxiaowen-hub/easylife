import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

const Home = () => import('views/home/home')
const Category = () => import('views/category/category')
const MyOrder = () => import('views/myorder/myorder')
const Profile = () => import('views/profile/profile')
const Meishi = () => import('views/meishi/meishi')
const Detail = () => import('views/detail/detail')
const Deal = () => import('views/deal/deal')
const Address = () => import('views/raddress/raddress')
const Shop = () => import('views/shop/shop')
const Order = () => import('views/order/order')
const NewOrder = () => import('views/neworder/neworder')
const Comment = () => import('views/comment/comment')
const MyComment = () => import('views/mycomment/mycomment')
const OrderUse = () => import('views/orderuse/orderuse')
const Search = () => import('views/search/search')

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
    path: '/meishi/:id',
    component: Meishi
  },
  {
    path: '/detail/:id',
    component: Detail
  },
  {
    path: '/deal/:id',
    component: Deal
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
  },
  {
    path: '/comment/:orderid',
    component: Comment
  },
  {
    path: '/mycomment',
    component: MyComment
  },
  {
    path: '/orderuse/:orderid',
    component: OrderUse
  },
  {
    path: '/search',
    component: Search
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
