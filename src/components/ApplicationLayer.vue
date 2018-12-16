<template>
    <div class="application-layer">
        <h1>Application Layer</h1>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class ApplicationLayer extends Vue {}
</script>

<style scoped>
.application-layer {
  width: 100%;
  height: 100%;
  text-align: center;
  padding-top: 100px;
}
</style>
