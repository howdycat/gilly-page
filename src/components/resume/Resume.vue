<script setup>
    import WorkExperience from './work-experience/WorkExperience.vue'
    import SkillsSection from './skills/SkillsSection.vue'
    import Education from './Education.vue'
    import ResumeHeader from './ResumeHeader.vue'
</script>

<template>
    <div class="bg-cherry-red h-full">
        <div class="xl:w-3/4 mx-auto lg:drop-shadow-lg p-3 bg-off-white">
            <ResumeHeader></ResumeHeader>
            <Education></Education>
            <WorkExperience></WorkExperience>
            <SkillsSection></SkillsSection>
        </div>
    </div>
</template>
