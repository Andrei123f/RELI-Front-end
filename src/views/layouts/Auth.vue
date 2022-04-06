<template>
  <router-view></router-view>
  <Particles
    id="tsparticles_links"
    :particlesInit="particlesInit"
    :particlesLoaded="particlesLoaded"
    :options="{
      background: {
        color: {
          value: '#00a9fc',
        },
      },
      fpsLimit: 70,
      interactivity: {
        detect_on: 'canvas',
        events: {
          onClick: {
            enable: true,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'attract',
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          attract: { distance: 200, duration: 0.2, factor: 5 },
        },
      },
      particles: {
        color: {
          value: '#ffffff',
        },
        line_linked: {
          color: '#ffffff',
          distance: 150,
          enable: true,
          opacity: 0.4,
          width: 1,
        },
        links: {
          color: '#ffffff',
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 3,
        },
        collisions: {
          enable: true,
        },
        move: {
          attract: { enable: false, rotateX: 600, rotateY: 1200 },
          bounce: false,
          direction: 'none',
          enable: true,
          out_mode: 'out',
          random: false,
          speed: 2,
          straight: false,
        },
        number: { density: { enable: true, value_area: 400 }, value: 40 },
        opacity: {
          anim: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
          random: false,
          value: 0.5,
        },
        shape: {
          character: {
            fill: false,
            font: 'Verdana',
            style: '',
            value: '*',
            weight: '400',
          },
          polygon: { nb_sides: 5 },
          stroke: { color: '#000000', width: 0 },
          type: 'circle',
        },
        size: {
          anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
          random: true,
          value: 5,
        },
        polygon: {
          draw: { enable: false, lineColor: '#ffffff', lineWidth: 0.5 },
          move: { radius: 10 },
          scale: 1,
          type: 'none',
          url: '',
        },
      },
      detectRetina: true,
    }"
  />
</template>

<script>
export default {
  data: () => {
    return {};
  },
  mounted() {},
};
</script>
<style scoped>
/* ---- reset ---- */
canvas {
  display: block;
  vertical-align: bottom;
}
/* ---- tsparticles container ---- */
#tsparticles_links {
  z-index: -100;
  position: absolute;
  background-color: #00a9fc;
  background-image: url("");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
