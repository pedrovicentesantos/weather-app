import { Card, CardContent } from '@material-ui/core';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  background-color: #283459 !important;

  @media only screen and (min-width: 768px) {
    margin-top: 1.5rem;
  }

  .first {
    h2 {
      font-size: 22px;
      font-weight: 400;
      margin-bottom: 0.25rem;
    }

    p {
      font-size: 0.75rem;
    }
  }

  .second {
    margin-top: 0.75rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .temperature {
      font-weight: 700;
      font-size: 1.5rem;
    }
  }
`;

const StyledCardContent = styled(CardContent)`
  padding: 1rem !important;
`;

export { StyledCard, StyledCardContent };
