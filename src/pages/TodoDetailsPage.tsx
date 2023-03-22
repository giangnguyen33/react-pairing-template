import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import TodoItem, { Todo } from "../components/TodoItem";

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
    <>
        <h1>To do Details</h1>
        {item && <TodoItem item={item} readonly={true}></TodoItem>}
    </>)
}

export default TodoDetailsPage;