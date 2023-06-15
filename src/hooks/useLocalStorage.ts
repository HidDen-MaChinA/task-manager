"use client"

const useLocalStorage = (key:string,initialValue?:string) => {
  localStorage.setItem(key,initialValue ? initialValue:"");
  const setValue = (str:string)=>{
    localStorage.setItem(key,str)
  }

  const getValue = ()=>{
    localStorage.getItem(key)
  }
  return {
    setValue:setValue,
    getValue:getValue
  }
}

export {
  useLocalStorage
}