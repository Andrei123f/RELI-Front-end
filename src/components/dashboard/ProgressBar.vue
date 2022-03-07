<template>
  <div class="progress-bar-wrapper">
    <div class="status-bar" :style="'width: ' + widthOfStatusBar + '%;'">
      <div
        class="current-status"
        :style="
          'width:' +
          widthOfCurrentStatus +
          '%;' +
          'transition: 5500ms linear '
        "
      ></div>
    </div>
    <ul class="progress_bar">
      <li
        v-for="(o, index) in checkpoints"
        v-bind:key="index"
        v-bind:class="o.completed == true ? 
        ((o.completed && index != checkpoints.length-1 && !checkpoints[index+1].completed) ? 'bubble visited current'
        : 'bubble visited') : 'bubble'"
        v-bind:style="'width:' + widthOfStage + '%; transition: '+ 5500 * index + 'ms linear'"
      >{{ o.title }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    checkpoints: {
      name: "Checkpoints",
      type: Array,
      default: [],
    },
  },
  data: () => {
    return {
      widthOfStage: 0,
      widthOfStatusBar: 0,
      widthOfCurrentStatus: 0,
    };
  },
  async mounted() {
    this.widthOfStage = 100 / this.checkpoints.length;
    this.widthOfStatusBar = 100 - this.widthOfStage;

    for (let i = 1; i < this.checkpoints.length - 1; i++) {
        if(!this.checkpoints[i].completed) return;
        setTimeout(function () {
        this.widthOfCurrentStatus = (100 * i) / (this.checkpoints.length - 1);
      }.bind(this), 200);
    }
  }
};
</script>
<style scoped>
.progress_bar {
  width: 100%;
margin: 0;
padding: 0;
font-size: 0;
list-style: none;
}

.bubble {
  display: inline-block;
  padding-top: 45px;
  font-size: 13px;
  font-weight: bold;
  line-height: 16px;
  color: gray;
  vertical-align: top;
  position: relative;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
}

.bubble:before {
  content: "x";
  position: absolute;
  top: 2px;
  left: calc(50% - 15px);
  z-index: 1;
  width: 30px;
  height: 30px;
  color: white;
  border: 2px solid white;
  border-radius: 17px;
  line-height: 30px;
  background: gray;
}
.status-bar {
  height: 3.8px;
  background: gray;
  position: relative;
  top: 20px;
  margin: 0 auto;
}
.current-status {
  height: 3.8px;
  width: 0;
  border-radius: 1px;
  background: mediumseagreen;
}

@keyframes changeBackground {
  from {
    background: gray;
  }
  to {
    background: mediumseagreen;
  }
}

.bubble.visited:before {
  content: "\2714";
  animation: changeBackground 0.5s linear;
  animation-fill-mode: forwards;
}

.bubble.visited.current:before {
  box-shadow: 0 0 0 2px mediumseagreen;
}
</style>