<template>
    <li
    class="el-tabsHeader--item"
    :class="[{'is-active':name === Index},
             {'is-disabled':disabled}]"
    @click="switchIndex">
      <el-icon :name="icon" style="margin-right:5px;"></el-icon>
      <slot></slot>
    </li>
</template>
<script>
export default {
  name: 'ElTabsHeaderItem',
  inject: ['EventBus', 'activeIndex'],
  props: {
    name: {
      type: String || Number,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    icon: String,
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
  methods: {
    switchIndex() {
      if (!this.disabled) {
        this.EventBus.$emit('updateIndex', this.name);
      }
    },
  },
};
</script>
