<!--
  This is the introduction component which plays the game introduction for the player and emits the "startLayer" event
  for the Game component to catch and change layers with
-->

<template>
  <div class="introduction">
    <StyledButton @click="$emit('startLayer', GameLayers.PhysicalLayer)" text="Start Physical Layer Game"/>
    <StyledButton @click="$emit('startLayer', GameLayers.ApplicationLayer)" text="Start Application Layer Game"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import StyledButton from './StyledButton.vue'
import { GameLayers } from '../Game.vue'

@Component({
  components: {
    StyledButton,
  },
})
export default class Introduction extends Vue {
  public data() {
    return { GameLayers }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.introduction {
  background-color: blue;
  width: 100%;
  height: 100%;
  text-align: center;
  padding-top: 100px;
}
</style>
