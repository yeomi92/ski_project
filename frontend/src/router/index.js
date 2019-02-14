import Vue from 'vue'
import Router from 'vue-router'
import MovieIndexPage from '@/components/MovieIndexPage'
import MovieShowPage from '@/components/MovieShowPage'

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
      component: ()=>import('../components/page/auth/Index'),
      children: [
        {
          path: '/',
          name: 'AuthLogin',
          component: ()=>import('../components/page/auth/Login')
        }
      ]
    },
    {
      path: '/board',
      name: 'Board',
      component: ()=>import('../components/page/board/Index'),
      children: [
        {
          path: 'list/:page',
          name: 'BoardList',
          component: ()=>import('../components/page/board/TestList'),
          redirectUrl: '/board/list',
          children: [
            {
              path: ':id',
              name: 'BoardDetail',
              component: ()=>import('../components/page/board/TestDetail')
            }
          ]
        },
        
      ]
    },
    {
      path: '/movie',
      name: 'MovieIndexPage',
      component: MovieIndexPage
    },
    {
      path: '/movie/:id',
      name: 'MovieShowPage',
      component: MovieShowPage
    }
  ]
})
