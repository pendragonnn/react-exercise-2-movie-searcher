import { useState } from 'react'
import HeaderComponent from './components/HeaderComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeaderComponent />
    </>
  )
}

export default App
