<template>
    <div class="font-['JetBrains_Mono'] flex flex-col lg:grid md:grid-cols-6 w-screen min-h-screen h-screen lg:max-w-4xl 2xl:max-w-6xl mx-auto" id="introduction">
        
        <!-- text section -->
        <div class="order-2 lg:col-span-4 lg:order-1 h-1/2 px-4 md:px-0 lg:h-full flex flex-col lg:justify-center gap-2 lg:gap-6">
            <h1 class="text-[#5A1E32] font-black text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center lg:text-left">Gayashan Gamage</h1>
            <h2 class="text-[#5A1E32] font-light text-2xl md:text-3xl lg:text-4xl text-center lg:text-left">Fullstack Developer</h2>
            <p class="text-[#5A1E32] text-sm sm:text-lg lg:t3ext-xl text-center lg:text-left w-[80%] md:w-[60%] mx-auto lg:mx-0 font-light">Passionate Fullstack Developer crafting scalable solutions with modern tech.</p>
            <div class="flex flex-row justify-center lg:justify-start gap-4">
                <a href="https://drive.google.com/uc?export=download&id=1N1wJE5aPCbiF_sIZzeFY8s3whJrUyI2W" class="">
                    <button class="flex flex-row justify-center items-center gap-2 whitespace-nowrap font-semibold text-xs md:text-sm py-2 px-3 sm:px-4 rounded-full bg-[#B87350] text-white hover:bg-[#5A1E32] transition-colors duration-300">
                        <i class="fa-solid fa-file text-sm sm:text-base"></i>
                        Resume
                    </button>
                </a>
                <a href="https://github.com/GayashanGamage" class="">
                    <button class="flex flex-row justify-center items-center gap-2 whitespace-nowrap font-semibold text-xs sm:text-sm py-2 px-3 sm:px-4 rounded-full bg-[#B87350] text-white hover:bg-[#5A1E32] transition-colors duration-300">
                        <i class="fa-brands fa-github text-sm sm:text-base"></i>
                        GitHub
                    </button>
                </a>
                <a href="#contact" class="">
                    <button class="flex flex-row justify-center items-center gap-2 whitespace-nowrap font-semibold text-xs sm:text-sm py-2 px-3 sm:px-4 rounded-full bg-[#B87350] text-white hover:bg-[#5A1E32] transition-colors duration-300">
                        <i class="fa-solid fa-envelope text-sm sm:text-base"></i>
                        Contact Me
                    </button>
                </a>
            </div>
        </div>

        <!-- image section  -->
        <div class="order-1 lg:col-span-2 lg:order-2 w-full h-1/2 mx-auto flex flex-col lg:h-full">
            <img src="https://ik.imagekit.io/myHotelSolutions/Gamage.dev/Others/gayashan.jpg" alt="" class="rounded-full border-6 border-white w-[45%] sm:w-[30%] lg:w-full h-auto my-auto mx-auto">
        </div>
    </div>
</template>
<script setup>
</script>
