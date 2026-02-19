<template>
    <div class="flex flex-col gap-6 justify-around items-center h-auto w-[80px] fixed top-1/2 -translate-y-1/2 left-25 rounded-full pt-2 pb-2 px-2 bg-white shadow-xl">
        <div class="w-full" v-for="item in sectionList">
            <a 
            :href="item.link" 
            class="flex flex-col justify-center items-center w-full py-5 px-4 rounded-full 
                    bg-[#e1deda]/60 
                    hover:bg-[#B87350] 
                    hover:scale-110 
                    duration-200 group"
            >
            <i :class="item.icon" class="text-2xl text-[#B87350] group-hover:text-white"></i>
            </a>

        </div>
        <!-- <div class="bg-[#FAF7F2] w-10 h-10"></div>
        <div class="bg-[#5A1E32] w-10 h-10"></div>
        <div class="bg-[#B87350] w-10 h-10"></div> -->
    </div>
</template>

<script setup>
// FAF7F2
// 5A1E32
// B87350


const sectionList = [
    {
        name : 'Home',
        icon : 'fas fa-home',
        id : 'introduction',
        link : '#introduction'
    },
    {
        name : 'Skills',
        icon : 'fas fa-code',
        id : 'skills',
        link : '#skills'

    },
    {
        name : 'Project',
        icon : 'fa-solid fa-file',
        id : 'projects',
        link : '#projects'
    },
    {
        name : 'Education',
        icon : 'fa-solid fa-graduation-cap',
        id : 'education',
        link : '#education'
    },
    {
        name : 'Certifications',
        icon : 'fa-solid fa-certificate',
        id : 'certifications',
        link : '#certifications'
    },
    {
        name : 'contact',
        icon : 'fas fa-envelope',
        id : 'contact',
        link : '#contact'
    },
]

</script>