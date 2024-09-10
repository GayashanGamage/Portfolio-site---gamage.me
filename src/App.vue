<template>
  <div class="level-one-container">
    <Menubar></Menubar>
    <Intro></Intro>
    <Project></Project>
    <Tecstack></Tecstack>
  </div>
</template>

<script setup>
import Intro from "./components/Intro.vue";
import Menubar from "./components/Menubar.vue";
import Project from "./components/Project.vue";
import Tecstack from "./components/Tecstack.vue";
</script>

<style>
* {
  margin: 0;
}
html {
  font-family: "", sans-serif;
  font-size: 14px;
}
</style>
