<style lang="less" scoped>
  .list-wrapper {
    font-size: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    padding: 12vh 0 0 0;
    box-sizing: border-box;
    overflow: hidden;
    background-image: url("../images/second.jpg");
    background-size: 100% 100%;
    position: relative;
    .list-point {
      color: red;
      font-size: .3rem;
      font-weight: bold;
      position: absolute;
      top: 10vh;
      right: 5%;
      z-index: 1;
    }
    .list-wrapper-content {
      width: 100%;
      height: 80vh;
      position: relative;
      .title {
        color: #fff;
        width: 2.14rem;
        height: .56rem;
        text-align: center;
        background-image: url('../images/start-gk.png');
        background-size: 100% 100%;
        position: absolute;
        top: -.28rem;
        left: 0;
        right: 0;
        margin: 0 auto;
        span {
          display: inline-block;
          font-size: .16rem;
          font-weight: bold;
        }
        .time {
          font-size: .12rem;
        }
      }
      .box {
        width: 3.3rem;
        margin: 0 auto;
        padding: .5rem .15rem .2rem .2rem;
        text-align: left;
        border-radius: .1rem;
        box-sizing: border-box;
        overflow: hidden;
        background: #fff;
        .box-title {
          color: #333;
          font-size: .16rem;
        }
        .box-content {
          width: 100%;
          height: 55vh;
          box-sizing: border-box;
          overflow: hidden;
          ul {
            width: 100%;
            padding: 0 0 .2rem 0;
            li {
              display: flex;
              color: #333;
              font-size: .14rem;
              line-height: .2rem;
              padding: .1rem .05rem .1rem .1rem;
              margin: .1rem 0 0 0;
              border-radius: 5px;
              background: #ededed;
              position: relative;
              &.success {
                -webkit-animation-duration: 0.75s;
                animation-duration: 0.75s;
                -webkit-animation-name: bounceIn;
                animation-name: bounceIn;
                border-radius: 5px;
                background: #e3faee;
                position: relative;
                &:before {
                  content: '';
                  width: .24rem;
                  height: .24rem;
                  position: absolute;
                  top: .08rem;
                  left: .05rem;
                  background-image: url('../images/success.png');
                  background-size: 100% 100%;
                  z-index: 2;
                  ;
                }
              }
              &.error {
                -webkit-animation-duration: 2s;
                animation-duration: 2s;
                -webkit-animation-name: hinge;
                animation-name: hinge;
                border-radius: 5px;
                background: #fee0e0;
                position: relative;
                &:before {
                  content: '';
                  width: .24rem;
                  height: .24rem;
                  position: absolute;
                  top: .08rem;
                  left: .05rem;
                  background-image: url('../images/error.png');
                  background-size: 100% 100%;
                  z-index: 2;
                  ;
                }
              }
              span {
                vertical-align: top;
              }
              .list-eq {
                font-size: .18rem;
                font-weight: bold;
                margin: 0 .1rem 0 0;
                position: relative;
              }
            }
          }
        }
        .box-explain {
          color: #f86b75;
          font-size: .14rem;
          text-indent: 2em;
          height: 47vh;
          line-height: .2rem;
          padding: .1rem;
          margin: 1vh 0 0 0;
          border-radius: 5px;
          overflow: hidden;
          background: #ffdadb;
          ul {
            padding: 0 0 .3rem 0;
            overflow: hidden;
            p {
              color: #f61823;
              font-size: .16rem;
              font-weight: bold;
              text-indent: 0;
            }
          }
        }
        .next {
          color: #fff;
          font-size: .16rem;
          width: 2.11rem;
          height: .39rem;
          line-height: .39rem;
          margin: .1rem auto 0;
          text-align: center;
          letter-spacing: .5em;
          background-image: url('../images/start-next.png');
          background-size: 100% 100%;
        }
        .submit {
          display: flex;
          width: 100%;
          margin: .1rem 0 0 0;
          span {
            flex: 1;
            color: #fff;
            font-size: .14rem;
            height: .3rem;
            line-height: .3rem;
            margin: 0 .2rem 0 0;
            text-align: center;
            letter-spacing: 1px;
            background-image: url('../images/start-next.png');
            background-size: 100% 100%;
            &:nth-child(2) {
              margin: 0;
            }
          }
        }
      }
    }
    .list-wrapper-input {
      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, .5);
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      .list-wrapper-input-content {
        width: 2.52rem;
        height: .9rem;
        padding: .26rem 0 0 0;
        text-align: center;
        box-sizing: border-box;
        background-image: url('../images/list-input.png');
        background-size: 100% 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: .3rem;
        margin: auto auto;
        input {
          -webkit-appearance: none;
          border: none;
          color: #666;
          font-size: .15rem;
          width: 2.2rem;
          height: .45rem;
          padding: 0 0 0 .1rem;
          box-sizing: border-box;
          background: none;
        }
      }
      .list-wrapper-input-submit {
        color: #ca812b;
        font-size: .14rem;
        width: .84rem;
        height: .3rem;
        line-height: .3rem;
        text-align: center;
        box-sizing: border-box;
        background-image: url('../images/list-submit.png');
        background-size: 100% 100%;
        position: absolute;
        top: 1.2rem;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto auto;
      }
    }
    .list-wrapper-good {
      width: 2rem;
      height: 2rem;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto auto;
      z-index: 1;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>

<template>
  <div class="list-wrapper">
    <div class="list-point animated fadeOutUp" v-if="pointStatus">+{{ point }}</div>
    <div class="list-wrapper-content bounceInDown animated">
      <div class="title">
        <span>关卡{{ flag }}</span>
        <div class="time">倒计时：{{ answerTime }}s</div>
      </div>
      <div class="box">
        <div class="box-title" v-if="Data">
          <span>{{ answerTimes + 1 }}. {{ Data[answerCount].title }}</span>
        </div>
        <div class="box-content" ref="wrapper" v-if="!explainStatus">
          <ul>
            <li class="animated" v-for="(item, index) in Data[answerCount].data" :key="index" @click="ChoiseFunc(index)" :class="{success: Data[answerCount].data[index].status && answerChoise > -1, error: !Data[answerCount].data[index].status && answerChoise == index}">
              <span class="list-eq" v-if="index == 0">A.</span>
              <span class="list-eq" v-if="index == 1">B.</span>
              <span class="list-eq" v-if="index == 2">C.</span>
              <span class="list-eq" v-if="index == 3">D.</span>
              <span class="list-content">{{ Data[answerCount].data[index].answer }}</span>
            </li>
          </ul>
        </div>
        <div class="box-explain fadeIn animated" v-if="explainStatus" ref="Explainwrapper">
          <ul>
            <li>
              <p>解析:</p>
            </li>
            <li>
              <span>{{ Data[answerCount].explain }}</span>
            </li>
          </ul>
        </div>
        <div class="next" v-if="explainStatus && answerTimes < 4" @click="nextFunc">
          <span>下一题</span>
        </div>
        <div class="next" v-if="explainStatus && answerTimes === 4 && checkPoint < 3" @click="RouteChange">
          <span>本关结束</span>
        </div>
        <div class="submit" v-if="explainStatus && answerTimes === 4 && checkPoint >= 3">
          <span @click="inputStatus = true">上传记录</span>
          <span @click="Restart">重新开始</span>
        </div>
      </div>
    </div>
    <div class="list-wrapper-input" v-if="inputStatus">
      <div class="list-wrapper-input-content bounceIn animated">
        <input type="text" v-model="inputValue" placeholder="请输入用户名">
      </div>
      <div class="list-wrapper-input-submit bounceIn animated" @click="CommitInfo">
        <span>确认提交</span>
      </div>
    </div>
    <div class="list-wrapper-good" v-if="gifStatus">
      <img src="../images/1.gif">
    </div>
  </div>
</template>

<script>
import IScroll from 'IScroll'
import Subject from '@/assets/dataJson'
import {
  mapState,
  mapMutations
} from 'vuex'
import { InsertUser } from '@/fetch/api'
export default {
  name: 'List',
  data () {
    return {
      flag: this.$route.query.type === 1 ? '一' : this.$route.query.type === 2 ? '二' : '三',
      Data: [], // 所有试题
      MyScroll: '', // 题目滚动,
      ExplainScroll: '', // 解析滚动 v
      setTime: '', // 计时器
      point: 30, // 获得的分数
      pointData: [],
      answerTime: 60, // 倒计时
      answerTimes: 0, // 答题数
      answerChoise: -1, // 初始选择
      inputStatus: false, // 输入框状态
      inputValue: window.localStorage.getItem('UserName') || '',
      answerCount: this.$route.query.type === 1 ? parseInt(Math.random() * 29) : this.$route.query.type === 2 ? parseInt(Math.random() * 29) : parseInt(Math.random() * 31), // 答题计数器
      answerStatus: false, // 答题状态
      explainStatus: false, // 解答状态
      pointStatus: false, // 分数显隐状态
      gifStatus: false
    }
  },
  computed: mapState([
    'checkPoint',
    'totalPoint',
    'checkPoint1',
    'checkPoint2',
    'checkPoint3'
  ]),
  methods: {
    /**
     * vuex数据
     */
    ...mapMutations([
      'totalPointInit',
      'WrongAudioPlay',
      'RightAudioPlay',
      'ClickAudioPlay',
      'checkPoint1Init',
      'checkPoint2Init',
      'checkPoint3Init',
      'checkPointInit'
    ]),
    /**
     * 初始化定时器
     */
    setTimeFunc () {
      this.setTime = setInterval(() => {
        this.answerTime--
        if (this.answerTime === 0) clearInterval(this.setTime)
      }, 1000)
    },
    /**
     * 选择答案
     */
    ChoiseFunc (arg) {
      if (this.answerChoise !== -1) return false
      this.answerChoise = arg
      this.pointStatus = this.Data[this.answerCount].data[arg].status
      this.Data[this.answerCount].data[arg].status ? this.RightAudioPlay() : this.WrongAudioPlay()
      clearInterval(this.setTime)
      if (this.Data[this.answerCount].data[arg].status) {
        this.point += this.answerTime
        this.pointData.push({
          status: true,
          point: this.point
        })
      } else {
        this.pointData.push({
          status: false,
          point: 0
        })
      }
      setTimeout(() => {
        this.explainStatus = true
        setTimeout(() => {
          this.ExplainScroll = new IScroll(this.$refs.Explainwrapper, {
            click: true,
            startY: 0
          })
        }, 100)
      }, 1500)
      if (this.answerTimes === 4) {
        let flag = true
        this.pointData.map(item => {
          if (!item.status) flag = false
        })
        if (flag) {
          this.gifStatus = true
          setTimeout(() => {
            this.gifStatus = false
          }, 2000)
        }
      }
    },
    /**
     * 下一题
     */
    nextFunc () {
      [this.MyScroll, this.answerTime, this.answerChoise, this.answerStatus, this.explainStatus, this.pointStatus, this.point] = ['', 60, -1, false, false, false, 30]
      this.answerTimes = this.answerTimes + 1
      this.answerCount = this.answerCount === 29 ? (this.answerCount = 0) : this.answerCount + 1
      this.ClickAudioPlay()
      this.setTimeFunc()
      this.RefreshScroll()
    },
    /**
     * 路由切换
     */
    RouteChange () {
      let flag = true
      const _checkPoint = this.checkPoint + 1
      this.ClickAudioPlay()
      this.pointData.map(item => {
        this.totalPointInit(Number(item.point))
        if (!item.status) flag = false
      })
      if (this.checkPoint === 1) {
        this.checkPoint1Init({
          status: flag,
          data: this.pointData
        })
      }
      if (this.checkPoint === 2) {
        this.checkPoint2Init({
          status: flag,
          data: this.pointData
        })
      }
      setTimeout(() => {
        this.$router.push({
          path: '/start'
        })
        this.checkPointInit(_checkPoint)
      }, 1000)
    },
    /**
     * scroll刷新
     */
    RefreshScroll () {
      this.MyScroll = new IScroll(this.$refs.wrapper, {
        click: true,
        startY: 0
      })
    },
    /**
     * 提交信息
     */
    CommitInfo () {
      if (this.inputValue === '') {
        return this.$toast('请输入用户名', {
          location: 'center'
        })
      }
      let flag = true
      this.pointData.map(item => {
        this.totalPointInit(Number(item.point))
        if (!item.status) flag = false
      })
      this.checkPoint3Init({
        status: flag,
        data: this.pointData
      })
      this.checkPointInit(4)
      InsertUser({
        wxName: this.inputValue,
        point: this.totalPoint
      }).then(res => {
        if (res.state === '0') {
          this.$toast('上传成功', {
            location: 'center'
          })
          this.inputStatus = false
          window.localStorage.setItem('UserName', this.inputValue)
          setTimeout(() => {
            window.location.href = 'http://xiaoxixue.com/yao'
          }, 1000)
        }
      })
    },
    /**
     * 重新开始
     */
    Restart () {
      window.location.href = 'http://xiaoxixue.com/yao'
    }
  },
  created () {
    this.Data = Subject[this.checkPoint - 1].data
  },
  mounted () {
    this.setTimeFunc()
    this.RefreshScroll()
  }
}
</script>
