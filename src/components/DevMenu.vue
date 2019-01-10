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
  height: 25%;
  background-color: grey;
  border-top-style: solid;
  border-top-width: 1px;
}
.shown {
  display: inherit;
}
.hidden {
  display: none;
}
</style>