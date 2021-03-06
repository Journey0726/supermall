export default {
    addCart(context,payload){
        return new Promise((resolve, reject) => {
            let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
            if(oldProduct){ 
                context.commit('addCount',oldProduct)
                resolve('当前商品+1')
            }
            else {
                payload.count=1;
               context.commit('addTCart',payload)
               resolve('添加了新的商品')
            } 
        })
}
}
