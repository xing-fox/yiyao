<template>
  <div id="app">
    <audio ref="click" preload="auto">
      <source src="./assets/click.mp3" type="audio/mpeg" />
    </audio>
    <audio ref="right" preload="auto">
      <source src="./assets/right.mp3" type="audio/mpeg" />
    </audio>
    <audio ref="wrong" preload="auto">
      <source src="./assets/wrong.mp3" type="audio/mpeg" />
    </audio>
    <router-view/>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'App',
  methods: {
    ...mapMutations([
      'WrongAudioInit',
      'RightAudioInit',
      'ClickAudioInit'
    ])
  },
  mounted () {
    this.WrongAudioInit(this.$refs.wrong)
    this.RightAudioInit(this.$refs.right)
    this.ClickAudioInit(this.$refs.click)
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
