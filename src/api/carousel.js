// 轮播图接口

import fetch from '@/utils/fetch'

// 获取轮播列表
export function getCarouselList (param) {
  return fetch({
    url: '/admin/banner/list',
    method: 'post',
    data: {
      ...param
    }
  })
}
// 获取轮播图
export function getCarouselInfo (id) {
  return fetch({
    url: '/admin/banner/info',
    method: 'post',
    data: {
      bannerId: id
    }
  })
}

// 新增轮播图
export function addCarousel (param) {
  return fetch({
    url: '/admin/banner/add',
    method: 'post',
    data: {
      ...param
    }
  })
}
// 编辑轮播图
export function editCarousel (param) {
  return fetch({
    url: '/admin/banner/edit',
    method: 'post',
    data: {
      ...param
    }
  })
}
// 删除轮播图
export function delCarousel (id) {
  return fetch({
    url: '/admin/banner/delete',
    method: 'post',
    data: {
      bannerId: id
    }
  })
}

// 发布轮播
export function publishCarousel (id) {
  return fetch({
    url: '/admin/banner/delete',
    method: 'post',
    data: {
      id
    }
  })
}

// 取消发布轮播
export function cancelPublishCarousel (id) {
  return fetch({
    url: '/admin/banner/delete',
    method: 'post',
    data: {
      id
    }
  })
}
