import Cascader from './src/Cascader'
import CascaderItem from './src/CascaderItem'

const arr = [Cascader,CascaderItem]

arr.forEach(item => {
    item.install = (Vue) => {
        Vue.component(item.name,item)
    }
})

export default {Cascader,CascaderItem}