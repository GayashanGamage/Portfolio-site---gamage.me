<template>
    <div class="w-full h-auto" id="introduction">
        <div class="grid grid-cols-2 gap-20 border w-[80%] h-screen p-10 mx-auto">
            
            <!-- description -->
            <div class="flex flex-col justify-center gap-4 text-end">
                <h1 class="font-[Manrope] font-black text-7xl">Gayashan Gamage</h1>
                <h3 class="font-[Jost] font-light text-4xl">Fullstack developer</h3>
                <p class="font-[Manrope] font-light text-xl">I design scalable backend systems with clean architecture<br>
                    and modern technologies. Passionate about solving complex problems<br>
                    with elegant solutions.</p>
                
                <!-- button section -->
                <div class="flex flex-col gap-4 pt-10 w-fit ml-auto">
                    <!-- profile links -->
                    <div class="flex flex-row gap-6 w-fit ml-auto">
                        <div class="flex flex-col justify-center items-center border rounded-full h-12 w-12" v-for="item in profileLinks">
                            <i :class="item.icon" class="text-2xl"></i>
                        </div>
                    </div>
    
                    <!-- action button -->
                    <div class="grid grid-cols-2 gap-4 ml-auto w-full">
                        <button class="border py-2 rounded-full w-full font-[Jost] font-semibold text-lg bg-black text-white">Resume</button>
                        <button class="border py-2 rounded-full w-full font-[Jost] font-semibold text-lg bg-black text-white">Contact</button>
                    </div>
                </div>
            </div>
                
            <!-- head shot image -->
            <div class="flex flex-col justify-center items-center">
                <div class="w-100 h-100 border rounded-full">
                    <img src="https://gamage.dev/assets/gayashan-awAKh4d0.jpg" alt="" class="rounded-full">
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>

const profileLinks = [
    {
        name : 'GitHub',
        icon : 'fa-brands fa-square-github',
        link : 'https://github.com/GayashanGamage'
    },
    {
        name : 'Medium',
        icon : 'fa-brands fa-medium',
        link : 'https://medium.com/@gayashangamage'
    },
    {
        name : 'LeetCode',
        icon : 'fa-solid fa-l',
        link : 'https://leetcode.com/u/GayashanGamage/'
    },
    {
        name : 'LinkedIn',
        icon : 'fa-brands fa-linkedin',
        link : 'https://www.linkedin.com/in/gayashangamage/'
    },
]

</script>