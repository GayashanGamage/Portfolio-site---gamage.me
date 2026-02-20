<template>
    <div class="flex flex-col justify-center fixed bottom-0 sm:bottom-6 xl:bottom-0 left-0 right-0 xl:right-auto xl:top-0 md:p-4 2xl:p-20 bg-white sm:bg-white/0">
        <div class="flex flex-row xl:flex-col w-full justify-between max-w-[450px] sm:max-w-xl mx-auto bg-white/0 sm:bg-white py-10 px-4 sm:px-12 xl:px-4 sm:py-4 sm:rounded-full xl:gap-6 md:shadow-lg">
            <div class="w-fit" v-for="item in sectionList">
                <a 
                :href="item.link" 
                class="flex flex-col flex-grow justify-center items-center w-12 sm:w-full p-4 h-auto
                        bg-[#e1deda]/60 
                        hover:bg-[#B87350] 
                        hover:scale-110 
                        duration-200 group 
                        rounded-full"
                >
                <i :class="item.icon" class="text-base sm:text-base text-[#B87350] group-hover:text-white"></i>
                </a>
            </div>
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