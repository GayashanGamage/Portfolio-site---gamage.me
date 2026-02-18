<template>
    <div class="">
        <nav class="fixed left-5 top-1/2 transform -translate-y-1/2 bg-white rounded-2xl shadow-neumorphic p-4 z-40 flex flex-col gap-4">
            <a 
                v-for="item in navItems" 
                :key="item.id"
                :href="'#' + item.id"
                class="w-12 h-12 flex items-center justify-center rounded-full text-gray-500 transition-all duration-300 hover:bg-red-50 hover:text-red-500 hover:-translate-y-1"
                :class="{ 'bg-red-50 text-red-500': activeSection === item.id }"
                @click.prevent="scrollToSection(item.id)"
            >
                <i :class="item.icon"></i>
            </a>
        </nav>
    </div>
</template>

<script setup>
import { ref } from 'vue';


const activeSection = 'intro'

const navItems = [
        { id: 'intro', icon: 'fas fa-home', link : 'introduction' },
        { id: 'about', icon: 'fas fa-user' },
        { id: 'skills', icon: 'fas fa-code' },
        { id: 'education', icon: 'fas fa-graduation-cap' },
        { id: 'certifications', icon: 'fas fa-award' },
        { id: 'contact', icon: 'fas fa-envelope' }
    ]

const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth'
            });
        }
    }

</script>