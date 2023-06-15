"use client"

const useLocalStorage = () => {
  localStorage.setItem("storeTasksKey","_");
  const addValue = (key:string,str:string)=>{
    localStorage.setItem("storeTasksKey",localStorage.getItem("storeTasksKey")+" "+key);
    localStorage.setItem(key,str)
  }

  const getValue = (key:string)=>{
    return localStorage.getItem(key);
  }
  const eraseValue = (key:string)=>{
    return localStorage.removeItem("key");
  }
  return {
    setValue:addValue,
    getValue:getValue,
    eraseValue:eraseValue
  }
}

export {
  useLocalStorage
}