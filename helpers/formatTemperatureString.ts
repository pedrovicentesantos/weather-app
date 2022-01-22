const formatTemperatureString = (temperature: string): string => {
  if (temperature.trim().startsWith('+')) return temperature.slice(1);
  if (temperature.trim().startsWith('°')) return '';
  return temperature;
};

export default formatTemperatureString;
