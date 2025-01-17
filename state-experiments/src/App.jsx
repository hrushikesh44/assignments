import { Children, createContext, useContext, useEffect, useState } from "react"
import { useFetch } from "./hooks/useFetch";
import "./App.css"
import { usePrev } from "./hooks/usePrev";
import { useDebounce } from "./hooks/useDebounce";

const BulbContext = createContext();

function BulbProvider({ children }){
  const [bulbOn, setBulbOn] = useState(true)
  
  return <BulbContext.Provider value={{
    bulbOn: bulbOn,
    setBulbOn: setBulbOn
  }}>
    {children}
  </BulbContext.Provider>
}

function App() {
  return <div>
    <BulbProvider>
      <Light />
    </BulbProvider>
    <br/>
    <Data />
    <br/>
    <Counter />
    <br/>
    <Search />
  </div>
}

function Search(){
  const [inputVal, setInputVal] = useState("")
  const debouncedValue = useDebounce(inputVal, 300)

  function change(e){
    setInputVal(e.target.value)
  }

  useEffect(() =>{
    console.log("expensive operation");
    
  }, [debouncedValue])

  return <div>
    <input type="text" onChange={change}></input>
  </div>

}

function Counter(){
  const [state, setState] = useState(0);
  const prev = usePrev(state)

  function increase(){
    setState(v => v + 1 )
  }

  return <div>
    <p>{state}</p>
    <button onClick={increase} > Click me </button>
    <p>the previous value was {prev}</p>
  </div>
}

function Data(){
  const [state, setState] = useState(1);
  const response = useFetch("https://jsonplaceholder.typicode.com/todos/" + state)
  
  return <div>
    {response.loading ? "Loading..." :response.data.title}
    <br/>
    <button onClick={() => setState(1)}>1</button>
    <button onClick={() => setState(2)}>2</button>
    <button onClick={() => setState(3)}>3</button>
  </div>
}

function Light(){

  return <div>
    <LightBulb/>
    <LightSwitch/>
  </div>
}

function LightBulb(){
  
  const { bulbOn } = useContext(BulbContext)

  return <div>
    {bulbOn ? "bulb On" : "bulb Off"}
  </div>
}

function LightSwitch(){
  const {bulbOn, setBulbOn } = useContext(BulbContext)

  function toggle(){
    setBulbOn(!bulbOn)
  }

  return <div>
    <button onClick={toggle}>Toggle the bulb</button>
  </div>
}

export default App
