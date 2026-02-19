<template>
  <section id="projects" class="w-full">
    <div class="max-w-7xl min-w-2xl w-full mx-auto min-h-screen flex items-center">
      <div class="w-full flex flex-col gap-16 py-16">
        <h2 class="text-center font-['JetBrains_Mono'] font-black text-4xl">
          Featured Projects
        </h2>

        <!-- ONE COLUMN + EACH CARD HORIZONTAL -->
        <div class="flex flex-col gap-6">
          <div
            v-for="project in projects"
            :key="project.title"
            class="border border-gray-200 rounded-xl p-6 flex flex-col md:flex-row gap-6 shadow-lg bg-white"
          >
            <!-- Image (first) -->
            <div class="w-full md:w-[450px] h-[240px] md:h-[260px] overflow-hidden rounded-xl flex-shrink-0">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover object-center"
              />
            </div>

            <!-- Text Content -->
            <div class="flex flex-col gap-5 w-full">
              <!-- Title row -->
              <div class="flex items-center gap-4">
                <!-- <i :class="project.icon" class="text-xl"></i> -->
                <h3 class="font-['JetBrains_Mono'] font-bold text-2xl">
                  {{ project.title }}
                </h3>
              </div>

              <p class="font-['JetBrains_Mono'] text-md font-light text-gray-700">
                {{ project.description }}
              </p>

              <div class="flex flex-row justify-between mt-auto">
                <!-- Tech stack -->
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="t in project.tech"
                    :key="t"
                    class="font-['JetBrains_Mono'] text-sm font-light bg-[#FAF7F2] border-gray-300 py-1 px-3 rounded-lg h-fit"
                  >
                    {{ t }}
                  </span>
                </div>
  
                <!-- Links -->
                <div class="flex flex-wrap gap-3 mt-auto">
                  <button
                    v-for="[key, value] in Object.entries(project.links)"
                    :key="key"
                    class="mt-auto font-black w-fit ml-auto border py-2 px-4 rounded-md font-[Manrope] text-sm hover:text-[#B87350] text-white bg-[#B87350] hover:bg-white transition"
                    :disabled="!value"
                    @click="openNewPage(value)"
                  >
                    {{ key }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    title: "Browser Automation bot",
    image:
      "https://ik.imagekit.io/myHotelSolutions/Gamage.dev/Project%20images/amazon%20web.png",
    icon: "fas fa-comments",
    description:
      "A scalable web automation service built with FastAPI and Playwright that performs complex browser tasks through a clean REST API. Designed with modular workflow orchestration, retry mechanisms, and structured logging for production reliability. Supports cross-browser automation and async execution for high-performance task handling.",
    tech: ["Python", "Playwright"],
    links: {
      GITHUB: "https://github.com/GayashanGamage/Amazon.com-web-automation-BOT",
    },
  },
  {
    title: "Hotel Booking Platform with chatbot",
    image:
      "https://ik.imagekit.io/myHotelSolutions/Gamage.dev/Project%20images/tea%20garden%20web.png",
    icon: "fas fa-shopping-cart",
    description:
      "A full-stack food ordering system built with FastAPI and MongoDB, featuring dynamic menu management and secure guest checkout. Includes an admin dashboard for streamlined inventory and order management. Designed with clean API architecture for seamless frontend integration.",
    tech: ["Python", "FastAPI", "Nuxt", "Stripe API", "MongoDB", "Docker", "Supabase"],
    links: {
      LIVE: "https://teagardenecovillas.com",
    },
  },
  {
    title: "Price slop - price monitoring and alerting system",
    image:
      "https://www.simplilearn.com/ice9/free_resources_article_thumb/Top_9_Data_Mining_Tools.jpg",
    icon: "fas fa-chart-line",
    description:
      "An automated price tracking platform that monitors multiple e-commerce websites and sends real-time email notifications. Built with Python-based scraping pipelines and REST APIs for user-driven product tracking. Reduced manual monitoring effort by 90% through workflow automation.",
    tech: ["Python", "FastAPI", "BeautifulSoup", "Qstash", "MongoDB", "VueJS"],
    links: {
      GITHUB: "https://github.com/GayashanGamage/Price-slope",
      LIVE: "https://sigiriprice.gamage.dev",
    },
  },
];


const openNewPage = (link) => {
  if (!link) return
  window.open(link, "_blank", "noopener,noreferrer")
}
</script>