import Breadcrumb from './src/Breadcrumb.vue';
import BreadcrumbItem from './src/BreadcrumbItem.vue';

const arr = [Breadcrumb,BreadcrumbItem];

arr.map(item => {
    item.install = (Vue) => {
        Vue.component(item.name,item)
    }
})
export default {Breadcrumb,BreadcrumbItem};