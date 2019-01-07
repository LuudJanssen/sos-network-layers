<template>
    <div>
        <b-nav justified tabs class='nav'>
            <div v-bind:class="tab1">
                <b-nav-item to="apphome">Home</b-nav-item>
            </div>
            <div v-bind:class="tab2">
                <b-nav-item to="appform">Form</b-nav-item>
            </div>
            <div v-bind:class="tab3">
                <b-nav-item>
                    <div v-if="opt1=false"> <!--dit aanroepen werkt niet, dus daar moeten we iets anders op verzinnen -->
                        option1
                    </div>
                    <div v-else>
                        no option
                    </div>
                </b-nav-item>
            </div>
            <div v-bind:class="tab4">
                <b-nav-item>Tab4</b-nav-item>
            </div>
        </b-nav>
        <router-view />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'NavBar',
    data: () => {
        return {
            tab1: {
                opt1: true,
                opt2: false,
                opt3: false

            },
            tab2: {
                opt1: true,
                opt2: false,
                opt3: false

            },
            tab3: {
                opt1: true,
                opt2: false,
                opt3: false

            },
            tab4: {
                opt1: true,
                opt2: false,
                opt3: false

            }
        }
    }
})
</script>

<style scoped>
.nav {
    padding-top: 20px;
}

</style>


