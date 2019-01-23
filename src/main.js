import Vue from 'vue'
import App from './App.vue'

import Resource from 'vue-resource'
Vue.use(Resource);
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
import './lib/mui/fonts/mui-icons-extra.ttf'

//下面都是mint-ui的导入
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
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
import { Button } from 'mint-ui';
Vue.component(Button.name, Button);
import { Field } from 'mint-ui';
Vue.component(Field.name, Field);


Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
