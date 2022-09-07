import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

export const HomeRoute: RouteRecordRaw = {
    path:'/',
    component: () => import('@/views/HomePage/index.vue'),
    children: [],
    meta: {
        title:'HomePage'
    }
}

export const UserRoute: RouteRecordRaw = {
    path:'/user',
    component: () => import('@/views/User/index.vue'),
    children: [],
    meta: {
        title:'UserPage'
    }
}
export const CartRoute: RouteRecordRaw = {
    path:'/cart',
    component: () => import('@/views/Cart/index.vue'),
    children: [],
    meta: {
        title:'CartPage'
    }
}


// 无需验证权限的普通路由
export const commonRouter: any[] = [HomeRoute, UserRoute, CartRoute]

const router = createRouter({
    history: createWebHistory(''),
    routes: commonRouter,
})

export default router
