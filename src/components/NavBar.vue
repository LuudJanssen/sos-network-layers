<template>
  <div>
    <b-nav justified tabs class="nav">
      <!--<div v-bind:class="tab1">
        <b-nav-item to="apphome">Home</b-nav-item>
      </div>
      <div v-bind:class="tab2">
        <b-nav-item to="appform">Form</b-nav-item>
      </div>
      <div v-bind:class="tab3">
        <b-nav-item>
          <div v-if="tab3.opt1===true">option1</div>
          <div v-else>no option</div>
        </b-nav-item>
      </div>
      <div v-bind:class="tab4">
        <b-nav-item>Tab4</b-nav-item>
      </div>
      <div v-bind:class="tabDevMenu" class="devMenuToggle" @click="toggle">
        <b-nav-item>Toggle Dev Menu</b-nav-item>
      </div>-->
      <b-nav-item
        v-bind:to="tab.route"
        v-for="tab in this.$store.state.tabs"
        v-bind:style="{ backgroundColor: tab.color.backgroundColor, color: tab.color.color }"
        :key="tab.text"
      >{{ tab.text }}</b-nav-item>
    </b-nav>

    <b-button
      v-for="tab in this.$store.state.tabs"
      @click="tab.toggleText()"
      :key="tab.text"
    >{{ tab.textOptions[0] }}</b-button>

    <b-button
      v-for="tab in this.$store.state.tabs"
      @click="tab.toggleColor()"
      :key="tab.text"
    >{{ tab.textOptions[0] }}</b-button>
    <div
      v-bind:class="{taskToggle, 'taskToggleOff':this.$store.state.hidden, 'taskToggleOn':!this.$store.state.hidden}"
      @click="toggle"
    >
      <b-nav-item>{{ this.$store.state.hidden ? 'Open Tasks' : 'Close Tasks'}} &#128466;</b-nav-item>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "NavBar",
  data: () => {
    return {
      showElement: true
    };
  },
  methods: {
    toggle() {
      this.$store.commit("toggle");
    }
  }
});
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

.nav {
  padding-top: 20px;
}

.taskToggle:active {
  outline: none;
}

.taskToggleOff {
  position: fixed;
  right: 0px;
  animation-name: fadeInLeft;
  animation-duration: 1s;
}

.taskToggleOn {
  position: fixed;
  right: 350px;
  animation-name: fadeInRight;
  animation-duration: 1s;
}
</style>


