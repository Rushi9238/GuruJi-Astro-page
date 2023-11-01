import React, { createContext, useState } from 'react'
export const dataContext=createContext()
const Contextwrapper = ({children}) => {
    const [search, setSearch] = useState('')
    console.log(search);  
  return (
    <>
    <dataContext.Provider value={{search,setSearch}}>
    {children}
    </dataContext.Provider>
    </>
  )
}

export default Contextwrapper