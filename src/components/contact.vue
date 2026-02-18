<template>
    <div class="w-full h-screen" id="contact">
        <div class="flex flex-col justify-center w-[80%] p-10 mx-auto h-full border">
            <div class="flex flex-col gap-30 ">
                <h3 class="text-center font-[Manrope] font-black text-4xl">Contact me</h3>
                <div class="grid grid-cols-2 gap-6">
                    <!-- contact information -->
                    <div class="grid grid-cols-2 gap-10 h-fit">
                        <div class="flex flex-col justify-center items-center border rounded-lg py-10 max-h-40" v-for="item in contactInfo">
                            <i :class="item.icon" class="text-xl text-red-500"></i>
                            <h4 class="font-[Manrope] text-sm">{{ item.title }}</h4>
                            <p class="font-[Manrope] text-xl">{{ item.details }}</p>
                        </div>
                    </div>
        
                    <!-- contact form -->
                    <div class="flex flex-col gap-4 border p-8 rounded-lg">
                        <h3 class="">Let's connect</h3>
                        <div class="flex flex-col gap-2">
                            <label for="name_input" class="font-[Manrope] text-sm">Your Name</label>
                            <input type="text" class="border-2 border-gray-200 rounded-sm py-1" id="name_input">
                        </div>
                        <div class="flex flex-col gap-2">
                            <label for="email_input" class="font-[Manrope] text-sm">Your Email</label>
                            <input type="text" class="border-2 border-gray-200 rounded-sm py-1" id="email_input">
                        </div>
                        <div class="flex flex-col gap-2">
                            <label for="perpose" class="font-[Manrope] text-sm">General Inquirxies</label>
                            <select name="" id="perpose" class="border-2 border-gray-200 rounded-sm py-1 px-4">
                                <option value="" class="">Job optunity</option>
                                <option value="" class="">Freelancing gig</option>
                                <option value="" class="">Other</option>
                            </select>
                        </div>
                        <div class="flex flex-col gap-2">
                            <label for="messege" class="font-[Manrope] text-sm">Your Message</label>
                            <textarea type="text-area" class="border-2 border-gray-200 rounded-sm py-1 h-30" id="messege"></textarea>
                        </div>
                        <button class="border py-1 w-fit px-6 ml-auto rounded-sm">Send messege</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const contactInfo = [
    {
        title: 'Email',
        details: 'john@example.com',
        icon: 'fas fa-envelope'
    },
    {
        title: 'Phone',
        details: '+1 (123) 456-7890',
        icon: 'fas fa-phone'
    },
    {
        title: 'Location',
        details: 'San Francisco, CA',
        icon: 'fas fa-map-marker-alt'
    },
    {
        title: 'LinkedIn',
        details: '/in/johnsmith',
        icon: 'fab fa-linkedin'
    }
]
</script>