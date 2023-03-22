import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {Header, Wrapper} from "../atomic";
import  { Todo } from "../components/TodoItem";
import TodoItemForm from "../components/TodoItemForm";

const TodoDetailsPage = () => {
    const { id } = useParams();
    const [item, setItem] = useState<Todo>();
    
    const fetchData = async()=> {
        const data =  await fetch(`https://dummyjson.com/todos/${id}`)
        .then(res => res.json())
   
        setItem(data);
        return data
      }

    useEffect(()=>{
        fetchData();
    },[])
   
    return (
        <Wrapper>
            <Header>Todo Details</Header>
            {item && <TodoItemForm item={item} ></TodoItemForm>}
        </Wrapper>
    )
}

export default TodoDetailsPage;