import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index'

Vue.use(Router)

const requireAuth = ()=> (to, from, next) => {
  if(!store.state.authInfo.active){
    alert('접근방지')
    return next('/auth/login');
  }
  return next();
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      name: 'Main',
      component: ()=>import('@/views/page/Index'),
      redirectUrl: '/',
      children: [
        {
          path: '/',
          name: 'Home',
          component: ()=>import('@/views/page/main/Index'),
          redirectUrl: '/',
        },
        {
          path: 'auth',
          name: 'Auth',
          component: ()=>import('@/views/page/auth/Index'),
          children: [
            {
              path: 'login',
              name: 'AuthLogin',
              component: ()=>import('@/views/page/auth/Login')
            },
            {
              path: 'signup',
              name: 'AuthSignup',
              component: ()=>import('@/views/page/auth/Signup')
            },
            {
              path: 'mypage',
              name: 'AuthMypage',
              component: ()=>import('@/views/page/auth/Mypage'),
              beforeEnter: requireAuth()
            }
          ]
        },
        {
          path: '/board',
          name: 'Board',
          component: ()=>import('@/views/page/board/Index'),
          children: [
            {
              path: 'list/:page',
              name: 'BoardList',
              component: ()=>import('@/views/page/board/TestList'),
              redirectUrl: '/board/list',
              children: [
                {
                  path: ':id',
                  name: 'BoardDetail',
                  component: ()=>import('@/views/page/board/TestDetail')
                }
              ]
            },
            
          ]
        }
      ]
    },
   
    
  ]
})
