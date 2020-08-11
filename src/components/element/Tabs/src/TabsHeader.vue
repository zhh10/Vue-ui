<template>
    <ul class="el-tabsHeader"
    :class="[{'is-horizontal':tabsMode === 'horizontal'},
             {'is-vertical':tabsMode === 'vertical'}]">
      <slot></slot>
    </ul>
</template>
<script>
export default {
  name: 'ElTabsHeader',
  inject: ['tabsMode'],
};
</script>
