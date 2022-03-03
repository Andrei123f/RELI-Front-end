<template>
<div class="alert alert-success d-flex align-items-center outer  float justify-content-center" role="alert">
  <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
  <div class="inner">
    <strong>Success: </strong> {{message}}
  </div>
  <span @click="hideMsg()" class="close">&times;</span>
</div>
</template>
<script>
export default{
  props: {
    message: String,
  },
  data: () => {
    return{
    show: true,
    }
  },
  methods: {
    hideMsg() {
      this.emitter.emit('hideMsg', 'success')
    }
  }
}
</script>
