import { Select } from '@material-ui/core';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr;
  gap: 2rem;
  height: 100%;

  .title {
    font-size: 20px;
  }
`;

const StyledSelect = styled(Select)`
  margin-bottom: 1rem;
`;

export { StyledDiv, StyledSelect };
