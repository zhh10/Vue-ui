<template>
    <div class="el-collapse">
        <slot></slot>
    </div>
</template>
<script>
import Vue from 'vue';

export default {
  name: 'ElCollapse',
  props: {
    mode: {
      type: String,
      default: 'many',
    },
    selected: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      EventBus: new Vue(),
    };
  },
  provide() {
    return {
      EventBus: this.EventBus,
    };
  },
  mounted() {
    this.EventBus.$emit('update:selected', this.selected);

    this.EventBus.$on('addIndex', (name) => {
      let selectedCopy = JSON.parse(JSON.stringify(this.selected));
      if (this.mode === 'signal') {
        selectedCopy = [name];
      } else {
        selectedCopy.push(name);
      }
      this.$emit('update:selected', selectedCopy); // 更改外部的
      this.EventBus.$emit('update:selected', selectedCopy); // 通知内部事件流
    });

    this.EventBus.$on('removeIndex', (name) => {
      const selectedCopy = JSON.parse(JSON.stringify(this.selected));
      const index = selectedCopy.indexOf(name);
      selectedCopy.splice(index, 1);
      this.$emit('update:selected', selectedCopy);
      this.EventBus.$emit('update:selected', selectedCopy);
    });
  },
};
</script>
