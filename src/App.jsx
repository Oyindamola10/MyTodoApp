import "./App.css"
import AddTodo from './component/AddTodo'
import TodoList from './component/TodoList'

const App = () => {
  return (
    <>
    <div>
      <AddTodo></AddTodo>
    </div>

    <div>
      <TodoList></TodoList>
    </div>
    </>
  )
}

export default App;