<!--
  This is the component for the physical layer, which contains the physical layer game.
-->

<template>
    <div class="physical-layer">
        <h1>This is the physical layer</h1>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

export default class PhysicalLayer extends Vue {}
</script>

<style scoped>
.physical-layer {
  width: 100%;
  height: 100%;
  text-align: center;
  padding-top: 100px;
}
</style>
