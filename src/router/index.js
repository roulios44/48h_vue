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
        name:"name",
        component:products,
    },
    {
        parh:"/test",
        name:"name",
        component:test,
    }
    
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router