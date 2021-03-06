import Toast from './Toast.vue'

const obj = {}

obj.install = function(Vue){
    //创建组件构造器
    const toastConstructor = Vue.extend(Toast)
    //创建一个组件对象
    const toast = new toastConstructor()
    toast.$mount(document.createElement('div'))
    document.body.appendChild(toast.$el)
    Vue.prototype.$toast = toast
}
export default obj;