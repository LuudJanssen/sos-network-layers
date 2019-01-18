<!--
  This is the component for the physical layer, which contains the physical layer game.
-->
<template>
  <b-container fluid class="physical-layer-container">
    <b-row class="full-height-row">
      <b-col cols="8" class="router-container">
        <b-row class="router pt-5 pb-4">
          <img src="../assets/seafloor-physical.svg" class="seafloor">

          <b-col class="px-0">
            <div class="cable"></div>
          </b-col>

          <b-col class="px-0">
            <!-- Router SVG -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 272.37 207.54">
              <path fill="#2d2d2d"
                    d="M55.68,57.12l9.09,56.53L51.6,115.77,42.51,59.24,36.28,2.54c-.07-.68.57-1.38,1.61-1.87A6.81,6.81,0,0,1,39.76.1c2-.33,3.85.22,4.06,1.23Z"></path>
              <path fill="#212120"
                    d="M51.85,57.73l9.09,56.53-9.35,1.5L42.51,59.24,36.28,2.54c-.07-.68.57-1.38,1.61-1.87,1.13.15,2,.61,2.11,1.28Z"></path>
              <path fill="#212120"
                    d="M216.7,57.12l-9.09,56.53,13.17,2.12,9.09-56.53,6.23-56.7c.07-.68-.57-1.38-1.61-1.87A6.81,6.81,0,0,0,232.61.1c-2-.33-3.85.22-4.06,1.23Z"></path>
              <path fill="#2d2d2d"
                    d="M220.52,57.73l-9.09,56.53,9.35,1.5,9.09-56.53,6.23-56.7c.07-.68-.57-1.38-1.61-1.87-1.13.15-2,.61-2.11,1.28Z"></path>
              <path fill="#212120"
                    d="M29.86,207.54h0a9.12,9.12,0,0,1-9.12-9.12v-5H39v5A9.12,9.12,0,0,1,29.86,207.54Z"></path>
              <path fill="#212120"
                    d="M242.52,207.54h0a9.12,9.12,0,0,1-9.12-9.12v-5h18.24v5A9.12,9.12,0,0,1,242.52,207.54Z"></path>
              <rect fill="#fff" x="8.82" y="110.47" width="254.72" height="88.24" rx="10" ry="10"></rect>
              <path fill="#c6c6c6" d="M8.82,168.71v20a10,10,0,0,0,10,10H253.55a10,10,0,0,0,10-10v-20Z"></path>
              <path fill="#212120"
                    d="M272.37,133.24v42.7a12.18,12.18,0,0,1-12.18,12.18h-248A12.18,12.18,0,0,1,0,175.94v-42.7a12.18,12.18,0,0,1,12.18-12.18h248A12.18,12.18,0,0,1,272.37,133.24Z"></path>
              <path fill="#2d2d2d"
                    d="M272.37,133.24v42.7a12.17,12.17,0,0,1-1.52,5.89H12.66A12.66,12.66,0,0,1,0,169.19V133.24a12.18,12.18,0,0,1,12.18-12.18h248A12.18,12.18,0,0,1,272.37,133.24Z"></path>
              <circle fill="#c12d2d" cx="24.02" cy="154.59" r="8.63"></circle>

              <!-- The circle lights of the router. X coordinate is dependent of the array index -->
              <circle v-for="(state, index) in lightStates"
                      v-bind:key="index"
                      v-bind:cx="78.14 + index * 17.06"
                      v-bind:fill="state ? '#2faf1c' : '#6d7c6b'"
                      cy="154.59" r="4.51"></circle>

              <path class="h"
                    d="M252.47,159.1H188.93a4.51,4.51,0,0,1-4.51-4.51h0a4.51,4.51,0,0,1,4.51-4.51h63.53a4.51,4.51,0,0,1,4.51,4.51h0A4.51,4.51,0,0,1,252.47,159.1Z"></path>
            </svg>

            <div class="router-explanation py-3 px-3">These should be turned on</div>
          </b-col>

          <b-col class="px-0">
            <div class="cable"></div>
          </b-col>
        </b-row>
        <b-row class="controls">
          <b-col>
            <b-row class="py-5">
              <b-col>
                <b-button v-for="command in commands" v-bind:key="command.name" @click="execute(command)">
                  Execute <code>{{ command.name }}</code> command
                </b-button>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-col>

      <!-- The terminal displaying code -->
      <b-col cols="4" class="terminal">
        <div class="terminal-content py-3">
          <code>Last login: Thu Jan 1 1970 00:00:00 on ttys00</code>

          <!-- Two rows for each executed command -->
          <div v-for="(command, index) in executedCommands" v-bind:key="index">

            <!-- The command line -->
            <code><span class="blue">god</span>@<span class="green">underwater-router:</span><span
                class="yellow">~</span>$ {{ command.name }}</code>

            <!-- The result line -->
            <code>
              <span v-for="(state, index) in command.state" v-bind:key="index">
                <span>Port {{ index }}: </span>
                <span v-bind:class="state ? 'green' : 'red'">{{ state }} </span>
              </span>
            </code>

            <br>
          </div>

          <!-- The empty command line -->
          <code><span class="blue">god</span>@<span class="green">underwater-router:</span><span class="yellow">~</span>$</code>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
    class Command {
        constructor(state, name) {
            this.state = state.slice()
            this.executed = false
            this.name = name
        }
    }

    /**
     * Command that returns the inverse state for the first light.
     */
    class BootstrapCommand extends Command {
        constructor(state) {
            super(state, "bootstrap")
        }

        run() {
            this.executed = true;
            this.state[0] = !this.state[0]
            return this.state
        }
    }

    /**
     * Command that sets the state of the second light to the inverse of the first light.
     */
    class LinkCommand extends Command {
        constructor(state) {
            super(state, "link")
        }

        run() {
            this.executed = true;
            this.state[1] = !this.state[0]
            return this.state
        }
    }

    /**
     * Command that sets the state of the third light to the XOR of the first two lights.
     */
    class FlashCommand extends Command {
        constructor(state) {
            super(state, "flash")
        }

        run() {
            this.executed = true;
            this.state[2] = (this.state[0] && !this.state[1]) || (!this.state[0] && this.state[1])
            return this.state
        }
    }

    /**
     * Command that sets the state of the third light to the inverse of the max value of the first three lights. Hence, if
     * any of the first lights is on this results in the off state. They have to be all off to result in the on state for
     * the fourth light.
     */
    class ConfigCommand extends Command {
        constructor(state) {
            super(state, "config")
        }

        run() {
            this.executed = true;
            this.state[3] = !Math.max(this.state[0], this.state[1], this.state[2])
            return this.state
        }
    }

    const commands = [
        {
            name: "bootstrap",
            class: BootstrapCommand,
        }, {
            name: "link",
            class: LinkCommand,
        }, {
            name: "flash",
            class: FlashCommand,
        }, {
            name: "config",
            class: ConfigCommand,
        }
    ]

    const executedCommands = []

    export default {
        data() {
            return {
                name: "PhysicalLayer",
                lightStates: [true, false, true, false],
                commands,
                executedCommands,
            }
        },
        methods: {
            execute(command) {
                const executedCommand = new command.class(this.lightStates)
                this.lightStates = executedCommand.run()
                this.executedCommands.push(executedCommand)
            }
        }
    };
