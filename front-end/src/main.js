import { createApp } from 'vue'
import App from './App.vue'
import './main.css';
import * as VueRouter from 'vue-router';
import homePage from './pages/homePage.vue'
import productsPage from './pages/productsPage.vue'
import signupPage from './pages/signupPage.vue'

createApp(App)

.use(VueRouter.createRouter({
    history: VueRouter.createWebHistory(process.env.BASE_URL),
    routes: [
        { path: '/home', component: homePage },
        { path: '/products', component: productsPage },
        { path: '/signup', component: signupPage }
    ]
}
))
.mount('#app')
