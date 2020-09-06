import Message from './src/Message';

Message.install = (Vue) => {
    Vue.prototype.$success = function({message,duration=2000,showClose=false}){
        const Constructor = Vue.extend(Message)
        const div = document.createElement('div')
        document.body.appendChild(div)
        const vm = new Constructor({
            propsData:{
                type:'success',
                message,
                duration,
                showClose,
            }
        }).$mount(div)
    }

    Vue.prototype.$info = function({message,duration=2000,showClose}){
        const Constructor = Vue.extend(Message)
        const div = document.createElement('div')
        document.body.appendChild(div)
        const vm = new Constructor({
            propsData:{
                type:'info',
                message,
                duration,
                showClose
            }
        }).$mount(div)
    }

    Vue.prototype.$warning = function({message,duration=2000,showClose}){
        const Constructor = Vue.extend(Message)
        const div = document.createElement('div')
        document.body.appendChild(div)
        const vm = new Constructor({
            propsData:{
                type:'warning',
                message,
                duration,
                showClose
            }
        }).$mount(div)
    }

    Vue.prototype.$error = function({message,duration=2000,showClose}){
        const Constructor = Vue.extend(Message)
        const div = document.createElement('div')
        document.body.appendChild(div)
        const vm = new Constructor({
            propsData:{
                type:'error',
                message,
                duration,
                showClose
            }
        }).$mount(div)
    }
}
export default Message