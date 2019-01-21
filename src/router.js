import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import Home from './components/Home'

export default new Router({
    routes: [
        {name: 'rout', path: '/', redirect: '/home'},
        {name: 'home', path: '/home', component: Home}
    ]
});