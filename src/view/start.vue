<style lang="less" scoped>
.start-wrapper {
  font-size: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  box-sizing: border-box;
  background-image: url("../images/third.jpg");
  background-size: 100% 100%;
  .start-wrapper-return {
    width: .3rem;
    height: .3rem;
    background-image: url('../images/return.png');
    background-size: 100% 100%;
    position: absolute;
    top: .1rem;
    left: .1rem;
  }
  .start-wrapper-content {
    width: 100%;
    height: 4.9rem;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto auto;
  }
}

.start-wrapper .step {
  width: 3.015rem;
  height: 1.17rem;
  margin: 0 auto .5rem;
  box-sizing: border-box;
  background-image: url("../images/start-box.png");
  background-size: 100% 100%;
  position: relative;
}

.start-wrapper .step .title {
  width: 2.14rem;
  height: .55rem;
  background-size: 100% 100%;
  position: absolute;
  top: -.27rem;
  left: 0;
  right: 0;
  margin: 0 auto;
}

.start-wrapper .step:nth-child(1) .title {
  background-image: url("../images/start-gk1.png");
}

.start-wrapper .step:nth-child(1) .title.on {
  background-image: url("../images/start-gk10.png");
}

.start-wrapper .step:nth-child(2) .title {
  background-image: url("../images/start-gk21.png");
}

.start-wrapper .step:nth-child(2) .title.on {
  background-image: url("../images/start-gk20.png");
}

.start-wrapper .step:nth-child(2) .title.active {
  background-image: url("../images/start-gk2.png");
}

.start-wrapper .step:nth-child(3) .title {
  background-image: url("../images/start-gk31.png");
}

.start-wrapper .step:nth-child(3) .title.on {
  background-image: url("../images/start-gk30.png");
}

.start-wrapper .step:nth-child(3) .title.active {
  background-image: url("../images/start-gk3.png");
}
.start-wrapper .step ul {
  padding: 0 0 0 .3rem;
  margin: .2rem 0 0 0;
  text-align: left;
}

.start-wrapper .step ul li {
  display: inline-block;
  width: .26rem;
  height: .26rem;
  margin: .55rem .05rem 0 0;
}

.start-wrapper .step ul li i {
  display: inline-block;
  width: 100%;
  height: 100%;
  margin: 0 .05rem 0 0;
  background-image: url("../images/start-unselect.png");
  background-size: 100% 100%;
}

.start-wrapper .step ul li i.success {
  background-image: url("../images/start-select.png");
}

.start-wrapper .step .yao {
  width: .5rem;
  height: .5rem;
  position: absolute;
  top: .12rem;
  right: .3rem;
  bottom: 0;
  margin: auto 0;
}

.start-wrapper .start-bg {
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, .5);
  position: relative;
  .start-bg-content {
    width: 1.68rem;
    height: .6rem;
    line-height: .68rem;
    text-align: center;
    background-image: url('../images/start-box.png');
    background-size: 100% 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto auto;
    span {
      color: #fff;
      font-size: .14rem;
    }
  }
}
</style>

<template>
  <div class="start-wrapper">
    <div class="start-wrapper-return" @click="RouteChange('/index', -1)"></div>
    <div class="start-wrapper-content">
      <div class="step animated bounceIn" @click="RouteChange('/list', 1)">
        <div class="title" :class="{on: checkPoint > 1}"></div>
        <ul>
          <li v-for="(item, index) in checkPoint1.data" :key="index">
            <i class="success" v-if="item.status"></i>
            <i v-else></i>
          </li>
        </ul>
        <img v-if="!checkPoint1.status" src="../images/yao_11.png" class="yao">
        <img v-else src="../images/yao_1.png" class="yao">
      </div>
      <div class="step animated bounceIn delay-1" @click="RouteChange('/list', 2)">
        <div class="title" :class="{active: checkPoint == 2, on: checkPoint > 2}"></div>
        <ul>
          <li v-for="(item, index) in checkPoint2.data" :key="index">
            <i class="success" v-if="item.status"></i>
            <i v-else></i>
          </li>
        </ul>
        <img v-if="!checkPoint2.status" src="../images/yao_21.png" class="yao">
        <img v-else src="../images/yao_2.png" class="yao">
      </div>
      <div class="step animated bounceIn delay-2" @click="RouteChange('/list', 3)">
        <div class="title" :class="{active: checkPoint == 3}"></div>
        <ul>
          <li v-for="(item, index) in checkPoint3.data" :key="index">
            <i class="success" v-if="item.status"></i>
            <i v-else></i>
          </li>
        </ul>
        <img v-if="!checkPoint3.status" src="../images/yao_31.png" class="yao">
        <img v-else src="../images/yao_3.png" class="yao">
      </div>
    </div>
    <div class="start-bg" v-if="alertStatus" @click="alertStatus = false">
      <div class="start-bg-content zoomIn animated">
        <span>{{ alertText }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'Start',
  data () {
    return {
      answer1: 1,
      answer2: 2,
      answer3: 4,
      alertText: '',
      alertStatus: false
    }
  },
  computed: mapState([
    'checkPoint',
    'checkPoint1',
    'checkPoint2',
    'checkPoint3'
  ]),
  methods: {
    ...mapMutations([
      'ClickAudioPlay'
    ]),
    RouteChange (route, eq) {
      if (eq > this.checkPoint && eq !== -1) {
        this.alertText = '请先完成前面关卡哦'
        this.alertStatus = true
        return false
      }
      if (eq < this.checkPoint && eq !== -1) {
        this.alertText = '本关卡已完成哦'
        this.alertStatus = true
        return false
      }
      this.ClickAudioPlay()
      this.$router.push({
        path: route,
        query: {
          type: eq
        }
      })
    }
  }
}
</script>
