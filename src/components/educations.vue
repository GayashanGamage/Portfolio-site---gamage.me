<template>
  <section id="education" class="font-['JetBrains_Mono'] min-h-screen flex flex-col justify-center  max-w-6xl min-w-2 w-full mx-auto mt-40">
    
    <!-- Title -->
    <h2 class="text-center font-black text-4xl mb-25">
        Education
    </h2>

    <!-- Timeline Wrapper -->
    <div class="flex flex-col relative w-full mx-auto">

      <!-- Center Line -->
      <div class="absolute left-1/2 top-0 bottom-0 w-1 bg-red-100 transform -translate-x-1/2"></div>

      <!-- Timeline Items -->
      <div
        v-for="(edu, index) in education"
        :key="edu.id"
        class="relative -mb-10 flex items-center w-full"
        :class="index % 2 === 0 ? 'justify-start' : 'justify-end'"
      >
        
        <!-- Card -->
        <div class="w-full md:w-6/14 bg-white p-6 rounded-xl shadow-lg relative">
          
          <!-- Dot -->
          <div
            class="absolute top-6 w-6 h-6 rounded-full bg-[#B87350] border-4 border-white"
            :class="index % 2 === 0 
              ? 'right-[-58px]' 
              : 'left-[-58px]'"
          ></div>

          <div class="text-red-500 font-medium mb-2">
            {{ edu.date }}
          </div>

          <h3 class="text-xl font-semibold mb-2">
            {{ edu.title }}
          </h3>

          <div class="text-gray-600 mb-3">
            {{ edu.school }}
          </div>

          <p class="text-gray-600 text-sm">
            {{ edu.description }}
          </p>
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