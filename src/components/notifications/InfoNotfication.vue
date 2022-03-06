<template>
<div class="alert alert-primary d-flex align-items-center outer  float justify-content-center" role="alert" id="divMsg">
  <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Info:"><use xlink:href="#info-fill"/></svg>
  <div class="inner">
    <strong>Info: </strong> {{message}}
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
      this.emitter.emit('hideMsg', 'info')
    }
  }
}
</script>
