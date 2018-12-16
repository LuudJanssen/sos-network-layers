<template>
  <div class="introduction">
    <StyledButton @click="$emit('startPhysicalLayer')" text="Start Physicial Layer Game"/>
    <StyledButton @click="$emit('startApplicationLayer')" text="Start Application Layer Game"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import StyledButton from './StyledButton.vue'

@Component({
  components: {
    StyledButton,
  },
})
export default class Introduction extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.introduction {
  background-color: blue;
  width: 100%;
  height: 100%;
  text-align: center;
  padding-top: 100px;
}
</style>
