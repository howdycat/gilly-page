<script setup>
    import { workExperience } from '../../../data/workexperience.js'
    import WorkEntry from './WorkEntry.vue'
</script>

<template>
    <div>
        <div class="w-full text-center font-merriweather font-medium bg-navy-blue text-off-white p-3 text-2xl">Work Experience</div>
        <div class="pb-3">
            <div v-for="item in workExperience">
                <WorkEntry :workItem="item"></WorkEntry>
            </div>
        </div>
    </div>
</template>
