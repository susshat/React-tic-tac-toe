import styled from "@emotion/styled";
import { useState } from "react";

export interface SquareProps {
  value: 'X'|'O'|null;
  onClick(): void;
}

const StyledSquare = styled.button`
  width: 34px;
  height: 34px;
  background: #fff;
  border: 1px solid #999;
  padding: 0;
  font-size: 24px;
  font-weight: bold;
`;

export default function Square(prop: SquareProps) {
  const [value, setValue] = useState<string | null>(null);

//   When we modified the Square to be a function component, 
//   we also changed onClick = {() => this.props.onClick()
// } to a shorter onClick = { props.onClick }(note the lack of 
//   parentheses on both sides).

  return <StyledSquare onClick={prop.onClick}>
    {prop.value}
  </StyledSquare>;
}
