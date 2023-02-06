import { createWebHistory, createRouter } from "vue-router"
import App from "@/views/App.vue"
const routes = [
    {
        path: "/main",
        name: "main",
        component: App,
    },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router