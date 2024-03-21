<script setup>
    import anime from 'animejs/lib/anime.es.js'
    import { onMounted } from 'vue'

    // Define a prop for whether or not to play button fly in animations
    // TODO allow the disabling of animations
    const props = defineProps({
        animate: {
            default: true
        }
    })

    // Functions for animating buttons on hover
    function animateButton(el, scale, duration) {
        anime.remove(el)
        anime({
            targets: el,
            scaleX: scale,
            duration: duration
        })
    }

    function enterButton(el) {
        animateButton(el, 1.05, 800)
    }

    function leaveButton(el) {
        animateButton(el, 1, 600)
    }

    function addAnimations(buttonEl) {
        for (var i = 0; i < buttonEl.length; i++) {
            buttonEl[i].addEventListener(
                'mouseenter',
                function (e) {
                    enterButton(e.target)
                },
                false
            )

            buttonEl[i].addEventListener(
                'mouseleave',
                function (e) {
                    leaveButton(e.target)
                },
                false
            )
        }
    }

    // If we specified animation, play the fly-in animations
    onMounted(() => {
        if (props.animate === true) {
            var buttonEl = document.querySelectorAll('.nav-button')

            // On page load, stagger and load each nav item
            anime({
                targets: '#item1, #item2, #item3, #item4',
                translateX: {
                    value: [-300, 0],
                    easing: 'easeOutElastic(1, 1.5)'
                },
                delay: anime.stagger(500),
                duration: 1000,
                opacity: {
                    value: [0, 1.0],
                    easing: 'linear'
                },
                autoplay: true,

                // Once complete, give buttons hover animation.
                complete: () => {
                    addAnimations(buttonEl)
                }
            })
        }
    })
</script>

<template>
    <div class="flex-col font-merriweather text-4xl w-full">
        <!-- Add navigation links below here as router-link elements -->
        <router-link to="/resume">
            <div id="item3" class="nav-button bg-bubblegum-pink p-5 text-cherry-red min-w-full">Resume</div>
        </router-link>
    </div>
</template>
