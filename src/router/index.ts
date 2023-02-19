import {createRouter,createWebHistory} from "vue-router";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import("../components/backer/Home.vue"),
            redirect: '/index',
            children: [
                {
                    path: '/test',
                    name: '测试',
                    component: () => import("../components/backer/test.vue")
                },
                {
                    path: '/index',
                    name: '首页',
                    component: () => import("../components/backer/Chart.vue")
                }
            ]
        }

    ]
})
export default router;