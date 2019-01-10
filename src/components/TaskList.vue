<template>
  <div
    class="TaskList"
    v-bind:class="{'hidden':this.$store.state.hidden, 'shown':!this.$store.state.hidden}"
  ></div>
</template>

<style scoped>
.TaskList {
  position: fixed;
  bottom: 0px;
  top: 0px;
  right: 0px;
  width: 25%;
  background-color: lightgrey;
  border-left-style: solid;
  border-left-width: 1px;
  border-left-color: grey;
}
.shown {
  display: inherit;
}
.hidden {
  display: none;
}
</style>