import React from 'react';
import { SuccessResponse } from '../../types';
import Error from '../Error';
import Loader from '../Loader';
import { Current, Forecast } from './subcomponents';

interface IProps {
  weather: SuccessResponse;
  city: string | undefined;
  isLoading: boolean;
  error: number | undefined;
};

const WeatherInfo = ({ weather, city, isLoading, error }: IProps) => {
  return (
    <main>
      {isLoading && <Loader />}

      {!isLoading && error === 404 && (
        <Error
          title='Oops... It seems there is no data for this city'
          subtitle='Try again with another city'
        />
      )}

      {!isLoading && error && error !== 404 && (
        <Error
          title='Oops... Something went wrong'
          subtitle='Please, try again.'
        />
      )}

      {!isLoading && weather.info && (
        <>
          <Current city={city as string} temperature={weather.info.temperature} description={weather.info.description} />
          <Forecast
            currentTemperature={weather.info.temperature}
            currentWind={weather.info.wind}
            forecast={weather.info.forecast} 
          />
        </>
      )}
    </main>
  );
};

export default WeatherInfo;
