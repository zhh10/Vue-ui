import MessageBox from './src/MessageBox.vue';

MessageBox.install = (Vue) => {
    Vue.prototype.$confirm = function(confirmText,confirmTitle,ButtonOptions){
        const Constructor = Vue.extend(MessageBox)
        const div = document.createElement('div')
        document.body.appendChild(div)
        const vm = new Constructor({
            propsData:{
                type:'confirm', 
                message:confirmText,
                title:confirmTitle,
                ButtonOptions:ButtonOptions
            }
        }).$mount(div)
        return vm.confirm()
    }
}

export default MessageBox