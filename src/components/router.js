import Vue from 'vue'
import Router from 'vue-router'
import AppHome from './AppHome.vue'
import AppForm from './AppForm.vue'
import Introduction from "./Introduction";
import PhysicalLayer from "./PhysicalLayer";
import ApplicationLayer from "./ApplicationLayer";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/island'
        },
        {
            path: '/island',
            component: Introduction
        },
        {
            path: '/connection',
            component: PhysicalLayer
        },
        {
            path: '/usability',
            component: ApplicationLayer,
            children: [
                {
                    path: '/',
                    redirect: 'home'
                },
                {
                    path: 'home',
                    component: AppHome
                },
                {
                    path: 'form',
                    component: AppForm
                }
            ]
        },
    ]
})
