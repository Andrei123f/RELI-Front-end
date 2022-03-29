<template>
  <div class="card shadow mb-4">
    <h6
      class="d-block card-header py-3 m-0 font-weight-bold"
      v-bind:style="'color:' + colourTitle"
      style="cursor: pointer"
      @click.prevent="() => (collapsed = !collapsed)"
    >
      {{ title }}
      <span v-if="getLoadingStatus">
        - computing tests... <i class="fas fa-spinner fa-pulse"></i>
      </span>
    </h6>

    <div
      class="collapse"
      v-bind:class="{
        show: !collapsed,
      }"
      id="collapseCardExample"
    >
      <div class="card-body">
        <p v-for="(m, index) in messages" v-bind:key="index">
          <strong v-bind:style="'color:' + colourTitleTests">{{
            m.title
          }}</strong
          ><br />
          <span v-bind:style="'color:' + colourMsgTests">{{ m.msg }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      name: "The title of the stack",
      type: String,
      default: "",
    },
    colourTitle: {
      name: "The colour of the stack",
      type: String,
      default: "",
    },
    colourTitleTests: {
      name: "The colour of title tests",
      type: String,
      default: "",
    },
    colourMsgTests: {
      name: "The colour of messages tests",
      type: String,
      default: "",
    },
    messages: {
      name: "The messages of the stack",
      type: Array,
      default: [],
    },
    loading: {
      name: "Loading the tests",
      type: Boolean,
      default: false,
    },
  },
  data: () => {
    return {
      collapsed: true,
    };
  },
  mounted() {},
  computed: {
    getLoadingStatus() {
      return this.loading;
    },
  },
};
</script>