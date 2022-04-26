<template>
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
          attract: { distance: 300, duration: 0.2, factor: 5 },
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
        number: { density: { enable: true, value_area: 800 }, value: 80 },
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
  <div style="text-align: center">
    <img
      width="500"
      height="500"
      src="/reli-logo-icon_small_wihout_background.png"
    />
    <h1>
      404 Not found. 😞<br />
      Return to safety by pressing the button
    </h1>
    <router-link to="/"> <div class="btn">Go back to safety</div></router-link>
  </div>
</template>
<script>
export default {
  data: () => {
    return {};
  },
};
</script>
<style lang="scss" scoped>
$gb: #f2eee8;
$wh: #ffffff;
$dark: #383a41;
$red: #eb6d6d;
$blue: #5e7fdc;

$break: 400px;

/* ---- reset ---- */
body {
  margin: 0;
  font: normal 75% Arial, Helvetica, sans-serif;
}
canvas {
  display: block;
  vertical-align: bottom;
}
#tsparticles_links {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-color: #00a9fc;
  background-image: url("");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
}

body {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
  background-color: $gb;
  font-family: "Open Sans";
}
h1 {
  font-weight: 800;
  color: white;
  text-align: center;
  font-size: 2.5em;
  padding-top: 20px;

  @media screen and (max-width: $break) {
    padding-left: 20px;
    padding-right: 20px;
    font-size: 2em;
  }
}

.btn {
  font-weight: 800;
  padding: 20px;
  background-color: rgba($blue, 1);
  width: 320px;
  margin: 0 auto;
  text-align: center;
  font-size: 1.2em;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 30px;
  margin-bottom: 50px;
  transition: all 0.2s linear;
  color: white;

  @media screen and (max-width: $break) {
    margin: 0 auto;
    margin-top: 60px;
    margin-bottom: 50px;
    width: 200px;
  }

  &:hover {
    background-color: rgba($blue, 0.8);
    transition: all 0.2s linear;
  }
}
</style>