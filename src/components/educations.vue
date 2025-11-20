<template>
    <div class="">
        <!-- Education Section -->
        <section id="education" class="min-h-screen flex flex-col justify-center px-16 py-20">
            <h2 class="text-3xl font-semibold mb-16 text-center relative inline-block mx-auto">
            Education
            <span class="absolute bottom-0 left-0 w-full h-1 bg-red-500 rounded"></span>
            </h2>
            <div class="timeline relative max-w-4xl mx-auto">
            <div class="timeline-line absolute left-1/2 top-0 bottom-0 w-0.5 bg-red-50 transform -translate-x-1/2"></div>
            <div 
                v-for="(edu, index) in education" 
                :key="edu.id"
                class="timeline-item mb-16 relative opacity-0 transform translate-y-8 transition-all duration-600"
                :class="{ 
                'opacity-100 translate-y-0': edu.visible,
                'flex justify-start pr-1/2': index % 2 === 0,
                'flex justify-end pl-1/2': index % 2 === 1
                }"
                ref="timelineItems"
            >
                <div class="timeline-content bg-white p-8 rounded-xl shadow-neumorphic w-11/12 relative">
                <div class="timeline-dot absolute top-8 w-5 h-5 rounded-full bg-white shadow-neumorphic"
                    :class="index % 2 === 0 ? 'right-0 -mr-10' : 'left-0 -ml-10'"
                ></div>
                <div class="timeline-date text-red-500 font-medium mb-3">{{ edu.date }}</div>
                <h3 class="timeline-title text-xl font-semibold mb-3">{{ edu.title }}</h3>
                <div class="timeline-school text-gray-600 mb-4">{{ edu.school }}</div>
                <p class="text-gray-600">{{ edu.description }}</p>
                </div>
            </div>
            </div>
        </section>
    </div>
</template>
<script setup>

const education = [
        {
            id: 1,
            date: '2020 - 2022',
            title: 'Master of Science in Computer Science',
            school: 'Stanford University',
            description: 'Specialized in distributed systems and scalable architecture. Thesis focused on microservices patterns in cloud environments.',
            visible: false
        },
        {
            id: 2,
            date: '2016 - 2020',
            title: 'Bachelor of Science in Software Engineering',
            school: 'MIT',
            description: 'Focused on software architecture, algorithms, and system design. Graduated with honors and multiple academic awards.',
            visible: false
        },
        {
            id: 3,
            date: '2014 - 2016',
            title: 'Associate Degree in Computer Programming',
            school: 'Community College',
            description: 'Foundation in programming fundamentals, data structures, and web development. Dean\'s List all semesters.',
            visible: false
        }
    ]

</script>