<template>
    <div :class="['el-container',{'is-vertical':isVertical}]">
        <slot></slot>
    </div>
</template>
<script>
export default {
  name: 'ElContainer',
  props: {
    direction: {
      type: String,
      default: 'horizontal',
    },
  },
  computed: {
    isVertical() {
      if (this.drection === 'horizontal') {
        return false;
      } if (this.direction === 'vertical') {
        return true;
      }

      return (this.$slots && this.$slots.default ? this.$slots.default.some((vnode) => {
        const tag = vnode.componentOptions && vnode.componentOptions.tag;
        return tag === 'el-header' || tag === 'el-footer';
      }) : false);
    },
  },
};
</script>
