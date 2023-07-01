import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const createUserStore = (set)=>({
    isAuth : false,
    user : {},
    users : [],
    brands : [],
    generics : [],

    addUser : (data)=>{
        set((state)=>({
            isAuth : true,
            user : data
        }))
    },
    removeUser : ()=>{
        set((state)=>({
            isAuth : false,
            user : {}
        }))
    },
    addUsers : (users)=>{
        set((state)=>({
            users : users
        }))
    },
    addBrands : (brands)=>{
        set((state)=>({
            brands : brands
        }))
    },
    addGenerics : (generics)=>{
        set((state)=>({
            generics : generics
        }))
    }
})
const useUserStore =create(
    devtools(
        persist(createUserStore,{
            name : "user"
        })
    )
)
export default useUserStore;