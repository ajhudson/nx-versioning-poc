import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SecondBoringLabelProps {}

const StyledSecondBoringLabel = styled.div`
  color: pink;
`;

export function SecondBoringLabel(props: SecondBoringLabelProps) {
  return (
    <StyledSecondBoringLabel>
      <h1>Welcome to SecondBoringLabel!</h1>
    </StyledSecondBoringLabel>
  );
}

export default SecondBoringLabel;
