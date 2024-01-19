import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SecondLibProps {}

const StyledSecondLib = styled.div`
  color: pink;
`;

export function SecondLib(props: SecondLibProps) {
  return (
    <StyledSecondLib>
      <h1>Welcome to SecondLib!</h1>
    </StyledSecondLib>
  );
}

export default SecondLib;
