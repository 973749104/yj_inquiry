import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _lazyLoad = file => () =>
    import ('@/views/' + file + '.vue');

const routers = [
    { path: '/', component: _lazyLoad('index'), name: 'home' },
    { path: '/login', component: _lazyLoad('login'), name: 'login' },
    { path: '/admin', component: _lazyLoad('admin'), name: 'admin' }
]

export default new Router({
    routes: routers
})