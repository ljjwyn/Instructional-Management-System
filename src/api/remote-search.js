import request from '@/utils/request'

export function searchUser(name) {
  return request({
    url: '/instructional/search/user',
    method: 'get',
    name
  })
}

export function transactionList() {
  return request({
    url: '/instructional/transaction/list',
    method: 'get'
  })
}
