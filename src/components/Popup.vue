<template>
  <div class="level-one-container" v-if="popup">
    <div class="level-two-container popup-window">
      <h3>Price tracking webapp</h3>
      <div class="level-three-container video">
        <h4>Video</h4>
        <iframe
          width="580"
          height="315"
          src="https://www.youtube.com/embed/4RZsSo9aD1M?autoplay=1&controls=0"
        >
        </iframe>
      </div>
      <div class="level-three-container techstack">
        <h4>TecStack</h4>
      </div>
      <div class="level-three-container action-button"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const popup = true;
</script>

<style scoped>
.level-one-container {
  background-color: rgba(0, 0, 0, 0.8);
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.popup-window {
  width: 600px;
  height: 600px;
  background-color: #fff;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
}
.level-three-container {
  border: 1px solid black;
  height: 150px;
}
</style>
