import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const createUserStore = (set)=>({
    isAuth : false,
    user : {},
    users : [],
    companies : [],
    generics : [],
    customers : [],

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
    addCompanies : (companies)=>{
        set((state)=>({
            companies : companies
        }))
    },
    addGenerics : (generics)=>{
        set((state)=>({
            generics : generics
        }))
    },
    addCustomers : (customers)=>{
        set((state)=>({
            customers : customers
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