
import './App.css'

function App() {

  return (
    <>
    <Todo todo ={day1Todos} />
    </>
  )
}

let  day1Todos: TodoType = {
  title: "go to gym",
  description: "go to gym",
  done: false
}

interface TodoType {
  title: string,
  description: string,
  done: boolean
}

interface TodoInput {
  todo: TodoType
}

function Todo({todo}: TodoInput){

  return <div>
    <h1>{todo.title}</h1>
    <h1>{todo.description}</h1>
  </div>
}

export default App
