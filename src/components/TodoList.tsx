import React from "react";
import TodoItem ,{ Todo } from "./TodoItem";

interface ToldoListProps {
    todos: Todo[]
}

const TodoList = ({todos}: ToldoListProps) =>{
    return(
        <ul>
            {todos.map((item,index) => {
                return(
                    <li key = {index}>
                       <TodoItem item = {item}></TodoItem> 
                    </li>
                )
            }) 
        }
        </ul>
    )

}
export default TodoList;