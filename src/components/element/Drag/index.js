import DragWrap from './src/DragWrap'
import DragItem from './src/DragItem'



DragWrap.install = Vue => {
Vue.component(DragWrap.name, DragWrap);
};


DragItem.install = Vue => {
    Vue.component(DragItem.name,DragItem)
}

export default { DragWrap,DragItem };