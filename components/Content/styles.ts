import { Button, Select } from '@material-ui/core';
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

const StyledButton = styled(Button)`
  align-self: end;
  margin-bottom: 1rem !important;
  margin-top: -0.75rem !important;
  text-transform: none !important;
  padding: 0 !important;
  font-size: 12px !important;
  color: #d2d2d2 !important;

  &:hover {
    background: none !important;
  }
`;

export { StyledDiv, StyledSelect, StyledButton };
