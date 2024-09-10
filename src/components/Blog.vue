<template>
  <div class="level-one-container">
    <div class="level-two-container">
      <h3 class="title">BLOG</h3>
      <p class="blog-title">how to implement linear search in python</p>
      <p class="blog-title">how to remove unnecessary python packages</p>
      <p class="blog-title">Why use inheritance in python</p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.level-one-container {
  height: auto;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
}
.level-two-container {
  width: 600px;
  margin: 80px 0px;
  height: auto;
}
.title {
  color: #0b2f9f;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  text-decoration-line: underline;
  text-transform: uppercase;
  margin-bottom: 80px;
  text-align: center;
}
.blog-title {
  color: #0b2f9f;
  font-size: 24px;
  margin-bottom: 35px;
}
.blog-title:hover {
  text-decoration: underline;
}
</style>
