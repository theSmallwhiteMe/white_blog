import VueRouter from "vue-router"

import Index from '../views/index'
import Login from '../views/login'
import Register from '../views/register'

const routers = [
    {
        path:'/',
        component:Index
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/register',
        component:Register
    },
]

export const router = new VueRouter({
    mode:'history',
    routes:routers
})