//axios установлен, но выключен
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Meta from 'vue-meta';
import {Tabs, Tab} from 'vue-tabs-component';
//import axios from 'axios';
//import VueAxios from 'vue-axios';
 
Vue.config.productionTip = false;
Vue.use(Meta);
Vue.component('tabs', Tabs);
Vue.component('tab', Tab);
//Vue.use(VueAxios, axios);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
