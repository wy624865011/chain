// 轮播图接口

import fetch from '@/utils/fetch'

// 获取资料表
export function getAttachList (param) {
  return fetch({
    url: '/admin/attach/list',
    method: 'post',
    data: {
      ...param
    }
  })
}

// 新增资料
export function addAttach (param) {
  return fetch({
    url: '/admin/attach/add',
    method: 'post',
    data: {
      ...param
    }
  })
}
// 资料详情
export function getAttachInfo (id) {
  return fetch({
    url: '/admin/attach/info',
    method: 'post',
    data: {
      attachId:id
    }
  })
}
// 编辑资料
export function editAttach (param) {
  return fetch({
    url: '/admin/attach/add',
    method: 'post',
    data: {
      ...param
    }
  })
}
// 删除资料
export function delAttach (id) {
  return fetch({
    url: '/admin/attach/delete',
    method: 'post',
    data: {
      attachId: id
    }
  })
}

