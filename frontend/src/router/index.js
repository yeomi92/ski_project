import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index'
import {isLogined} from '@/utils/auth'

Vue.use(Router)

const requireAuth = ()=> (to, from, next) => {
  console.log(store.state)
  if(isLogined()){
    return next();
  }else{
    alert('접근방지')
    next(('/auth/login'));
  }
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
              component: ()=>import('@/views/page/board/BoardList'),
              redirectUrl: '/board/list',
              children: [
                {
                  path: ':id',
                  name: 'BoardDetail',
                  component: ()=>import('@/views/page/board/BoardDetail')
                }
              ]
            },
            {
              path: 'writing',
              name: 'BoardWriting',
              component: ()=>import('@/views/page/board/Writing')
            }
          ]
        },
        {
          path: '/sns',
          name: 'Sns',
          component: ()=>import('@/views/page/sns/Index'),
          children: [
            {
              path: 'list',
              name: 'SnsList',
              component: ()=>import('@/views/page/sns/List')
            },
            {
              path: 'post/:id',
              name: 'SnsDetail',
              component: ()=>import('@/views/page/sns/Detail')
            },
            {
              path: 'writing',
              name: 'SnsWriting',
              component: ()=>import('@/views/page/sns/Writing')
            }
          ]
        }
      ]
    },
   
    
  ]
})
