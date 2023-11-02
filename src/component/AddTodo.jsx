import { useState } from "react";
import { useDispatch } from "react-redux";
import "./Todo.css"
import { addTodo } from "../redux/todoSlice";

const AddTodo = () => {
    const[todoText, setTodoText] =useState("");
    const dispatch = useDispatch ();

    //handle add todo
    const handleAddTodo =() =>{
        const todo = {
            id: Date.now(),
            text: todoText,
            completed: false
        }
        dispatch(addTodo(todo))
        setTodoText("")
    };
  return (
    <div>
        <input type="text"  value={todoText} onChange={(e) => setTodoText(e.target.value)}/>
        <button onClick={handleAddTodo}>Add</button>
    </div>
  )
}

export default AddTodo;