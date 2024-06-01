import styled from 'tailwind';

/* eslint-disable-next-line */
export interface ReactQueryProps {}

const StyledReactQuery = styled.div`
  color: pink;
`;

export function ReactQuery(props: ReactQueryProps) {
  return (
    <StyledReactQuery>
      <h1>Welcome to ReactQuery!</h1>
    </StyledReactQuery>
  );
}

export default ReactQuery;
