import { useState } from 'react'
import { useEffect } from 'react'

import Header from './components/Header'
import Content from './components/Content'
import ShowTodos from './components/ShowTodos'
import Footer from './components/Footer';

function App() {

  const [todos, setTodos] = useState(() => {
    if (localStorage.getItem("tasks")){
      return JSON.parse(localStorage.getItem('tasks'))
    }
    else{
      return []
    }
  })

  // adding the tasks
  let addTodos = (todo) => {
    setTodos((todos) => [...todos, todo])
  }

  // save tasks on localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(todos))
  })

  // get tasks from localStorage
  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks'))
    if (tasks) {
      setTodos(tasks)
    }
  }, []);

  // delete tasks
  let delete_a_task = (taskId) => {
    setTodos((todos) => todos.filter((todo) => todo.id != taskId))
  }
  let clear_list = () => {

    setTodos([])
  }

  // mark the work done
  let mark_done = (taskId) => {
    setTodos((todos) =>
      todos.map((tasks) =>
        tasks.id == taskId ? {...tasks, done: 'true'} : tasks
      )
    )
  }

  // marking undone
  let mark_unDone = (taskId) => {
    setTodos((todos) =>
      todos.map((tasks) =>
        tasks.id == taskId ? { ...tasks, done: 'false' } : tasks
      )
    )
  }

  return (
    <>
      <Header appName={"basic react todo APP"} />
      <Content addTodo={addTodos} />

      <ShowTodos todos={todos} deleteTask={delete_a_task} clearList={clear_list} toggleDone={mark_done} toggleUndone={mark_unDone} />

      <Footer />
    </>
  )
}

export default App
