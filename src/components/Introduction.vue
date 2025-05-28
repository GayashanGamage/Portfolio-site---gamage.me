<template>
    <!-- introduction part -->
    <div class="w-full h-auto bg-[#222831] py-20">
      <!-- content container -->
      <div class="flex md:flex-row flex-col justify-center items-center md:gap-10 gap-4 max-w-3xl min-w-[200px] w-auto h-auto mx-auto px-10 md:px-0">
        <!-- image -->
        <div class="flex flex-row justify-center items-center w-[180px] h-[180px] rounded-full bg-[#393E46]">
          <img src="/public/gayashan.jpg" alt="" class="rounded-full w-9/10 h-9/10">
        </div>
        <!-- description text -->
        <div class="flex flex-col gap-4">
          <p class="text-2xl font-semibold text-[#EEEEEE]/60 md:text-left text-center">Hi.. I'm Gayashan. <br>Fulstack developer with learning mindset <br><span class="text-sm bg-[#FFD369] px-3 py-1 rounded-full text-[#393E46]">Open to Work</span></p>
          <div class="flex flex-row items-center text-[#EEEEEE]/30 md:justify-normal justify-center">
            <span class="material-icons">location_on</span>
            <p class=""> Colombo, Sri Lanka</p>
          </div>
          <div class="flex flex-row gap-2 md:justify-start justify-center flex-wrap">
            <div class="border-2 border-[#393E46] px-3 py-1 rounded-md bg-[#393E46] text-[#EEEEEE]/50 hover:text-[#EEEEEE]/80 hover:border-[#EEEEEE]/80 cursor-pointer" v-for="item in store.profileLink">
              <a :href="item.link" class="" target="_blank">
                <p class="">{{ item.name }}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script setup>
import { portfolioStore } from '@/stores/counter';

const store = portfolioStore()

  // const profileLink = ref([
  //   {
  //     'name' : 'GitHub',
  //     'link' : ''
  //   },
  //   {
  //     'name' : 'LeetCode',
  //     'link' : ''
  //   },
  //   {
  //     'name' : 'Codepen',
  //     'link' : ''
  //   },
  //   {
  //     'name' : 'Medium',
  //     'link' : ''
  //   },
  //   {
  //     'name' : 'CV',
  //     'link' : ''
  //   },
  // ])
  
  </script>
  <style scoped></style>