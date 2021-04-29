import request from '@/utils/request'

export function getARecord(params) {
  return request({
    url: '/classscores/getrecord',
    method: 'POST',
    data: { 'classId': params }
  })
}

export function getTopTailScores(params) {
  return request({
    url: '/student/gettoptail',
    method: 'POST',
    data: params
  })
}
