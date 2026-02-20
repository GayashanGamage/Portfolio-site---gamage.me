<template>
    <div class="w-screen min-h-screen relative bg-[#FAF7F2]">
        <Sidebar></Sidebar>
        <Intro></Intro>
        <!-- <About></About>
        <Skills></Skills>
        <Project></Project>
        <Educations></Educations>
        <Certificates></Certificates>
        <Contact></Contact>
        <Footer></Footer> -->
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
import Footer from '@/components/footer.vue';
import Educations from '@/components/educations.vue';

</script>