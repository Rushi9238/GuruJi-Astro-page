import { useContext, useState } from 'react'

import { dataContext } from '../Page/Contextwrapper'
import Header from '../Page/Header'
import RecipeList from '../Page/RecipeList'

function App() {
 const {search ,setSearch} =useContext(dataContext)

  return (
    <>
      <Header/>
      <RecipeList/>
    </>
  )
}

export default App
