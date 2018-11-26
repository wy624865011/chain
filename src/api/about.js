// 关于我们接口

import fetch from '@/utils/fetch'

// 获取项目表
export function getAboutList (param) {
  return fetch({
    url: '/admin/about/list',
    method: 'post',
    data: {
      ...param
    }
  })
}

// 新增项目
export function addAbout (param) {
  return fetch({
    url: '/admin/about/add',
    method: 'post',
    data: {
      ...param
    }
  })
}
// 项目初始化 只传入项目类型 自动初始化一个项目信息
export function initAbout (type) {
  return fetch({
    url: '/admin/about/init',
    method: 'post',
    data: {
      type
    }
  })
}
// 项目详情
export function getAboutInfo (id) {
  return fetch({
    url: '/admin/about/info',
    method: 'post',
    data: {
      // aboutId:id
    }
  })
}
// 编辑项目
export function editAbout (param) {
  return fetch({
    url: '/admin/about/edit',
    method: 'post',
    data: {
      ...param
    }
  })
}
// 删除项目
export function delAbout (id) {
  return fetch({
    url: '/admin/about/delete',
    method: 'post',
    data: {
      id
    }
  })
}

