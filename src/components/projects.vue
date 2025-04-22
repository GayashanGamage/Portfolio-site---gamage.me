<template>
    <div class="w-full h-auto bg-[#222831] py-10 text-[#EEEEEE]/30" id="project">
        <div class="flex flex-col gap-6 max-w-3xl min-w-[200px] w-auto h-auto mx-auto">
            <h2 class="text-2xl font-bold uppercase text-[#EEEEEE]/80 md:ml-0 ml-4">Projects</h2>
            <div class="flex flex-col gap-4 md:mx-0 mx-4">
                <!-- project container -->
                <div class="flex flex-col gap-6 border p-4 rounded-md" v-for="items in store.projectData">
                    <img :src="items.main_image" :alt="items.name" class="rounded-md">
                    <h3 class="text-xl font-semibold uppercase text-[#EEEEEE]/80">{{ items.name }}</h3>
                    <p class="text-lg font-light">{{ items.description }}</p>
                    <!-- used technologies -->
                    <div class="flex flex-row gap-2 flex-wrap grow">
                        <div class="flex flex-row justify-center items-center gap-2 border-2 py-1 px-3 rounded-md border-[#EEEEEE]/40 hover:border-[#EEEEEE]/80 text-[#EEEEEE]/40 hover:text-[#EEEEEE]/80 cursor-default" v-for="i in items.techStack">
                            <img :src="i.icon" :alt="i.name" class="w-4 h-4">
                            <p class="text-sm">{{ i.name }}</p>
                        </div>
                    </div>
                    <!-- project links -->
                    <!-- <p class="">{{ i.text }}</p> -->
                    <div class="flex sm:flex-row flex-col gap-2">
                        <div class="border-2 flex flex-row justify-center items-center gap-4 py-1 rounded-md w-full bg-[#393E46] text-[#EEEEEE]/50 hover:text-[#EEEEEE]/80 hover:border-[#EEEEEE]/80 border-[#393E46] cursor-pointer" v-for="i in items.links">
                            <span class="material-icons">{{ i.icon }}</span>
                            <span class="">{{ i.text }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { portfolioStore } from '@/stores/counter';

const store = portfolioStore()

</script>
<style scoped></style>