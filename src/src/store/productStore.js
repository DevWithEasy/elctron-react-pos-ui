import {create} from "zustand";
import {devtools,persist} from "zustand/middleware";

const createProductStore = (set)=>({
    cart : [],
    addCart : (product)=>{
        set((state) => {
            const inCart = state.cart.find(item=>item.id === product.id ? true : false)
            if (inCart){
                return {cart : state.cart.map(item => item.id === product.id ? {...item,qty : item.qty+1} : item)}
            }else{
                return {cart : [...state.cart,{...product,qty : 1}]}
            }
          })
    },
    removeCart : (productId)=>{
        set((state)=>({
            cart : state.cart.filter(product=>product.id !== productId)
        }))
    },
    adjustQuantity : (productId,qty)=>{
        set((state)=>({
            cart : state.cart.map(product=>product.id === productId ? {...product,qty : Number(qty)} : product)
        }))
    }
})
const useProductStore =create(
    devtools(
        persist(createProductStore,{
            name : "product"
        })
    )
)
export default useProductStore;