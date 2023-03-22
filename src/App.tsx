import React from "react";
import styled from "styled-components";

const ExampleStyledDiv = styled.div`
  font-family: sans-serif;
  font-size: 1.5rem;
  color: #333;
  margin: 0 auto;
  span {
    font-weight: 900;
  }
`;

export default function App() {
  return (
    <div>
      <ExampleStyledDiv>
        <span>Hello</span> world!
      </ExampleStyledDiv>
    </div>
  );
}
