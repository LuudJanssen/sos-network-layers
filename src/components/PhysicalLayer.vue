<!--
  This is the component for the physical layer, which contains the physical layer game.
-->
<template>
  <div id = "physical">
    <div class="physical-layer">
        <h1>This is the physical layer</h1>
        <h4>wire game:</h4>
        <h5>
          <b-container fluid class="col">
            <b-row align-v="center" align-h="center">
              <div v-for="output in outputs" :key="output.id">
                <b-col cols="1">{{ output.connection }}</b-col>
              </div>
            </b-row>
          </b-container>
        </h5>
        <h5>
          <b-container fluid class="col">
            <b-row align-v="center" align-h="center">
              <div v-for="input in inputs" :key="input.id">
                <b-col cols="1">{{ input.input }}</b-col>
              </div>
            </b-row>
          </b-container>
        </h5>
        <h4>light game</h4>
        <h5>
          <b-container fluid class="col">
            <b-row align-v="center" align-h="center">
              <div v-for="light in lights" :key="light.id">
                  <b-col cols="1"> 
                      <p v-if="light.value"><img :src='light_on'  class="img" /> </p>
                      <p v-else><img :src="light_off"  class="img" /> </p>
                  </b-col>
              </div>
            </b-row>
          </b-container>
        </h5>

        
        <!-- buttons for the game -->
        <b-container fluid class="col">
          <b-row align-v="center" align-h="center" class="wire-buttons">
            <b-col></b-col>
            <div v-for="button in buttons" :key="button.id">
              <b-col cols="1">
                <b-button v-on:click="update(button.id)" :variant="'primary'" >
                  {{ button.id }}
                </b-button>
              </b-col>
            </div>
            <b-col></b-col>
          </b-row>
        </b-container>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      name: 'PhysicalLayer',

      outputs: [
        {output: 1, connection: 1},
        {output: 2, connection: 2},
        {output: 3, connection: 3},
        {output: 4, connection: 4}
      ],

      inputs: [
        {input: 1},
        {input: 2},
        {input: 3},
        {input: 4},
      ],

      buttons: [
        {button: 1},
        {button: 2},
        {button: 3},
        {button: 4},        
      ],

      lights: [
        {light: 1, value: true},
        {light: 2, value: false},
        {light: 3, value: true},
        {light: 4, value: false}
      ],

      light_on: require('../res/img/light_on.jpg'),
      light_off: require('../res/img/light_off.jpg'),

      outmem: 0,
    }
  },
  methods: {
    update: function(nrButton){
      switch(nrButton){
        case 0:
          this.outmem = this.outputs[0].connection
          this.outputs[0].connection = this.outputs[1].connection
          this.outputs[1].connection = this.outmem

          this.lights[0].value = !this.lights[0].value
          break
        case 1:
          this.outmem = this.outputs[1].connection
          this.outputs[1].connection = this.outputs[2].connection
          this.outputs[2].connection = this.outputs[3].connection
          this.outputs[3].connection = this.outmem

          this.lights[1].value = this.lights[0].value
          break
        case 2:
          this.outmem = this.outputs[0].connection
          this.outputs[0].connection = this.outputs[3].connection
          this.outputs[3].connection = this.outmem

          this.lights[3].value = !Math.min(this.lights[3].value, this.lights[1].value)
          break
        case 3:
          this.outmem = this.outputs[0].connection
          this.outputs[0].connection = this.outputs[3].connection
          this.outputs[3].connection = this.outmem
          this.outmem = this.outputs[1].connection
          this.outputs[1].connection = this.outputs[2].connection
          this.outputs[2].connection = this.outmem

          this.lights[0].value = !this.lights[0].value
          this.lights[1].value = !this.lights[1].value
          this.lights[2].value = !this.lights[2].value
          this.lights[3].value = !this.lights[3].value
          break
          
      }
    }
  }
}
</script>

<style scoped>
.physical-layer {
  width: 100%;
  height: 100%;
  text-align: center;
  padding-top: 30px;
}
.col{
  width: 80%;
  height: 80%;
  text-align: center;
}
  
.wire-buttons {
  height: 0%;
}

.img {
  max-height: 3cm;
}
</style>
