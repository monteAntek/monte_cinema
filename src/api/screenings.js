import { defaultClient } from '@/api/client';

export const getAllScreenings = async () => {
  const { data } = await defaultClient.get('/seances');
  return data;
};

export const getDailyScreenings = async (date) => {
  const { data } = await defaultClient.get(`/seances?date=${date}`);
  return data;
};
