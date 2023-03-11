import {createRouter,createWebHistory} from "vue-router";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/backer',
            component: () => import("../components/backer/Home.vue"),
            redirect: '/backer/index',
            children: [
                {
                    path: 'user',
                    name: '用户管理',
                    component: () => import("../components/backer/User.vue")
                },
                {
                    path: 'notice',
                    name: '公告管理',
                    component: () => import("../components/backer/Notice.vue")
                },
                {
                    path: 'index',
                    name: '后台首页',
                    component: () => import("../components/backer/Chart.vue")
                },
                {
                    path: 'application',
                    name: '应用管理',
                    component: () => import("../components/backer/Application.vue")
                },
                {
                    path: 'application/edit',
                    name: '应用详情编辑',
                    component: () => import("../components/backer/ApplicationEdit.vue")
                },
                {
                    path: 'type',
                    name: '分类管理',
                    component: () => import("../components/backer/Type.vue")
                },
                {
                    path: 'settings',
                    name: '系统设置',
                    component: () => import("../components/backer/Setting.vue")
                },{
                    path: 'comments',
                    name: '评论管理',
                    component: () => import("../components/backer/Comment.vue")
                }
            ]
        },{
            path: '/frontTemplate',
            component: () => import("../components/front/frontTemplate.vue"),
            redirect: '/',
            children: [
                {
                    path: '/',
                    name: '首页',
                    component: () => import("../components/front/Index.vue")
                },
                {
                    path: '/application',
                    name: '软件',
                    component: () => import("../components/front/Application.vue")
                },
                {
                    path: '/application/detail',
                    name: '软件详情',
                    component: () => import("../components/front/Detail.vue")
                }
            ]
        },{
            path: '/index',
            redirect: '/'
        }

    ]
})
export default router;