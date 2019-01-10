<!--
  This is the introduction component which plays the game introduction for the player and emits the "startLayer" event
  for the Game component to catch and change layers with
-->
<template>
  <b-container fluid class="introduction">
    <b-row align-v="center" align-h="center" class="introduction-buttons">
      <b-col></b-col>
      <b-col cols="2">
        <b-button
          :variant="'primary'"
          @click="$emit('startLayer', GameLayers.PhysicalLayer)"
        >Start Physical Layer Game</b-button>
      </b-col>
      <b-col cols="2">
        <b-button
          :variant="'primary'"
          @click="$emit('startLayer', GameLayers.ApplicationLayer)"
        >Start Application Layer Game</b-button>
      </b-col>
      <b-col></b-col>
    </b-row>
  </b-container>
</template>

<script>
import { GameLayers } from "../Game.vue";

export default {
  name: "Introduction",
  data() {
    return { GameLayers };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.introduction {
  background-color: var(--light);
  height: 100%;
}

.introduction-buttons {
  height: 100%;
}
</style>
