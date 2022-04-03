<template>
  <div id="tsparticles"></div>
  <router-view></router-view>
</template>

<script>
export default {
  data: () => {
    return {};
  },
  mounted() {
    tsParticles.load("tsparticles", {
      fps_limit: 60,
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "attract",
            parallax: { enable: true, force: 60, smooth: 10 },
          },
          resize: true,
        },
        modes: {
          push: { quantity: 4 },
          attract: { distance: 200, duration: 0.4, factor: 5 },
        },
      },
      particles: {
        color: { value: "#ffffeb" },
        line_linked: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.4,
          width: 1,
        },
        move: {
          attract: { enable: false, rotateX: 600, rotateY: 1200 },
          bounce: false,
          direction: "none",
          enable: true,
          out_mode: "out",
          random: false,
          speed: 2,
          straight: false,
        },
        number: { density: { enable: true, value_area: 800 }, value: 80 },
        opacity: {
          anim: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
          random: false,
          value: 0.5,
        },
        shape: {
          character: {
            fill: false,
            font: "Verdana",
            style: "",
            value: "*",
            weight: "400",
          },
          polygon: { nb_sides: 5 },
          stroke: { color: "#000000", width: 0 },
          type: "circle",
        },
        size: {
          anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
          random: true,
          value: 5,
        },
      },
      polygon: {
        draw: { enable: false, lineColor: "#ffffff", lineWidth: 0.5 },
        move: { radius: 10 },
        scale: 1,
        type: "none",
        url: "",
      },
      retina_detect: true,
    });
  },
};
</script>
<style>
/* ---- reset ---- */
body {
  margin: 0;
  font: normal 75% Arial, Helvetica, sans-serif;
}
canvas {
  display: block;
  vertical-align: bottom;
}
#tsparticles {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #00a9fc;
  background-image: url("");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
}

a:hover {
  color: white;
  text-decoration: none;
}
</style>
