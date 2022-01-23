/* eslint-disable react-hooks/exhaustive-deps */
import { InputLabel, MenuItem, FormControl, Button, Link } from '@material-ui/core';
import axios from 'axios';
import { ChangeEvent, useEffect, useState } from 'react';
import { SuccessResponse } from '../../types';
import WeatherInfo from '../WeatherInfo';
import { StyledDiv, StyledSelect, StyledButton } from './styles';

interface IContentProps {
  ufs: string[];
}

interface IBGECityResponse {
  nome: string;
}

const Content: React.FC<IContentProps> = ({ ufs }) => {
  const [cities, setCities] = useState<string[]>([]);
  const [selectedUf, setSelectedUf] = useState<string>('');
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [searchCity, setSearchCity] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<number | undefined>(undefined);
  const [weather, setWeather] = useState<SuccessResponse>(
    {} as SuccessResponse
  );

  const getCities = async (uf: string) => {
    if (!selectedUf) return;
    try {
      const response = await axios.get<IBGECityResponse[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`
      );
      const citiesName = response.data.map(city => city.nome);
      setCities(citiesName);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const getWeather = async (city: string) => {
    try {
      setIsLoading(true);
      const response = await axios.get(`/api/weather?city=${city}`);
      setSearchCity(city);
      setError(undefined);
      setWeather(response.data);
    } catch (error: any) {
      setError(error.response.status);
      setWeather({} as SuccessResponse);
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectUf = (
    event: ChangeEvent<any>
  ) => {
    if (event.target.value === selectedUf) return;
    setSelectedUf(event.target.value);
    setSelectedCity('');
  };

  const handleDefault = () => {
    const defaultLocation = {
      uf: selectedUf,
      city: selectedCity
    }
    localStorage.setItem('defaultLocation', JSON.stringify(defaultLocation));
  }

  useEffect(() => {
    const defaultLocation = localStorage.getItem('defaultLocation');
    if (defaultLocation) {
      const { uf, city } = JSON.parse(defaultLocation);
      setSelectedUf(uf);
      setSelectedCity(city);
      getWeather(city);
    }
  }, []);

  useEffect(() => {
    getCities(selectedUf as unknown as string);
  }, [selectedUf]);

  return (
    <StyledDiv>
      <header>
        <h1 className='title'>Choose a city to check the weather</h1>
      </header>
      <section>
        <FormControl fullWidth>
          <InputLabel className='label' id='uf-label'>
            State (UF)
          </InputLabel>
          <StyledSelect
            id='uf'
            label='State (UF)'
            labelId='uf-label'
            onChange={handleSelectUf}
            value={selectedUf}
          >
            {ufs.map(uf => (
              <MenuItem key={uf} value={uf}>
                {uf}
              </MenuItem>
            ))}
          </StyledSelect>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id='city-label'>City</InputLabel>
          <StyledSelect
            id='city'
            label='City'
            labelId='city-label'
            onChange={e => setSelectedCity(e.target.value as string)}
            value={selectedCity}
            disabled={!selectedUf}
          >
            {cities.map(city => (
              <MenuItem key={city} value={city}>
                {city}
              </MenuItem>
            ))}
          </StyledSelect>
          <StyledButton
            disabled={!selectedCity}
            onClick={handleDefault}
            variant='text'
          >
            Choose as default
          </StyledButton>
        </FormControl>
        <Button
          variant='contained'
          color='primary'
          fullWidth
          disabled={!selectedCity}
          onClick={() => getWeather(selectedCity)}
        >
          Check weather
        </Button>
      </section>
      <WeatherInfo
        weather={weather}
        city={searchCity}
        isLoading={isLoading}
        error={error}
      />
    </StyledDiv>
  );
};

export default Content;
