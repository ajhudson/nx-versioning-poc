import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FirstBoringLabelProps {}

const StyledFirstBoringLabel = styled.div`
  color: pink;
`;

export function FirstBoringLabel(props: FirstBoringLabelProps) {
  return (
    <StyledFirstBoringLabel>
      <h1>Welcome to FirstBoringLabel!</h1>
    </StyledFirstBoringLabel>
  );
}

export default FirstBoringLabel;
