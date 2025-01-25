import './App.css'
import { AddMeeting } from './icons/Add'
import { Schedule } from './icons/Schedule'
import { Profilecard } from './components/Profilecard'
import { SidebarContent } from './components/SidebarContent'

function App() {

  return (<>
  <MobileTopbar />
      <div className='flex'>
        <Sidebar />
        <MainComponent />
      </div>
    </>
  )
}

function Sidebar(){
  
  return <div className='bg-slate-200 h-screen w-[25vw] hidden lg:block'>
    <SidebarContent />
  </div>
}

function MobileTopbar(){
  return <div className='bg-red-200 h-[10vh] w-screen block md:hidden mt-8 rounded-2xl sticky top-8 opacity-25'>
    
  </div>
}

function MainComponent() {

  return <div className='w-full '>
    <div className='bg-slate-300 h-[25vh] hidden md:block'>

    </div>
    <div className=' grid grid-cols-12 gap-4 mt-2.5'>
      <div className='bg-slate-200 rounded-2xl h-96 col-span-3 shadow-lg -translate-y-20 ml-3.5 hidden lg:block'>
        <Profilecard />
      </div>
      <div className='bg-slate-200 rounded-2xl h-[50vh] col-span-11  lg:col-span-6 md:col-span-8 shadow-lg mt-20 ml-10 md:ml-2.5 ' >

      </div>
      <div className='bg-slate-200 rounded-2xl h-96 col-span-11 lg:col-span-3 md:col-span-4 shadow-lg mt-10 mr-4 md:mr-4 ml-10 md:ml-2.5 flex justify-around mb-10 md:mb-0'>
            <AddMeeting />
            <Schedule />

      </div>
    </div>
  </div>
}

export default App
