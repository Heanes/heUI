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
            }
          ]
        },
        {
          groupName: 'Notice 提示',
          groupList: [
            {
              name: 'Alert 警告提示',
              path: '/component/alert'
            },
            {
              name: 'Message 消息提示',
              path: '/component/message'
            },
            {
              name: 'Notice 通知',
              path: '/component/notice'
            }
          ]
        },
        {
          groupName: 'Navigation 导航',
          groupList: [
            {
              name: 'Tabs 标签页',
              path: '/component/tabs'
            },
            {
              name: 'Navigation 导航',
              path: '/component/navigation'
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
