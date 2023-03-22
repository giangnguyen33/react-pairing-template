
import React from "react"
import { Form } from "react-router-dom"
import { Todo } from "./TodoItem"

interface TodoItemProps {
    item: Todo;
}

const TodoItemForm = ({item}:TodoItemProps)=>{
    const { todo, completed} = item ;

    return <Form>
        <div>
            <span>Todo:</span><input type="text" value={todo}></input>
        </div>
        <div>
            <span>Completed:</span><input type="checkbox" checked={completed}></input>
        </div>
        <button onSubmit={()=>{}}>Submit</button>
    </Form>
}

export default TodoItemForm