import styled from "@emotion/styled";
import Board from "./Board";
import Log from "./Log";

type LayoutProps = {
  gap: number;
};

const Row = styled.div<LayoutProps>`
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.gap}px;
`;

const Column = styled.div<LayoutProps>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap}px;
`;

export default function Game() {
  return (
    <Row gap={20}>
      <Column gap={20}>
        <div>Welcome to YOU NOT WWEENEER</div>
        <Board />
      </Column>
      <Log />
    </Row>
  );
}
