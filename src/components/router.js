import Vue from 'vue'
import Router from 'vue-router'
import AppHome from './AppHome.vue'
import AppForm from './AppForm.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/AppHome',
            name: 'apphome',
            component: AppHome
        },
        {
            path: '/AppForm',
            name: 'appform',
            component: AppForm
        }
    ]
})
