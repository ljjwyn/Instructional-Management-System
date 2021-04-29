<template>
  <el-row :gutter="40" class="panel-group">
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('newVisitis')">
        <div class="card-panel-description">
          <div class="card-panel-text">
            年级请假统计
          </div>
          <count-to :start-val="0" :end-val="90" :duration="2600" class="card-panel-num" />人次
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
            年级考勤情况
          </div>
          <count-to :start-val="0" :end-val="129" :duration="3000" class="card-panel-num" />人次缺勤
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
                  <strong style="font-size: 17px;">{{ item.title }}</strong><br><br>
                  <el-link style="font-size: 13px;color: black" href="https://element.eleme.io" target="_blank">{{ item.contents }}</el-link>
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
        { title: '24班获市优秀班级', contents: '我校高一24班荣获市优秀班集体', url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimgpolitics.gmw.cn%2Fattachement%2Fjpg%2Fsite2%2F20200505%2Ff44d305ea48e201b11fb49.jpg&refer=http%3A%2F%2Fimgpolitics.gmw.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620893359&t=bd213a2955d600a0a9b763345252a878' },
        { title: '惠强局长：宝中要当决胜高考“尖兵”', contents: '3月15日，宝鸡市2021年高考复课调研工作全面启动。市教育局党组书记、局长惠强一行首站来校。', url: 'https://cdn-portal-img.30edu.com.cn/wxImg/5a8e8097-182d-44d1-bac6-6e01dd84b6fe/8b2810b5-a635-49f2-a892-f0cf2bd734862.jpg' },
        { title: '宝鸡中学：2021年学考理化生实验操作考试圆满结束', contents: ' 4月15日下午至4月17日，我校2021年陕西省学业水平考试理化生实验操作考试工作顺利举行。活动组织有序、高效圆满。', url: 'https://cdn-portal-img.30edu.com.cn/word/5a8e8097-182d-44d1-bac6-6e01dd84b6fe/1c0775c6-b9b9-412d-8555-b9202565e033.001.jpeg' },
        { title: '宝鸡中学：学百年党史 促办学提质', contents: '4月14日，宝鸡中学召开党史学习教育专题会，对学校党史学习教育进行动员部署', url: 'https://cdn-portal-img.30edu.com.cn/wxImg/5a8e8097-182d-44d1-bac6-6e01dd84b6fe/f0cc4545-0db4-4b55-897f-fcf8908df14c3.jpg' }
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
