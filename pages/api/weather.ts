import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { BASE_URL } from '../../constants';
import { APIResponse, ErrorResponse, SuccessResponse } from '../../types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SuccessResponse | ErrorResponse>
) {
  try {
    const { city } = req.query;
    const encodedCity = encodeURIComponent(city as string);
    const api = axios.create({
      baseURL: BASE_URL
    });
    const response = await api.get(encodedCity);
    const weatherInfo: APIResponse = response.data;

    res.status(200).json({ info: weatherInfo });
  } catch (err: any) {
    if (err.response.status === 404) {
      return res.status(404).json({ error: { message: 'City not found' } });
    }
    res.status(500).json({ error: { message: err.message } });
  }
}
