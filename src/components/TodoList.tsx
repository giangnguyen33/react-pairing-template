import React from "react";
import styled from "styled-components";
import TodoItem ,{ Todo } from "./TodoItem";

const List = styled.ul({
    width: "100%",
    listStyle: "none",
  });
  
interface ToldoListProps {
    todos: Todo[]
}

const TodoList = ({todos}: ToldoListProps) =>{
    return(
        <List>
            {todos.map((item, index) => (<TodoItem key={index} item = {item}></TodoItem> )) }
        </List>
    )

}
export default TodoList;