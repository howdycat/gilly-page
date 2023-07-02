<script setup>
  /**
   * Takes in a skill, which is defined as a skill name
   * and associated image.
   */
  const props = defineProps(["skill"]);
</script>

<template>
  <div class="text-center w-28 p-3 font-merriweather">
    <div class="w-full mb-1">
      <img :src="skill.image" />
    </div>
    <span>{{ skill.name }}</span>
  </div>
</template>
