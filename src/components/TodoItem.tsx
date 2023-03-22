import React from "react";
import { Link } from "react-router-dom";

export type Todo = {
    id: string, 
    todo: string,
    completed: boolean,
}

interface TodoItemProps {
    item: Todo
}

const TodoItem = ({item}: TodoItemProps) =>{
    const { id,todo, completed} = item ;
    return(
        <div>
            <input type='checkbox' checked={completed} onChange={()=>{}}></input>
            <Link to={id.toString()}>{todo}</Link>
        </div>
    )

}

export default TodoItem;