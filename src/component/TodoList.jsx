import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import TodoCard from "./TodoCard";
import { deleteTodo, editTodo, toggleComplete } from "../redux/todoSlice";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const[isEditable, setIsEditable] = useState(false)

  // handle todo done
  const handleTodoDone = (todoId) => {
    //get todo element 
    const todo = document.getElementById(todoId);
    //toggle todo element class
    todo.classList.toggle("Completed");
    dispatch(toggleComplete(todoId))
  };

  //handle todo delete
  const handleDeleteTodo = (todoId) =>{
    dispatch(deleteTodo(todoId))
  };

    //handle todo edit
    const handleTodoEdit = (todoId) => {
      setIsEditable(true);
      const todo = document.getElementById(todoId);
      todo.contenEditable = true;
      todo.focus();
      dispatch(
        editTodo({
          id: todoId,
          text: todo.innerText,
        })
      )
    }
    


  return  <div>
    {todos.map((todo) =>
        <TodoCard
        key={todo.id}
        todoText={todo.text}
        todoId={todo.id}
        todoDone={() => handleTodoDone(todo.id)}
        todoDelete={() => handleDeleteTodo (todo.id)}
        todoEdit={() => handleTodoEdit (todo.innerText)}
        />
    )}
    </div>
  
};

export default TodoList;