<template>
  <div class="el-tabs">
    <slot></slot>
  </div>
</template>
<script>
import Vue from 'vue';

export default {
  name: 'ElTabs',
  props: {
    mode: {
      type: String,
      default: 'horizontal',
    },
    activeIndex: {
      type: String || Number,
      required: true,
    },
  },
  data() {
    return {
      EventBus: new Vue(),
    };
  },
  mounted() {
    this.EventBus.$on('updateIndex', (data) => {
      this.$emit('update:activeIndex', data);
    });
  },
  provide() {
    return {
      EventBus: this.EventBus,
      activeIndex: this.activeIndex,
      tabsMode: this.mode,
    };
  },
};
</script>
<style>
  .el-tabs{
    overflow: hidden;
  }
</style>
