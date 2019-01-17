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
    <Introduction v-if="layer === GameLayers.Introduction" 
                  @startLayer="layer = $event"/>

    <!-- We show the right layer depending on the layer value -->
    <PhysicalLayer v-if="layer === GameLayers.PhysicalLayer"/>
    <ApplicationLayer v-if="layer === GameLayers.ApplicationLayer"/>
  </div>
</template>

<!-- This is the TypeScript part of the Game component. -->
<script>
import Vue from 'vue'
import Vuex from 'vuex'
import Introduction from './components/Introduction.vue'
import PhysicalLayer from './components/PhysicalLayer.vue'
import ApplicationLayer from './components/ApplicationLayer.vue'
import { GameLayers } from './shared/gameLayers'
import Tabs from './components/tabs'

Vue.use(Vuex)

export const ConnectionStatus = {
  NO_CONNECTION: 'NO_CONNECTION',
  USABILITY_PROBLEMS: 'USABILITY_PROBLEMS',
  CONNECTED: 'CONNECTED'
}

const store = new Vuex.Store({
  state: {
    showTaskList: true,
    connectionStatus: ConnectionStatus.NO_CONNECTION,
    color: {
      text1: "blue",
      text2: "blue",
      text3: "blue",
      header1: "blue",
      header2: "blue",
      header3: "blue"
    },
    tabs: [
      new Tabs.Tab(["Island", "Home", "Welcome"], Tabs.colorOptions, "apphome"),
      new Tabs.Tab(
        ["Reporting", "Ahhhh", "Report SOS"],
        Tabs.colorOptions,
        "appform"
      ),
      new Tabs.Tab(["History", "About us"], Tabs.colorOptions, ""),
      new Tabs.Tab(["Core values", "delete"], Tabs.colorOptions, "")
    ],
    form: {
      showName: true,
      showAd: true,
      showLong: true,
      showLat: true,
      showPrio: true
    }
  },
  mutations: {
    toggle(state, field) {
      if (field.substring(0, 6) === "showTa") {
        state.showTaskList = !state.showTaskList;
      } else if (field.substring(0, 6) === "showNa") {
        state.form.showName = !state.form.showName;
      } else if (field.substring(0, 6) === "showAd") {
        state.form.showAd = !state.form.showAd;
      } else if (field.substring(0, 6) === "showLo") {
        state.form.showLong = !state.form.showLong;
      } else if (field.substring(0, 6) === "showLa") {
        state.form.showLat = !state.form.showlat;
      } else if (field.substring(0, 6) === "showPr") {
        state.form.showPrio = !state.form.showPrio;
      }
    },
    changeColor(state, field) {
      if (field.substring(0, 4) === "text") {
        if (field === "text1") {
          state.color.text1 = state.color.text1 === "blue" ? "red" : "blue";
        } else if (field === "text2") {
          state.color.text2 = state.color.text2 === "blue" ? "red" : "blue";
        } else if (field === "text3") {
          state.color.text3 = state.color.text3 === "blue" ? "red" : "blue";
        }
      } else if (field.substring(0, 4) === "head") {
        if (field === "header1") {
          state.color.header1 = state.color.header1 === "blue" ? "red" : "blue";
        } else if (field === "header2") {
          state.color.header2 = state.color.header2 === "blue" ? "red" : "blue";
        } else if (field === "header3") {
          state.color.header3 = state.color.header3 === "blue" ? "red" : "blue";
        }
      }
    },
    changeConnectionStatus(state, status) {
      state.connectionStatus = status
    }
  }
});

/**
 * This is the component code itself. It only exposes the current layer and all game layers to the template.
 */
export default {
  name: 'Game',
  components: { Introduction, PhysicalLayer, ApplicationLayer },
  store,
  data() {
    return {
      layer: GameLayers.Introduction,
      GameLayers,
    }
  },
}
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
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
}
</style>
