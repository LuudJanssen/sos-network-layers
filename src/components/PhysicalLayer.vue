<!--
  This is the component for the physical layer, which contains the physical layer game.
-->
<template>
  <div id = "physical">
    <div class="physical-layer">
        <h1>This is the physical layer</h1>
        <h4>{{ TextMessage }}</h4>
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
                <b-button v-on:click="update(button.button)" :variant="'primary'" >
                  {{ button.button }}
                </b-button>
              </b-col>
            </div>
            <b-col></b-col>
          </b-row>
        </b-container>


        <!-- possible options -->
        <b-container fluid class="col">
          Possible button actions:
          <ul>
            <li>inverse</li>
            <li>XOR</li>
            <li>Max/Min</li>
            <li>master-slave</li>
          </ul>
        </b-container>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "PhysicalLayer",

      buttons: [
        {button: 0},
        {button: 1},
        {button: 2},
        {button: 3},        
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
      TextMessage: "Turn on all the lights",
      ifdone: "not done"
    }
  },
  methods: {
    update: function(nrButton){
      
      switch(nrButton){
        case 0:
          this.lights[0].value = !this.lights[0].value
          break
        case 1:
          this.lights[1].value = !this.lights[0].value
          break
        case 2:
          if((this.lights[0].value && !this.lights[1].value)||!this.lights[0].value && this.lights[1].value)
            this.lights[2].value = true;
          else
            this.lights[2].value = false;
          break
        case 3:
          this.lights[3].value = !Math.max(this.lights[0].value,this.lights[1].value,this.lights[2].value)
          break
      }
      if(this.lights[0].value && this.lights[1].value && this.lights[2].value && this.lights[3].value){
        this.TextMessage = "YOU WIN!!"
      }
    }
  }
};
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
  max-height: 300px;
}
</style>
