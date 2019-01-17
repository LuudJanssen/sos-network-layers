<template>
  <div>
    <b-nav class="nav">
      <b-nav-item
        v-bind:id="tab.id"
        v-bind:to="tab.route"
        v-for="tab in this.$store.state.tabs"
        v-bind:style="{ backgroundColor: tab.color.backgroundColor, color: tab.color.color }"
        :key="tab.text"
      >{{ tab.text }}</b-nav-item>
    </b-nav>

    <b-popover
      v-bind:target="tab.id"
      v-for="tab in this.$store.state.tabs"
      title="Navigation Bar"
      :key="tab.text"
    >
      <b-button @click="tab.toggleText()">Change Text</b-button>

      <b-button @click="tab.toggleColor()">Change Color</b-button>
    </b-popover>
  </div>
</template>

<style scoped>
.nav {
  padding-top: 20px;
}
</style>


