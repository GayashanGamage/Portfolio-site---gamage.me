<template>
  <div class="w-full h-auto" id="projects">
    <div class="flex flex-col gap-20 border w-[80%] p-10 mx-auto min-h-screen">
      <div class="flex flex-col gap-30 h-fit my-auto py-[min(6rem)]">
        <h2 class="text-center font-[Manrope] font-black text-4xl">
          Featured Projects
          <span class=""></span>
        </h2>
        <div class="grid grid-cols-2 gap-4">
          <div 
            v-for="project in projects" 
            :key="project.id"
            class="flex flex-col gap-5 border border-gray-300 px-6 py-6 rounded-xl"
          >
            <div class="w-full h-[300px] overflow-hidden">
              <img :src="project.image" class="w-full h-full object-cover object-center rounded-xl">
            </div>

            <!-- project detials -->
            <div class="flex flex-col gap-5">
              
              <!-- project title -->
              <div class="flex flex-row gap-10 items-center">
                <i :class="project.icon"></i>
                <h3 class="font-[Manrope] font-semibold text-2xl">{{ project.title }}</h3>
              </div>

              <p class="font-[Manrope] text-xl">{{ project.description }}</p>

              <!-- tech stack -->
              <div class="flex flex-row gap-4">
                <div class="font-[Manrope] text-sm border border-gray-300 py-1 px-4 rounded-lg" v-for="items in project.tech">{{ items }}</div>
              </div>

              <!-- project links -->
              <div class="grid grid-cols-3 gap-4">
                <button class="border py-2 rounded-lg" v-for="[key, value] in Object.entries(project.links)" @click="openNewPage(value)">{{ key }}</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>

const projects = [
        {
            title: 'Real-time Chat Platform',
            image : 'https://www.giosg.com/hs-fs/hubfs/Blogs%202022/How%20to%20Choose%20the%20Right%20Live%20Chat%20Software%20for%20Your%20Business/How%20to%20Choose%20Live%20Chat%20Blog%20hero%20image%20%E2%80%93%201300%20x%20630.png?width=1300&name=How%20to%20Choose%20Live%20Chat%20Blog%20hero%20image%20%E2%80%93%201300%20x%20630.png',
            icon: 'fas fa-comments',
            description: 'Scalable messaging system with WebSocket connections and Redis pub/sub for real-time communication.',
            tech: ['Node.js', 'Socket.io', 'Redis', 'MongoDB'],
            links : {
              github : 'https://youtube.com',
              demo : '',
              links : ''
            }
        },
        {
            title: 'E-commerce API',
            image : 'https://www.agegracefullyamerica.com/wp-content/uploads/2024/10/Online-Shopping.-3-768x512.png',
            icon: 'fas fa-shopping-cart',
            description: 'Complete shopping platform with payment processing, inventory management, and order tracking.',
            tech: ['Python', 'FastAPI', 'PostgreSQL', 'Stripe API'],
            links : {
              github : '',
              demo : '',
              links : ''
            }
        },
        {
            title: 'Analytics Service',
            image : 'https://www.simplilearn.com/ice9/free_resources_article_thumb/Top_9_Data_Mining_Tools.jpg',
            icon: 'fas fa-chart-line',
            description: 'Real-time data processing pipeline with dashboard and reporting features for business intelligence.',
            tech: ['Go', 'Kafka', 'ClickHouse', 'Docker'],
            links : {
              github : '',
              demo : '',
              links : ''
            }
        },
    ]

const openNewPage = (link) => {
  window.open(link, '_blank')
}

</script>