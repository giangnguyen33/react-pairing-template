import React, { useEffect, useState } from "react";
import { Todo } from "../components/TodoItem";
import TodoList from "../components/TodoList";

const TodoListPage = () => {
    const [todos, setTodos] = useState([]);

    const fetchData = async()=> {
        const data =  await fetch('https://dummyjson.com/todos')
        .then(res => res.json())
   
        setTodos(data.todos);
        return data
      }

    useEffect(()=>{
        fetchData();
    },[])


    return (
    <>
    <h1>To do List</h1>
    <TodoList todos={todos}></TodoList>
        
    </>)
}

export default TodoListPage;