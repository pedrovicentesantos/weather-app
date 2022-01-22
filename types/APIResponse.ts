export interface Forecast {
  day: string;
  temperature: string;
  wind: string;
}

export default interface APIResponse {
  temperature: string;
  wind: string;
  description: string;
  forecast: Forecast[];
}
