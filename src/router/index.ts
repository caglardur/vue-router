import Vue from "vue"
import VueRouter, { RouteConfig } from "vue-router"

import HomeView from "../views/HomeView.vue"
import PortfolioPage from "../components/PortfolioPage.vue"
import CustomerDetail from "../components/CustomerDetail.vue"

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    children: [
      {
        path: "/customer-list",
        component: PortfolioPage
      },
      {
        path: "/customer-detail/:id",
        component: CustomerDetail
      }
    ]
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue")
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
