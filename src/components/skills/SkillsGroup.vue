<script setup>
import SkillItem from './SkillItem.vue';
/** Array of all skills, skill header text*/
  const props = defineProps(["skills", "header", "text", "bg"]);
</script>

<template>

<div :class="bg">
  <div class="w-full text-center font-merriweather p-3 text-3xl" :class="text">
    {{ header }}
  </div>

  <div class="flex flex-wrap justify-center" :class="text">

    <SkillItem v-for="skill in skills" :skill="skill"></SkillItem>

  </div>


</div>

    
</template>
