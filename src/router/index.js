import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import newDetail from '@/components/newDetail'
import TestPost from '@/components/post'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/newDetail/:id',
            name: 'newDetail',
            component: newDetail
        },
        {
            path: '/post',
            name: 'TestPost',
            component: TestPost
        }
    ]
})