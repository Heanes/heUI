const nav = {
  'zh-cn': [
    {
      name: '更新日志',
      path: '/component/changelog'
    },
    {
      name: '开发指南',
      children: [
        {
          name: '安装',
          path: '/component/installation'
        },
        {
          name: '快速上手',
          path: '/component/start'
        }
      ]
    },
    {
      name: '组件',
      groups: [
        {
          groupName: 'Basic 基础',
          groupList: [
            {
              name: 'Layout 布局',
              path: '/component/layout'
            },
            {
              name: 'Color 色彩',
              path: '/component/color'
            },
            {
              name: 'Icon 图标',
              path: '/component/icon'
            },
            {
              name: 'Button 按钮',
              path: '/component/button'
            }
          ]
        },
        {
          groupName: 'Form 表单',
          groupList: [
            {
              name: 'Input 输入框',
              path: '/component/input'
            },
            {
              name: 'Select 选择器',
              path: '/component/select'
            },
            {
              name: 'Form 表单',
              path: '/component/form'
            }
          ]
        },
        {
          groupName: 'Data 数据',
          groupList: [
            {
              name: 'Table 表格',
              path: '/component/table'
            },
            {
              name: 'Pagination 分页',
              path: '/component/pagination'
            },
            {
              name: 'Tabs 标签页',
              path: '/component/tabs'
            }
          ]
        }
      ]
    }
  ]
};
export {
  nav
};
