import Vue from 'vue';
import App from './App';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import store from './store/index';
import router from './router/index';

Vue.config.productionTip = false
Vue.use(iView);
/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: { App },
    store,
    router,
    template: '<App/>'
})