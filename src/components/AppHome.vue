<template>
  <div class="app-home">
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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p>
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
  </div>
</template>

<style scoped>
.box {
  width: 60%;
  height: 100%;
  padding: 30px;
  padding-left: 100px;
}

.red {
  color: red;
}

.blue {
  color: blue;
}

.yellow {
  color: yellow;
}

.black {
  color: black;
}
</style>
