<template>
  <div class="status-bar" :style="'width: ' + widthOfStatusBar + '%;'">
    <div
      class="current-status"
      id="current_status"
      :style="
        'width:' +
        widthOfCurrentStatus +
        '%; transition: width ' +
        completedNodesN * 500 +
        'ms linear 0s'
      "
    ></div>
  </div>
  <ul class="progress_bar">
    <li
      v-for="(o, index) in checkpoints"
      v-bind:key="index"
      class="bubble"
      v-bind:id="'bubble_' + index + (uniqueKey ? '_' + uniqueKey : '')"
      v-bind:style="
        'width:' +
        widthOfStage +
        '%; transition: ' +
        500 * index +
        'ms linear 0s'
      "
    >
      <span style="width: 10px; height: 20px"
        >{{ o.title }} <br />
        {{ o.description }}
      </span>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    checkpoints: {
      name: "Checkpoints",
      type: Array,
      default: [],
    },
    uniqueKey: {
      name: "Unique Key for Bubble Ids",
      type: String,
      default: "",
    },
  },
  data: () => {
    return {
      widthOfStage: 0,
      widthOfStatusBar: 0,
      widthOfCurrentStatus: 0,
      animationDelay: 200,
      animationalDelayForBubble: 700,
      completedNodesN: 0,
    };
  },
  mounted() {
    this.updateProgressBar();
  },
  methods: {
    updateProgressBar() {
      this.widthOfStage = 100 / this.checkpoints.length;
      this.widthOfStatusBar = 100 - this.widthOfStage;
      this.completedNodesN = this.checkpoints.filter(
        (el) => el.completed
      ).length;
      console.log(this.checkpoints);
      for (let i = 1; i < this.checkpoints.length; i++) {
        if (!this.checkpoints[i].completed) continue;
        setTimeout(
          function () {
            this.widthOfCurrentStatus =
              (100 * i) / (this.checkpoints.length - 1);
          }.bind(this),
          this.animationDelay
        );
      }

      let animationDelay = this.animationDelay;
      for (let i = 0; i < this.checkpoints.length; i++) {
        if (!this.checkpoints[i].completed) continue;
        setTimeout(
          function () {
            let classB =
              i + 1 == this.completedNodesN ? "visited current" : "visited";
            let bubble = document.getElementById(
              `bubble_${i}${this.uniqueKey ? "_" + this.uniqueKey : ""}`
            );
            if (bubble) {
              bubble.className += " " + classB;
            }
          }.bind(this),
          animationDelay
        );
        if (i == 0) {
          animationDelay = this.animationalDelayForBubble;
        } else {
          animationDelay = this.animationalDelayForBubble * i;
        }
      }
    },
  },
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
  content: "\2715";
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