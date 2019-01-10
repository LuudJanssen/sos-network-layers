<template>
  <div>
    <b-nav justified tabs class="nav">
      <div v-bind:class="tab1">
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
      <div
        v-bind:class="{taskToggle, 'taskToggleOff':this.$store.state.hidden, 'taskToggleOn':!this.$store.state.hidden}"
        @click="toggle"
      >
        <b-nav-item>{{ this.$store.state.hidden ? 'Open Tasks' : 'Close Tasks'}} &#128466;</b-nav-item>
      </div>
    </b-nav>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "NavBar",
  data: () => {
    return {
      tab1: {
        opt1: true,
        opt2: false,
        opt3: false
      },
      tab2: {
        opt1: true,
        opt2: false,
        opt3: false
      },
      tab3: {
        opt1: true,
        opt2: false,
        opt3: false
      },
      tab4: {
        opt1: true,
        opt2: false,
        opt3: false
      },
      tabDevMenu: {
        opt1: true,
        opt2: false,
        opt3: false
      }
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


