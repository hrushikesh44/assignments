import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import { counterAtom } from './store/atoms/counterAtom'


function Decrease() {
  const setCount = useSetRecoilState(counterAtom)

  function decrease(){
    setCount(c => c - 1);
  }

  return <button onClick={decrease}>Decrease</button>;
}

function Increase() {
  const setCount = useSetRecoilState(counterAtom)

  function increase(){
    setCount(c => c + 1)
  }

  return <button onClick={increase}>Increase</button>;
}

function Value() {
  const count = useRecoilValue(counterAtom)

  return <p>Count: {count}</p>;
}

function Counter() {

  return <div>
      <Increase />
      <Decrease />
      <Value />
  </div>
}

function App() {

  return <div>
    <RecoilRoot>
      <Counter /> 
    </RecoilRoot>
  </div>
}

export default App
