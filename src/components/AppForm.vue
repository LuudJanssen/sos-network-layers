<template>
  <main class="d-flex flex-grow-1 flex-column">
    <b-row class="helicopter-backdrop bg-light" align-h="center">
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
    <b-row class="bg-light py-5 flex-grow-1 align-items-center" align-h="center" align-v="middle">
      <b-col cols="4">
        <h1 class="font-weight-light">Emergency form</h1>
        <b-form>
          <b-form-group label="Full name" description="We need your name for administrative purposes">
            <b-form-input type="text" placeholder="Johan Derksen" required></b-form-input>
          </b-form-group>
        </b-form>
      </b-col>
    </b-row>
  </main>
  <!--<div class="box">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="fullName" label="Full Name" label-for="fullNameInput">
        <b-form-input
          v-if="this.$store.state.form.showName"
          id="fullNameInput"
          type="name"
          v-model="form.name"
          placeholder="Enter Full Name"
        ></b-form-input>
      </b-form-group>

      <b-popover target="fullName">
        <b-button @click="toggle('showName')">Toggle name field</b-button>
      </b-popover>

      <b-form-group id="address" label="Address" label-for="addressInput">
        <b-form-input
          v-if="this.$store.state.form.showAd"
          id="addressInput"
          type="address"
          v-model="form.address"
          placeholder="Enter Address"
        ></b-form-input>
      </b-form-group>
      <b-popover target="address">
        <b-button @click="toggle('showAd')">Toggle Address field</b-button>
      </b-popover>

      <b-form-group
        id="longitude"
        label="Longitude"
        label-for="longitudeInput"
        description="In degrees, with degree symbol"
      >
        <b-form-input
          v-if="this.$store.state.form.showLong"
          id="longitudeInput"
          type="longitude"
          v-model="form.longitude"
          required
          placeholder="Enter Longitude"
        ></b-form-input>
      </b-form-group>
      <b-popover target="longitude">
        <b-button @click="toggle('showLong')">Toggle longitude field</b-button>
      </b-popover>

      <b-form-group
        id="latitude"
        label="Latitude"
        label-for="latitudeInput"
        description="In degrees, with degree symbol"
      >
        <b-form-input
          v-if="this.$store.state.form.showLat"
          id="latitudeInput"
          type="latitude"
          v-model="form.latitude"
          required
          placeholder="Enter Latitude"
        ></b-form-input>
      </b-form-group>
      <b-popover target="latitude">
        <b-button @click="toggle('showLat')">Toggle latitude field</b-button>
      </b-popover>

      <b-form-group
        id="emergencyPrio"
        label="Emergency Priority"
        label-for="emergencyPrioInput"
        description="Choose from: Low, Medium or High"
      >
        <b-form-select
          v-if="this.$store.state.form.showPrio"
          id="emergencyPrioInput"
          :options="prio"
          required
          v-model="form.prio"
        ></b-form-select>
      </b-form-group>
      <b-popover target="emergencyPrio">
        <b-button @click="toggle('showPrio')">Toggle priority field</b-button>
      </b-popover>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>-->
</template>

<script>
export default {
  data() {
    return {
      name: "AppForm",
      form: {
        address: "",
        name: "",
        longitude: "",
        latitude: "",
        prio: null,
        checked: []
      },
      prio: [{ text: "Select One", value: null }, "Low", "Medium", "High"],
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.address = "";
      this.form.name = "";
      this.form.longitude = "";
      this.form.latitude = "";
      this.form.prio = null;
      this.form.checked = [];
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    toggle(field) {
      this.$store.commit("toggle", field);
    }
  }
};
</script>

<style scoped>
  .helicopter-backdrop {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../assets/helicopter.jpg") no-repeat center bottom;
    background-size: cover;
  }
</style>
