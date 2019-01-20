<template>
  <main>
    <b-row class="island-backdrop" align-h="center">
      <b-container class="text-center py-5">
        <h1 class="display-2 text-light">Stuck on an island?</h1>
        <h1 class="display-4 text-light">sos.io is here to save you!</h1>
        <b-row align-h="center" class="py-3 text-light">
          <b-col cols="8">
            <p class="lead">
              Sos.io is an organization that cares about <b>you</b>. When you are in an emergency you want to be helped as
              fast as possible and you want to be helped as friendly as possible.
            </p>
            <p class="lead">
              Sos.io offers premium service in case of an emergency. We have state of the art transport to pick you up
              and for a small price you can receive immediate medical care and also enjoy our built-in wellness centers
              available on all transport methods.
            </p>
            <b-button size="lg" variant="primary" class="mt-3">
              <i class="material-icons md-36 align-middle mr-3">cloud_download</i>
              <span class="align-middle">Download the brochure</span>
            </b-button>
          </b-col>
        </b-row>
      </b-container>
    </b-row>
    <b-row class="pt-5" align-h="center">
      <b-container class="text-center">
        <h1>Our latest innovations</h1>

        <b-row class="py-5">
          <b-col cols="4">
            <i class="material-icons md-128">directions_boat</i>
            <h4 class="py-3">Boat rescue</h4>
          </b-col>
          <b-col cols="4">
            <i class="material-icons md-128">360</i>
            <h4 class="py-3">360° feedback integration</h4>
          </b-col>
          <b-col cols="4">
            <i class="material-icons md-128">local_bar</i>
            <h4 class="py-3">In-transfer bar</h4>
          </b-col>
        </b-row>
      </b-container>
    </b-row>
    <b-row class="bg-warning text-white py-5">
      <b-container class="text-center">
        <h1>In case of an emergency</h1>

        <b-row class="pt-5 pb-1">
          <b-col cols="4">
            <h2>
              <i class="material-icons md-36 align-middle pr-3">call</i>
              <span class="align-middle">077-1234567</span>
            </h2>
          </b-col>
          <b-col cols="4">
            <router-link tag="h2" to="form">
              <i class="material-icons md-36 align-middle pr-3">link</i>
              <span class="align-middle">Fill in our form</span>
            </router-link>
          </b-col>
          <b-col cols="4">
            <h2>
              <i class="material-icons md-36 align-middle pr-3">record_voice_over</i>
              <span class="align-middle">Scream for help</span>
            </h2>
          </b-col>
        </b-row>
      </b-container>
    </b-row>
  </main>

  <!--<div class="app-home">
    <div class="box">
      <div>
        <h1 id="header1"
          v-bind:class="{'yellow':this.$store.state.color.header1 === 'yellow', 'black':this.$store.state.color.header1 === 'black'}"
        >HTML Ipsum Presents</h1>
        <b-popover target="header1">
          <b-button @click="changeColor('header1')">Change Color</b-button>
        </b-popover>

        
        <p id="text1"
          v-bind:class="{'yellow':this.$store.state.color.text1 === 'yellow', 'black':this.$store.state.color.text1 === 'black'}"
        >
          <strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
          <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed,
          <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui.
          <a
            href="#"
          >Donec non enim</a> in turpis pulvinar facilisis. Ut felis.
        </p>
        <b-popover target="text1">
          <b-button @click="changeColor('text1')">Change Color</b-button>
        </b-popover>

        <b-popover target="header2">
          <b-button @click="changeColor('header2')">Change Color</b-button>
        </b-popover>
        <h2 id="header2"
          v-bind:class="{'black':this.$store.state.color.header2 === 'black', 'yellow':this.$store.state.color.header2 === 'yellow'}"
        >Header Level 2</h2>

        <b-popover target="text2">
          <b-button @click="changeColor('text2')">Change Color</b-button>
        </b-popover>
        <p id="text2">
          <ol
            v-bind:class="{'black':this.$store.state.color.text2 === 'black', 'yellow':this.$store.state.color.text2 === 'yellow'}"
          >
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
            <li>Aliquam tincidunt mauris eu risus.</li>
          </ol>

          <blockquote
            v-bind:class="{'black':this.$store.state.color.text2 === 'black', 'yellow':this.$store.state.color.text2 === 'yellow'}"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.
          </blockquote>
        </p>

        <b-popover target="header3">
          <b-button @click="changeColor('header3')">Change Color</b-button>
        </b-popover>
        <h3 id="header3"
          v-bind:class="{'black':this.$store.state.color.header3 === 'black', 'yellow':this.$store.state.color.header3 === 'yellow'}"
        >Header Level 3</h3>

        <b-popover target="text3">
          <b-button @click="changeColor('text3')">Change Color</b-button>
        </b-popover>
        <p id="text3">
        <ul
          v-bind:class="{'black':this.$store.state.color.text3 === 'black', 'yellow':this.$store.state.color.text3 === 'yellow'}"
        >
          <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
          <li>Aliquam tincidunt mauris eu risus.</li>
        </ul>
        </p>
      </div>
    </div>
  </div>-->
</template>

<script>
    import Vue from "vue";
    
    export default Vue.extend({
      name: "AppHome",
      methods: {
        changeColor(field) {
          this.$store.commit("changeColor", field);
        }
      }
    });
</script>

<style scoped>
  .island-backdrop {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../assets/sos-io-island-man.jpg") no-repeat center bottom;
    background-size: cover;
  }

  .material-icons.md-36 { font-size: 36px; }
  .material-icons.md-128 { font-size: 128px; }

    .box {
      width: 60%;
      height: 100%;
      padding: 30px;
      padding-left: 100px;
    }
    
    .yellow {
      color: yellow;
    }
    
    .black {
      color: black;
    }
</style>