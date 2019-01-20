<!--
  This is the introduction component which plays the game introduction for the player and emits the "startLayer" event
  for the Game component to catch and change layers with
-->
<template>
  <b-container fluid class="introduction">
    <b-row align-v="center" align-h="center" class="introduction-block">
      <div class="sky"></div>
      <b-col cols="3"></b-col>
      <b-col>
        <img src="../assets/island-detail.svg" class="introduction-island">
      </b-col>
      <b-col cols="3"></b-col>
    </b-row>
    <b-row align-v="center" align-h="center" class="introduction-block pb-5">
      <img src="../assets/seafloor-introduction.svg" class="seafloor seafloor-back" v-parallax="0.2">
      <img src="../assets/seafloor-introduction-front.svg" class="seafloor" v-parallax="0.1">
      <img src="../assets/seafloor-introduction-rocks.svg" class="seafloor-rocks">
      <div class="water"></div>
      <div class="cable"></div>
      <div class="games">
        <router-link tag="div"
                     class="game"
                     v-bind:class="{ 'next': isNext(game),
                                     'finished': $store.getters[game.name + '/finished'],
                                     'unimplemented': !game.implemented,
                                     'left': index % 2 === 0,
                                     'right': index % 2 === 1 }"
                     v-for="(game, index) in games"
                     v-bind:key="game.text"
                     v-bind:to="game.route">
          <i class="material-icons md-36 align-middle">
            {{ $store.getters[game.name + '/finished'] ? 'check' : (isNext(game) ? 'offline_bolt' : 'help_outline') }}
          </i>
          {{ game.text }}
        </router-link>
      </div>
    </b-row>

    <b-modal ref="modalExplanation" title="Please, help poor Bob" @hidden="explanationShown()" centered cancel-disabled>
      <p>Hey there, future computer science student!</p>
      <p>
        The man you saw on the island is Bob. He got stranded and wants to get off the island. He has a computer, as
        well as an internet cable going into the computer. He wants to access sos.io, a startup that wants to "change
        the world by making it easier than ever to report an emergency".
      </p>
      <p>
        However, Bob has trouble connecting to the website. He's in dire need of a computer science student to fix these
        problems for him. If you scroll down you see what problems Bob's facing. Find out if computer science fits you
        and
        try to fix the problems.
      </p>
      <p>Good luck!</p>
    </b-modal>

    <div class="status">Connection status: {{ this.$store.getters.connectionStatus }}</div>
    <i class="help-icon material-icons md-36 text-light px-3 py-3 position-absolute" @click="showExplanation()">help</i>
  </b-container>
</template>

<script>
  import { createNamespacedHelpers } from "vuex"
  import { GameLayers } from "../shared/gameLayers";
  import { ConnectionStatus } from "../shared/connectionStatus";

  const { mapMutations, mapState } = createNamespacedHelpers('introduction')

  class Game {
    constructor(text, name, route, implemented = true) {
      this.text = text;
      this.name = name;
      this.route = route;
      this.implemented = implemented;
    }
  }

  const games = [
    new Game("Usability", 'usability', '/usability'),
    new Game("Security", 'connection', '', false),
    new Game("Routing", 'connection', '', false),
    new Game("Data Transport", 'connection', '', false),
    new Game("Connection", 'connection', '/connection')
  ];

  export default {
    name: "Introduction",
    data() {
      return {GameLayers, games};
    },
    computed: mapState(['hadExplanation']),
    methods: {
      ...mapMutations(['explanationShown']),
      showExplanation() {
        this.$refs.modalExplanation.show();
      },
      isNext(game) {
        return game.implemented && (
                 (game.name === 'usability' && this.$store.getters.connectionStatus === ConnectionStatus.USABILITY_PROBLEMS) ||
                 (game.name === 'connection' && this.$store.getters.connectionStatus === ConnectionStatus.NO_CONNECTION)
               )
      }
    },
    mounted() {
      // This shows the explanation pop-up on start
      if (!this.hadExplanation) {
        this.showExplanation()
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .help-icon {
    top: 75px;
    right: 0;
    cursor: pointer;
  }

  .material-icons.md-36 { font-size: 36px; }

  .introduction {
    background-color: #4194b5;
  }

  .introduction-block {
    position: relative;
  }

  .introduction-island {
    position: relative;
    z-index: 10;
  }

  .sky {
    position: absolute;
    height: 50%;
    top: 0;
    z-index: 0;
    width: 100%;
    background: radial-gradient(ellipse at center, #f0f9ff 0%, #cbebff 47%, #a1dbff 100%);
  }

  .status {
    position: fixed;
    right: 15px;
    top: 15px;
    z-index: 100;
    font-size: 1.5em;
    padding: 12px 24px;
    background-color: #006064;
    color: white;
    border-radius: 4px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  .seafloor {
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  .seafloor-back {
    bottom: 48px;
  }

  .seafloor-rocks {
    position: absolute;
    bottom: 15px;
    width: 45%;
    right: 0;
    z-index: 1;
  }

  .cable {
    border: 30px solid transparent;
    border-image: url("../assets/cable-border.png") 30 stretch;
    height: calc(150% - 24px);
    width: 50%;
    position: absolute;
    bottom: 72px;
    left: 50%;
  }

  .game {
    position: relative;
    padding: 12px 24px;
    background-color: white;
    border-radius: 5px;
    font-size: 1.5em;
    color: #4194b5;
    margin: 48px 0;
  }

  .game.finished,
  .game.finished:before {
    background-color: #C6FF00;
    color: rgba(0,0,0,0.87);
  }

  .game.finished:after {
    border-color: #C6FF00;
  }

  .game.left {
    left: calc(-50% - 48px);
  }

  .game.right {
    left: calc(50% + 62px);
  }

  .game.next {
    background-color: #FFFF00;
    cursor: pointer;
  }

  .game.unimplemented {
    opacity: 0.7
  }

  .game:after {
    position: absolute;
    content: "";
    display: block;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: solid 4px white;
    right: -72px;
    top: 50%;
    transform: translateY(-50%);
  }

  .game.right:after {
    left: -72px;
  }

  .game:before {
    position: absolute;
    content: "";
    display: block;
    width: 36px;
    height: 4px;
    right: -36px;
    background-color: white;
    top: 50%;
    transform: translateY(-50%);
  }

  .game.right:before {
    left: -36px;
  }
</style>
