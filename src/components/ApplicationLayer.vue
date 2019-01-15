<!--
  This is the applciation layer component which contains the application layer game
-->
<template>
  <div class="application-layer">
    <div>
      <h1>Application Layer</h1>
      <NavBar></NavBar>
      <router-view/>
    </div>
    <TaskList></TaskList>
  </div>
</template>

<script>
import NavBar from "./NavBar";
import TaskList from "./TaskList";
import Tabs from "./tabs";

import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    showTaskList: true,
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
      showPrio: true,
    }
  },
  mutations: {
    toggle(state, field) {
      if (field.substring(0,6) === "taskLi") {
        state.showTaskList = !state.showTaskList
      } else if (field.substring(0,6) === "showNa") {
        state.form.showName = !state.form.showName
      } else if (field.substring(0,6) === "showAd") {
        state.form.showAd = !state.form.showAd
      } else if (field.substring(0,6) === "showLo") {
        state.form.showLong = !state.form.showLong
      } else if (field.substring(0,6) === "showLa") {
        state.form.showLat = !state.form.showlat
      } else if (field.substring(0,6) === "showPr") {
        state.form.showPrio = !state.form.showPrio
      }
    },
    changeColor(state, field) {
      if (field.substring(0,4) === "text") {
        if (field === "text1") {
          state.color.text1 = state.color.text1 === "blue" ? "red" : "blue";
        } else if (field === "text2") {
          state.color.text2 = state.color.text2 === "blue" ? "red" : "blue";
        } else if (field === "text3") {
          state.color.text3 = state.color.text3 === "blue" ? "red" : "blue";
        }
      } else if (field.substring(0,4) === "head") {
        if (field === "header1") {
          state.color.header1 = state.color.header1 === "blue" ? "red" : "blue";
        } else if (field === "header2") {
          state.color.header2 = state.color.header2 === "blue" ? "red" : "blue";
        } else if (field === "header3") {
          state.color.header3 = state.color.header3 === "blue" ? "red" : "blue";
        }
      }
    }
  }
});

export default {
  name: "ApplicationLayer",
  store,
  components: {
    NavBar,
    TaskList
  }
};
</script>

<style scoped>
.application-layer {
  width: 100%;
  height: 100%;
  text-align: center;
  padding-top: 20px;
}
</style>
