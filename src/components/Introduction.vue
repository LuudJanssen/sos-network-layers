<!--
  This is the introduction component which plays the game introduction for the player and emits the "startLayer" event
  for the Game component to catch and change layers with
-->
<template>
  <b-container fluid class="introduction">
    <b-row align-v="center" align-h="center" class="introduction-block">
      <div class="sky"></div>
      <b-col cols="3"></b-col>
      <b-col>
        <img src="../assets/island-detail.svg" class="introduction-island">
      </b-col>
      <!-- <b-col cols="2">
        <b-button :variant="'primary'" @click="$emit('startLayer', GameLayers.PhysicalLayer)">
          Start Physical Layer Game
        </b-button>
      </b-col>
      <b-col cols="2">
        <b-button :variant="'primary'" @click="$emit('startLayer', GameLayers.ApplicationLayer)">
          Start Application Layer Game
        </b-button>
      </b-col> -->
      <b-col cols="3"></b-col>
    </b-row>
    <b-row align-v="center" align-h="center" class="introduction-block">
      <div class="water"></div>
    </b-row>

    <b-modal ref="modalExplanation" title="Please, help poor Peter" @hidden="explanationClosed()" centered cancel-disabled>
      <p class="my-4">Hello from modal!</p>
    </b-modal>

    <div class="status">

    </div>
  </b-container>
</template>

<script>
import { GameLayers } from '../Game.vue'

export default {
  name: 'Introduction',
  data() {
    return { GameLayers }
  },
  methods:{
    explanationClosed() {
      console.log('Explanation closed');
    }
  },
  mounted() {
    // This shows the explanation pop-up on start
    this.$refs.modalExplanation.show()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.introduction {
  background-color: #4194B5;
  height: 100%;
  overflow: auto;
}

.introduction-block {
  position: relative;
  z-index: 1;
  height: 100%;
}

.sky {
  position: absolute;
  height: 50%;
  top: 0;
  z-index: 0;
  width: 100%;
  background: radial-gradient(ellipse at center, #f0f9ff 0%,#cbebff 47%,#a1dbff 100%);
}
</style>
