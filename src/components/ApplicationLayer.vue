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

import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    hidden: true,
    color: {
      text1: "yellow",
      text2: "yellow",
      text3: "yellow",
      header1: "yellow",
      header2: "yellow",
      header3: "yellow"
    }
  },
  mutations: {
    toggle(state) {
      state.hidden = !state.hidden;
    },
    changeColor(state, field) {
      if (field.charAt(0) === "t") {
        if (field === "text1") {
          state.color.text1 = state.color.text1 === "yellow" ? "black" : "yellow";
        } else if (field === "text2") {
          state.color.text2 = state.color.text2 === "yellow" ? "black" : "yellow";
        } else if (field === "text3") {
          state.color.text3 = state.color.text3 === "yellow" ? "black" : "yellow";
        }
      } else if (field.charAt(0) === "h") {
        if (field === "header1") {
          state.color.header1 = state.color.header1 === "yellow" ? "black" : "yellow";
        } else if (field === "header2") {
          state.color.header2 = state.color.header2 === "yellow" ? "black" : "yellow";
        } else if (field === "header3") {
          state.color.header3 = state.color.header3 === "yellow" ? "black" : "yellow";
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
