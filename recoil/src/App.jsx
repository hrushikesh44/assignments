import { Children, createContext, useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const CountContext = createContext();

function CountProvider({ children }){
  const [count, setCount] = useState(0);


  return <CountContext.Provider value={{count, setCount }} >
    {children}
  </CountContext.Provider >
}

function Decrease() {
  const {count, setCount} = useContext(CountContext);
  return <button onClick={() => setCount(count - 1)}>Decrease</button>;
}

function Increase() {
  const {count, setCount} = useContext(CountContext);
  return <button onClick={() => setCount(count + 1)}>Increase</button>;
}

function Value() {
  const {count} = useContext(CountContext);
  return <p>Count: {count}</p>;
}

function Component() {

  return <div>
    <CountProvider>
      <Increase />
      <Decrease />
      <Value />
      </CountProvider>
  </div>
}


function App() {

  return <div>
      <Component /> 
  </div>
}

export default App
