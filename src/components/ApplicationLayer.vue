<!--
  This is the applciation layer component which contains the application layer game
-->
<template>
    <div class="application-layer">
        <h1>Application Layer</h1>
        <NavBar> </NavBar>
        <router-view />
    </div>
    
</template>

<script>
import NavBar from './NavBar'
import AppHome from './AppHome'
export default {
  name: 'ApplicationLayer',
  components: {
    NavBar,
    AppHome
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
