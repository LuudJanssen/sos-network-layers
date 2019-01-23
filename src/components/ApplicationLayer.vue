<!--
  is the application layer component which contains the application layer game
-->
<template>
  <div class="page-container">
    <div class="site-content d-flex flex-column">
      <nav-bar class="flex-shrink-0 position-fixed w-100 navbar"></nav-bar>

      <b-container fluid class="d-flex flex-column flex-grow-1 mt-5">
        <router-view></router-view>
      </b-container>

      <Footer class="flex-shrink-0"></Footer>
    </div>
    <div class="task-list-container" v-bind:class="{ 'expanded': editModeEnabled }">
      <task-list class="task-list"></task-list>
    </div>
    <b-navbar class="task-list-toggle" type="dark" @click="toggleEditMode()">
      <b-navbar-brand>
        <span class="align-middle">Enter edit mode</span>
        <i class="material-icons align-middle pl-3">settings</i>
      </b-navbar-brand>
    </b-navbar>

    <b-navbar class="back-icon" type="dark">
      <router-link tag="b-navbar-brand" to="/island">
        <i class="material-icons align-middle pr-3">arrow_back</i>
        <span class="align-middle">Back</span>
      </router-link>
      <b-navbar-brand @click="showExplanation()">
        <i class="material-icons align-middle pr-3">help</i>
      </b-navbar-brand>
    </b-navbar>

    <!-- Explanation modal -->
    <b-modal @hidden="explanationShown()"
             ref="modalExplanation"
             title="Please, fix this bloated site"
             centered
             ok-only>
      <p>
        Bob finally has an internet connection and he can connect to sos.io. However, this site is full of things that
        distract Bob from his goal: Fill in the emergency form so they can come get him.
      </p>
      <p>
        Since you, as a prospective computer science student, have knowledge about what is necessary information and
        what is not and how to let things stand out, you can fix this for him!
      </p>
      <p>
        Look around the website and spot the mistakes. You can enable edit mode on the top right to change parts of the
        site.
      </p>
      <p>
        Try to create a usable site, good luck!
      </p>
    </b-modal>

    <b-modal ref="finishedModal" title="YOU DID IT!" centered ok-only>
      <p>
        Sos.io just received an inquiry from Bob to come and get them, he's saved! And that's all because of you.
      </p>
      <p>
        You fixed his internet connection and you made it easy for Bob to use the site, well done!
      </p>
      <p>
        On a serious note, if you thought this were fun exercises, using logic and thinking about usability design;
        that's what computer science is about. Without you knowing, you've already learned about the different layers of
        the internet and common practices for usability design. During the computer science study you will further dive
        into these subjects and also use scientific proof in the field of logic and psychology to see why your
        adaptations worked the way they did.
      </p>
    </b-modal>
  </div>
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
    ...mapState(['editModeEnabled', 'hadExplanation']),
    ...mapGetters(['finished'])
  },
  methods: {
    ...mapMutations(['toggleEditMode', 'explanationShown']),
    showExplanation() {
      this.$refs.modalExplanation.show();
    }
  },
  mounted() {
    // This shows the explanation pop-up on start
    if (!this.hadExplanation) {
      this.showExplanation()
    }
  },
  watch: {
    finished: function (finished) {
      if (finished) {
        this.$refs.finishedModal.show();
      }
    }
  }
};
</script>

<style scoped>
  .page-container {
    display: flex;
    min-height: 100%;
  }

  .site-content {
    flex: 1 1 100%;
  }

  .task-list-container {
    z-index: 100;
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

  .back-icon,
  .task-list-toggle {
    position: fixed;
    top: 0;
    cursor: pointer;
    user-select: none
  }

  .task-list-toggle {
    right: 0;
  }

  .back-icon {
    left: 0;
  }

  .navbar {
    z-index: 99;
  }
</style>
