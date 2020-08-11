<template>
    <div
    v-show="name === Index">
      <slot></slot>
    </div>
</template>
<script>
export default {
  name: 'ElTabsContentItem',
  inject: ['EventBus', 'activeIndex'],
  props: {
    name: String || Number,
  },
  data() {
    return {
      Index: this.activeIndex,
    };
  },
  mounted() {
    this.EventBus.$on('updateIndex', (data) => {
      this.Index = data;
    });
  },
};
</script>
