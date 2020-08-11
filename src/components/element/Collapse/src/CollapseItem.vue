<template>
    <div class="el-collapse--item">
        <div @click='handleClick'
        class="el-collapse--header"
        >
        {{title}}
        <el-icon name="arrow-up" :class="{'is-active':isShow}" style="margin-right:5px;"></el-icon>
        </div>
        <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter"
        @before-leave="beforeLeave" @leave="leave" @after-leave="afterLeave">
            <div class="el-collapse--content" ref="slot"
            v-show = 'isShow'>
              <slot></slot>
          </div>
        </transition>
    </div>
</template>
<script>
export default {
  name: 'ElCollapseItem',
  inject: ['EventBus'],
  props: {
    title: {
      type: String,
      required: true,
    },
    name: {
      type: String || Number,
      required: true,
    },
  },
  data() {
    return {
      isShow: false,
    };
  },
  mounted() {
    this.EventBus.$on('update:selected', (data) => {
      if (data.includes(this.name)) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    });
  },
  methods: {
    handleClick() {
      if (this.isShow) {
        this.EventBus.$emit('removeIndex', this.name);
      } else {
        this.EventBus.$emit('addIndex', this.name);
      }
    },

    beforeEnter(el) {
      el.style.transition = 'height .2s linear,margin-top .2s linear,margin-bottom .2s linear';
      el.style.height = 0;
      el.style.margin = 0;
    },
    enter(el) {
      if (el.scrollHeight !== 0) {
        el.style.height = `${el.scrollHeight}px`;
        el.style.margin = '20px 5px';
      } else {
        el.style.height = '';
      }
    },
    afterEnter(el) {
      el.style.transition = '';
      // el.style.height = '';
    },
    beforeLeave(el) {
      el.style.height = `${el.scrollHeight}px`;
      el.style.margin = '20px 5px';
    },
    leave(el) {
      if (el.scrollHeight !== 0) {
        el.style.transition = 'height .2s linear,margin-top .2s linear,margin-bottom .2s linear';
        el.style.height = 0;
        el.style.margin = 0;
      }
    },
    afterLeave(el) {
      el.style.transition = '';
      el.style.height = '';
      el.style.margin = 0;
    },
  },
};
</script>
