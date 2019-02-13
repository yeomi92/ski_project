import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import MovieIndexPage from '@/components/MovieIndexPage'
import MovieShowPage from '@/components/MovieShowPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Auth',
      component: ()=>import('./components/page/auth/Index'),
      redirectUrl: '/',
      children: [
        {
          path: '/',
          name: 'AuthLogin',
          component: ()=>import('./components/page/auth/Login')
        }
      ]
    },
    {
      path: '/board',
      name: 'Board',
      component: ()=>import('./components/page/board/Index'),
      children: [
        {
          path: '/',
          name: 'BoardList',
          component: ()=>import('./components/page/board/TestList'),
          children: [
            {
              path: ':id',
              name: 'BoardDetail',
              component: ()=>import('./components/page/board/TestDetail')
            }
          ]
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
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
