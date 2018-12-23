<!--
  This is the applciation layer component which contains the application layer game
-->

<template>
    <div class="application-layer">
        <h1>Application Layer</h1>
         <NavBar><NavBar/>
         
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import NavBar from 'NavBar.vue'
import FormS from 'FormS.vue'

export enum AppComponents {
  NavBar,
  FormS,
}

@Component({
  components: {
    NavBar,
    FormS,
  },
})

export default class ApplicationLayer extends Vue {
  public data() {
    return {
      elements: AppComponents.NavBar,
      AppComponents,
    }
  }
}
</script>

<style scoped>
.application-layer {
  width: 100%;
  height: 100%;
  text-align: center;
  padding-top: 100px;
}
</style>
