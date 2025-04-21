<template>
    <!-- menu section -->
    <div class="flex justify-center pt-10 fixed top-0 w-full bg-white z-50 font-[Inter]">
      <div class="flex flex-row items-center justify-between border-b p-2 border-b-gray-400 w-[768px] min-w-[640px] sm:w-6/10">
        <h1 class="text-2xl font-bold">GAMAGE.ME</h1>
        <div class="flex flex-row items-center space-x-4 gap-8">
          <p class="text-xl font-medium font-[Inter] hover:cursor-pointer"><a href="#techstack" class="scroll-mt-35">Tech Stack</a></p>
          <p class="text-xl font-medium font-[Inter] hover:cursor-pointer scroll-mt-35"><a href="#project">Projects</a></p>
          <p class="text-xl font-medium font-[Inter] hover:cursor-pointer scroll-mt-35"><a href="#contact">Contact</a></p>
          <p class="px-8 py-1 text-gray-50 bg-black rounded-lg text-md text-lg font-medium font-[Inter] border hover:bg-white hover:border hover:text-black hover:cursor-pointer hover:font-medium"><a href="https://drive.google.com/uc?export=download&id=11mZ6NgNagNYjkrgP1jzFnGr9eXvbHviv">CV</a></p>
        </div>
      </div>
    </div>  
    <!-- intro section -->
    <div class="flex justify-center pt-36 pb-6 bg-[#222831]">
      <div class="flex w-4/10 h-auto py-8 gap-12">
        <!-- image -->
         <div class=" w-84 h-54 rounded-full bg-[#393E46] flex justify-center items-center">
            <img src="/public/gayashan.jpg" alt="Gayashan Gamage's image" class="rounded-full w-50 h-50">
         </div>
        <!-- introduction text -->
        <div class="w-full">
          <p><span class="text-2xl font-bold leading-normal font-[Inter] text-[#EEEEEE]/60">Hi.. I'm Gayashan.<br> Fulstack developer with learning mindset.   </span><span class="bg-[#393E46] px-3 py-1 rounded-4xl text-xl font-bold text-[#FFD369] leading-loose"><span class="p-1.5 mb-px mr-1.5 inline-block bg-[#EEEEEE] rounded-full "></span>  Open to work</span></p>
          <!-- location and link section -->
          <div class="flex flex-row w-full justify-between pt-8">
            <p class="font-[Inter] text-xl flex flex-row text-[#EEEEEE]/60"><span class="material-icons text-[#393E46]">location_on</span>Galle, Sri Lanka</p>
            <!-- link section -->
              <div class="flex flex-row gap-3">
                <div class="hover:scale-103">
                  <a :href="store.profileLinks.linkedin" target="_blank"  class="font-[Inter] text-xl flex flex-row gap-2">
                  <img :src="store.profileLinkIcons.linkedin" alt="linkedin icon" class="w-6 h-6">
                  <p>LinkedIn</p></a>
                </div>
                <div class="hover:scale-103">
                  <a :href="store.profileLinks.github" target="_blank"  class="font-[Inter] text-xl flex flex-row gap-2">
                  <img :src="store.profileLinkIcons.github" alt="linkedin icon" class="w-6 h-6">
                  <p>GitHub</p></a>
                </div>
                <!-- <div class="flex flex-row gap-2">
                  <img :src="store.profileLinkIcons.medium" alt="github icon" class="w-6 h-6">
                  <p><a :href="store.profileLinks.medium" target="_blank"  class="font-[Inter] text-xl">Medium</a></p>
                </div> -->
              </div>
            </div>
        </div> 
      </div>
    </div>
    <!-- tech stack section -->
    <div class="flex justify-center py-10">
      <div class="flex flex-col w-4/10 h-auto">
        <h3 class="font-bold text-2xl pb-1 font-[Inter] scroll-mt-35" id="techstack">TECH STACK</h3>
        <hr class="border-t border-t-gray-400 pb-8">
        <div class="flex flex-wrap gap-5 justify">
          <div v-for="item in store.techStack" class="rounded-md w-1/7 h-25 flex flex-col justify-center items-center gap-2 shadow-sm border border-gray-200">
            <img :src="item.icon" :alt="item.name" class="w-8 h-8">
            <p class="font-[Inter]">{{ item.name }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- project section -->
    <div class="flex justify-center py-10">
      <div class="flex flex-col w-4/10 h-auto gap-10">
        <div>
          <h3 class="font-bold text-2xl pb-1 font-[Inter] scroll-mt-35" id="project">PROJECTS</h3>
          <hr class="border-t border-t-gray-400 pb-1">
        </div>
        <div class="flex flex-col p-4 gap-8 border border-gray-300 rounded-md bg-[#F5EFE7]" v-for="item in store.projectData"> 
          <!-- <div class="bg-amber-700 w-full h-120 border"></div> -->
           <img :src="item.main_image" alt="item.name" class="w-full h-80 rounded-md">
          <h4 class="font-bold text-2xl font-[Inter] text-[#3E5879]">{{ item.name }}</h4>
          <p class="font-[Inter] text-xl font-light text-[#3E5879]">{{ item.description }}</p>
          <!-- tech stack container -->
          <div class="flex flex-row gap-2 flex-wrap">
            <!-- selected tech stack -->
            <div class=" flex flex-row gap-3 px-6 py-1 rounded-2xl bg-[#D8C4B6] border border-gray-300" v-for="i in item.techStack">
              <img :src="i.icon" :alt="i.name" class="w-5 h-5">
              <p class="font-light font-[Inter] text-sm">{{ i.name }}</p>
            </div>
          </div>
          <!-- project links -->
           <div class="flex flex-row justify-between gap-4">
            <div class="flex flex-row w-1/3 py-1 rounded-3xl justify-center items-center hover:cursor-pointer bg-[#3a6b7e] text-[#dfdfde] hover:bg-[#294b58] hover:text-[#ececeb]" v-for="i in item.links">
              <span class="material-icons px-3 ">{{ i.icon }}</span>
              <p class="uppercase font-[Inter]">{{ i.text }}</p>
            </div>
           </div>
        </div>
      </div>
    </div>
    <!-- contact section -->
    <div class="flex justify-center py-10">
      <div class="flex flex-col w-4/10 h-auto">
        <hr class="border-t border-t-gray-400 pb-8" id="contact">
        <div class="flex flex-row justify-between font-[Inter]">
          <p class="flex flex-row gap-3"><span class="material-icons text-gray-400">email</span>gayashan.randimagamage@gmail.com</p>
          <p class="flex flex-row gap-3"><span class="material-icons text-gray-400">call</span>+94706697900</p>
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
  