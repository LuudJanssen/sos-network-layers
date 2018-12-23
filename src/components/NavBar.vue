
<template>
<div id = 'navItems'>
     <div class="topnav">
        <a class="active" href="#item1">{{item1}}</a>
        <a href="#item2">{{item2}}</a>
        <a href="#item3">{{item3}}</a>
        <a href="#item4">{{item4}}</a>
    </div> 
</div>
</template>

<script lang = <script lang="ts">

import { Component, Vue } from 'vue-property-decorator'

const navItems = [
  'item1',
  'item2',
  'item3',
  'item4',
]

@Component
export default class NavBar extends Vue {
  public data() {
    return { navItems }
  }
}

</script>

<style>

.topnav {
  background-color: #333;
  overflow: hidden;
}

/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Change the color of links on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Add a color to the active/current link */
.topnav a.active {
  background-color: #4CAF50;
  color: white;
}

</style>