</script>

<style scoped>
  .physical-layer-container {
    height: 100%;
    background-color: #B98E56;
  }

  .full-height-row {
    height: 100%;
  }

  .terminal {
    background-color: #263238;
    max-height: 100%;
    overflow-y: hidden;
  }

  .terminal-content {
    position: absolute;
    min-height: 100%;
    bottom: 0;
  }

  .terminal code {
    display: block;
    color: #B0BEC5;
    font-size: 1.2em;
  }

  .terminal .blue {
    color: #82AAFF;
  }

  .terminal .red {
    color: #FF5370;
  }

  .terminal .green {
    color: #C3E88D;
  }

  .terminal .yellow {
    color: #FFCB6B;
  }

  .router {
    position: relative;
    background-color: #4194B5;
  }

  .router-explanation {
    position: absolute;
    background-color: rgba(255,255,255,.87);
    border-radius: 4px;
    width: 60%;
    left: 10%;
  }

  .router-explanation:before {
    content: '';
    display: block;
    position: absolute;
    width: 50%;
    height: 20px;
    border: 5px solid rgba(255,255,255,.87);
    border-top: 0;
    left: 21%;
    top: -120%;
  }

  .router-explanation:after {
    content: '';
    display: block;
    position: absolute;
    height: calc(120% - 20px);
    left: calc(46% - 2px);
    top: calc(-120% + 20px);
    border: 2px solid rgba(255,255,255,.87);
  }

  .router-container {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .controls {
    flex: 1 1 auto;
    background: url("../assets/seafloor-sand.svg")
  }

  .cable {
    border: 30px solid transparent;
    border-image: url('../assets/cable-border.png') 30 stretch;
    border-left: 0;
    height: 85%;
  }

  .seafloor {
    width: 100%;
    position: absolute;
    bottom: 0;
  }
</style>
