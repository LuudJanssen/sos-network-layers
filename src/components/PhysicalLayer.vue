<!--
  This is the component for the physical layer, which contains the physical layer game.
-->
<template>
  <b-container fluid class="physical-layer-container">
    <b-row class="full-height-row">
      <b-col cols="8"></b-col>
      <b-col cols="4" class="terminal">
        <code>Last login: Thu Jan 1 1970 00:00:00 on ttys00</code>
        <code><span class="blue">god</span>@<span class="green">underwater-router:</span><span class="yellow">~</span>$</code>
      </b-col>
    </b-row>
  </b-container>

  <!--
  <div id="physical" class="physical-container">
    <div class="physical-layer">
        <h1>Connection Layer</h1>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 272.37 207.54" class="router">
            <title>router</title>
            <path fill="#2d2d2d" d="M55.68,57.12l9.09,56.53L51.6,115.77,42.51,59.24,36.28,2.54c-.07-.68.57-1.38,1.61-1.87A6.81,6.81,0,0,1,39.76.1c2-.33,3.85.22,4.06,1.23Z" />
            <path fill="#212120" d="M51.85,57.73l9.09,56.53-9.35,1.5L42.51,59.24,36.28,2.54c-.07-.68.57-1.38,1.61-1.87,1.13.15,2,.61,2.11,1.28Z" />
            <path fill="#212120" d="M216.7,57.12l-9.09,56.53,13.17,2.12,9.09-56.53,6.23-56.7c.07-.68-.57-1.38-1.61-1.87A6.81,6.81,0,0,0,232.61.1c-2-.33-3.85.22-4.06,1.23Z" />
            <path fill="#2d2d2d" d="M220.52,57.73l-9.09,56.53,9.35,1.5,9.09-56.53,6.23-56.7c.07-.68-.57-1.38-1.61-1.87-1.13.15-2,.61-2.11,1.28Z" />
            <path fill="#212120" d="M29.86,207.54h0a9.12,9.12,0,0,1-9.12-9.12v-5H39v5A9.12,9.12,0,0,1,29.86,207.54Z" />
            <path fill="#212120" d="M242.52,207.54h0a9.12,9.12,0,0,1-9.12-9.12v-5h18.24v5A9.12,9.12,0,0,1,242.52,207.54Z" />
            <rect fill="#fff" x="8.82" y="110.47" width="254.72" height="88.24" rx="10" ry="10" />
            <path fill="#c6c6c6" d="M8.82,168.71v20a10,10,0,0,0,10,10H253.55a10,10,0,0,0,10-10v-20Z" />
            <path fill="#212120" d="M272.37,133.24v42.7a12.18,12.18,0,0,1-12.18,12.18h-248A12.18,12.18,0,0,1,0,175.94v-42.7a12.18,12.18,0,0,1,12.18-12.18h248A12.18,12.18,0,0,1,272.37,133.24Z" />
            <path fill="#2d2d2d" d="M272.37,133.24v42.7a12.17,12.17,0,0,1-1.52,5.89H12.66A12.66,12.66,0,0,1,0,169.19V133.24a12.18,12.18,0,0,1,12.18-12.18h248A12.18,12.18,0,0,1,272.37,133.24Z" />
            <circle fill="#c12d2d" cx="24.02" cy="154.59" r="8.63" />

            <circle v-for="(light, index) in lights" 
                    :key="light.id" 
                    v-bind:cx="78.14 + index * 17.06"
                    v-bind:fill="light.value ? '#2faf1c' : '#6d7c6b'" 
                    cy="154.59" r="4.51" />

            <path class="h" d="M252.47,159.1H188.93a4.51,4.51,0,0,1-4.51-4.51h0a4.51,4.51,0,0,1,4.51-4.51h63.53a4.51,4.51,0,0,1,4.51,4.51h0A4.51,4.51,0,0,1,252.47,159.1Z" />
        </svg>
        
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
      </div>
  </div>-->
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
.physical-layer-container {
  height: 100%;
  background-color: #4194B5;
}

.full-height-row {
  height: 100%;
}

.terminal {
  padding-top: 24px;
  background-color: #1E1E1E;
}

.terminal code {
  display: block;
  color: #CCCCCC;
  font-size: 1.2em;
}

.terminal .blue {
  color: #2C7AD6;
}

.terminal .green {
  color: #93CEA8;
}

.terminal .yellow {
  color: #D7BA7D;
}

.physical-layer {
  width: 100%;
  height: 100%;
  text-align: center;
  padding-top: 30px;
  height: 100%;
}

.col {
  width: 80%;
  text-align: center;
}

.router {
  width: 30%;
}

.wire-buttons {
  height: 0%;
}

.img {
  max-height: 300px;
}
</style>
