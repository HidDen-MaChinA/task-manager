"use client"

const useLocalStorage = (store:string) => {
  const addValue = (key:string,str:string)=>{
    localStorage.setItem(store,localStorage.getItem(store)+" "+key);
    localStorage.setItem(key,str)
  }

  const getValue = (key:string)=>{
    return localStorage.getItem(key);
  }
  const eraseValue = (key:string)=>{
    return localStorage.removeItem(key);
  }
  return {
    store,
    addValue:addValue,
    getValue:getValue,
    eraseValue:eraseValue
  }
}

export {
  useLocalStorage
}