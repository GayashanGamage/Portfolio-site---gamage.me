<template>
    <div class="w-full h-[90%] font-['JetBrains_Mono'] mt-40" id="contact">
        <div class="flex flex-col justify-center max-w-7xl w-full mx-auto h-full p-2">
            <div class="flex flex-col gap-30 bg-white rounded-xl py-10 p-10">
                <h3 class="font-[Manrope] text-[#5A1E32] font-black text-4xl md:text-5xl flex flex-col lg:leading-18 text-center lg:text-center">Contact me</h3>
                <div class="grid xl:grid-cols-3 md:grid-cols-2 gap-y-6 md:gap-y-10 gap-x-4">
                    <div class="flex flex-row justify-cente items-center gap-4" v-for="item in contactInfo" :key="item.details">
                        <a :href="item.link" target="_blank" class="flex flex-row justify-cente items-center gap-4">
                            <div class="bg-[#B87350]/50 text-white h-10 w-10 rounded-full flex flex-col justify-center items-center">
                                <i :class="item.icon" class="text-lg text-white"></i>
                            </div>
                            <p class="text-center">{{ item.details }}</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const contactInfo = [
    {
        // title: 'Email',
        details: 'gayashan.randimagamage@gmail.com',
        icon: 'fas fa-envelope'
    },
    {
        // title: 'Phone',
        details: '+94 78 738 9913',
        icon: 'fas fa-phone'
    },
    {
        // title: 'Location',
        details: 'Colombo, Sri Lanka',
        icon: 'fas fa-map-marker-alt'
    },
    {
        // title: 'LinkedIn',
        details: 'LinkedIn',
        icon: 'fab fa-linkedin',
        link : 'https://www.linkedin.com/in/gayashangamage/'
    },
    {
        // title: 'Leetcode',
        details: 'LeetCode',
        icon: 'fa-solid fa-l',
        link : 'https://leetcode.com/u/GayashanGamage/'
    },
    {
        // title: 'Medium',
        details: 'Medium',
        icon: 'fa-brands fa-medium',
        link : 'https://medium.com/@gayashangamage'
    }
]
</script>

