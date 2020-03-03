<style lang="less" scoped>
.rank-wrapper {
  font-size: 0;
  width: 100%;
  height: 100%;
  padding: 0.3rem 0 0 0;
  text-align: center;
  box-sizing: border-box;
  background-image: url("../images/second.jpg");
  background-size: 100% 100%;
  position: relative;
}

.rank-wrapper .page-rank-header {
  width: 3.45rem;
  height: 1rem;
  line-height: 1rem;
  margin: 0 auto;
  text-align: center;
  border-radius: 10px;
  background: #fff;
}

.rank-wrapper .page-rank-header img {
  display: inline-block;
  width: 0.6rem;
  vertical-align: middle;
}

.rank-wrapper .page-rank-header span {
  color: #333;
  font-size: 0.18rem;
  font-weight: bold;
  margin: 0 0.5rem;
  vertical-align: middle;
}

.rank-wrapper .page-rank-header .page-rank-header-join {
  display: inline-block;
  color: #fff;
  font-size: 0.12rem;
  width: 0.8rem;
  height: 0.3rem;
  line-height: 0.3rem;
  text-align: center;
  border-radius: 0.4rem;
  vertical-align: middle;
  background: #e83030;
}

.rank-wrapper .page-rank-content {
  width: 3.45rem;
  height: 68vh;
  margin: 0.17rem auto;
  border-radius: 10px;
  overflow: scroll;
  background: #fff;
}

.rank-wrapper .page-rank-content ul {
  padding: 0.1rem 0.2rem;
}

.rank-wrapper .page-rank-content ul li {
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  margin: 0 0 0.1rem 0;
  text-align: left;
  position: relative;
}

.rank-wrapper .page-rank-content ul li:nth-child(1) .rank-list-num {
  background-image: url("../images/rank1.png");
}

.rank-wrapper .page-rank-content ul li:nth-child(2) .rank-list-num {
  background-image: url("../images/rank2.png");
}

.rank-wrapper .page-rank-content ul li:nth-child(3) .rank-list-num {
  background-image: url("../images/rank3.png");
}

.rank-wrapper .page-rank-content ul li .rank-list-num {
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  line-height: 0.38rem;
  text-align: center;
  background-image: url("../images/rank-list.png");
  background-size: 100% 100%;
  vertical-align: top;
}

.rank-wrapper .page-rank-content ul li .rank-list-num span {
  color: #fff;
  font-size: 0.14rem;
  font-weight: bold;
}

.rank-wrapper .page-rank-content ul li .rank-list-image {
  display: inline-block;
  width: 0.4rem;
  height: 0.4rem;
  margin: 0.05rem 0 0 0.15rem;
  border-radius: 0.2rem;
  overflow: hidden;
  vertical-align: top;
  background-image: url("../images/logo-1.png");
  background-size: 60% 80%;
  background-position: center center;
  background-repeat: no-repeat;
}

.rank-wrapper .page-rank-content ul li .rank-list-name {
  display: inline-block;
  color: #333;
  font-size: 0.14rem;
  width: 1.3rem;
  margin: 0 0 0 0.15rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.rank-wrapper .page-rank-content ul li .rank-list-grade {
  color: #333;
  font-size: 0.14rem;
  height: 0.5rem;
  position: absolute;
  top: 0;
  right: 0;
}
</style>

<template>
  <div class="rank-wrapper">
    <div class="page-rank-header">
      <img src="../images/rank-logo.png">
      <span>积分榜</span>
      <div class="page-rank-header-join bounceIn animated" @click="RouteChange('/index')">进入游戏</div>
    </div>
    <div class="page-rank-content" ref="wrapper">
      <ul>
        <li v-for="(item, index) in Data" :key="index">
          <div class="rank-list-num">
            <span>{{ index + 1 }}</span>
          </div>
          <img class="rank-list-image" src="../images/logo-1.png">
          <div class="rank-list-name">{{ item.wxName }}</div>
          <div class="rank-list-grade">{{ item.point }}分</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import IScroll from 'IScroll'
import { mapMutations } from 'vuex'
import { GetPoint } from '@/fetch/api'
export default {
  name: 'Rank',
  data () {
    return {
      Data: [],
      Index: 0,
      MyScroll: ''
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
    GetData () {
      GetPoint({
        index: this.Index,
        size: 100
      }).then(res => {
        this.Data = res.records
      }).then(() => {
        this.MyScroll.refresh()
      })
    }
  },
  mounted () {
    this.MyScroll = new IScroll(this.$refs.wrapper)
    this.GetData()
  }
}
</script>
