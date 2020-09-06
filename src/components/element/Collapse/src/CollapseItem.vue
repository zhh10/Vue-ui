<template>
    <div class="el-collapse--item">
        <div @click='handleClick'
        class="el-collapse--header"
        >
        {{title}}
        <el-icon name="arrow-up" :class="{'is-active':isShow}" style="margin-right:5px;"></el-icon>
        </div>
        <transition  @enter="enter" @after-enter="afterEnter"
         @leave="leave" @after-leave="afterLeave">
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

    enter(el,done){
      let {height} = el.getBoundingClientRect()
      el.style.height = 0
      el.getBoundingClientRect() 
      el.style.height = `${height}px`
      el.addEventListener('transitioned',()=>{done()})
    },
    afterEnter(el){
      el.style.height = 'auto'
    },
    leave(el,done){
      let {height} = el.getBoundingClientRect()
      el.style.height = `${height}px`
      el.getBoundingClientRect()
      el.style.height = 0
      el.addEventListener('transitionend',()=>{done()})
    },
    afterLeave(el){
      el.style.height = 'auto'
    }
  },
};
</script>
