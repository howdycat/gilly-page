<script setup>
    const props = defineProps(['workItem'])
</script>

<template>
    <div class="bg-off-white p-2 pb-0 font-merriweather">
        <!-- Company | dates worked -->
        <div class="sm:flex sm:justify-between md:text-xl text-md text-navy-blue">
            <div>{{ workItem.company }}</div>
            <div>{{ workItem.dates }}</div>
        </div>
        <!-- Position | location -->
        <div class="flex justify-between md:text-lg text-sm text-navy-blue">
            <span> {{ workItem.position }}</span>
            <span> {{ workItem.location }}</span>
        </div>
        <!-- Responsibilities as a list -->
        <ul class="list-disc ms-4 md:text-md text-sm">
            <li v-for="item in workItem.description">{{ item }}</li>
        </ul>
    </div>
</template>
