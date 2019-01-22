<template>
  <main class="d-flex flex-grow-1 flex-column">
    <b-row class="helicopter-backdrop bg-light editable-inline"
           align-h="center"
           v-bind:class="{ 'editable': editModeEnabled,
                           'inactive': formSectionRemoved && editModeEnabled,
                           'd-none': formSectionRemoved && !editModeEnabled }"
           id="form_section">
      <b-container class="text-center py-5">
        <h1 class="display-2 text-light">Need a helicopter?</h1>
        <h1 class="display-4 text-light">And a comfortable flight home?</h1>
        <b-row align-h="center" class="py-3 text-light">
          <b-col cols="8">
            <p class="lead">
              With drinks and in-flight massages sos.io is the first and most comfortable rescue service in the
              <b>world</b>. Want to enjoy this comfort-style rescuing? Fill in the form below and we'll come get you.
            </p>
          </b-col>
        </b-row>
      </b-container>
    </b-row>
    <b-popover target="form_section"
               triggers="click blur"
               placement="bottom"
               v-bind:disabled="!editModeEnabled">
      <b-form-checkbox v-model="$store.state.usability.formSectionRemoved">Hide section</b-form-checkbox>
    </b-popover>
    <b-row class="bg-light py-5 flex-grow-1 align-items-center" align-h="center">
      <b-col cols="4">
        <h1 class="font-weight-light">Emergency form</h1>
        <b-form>
          <b-form-group class="my-4"
                        v-for="formItem in formItems"
                        v-bind:key="formItem.id"
                        v-bind:id="formItem.id"
                        v-bind:label="formItem.label"
                        v-bind:description="formItem.description"
                        v-bind:class="{ 'editable': editModeEnabled,
                                        'inactive': formItem.disabled && editModeEnabled,
                                        'd-none': formItem.disabled && !editModeEnabled }">
            <b-form-input v-bind:type="formItem.type"
                          v-bind:placeholder="formItem.placeholder"
                          required></b-form-input>
          </b-form-group>

          <b-popover v-for="formItem in formItems"
                     v-bind:key="formItem.id"
                     v-bind:target="formItem.id"
                     v-bind:disabled="!editModeEnabled"
                     triggers="click blur"
                     placement="right">
            <b-form-checkbox v-model="formItem.disabled">Hide form item</b-form-checkbox>
          </b-popover>

          <b-form-group id="emergency_priority"
                        class="my-4"
                        label="Emergency Priority"
                        label-for="priority"
                        description="How much do you really need us?"
                        v-bind:class="{ 'editable': editModeEnabled,
                                        'inactive': emergencyFormSectionRemoved && editModeEnabled,
                                        'd-none': emergencyFormSectionRemoved && !editModeEnabled }">
            <select class="custom-select" id="priority">
              <option selected>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </b-form-group>

          <b-popover target="emergency_priority"
                     v-bind:disabled="!editModeEnabled"
                     triggers="click blur"
                     placement="right">
            <b-form-checkbox v-model="$store.state.usability.emergencyFormSectionRemoved">Hide form item</b-form-checkbox>
          </b-popover>

          <b-button variant="success" class="my-3">Submit emergency request</b-button>
        </b-form>
      </b-col>
    </b-row>
  </main>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex'

  const { mapState } = createNamespacedHelpers('usability');

  export default {
    name: 'AppForm',
    computed: mapState(['formItems', 'formSectionRemoved', 'editModeEnabled', 'emergencyFormSectionRemoved']),
  }
</script>

<style scoped>
  .helicopter-backdrop {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../assets/helicopter.jpg") no-repeat center bottom;
    background-size: cover;
  }
</style>
