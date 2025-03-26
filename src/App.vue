<template>
  <!-- menu section -->
  <div class="flex justify-center pt-10 ">
    <div class="flex flex-row items-center w-4/10 p-2 justify-between border-b">
      <h1 class="text-2xl font-bold font-sans">GAMAGE.ME</h1>
      <div class="flex flex-row items-center space-x-4 gap-8">
        <p class="text-xl font-medium font-sans hover:cursor-pointer">Tech Stack</p>
        <p class="text-xl font-medium font-sans hover:cursor-pointer">Projects</p>
        <p class="px-8 py-2 text-gray-50 bg-black rounded-lg text-md text-lg font-medium font-sans border hover:bg-white hover:border hover:text-black hover:cursor-pointer hover:font-medium">CV</p>
      </div>
    </div>
  </div>  
  <!-- intro section -->
  <div class="flex justify-center py-10">
    <div class="flex w-4/10 h-auto py-8 gap-12">
      <!-- image -->
      <img src="/public/gayashan.jpg" alt="Gayashan Gamage's image" class="rounded-full w-50 h-50">
      <!-- introduction text -->
      <div class="w-full">
        <p><span class="text-2xl font-bold uppercase">Hi.. I'm Gayashan.<br> Fulstack developer with<br> learning mindset </span><br><span class="bg-emerald-200 px-3 py-1 rounded-4xl text-xl font-bold text-green-600"><span class="p-1.5 mb-px mr-1.5 inline-block bg-green-600 rounded-full"></span>  Open to work</span></p>
        <!-- location and link section -->
        <div class="flex flex-row w-full justify-between pt-12">
          <p class="font-sans text-xl">Galle, Sri Lanka</p>
          <!-- link section -->
            <div class="flex flex-row gap-3">
              <div>
                <a :href="store.profileLinks.linkedin" target="_blank"  class="font-sans text-xl flex flex-row gap-2">
                <img :src="store.profileLinkIcons.linkedin" alt="linkedin icon" class="w-6 h-6">
                <p>LinkedIn</p></a>
              </div>
              <div>
                <a :href="store.profileLinks.github" target="_blank"  class="font-sans text-xl flex flex-row gap-2">
                <img :src="store.profileLinkIcons.github" alt="linkedin icon" class="w-6 h-6">
                <p>GitHub</p></a>
              </div>
              <!-- <div class="flex flex-row gap-2">
                <img :src="store.profileLinkIcons.medium" alt="github icon" class="w-6 h-6">
                <p><a :href="store.profileLinks.medium" target="_blank"  class="font-sans text-xl">Medium</a></p>
              </div> -->
            </div>
          </div>
      </div> 
    </div>
  </div>
  <!-- tech stack section -->
  <div class="flex justify-center py-10">
    <div class="flex flex-col w-4/10 h-auto">
      <h3 class="font-bold text-2xl pb-6 font-sans">TECH STACK</h3>
      <div class="flex flex-wrap gap-3 justify-between">
        <div v-for="item in store.techStack" class="rounded-md w-1/7 h-25 flex flex-col justify-center items-center gap-2 shadow-sm border border-gray-200">
          <img :src="item.icon" :alt="item.name" class="w-8 h-8">
          <p class="font-sans">{{ item.name }}</p>
        </div>
      </div>
    </div>
  </div>
  <!-- project section -->
  <div class="flex justify-center py-10">
    <div class="flex flex-col w-4/10 h-auto gap-5">
      <h3 class="font-bold text-2xl pb-6 font-sans">PROJECTS</h3>
      <div class="flex flex-col p-4 gap-6 shadow-sm border border-gray-300 rounded-md" v-for="item in store.projectData"> 
        <!-- <div class="bg-amber-700 w-full h-120 border"></div> -->
         <img :src="item.main_image" alt="item.name" class="w-full h-80 rounded-md">
        <h4 class="font-bold text-2xl font-sans">{{ item.name }}</h4>
        <p class="font-sans text-xl font-light">{{ item.description }}</p>
        <!-- tech stack container -->
        <div class="flex flex-row gap-2 flex-wrap">
          <!-- selected tech stack -->
          <div class=" flex gap-1 px-6 py-1 rounded-2xl bg-gray-200" v-for="i in item.techStack">
            <img :src="i.icon" :alt="i.name" class="w-6 h-6">
            <p>{{ i.name }}</p>
          </div>
        </div>
        <!-- project links -->
         <div class="flex flex-row justify-between gap-4">
          <div class="flex flex-row border w-1/3 py-1 rounded-3xl border-gray-400 justify-center items-center hover:cursor-pointer" v-for="i in item.links">
            <span class="material-icons px-3">{{ i.icon }}</span>
            <p class="uppercase font-sans">{{ i.text }}</p>
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
