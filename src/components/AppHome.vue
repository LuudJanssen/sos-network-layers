<template>
  <div class="app-home">
    <div class="box">
      <div>
        <h1
          v-bind:class="{'red':this.$store.state.color.header1 === 'red', 'blue':this.$store.state.color.header1 === 'blue'}"
        >HTML Ipsum Presents</h1>

        <p
          v-bind:class="{'red':this.$store.state.color.text1 === 'red', 'blue':this.$store.state.color.text1 === 'blue'}"
        >
          <strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
          <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed,
          <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui.
          <a
            href="#"
          >Donec non enim</a> in turpis pulvinar facilisis. Ut felis.
        </p>

        <h2
          v-bind:class="{'red':this.$store.state.color.header2 === 'red', 'blue':this.$store.state.color.header2 === 'blue'}"
        >Header Level 2</h2>

        <ol
          v-bind:class="{'red':this.$store.state.color.text2 === 'red', 'blue':this.$store.state.color.text2 === 'blue'}"
        >
          <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
          <li>Aliquam tincidunt mauris eu risus.</li>
        </ol>

        <blockquote
          v-bind:class="{'red':this.$store.state.color.text2 === 'red', 'blue':this.$store.state.color.text2 === 'blue'}"
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p>
        </blockquote>

        <h3
          v-bind:class="{'red':this.$store.state.color.header3 === 'red', 'blue':this.$store.state.color.header3 === 'blue'}"
        >Header Level 3</h3>

        <ul
          v-bind:class="{'red':this.$store.state.color.text3 === 'red', 'blue':this.$store.state.color.text3 === 'blue'}"
        >
          <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
          <li>Aliquam tincidunt mauris eu risus.</li>
        </ul>
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
