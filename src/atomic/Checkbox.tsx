import React, { useState } from "react";
import styled from "styled-components";

const StyledCheckbox = styled.input({
    width: 16,
    height: 16,
    marginRight: 12,
  });
  
interface CheckboxProps {
    checked: boolean;
    disabled?: boolean
}

export const Checkbox = ({checked, disabled}:CheckboxProps) =>{
    const [checkboxChecked, setCheckboxChecked] = useState(checked);
    const handleOnChange = (e:any)=>{
        setCheckboxChecked(e.target.checked);
    }
    return (
        <StyledCheckbox type='checkbox' checked={checkboxChecked} onChange={handleOnChange} disabled={disabled}></StyledCheckbox>
    )
}