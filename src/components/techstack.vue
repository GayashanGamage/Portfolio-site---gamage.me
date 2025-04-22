<template>
  <div class="w-full h-auto py-10 bg-[#222831]">
    <div
      class="flex flex-col gap-6 max-w-3xl min-w-[200px] w-full mx-auto"
    >
      <h2 class="text-2xl font-bold uppercase text-[#EEEEEE]/80 md:ml-0 ml-4">
        Tech stack
      </h2>
      <div class="flex flex-row flex-wrap gap-6 w-auto justify-center mx-4">
        <div
          class="flex flex-col justify-center items-center gap-2 border-2 p-4 min-w-[100px] max-w-[120px] w-auto grow rounded-md border-[#EEEEEE]/40 hover:border-[#EEEEEE]/80 text-[#EEEEEE]/40 hover:text-[#EEEEEE]/80"
          v-for="item in store.techStack"
        >
          <img :src="item.icon" :alt="item.name" class="w-8 h-8" />
          <p class="">{{ item.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { portfolioStore } from "@/stores/counter";

const store = portfolioStore();
</script>
<style scoped></style>
