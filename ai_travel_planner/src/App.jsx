import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/custom/Header'
import CreateTrip from './create-trip/CreateTrip'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <CreateTrip/>
    </>
  )
}

export default App
