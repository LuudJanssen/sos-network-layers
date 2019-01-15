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
  </div>
</template>

<style scoped>
.nav {
  padding-top: 20px;
}
</style>


