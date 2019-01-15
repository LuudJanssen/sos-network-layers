<template>
  <div
    class="DevMenu"
    v-bind:class="{'shown':!this.$store.state.hidden, 'hidden':this.$store.state.hidden}"
  ></div>
</template>

<style scoped>
.DevMenu {
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 200px;
  background-color: red;
}
.shown {
  display: inherit;
}
.hidden {
  display: none;
}
</style>