<template>
  <div
    class="TaskList"
    v-bind:class="{'hidden':this.$store.state.hidden, 'shown':!this.$store.state.hidden}"
  >
  </div>
</template>

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