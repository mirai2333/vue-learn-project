import Vue from 'vue'
import App from './App.vue'

import Resource from 'vue-resource'
Vue.use(Resource);
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'mint-ui/lib/style.css'
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
import { Tabbar, TabItem } from 'mint-ui';
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
import { TabContainer, TabContainerItem } from 'mint-ui';
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
import { Cell } from 'mint-ui';
Vue.component(Cell.name, Cell);


Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
