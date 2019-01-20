<template>
  <b-navbar toggleable="sm" type="dark" variant="dark">
    <b-container>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand>
        <i class="material-icons md-36 d-inline-block pr-2 align-middle">announcement</i>
        <span class="align-middle">sos.io</span>
      </b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item
              v-for="tab in this.$store.state.tabs"
              v-bind:id="tab.id"
              v-bind:to="tab.route"
              v-bind:style="{ backgroundColor: tab.color.backgroundColor, color: tab.color.color }"
              v-bind:key="tab.text">
            {{ tab.text }}
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
  <!--
  <div>
    <b-nav class="nav">
      <b-nav-item
        v-bind:id="tab.id"
        v-bind:to="tab.route"
        v-for="tab in this.$store.state.tabs"
        v-bind:style="{ backgroundColor: tab.color.backgroundColor, color: tab.color.color }"
        :key="tab.text"
      >{{ tab.text }}</b-nav-item>
    </b-nav>

    <b-popover
      v-bind:target="tab.id"
      v-for="tab in this.$store.state.tabs"
      title="Navigation Bar"
      :key="tab.text"
    >
      <b-button @click="tab.toggleText()">Change Text</b-button>

      <b-button @click="tab.toggleColor()">Change Color</b-button>
    </b-popover>
  </div>-->
</template>

<style scoped>
.nav {
  padding-top: 20px;
}
</style>


