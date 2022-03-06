<template>
  <header>
    <transition duration="550" name="nested" mode="out-in">
    <SuccessNotification 
    v-if="showSuccess"
    :message="msg">
    </SuccessNotification>
    </transition>
    <transition duration="550" name="nested" mode="out-in">
    <InfoNotfication 
    v-if="showInfo"
    :message="msg">
    </InfoNotfication>
    </transition>
    <transition duration="550" name="nested" mode="out-in">
    <DangerNotification 
    v-if="showDanger"
    :message="msg">
    </DangerNotification>
    </transition>

  </header>
    <router-view/>
</template>

<script>
import SuccessNotification from "./components/notifications/SuccessNotification.vue";
import InfoNotfication from "./components/notifications/InfoNotfication.vue";
import DangerNotification from "./components/notifications/DangerNotification.vue";
export default{
  data: () => {
    return{
    showInfo: false,
    showSuccess: false,
    showDanger: false,
    msg: '',
    }
  },
    mounted() {
        this.emitter.on("displayMessage", data => {
            this.resetMessages();
            if(Array.isArray(data)){
              if(data[0] == 'info'){
                this.showInfo = true;
              }else if(data[0] == 'success') {
                this.showSuccess = true;
              }else if(data[0] == 'error') {
                this.showDanger = true;
              }
              this.msg = data[1];
            } else {
              this.showInfo = true;
              this.msg = data;
            }
        });
        this.emitter.on("hideMsg", data => {
            if(data == 'success'){
              this.showSuccess = false;
            } else if(data == 'info') {
              this.showInfo = false;
            } else if(data == 'error') {
              this.showDanger = false;
            }
            this.resetMessages();
        });
    },
    methods: {
      resetMessages() {
        this.showInfo = false;
        this.showSuccess = false;
        this.showDanger = false;
        this.msg = '';
      },
    },
    components: { SuccessNotification, InfoNotfication, DangerNotification }
}
</script>

<style>
/* @import './assets/base.css'; */
  
.nested-enter-active, .nested-leave-active {
	transition: all 0.3s ease-in-out;
}
/* delay leave of parent element */
.nested-leave-active {
  transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

/* we can also transition nested elements using nested selectors */
.nested-enter-active .inner,
.nested-leave-active .inner { 
  transition: all 0.3s ease-in-out;
}
/* delay enter of nested element */
.nested-enter-active .inner {
	transition-delay: 0.25s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  /*
  	Hack around a Chrome 96 bug in handling nested opacity transitions.
    This is not needed in other browsers or Chrome 99+ where the bug
    has been fixed.
  */
  opacity: 0.001;
}
.close {
  font-size: 30px;
  cursor: pointer;
  opacity: 0.5;
  padding-left: 15px;
}
.close:hover {
  opacity: 1;
}
.close:before, .close:after {
  background-color: #333;
}
.close:before {
  transform: rotate(45deg);
}
.close:after {
  transform: rotate(-45deg);
}
</style>
