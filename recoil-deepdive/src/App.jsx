import { useState } from 'react'
import { RecoilRoot, useRecoilValue } from 'recoil'
import './App.css'
import { jobsAtom, messageAtom, networkAtom, notificationAtom, totalNotificationSelector } from '../navbarAtoms'

function App() {
  const [count, setCount] = useState(0)

  return (
    <RecoilRoot>
       <Navbar />
    </RecoilRoot>
  )
}

function Navbar() {
  const networkCount = useRecoilValue(networkAtom)
  const messageCount = useRecoilValue(messageAtom)
  const jobsCount = useRecoilValue(jobsAtom)
  const notificationCount = useRecoilValue(notificationAtom)
  const allNotificationCount = useRecoilValue(totalNotificationSelector)

  return <>
  <button>Home</button>

  <button>My Network {networkCount >= 100 ? "99+" : networkCount} </button>
  <button>Messaging {messageCount} </button>
  <button>Jobs {jobsCount} </button>
  <button>Notifications {notificationCount} </button>
  
  <button>Me {allNotificationCount} </button>
  </>
}

export default App
