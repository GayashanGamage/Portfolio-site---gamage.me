<template>
  <div class="level-one-container">
    <div class="level-two-container menubar">
      <p class="menu-title">GAMAGE</p>
      <div class="level-three-container menu-item-container">
        <p class="menu-item">Project</p>
        <p class="menu-item">Tec stack</p>
        <p class="menu-item">Blog</p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.level-one-container {
  position: sticky;
  top: 0;
}
.level-two-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  background-color: #0b2f9f;
}
.menu-item-container {
  float: right;
  display: flex;
}
.menu-title {
  margin-left: 100px;
  font-size: 32px;
  font-weight: 900;
  color: #ffffff;
}
.menu-item {
  margin-right: 100px;
  font-size: 20px;
  font-weight: 400;
  color: #ffffff;
}
</style>
