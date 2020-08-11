export default {
  name: 'ElRow',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    type: String,
    gutter: {
      type: Number,
      default: 0,
    },
    justify: {
      type: String,
      default: 'start',
      validator: (val) => ['start', 'end', 'center', 'space-around', 'space-between'].includes(val),
    },
    align: {
      type: String,
      default: 'top',
      validator: (val) => ['top', 'middle', 'bottom'].includes(val),
    },
  },
  computed: {
    style() {
      const style = {};
      if (this.gutter) {
        style.marginLeft = `-${this.gutter / 2}px`;
        style.marginRight = style.marginLeft;
      }
      return style;
    },
    classList() {
      const classList = [];
      ['type', 'justify', 'align'].forEach((item) => {
        if (item === 'type') {
          classList.push('el-row--flex');
        }
        if (item === 'justify') {
          if (this[item] !== 'start') {
            classList.push(`is-justify-${this[item]}`);
          }
        }
        if (item === 'align') {
          if (this[item] !== 'top') {
            classList.push(`is-align-${this[item]}`);
          }
        }
      });
      return classList;
    },
  },
  render(h) {
    return h(this.tag, {
      class: ['el-row', this.classList],
      style: this.style,
    }, this.$slots.default);
  },
};
