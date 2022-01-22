import formatTemperatureString from '../../../../helpers/formatTemperatureString';
import { StyledCard, StyledCardContent } from './styles';

interface IProps {
  city: string;
  temperature: string;
  description: string;
}

const Current: React.FC<IProps> = ({ city, temperature, description }) => {
  const date = new Date().toDateString();
  const formattedTemperature = formatTemperatureString(temperature);
  return (
    <StyledCard>
      <StyledCardContent>
        <section className='first'>
          <h2>{city}</h2>
          <p>{date}</p>
        </section>
        <section className='second'>
          <p className='temperature'>{formattedTemperature}</p>
          <p className='description'>{description}</p>
        </section>
      </StyledCardContent>
    </StyledCard>
  );
};

export default Current;
