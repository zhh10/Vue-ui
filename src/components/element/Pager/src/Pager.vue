<template>
    <ul class="el-pager">
        <li class="el-pager--item el-pager--arrow"
        :class="{'is-disabled':this.currentPage === 1}"
        @click="handleClick('left',null)">
            <el-icon name="arrow-left"></el-icon>
        </li>
        <template v-for="(page,index) in pages">
            <template v-if="page === currentPage">
                <li :key="index" class="el-pager--item is-active">{{page}}</li>
            </template>
            <template v-else-if="page === '...'">
                <li :key="index" class="el-pager--item is-ellipsis">
                    <svg  t="1596751695088" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1639" ><path d="M221 592c-44.183 0-80-35.817-80-80s35.817-80 80-80 80 35.817 80 80-35.817 80-80 80z m291 0c-44.183 0-80-35.817-80-80s35.817-80 80-80 80 35.817 80 80-35.817 80-80 80z m291 0c-44.183 0-80-35.817-80-80s35.817-80 80-80 80 35.817 80 80-35.817 80-80 80z" p-id="1640" fill="#8a8a8a"></path></svg>
                </li>
            </template>
            <template v-else>
                <li :key="index" class="el-pager--item"
                @click="handleClick('number',page)">{{page}}</li>
            </template>
        </template>
        <li class="el-pager--item el-pager--arrow"
        :class="{'is-disabled':this.currentPage === this.totalPage}"
        @click="handleClick('right',null)">
            <el-icon name="arrow-right"></el-icon>
        </li>
    </ul>
</template>
<script>
export default {
  name: 'ElPager',
  props: {
    totalPage: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  computed: {
    pages() {
      const arr = this.unique([1, this.totalPage, this.currentPage - 2,
        this.currentPage - 1, this.currentPage,
        this.currentPage + 1, this.currentPage + 2]
        .filter((item) => item >= 1 && item <= this.totalPage) // 过滤
        .sort((a, b) => a - b))
        .reduce((prev, current, index, array) => {
          prev.push(current);
          array[index + 1] !== undefined && array[index + 1] - array[index] > 1 && prev.push('...');
          return prev;
        }, []);

      return arr;
    },
  },
  methods: {
    //   去重
    unique(arr) {
      return [...new Set(arr)];
    },
    handleClick(type, page) {
      if (type === 'left' && this.currentPage !== 1) {
        this.$emit('pageChange', { last: this.currentPage, next: this.currentPage - 1 });
        this.$emit('update:currentPage', this.currentPage - 1);
      } else if (type === 'right' && this.currentPage !== this.totalPage) {
        this.$emit('pageChange', { last: this.currentPage, next: this.currentPage + 1 });
        this.$emit('update:currentPage', this.currentPage + 1);
      } else if (type === 'number') {
        this.$emit('pageChange', { last: this.currentPage, next: page });
        this.$emit('update:currentPage', page);
      }
    },
  },
};
</script>
