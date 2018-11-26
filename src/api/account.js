import fetch from '@/utils/fetch'

// 变更姓名
export function changeName (param) {
  return fetch({
    url: '/user/addPlatformAdmin',
    method: 'post',
    data: {
      ...param
    }
  })
}

// 获取手机验证码
export function getValidationCode (param) {
  return fetch({
    url: '/user/getUpdateAccountNoCode',
    method: 'post',
    data: {
      ...param
    }
  })
}

// 变更手机号
export function changeMobile (param) {
  return fetch({
    url: '/user/updateAccountNo',
    method: 'post',
    data: {
      ...param
    }
  })
}

// 变更邮箱
export function changeEmail (param) {
  return fetch({
    url: '/user/addPlatformAdmin',
    method: 'post',
    data: {
      ...param
    }
  })
}

// 变更密码
export function changePwd (param) {
  return fetch({
    url: '/user/updatePwd',
    method: 'post',
    data: {
      ...param
    }
  })
}

// 添加管理员
export function addManger (param) {
  return fetch({
    url: '/user/addPlatformAdmin',
    method: 'post',
    data: {
      ...param
    }
  })
}

// 编辑管理员
export function editManger (param) {
  return fetch({
    url: '/user/updatePlatformAdmin',
    method: 'post',
    data: {
      ...param
    }
  })
}

// 删除管理员
export function delManger (id) {
  return fetch({
    url: '/user/delPlatformAdmin',
    method: 'post',
    data: {
      id
    }
  })
}

// 获取管理员
export function getMangerInfo (id) {
  return fetch({
    url: '/user/platformAdminView',
    method: 'post',
    data: {
      id
    }
  })
}

// 获取所有管理员角色
export function getManagerRole (param) {
  return fetch({
    url: '/user/findPlatformAdmintRole',
    method: 'post',
    data: {
      ...param
    }
  })
}
