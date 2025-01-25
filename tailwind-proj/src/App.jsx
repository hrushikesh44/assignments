import './App.css'
import { AddMeeting } from './icons/Add'
import { Schedule } from './icons/Schedule'
import { Profilecard } from './Profilecard'

function App() {

  return (
    <div className='flex'>
      <Sidebar />
      <MainComponent />
    </div>
  )
}

function Sidebar(){
  
  return <div className='bg-slate-200 h-screen w-[25vw] '>

  </div>
}

function MainComponent() {

  return <div className='w-full '>
    <div className='bg-slate-300 h-[25vh] '>

    </div>
    <div className=' grid grid-cols-12 gap-4 mt-2.5'>
      <div className='bg-slate-200 rounded-2xl h-96 col-span-3 shadow-lg -translate-y-20 ml-3.5 hidden md:block transition-all duration-700 '>
        <Profilecard />
      </div>
      <div className='bg-slate-200 rounded-2xl h-[50vh] col-span-6 shadow-lg mt-20' >

      </div>
      <div className='bg-slate-200 rounded-2xl h-96 col-span-3 shadow-lg mt-10 mr-10 flex justify-around'>
            <AddMeeting />
            <Schedule />

      </div>
    </div>
  </div>
}

export default App
