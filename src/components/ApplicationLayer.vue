<!--
  This is the applciation layer component which contains the application layer game
-->
<template>
  <div class="application-layer">
    <div>
      <h1>Application Layer</h1>
      <NavBar></NavBar>
      <router-view :datas="devIsHidden"/>
    </div>
    <DevMenu :datas="devIsHidden"></DevMenu>
  </div>
</template>

<script>
import NavBar from "./NavBar";
import DevMenu from "./DevMenu";

export default {
  name: "ApplicationLayer",
  components: {
    NavBar,
    DevMenu
  }
};
</script>

<style scoped>
.application-layer {
  width: 100%;
  height: 100%;
  text-align: center;
  padding-top: 20px;
}
</style>
