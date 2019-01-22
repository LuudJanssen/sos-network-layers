<!--
  This is our main Game component. This component is always active and controls what part of the game is being shown 
  (introduction, physical layer, application layer).
-->

<!-- This is the HTML part of the Game component -->
<template>
  <div id="game">
    <router-view></router-view>
  </div>
</template>

<!-- This is the TypeScript part of the Game component. -->
<script>
  import Vue from "vue";
  import Vuex from "vuex";
  import './components/materialIcons.css'
  import { Tab, COLOR, colorOptions } from "./components/tabs";
  import { formItems, firstAddressFormItem, secondAddressFormItem, cityFormItem, countryFormItem, longitudeFormItem, latitudeFormItem } from "./components/formItems";
  import { ConnectionStatus } from "./shared/connectionStatus";

  Vue.use(Vuex);

  const introductionModule = {
    namespaced: true,
    state: {
      hadExplanation: false
    },
    mutations: {
      explanationShown(state) {
        state.hadExplanation = true
      }
    }
  }

  const connectionModule = {
    namespaced: true,
    state: {
      lights: [true, false, true, false],
      hadExplanation: false
    },
    getters: {
      finished: state => state.lights.every(light => light === true)
    },
    mutations: {
      setLights(state, lights) {
        state.lights = lights
      },
      explanationShown(state) {
        state.hadExplanation = true
      }
    }
  };

  const TAB = {
    Home: new Tab("home", ["Hello", "Island", "Home", "Welcome"], "Home", colorOptions, "home"),
    Sos: new Tab("sos", ["Reporting", "Ahhhh", "Report SOS", "Stuck"], "Report SOS", colorOptions, "form"),
    AboutUs:  new Tab("aboutUS", ["History", "About us", "We", "Info about us"], "About us", colorOptions, ""),
    CoreValues:  new Tab("coreValues", ["Core values", "Tell me more", "Interesting", "More"], "Core values", colorOptions, "")
  }

  const usabilityModule = {
    namespaced: true,
    state: {
      formItems,
      editModeEnabled: false,
      tabs: [TAB.Home, TAB.Sos, TAB.AboutUs, TAB.CoreValues],
      buttonSos: false,
      innovationsSectionRemoved: false,
      emergencySectionRemoved: false,
      formSectionRemoved: false,
      emergencyFormSectionRemoved: false
    },
    getters: {
      finished: (state, getters) => {
        return getters.correctTabVisibility &&
               getters.correctTabColors &&
               getters.correctTabNames &&
               state.buttonSos &&
               getters.correctSectionsRemoved &&
               getters.correctFormItemsRemoved
      },
      correctTabVisibility: () => {
        return !TAB.Home.disabled && !TAB.Sos.disabled && TAB.AboutUs.disabled && TAB.CoreValues.disabled
      },
      correctTabColors: (state) => {
        return state.tabs.filter(tab => tab !== TAB.Sos && !tab.disabled).every(tab => tab.color === COLOR.Normal.value) &&
               TAB.Sos.color === COLOR.Orange.value
      },
      correctTabNames: (state) => {
        return state.tabs.filter(tab => !tab.disabled).every(tab => tab.text === tab.correctText)
      },
      correctSectionsRemoved: (state) => state.innovationsSectionRemoved && !state.emergencySectionRemoved,
      correctFormItemsRemoved: (state) => {
        const correctVisible = [longitudeFormItem, latitudeFormItem].every(formItem => !formItem.disabled)
        const incorrectInvisible = [firstAddressFormItem, secondAddressFormItem, cityFormItem, countryFormItem].every(formItem => formItem.disabled)

        return correctVisible && incorrectInvisible && state.emergencyFormSectionRemoved
      }
    },
    mutations: {
      toggleEditMode(state) {
        state.editModeEnabled = !state.editModeEnabled
      }
    }
  }

  const store = new Vuex.Store({
    modules: {
      introduction: introductionModule,
      connection: connectionModule,
      usability: usabilityModule
    },
    getters: {
      connectionStatus: (state, getters) => {
        if (getters['usability/finished']) {
          return ConnectionStatus.CONNECTED
        }

        if (getters['connection/finished']) {
          return ConnectionStatus.USABILITY_PROBLEMS
        }

        return ConnectionStatus.NO_CONNECTION
      }
    },
  });

  /**
   * This is the component code itself. It only exposes the current layer and all game layers to the template.
   */
  export default {
    name: "Game",
    store,
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

  p, h1, h2, h3, h4, h5, h6, div {
    font-family: "Montserrat", Helvetica, Arial, sans-serif;
  }
</style>
