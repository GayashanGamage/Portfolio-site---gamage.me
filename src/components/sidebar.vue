<template>
    <div class="flex flex-col gap-6 justify-around items-center border h-auto w-[80px] fixed top-1/2 -translate-y-1/2 left-15 rounded-full pt-2 pb-2 px-2">
        <div class="" v-for="item in sectionList">
            <a :href="item.link" class="flex flex-col justify-center items-center border w-full py-5 px-4 rounded-full">
                <i :class="item.icon" class="text-2xl"></i>
            </a>
        </div>
    </div>
</template>

<script setup>

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
    // {
    //     name : 'Education',
    //     icon : 'fa-solid fa-graduation-cap',
    //     id : 'education',
    //     link : '#education'
    // },
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