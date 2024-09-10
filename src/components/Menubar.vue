<template>
  <div class="level-one-container">
    <div class="level-two-container menubar">
      <a class="menu-title" href="#introduction">GAMAGE</a>
      <div class="level-three-container menu-item-container">
        <a
          href="mailto:gayashan.randimagamage@gmail.com"
          target="_parent"
          class="menu-item"
          >Contact</a
        >
        <a class="menu-item" href="#project">Project</a>
        <a class="menu-item" href="#tecstack">Tec stack</a>
        <a class="menu-item" href="#blog">Blog</a>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.level-one-container {
  position: sticky;
  top: 0;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.level-two-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: #0b2f9f;
}
.menu-item-container {
  float: right;
  display: flex;
}
.menu-title {
  margin-left: 60px;
  font-size: 32px;
  font-weight: 900;
  color: #ffffff;
  text-decoration: none;
  cursor: default;
}
.menu-item {
  margin-right: 60px;
  font-size: 20px;
  font-weight: 100;
  text-decoration: none;
  color: #ffffff;
}
.menu-item:hover {
  margin-right: 60px;
  font-size: 20px;
  text-decoration: underline;
  cursor: pointer;
}
</style>
