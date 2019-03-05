import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: ()=>import('@/components/page/main/Index'),
      redirectUrl: '/'
    },
    {
      path: '/auth',
      name: 'Auth',
      component: ()=>import('@/components/page/auth/Index'),
      children: [
        {
          path: 'login',
          name: 'AuthLogin',
          component: ()=>import('@/components/page/auth/Login')
        },
        {
          path: 'signup',
          name: 'AuthSignup',
          component: ()=>import('@/components/page/auth/Signup')
        }
      ]
    },
    {
      path: '/board',
      name: 'Board',
      component: ()=>import('@/components/page/board/Index'),
      children: [
        {
          path: 'list/:page',
          name: 'BoardList',
          component: ()=>import('@/components/page/board/TestList'),
          redirectUrl: '/board/list',
          children: [
            {
              path: ':id',
              name: 'BoardDetail',
              component: ()=>import('@/components/page/board/TestDetail')
            }
          ]
        },
        
      ]
    }
  ]
})
