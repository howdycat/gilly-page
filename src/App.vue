<script setup>
 
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="slide">
    <component :is="Component" />
  </transition>
  </router-view>
  
</template>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.75s ease-out;
}

.slide-enter-to {
  position: absolute;
  top: 0;
}

.slide-enter-from {
  position: absolute;
  top: -100%;
}

.slide-leave-to {
  position: absolute;
  bottom: -100%;
}

.slide-leave-from {
  position: absolute;
  bottom: 0;
}
</style>
