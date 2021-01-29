import '@/assets/main.scss';
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Svetofor from './components/svetofor'
import store from './store'

const routes = [
  {
    path: '',
    component: Svetofor,
    props: { 
        mainColor: "Brown",
        seconds: 10,
    }
  },
  {
      path: '/red',
      component: Svetofor,
      props: { 
          mainColor: "Brown",
          seconds: 5,
      }
  },
  {
      path: '/yellow',
      component: Svetofor,
      props: { 
          mainColor: "Goldenrod",
          seconds: 3,
      }
  },
  {
      path: '/green',
      component: Svetofor,
      props: { 
          mainColor: "OliveDrab",
          seconds: 5,
      }
  },
  {
    path: "/not-found",
    alias: '*',
    component: Svetofor,
    props: { 
        mainColor: "Brown",
        seconds: 10,
    }
  },
]

const router = new VueRouter({
  routes,
  mode: "history",
});

Vue.config.productionTip = false
Vue.use(VueRouter)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
