import Vue from 'vue'
import Router from 'vue-router'

const _import = require('./_import_' + process.env.NODE_ENV)
// in development env not use Lazy Loading,because Lazy Loading too many pages will cause webpack hot update too slow.so only in production use Lazy Loading
/* layout */
import Layout from '../components/Layout'

Vue.use(Router)

/**
 * icon : the icon show in the sidebar
 * hidden : if `hidden:true` will not show in the sidebar
 * redirect : if `redirect:noredirect` will not redirct in the levelbar
 * noDropdown : if `noDropdown:true` will not has submenu in the sidebar
 * meta : `{ role: ['admin'] }`  will control the page role
 **/
export const constantRouterMap = [
  {path: '/404', component: _import('404'), hidden: true},
  {
    path: '/',
    component: Layout,
    hidden: true,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: _import('Home'),
        name: 'Home',
      },
      // 平台介绍
      {
        path: 'intro',
        component: _import('Introduce'),
        name: 'Introduce',
      },
      // 上链项目
      {
        path: 'production',
        component: _import('Production'),
        name: 'Production',
      },
      // CHAIN DAPP
      {
        path: 'timeLine',
        component: _import('TimeLine'),
        name: 'TimeLine',
      },
      {
        path: 'download',
        component: _import('Download'),
        name: 'Download',
      },
      // 联系我们
      {
        path: 'connect',
        component: _import('ConnectUs'),
        name: 'ConnectUs',
      },
      // 合作资源
      {
        path: 'source',
        component: _import('Source')
      },
      // 节点
      {
        path: 'assist',
        component: _import('Assist')
      },
      // 下载
      {
        path: 'download',
        component: _import('Download')
      }
    ]
  }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  // {
  //   path: '/carouselManage',
  //   component: Layout,
  //   redirect: '/carousel/index',
  //   name: 'CarouselManage',
  //   icon: 'operation',
  //   children: [
  //     {
  //       path: 'carousel',
  //       component: _import('carousel/carousel/index'),
  //       name: 'CarouselList',
  //       childrenHidden: true,
  //       redirect: '/carouselManage/carousel/index',
  //       children: [
  //         {path: 'index', component: _import('carousel/carousel/carousel'), name: '', hidden: true},
  //         {path: 'add', component: _import('carousel/carousel/add'), name: 'AddCarousel', hidden: true},
  //         // {path: 'edit', component: _import('carousel/carousel/edit'), name: 'EditCarousel', hidden: true},
  //       ]
  //     }
  //   ]
  // },
  {path: '*', redirect: '/', component: _import('404'), hidden: true},

]
