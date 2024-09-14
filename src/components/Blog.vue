<template>
  <div class="level-one-container" id="blog">
    <div class="level-two-container">
      <h3 class="title">BLOG</h3>
      <p class="blog-title" v-for="item in bloglist" :key="item">
        <a :href="item.link" class="blog-link" target="_blank">{{
          item.title
        }}</a>
      </p>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { onBeforeMount, ref } from "vue";

const bloglist = ref([
  {
    title: "Pydantic serialization step by steps for FastAPI",
    link: "https://medium.com/@gayashangamage/pydantic-serialization-step-by-steps-for-fastapi-f51ee20d4f10",
  },
  {
    title: "All about stack algorithms",
    link: "https://medium.com/@gayashangamage/all-about-stack-algorithms-9173f2e75382",
  },
  {
    title: "All about binary search algorithms",
    link: "https://medium.com/@gayashangamage/all-about-binary-search-algorithms-4eb6ec2825e4",
  },
  {
    title: "Why use inheritance",
    link: "https://medium.com/@gayashangamage/why-use-inheritance-in-python-f04c2fb687e1",
  },
  {
    title: "How to remove all the unwanted python packages",
    link: "https://medium.com/@gayashangamage/how-to-remove-unnecessary-python-packages-a9263cff0e2c",
  },
]);

onBeforeMount(() => {
  axios
    .get(import.meta.env.VITE_medium)
    .then(function (response) {
      bloglist.value = response.data;
    })
    .catch(function (error) {
      console.log("out of limit API requests");
    });
});
</script>

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
.blog-link {
  text-decoration: none;
  color: #0b2f9f;
}
</style>
