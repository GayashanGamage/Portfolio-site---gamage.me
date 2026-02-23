<!-- <template>
    <div class="flex flex-col justify-center fixed bottom-0 sm:bottom-6 xl:bottom-0 left-0 right-0 xl:right-auto xl:top-0 md:p-4 2xl:p-20 bg-white sm:bg-white/0 z-100">
        <div class="flex flex-row xl:flex-col w-full justify-between max-w-[450px] sm:max-w-xl mx-auto bg-white/0 sm:bg-white py-10 px-4 sm:px-12 xl:px-2 sm:py-4 sm:rounded-full xl:gap-2 md:shadow-lg">
            <div class="flex flex-col justify-center items-center w-full" v-for="item in sectionList">
                <a 
                :href="item.link" 
                class="flex flex-col flex-grow justify-center items-center sm:w-full p-4 h-auto
                        hover:bg-[#B87350] 
                        hover:scale-110 
                        duration-200 group 
                        rounded-full"
                >
                <i :class="item.icon" class="text-base sm:text-lg text-[#B87350] group-hover:text-white"></i>
                </a>
            </div>
        </div>
        <div class="bg-[#FAF7F2] w-10 h-10"></div>
        <div class="bg-[#5A1E32] w-10 h-10"></div>
        <div class="bg-[#B87350] w-10 h-10"></div>
    </div>
</template>

<script setup>
FAF7F2
5A1E32
B87350
bg-[#e1deda]/60

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

</script> -->


<template>
  <div class="flex flex-col justify-center fixed bottom-0 sm:bottom-6 xl:bottom-0 left-0 right-0 xl:right-auto xl:top-0 md:p-4 2xl:p-20 bg-white sm:bg-white/0 z-100">
    <div class="flex flex-row xl:flex-col w-full justify-between max-w-[450px] sm:max-w-xl mx-auto bg-white/0 sm:bg-white py-10 px-4 sm:px-12 xl:px-2 sm:py-4 sm:rounded-full xl:gap-2 md:shadow-lg">
      <div
        class="flex flex-col justify-center items-center w-full"
        v-for="item in sectionList"
        :key="item.id"
      >
        <a
          :href="item.link"
          class="flex flex-col flex-grow justify-center items-center sm:w-full p-4 h-auto
                 hover:bg-[#B87350]
                 hover:scale-110
                 duration-200 group
                 rounded-full"
        >
          <i
            :class="[
              item.icon,
              activeSectionId === item.id ? 'text-[#B87350]' : 'text-gray-200',
              'text-base sm:text-lg group-hover:text-white'
            ]"
          ></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"

// FAF7F2
// 5A1E32
// B87350
// bg-[#e1deda]/60

const activeSectionId = ref("introduction")
let observer = null

const sectionList = [
  { name: "Home", icon: "fas fa-home", id: "introduction", link: "#introduction" },
  { name: "Skills", icon: "fas fa-code", id: "skills", link: "#skills" },
  { name: "Project", icon: "fa-solid fa-file", id: "projects", link: "#projects" },
  { name: "Education", icon: "fa-solid fa-graduation-cap", id: "education", link: "#education" },
  { name: "Certifications", icon: "fa-solid fa-certificate", id: "certifications", link: "#certifications" },
  { name: "contact", icon: "fas fa-envelope", id: "contact", link: "#contact" },
]

onMounted(() => {
  const sections = sectionList
    .map(s => document.getElementById(s.id))
    .filter(Boolean)

  observer = new IntersectionObserver(
    (entries) => {
      // pick the most visible section
      const visible = entries
        .filter(e => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

      if (visible?.target?.id) {
        activeSectionId.value = visible.target.id
      }
    },
    {
      root: null,
      threshold: [0.2, 0.35, 0.5, 0.65, 0.8],
    }
  )

  sections.forEach(sec => observer.observe(sec))
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})
</script>