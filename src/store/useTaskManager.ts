import { useLocalStorage } from "@/hooks/useLocalStorage";
import { create } from "zustand"

type storeType = {
  tasks:Atask[];
  searchTask:string;
  addTask:(toAdd:Atask)=>void;
  setSearchTask:(search:string)=>void;
  updateTask:(index:number,toUpdate:Atask)=>void;
  deleteTask:(index:number)=>void;
}

type Atask = {
  id:number;
  title:string;
  completed:boolean
}

const useTaskManager = create<storeType>((set,get)=>({
  tasks:[],
  addTask:(toAdd)=>{
    set((state)=>(
      {...state,tasks:[...state.tasks,toAdd]}
    ))
  },
  deleteTask:(index)=>{
    const remove = ()=>{
      const arr = get().tasks;
      for(let i=0;i<arr.length;i++){
        if(arr[i].id===index){
          arr.splice(i,1)
        }
      }
      return arr;
    }
    set((state)=>(
      {...state,tasks:[...remove()]}
      ))
  },
  searchTask:"",
  updateTask:(index,toUpdate)=>{
    const add = (index:number)=>{
      const arr = get().tasks;
      for(let i=0;i<arr.length;i++){
        if(arr[i].id===index){
          arr[i] = toUpdate;
        }
      }
      return arr;
    }
    set((state)=>(
      {...state,tasks:[...add(index)]}
    ))
  },
  setSearchTask:(search:string)=>{
    set((state)=>(
      {...state,searchTask:search}
    ))
  }
}))

export {
  useTaskManager
}