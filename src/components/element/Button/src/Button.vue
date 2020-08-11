<template>
    <button class='el-button'
    @click="e => $emit('click',e)"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
             type ? `el-button--${type}`:'',
             size ? `el-button--${size}`:'',
             plain ? 'is-plain':'',
             round ? 'is-round':'',
             circle ? 'is-circle':'',
             disabled? 'is-disabled':'',
             ]">
      <i v-if="icon" :class="icon"></i>
      <span v-if="$slots.default">
        <slot></slot>
      </span>
    </button>
</template>
<script>
export default {
  name: 'ElButton',
  props: {
    type: String,
    plain: Boolean,
    round: Boolean,
    circle: Boolean,
    icon: String,
    disabled: Boolean,
    size: String,
    autofocus: Boolean,
    nativeType: {
      type: String,
      default: 'button',
    },
  },
};
</script>
