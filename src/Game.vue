<!--
  This is our main Game component. This component is always active and controls what part of the game is being shown 
  (introduction, physical layer, application layer).
-->

<!-- This is the HTML part of the Game component -->
<template>
  <div id="game">
    <!-- 
      Here we reference the Introduction component, it's template gets loaded here.The Introduction component emits the
      "startLayer" event with the game layer to be loaded as the argument. We then set the layer to the right layer.
    -->
    <Introduction v-if="layer === GameLayers.Introduction" @startLayer="layer = $event"/>

    <!-- We show the right layer depending on the layer value -->
    <PhysicalLayer v-if="layer === GameLayers.PhysicalLayer"/>
    <ApplicationLayer v-if="layer === GameLayers.ApplicationLayer"/>
  </div>
</template>

<!-- This is the TypeScript part of the Game component. -->
<script>
import Introduction from "./components/Introduction.vue";
import PhysicalLayer from "./components/PhysicalLayer.vue";
import ApplicationLayer from "./components/ApplicationLayer.vue";

// We create an enum with all the game's layers.
export const GameLayers = {
  Introduction,
  PhysicalLayer,
  ApplicationLayer
};

/**
 * This is the component code itself. It only exposes the current layer and all game layers to the template.
 */
export default {
  name: "Game",
  components: GameLayers,
  data() {
    return {
      layer: GameLayers.Introduction,
      GameLayers
    };
  }
};
</script>

<!-- 
  This is the CSS style for the game component, it also contains a wildcard (*) selector for setting the font on all 
  elements
-->
<style>
#game {
  width: 100%;
  height: 100%;
}

* {
  font-family: "Montserrat", Helvetica, Arial, sans-serif;
}
</style>
