<!--
  This is the applciation layer component which contains the application layer game
-->
<template>
    <div class="application-layer">
        <h1>Application Layer</h1>
        <NavBar> </NavBar>
    </div>
    
</template>

<script>
import NavBar from './NavBar'
export default {
  name: 'ApplicationLayer',
  components: {
    NavBar
  }
}
</script>

<style scoped>
.application-layer {
  width: 100%;
  height: 100%;
  text-align: center;
  padding-top: 20px;
}
</style>
