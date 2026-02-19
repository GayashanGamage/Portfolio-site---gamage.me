<template>
    <div class="w-full h-[90%] font-['JetBrains_Mono'] mt-40" id="contact">
        <div class="flex flex-col justify-center max-w-7xl min-w-2xl w-full mx-auto h-full">
            <div class="flex flex-col gap-30 ">
                <h3 class="text-center font-black text-4xl">Contact me</h3>
                <div class="flex flex-col gap-6">
                    <!-- contact information -->
                    <div class="grid grid-cols-3 gap-10 h-fit">
                        <a :href="item.link" target="_blank" v-for="item in contactInfo">
                            <div class="border-gray-200 border-1 flex flex-col gap-6 justify-center items-center py-10 max-h-40 w-full bg-white p-6 rounded-xl shadow-lg hover:bg-gray-100">
                                <i :class="item.icon" class="text-3xl text-[#B87350]"></i>
                                <!-- <h4 class="text-sm">{{ item.title }}</h4> -->
                                <p class="text-md">{{ item.details }}</p>
                            </div>
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

