// 轮播图接口

import fetch from '@/utils/fetch'

// 获取项目表
export function getItemList (param) {
  return fetch({
    url: '/admin/item/list',
    method: 'post',
    data: {
      ...param
    }
  })
}

// 新增项目
export function addItem (param) {
  return fetch({
    url: '/admin/item/add',
    method: 'post',
    data: {
      ...param
    }
  })
}
// 项目初始化 只传入项目类型 自动初始化一个项目信息
export function initItem (type) {
  return fetch({
    url: '/admin/item/init',
    method: 'post',
    data: {
      type
    }
  })
}
// 项目详情
export function getItemInfo (id) {
  return fetch({
    url: '/admin/item/info',
    method: 'post',
    data: {
      // itemId:id
    }
  })
}
// 编辑项目
export function editItem (param) {
  return fetch({
    url: '/admin/item/edit',
    method: 'post',
    data: {
      ...param
    }
  })
}
// 删除项目
export function delItem (id) {
  return fetch({
    url: '/admin/item/delete',
    method: 'post',
    data: {
      id
    }
  })
}

