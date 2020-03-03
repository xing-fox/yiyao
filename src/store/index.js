import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    wrongAudio: '',
    rightAudio: '',
    clickAudio: '',
    totalPoint: 0, // 总分
    checkPoint: 1, // 关卡
    checkPoint1: {
      status: false,
      data: [{
        status: false,
        point: 0
      }, {
        status: false,
        point: 0
      }, {
        status: false,
        point: 0
      }, {
        status: false,
        point: 0
      }, {
        status: false,
        point: 0
      }]
    },
    checkPoint2: {
      status: false,
      data: [{
        status: false,
        point: 0
      }, {
        status: false,
        point: 0
      }, {
        status: false,
        point: 0
      }, {
        status: false,
        point: 0
      }, {
        status: false,
        point: 0
      }]
    },
    checkPoint3: {
      status: false,
      data: [{
        status: false,
        point: 0
      }, {
        status: false,
        point: 0
      }, {
        status: false,
        point: 0
      }, {
        status: false,
        point: 0
      }, {
        status: false,
        point: 0
      }]
    }
  },
  mutations: {
    WrongAudioInit (state, info) {
      state.wrongAudio = info
    },
    RightAudioInit (state, info) {
      state.rightAudio = info
    },
    ClickAudioInit (state, info) {
      state.clickAudio = info
    },
    WrongAudioPlay (state) {
      state.wrongAudio.play()
    },
    RightAudioPlay (state) {
      state.rightAudio.play()
    },
    ClickAudioPlay (state) {
      state.clickAudio.play()
    },
    totalPointInit (state, info) {
      state.totalPoint += info
    },
    checkPoint1Init (state, info) {
      state.checkPoint1 = info
    },
    checkPoint2Init (state, info) {
      state.checkPoint2 = info
    },
    checkPoint3Init (state, info) {
      state.checkPoint3 = info
    },
    checkPointInit (state, info) {
      state.checkPoint = info
    }
  },
  actions: {},
  modules: {}
})
