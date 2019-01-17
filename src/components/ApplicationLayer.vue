<!--
  is the applciation layer component which contains the application layer game
-->
<template>
  <div class="application-layer">
    <div>
      <h1>Application Layer</h1>
      <div
        v-bind:class="{taskToggle, 'taskToggleOn':$store.state.showTaskList, 'taskToggleOff':!$store.state.showTaskList}"
        @click="toggle('showTaskList')"
      >
        <b-button>{{ $store.state.showTaskList ? 'Close Tasks' : 'Open Tasks'}} &#128466;</b-button>
      </div>
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

export default {
  name: "ApplicationLayer",
  components: {
    NavBar,
    TaskList
  },
  methods: {
    toggle(field) {
      $store.commit("toggle", field);
    }
  }
};
</script>

<style scoped>
@keyframes fadeInRight {
  0% {
    transform: translateX(35px);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes fadeInLeft {
  0% {
    transform: translateX(-35px);
  }
  100% {
    transform: translateX(0);
  }
}

.application-layer {
  width: 100%;
  height: 100%;
  text-align: center;
  padding-top: 20px;
}

.taskToggle {
}

.taskToggleOff {
  position: fixed;
  top: 10px;
  right: 0px;
  animation-name: fadeInLeft;
  animation-duration: 1s;
}

.taskToggleOn {
  position: fixed;
  top: 10px;
  right: 350px;
  animation-name: fadeInRight;
  animation-duration: 1s;
}
</style>
