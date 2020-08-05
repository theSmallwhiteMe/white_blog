import Vue from 'vue'
import App from './App.vue'

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

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
