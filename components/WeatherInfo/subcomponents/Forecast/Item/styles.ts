import styled from 'styled-components';
import { Paper } from '@material-ui/core';

const StyledItem = styled(Paper)`
  border: 3px solid #283459;
  background: none !important;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  padding: 1rem 0.5rem;
  margin-bottom: 1rem;

  .day {
    text-transform: capitalize;
  }

  .field {
    display: flex;
    align-items: center;

    p {
      margin-left: 0.25rem;
    }
  }
`;

export default StyledItem;
