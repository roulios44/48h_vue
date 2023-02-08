import { createWebHistory, createRouter } from "vue-router"
import App from "@/views/App.vue"
import products from "@/views/products.vue"
import test from"@/views/test.vue"
import admin from "@/views/Admin.vue"
import seller from "@/views/Seller.vue"
import items from "@/views/items.vue"
import login from "@/views/login.vue"
import register from "@/views/Register.vue"
import adminPanel from "@/views/addIp.vue"
import sellerPanel from "@/views/SellerPanel"
const routes = [
    {
        path: "/main",
        name: "main",
        component: App,
    },
    {
        path:"/products",
        name:"products",
        component:products,
    },
    {
        path:"/test",
        name:"test",
        component:test,
    },
    {
        path:"/admin",
        name:"admin",
        component:admin,
    },
    {
        path:"/seller",
        name:"seller",
        component:seller,
    },
    {
        path:"/items",
        name:"items",
        component: items,
    },
    {
        path:"/register",
        name:"register",
        component:register,
    },
    {
        path:"/login",
        name:"login",
        component:login,
    },
    {
        path:"/admin",
        name:"admin",
        component: adminPanel,
    },
    {
        path:"/sellerPanel",
        name:"sellerPanel",
        component:sellerPanel,
    },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router