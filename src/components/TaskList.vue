<template>
  <div class="bg-light">
    <b-navbar toggleable="sm" type="dark" variant="primary">
      <b-navbar-brand>
        <i class="material-icons md-36 d-inline-block pr-2 align-middle">list</i>
        <span class="align-middle">Task List</span>
      </b-navbar-brand>
      <b-navbar-brand class="close-button ml-auto" @click="toggleEditMode()">
        <span class="align-middle">Exit</span>
        <i class="material-icons md-36 d-inline-block pl-2 align-middle">close</i>
      </b-navbar-brand>
    </b-navbar>
    <p>finished: {{ finished }}</p>
    <p>tab visibility: {{ correctTabVisibility }}</p>
    <p>tab colors: {{ correctTabColors }}</p>
    <p>tab names: {{ correctTabNames }}</p>
  </div>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex'

  const { mapMutations, mapGetters } = createNamespacedHelpers('usability');

  export default {
    name: 'task-list',
    computed: mapGetters(['finished', 'correctTabVisibility', 'correctTabColors', 'correctTabNames']),
    methods: mapMutations(['toggleEditMode'])
  }
</script>

<style scoped>
.close-button {
  cursor: pointer;
  user-select: none;
}
</style>