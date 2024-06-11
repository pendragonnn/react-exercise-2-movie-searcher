import { useState } from 'react'
import HeaderComponent from './components/HeaderComponent'
import SearchComponent from './components/SearchComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeaderComponent />
      <SearchComponent />
    </>
  )
}

export default App
