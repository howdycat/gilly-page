<script setup>
  import Typed from "typed.js";
  import Sidebar from "./components/Sidebar.vue";
  import anime from "animejs/lib/anime.es.js";
  import { onMounted } from "vue";
  import { ref } from "vue";
  import { onMounted } from "vue";

  const finished = ref(false);

  // Setup typography animated when mounted
  onMounted(() => {
    const typewriter = new Typed("#type-container", {
      strings: ["Hi, ^500 I'm Gilly"],
      typeSpeed: 50,
      showCursor: false,

      // When animation is complete, move typography above the nav section
      onComplete: (self) => {
        const el = document.querySelector("#side").getBoundingClientRect();
        return anime({
          targets: "#text",
          autoplay: true,
          translateY: -250,
          complete: () => {
            finished.value = true;
          },
        });
      },
    });
  });
</script>

<template>
  <div
    class="flex flex-col items-center justify-center p-5 bg-cherry-red h-screen w-screen"
  >
    <!-- Typography Header -->
    <div id="text" class="text-center lg:mb-0 md:mb-0 mb-6">
      <span
        id="type-container"
        ref="type"
        class="font-merriweather text-8xl text-bubblegum-pink p-2"
      >
      </span>
    </div>

    <!-- Navigation section -->
    <div
      id="side"
      class="w-4/5 lg:w-1/2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-0"
    >
      <Sidebar v-if="finished"></Sidebar>
    </div>
  </div>
</template>
