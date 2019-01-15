<template>
  <div class="box">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group v-if="showName" id="fullName" label="Full Name" label-for="fullNameInput">
        <b-form-input
          id="fullNameInput"
          type="name"
          v-model="form.name"
          placeholder="Enter Full Name"
        ></b-form-input>
      </b-form-group>
      <b-button v-on:click="showName = !showName">Show name?</b-button>

      <b-form-group v-if="showAd" id="address" label="Address" label-for="addressInput">
        <b-form-input
          id="addressInput"
          type="address"
          v-model="form.address"
          placeholder="Enter Address"
        ></b-form-input>
      </b-form-group>
      <b-button v-on:click="showAd = !showAd">Show address?</b-button>

      <b-form-group
        v-if="showLong"
        id="longitude"
        label="Longitude"
        label-for="longitudeInput"
        description="In degrees, with degree symbol"
      >
        <b-form-input
          id="longitudeInput"
          type="longitude"
          v-model="form.longitude"
          required
          placeholder="Enter Longitude"
        ></b-form-input>
      </b-form-group>
      <b-button v-on:click="showLong = !showLong">Show long?</b-button>

      <b-form-group
        v-if="showLat"
        id="latitude"
        label="Latitude"
        label-for="latitudeInput"
        description="In degrees, with degree symbol"
      >
        <b-form-input
          id="latitudeInput"
          type="latitude"
          v-model="form.latitude"
          required
          placeholder="Enter Latitude"
        ></b-form-input>
      </b-form-group>
      <b-button v-on:click="showLat = !showLat">Show lat?</b-button>

      <b-form-group
        v-if="showPrio"
        id="emergencyPrio"
        label="Emergency Priority"
        label-for="emergencyPrioInput"
        description="Choose from: Low, Medium or High"
      >
        <b-form-select id="emergencyPrioInput" :options="prio" required v-model="form.prio"></b-form-select>
      </b-form-group>
      <b-button v-on:click="showPrio = !showPrio">Show prio?</b-button>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
/*

*/
export default {
  data() {
    return {
      showAd: true,
      showName: true,
      showLong: true,
      showLat: true,
      showPrio: true,
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
