import Notify from './src/Notify.vue';
Notify.install = (Vue) => {
    Vue.prototype.$notify = function({position,title,message,type,duration=2000,showClose=false}){
        const Constructor = Vue.extend(Notify)
        const div = document.createElement('div')
        document.body.appendChild(div)
        const vm = new Constructor({
            propsData:{
                type,
                message,
                position,
                title,
                duration,
                showClose
            }
        }).$mount(div)
    }
}
export default Notify;