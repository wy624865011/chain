import fetch from '@/utils/fetch'

export function login(username, password) {
  return fetch({
    url: '/admin/admin/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function getInfo() {
  return fetch({
    url: '/admin/admin/info',
    method: 'post',
  })
}

export function logout() {
  return fetch({
    url: '/admin/admin/logout',
    method: 'post'
  })
}
