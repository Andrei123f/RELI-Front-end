<template>
<div class="alert alert-danger d-flex align-items-center outer  float justify-content-center" role="alert" id="divMsg">
  <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
  <div class="ubber">
    <strong>Danger: </strong> {{message}}
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
      this.emitter.emit('hideMsg', 'error')
    }
  }
}
</script>