import request from '@/utils/request'

export function getAll(data) {
  return request({
    url: '/instructional/students/getall',
    method: 'post',
    data
  })
}
