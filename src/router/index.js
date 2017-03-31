import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import chat from '@/components/chat'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },{
      path: '/hello',
      name: 'Hello',
      component: Hello
    },{
      path: '/chat/:name',
      name: 'chat',
      component: chat
    }
  ]
})
