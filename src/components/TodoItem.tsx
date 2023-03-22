import React from "react";
import { Link } from "react-router-dom";
import {Checkbox} from "../atomic/Checkbox";
import {Row}  from "../atomic";


export type Todo = {
    id: string, 
    todo: string,
    completed: boolean,
}

interface TodoItemProps {
    item: Todo;
}

const TodoItem = ({item}: TodoItemProps) =>{
    const { id,todo, completed} = item ;
    return(
        <Row>
            <Checkbox checked={completed}/>
            <Link to={id.toString()}>{todo}</Link>
        </Row>
    )

}

export default TodoItem;