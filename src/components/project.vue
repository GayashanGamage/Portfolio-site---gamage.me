<template>
  <section id="projects" class="w-full">
    <div class="max-w-7xl w-full mx-auto min-h-screen flex items-center">
      <div class="w-full flex flex-col gap-16 py-16">
        <h2 class="font-[Manrope] text-[#5A1E32] font-black text-4xl md:text-5xl flex flex-col lg:leading-18 text-center lg:text-center">
          Featured Projects
        </h2>

        <div class="flex flex-col gap-6 px-4 lg:px-0">
          <div
            v-for="project in projects"
            :key="project.title"
            class=" border-gray-200 rounded-xl md:max-w-xl lg:max-w-4xl 2xl:max-w-6xl p-2 lg:p-6 flex flex-col  lg:flex-row gap-6 shadow-lg bg-white mx-auto"
          >
            <!-- Image (first) -->
            <div class="w-full lg:w-1/2 overflow-hidden rounded-md flex-shrink-0">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover object-center"
              />
            </div>

            <!-- Text Content -->
            <div class="flex flex-col gap-5 w-full p-4">
              <!-- Title row -->
              <div class="flex items-center gap-4">
                <!-- <i :class="project.icon" class="text-xl"></i> -->
                <h3 class="font-['JetBrains_Mono'] font-black text-xl">
                  {{ project.title }}
                </h3>
              </div>

              <p class="font-['JetBrains_Mono'] text-sm sm:text-base font-light text-gray-700">
                {{ project.description }}
              </p>

              <div class="flex flex-col gap-2 sm:gap-0 sm:flex-row justify-between mt-auto">
                <!-- Tech stack -->
                <div class="flex flex-wrap gap-2 w-full sm:w-7/10">
                  <span
                    v-for="t in project.tech"
                    :key="t"
                    class="font-['JetBrains_Mono'] text-sm font-light bg-[#FAF7F2] border-gray-300 py-1 px-3 rounded-full h-fit"
                  >
                    {{ t }}
                  </span>
                </div>
  
                <!-- Links -->
                <div class="flex flex-wrap justify-end gap-3 mt-auto w-full sm:w-3/10">
                  <button
                    v-for="[key, value] in Object.entries(project.links)"
                    :key="key"
                    class="flex flex-row justify-center items-center gap-2 whitespace-nowrap font-semibold text-xs md:text-sm py-2 px-3 sm:px-4 rounded-full bg-[#B87350] text-white hover:bg-[#5A1E32] transition-colors duration-300"
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