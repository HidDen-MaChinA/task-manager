import { create } from "zustand"


type storeType = {
  tasks:string[];
  search:(str:string)=>string[];
  add:(toAdd:string)=>void;
  update:(index:number,toUpdate:string)=>void;
  delete:(index:number)=>void;
}

const useTaskManager = create<storeType>((set,get)=>({
  tasks:[],
  add:(toAdd)=>{
    set((state)=>(
      {...state,tasks:[...state.tasks,toAdd]}
    ))
  },
  delete:(index)=>{
    set((state)=>(
      {...state,tasks:[...state.tasks.slice(index,1)]}))
  },
  search:(str)=>(
    get().tasks.filter((task)=>task.includes(str))
  ),
  update:(index,toUpdate)=>{
    const add = (index:number,str:string)=>{
      const arr = get().tasks;
      arr[index]=str
      return arr;
    }
    set((state)=>(
      {...state,tasks:[...add(index,toUpdate)]}
    ))
  }
}))

export {
  useTaskManager
}