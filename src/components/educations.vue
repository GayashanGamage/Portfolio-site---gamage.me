<template>
  <section id="education" class="flex flex-col gap-16 font-['JetBrains_Mono'] min-h-screen h-auto py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
    
    <!-- Title -->
    <h2 class="font-[Manrope] text-[#5A1E32] font-black text-4xl md:text-5xl flex flex-col lg:leading-18 text-center lg:text-center">
      Education
    </h2>

    <!-- Timeline Wrapper -->
    <div class="max-w-6xl w-full mx-auto md:max-w-xl lg:max-w-4xl 2xl:max-w-6xl relative">

      <!-- Timeline Line - Left for mobile, Center for lg+ -->
      <div class="absolute left-[1.125rem] lg:left-1/2 top-0 bottom-0 w-0.5 lg:w-1 bg-gradient-to-b from-red-200 via-red-300 to-red-200 lg:transform lg:-translate-x-1/2 h-[85%]"></div>

      <!-- Timeline Items -->
      <div class="space-y-8 lg:space-y-0">
        <div
          v-for="(edu, index) in education"
          :key="edu.id"
          class="relative lg:mb-12"
          :class="index % 2 === 0 ? 'lg:flex lg:justify-start' : 'lg:flex lg:justify-end'"
        >
          
          <!-- Card Container -->
          <div 
            class="pl-12 lg:pl-0 lg:w-[calc(50%-2rem)]"
            :class="index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12', index !== 0 ? 'lg:-mt-40' : 'lg:mt-0'"
          >
            
            <!-- Card -->
            <div class="bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative group">
              
              <div 
                class="absolute w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 rounded-full bg-[#B87350] border-4 border-white shadow-md top-6 -left-[2.6rem] lg:top-8"
                :class="index % 2 === 0 
                  ? 'lg:-right-[3.65rem] lg:left-auto xl:-right-[3.85rem]' 
                  : 'lg:-left-[3.65rem] xl:-left-[3.85rem]'"
              ></div>

              <div 
                class="hidden lg:block absolute top-10 w-8 h-0.5 bg-red-200"
                :class="index % 2 === 0 ? '-right-8' : '-left-8'"
              ></div>

              <div class="inline-block bg-red-50 text-red-600 font-semibold px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-sm mb-3 sm:mb-4">
                {{ edu.date }}
              </div>

              <!-- Title -->
              <h3 class="text-lg sm:text-xl md:text-xl lg:text-xl xl:text-xl font-bold text-gray-900 mb-2 sm:mb-3 leading-snug group-hover:text-[#B87350] transition-colors">
                {{ edu.title }}
              </h3>

              <!-- Institute -->
              <div class="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4 flex items-start gap-2 font-black">
                <svg class="w-4 h-4 sm:w-5 sm:h-5 mt-1 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
                <span>{{ edu.school }}</span>
              </div>

              <!-- Description -->
              <p class="text-sm md:text-base lg:text-base text-gray-600 leading-relaxed">
                {{ edu.description }}
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const education = [
  {
    id: 1,
    date: "2022 - current",
    title: "Bachelor of Software Engineering (Hons)",
    school: "Open University of Sri Lanka",
    description:
      "Currently specializing in distributed systems and scalable architecture."
  },
  {
    id: 2,
    date: "2019 - 2020",
    title: "BCS Higher Education Qualifications (HEQ)",
    school: "BCS The Chartered Institute for IT - UK",
    description:
      "Formally transitioned into IT, focusing on software architecture and system design."
  },
  {
    id: 3,
    date: "2018 - 2021",
    title: "Bachelor of Science in Banking & Insurance - Special",
    school: "Sabaragamuwa University of Sri Lanka",
    description:
      "Built strong knowledge in financial systems as my passion for software began growing."
  },
  {
    id: 4,
    date: "2017 - 2018",
    title: "Executive level",
    school: "Institute of Chartered Accountants of Sri Lanka",
    description:
      "Strengthened my analytical and financial foundation while discovering my interest in tech."
  },
  {
    id: 5,
    date: "2013 - 2016",
    title: "Advanced level - commerce stream",
    school: "Nagoda Royal College - Galle",
    description:
      "Chose Commerce over IT and achieved AAA results, ranking 200th in the Galle district."
  }
  
];
</script>