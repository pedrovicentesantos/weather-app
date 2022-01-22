import { Card, CardContent } from '@material-ui/core';
import { StyledCard } from './styles';

interface IErrorProps {
  title: string;
  subtitle: string;
}

const Error: React.FC<IErrorProps> = ({ title, subtitle }) => {
  return (
    <StyledCard variant='outlined'>
      <CardContent>
        <h3 className='text'>{title}</h3>
        <h4>{subtitle}</h4>
      </CardContent>
    </StyledCard>
  );
};

export default Error;
