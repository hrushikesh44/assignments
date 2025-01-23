import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='grid grid-cols-1 sm:grid-cols-12'>
      <div className='bg-red-200 col-span-1 sm:col-span-4'>
        this is child 1
      </div>
      <div className='bg-green-200 col-span-1 sm:col-span-6'>
        this is child 2
      </div>
      <div className='bg-blue-200 col-span-1 sm:col-span-2'>
        this is child 3
      </div>
    </div>  
    </>
  )
}

export default App
