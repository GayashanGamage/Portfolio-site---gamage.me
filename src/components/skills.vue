<template>
  <section id="skills" class="w-full min-h-screen font-['JetBrains_Mono']">
    <div class="max-w-7xl min-w-2xl w-full mx-auto min-h-screen flex items-center">
      <div class="flex flex-col gap-14 m-auto">
        <h2 class="text-center font-black text-4xl">
          Skills & Technologies
        </h2>

        <!-- Filters -->
        <div class="flex flex-wrap gap-3 justify-center">
          <!-- mt-auto font-black w-fit ml-auto border py-2 px-4 rounded-md font-[Manrope] text-sm hover:text-[#B87350] text-white bg-[#B87350] hover:bg-white transition -->
          <button
            v-for="f in filters"
            :key="f.value"
            @click="activeFilter = f.value"
            class="px-5 py-2 rounded-md border text-base transition shadow-lg font-black"
            :class="activeFilter === f.value ? 'bg-[#B87350] text-white border-0' : 'bg-white text-[#B87350] border-gray-300 hover:bg-gray-50'"
          >
            {{ f.label }}
          </button>
        </div>

        <!-- Skills (shows based on filter) -->
        <div class="flex flex-wrap gap-4 justify-center mt-4">
          <button
            v-for="skill in filteredSkills"
            :key="skill.name"
            class="flex items-center gap-4 border border-gray-300 py-3 px-6 rounded-full text-sm hover:bg-gray-50 transition bg-white"
          >
            <i :class="skill.icon" class="text-lg"></i>
            <span class="text-sm">{{ skill.name }}</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from "vue"

const filters = [
  { label: "All", value: "all" },
  { label: "Backend", value: "backend" },
  { label: "Frontend", value: "frontend" },
  { label: "Database", value: "database" },
  { label: "AI", value: "ai" },
  { label: "Dev Tools", value: "devtools" },
]

// ✅ default selected = All
const activeFilter = ref("all")

const skills = [
  // backend
  { name: "Python", category: "backend", icon: "fab fa-python" },
  { name: "Flask", category: "backend", icon: "fab fa-python" },
  { name: "Rest API", category: "backend", icon: "fab fa-python" },
  { name: "FastAPI", category: "backend", icon: "fas fa-bolt" },
  { name: "Head-less CMS", category: "backend", icon: "fas fa-bolt" },
  { name: "Django", category: "backend", icon: "fab fa-python" },
  { name: "Node.js", category: "backend", icon: "fab fa-node-js" },

  
  // frontend
  { name: "JavaScript", category: "frontend", icon: "fab fa-vuejs" },
  { name: "VueJs", category: "frontend", icon: "fab fa-vuejs" },
  { name: "NuxtJS", category: "frontend", icon: "fas fa-n" },
  { name: "ReactJS", category: "frontend", icon: "fab fa-react" },
  { name: "TailwindCSS", category: "frontend", icon: "fas fa-wind" },
  { name: "HTML", category: "frontend", icon: "fab fa-html5" },
  { name: "CSS", category: "frontend", icon: "fab fa-css3-alt" },
  
  // database
  { name: "MongoDB", category: "database", icon: "fas fa-database" },
  { name: "Postgres", category: "database", icon: "fas fa-database" },
  { name: "Supabase", category: "database", icon: "fas fa-database" },
  { name: "Redis", category: "database", icon: "fas fa-database" },
  { name: "Kafka", category: "database", icon: "fas fa-database" },
  
  // dev tools
  { name: "AWS", category: "devtools", icon: "fab fa-aws" },
  { name: "Docker", category: "devtools", icon: "fab fa-docker" },
  { name: "Git", category: "devtools", icon: "fab fa-git-alt" },
  { name: "GitHub", category: "devtools", icon: "fab fa-git-alt" },
  { name: "Postman", category: "devtools", icon: "fas fa-paper-plane" },
  { name: "Heroku", category: "devtools", icon: "fas fa-paper-plane" },
  
  // AI
  { name: "LangChain", category: "ai", icon: "fas fa-link" },
  { name: "Prompt engineering", category: "ai", icon: "fas fa-robot" },
  { name: "PineCorn", category: "ai", icon: "fas fa-robot" },
  { name: "n8n", category: "ai", icon: "fas fa-robot" },
  { name: "Flowise", category: "ai", icon: "fas fa-robot" },
  { name: "RAG applications", category: "ai", icon: "fas fa-robot" },
]

const filteredSkills = computed(() => {
  if (activeFilter.value === "all") return skills
  return skills.filter((s) => s.category === activeFilter.value)
})
</script>
