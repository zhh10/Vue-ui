import Slides from "./src/Slides"
import SlidesItem from './src/SlidesItem'

const arr = [Slides,SlidesItem]

arr.forEach(item => {
    item.install = (Vue) => {
        Vue.component(item.name,item)
    }
})

export default {Slides,SlidesItem}