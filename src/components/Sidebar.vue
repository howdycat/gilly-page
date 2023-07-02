<script setup>
  import anime from "animejs/lib/anime.es.js";
  import { onMounted } from "vue";

  function animateButton(el, scale, duration) {
    anime.remove(el);
    anime({
      targets: el,
      scaleX: scale,
      duration: duration,
    });
  }

  function enterButton(el) {
    animateButton(el, 1.05, 800);
  }

  function leaveButton(el) {
    animateButton(el, 1, 600);
  }

  function addAnimations(buttonEl) {
    for (var i = 0; i < buttonEl.length; i++) {
      buttonEl[i].addEventListener(
        "mouseenter",
        function (e) {
          enterButton(e.target);
        },
        false
      );

      buttonEl[i].addEventListener(
        "mouseleave",
        function (e) {
          leaveButton(e.target);
        },
        false
      );
    }
  }

  onMounted(() => {
    var buttonEl = document.querySelectorAll(".nav-button");

    // On page load, stagger and load each nav item
    anime({
      targets: "#item1, #item2, #item3, #item4",
      translateX: {
        value: [-300, 0],
        easing: "easeOutElastic(1, 1.5)",
      },
      delay: anime.stagger(500),
      duration: 1000,
      opacity: {
        value: [0, 1.0],
        easing: "linear",
      },
      autoplay: true,

      // Once complete, give buttons hover animation.
      complete: () => {
        addAnimations(buttonEl);
      },
    });
  });
</script>

<template>
  <div class="flex-col font-merriweather text-3xl mt-6 w-full">
    <div id="item1" class="nav-button bg-loud-yellow p-5 min-w-full">About</div>
    <div id="item2" class="nav-button bg-mint p-5 min-w-screen">Projects</div>
    <div id="item3" class="nav-button bg-lapis-blue p-5 text-white min-w-full">
      Resume
    </div>
    <div id="item4" class="nav-button bg-dark-purple p-5 text-white min-w-full">
      Art
    </div>
  </div>
</template>
