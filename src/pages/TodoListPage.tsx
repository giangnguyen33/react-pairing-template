import React, { useEffect, useState } from "react";
import TodoList from "../components/TodoList";
import {Header,Wrapper} from "../atomic";

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
        <Wrapper>
            <Header>Todo List</Header>
            <TodoList todos={todos}></TodoList>
            
        </Wrapper>
    )
}

export default TodoListPage;