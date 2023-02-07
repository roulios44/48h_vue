import { createWebHistory, createRouter } from "vue-router"
import App from "@/views/App.vue"
import products from "@/views/products.vue"
import test from"@/views/test.vue"
import admin from "@/views/Admin.vue"
import seller from "@/views/Seller.vue"
import items from "@/views/items.vue"
import login from "@/views/login.vue"
import register from "@/views/Register.vue"
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
        name:"name",
        component:admin,
    },
    {
        path:"/seller",
        name:"name",
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
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router