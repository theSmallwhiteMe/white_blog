import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import { state, mutations } from './library/store'
Vue.use(Vuex)
const store = new Vuex.Store({
  state,
  mutations
})

import "./static/css/common.css"

//@start vue-router
import VueRouter from "vue-router";
Vue.use(VueRouter)
import {router} from './library/router'
//@end

//@start ant-vue
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';
import './library/ant-new-css.less'
Vue.use(Antd);
//@end



import User from './library/user'
Vue.prototype.User = User

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
