<template>
    <div class="relative">
        <Sidebar></Sidebar>
        <Intro></Intro>
        <About></About>
        <Skills></Skills>
        <Project></Project>
        <Certificates></Certificates>
        <Contact></Contact>
    </div>
</template>
<script setup>
import About from '@/components/about.vue';
import Certificates from '@/components/certificates.vue';
import Contact from '@/components/contact.vue';
import Intro from '@/components/intro.vue';
import Project from '@/components/project.vue';
import Sidebar from '@/components/sidebar.vue';
import Skills from '@/components/skills.vue';

</script>