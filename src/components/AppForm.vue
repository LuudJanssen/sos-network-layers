<template>
  <div class="box">
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
  </div>
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
.box {
  width: 60%;
  height: 100%;
  padding: 30px;
  padding-left: 100px;
}
</style>
