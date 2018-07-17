import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import frequentlyUsed from '@/pages/frequentlyUsed'
import Coalitioninfluence from '../pages/Coalitioninfluence'
import influence from '../pages/influence'
import express from '../pages/express'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        redirect: '/home' // 设置默认主页
    }, {
        path: '/home',
        name: 'home',
        component: home // 主页
    }, {
        path: '/frequentlyUsed',
        name: 'frequentlyUsed',
        component: frequentlyUsed // 常用网站
    }, {
        path: '/Coalitioninfluence',
        name: 'Coalitioninfluence',
        component: Coalitioninfluence // 联盟群
    }, {
        path: '/influence',
        name: 'influence',
        component: influence // 联盟
    }, {
        path: '/express',
        name: 'express',
        component: express // 快递表格
    }]
})
