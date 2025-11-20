<template>
    <div class="w-full h-auto" id="certifications">
        <div class="flex flex-col gap-20 border w-[80%] p-10 mx-auto min-h-screen">
            <div class="flex flex-col gap-40 h-fit my-auto py-[min(6rem)]">
                <h2 class="text-center font-[Manrope] font-black text-4xl">
                    Certifications
                    <span class=""></span>
                </h2>
                <div class="grid grid-cols-3 gap-4" ref="carousel">
                    <div 
                        v-for="cert in certifications" 
                        :key="cert.id"
                        class="flex flex-col gap-5 border border-gray-300 px-6 py-6 rounded-xl"
                    >
                        <div class="flex flex-row items-center gap-4">
                            <i :class="cert.icon" class="text-3xl mb-auto"></i>
                            <h3 class="font-[Manrope] font-semibold text-2xl">{{ cert.title }}</h3>
                        </div>
                        <div class="flex flex-row items-center justify-between">
                            <p class="font-[Manrope] text-sm bg-gray-300 py-1 px-4 rounded-sm">{{ cert.level }} level</p>
                            <p class="font-[Manrope] text-sm">
                                By <a :href="cert.creator.website" class="">{{ cert.creator.name }}</a>
                            </p>
                        </div>
                        <p class="font-[Manrope] text-xl">{{ cert.description }}</p>
                        <button class="border py-1 px-4 rounded-md ml-auto font-[Manrope] text-sm w-fit mt-auto">
                            <a :href="cert.link" class="">View Certificate</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const certifications = [
        {
            title: 'AWS Certified Solutions Architect',
            icon: 'fa-brands fa-aws',
            level: 'Beginner',
            creator : {
                name : 'Amazon web services',
                website : 'https://aws.amazon.com'
            },
            description: 'Validates expertise in designing distributed systems on AWS with focus on security, reliability, and performance.',
            link: '#'
        },
        {
            title: 'MongoDB Certified Developer',
            icon: 'fa-solid fa-database',
            level: 'Intemediate',
            creator : {
                name : 'MongoDB University',
                website : 'https://learn.mongodb.com'
            },
            description: 'Demonstrates proficiency in MongoDB data modeling, aggregation, replication, and sharding.',
            link: '#'
        },
        {
            title: 'Python Django-Practicle guide',
            icon: 'fa-brands fa-python',
            level: 'Advanced',
            creator : {
                name : 'udemy - Maximilian Schwarzmüller',
                website : 'https://udemy.com/'
            },
            description: 'Certifies advanced Python programming skills including OOP, data structures, and algorithm implementation.',
            link: '#'
        },
        {
            title: 'Build REST APIs with Django REST',
            icon: 'fa-brands fa-python',
            level: 'Advanced',
            creator : {
                name : 'udemy - Maximilian Schwarzmüller',
                website : 'https://udemy.com/'
            },
            description: 'Certifies advanced Python programming skills including OOP, data structures, and algorithm implementation.',
            link: '#'
        },
        {
            title: 'Compleate JavaScript course',
            icon: 'fa-brands fa-js',
            level: 'Advanced',
            creator : {
                name : 'udemy - Jonas Schmedtmann',
                website : 'https://udemy.com/'
            },
            description: 'Validates skills in Kubernetes installation, configuration, and management of production-grade clusters.',
            link: '#'
        },
        {
            title: 'Vue.js Framework for building Frontend Applications! ',
            icon: 'fa-brands fa-js',
            level: 'Advanced',
            creator : {
                name : 'udemy - Maximilian Schwarzmüller',
                website : 'https://udemy.com/'
            },
            description: 'Certifies advanced Python programming skills including OOP, data structures, and algorithm implementation.',
            link: '#'
        },
    ]

</script>