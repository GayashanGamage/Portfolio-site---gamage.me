<template>
  <div class="w-full h-screen" id="skills">
    <div class="flex flex-col w-[80%] p-10 h-full border mx-auto">
      <div class="flex flex-col gap-30 h-fit my-auto">
        <h2 class="text-center font-[Manrope] font-black text-4xl">
          Skills & Technologies
          <span class=""></span>
        </h2>
        <div class="grid grid-cols-3 gap-4">
          
          <!-- single skill category list -->
          <div class="flex flex-col gap-5 border border-gray-300 px-6 py-12 rounded-xl" v-for="cat in categoryList">
            <h1 class="font-[Manrope] font-semibold text-2xl">{{ cat }}</h1>
            <div class="flex flex-row flex-wrap gap-2">
              <div 
                v-for="skill in categorySkillList(cat)" 
                :key="skill.id"
                class="flex flex-row gap-4 items-center border py-2 px-4 rounded-full"
                @click="showSkillPopup(skill)"
              >
                <i :class="skill.icon" class=""></i>
                <span class="font-[Manrope]">{{ skill.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeMount, ref } from 'vue';

const categoryList = ref([])
const skills = [
        { 
            name: 'Python', 
            category : 'backend',
            icon: 'fab fa-python',
          },
          { 
            name: 'FastAPI', 
            category : 'backend',
            icon: 'fas fa-bolt',
          },
          { 
            name: 'Django', 
            category : 'backend',
            icon: 'fab fa-python',
          },
          { 
            name: 'Node.js', 
            category : 'backend',
            icon: 'fab fa-node-js',
          },
          { 
            name: 'AWS', 
            category : 'tools',
            icon: 'fab fa-aws',
          },
          { 
            name: 'Docker', 
            category : 'tools',
            icon: 'fab fa-docker',
          },
          { 
            name: 'Git', 
            category : 'tools',
            icon: 'fab fa-git-alt',
          },
          { 
            name: 'PostMan', 
            category : 'tools',
            icon: 'fab fa-git-alt',
          },
          { 
            name: 'VueJs', 
            category : 'frontend',
            icon: 'fab fa-git-alt',
          },
          { 
            name: 'NuxtJS', 
            category : 'frontend',
            icon: 'fab fa-git-alt',
          },
          { 
            name: 'ReactJS', 
            category : 'frontend',
            icon: 'fab fa-git-alt',
          },
          { 
            name: 'TailwindCSS', 
            category : 'frontend',
            icon: 'fab fa-git-alt',
          },
          { 
            name: 'HTML', 
            category : 'frontend',
            icon: 'fab fa-git-alt',
          },
          { 
            name: 'CSS', 
            category : 'frontend',
            icon: 'fab fa-git-alt',
          },
          { 
            name: 'MongoDB', 
            category : 'database',
            icon: 'fab fa-git-alt',
          },
          { 
            name: 'Postgres', 
            category : 'database',
            icon: 'fab fa-git-alt',
          },
          { 
            name: 'Supabase', 
            category : 'database',
            icon: 'fab fa-git-alt',
          },
          { 
            name: 'Redis', 
            category : 'database',
            icon: 'fab fa-git-alt',
          },
          { 
            name: 'N8N', 
            category : 'Agentic',
            icon: 'fab fa-git-alt',
          },
          { 
            name: 'Langchain', 
            category : 'Agentic',
            icon: 'fab fa-git-alt',
          },
    ]

const categorySkillList = ((catName) => {
  return skills.filter((items) => items.category == catName)
})


onBeforeMount(() => {
  // this is for get all available category from the skill list

  skills.forEach(element => {
    if( !categoryList.value.includes(element.category) ){
      categoryList.value.push(element.category)
    }
  });
  console.log(categoryList.value)
})

</script> 