import { useState } from 'react'
import HeaderComponent from './components/HeaderComponent'
import SearchComponent from './components/SearchComponent'
import MovieContainerComponent from './components/MovieContainerComponent'

function App() {
  return (
    <>
    <div className="w-full flex flex-col items-center px-20 ">
      <HeaderComponent />
      <SearchComponent />
      <MovieContainerComponent />
    </div>
    </>
  )
}

export default App
