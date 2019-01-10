<!--
  This is the applciation layer component which contains the application layer game
-->
<template>
  <div class="application-layer">
    <div>
      <h1>Application Layer</h1>
      <NavBar></NavBar>
      <router-view :datas="devIsHidden"/>
    </div>
    <DevMenu :datas="devIsHidden"></DevMenu>
  </div>
</template>

<script>
import NavBar from "./NavBar";
import DevMenu from "./DevMenu";

import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    hidden: true
  },
  mutations: {
    toggle(state) {
      state.hidden = !state.hidden;
      alert(hidden);
    }
  }
});

export default {
  name: "ApplicationLayer",
  store,
  components: {
    NavBar,
    DevMenu
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
