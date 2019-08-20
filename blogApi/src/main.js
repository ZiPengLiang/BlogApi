import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import store from './store'
Vue.use(mavonEditor);
Vue.use(ElementUI);

Vue.prototype.axios = axios;
axios.defaults.headers.post["Content-Type"] = "application/json; charset=UTF-8";
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    if (to.path == '/login') {
        console.log('666')
        store.commit('changeLoginStatus', false);
        next()
    } else {
        store.commit('changeLoginStatus', true);
        next()
    }
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})