<template>
  <!-- menu section -->
  <div class="flex justify-center pt-10 ">
    <div class="flex flex-row items-center w-1/2 p-2 justify-between border-b">
      <h1 class="text-2xl font-bold font-sans">GAMAGE.ME</h1>
      <div class="flex flex-row items-center space-x-4 gap-12">
        <p class="text-xl font-medium font-sans hover:cursor-pointer">Tech Stack</p>
        <p class="text-xl font-medium font-sans hover:cursor-pointer">Projects</p>
        <p class="px-8 py-2 text-gray-50 bg-black rounded-lg text-md text-lg font-medium font-sans border hover:bg-white hover:border hover:text-black hover:cursor-pointer hover:font-medium">CV</p>
      </div>
    </div>
  </div>  
  <!-- intro section -->
  <div class="flex justify-center py-10">
    <div class="flex w-1/2 h-50">
      <!-- image -->
      <img src="/public/gayashan.jpg" alt="Gayashan Gamage's image" class="rounded-full">
      <!-- introduction text -->
      <div>
        <p>Hi.. I'm Gayashan. Fulstack developer with learning mindset <span>Open to work</span></p>
        <!-- location and link section -->
         <div>
          <p>Colombo, Sri Lanka</p>
          <!-- link section -->
           <div>
            <div>
              <img :src="profileLinkIcons.linkedin" alt="linkedin icon" class="w-6 h-6">
              <p><a :href="profileLinks.linkedin" target="_blank">LinkedIn</a></p>
            </div>
            <div>
              <img :src="profileLinkIcons.github" alt="github icon" class="w-6 h-6">
              <p><a :href="profileLinks.github" target="_blank">GitHub</a></p>
            </div>
            <div>
              <img :src="profileLinkIcons.medium" alt="github icon" class="w-6 h-6">
              <p><a :href="profileLinks.medium" target="_blank">Medium</a></p>
            </div>
           </div>
         </div>
      </div> 
    </div>
  </div>
  <!-- tech stack section -->
  <div class="flex justify-center py-10">
    <div class="flex flex-col w-1/2 h-50 border">
      <h3>TECH STACK</h3>
      <div class="flex">
        <div v-for="item in techStack" class="border">
          <img :src="item.icon" :alt="item.name" class="w-6 h-6">
          <p>{{ item.name }}</p>
        </div>
      </div>
    </div>
  </div>
  <!-- project section -->
  <div class="flex justify-center py-10">
    <div class="flex flex-col w-1/2 h-auto border">
      <h3>PROJECTS</h3>
      <div class="flex flex-col p-4 border">
        <div class="bg-amber-700 w-full h-120 border"></div>
        <h4>Project Title</h4>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque accusantium temporibus, recusandae corporis id suscipit velit quis illum explicabo voluptate totam tenetur eos quas similique aspernatur molestias sapiente quo aut?</p>
        <!-- tech stack container -->
        <div class="flex flex-row">
          <!-- tech item -->
          <div class="border" v-for="item in techStack">
            <img :src="item.icon" :alt="item.name" class="w-6 h-6">
            <p>{{ item.name }}</p>
          </div>
        </div>
        <!-- project links -->
         <div class="flex flex-row">
          <div class="flex flex-row">
            <span class="material-icons">language</span>
            <p>Live Project</p>
          </div>
         </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const blog_url = 'https://medium.com/@gayashangamage'

// link icons
const profileLinkIcons = {
  'medium' : '/public/medium.png',
  'linkedin' : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg",
  'github' : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
}

// profile links
const profileLinks = {
  'medium' : 'https://medium.com/@gayashangamage',
  'linkedin' : 'https://www.linkedin.com/in/gayashangamage/',
  'github' : 'https://github.com/GayashanGamage'
}

// tech stack types
const techStackTypes = [
  'language',
  'frontend',
  'backend',
  'database',
  'devops',
  'tools'
]

// tech stack
const techStack = [
  {
    'type' : techStackTypes[0],
    'name' : 'JavaScript',
    'icon' : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
  },
  {
    'type' : techStackTypes[0],
    'name' : 'Python',
    'icon' : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
  },
  {
    'type' : techStackTypes[1],
    'name' : 'HTML',
    'icon' : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
  },
  {
    'type' : techStackTypes[1],
    'name' : 'CSS',
    'icon' : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
  },
  {
    'type' : techStackTypes[1],
    'name' : 'Vue.js',
    'icon' : 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg'
  },
  {
    'type' : techStackTypes[1],
    'name' : 'Tailwind CSS',
    'icon' : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" 
  },
  {
    'type' : techStackTypes[2],
    'name' : 'FastAPI',
    'icon' : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg"
  },
  {
    'type' : techStackTypes[2],
    'name' : 'Flask',
    'icon' : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg"
  },
  {
    'type' : techStackTypes[3],
    'name' : 'MongoDB',
    'icon' : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
  },
  {
    'type' : techStackTypes[3],
    'name' : 'Supabase',
    'icon' : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg"
  },
  {
    'type' : techStackTypes[4],
    'name' : 'Docker',
    'icon' : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg"
  },
  {
    'type' : techStackTypes[4],
    'name' : 'AWS',
    'icon' : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
  },
  {
    'type' : techStackTypes[5],
    'name' : 'Postman',
    'icon' : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
  },
  {
    'type' : techStackTypes[5],
    'name' : 'GIT',
    'icon' : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
  },
]

</script>

<style>
* {
  margin: 0;
}
html {
  font-family: "", sans-serif;
  font-size: 14px;
}
</style>
