// 新闻接口

import fetch from '@/utils/fetch'

// 获取轮播列表
export function getNewsList (param) {
  return fetch({
    url: '/admin/paper/list',
    method: 'post',
    data: {
      ...param
    }
  })
}

// 新增新闻
export function addNews (param) {
  return fetch({
    url: '/admin/paper/add',
    method: 'post',
    data: {
      ...param
    }
  })
}
// 编辑新闻
export function editNews (param) {
  return fetch({
    url: '/admin/paper/edit',
    method: 'post',
    data: {
      ...param
    }
  })
}
// 新闻详情
export function getNewsInfo (id) {
  return fetch({
    url: '/admin/paper/info',
    method: 'post',
    data: {
      paperId:id
    }
  })
}
// 删除新闻
export function delNews (id) {
  return fetch({
    url: '/admin/paper/delete',
    method: 'post',
    data: {
      paperId:id
    }
  })
}

