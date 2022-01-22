import Thermostat from '@mui/icons-material/Thermostat';
import Air from '@mui/icons-material/Air';
import formatTemperatureString from '../../../../../helpers/formatTemperatureString';
import StyledItem from './styles';

interface IProps {
  day: string;
  temperature: string;
  wind: string;
}

const Item: React.FC<IProps> = ({ day, temperature, wind }) => {
  const today = new Date();
  const date = new Date(
    today.getTime() +
    parseInt(day, 10) * 24 * 60 * 60 * 1000
  );
  const dayOfWeek = date.toLocaleString('en-us', { weekday: 'short' });
  const formattedTemperature = formatTemperatureString(temperature);
  console.log(formattedTemperature)

  return (
    formattedTemperature ? (
      <StyledItem>
        <p className='day'>{day === '0' ? 'Today' : dayOfWeek}</p>
        <div className="field">
          <Thermostat />
          <p>{formattedTemperature}</p>
        </div>
        <div className="field">
        <Air />
        <p>{wind}</p>
        </div>
      </StyledItem>
    ) : null
  );
};

export default Item;
