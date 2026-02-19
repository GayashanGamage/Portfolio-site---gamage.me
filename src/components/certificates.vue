<template>
  <section id="certifications" class="w-full font-['JetBrains_Mono'] mt-40">
    <div class="mx-auto max-w-7xl min-w-2xl w-full min-h-screen flex items-center py-20">
      <div class="w-full flex flex-col gap-28">
        <h2 class="text-center font-black text-4xl">
          Certifications
        </h2>

        <!-- Horizontal scroll row -->
        <div
          class="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth
                 [&::-webkit-scrollbar]:h-2
                 [&::-webkit-scrollbar-track]:bg-gray-100
                 [&::-webkit-scrollbar-thumb]:bg-gray-300
                 [&::-webkit-scrollbar-thumb]:rounded-full"
        >
          <div
            v-for="cert in certifications"
            :key="cert.title"
            class="min-w-[350px] max-w-[400px] flex-shrink-0 snap-start min-h-[350px]
                   flex flex-col gap-5 border border-gray-300 px-6 py-6 rounded-xl bg-white shadow-lg"
          >
            <div class="h-[250px] w-full p-1 rounded-md bg-[#B87350]/30 relative">
              <img :src="cert.image" alt="certification image" class="relative w-full h-full object-cover object-center rounded-md">
              <p class="text-sm bg-[#B87350]/30 py-1 px-4 rounded-sm whitespace-nowrap absolute top-4 right-4">
                {{ cert.level }} level
              </p>
            </div>
            <div class="flex items-start gap-4">
              <i :class="cert.icon" class="text-3xl mt-1 text-[#B87350]"></i>
              <h3 class="font-semibold text-2xl leading-snug">
                {{ cert.title }}
              </h3>
            </div>

            <div class="flex items-center justify-between gap-4">

              <p class="text-sm text-right">
                By
                <a
                  :href="cert.creator.website"
                  target="_blank"
                  rel="noreferrer"
                  class="underline underline-offset-2"
                >
                  {{ cert.creator.name }}
                </a>
              </p>
            </div>

            <p class="text-base text-gray-700">
              {{ cert.description }}
            </p>
            <button class="mt-auto w-fit ml-auto border py-2 px-4 rounded-md font-[Manrope] text-sm hover:text-[#B87350] text-white bg-[#B87350] hover:bg-white transition">  
                <a
                :href="cert.link"
                target="_blank"
                rel="noreferrer"
                class=""
                >
                View Certificate
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const certifications = [
  // {
  //   title: "AWS Certified Solutions Architect",
  //   icon: "fa-brands fa-aws",
  //   level: "Beginner",
  //   creator: { name: "Amazon web services", website: "https://aws.amazon.com" },
  //   description:
  //     "Validates expertise in designing distributed systems on AWS with focus on security, reliability, and performance.",
  //   link: "#",
  // },
  {
    title: "MongoDB Certified Developer",
    image : 'https://ik.imagekit.io/myHotelSolutions/Gamage.dev/Certificates/mongodb%20certificate.png',
    icon: "fa-solid fa-database",
    level: "Intemediate",
    creator: { name: "MongoDB University", website: "https://learn.mongodb.com" },
    description:
      "Demonstrates proficiency in MongoDB data modeling, aggregation, replication, and sharding.",
    link: "https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/b81fdf03-e5ca-48fd-a623-a1345cb8a167-gayashan-gamage-aa6cd95b-8987-4502-8c84-4e3aa46822f7-certificate.pdf",
  },
  {
    title: "Python Django-Practicle guide",
    image : 'https://ik.imagekit.io/myHotelSolutions/Gamage.dev/Certificates/django-udemy.jpg',
    icon: "fa-brands fa-python",
    level: "Advanced",
    creator: { name: "udemy - Maximilian Schwarzmüller", website: "https://www.udemy.com/user/academind/" },
    description:
      "Certifies advanced Python programming skills including OOP, data structures, and algorithm implementation.",
    link: "https://www.udemy.com/certificate/UC-c86c14fd-4f47-4e31-8dd5-fd6115fa0983/",
  },
  {
    title: "Build REST APIs with Django REST",
    image : 'https://ik.imagekit.io/myHotelSolutions/Gamage.dev/Certificates/restapi%20udemy.jpg',
    icon: "fa-brands fa-python",
    level: "Advanced",
    creator: { name: "udemy - Maximilian Schwarzmüller", website: "https://www.udemy.com/user/academind/" },
    description:
      "Certifies advanced Python programming skills including OOP, data structures, and algorithm implementation.",
    link: "https://www.udemy.com/certificate/UC-32379a6b-b3d3-42e2-9409-16734dc78fc6/",
  },
  {
    title: "Compleate JavaScript course",
    image : 'https://ik.imagekit.io/myHotelSolutions/Gamage.dev/Certificates/javascript%20udemy.jpg',
    icon: "fa-brands fa-js",
    level: "Advanced",
    creator: { name: "udemy - Jonas Schmedtmann", website: "https://www.udemy.com/user/jonasschmedtmann/" },
    description:
      "Validates skills in JavaScript fundamentals and advanced concepts for real-world development.",
    link: "https://www.udemy.com/certificate/UC-b8e5eaf1-bf34-42f9-ac23-c8d1fc54327f/",
  },
  {
    title: "Vue.js Framework for building Frontend Applications!",
    image : 'https://ik.imagekit.io/myHotelSolutions/Gamage.dev/Certificates/vuejs%20udemu.jpg',
    icon: "fa-brands fa-vuejs",
    level: "Advanced",
    creator: { name: "udemy - Maximilian Schwarzmüller", website: "https://www.udemy.com/user/academind/" },
    description:
      "Covers Vue fundamentals, components, routing, state management, and building real apps.",
    link: "https://www.udemy.com/certificate/UC-f7c23281-388a-4c5b-bf96-0f72590e087b/",
  },
];
</script>
