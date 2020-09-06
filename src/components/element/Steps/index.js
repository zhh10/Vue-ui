import Steps from "./src/Steps.vue"
import Step from "./src/Step"

const arr = [Steps,Step] 
arr.forEach(item => {
    item.install = (Vue)=>{
        Vue.component(item.name,item)
    }
})
export default {Steps,Step}