<template>
    <div class="w-full h-auto" id="introduction">
        <div class="grid grid-cols-6 gap-20 max-w-7xl min-w-2xl w-full h-screen mx-auto">
        
            <!-- description -->
            <div class="flex flex-col justify-center col-span-4 gap-4 text-start">
                <h1 class="font-[Manrope] text-[#5A1E32] font-black text-7xl">Gayashan Gamage</h1>
                <h3 class="font-[Jost] text-[#5A1E32] font-light text-4xl">Fullstack developer</h3>
                <p class="font-[Manrope] text-[#5A1E32] text-xl">I design scalable backend systems with clean architecture<br>
                    and modern technologies. Passionate about solving complex problems<br>
                    with elegant solutions.</p>
                
                <!-- button section -->
                <div class="flex flex-col gap-4 pt-10 w-fit mr-auto">
                    <!-- profile links -->
                    <!-- <div class="flex flex-row gap-6 w-fit ml-auto">
                        <div class="border rounded-full h-12 w-12" v-for="item in profileLinks">
                            <a :href="item.link" class="h-full w-full flex flex-col justify-center items-center" >
                                <i :class="item.icon" class="text-2xl"></i>
                            </a>
                        </div>
                    </div> -->
    
                    <!-- action button -->
                    <div class="grid grid-cols-3 gap-2 ml-auto w-full">
                        <a href="https://github.com/GayashanGamage" target="_blank" class="">
                            <button class="flex flex-row gap-4 items-center border py-2 rounded-full w-full font-[Jost] font-semibold text-lg bg-[#B87350] text-white px-10 hover:cursor-pointer hover:bg-white hover:text-[#B87350] transition">
                                <i class="fa-brands fa-github text-xl"></i> 
                                GitHub
                            </button>
                        </a>
                        <a href="https://drive.google.com/uc?export=download&id=11mZ6NgNagNYjkrgP1jzFnGr9eXvbHviv" class="w-full h-full">
                            <button class="flex flex-row gap-4 items-center border rounded-full w-full font-[Jost] font-semibold text-lg bg-[#B87350] text-white px-10 py-2 hover:cursor-pointer hover:bg-white hover:text-[#B87350] transition">
                                <i class="fa-regular fa-file text-xl"></i>
                                Resume
                            </button>
                        </a>
                        <a href="#contact" class="">
                            <button class="flex flex-row gap-4 items-center border py-2 rounded-full w-full font-[Jost] font-semibold text-lg bg-[#B87350] text-white px-10 hover:cursor-pointer hover:bg-white hover:text-[#B87350] transition">
                                <i class="fa-regular fa-envelope text-xl"></i> 
                                Contact
                            </button>
                        </a>
                    </div>
                </div>
            </div>
                
            <!-- head shot image -->
            <div class="flex flex-col justify-center items-center">
                <div class="w-80 h-80 rounded-full">
                    <img src="https://gamage.dev/assets/gayashan-awAKh4d0.jpg" alt="" class="rounded-full">
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
// const profileLinks = [
//     {
//         name : 'GitHub',
//         icon : 'fa-brands fa-square-github',
//         link : 'https://github.com/GayashanGamage'
//     },
//     {
//         name : 'Medium',
//         icon : 'fa-brands fa-medium',
//         link : 'https://medium.com/@gayashangamage'
//     },
//     {
//         name : 'LeetCode',
//         icon : 'fa-solid fa-l',
//         link : 'https://leetcode.com/u/GayashanGamage/'
//     },
//     {
//         name : 'LinkedIn',
//         icon : 'fa-brands fa-linkedin',
//         link : 'https://www.linkedin.com/in/gayashangamage/'
//     },
// ]

</script>