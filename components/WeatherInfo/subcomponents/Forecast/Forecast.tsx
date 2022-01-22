import React from 'react';
import { Forecast as ForecastInterface } from '../../../../types/APIResponse';
import Item from './Item/Item';
import { StyledDiv } from './styles';

interface IProps {
  forecast: ForecastInterface[];
  currentTemperature: string;
  currentWind: string;
}

const Forecast: React.FC<IProps> = ({ currentTemperature, currentWind, forecast }) => {
  return (
    <StyledDiv>
      <h3>Forecast</h3>
      <Item day='0' temperature={currentTemperature} wind={currentWind} />
      {forecast.map(({ day, temperature, wind }) => (
        <Item key={day} day={day} temperature={temperature} wind={wind} />
      ))}
    </StyledDiv>
  );
};

export default Forecast;
