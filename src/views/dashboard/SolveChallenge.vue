<template>
  <div class="container-fluid">
    <!-- Page Heading -->
    <h1 class="h3 mb-4 text-gray-800">Solve a new challenge</h1>

    <div class="row">
      <div class="col-lg-6">
        <!-- Circle Buttons -->
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">
              Challenge Description
            </h6>
          </div>
          <div class="card-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            posuere, neque bibendum malesuada hendrerit, tortor nisl laoreet
            felis, id sollicitudin turpis sem ac lectus. Fusce massa est, mattis
            sed aliquam in, suscipit vitae leo. Donec rutrum, lorem eget
            sollicitudin rutrum, est arcu imperdiet lacus, sed tempor turpis
            ipsum ut mauris. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. In eu vehicula nunc. Phasellus sit amet imperdiet quam. Nullam
            fringilla leo id nulla dignissim sagittis. Aliquam tempus enim sed
            mauris efficitur semper. Ut feugiat, quam sed malesuada iaculis,
            nulla mi ullamcorper mi, ac molestie odio est eu nisi. Curabitur
            laoreet leo vitae sapien lobortis bibendum. Vivamus at diam luctus,
            consequat sapien sed, euismod augue. Phasellus in rutrum metus,
            rutrum imperdiet justo. Praesent consequat, lacus eu porta
            condimentum, ante massa faucibus turpis, sed pulvinar tortor metus
            ut mauris. Nam placerat lobortis pretium. Duis elementum eget mauris
            nec malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed posuere, neque bibendum malesuada hendrerit, tortor nisl
            laoreet felis, id sollicitudin turpis sem ac lectus. Fusce massa
            est, mattis sed aliquam in, suscipit vitae leo. Donec rutrum, lorem
            eget sollicitudin rutrum, est arcu imperdiet lacus, sed tempor
            turpis ipsum ut mauris. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. In eu vehicula nunc. Phasellus sit amet imperdiet
            quam. Nullam fringilla leo id nulla dignissim sagittis. Aliquam
            tempus enim sed mauris efficitur semper. Ut feugiat, quam sed
            malesuada iaculis, nulla mi ullamcorper mi, ac molestie odio est eu
            nisi. Curabitur laoreet leo vitae sapien lobortis bibendum. Vivamus
            at diam luctus, consequat sapien sed, euismod augue. Phasellus in
            rutrum metus, rutrum imperdiet justo. Praesent consequat, lacus eu
            porta condimentum, ante massa faucibus turpis, sed pulvinar tortor
            metus ut mauris. Nam placerat lobortis pretium. Duis elementum eget
            mauris nec malesuada
          </div>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary ">Terminal</h6>
          </div>
          <div class="card-body">
            
            <Terminal></Terminal>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Terminal from "../../components/dashboard/challenge/Terminal.vue";

export default {
  components: {
    Terminal,
  },
  data: () => ({}),
  mounted() {},
  methods: {},
};
</script>

<style scoped>
.card-body {
  height: 700px;
}
</style>