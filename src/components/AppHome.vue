<template>
  <main>
    <b-row class="island-backdrop" align-h="center">
      <b-container class="text-center py-5">
        <h1 class="display-2 text-light">Stuck on an island?</h1>
        <h1 class="display-4 text-light">sos.io is here to save you!</h1>
        <b-row align-h="center" class="py-3 text-light">
          <b-col cols="8">
            <p class="lead">
              Sos.io is an organization that cares about <b>you</b>. When you are in an emergency you want to be helped as
              fast as possible and you want to be helped as friendly as possible.
            </p>
            <p class="lead">
              Sos.io offers premium service in case of an emergency. We have state of the art transport to pick you up
              and for a small price you can receive immediate medical care and also enjoy our built-in wellness centers
              available on all transport methods.
            </p>
            <router-link id="home_button"
                         tag="button"
                         class="mt-3 btn btn-lg"
                         v-bind:to="buttonSos && !editModeEnabled ? 'form' : ''"
                         v-bind:class="{ 'btn-warning': buttonSos,
                                         'btn-primary': !buttonSos,
                                         'editable': editModeEnabled }">
              <i class="material-icons md-36 align-middle mr-3">{{ buttonSos ? 'warning' : 'cloud_download' }}</i>
              <span class="align-middle">{{ buttonSos ? 'Report emergency' : 'Download the brochure' }}</span>
            </router-link>

            <b-popover target="home_button"
                       triggers="click blur"
                       placement="bottom"
                       v-bind:disabled="!editModeEnabled">
              <b-form-group label="Button type">
                <b-form-radio-group v-model="$store.state.usability.buttonSos"
                                    v-bind:options="[
                                      { text: 'Emergency action', value: true },
                                      { text: 'Download brochure', value: false }
                                    ]"
                                    stacked>
                </b-form-radio-group>
              </b-form-group>
            </b-popover>
          </b-col>
        </b-row>
      </b-container>
    </b-row>
    <b-row class="bg-light pt-5 editable-inline" align-h="center"
           v-bind:class="{ 'editable': editModeEnabled,
                           'inactive': innovationsSectionRemoved && editModeEnabled,
                           'd-none': innovationsSectionRemoved && !editModeEnabled }"
           id="innovations_section">
      <b-container class="text-center">
        <h1>Our latest innovations</h1>

        <b-row class="py-5">
          <b-col cols="4">
            <i class="material-icons md-128">directions_boat</i>
            <h4 class="py-3">Boat rescue</h4>
          </b-col>
          <b-col cols="4">
            <i class="material-icons md-128">360</i>
            <h4 class="py-3">360° feedback integration</h4>
          </b-col>
          <b-col cols="4">
            <i class="material-icons md-128">local_bar</i>
            <h4 class="py-3">In-transfer bar</h4>
          </b-col>
        </b-row>
      </b-container>

      <b-popover target="innovations_section"
                 triggers="click blur"
                 placement="bottom"
                 v-bind:disabled="!editModeEnabled">
        <b-form-checkbox v-model="$store.state.usability.innovationsSectionRemoved">Hide section</b-form-checkbox>
      </b-popover>
    </b-row>
    <b-row class="bg-warning text-white py-5 editable-inline editable-grey"
           v-bind:class="{ 'editable': editModeEnabled,
                           'inactive': emergencySectionRemoved && editModeEnabled,
                           'd-none': emergencySectionRemoved && !editModeEnabled }"
           id="emergency_section">
      <b-container class="text-center">
        <h1>In case of an emergency</h1>

        <b-row class="pt-5 pb-1">
          <b-col cols="4">
            <h2>
              <i class="material-icons md-36 align-middle pr-3">call</i>
              <span class="align-middle">077-1234567</span>
            </h2>
          </b-col>
          <b-col cols="4">
            <router-link tag="h2" to="form">
              <i class="material-icons md-36 align-middle pr-3">link</i>
              <span class="align-middle">Fill in our form</span>
            </router-link>
          </b-col>
          <b-col cols="4">
            <h2>
              <i class="material-icons md-36 align-middle pr-3">record_voice_over</i>
              <span class="align-middle">Scream for help</span>
            </h2>
          </b-col>
        </b-row>
      </b-container>

      <b-popover target="emergency_section"
                 triggers="click blur"
                 placement="bottom"
                 v-bind:disabled="!editModeEnabled">
        <b-form-checkbox v-model="$store.state.usability.emergencySectionRemoved">Hide section</b-form-checkbox>
      </b-popover>
    </b-row>
  </main>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex'

  const { mapState } = createNamespacedHelpers('usability');

  export default {
    name: 'AppHome',
    computed: mapState(['buttonSos', 'editModeEnabled', 'innovationsSectionRemoved', 'emergencySectionRemoved']),
  }
</script>

<style scoped>
  .island-backdrop {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../assets/sos-io-island-man.jpg") no-repeat center bottom;
    background-size: cover;
  }

  .inactive {
    opacity: 0.5;
  }
</style>