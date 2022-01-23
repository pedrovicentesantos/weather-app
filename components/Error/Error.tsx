import { Card, CardContent } from '@material-ui/core';
import { StyledCard, StyledCardContent } from './styles';

interface IErrorProps {
  title: string;
  subtitle: string;
}

const Error: React.FC<IErrorProps> = ({ title, subtitle }) => {
  return (
    <StyledCard variant='outlined'>
      <StyledCardContent>
        <h3 className='text'>{title}</h3>
        <h4>{subtitle}</h4>
      </StyledCardContent>
    </StyledCard>
  );
};

export default Error;
