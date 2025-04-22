<template>
    <div class="w-full h-[20px] bg-[#222831]">
        <div class="flex flex-row justify-between max-w-3xl w-auto h-auto py-5 mx-auto text-[#EEEEEE]/60 md:px-0 px-4">
            <h1 class="text-2xl font-bold uppercase text-[#EEEEEE]/80 md:ml-0">Gamage.me</h1>
            <div class="md:block hidden">
                <ul class="flex flex-row gap-10 cursor-default">
                    <li class="hover:underline">
                        <a href="#techstack">Tech Stack</a>
                    </li>
                    <li class="hover:underline">
                        <a href="#project">Project</a>
                    </li>
                    <li class="hover:underline">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
            <div class="md:hidden px-4 py-2 cursor-pointer" @click="mobileMenu = true">
                <span class="material-icons">menu</span>
            </div>
        </div>
        <div class="fixed top-0 bottom-0 left-0 right-0 flex flex-col w-full h-screen bg-[#393E46] text-[#EEEEEE]/60 text-3xl" v-if="mobileMenu">
            <div class="flex flex-col gap-8 w-fit mx-auto my-auto">
                <div class="border w-fit px-3 py-1 rounded-md cursor-pointer" @click="mobileMenu = false">
                    <span class="material-icons">close</span>
                </div>
                <ul class="flex flex-col gap-8">
                    <li class="" @click="mobileMenu = false">
                        <a href="#techstack">Tech Stack</a>
                    </li>
                    <li class="" @click="mobileMenu = false">
                        <a href="#project">Project</a>
                    </li>
                    <li class="" @click="mobileMenu = false">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const mobileMenu = ref(false)
</script>