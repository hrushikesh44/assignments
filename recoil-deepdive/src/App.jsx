import { useState } from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import './App.css'
import { jobsAtom, messageAtom, networkAtom, notificationAtom, todosAtomFamily, totalNotificationSelector } from '../navbarAtoms'

function App() {

  return (
    <RecoilRoot>
       <Navbar />
       <Todos id ={1} />
       <Todos id ={2} />
       <Todos id ={3} />
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

function Todos({id}) {
  const [todo, setTodo] = useRecoilState(todosAtomFamily(id));


  return <>
    <div>
      {todo.title}
      <br/>
      {todo.description}
    </div>
    </>
}

export default App
