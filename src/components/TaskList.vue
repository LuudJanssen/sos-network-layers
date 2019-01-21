<template>
  <div class="bg-light">
    <b-navbar toggleable="sm" type="dark" variant="primary">
      <b-navbar-brand>
        <i class="material-icons md-36 d-inline-block pr-2 align-middle">list</i>
        <span class="align-middle">Task List</span>
      </b-navbar-brand>
      <b-navbar-brand class="close-button ml-auto" @click="$store.commit('usability/toggleEditMode')">
        <span class="align-middle">Exit</span>
        <i class="material-icons md-36 d-inline-block pl-2 align-middle">close</i>
      </b-navbar-brand>
    </b-navbar>
  </div>
  <!--
  <div class="TaskList" v-if="this.$store.state.showTaskList">
    <b-button @click="checkTasks()" class="checkButton">Check tasks</b-button>
    <div>{{ this.$store.state.taskList.textCheck ? '&#10004;' : '&#10060;' }} Change navigation menu text</div>
    <div>{{ this.$store.state.taskList.sosCheck ? '&#10004;' : '&#10060;' }} Make SOS option more apparent</div>
    <div>{{ this.$store.state.taskList.formCheck ? '&#10004;' : '&#10060;' }} Sanitize the SOS form</div>
    <b-button
      @click="complete()"
      class="completeButton"
      v-if="this.$store.state.taskList.complete"
    >Complete application</b-button>
  </div>
  -->
</template>

<script>
import Vue from "vue";
import { colorOptions } from "./tabs";

//make a const containing a var for every task
//Change navigation menu text
//Make sos option more apparent
//Change form to contain only useful information

console.log(colorOptions);

export default Vue.extend({
  name: "TaskList",
  methods: {
    changeColor(field) {
      this.$store.commit("changeColor", field);
    },
    toggle(field) {
      this.$store.commit("toggle", field);
    },
    checkTasks() {
      //check and set vars or tasks to true or false accordingly
      //show finish button if everything is completed (could also be completed automatically?)
      if (
        this.$store.state.tabs[0].text ===
          this.$store.state.tabs[0].textOptions[1] &&
        this.$store.state.tabs[1].text ===
          this.$store.state.tabs[1].textOptions[2] &&
        this.$store.state.tabs[2].text ===
          this.$store.state.tabs[2].textOptions[1] &&
        this.$store.state.tabs[3].text ===
          this.$store.state.tabs[3].textOptions[0]
      ) {
        this.$store.commit("set", {
          field: "textCheck",
          value: true
        });
      } else {
        this.$store.commit("set", {
          field: "textCheck",
          value: false
        });
      }
      if (
        this.$store.state.tabs[1].color === colorOptions[1] &&
        this.$store.state.tabs[1].text ===
          this.$store.state.tabs[1].textOptions[2]
      ) {
        this.$store.commit("set", {
          field: "sosCheck",
          value: true
        });
      } else {
        this.$store.commit("set", {
          field: "sosCheck",
          value: false
        });
      }
      if (
        this.$store.state.form.showName === false &&
        this.$store.state.form.showAd === false &&
        this.$store.state.form.showLong === true &&
        this.$store.state.form.showLat === true &&
        this.$store.state.form.showPrio === false
      ) {
        this.$store.commit("set", {
          field: "formCheck",
          value: true
        });
      } else {
        this.$store.commit("set", {
          field: "formCheck",
          value: false
        });
      }
      if (
        this.$store.state.taskList.textCheck === true &&
        this.$store.state.taskList.sosCheck === true &&
        this.$store.state.taskList.formCheck === true
      ) {
        this.$store.commit("set", {
          field: "complete",
          value: true
        });
      } else {
        this.$store.commit("set", {
          field: "complete",
          value: false
        });
      }
    },
    complete() {
      //idk
    }
  }
});
</script>

<style scoped>
@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translateX(35px);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.close-button {
  cursor: pointer;
  user-select: none;
}

.checkButton {
  width: 100%;
  margin-bottom: 25px;
}

.completeButton {
  margin-bottom: 25px;
  margin-top: 25px;
  width: 100%;
}

.TaskList {
  position: fixed;
  bottom: 0px;
  top: 0px;
  right: 0px;
  width: 350px;
  background-color: lightgrey;
  border-left-style: solid;
  border-left-width: 1px;
  border-left-color: grey;
  animation-name: fadeInRight;
  animation-duration: 1s;
  padding: 25px;
  text-align: left;
}

.shown {
  display: inherit;
}

.hidden {
  display: none;
}
</style>