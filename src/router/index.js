import { createWebHistory, createRouter } from "vue-router"
import App from "@/views/App.vue"
import products from "@/views/products.vue"
import test from"@/views/test.vue"
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
    }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router