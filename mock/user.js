
const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  },
  root: {
    token: 'root-token'
  }
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: '常晨',
    position: '老师'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.crcz.com%2Fallimg%2F201912%2F01%2F1575178203273337.jpg&refer=http%3A%2F%2Fimg.crcz.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621401840&t=d2d4d8b60efa71f895ad86c346dd13b0',
    name: '刘凯',
    position: '学生'
  },
  'root-token': {
    roles: ['root'],
    introduction: 'I am an root',
    avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi16.yd166.com%2Ffile%2Fimg%2F3w921293431u3503890668t26.jpg&refer=http%3A%2F%2Fi16.yd166.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621401622&t=d1be7b20f159a34a208784a87a758090',
    name: '王晓东',
    position: '主任'
  }
}

module.exports = [
  // user login
  {
    url: '/instructional/user/login',
    type: 'post',
    response: config => {
      const { username } = config.body
      const token = tokens[username]

      // mock error
      if (!token) {
        return {
          code: 60204,
          message: 'Account and password are incorrect.'
        }
      }

      return {
        code: 20000,
        data: token
      }
    }
  },

  // get user info
  {
    url: '/instructional/user/info\.*',
    type: 'get',
    response: config => {
      const { token } = config.query
      const info = users[token]

      // mock error
      if (!info) {
        return {
          code: 50008,
          message: 'Login failed, unable to get user details.'
        }
      }

      return {
        code: 20000,
        data: info
      }
    }
  },

  // user logout
  {
    url: '/instructional/user/logout',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]
