<template>
  <b-navbar toggleable="sm" type="dark" variant="dark">
    <b-container>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand>
        <i class="material-icons d-inline-block pr-2 align-middle">announcement</i>
        <span class="align-middle">sos.io</span>
      </b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav pills>
          <b-nav-item class="mx-3"
                      v-for="tab in tabs"
                      v-bind:key="tab.id"
                      v-bind:id="tab.id"
                      v-bind:to="editModeEnabled ? '' : tab.route"
                      v-bind:class="{ 'editable': editModeEnabled,
                                      'd-none': tab.disabled && !editModeEnabled,
                                      'inactive': tab.disabled }">
            <span v-bind:style="{ color: tab.color }">{{ tab.text }}</span>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>

      <b-popover v-for="tab in tabs"
                 v-bind:key="tab.id"
                 v-bind:target="tab.id"
                 v-bind:disabled="!editModeEnabled"
                 triggers="click blur"
                 placement="bottom">
        <b-row>
          <b-col>
            <b-form-group label="Button text">
              <b-form-radio-group v-model="tab.text"
                                  v-bind:options="tab.textOptions"
                                  stacked>
              </b-form-radio-group>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group label="Button color">
              <b-form-radio-group v-model="tab.color"
                                  v-bind:options="tab.colorOptions"
                                  stacked>
              </b-form-radio-group>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-checkbox v-model="tab.disabled">Hide menu item</b-form-checkbox>
          </b-col>
        </b-row>
      </b-popover>
    </b-container>
  </b-navbar>
</template>

<script>
  import './editable.css'
  import { createNamespacedHelpers } from 'vuex'

  const { mapState } = createNamespacedHelpers('usability');

  export default {
    name: 'nav-bar',
    computed:{
      ...mapState(['editModeEnabled', 'tabs'])
    }
  }
</script>

<style scoped>
</style>


