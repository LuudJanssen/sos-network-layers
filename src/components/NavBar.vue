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

      <b-nav-item v-for="tab in tabs" v-bind:style="{ backgroundColor: tab.color.backgroundColor, color: tab.color.color }" :key="tab.text">
        {{ tab.text }}
      </b-nav-item>
    </b-nav>

    <b-button v-for="tab in tabs" @click="tab.toggleText()" :key="tab.text">
      {{ tab.textOptions[0] }}
    </b-button>

    <b-button v-for="tab in tabs" @click="tab.toggleColor()" :key="tab.text">
      {{ tab.textOptions[0] }}
    </b-button>
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
  constructor(textOptions, colorOptions) {
    this.textOptions = textOptions
    this.colorOptions = colorOptions
    this.text = this.textOptions[0]
    this.color = this.colorOptions[0]
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
  new Tab(['Home', 'Home3', 'Home8'], colorOptions),
  new Tab(['About', 'About2'], colorOptions)
]

export default Vue.extend({
  name: "NavBar",
  data: () => {
    return {
      tabs
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
.nav {
  padding-top: 20px;
}
.devMenuToggle {
  position: fixed;
  right: 0px;
}
</style>


