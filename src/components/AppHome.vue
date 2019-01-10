<template>
  <div class="app-home">
    <div class="box">
      <div v-bind:class="{'yellow':!isActive, 'black':isActive}">
        <b-button @click="changeColor()">Text color</b-button>
        <h1>HTML Ipsum Presents</h1>

        <p>
          <strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
          <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed,
          <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui.
          <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.
        </p>

        <h2>Header Level 2</h2>

        <ol>
          <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
          <li>Aliquam tincidunt mauris eu risus.</li>
        </ol>

        <blockquote>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p>
        </blockquote>

        <h3>Header Level 3</h3>

        <ul>
          <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
          <li>Aliquam tincidunt mauris eu risus.</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
/*
const Color = {
  Red:'red',
  Blue:'blue'
}*/

//const textColor = Color.Red
export default {
  name: "AppHome",
  data: () => {
    return {
      isActive: false
    };
  },
  methods: {
    changeColor() {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style scoped>
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
