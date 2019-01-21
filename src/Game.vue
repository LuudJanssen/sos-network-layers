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
  import {Tab, colorOptions} from "./components/tabs";
  import {ConnectionStatus} from "./shared/connectionStatus";

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

  const usabilityModule = {
    namespaced: true,
    state: {
      editModeEnabled: false
    },
    getters: {
      finished: state => false
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
    state: {
      color: {
        text1: "black",
        text2: "black",
        text3: "black",
        header1: "black",
        header2: "black",
        header3: "black"
      },
      tabs: [
        new Tab(
            "tab1",
            ["Island", "Home", "Welcome", "Hello"],
            colorOptions,
            "home"
        ),
        new Tab(
            "tab2",
            ["Reporting", "Ahhhh", "Report SOS", "Stuck"],
            colorOptions,
            "form"
        ),
        new Tab(
            "tab3",
            ["History", "About us", "We", "Info about us"],
            colorOptions,
            ""
        ),
        new Tab(
            "tab4",
            ["Core values", "Tell me more", "Interesting", "More"],
            colorOptions,
            ""
        )
      ],
      tabsData: [
        //since I cannot read values of the class properly, this is added to circumvent reading from the class
        {
          color: colorOptions[0],
          text: "Island"
        },
        {
          color: colorOptions[0],
          text: "Island"
        },
        {
          color: colorOptions[0],
          text: "Island"
        },
        {
          color: colorOptions[0],
          text: "Island"
        }
      ],
      form: {
        showName: true,
        showAd: true,
        showLong: true,
        showLat: true,
        showPrio: true
      },
      taskList: {
        textCheck: false,
        sosCheck: false,
        formCheck: false,
        complete: false
      }
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
            state.color.text1 =
                state.color.text1 === "black" ? "yellow" : "black";
          } else if (field === "text2") {
            state.color.text2 =
                state.color.text2 === "black" ? "yellow" : "black";
          } else if (field === "text3") {
            state.color.text3 =
                state.color.text3 === "black" ? "yellow" : "black";
          }
        } else if (field.substring(0, 4) === "head") {
          if (field === "header1") {
            state.color.header1 =
                state.color.header1 === "black" ? "yellow" : "black";
          } else if (field === "header2") {
            state.color.header2 =
                state.color.header2 === "black" ? "yellow" : "black";
          } else if (field === "header3") {
            state.color.header3 =
                state.color.header3 === "black" ? "yellow" : "black";
          }
        }
      },
      changeConnectionStatus(state, status) {
        state.connectionStatus = status;
      },
      set(state, param) {
        if (param.field.substring(0, 6) === "textCh") {
          state.taskList.textCheck = param.value;
        } else if (param.field.substring(0, 6) === "sosChe") {
          state.taskList.sosCheck = param.value;
        } else if (param.field.substring(0, 6) === "formCh") {
          state.taskList.formCheck = param.value;
        } else if (param.field.substring(0, 6) === "comple") {
          state.taskList.complete = param.value;
        }
      }
    }
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
