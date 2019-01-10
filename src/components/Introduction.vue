<!--
  This is the introduction component which plays the game introduction for the player and emits the "startLayer" event
  for the Game component to catch and change layers with
-->
<template>
  <b-container fluid class="introduction">
    <b-row align-v="center" align-h="center" class="introduction-block">
      <div class="sky"></div>
      <img class="sideburn-left" src="../assets/water-sideburn-left.svg" v-parallax="0.2">
      <img class="sideburn-right" src="../assets/water-sideburn-right.svg" v-parallax="0.2">
      <b-col cols="3"></b-col>
      <b-col>
        <img src="../assets/island-detail.svg">
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
  </b-container>
</template>

<script>
import { GameLayers } from '../Game.vue'

export default {
  name: 'Introduction',
  data() {
    return { GameLayers }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.introduction {
  background-color: #4194B5;
  height: 100%;
  min-height: 100%;
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

.sideburn-left {
  position: absolute;
  width: 25%;
  left: 0;
  bottom: 0;
}

.sideburn-right {
  position: absolute;
  width: 20%;
  right: 0;
  bottom: 0;
}
</style>
