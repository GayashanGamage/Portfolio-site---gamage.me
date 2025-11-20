<template>
    <div class="flex flex-col gap-6 justify-around items-center border h-auto w-[80px] fixed top-1/2 -translate-y-1/2 left-15 rounded-full pt-2 pb-2 px-2">
        <div class="flex flex-col justify-center items-center border w-full py-5 rounded-full" v-for="item in sectionList">
            <i :class="item.icon" class="text-2xl"></i>
        </div>
    </div>
</template>

<script setup>

const sectionList = [
    {
        name : 'Home',
        icon : 'fas fa-home',
        id : 'introduction'
    },
    {
        name : 'Skills',
        icon : 'fas fa-code',
        id : 'skills'
    },
    {
        name : 'Project',
        icon : 'fa-solid fa-file',
        id : 'projects'
    },
    {
        name : 'Education',
        icon : 'fa-solid fa-graduation-cap',
        id : 'education'
    },
    {
        name : 'Certifications',
        icon : 'fa-solid fa-certificate',
        id : 'introduction'
    },
    {
        name : 'Certifications',
        icon : 'fas fa-envelope',
        id : 'certifications'
    },
]

</script>