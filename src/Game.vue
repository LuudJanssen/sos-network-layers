<template>
  <div id="game">
    <Introduction v-if="mode === GameMode.Introduction" 
                  @startPhysicalLayer="mode = GameMode.PhysicalLayer" 
                  @startApplicationLayer="mode = GameMode.ApplicationLayer"/>

    <PhysicalLayer v-if="mode === GameMode.PhysicalLayer"/>
    <ApplicationLayer v-if="mode === GameMode.ApplicationLayer"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Introduction from './components/Introduction.vue'
import PhysicalLayer from './components/PhysicalLayer.vue'
import ApplicationLayer from './components/ApplicationLayer.vue'

enum GameMode {
  Introduction,
  PhysicalLayer,
  ApplicationLayer,
}

@Component({
  components: {
    Introduction,
    PhysicalLayer,
    ApplicationLayer,
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
