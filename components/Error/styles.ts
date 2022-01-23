import { Card, CardContent } from '@material-ui/core';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  height: 100%;
  min-height: 80%;
  font-size: 1.5rem;

  .text {
    margin: 0 0 2rem;
  }

  @media only screen and (min-width: 768px) {
    max-height: 50%;
    min-height: unset;
  }
`;

const StyledCardContent = styled(CardContent)`
  height: 100%;
`;

export { StyledCard, StyledCardContent };
