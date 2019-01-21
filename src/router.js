import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import Home from './components/tabbar/Home'
import Member from './components/tabbar/Member'
import Search from './components/tabbar/Search'
import Cart from './components/tabbar/Cart'

export default new Router({
    routes: [
        {name: 'rout', path: '/', redirect: '/home'},
        {name: 'home', path: '/home', component: Home},
        {name: 'member', path: '/member', component: Member},
        {name: 'search', path: '/search', component: Search},
        {name: 'cart', path: '/cart', component: Cart}
    ]
});