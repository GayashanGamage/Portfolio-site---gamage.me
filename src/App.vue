<template>
  <!-- menu section -->
  <div class="flex justify-center pt-10 ">
    <div class="flex flex-row items-center w-1/2 p-2 justify-between border-b">
      <h1 class="text-2xl font-bold font-sans">GAMAGE.ME</h1>
      <div class="flex flex-row items-center space-x-4 gap-12">
        <p class="text-xl font-medium font-sans hover:cursor-pointer">Tech Stack</p>
        <p class="text-xl font-medium font-sans hover:cursor-pointer">Projects</p>
        <p class="px-8 py-2 text-gray-50 bg-black rounded-lg text-md text-lg font-medium font-sans border hover:bg-white hover:border hover:text-black hover:cursor-pointer hover:font-medium">CV</p>
      </div>
    </div>
  </div>  
  <!-- intro section -->
  <div class="flex justify-center py-10">
    <div class="flex w-1/2 h-50">
      <!-- image -->
      <img src="/public/gayashan.jpg" alt="Gayashan Gamage's image" class="rounded-full">
      <!-- introduction text -->
      <div>
        <p>Hi.. I'm Gayashan. Fulstack developer with learning mindset <span>Open to work</span></p>
        <!-- location and link section -->
         <div>
          <p>Colombo, Sri Lanka</p>
          <!-- link section -->
           <div>
            <div>
              <img :src="store.profileLinkIcons.linkedin" alt="linkedin icon" class="w-6 h-6">
              <p><a :href="store.profileLinks.linkedin" target="_blank">LinkedIn</a></p>
            </div>
            <div>
              <img :src="store.profileLinkIcons.github" alt="github icon" class="w-6 h-6">
              <p><a :href="store.profileLinks.github" target="_blank">GitHub</a></p>
            </div>
            <div>
              <img :src="store.profileLinkIcons.medium" alt="github icon" class="w-6 h-6">
              <p><a :href="store.profileLinks.medium" target="_blank">Medium</a></p>
            </div>
           </div>
         </div>
      </div> 
    </div>
  </div>
  <!-- tech stack section -->
  <div class="flex justify-center py-10">
    <div class="flex flex-col w-1/2 h-50 border">
      <h3>TECH STACK</h3>
      <div class="flex">
        <div v-for="item in store.techStack" class="border">
          <img :src="item.icon" :alt="item.name" class="w-6 h-6">
          <p>{{ item.name }}</p>
        </div>
      </div>
    </div>
  </div>
  <!-- project section -->
  <div class="flex justify-center py-10">
    <div class="flex flex-col w-1/2 h-auto border">
      <h3>PROJECTS</h3>
      <div class="flex flex-col p-4 border" v-for="item in store.projectData"> 
        <!-- <div class="bg-amber-700 w-full h-120 border"></div> -->
         <img :src="item.main_image" alt="item.name" class="w-full h-100">
        <h4>{{ item.name }}</h4>
        <p>{{ item.description }}</p>
        <!-- tech stack container -->
        <div class="flex flex-row">
          <!-- selected tech stack -->
          <div class="border" v-for="i in item.techStack">
            <img :src="i.icon" :alt="i.name" class="w-6 h-6">
            <p>{{ i.name }}</p>
          </div>
        </div>
        <!-- project links -->
         <div class="flex flex-row">
          <div class="flex flex-row" v-for="i in item.links">
            <span class="material-icons">{{ i.icon }}</span>
            <p>{{ i.text }}</p>
          </div>
         </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { portfolioStore } from './stores/counter';
const store =  portfolioStore()

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
