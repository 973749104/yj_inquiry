import Vue from 'vue';
import App from './App';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import store from './store/index';
import router from './router/index';

Vue.config.productionTip = false
Vue.use(iView);

// 路由拦截
router.beforeEach((to, from, next) => {
    // 如果是前往后台的路由判断
    if (to.path === '/admin' || to.path === '/adminLogin') {
        if (sessionStorage.getItem("user")) {
            next();
        } else {
            if (to.path === '/adminLogin') {
                next();
            } else {
                next('/adminLogin');
            }
        }
    } else {
        if (sessionStorage.getItem("user")) {
            if (to.path === '/') {
                next();
            } else {
                next('/')
            }
        } else {
            if (to.path === '/login') {
                next();
            } else {
                next('/login');
            }
        }
    }
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: { App },
    store,
    router,
    template: '<App/>'
})