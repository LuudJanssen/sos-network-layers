<template>
  <div>
    <b-nav class="nav">

      <b-nav-item v-bind:id="tab.id" v-bind:to="tab.route" v-for="tab in tabs" v-bind:style="{ backgroundColor: tab.color.backgroundColor, color: tab.color.color }" :key="tab.text">
        {{ tab.text }}
      </b-nav-item>
    </b-nav>

    <b-popover v-bind:target="tab.id" v-for="tab in tabs" title="Navigation Bar" :key="tab.text">
      <b-button @click="tab.toggleText()">
        Change Text
      </b-button>

      <b-button @click="tab.toggleColor()">
            Change Color 
    </b-button>
    </b-popover>

      <div v-bind:class="{taskToggle, 'taskToggleOff':this.$store.state.hidden, 'taskToggleOn':!this.$store.state.hidden}"
           @click="toggle">
        <b-nav-item>{{ this.$store.state.hidden ? 'Open Tasks' : 'Close Tasks'}} &#128466;</b-nav-item>
      </div>
  </div>
</template>

<script>
import Vue from "vue";

const Color = {
  Transparent: {
    backgroundColor: "rgba(0,0,0,0)",
    color: "black"
  },
  Orange: {
    backgroundColor: "#ffc107",
    color: "white"
  }
}

class Tab {
  constructor(id, textOptions, colorOptions, route) {
    this.textOptions = textOptions
    this.colorOptions = colorOptions
    this.text = this.textOptions[0]
    this.color = this.colorOptions[0]
    this.route = route
    this.id = id
  }

  toggleText() {
    this.text = this.toggleOption(this.textOptions, this.text)
  }

  toggleColor() {
    this.color = this.toggleOption(this.colorOptions, this.color)
  }

  toggleOption(options, option) {
    const currentIndex = options.indexOf(option)
    let newIndex = currentIndex + 1

    if (options.length === newIndex) {
      newIndex = 0
    }

    return options[newIndex]
  }
}

const colorOptions = [Color.Transparent, Color.Orange]

const tabs = [
  new Tab('tab1', ['Island', 'Home', 'Welcome'], colorOptions, 'apphome'),
  new Tab('tab2', ['Reporting', 'Ahhhh','Report SOS'], colorOptions, 'appform'),
  new Tab('tab3', ['History', 'About us'], colorOptions, ''),
  new Tab('tab4', ['Core values', 'Tell me more'], colorOptions, '')
]

export default Vue.extend({
  name: "NavBar",
  data: () => {
    return {
      tabs,
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


