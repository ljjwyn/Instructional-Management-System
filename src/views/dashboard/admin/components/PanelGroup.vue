<template>
  <el-row :gutter="40" class="panel-group">
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('newVisitis')">
        <div class="card-panel-description">
          <div class="card-panel-text">
            班级请假统计
          </div>
          <count-to :start-val="0" :end-val="13" :duration="2600" class="card-panel-num" />人次
        </div>
        <div class="card-panel-icon-wrapper icon-people">
          <svg-icon icon-class="peoples" class-name="card-panel-icon" />
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('messages')">
        <div class="card-panel-icon-wrapper icon-message">
          <svg-icon icon-class="skill" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            班级考勤情况
          </div>
          <count-to :start-val="0" :end-val="21" :duration="3000" class="card-panel-num" />人次缺勤
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="12" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('purchases')">
        <div class="card-panel-icon-wrapper icon-shopping" style="margin-right: 10px">
          <svg-icon icon-class="guide" class-name="card-panel-icon" />
        </div>
        <div>
          <el-carousel :interval="3000" height="90px" style="border-radius: 10px;margin: 10px;">
            <el-carousel-item v-for="item in News" :key="item.title">
              <div>
                <div class="banner_bg" :style="getStyle(item)" />
                <div class="content-front">
                  <strong style="font-size: 19px;">{{ item.title }}</strong><br><br>
                  <el-link style="font-size: 15px;color: black" href="https://element.eleme.io" target="_blank">{{ item.contents }}</el-link>
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import CountTo from 'vue-count-to'

export default {
  components: {
    CountTo
  },
  data() {
    return {
      News: [
        { title: '周一班会', contents: '全班同学于周一下午参与班会，组织学习团支部精神', url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimgpolitics.gmw.cn%2Fattachement%2Fjpg%2Fsite2%2F20200505%2Ff44d305ea48e201b11fb49.jpg&refer=http%3A%2F%2Fimgpolitics.gmw.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620893359&t=bd213a2955d600a0a9b763345252a878' },
        { title: '篮球赛', contents: '我班篮球队勇夺全年级冠军', url: 'https://img2.baidu.com/it/u=219553171,3775182340&fm=26&fmt=auto&gp=0.jpg' },
        { title: '足球赛', contents: '我班足球队勇夺全校冠军', url: 'https://img0.baidu.com/it/u=3477669046,2113422153&fm=26&fmt=auto&gp=0.jpg' },
        { title: '歌咏比赛', contents: '我班荣获第三名', url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.2360600.vip%2Fupload%2F2019-10%2F19100809318463.jpg&refer=http%3A%2F%2Fwww.2360600.vip&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620895157&t=b702cbc6561d9b7ced6d8dfb886a01e6' }
      ]
    }
  },
  methods: {
    handleSetLineChartData(type) {
      this.$emit('handleSetLineChartData', type)
    },
    getStyle(item) {
      const style = 'background:url("' + item.url + '") no-repeat center center;'
      return style
    }
  }
}
</script>

<style lang="scss" scoped>
.content-front {
  position:absolute;
  left: 10px;
  right: 10px;
  top: 10px;
  text-align: center;
  color: black;
}
.banner_bg{
  padding: 50px;
  width:100%;
  filter:blur(4px);
  position:absolute;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 20px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  //background-color: #99a9bf;
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
.panel-group {
  margin-top: 18px;

  .card-panel-col {
    margin-bottom: 25px;
  }

  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);
    border-radius: 6px;

    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }

      .icon-people {
        background: #40c9c6;
      }

      .icon-message {
        background: #36a3f7;
      }

      .icon-money {
        background: #f4516c;
      }

      .icon-shopping {
        background: #34bfa3
      }
    }

    .icon-people {
      color: #40c9c6;
    }

    .icon-message {
      color: #36a3f7;
    }

    .icon-money {
      color: #f4516c;
    }

    .icon-shopping {
      color: #34bfa3
    }

    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }

    .card-panel-icon {
      float: left;
      font-size: 48px;
    }

    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;

      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }

      .card-panel-num {
        font-size: 25px;
      }
    }
  }
}

@media (max-width:550px) {
  .card-panel-description {
    display: none;
  }

  .card-panel-icon-wrapper {
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;

    .svg-icon {
      display: block;
      margin: 14px auto !important;
      float: none !important;
    }
  }
}
</style>
