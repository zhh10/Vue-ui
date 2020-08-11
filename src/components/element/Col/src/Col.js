export default {
  name: 'ElCol',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    span: {
      type: Number,
      default: 24,
    },
    offset: {
      type: Number,
      default: 0,
    },
    push: {
      type: Number,
      default: 0,
    },
    pull: {
      type: Number,
      default: 0,
    },
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object],
  },
  computed: {
    // 找找父组件有没有gutter
    gutter() {
      let parent = this.$parent;
      while (parent && parent.$options.name !== 'ELRow') {
        parent = parent.$parent;
      }
      return parent ? parent.gutter : 0;
    },
    style() {
      const style = {};
      if (this.gutter) {
        style.paddingLeft = `${this.gutter / 2} + 'px'`;
        style.paddingRight = style.paddingLeft;
      }
      return style;
    },
    classList() {
      const classList = [];
      ['span', 'offset', 'push', 'pull'].forEach((item) => {
        if (this[item]) {
          classList.push(item === 'span' ? `el-col-${this[item]}` : `el-col-${item}-${this[item]}`);
        }
      });

      ['xs', 'sm', 'md', 'lg', 'xl'].forEach((item) => {
        if (typeof this[item] === 'number') {
          classList.push(`el-col-${item}-${this[item]}`);
        } else if (typeof this[item] === 'object') {
          const props = Object.keys(item);
          props.forEach((prop) => {
            classList.push(prop === 'span' ? `el-col-${item}-${props.prop}` : `el-col-${item}-${prop}`);
          });
        }
      });
      return classList;
    },
  },
  render(h) {
    return h(this.tag, {
      class: ['el-col', this.classList],
      style: this.style,
    }, this.$slots.default);
  },
};
