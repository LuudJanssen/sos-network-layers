<template>
  <div id="game">
    <Introduction v-if="mode === GameMode.Introduction" />
    <PhysicalLayer v-if="mode === GameMode.PhysicalLayer"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Introduction from './components/Introduction.vue'
import PhysicalLayer from './components/PhysicalLayer.vue'

enum GameMode {
  Introduction,
  PhysicalLayer,
}

@Component({
  components: {
    Introduction,
    PhysicalLayer,
  },
})
export default class Game extends Vue {
  public data() {
    return {
      mode: GameMode.Introduction,
      GameMode,
    }
  }
}
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
