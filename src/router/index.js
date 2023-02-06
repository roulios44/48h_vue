import { createWebHistory, createRouter } from "vue-router"
import App from "@/views/App.vue"
import products from "@/views/products.vue"
const routes = [
    {
        path: "/main",
        name: "main",
        component: App,
    },
    {
        parh:"/test",
        name:"name",
        component:products,
    }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router