import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const portfolioStore = defineStore("Portfolio", () => {
    const profileLinkIcons = {
        'medium' : '/public/medium.png',
        'linkedin' : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg",
        'github' : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
        }
    
    // const profileLinks = {
    //     'medium' : 'https://medium.com/@gayashangamage',
    //     'linkedin' : 'https://www.linkedin.com/in/gayashangamage/',
    //     'github' : 'https://github.com/GayashanGamage'
    //     }

    const profileLink = ref([
        {
          'name' : 'GitHub',
          'link' : 'https://github.com/GayashanGamage'
        },
        {
          'name' : 'LeetCode',
          'link' : 'https://leetcode.com/u/GayashanGamage/'
        },
        {
          'name' : 'Codepen',
          'link' : 'https://codepen.io/GayashanGamage'
        },
        {
          'name' : 'Medium',
          'link' : 'https://medium.com/@gayashangamage'
        },
        {
          'name' : 'CV',
          'link' : 'https://drive.google.com/uc?export=download&id=11mZ6NgNagNYjkrgP1jzFnGr9eXvbHviv'
        },
        {
          'name' : 'LinkeIn',
          'link' : 'https://www.linkedin.com/in/gayashangamage/'
        },
      ])


    const techStackTypes = [
        'language',
        'frontend',
        'backend',
        'database',
        'devops',
        'tools'
        ]

    const techStack = [
        {
            'id' : 0,
            'type' : techStackTypes[0],
            'name' : 'JavaScript',
            'icon' : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
        },
        {
            'id' : 1,
            'type' : techStackTypes[0],
            'name' : 'Python',
            'icon' : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
        },
        {
            'id' : 2,
            'type' : techStackTypes[1],
            'name' : 'HTML',
            'icon' : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
        },
        {
            'id' : 3,
            'type' : techStackTypes[1],
            'name' : 'CSS',
            'icon' : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
        },
        {
            'id' : 4,
            'type' : techStackTypes[1],
            'name' : 'Vue.js',
            'icon' : 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg'
        },
        {
            'id' : 5,
            'type' : techStackTypes[1],
            'name' : 'Tailwind',
            'icon' : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" 
        },
        {
            'id' : 6,
            'type' : techStackTypes[2],
            'name' : 'FastAPI',
            'icon' : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg"
        },
        {
            'id' : 7,
            'type' : techStackTypes[2],
            'name' : 'Flask',
            'icon' : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg"
        },
        {
            'id' : 8,
            'type' : techStackTypes[3],
            'name' : 'MongoDB',
            'icon' : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
        },
        {
            'id' : 9,
            'type' : techStackTypes[3],
            'name' : 'Supabase',
            'icon' : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg"
        },
        {
            'id' : 10,
            'type' : techStackTypes[4],
            'name' : 'Docker',
            'icon' : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg"
        },
        {
            'id' : 11,
            'type' : techStackTypes[4],
            'name' : 'AWS',
            'icon' : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
        },
        {
            'id' : 12,
            'type' : techStackTypes[5],
            'name' : 'Postman',
            'icon' : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
        },
        {
            'id' : 13,
            'type' : techStackTypes[5],
            'name' : 'GIT',
            'icon' : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
        },
        ]

    const projectData = [
        {
            'name' : 'Curry Hut',
            'description' : 'Delivery companies like Uber and Pickme charge 20% food price + Delivery charges. but curry hut is a platform that connects customers directly with the restaurant. So the restaurent owner can save 20% of the food price and custorms can enjoy Free Delivery charges. win win situation for both parties.',
            'techStack' : [techStack[0], techStack[1], techStack[4], techStack[5], techStack[6], techStack[8], techStack[10]],
            'main_image' : '/curryhut.webp',
            'links' : [
                {
                    'icon' : 'language',
                    'text' : 'Live project',
                    'url' : 'https://curryhut.gamage.me/'
                },
                {
                    'icon' : 'code',
                    'text' : 'GitHub',
                    'url' : 'https://github.com/GayashanGamage/curryhut'
                },
                {
                    'icon' : 'play_circle',
                    'text' : 'Youtuve Demo',
                    'url' : 'https://www.youtube.com/watch?v=AaCnBOqyvIM'
                },
            ]
        },
        {
            'name' : 'Sigiri Price',
            'description' : 'Price fluctuation in e-commerce platforms is a common issue. Sigiri Price is a web application that helps to track the price changes of products in sinhagiri.lk e-commerce platforms.',
            'techStack' : [techStack[4], techStack[5], techStack[6], techStack[8]],
            'main_image' : '/sigiri price.png',
            'links' : [
                {
                    'icon' : 'language',
                    'text' : 'Live project',
                    'url' : 'https://sigiriprice.gamage.me/'
                },
                {
                    'icon' : 'code',
                    'text' : 'GitHub',
                    'url' : 'https://github.com/GayashanGamage/sinha.price-backend'
                },
                {
                    'icon' : 'play_circle',
                    'text' : 'Youtuve Demo',
                    'url' : 'https://www.youtube.com/watch?v=AaCnBOqyvIM'
                },
            ]
        },
        {
            'name' : 'FingureTune',
            'description' : 'Stay on your confort zoon and try master keyborde with realtime analitics ',
            'techStack' : [techStack[4], techStack[5], techStack[6]],
            'main_image' : '/finguretune.png',
            'links' : [
                {
                    'icon' : 'language',
                    'text' : 'Live project',
                    'url' : 'https://sigiriprice.gamage.me/'
                },
                {
                    'icon' : 'code',
                    'text' : 'GitHub',
                    'url' : 'https://github.com/GayashanGamage/sinha.price-backend'
                },
                {
                    'icon' : 'play_circle',
                    'text' : 'Youtuve Demo',
                    'url' : 'https://www.youtube.com/watch?v=AaCnBOqyvIM'
                },
            ]
        },
    ]

    return{
        profileLinkIcons,
        // profileLinks,
        profileLink,
        techStackTypes,
        techStack,
        projectData,
    }
});