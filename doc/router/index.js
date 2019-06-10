import Vue from 'vue';
import Router from 'vue-router';
import Index from '../views/index/Index.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/demo.html',
      name: 'demo',
      component: () => import(/* webpackChunkName: "demo" */ '../views/demo/Demo.vue')
    },
    {
      path: '/about.html',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/about/About.vue')
    },
    {
      path: '/component.html',
      name: 'pageComponent',
      component: () => import(/* webpackChunkName: "component" */ '../views/component/PageComponent.vue'),
      children: [
        {
          path: 'color.html',
          component: () => import(/* webpackChunkName: "color" */ '../views/color/Color.vue')
        },
        {
          path: 'button.html',
          component: () => import(/* webpackChunkName: "button" */ '../views/button/Button.vue')
        },
        {
          path: 'pagination.html',
          component: () => import(/* webpackChunkName: "pagination" */ '../views/pagination/Pagination.vue')
        }
      ]
    }
  ],
  // 记录之前保存的滚动条位置
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
