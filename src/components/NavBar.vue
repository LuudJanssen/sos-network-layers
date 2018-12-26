<template>
    <div>
        <b-nav justified tabs class='nav'>
            <b-nav-item active to="AppHome">Home</b-nav-item>
            <b-nav-item to="appform">Form</b-nav-item>
            <b-nav-item>Tab3</b-nav-item>
            <b-nav-item>Tab4</b-nav-item>
            <b-nav-item>Tab5</b-nav-item>
            <b-nav-item>Tab6</b-nav-item>
        </b-nav>
        <router-view />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'NavBar',
})
</script>

<style scoped>
.nav {
    padding-top: 20px;
}

</style>


