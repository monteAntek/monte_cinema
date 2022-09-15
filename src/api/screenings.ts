import { defaultClient } from '@/api/client';

import type { Screening } from '@/types/screening';

export const getScreeningsByDate = async (
  date: string
): Promise<Screening[]> => {
  const { data } = await defaultClient.get(`/seances?date=${date}`);
  return data;
};
