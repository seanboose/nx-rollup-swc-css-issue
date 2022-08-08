import styled from '@emotion/styled';

import './test.module.css';

/* eslint-disable-next-line */
export interface BuildableSwcProps {}

const StyledBuildableSwc = styled.div`
  color: pink;
`;

export function BuildableSwc(props: BuildableSwcProps) {
  return (
    <StyledBuildableSwc>
      <h1>Welcome to BuildableSwc!</h1>
    </StyledBuildableSwc>
  );
}

export default BuildableSwc;
