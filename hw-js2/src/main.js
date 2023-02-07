// import Vue from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'

// import './layout/style.scss';

// Vue.config.productionTip = false

// const app = new Vue(appMain);
// new Vue({
//     router,
//     store,
//     render: h => h(App)
// }).$mount('#app')

// new Vue({
//     router,
//     store,
//     render: h => h(App)
// }).$mount('#app')

import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './layout/style.scss';

createApp(App).use(store).use(router).mount('#app')