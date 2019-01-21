<!--
  is the applciation layer component which contains the application layer game
-->
<template>
  <div class="page-container">
    <div class="site-content">
      <nav-bar></nav-bar>

      <b-container fluid>
        <router-view></router-view>
      </b-container>

      <Footer></Footer>
    </div>
    <div class="task-list-container" v-bind:class="{ 'expanded': editModeEnabled }">
      <task-list class="task-list"></task-list>
    </div>
    <b-navbar class="task-list-toggle" type="dark" @click="toggleEditMode()">
      <b-navbar-brand>
        <span class="align-middle">Enter edit mode</span>
        <i class="material-icons md-36 align-middle pl-3">settings</i>
      </b-navbar-brand>
    </b-navbar>
  </div>
  <!--<div class="application-layer">
    <div>
      <h1>Application Layer</h1>
      <div
        v-bind:class="{taskToggle, 'taskToggleOn':this.$store.state.showTaskList, 'taskToggleOff':!this.$store.state.showTaskList}"
        @click="toggle('showTaskList')"
      >
        <b-button>{{ this.$store.state.showTaskList ? 'Close Tasks' : 'Open Tasks'}} &#128466;</b-button>
      </div>
      <NavBar></NavBar>
      <router-view/>
    </div>
    <TaskList></TaskList>
  </div>-->
</template>

<script>
import NavBar from "./NavBar";
import Footer from "./Footer";
import TaskList from "./TaskList";
import { createNamespacedHelpers } from 'vuex'

const { mapMutations, mapState, mapGetters } = createNamespacedHelpers('usability');

export default {
  name: "ApplicationLayer",
  components: {
    NavBar,
    TaskList,
    Footer
  },
  computed: {
    ...mapState(['editModeEnabled'])
  },
  methods: {
    toggle(field) {
      this.$store.commit("toggle", field);
    },
    ...mapMutations(['toggleEditMode'])
  }
};
</script>

<style scoped>
  .page-container {
    display: flex;
  }

  .site-content {
    flex: 1 1 100%;
  }

  .task-list-container {
    z-index: 1;
    flex: 0 0 0;
    box-shadow: 0 0 0 rgba(0,0,0,0), 0 0 0 rgba(0,0,0,0);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  }

  .task-list-container.expanded {
    flex-basis: 20%;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
  }

  .task-list {
    position: fixed;
    width: 20%;
    height: 100%;
  }

  .task-list-toggle {
    position: absolute;
    top: 0;
    cursor: pointer;
    user-select: none
  }

  .task-list-toggle {
    right: 0;
  }

  .edit-mode-toggle {
    right: 10%;
  }

@keyframes fadeInRight {
  0% {
    transform: translateX(35px);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes fadeInLeft {
  0% {
    transform: translateX(-35px);
  }
  100% {
    transform: translateX(0);
  }
}

.application-layer {
  width: 100%;
  height: 100%;
  text-align: center;
  padding-top: 20px;
}

.taskToggleOff {
  position: fixed;
  top: 10px;
  right: 0px;
  animation-name: fadeInLeft;
  animation-duration: 1s;
}

.taskToggleOn {
  position: fixed;
  top: 10px;
  right: 350px;
  animation-name: fadeInRight;
  animation-duration: 1s;
}
</style>
