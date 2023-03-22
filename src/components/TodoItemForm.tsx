
import React from "react"
import { Form } from "react-router-dom"
import styled from "styled-components";
import {Checkbox, InputText, Row }from "../atomic";;
import { Todo } from "./TodoItem"
  

const StyledButton = styled.button({
    width: 100,
    height: 30,
    marginRight: 12,
  });


interface TodoItemProps {
    item: Todo;
}

const TodoItemForm = ({item}:TodoItemProps)=>{
    const { todo, completed} = item ;

    return <Form>
        <Row><
            InputText value={todo}></InputText>
        </Row>
        <Row>
            <Checkbox checked={completed}/>
        </Row>
        <StyledButton onSubmit={()=>{}}>Submit</StyledButton>
    </Form>
}

export default TodoItemForm