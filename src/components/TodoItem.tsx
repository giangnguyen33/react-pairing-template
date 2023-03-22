import React from "react";
import { Link } from "react-router-dom";

export type Todo = {
    id: string, 
    todo: string,
    completed: boolean,
}

interface TodoItemProps {
    item: Todo;
    readonly?: boolean;
}

const TodoItem = ({item, readonly}: TodoItemProps) =>{
    const { id,todo, completed} = item ;
    return(
        <div>
            <input type='checkbox' checked={completed} onChange={()=>{}} readOnly={readonly}></input>
            {readonly ? <span>{todo}</span> :<Link to={id.toString()}>{todo}</Link>}
        </div>
    )

}

export default TodoItem;