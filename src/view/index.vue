<style lang="less" scoped>
.index-wrapper {
  font-size: 0;
  width: 100%;
  height: 100%;
}
.index-wrapper {
  width: 100%;
  height: 100%;
  text-align: center;
  background-image: url("../images/index.jpg");
  background-size: 100% 100%;
  position: relative;
}

.index-wrapper .content {
  width: 100%;
  height: 4.58rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0.2rem;
  margin: auto auto;
}

.index-wrapper .logo {
  width: 3rem;
}

.index-wrapper .content .button {
  width: 100%;
}

.index-wrapper .content .button .rank {
  display: inline-block;
  color: #1c60d8;
  font-size: 0.15rem;
  font-weight: bold;
  width: 1.4rem;
  height: 0.48rem;
  line-height: 0.48rem;
  background-image: url("../images/rank.png");
  background-size: 100% 100%;
}

.index-wrapper .content .button .rules {
  display: inline-block;
  color: #834f1f;
  font-size: 0.15rem;
  font-weight: bold;
  width: 1.4rem;
  height: 0.48rem;
  line-height: 0.48rem;
  margin: 0 0.1rem 0 0;
  background-image: url("../images/rules.png");
  background-size: 100% 100%;
}

.index-wrapper .content .start {
  color: #fff;
  font-size: 0.15rem;
  font-weight: bold;
  width: 2.9rem;
  height: 0.55rem;
  line-height: 0.55rem;
  margin: 0.4rem auto 0.15rem;
  background-image: url("../images/start.png");
  background-size: 100% 100%;
}

.index-wrapper .tips {
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0.1rem;
}

.index-wrapper .tips p {
  color: #ccc;
  font-size: 0.1rem;
}

.index-wrapper .rules-model-zzc {
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.index-wrapper .rules-model {
  width: 80vw;
  height: 4rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto;
  border-radius: 8px;
  background: #c0504d;
}

.index-wrapper .rules-model .rules-model-title {
  width: 100%;
  color: #fff;
  font-size: 0.2rem;
  font-weight: bold;
  padding: 0.3rem 0 0 0;
}

.index-wrapper .rules-model .rules-model-content {
  padding: 0.3rem 0.15rem 0 0.2rem;
  text-align: left;
}

.index-wrapper .rules-model .rules-model-content p {
  color: #fff;
  font-size: 0.14rem;
  text-indent: 2em;
  margin: 0 0 0.2rem 0;
}

.index-wrapper .rules-model .rules-model-content .close {
  width: 0.3rem;
  height: 0.3rem;
  background-image: url("../images/close.png");
  background-size: 100% 100%;
  position: absolute;
  top: -0.15rem;
  right: -0.15rem;
}
</style>

<template>
  <div class="index-wrapper">
    <div class="content">
      <img src="../images/logo.png" class="logo">
      <div class="start" @click="RouteChange('/start')">开始游戏</div>
      <div class="button">
        <div class="rules" @click="RuleChange">游戏规则</div>
        <div class="rank" @click="RouteChange('/rank')">好友积分榜</div>
      </div>
    </div>
    <div class="tips">
      <p>抵制不良游戏 拒绝盗版游戏 注意自我保护 谨防上当受骗</p>
      <p>适度游戏益脑 沉迷游戏上身 合理安排时间 享受健康生活</p>
    </div>
    <div class="rules-model-zzc" v-if="RuleStatus">
      <div class="rules-model animated fadeInDown">
        <div class="rules-model-title">游戏规则</div>
        <div class="rules-model-content">
          <div class="close" @click="RuleStatus = false"></div>
          <p>你好，欢迎来到“药”你知道，我是您的用药助手——小药狮，我可以帮您规避一些平时用药的误区，助您更加安全合理使用药物哦~</p>
          <p>下面共有三道关卡，每道关卡有五道题，全部答对即可获得该关卡通关药丸奖励哟~</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'Index',
  data () {
    return {
      RuleStatus: false
    }
  },
  methods: {
    ...mapMutations([
      'ClickAudioPlay'
    ]),
    RouteChange (route) {
      this.ClickAudioPlay()
      this.$router.push({
        path: route
      })
    },
    RuleChange () {
      this.ClickAudioPlay()
      this.RuleStatus = true
    }
  }
}
</script>
