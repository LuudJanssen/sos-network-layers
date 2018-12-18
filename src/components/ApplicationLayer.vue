<!--
  This is the applciation layer component which contains the application layer game
-->

<template>
    <div class="application-layer">
        <h1>Application Layer</h1>
         <NavBar/>
         <Form/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import NavBar from './components/NavBar.vue'
import Form from './components/Form.vue'

export enum AppComponents {
  NavBar,
  Form,
}

@Component({
  components: {
    NavBar,
    Form,
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
