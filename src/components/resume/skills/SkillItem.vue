<script setup>
    /**
     * Takes in a skill, which is defined as a skill name
     * and associated image.
     */
    const props = defineProps(['skill'])
</script>

<template>
    <div class="text-center w-20 m-2 mt-0 mb-1 font-merriweather">
        <div class="w-full mb-1">
            <img :src="skill.image" />
        </div>
        <div>{{ skill.name }}</div>
    </div>
</template>
