<script setup>
    import { languages } from '../../../data/skills'
    import { codeTools } from '../../../data/skills'
    import SkillsGroup from './SkillsGroup.vue'
    import { designSkills } from '../../../data/skills'
</script>

<template>
    <div class="w-full mt-3 text-center font-merriweather font-medium bg-navy-blue border-b-off-white border-b-2 text-off-white p-3 text-2xl">Skills</div>
    <div class="grid lg:grid-cols-3">
        <SkillsGroup class="border-8 border-off-white pb-3 lg:border-r-8 border-l-0 border-r-0" :skills="languages" header="Languages" bg="bg-navy-blue" text="text-off-white"></SkillsGroup>
        <SkillsGroup :skills="codeTools" class="border-8 border-off-white pb-3 lg:border-l-8 lg:border-r-8 border-l-0 border-r-0" header="Tools" bg="bg-navy-blue" text="text-off-white"></SkillsGroup>
        <SkillsGroup class="pb-3 border-8 border-off-white border-r-0 lg:border-l-8 border-l-0" :skills="designSkills" header="Design" bg="bg-navy-blue" text="text-off-white"></SkillsGroup>
    </div>
</template>
