<template>
  <div class="bg-light">
    <b-navbar toggleable="sm" type="dark" variant="primary">
      <b-navbar-brand>
        <i class="material-icons d-inline-block pr-2 align-middle">list</i>
        <span class="align-middle">Task List</span>
      </b-navbar-brand>
      <b-navbar-brand class="close-button ml-auto" @click="toggleEditMode()">
        <span class="align-middle">Exit</span>
        <i class="material-icons d-inline-block pl-2 align-middle">close</i>
      </b-navbar-brand>
    </b-navbar>
    <div class="px-3 py-3" v-for="[collectionTitle, tasks] in [
        [
          'Navigation bar', [
            [correctTabVisibility, 'Hide missing menu items'],
            [correctTabColors, 'Let the SOS form menu item stand out'],
            [correctTabNames, 'Use logical menu item texts']
          ]
        ], [
          'Landing page', [
            [buttonSos, 'Useful call-to-action button']
          ]
        ]
      ]"
         v-bind:key="collectionTitle">
      <h4 class="pb-1">{{ collectionTitle }}</h4>
      <p v-for="(task, index) in tasks" v-bind:key="index">
        <i class="material-icons align-middle mr-2" v-bind:class="{ 'text-primary': task[0] }">{{ task[0] ? 'check_box' : 'check_box_outline_blank' }}</i>
        <span class="align-middle" v-bind:class="{ 'strike': task[0] }">{{ task[1] }}</span>
      </p>
    </div>
  </div>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex'

  const { mapMutations, mapGetters, mapState } = createNamespacedHelpers('usability');

  export default {
    name: 'task-list',
    computed: {
      ...mapGetters(['finished', 'correctTabVisibility', 'correctTabColors', 'correctTabNames']),
      ...mapState(['buttonSos'])
    },
    methods: mapMutations(['toggleEditMode'])
  }
</script>

<style scoped>
  .close-button {
    cursor: pointer;
    user-select: none;
  }
  
  .strike {
    text-decoration: line-through;
  }
</style>