<template>
  <div id="game">
    <Introduction/>
    <Introduction/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Introduction from './components/Introduction.vue'

@Component({
  components: {
    Introduction,
  },
})
export default class Game extends Vue {}
</script>

<style>
#game {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

* {
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
}
</style>
