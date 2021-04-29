import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/instructional/table/list',
    method: 'get',
    params
  })
}

export function searchUser(name) {
  return request({
    url: '/instructional/search/user',
    method: 'get',
    name
  })
}
