<template>
  <div class="TaskList" v-if="$store.state.showTaskList">
    <b-button @click="toggle('showName')">Show name?</b-button>
    <b-button @click="toggle('showAd')">Show address?</b-button>
    <b-button @click="toggle('showLong')">Show long?</b-button>
    <b-button @click="toggle('showLat')">Show lat?</b-button>
    <b-button @click="toggle('showPrio')">Show prio?</b-button>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "TaskList",
  methods: {
    changeColor(field) {
      $store.commit("changeColor", field);
    },
    toggle(field) {
      $store.commit("toggle", field);
    }
  }
});
</script>

<style scoped>
@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translateX(35px);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.TaskList {
  position: fixed;
  bottom: 0px;
  top: 0px;
  right: 0px;
  width: 350px;
  background-color: lightgrey;
  border-left-style: solid;
  border-left-width: 1px;
  border-left-color: grey;
  animation-name: fadeInRight;
  animation-duration: 1s;
}

.shown {
  display: inherit;
}

.hidden {
  display: none;
}
</style>