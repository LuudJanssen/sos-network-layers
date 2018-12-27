<!--
  This is the component for the physical layer, which contains the physical layer game.
-->
<template>
    <div class="physical-layer">
        <h1>This is the physical layer</h1>
        <h4>wire game:</h4>
        <h5>{{out1}} {{out2}} {{out3}} {{out4}}</h5>
        <h5>{{in1}} {{in2}} {{in3}} {{in4}}</h5>
        <h4>light game</h4>
        <h5>
          <b-container>
          <b-row align-v="center" align-h="center" class="wire-buttons">
            <b-col>
              <p v-if="light1">ON </p>
              <p v-else>OFF </p>
            </b-col>
            <b-col>
              <p v-if="light2">ON </p>
              <p v-else>OFF </p>
            </b-col>
            <b-col>
              <p v-if="light3">ON </p>
              <p v-else>OFF </p>
            </b-col>
            <b-col>
              <p v-if="light4">ON </p>
              <p v-else>OFF </p>
            </b-col>
          </b-row>
          </b-container>
        </h5>

        
        <!-- buttons for the game -->
        <b-container fluid class="physical-layer">
          <b-row align-v="center" align-h="center" class="wire-buttons">
            <b-col></b-col>
            <b-col cols="1">
              <b-button v-on:click="update1" :variant="'primary'" >
                {{ in1 }}
              </b-button>
            </b-col>
            <b-col cols="1">
              <b-button v-on:click="update2" :variant="'primary'">
                {{ in2 }}
              </b-button>
            </b-col>
            <b-col cols="1">
              <b-button v-on:click="update3" :variant="'primary'">
                {{ in3 }}
              </b-button>
            </b-col>
            <b-col cols="1">
              <b-button v-on:click="update4" :variant="'primary'">
                {{ in4 }}
              </b-button>
            </b-col>
            <b-col></b-col>
          </b-row>
        </b-container>

        <!-- usefull code
        <p v-if="pressed_button"></p>
        <p v-else-if="hoi"></p>
        <p v-else></p>
        <ul v-for="entry in array" :key="entry.ID">{{entry}}</ul>
        -->
    </div>
</template>

<script>
export default {
  data(){
    return{
      name: 'PhysicalLayer',

      out1: 1,
      out2: 2,
      out3: 3,
      out4: 4,

      in1: 1,
      in2: 2,
      in3: 3,
      in4: 4,

      light1: false,
      light2: false,
      light3: false,
      light4: false,

      outmem: 0
    }
  },
  methods: {
    update1(){
      this.button++
      this.outmem = this.out1
      this.out1 = this.out2
      this.out2 = this.outmem

      this.light1 = !this.light1
      this.light4!= !this.light2
    },
    update2(){
      this.button++
      this.outmem = this.out2
      this.out2 = this.out3
      this.out3 = this.out4
      this.out4 = this.outmem

      this.light2 = this.light1
    },
    update3(){
      this.button++
      this.outmem = this.out1
      this.out1 = this.out4
      this.out4 = this.outmem

      this.light4 = !Math.max(this.light4, this.light2)
    },
    update4(){
      this.button++
      this.outmem = this.out1
      this.out1 = this.out4
      this.out4 = this.outmem
      this.outmem = this.out2
      this.out2 = this.out3
      this.out3 = this.outmem

      this.light1 = !this.light1
      this.light2 = !this.light2
      this.light3 = !this.light3
      this.light4 = !this.light4
    }
  }
}
</script>

<style scoped>
.physical-layer {
  width: 100%;
  height: 100%;
  text-align: center;
  padding-top: 100px;
}
  
.wire-buttons {
  height: 100%;
}
</style>
