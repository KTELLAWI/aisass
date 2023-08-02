import {create} from 'zustand';

interface userProModalstore {
    isOpen:boolean,
    onOpen:()=>void,
    onClose:()=>void
}

export const useProModal= create<userProModalstore>( (set)=>({
    isOpen:false,
    onOpen:()=> set({isOpen:true}),
    onClose:()=> set({isOpen:false}),

}))