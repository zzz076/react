import React from 'react';
import './App.css';
import TodoList from './component/todolist';
import Form from './component/form'

function App() {

  const [inputText,setInputText] = React.useState('')
  const [todos,setTodos] = React.useState(()=>{
    const getStorge = localStorage.getItem("todos")
    if(getStorge){
      return JSON.parse(getStorge)
    }else{
      return []
    }
  }

  )
  const [status, setStatus] = React.useState('all')
  const [filterTodos,setFilterTodos] = React.useState([])

  React.useEffect(()=>{
    filterHandler()
    saveHandler()
  },[todos,status]  )



  const saveHandler = ()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const filterHandler = () =>{
    switch (status) {
      case 'completed':
        setFilterTodos(todos.filter(todo => todo.completed===true))
        break;
      case 'uncompleted':
        setFilterTodos(todos.filter(todo => todo.completed===false))
      break;
    
      default:
        setFilterTodos(todos)
        break;
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Tim's TodoList</h1>
      </header>
    <Form inputText={inputText} setInputText={setInputText} todos={todos}  setTodos={setTodos} setStatus={setStatus} status={status}/>
    <TodoList filterTodos={filterTodos} todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
