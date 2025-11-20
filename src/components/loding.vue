<template>
    <div class="">
        <div 
        v-if="loading" 
        class="fixed inset-0 bg-gray-50 flex items-center justify-center z-50 transition-opacity duration-500"
        >
            <div class="text-center">
                <div class="text-red-500 mb-8 text-lg font-mono">building portfolio... loading modules...</div>
                <div class="flex justify-center gap-2">
                <div class="w-3 h-3 bg-red-500 rounded-full animate-bounce"></div>
                <div class="w-3 h-3 bg-amber-700 rounded-full animate-bounce" style="animation-delay: -0.16s"></div>
                <div class="w-3 h-3 bg-red-500 rounded-full animate-bounce" style="animation-delay: -0.32s"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const loading = ref(true)

</script>