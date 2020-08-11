import Collapse from './src/Collapse.vue';
import CollapseItem from './src/CollapseItem.vue';

Collapse.install = (Vue) => {
  Vue.component(Collapse.name, Collapse);
};
CollapseItem.install = (Vue) => {
  Vue.component(CollapseItem.name, CollapseItem);
};
export default { Collapse, CollapseItem };
