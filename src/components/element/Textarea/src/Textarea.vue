<template>
    <div class="el-textarea">
        <textarea
        class="el-textarea--inner"
        :rows="rows"
        ></textarea>
    </div>
</template>
<script>
export default {
  name: 'ElTextarea',
  props: {
    rows: {
      type: Number,
      default: 5,
    },
  },
};
</script>
