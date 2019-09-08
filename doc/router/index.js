import Vue from 'vue';
import Router from 'vue-router';
import PageIndex from '../views/index/PageIndex.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: PageIndex
    },
    {
      path: '/guide',
      name: 'guide',
      component: () => import(/* webpackChunkName: "guide" */ '../views/guide/Guide.vue')
    },
    {
      path: '/component',
      // name: 'pageComponent',
      component: () => import(/* webpackChunkName: "component" */ '../views/component/PageComponent.vue'),
      children: [
        {
          path: '/',
          component: () => import(/* webpackChunkName: "pageComponentIndex" */ '../views/component/ComponentIndex.vue')
        },
        {
          path: 'changelog',
          component: () => import(/* webpackChunkName: "changelog" */ '../views/changelog/ChangeLog.vue')
        },
        {
          path: 'installation',
          component: () => import(/* webpackChunkName: "installation" */ '../views/installation/Installation.vue')
        },
        {
          path: 'start',
          component: () => import(/* webpackChunkName: "start" */ '../views/start/Start.vue')
        },
        // basic 基础
        {
          path: 'color',
          component: () => import(/* webpackChunkName: "color" */ '../views/color/Color.vue')
        },
        {
          path: 'icon',
          component: () => import(/* webpackChunkName: "icon" */ '../views/icon/Icon.vue')
        },
        {
          path: 'layout',
          component: () => import(/* webpackChunkName: "layout" */ '../views/layout/layout.vue')
        },
        {
          path: 'button',
          component: () => import(/* webpackChunkName: "button" */ '../views/button/Button.vue')
        },
        {
          path: 'scrollbar',
          component: () => import(/* webpackChunkName: "scrollbar" */ '../views/scrollbar/Scrollbar.vue')
        },
        // # form 表单
        {
          path: 'input',
          component: () => import(/* webpackChunkName: "input" */ '../views/input/Input.vue')
        },
        // ## select 下拉选项
        {
          path: 'select',
          component: () => import(/* webpackChunkName: "select" */ '../views/select/Select.vue')
        },
        {
          path: 'form',
          component: () => import(/* webpackChunkName: "form" */ '../views/form/Form.vue')
        },
        // # data 数据
        // ## 分页
        {
          path: 'pagination',
          component: () => import(/* webpackChunkName: "pagination" */ '../views/pagination/Pagination.vue')
        },
        {
          path: 'table',
          component: () => import(/* webpackChunkName: "table" */ '../views/table/Table.vue')
        },
        {
          path: 'modal',
          component: () => import(/* webpackChunkName: "modal" */ '../views/tabs/Tabs.vue')
        },
        // notice 提示
        {
          path: 'message',
          component: () => import(/* webpackChunkName: "message" */ '../views/message/Message.vue')
        },
        // navigation 导航
        {
          path: 'navigation',
          component: () => import(/* webpackChunkName: "navigation" */ '../views/navigation/Navigation.vue')
        },
        {
          path: 'tabs',
          component: () => import(/* webpackChunkName: "tabs" */ '../views/tabs/Tabs.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ '../views/about/About.vue')
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
