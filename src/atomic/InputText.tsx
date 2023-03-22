import React, { ChangeEventHandler, useState } from "react";
import styled from "styled-components";

const StyledTextarea = styled.textarea({
    width: "70%"
})

interface InputTextProps {
    value: string;
}

export const InputText = ({value}:InputTextProps) => {
    const [inputValue, setInputValue] = useState(value);
    const handleOnChange = (e:any) => {
        setInputValue(e.target.value)
    }
    return (  <StyledTextarea value={inputValue} onChange={handleOnChange}/>)
}
