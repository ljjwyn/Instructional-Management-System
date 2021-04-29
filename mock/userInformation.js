const studentsList = [
  {
    studentId: '20210101001',
    name: '张三',
    sex: '男',
    phoneNumber: '15961231231',
    classId: '0101',
    className: '高一(1)班',
    grade: '2021级',
    dormitory: '01102',
    parentName: '张大',
    parentPhone: '12222222222'
  },
  {
    studentId: '20210101002',
    name: '张四',
    sex: '男',
    phoneNumber: '15961231232',
    classId: '0101',
    className: '高一(1)班',
    grade: '2021级',
    dormitory: '01102',
    parentName: '张一一',
    parentPhone: '12222222223'
  },
  {
    studentId: '20210101003',
    name: '李四',
    sex: '男',
    phoneNumber: '15961231233',
    classId: '0101',
    className: '高一(1)班',
    grade: '2021级',
    dormitory: '01201',
    parentName: '李一一',
    parentPhone: '12222222224'
  },
  {
    studentId: '20210101004',
    name: '李二',
    sex: '女',
    phoneNumber: '15961231234',
    classId: '0101',
    className: '高一(1)班',
    grade: '2021级',
    dormitory: '02312',
    parentName: '李二一',
    parentPhone: '12222222225'
  },
  {
    studentId: '20210101005',
    name: '刘三',
    sex: '男',
    phoneNumber: '15961231235',
    classId: '0101',
    className: '高一(1)班',
    grade: '2021级',
    dormitory: '01309',
    parentName: '刘三大',
    parentPhone: '12222222226'
  },
  {
    studentId: '20210101006',
    name: '王四',
    sex: '女',
    phoneNumber: '15961231236',
    classId: '0101',
    className: '高一(1)班',
    grade: '2021级',
    dormitory: '02109',
    parentName: '王一二',
    parentPhone: '12222222227'
  },
  {
    studentId: '20210101007',
    name: '朱一',
    sex: '男',
    phoneNumber: '15961231237',
    classId: '0101',
    className: '高一(1)班',
    grade: '2021级',
    dormitory: '01201',
    parentName: '李一一',
    parentPhone: '12222222224'
  },
  {
    studentId: '20210101008',
    name: '杜二',
    sex: '女',
    phoneNumber: '15961231238',
    classId: '0101',
    className: '高一(1)班',
    grade: '2021级',
    dormitory: '02322',
    parentName: '杜二三',
    parentPhone: '12222222287'
  },
  {
    studentId: '20210101009',
    name: '郑八',
    sex: '男',
    phoneNumber: '15961231239',
    classId: '0101',
    className: '高一(1)班',
    grade: '2021级',
    dormitory: '01342',
    parentName: '郑志',
    parentPhone: '12222222787'
  },
  {
    studentId: '20210101010',
    name: '李八',
    sex: '女',
    phoneNumber: '15961231290',
    classId: '0101',
    className: '高一(1)班',
    grade: '2021级',
    dormitory: '走读',
    parentName: '李志',
    parentPhone: '12222222177'
  }
]

module.exports = [
  // user login
  {
    url: '/instructional/students/getall',
    type: 'post',
    response: config => {
      return {
        code: 20000,
        data: studentsList
      }
    }
  }
]
